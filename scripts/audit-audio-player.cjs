/** Read-only behaviour audit for the blog audio reader (ListenToArticle).
 *
 * The three standing gates (tsc / lint / build) cannot see interaction logic,
 * and this player has one rule that must never regress: the section that lights
 * up in the blog content UI is the section the voice reads — tapping a chapter
 * (or prev/next) seeks to it AND narrates it.
 *
 * Renders the real component in jsdom against the server-rendered article DOM
 * with a scripted <audio> element, then drives the transport and chapter list
 * and asserts where the playhead lands, what is highlighted, and whether
 * playback is running. Also covers the two failure modes that made a selection
 * look "highlighted but silent": a pre-play seek dropped by the element, and a
 * transport label that drifted out of sync with the element.
 *
 * Usage: BASE_URL=http://127.0.0.1:8797 node scripts/audit-audio-player.cjs [slug ...]
 *   (defaults to every slug in public/audio/manifest.json)
 * Prerequisites: a running dev or preview server, and `npm i --no-save jsdom`
 * (esbuild and cheerio already ship with the dev dependencies). jsdom is
 * deliberately not a declared dependency — this is a local audit, not a build
 * step, and `npm i --no-save` leaves both lockfiles untouched.
 */
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const base = process.env.BASE_URL || "http://127.0.0.1:8797";
const { load } = require(path.join(root, "node_modules/cheerio"));
let JSDOM;
try {
  ({ JSDOM } = require(path.join(root, "node_modules/jsdom")));
} catch {
  console.error("This audit needs jsdom: npm i --no-save jsdom");
  process.exit(2);
}
const manifest = require(path.join(root, "public/audio/manifest.json"));
const sectionSource = fs.readFileSync(path.join(root, "src/lib/articleSections.ts"), "utf8");
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(manifest);

/** Chapter starts/titles as the player reads them (src/lib/articleSections.ts). */
function chaptersFor(slug) {
  const start = sectionSource.indexOf('"' + slug + '": [');
  const seg = sectionSource.slice(start, sectionSource.indexOf("],", start));
  const starts = [...seg.matchAll(/startSec: ([0-9.]+)/g)].map((m) => Number(m[1]));
  const titles = [...seg.matchAll(/title: ("(?:[^"\\]|\\.)*")/g)].map((m) => JSON.parse(m[1]));
  return starts.map((startSec, i) => ({ startSec, title: titles[i] }));
}

/** Scripted HTMLMediaElement: CBR-ish playback, real seek/event semantics. */
function installMedia(win, totalSeconds) {
  const proto = win.HTMLMediaElement.prototype;
  const state = new WeakMap();
  const S = (el) => {
    let s = state.get(el);
    if (!s) {
      s = {
        ct: 0,
        dur: NaN,
        paused: true,
        ended: false,
        rate: 1,
        timer: null,
        ready: false,
        failSeeks: 0,
      };
      state.set(el, s);
    }
    return s;
  };
  const fire = (el, type) => el.dispatchEvent(new win.Event(type));
  const stop = (el) => {
    const s = S(el);
    if (s.timer) win.clearInterval(s.timer);
    s.timer = null;
  };
  const start = (el) => {
    const s = S(el);
    stop(el);
    s.timer = win.setInterval(() => {
      if (s.paused) return;
      s.ct += 0.05 * s.rate;
      if (s.ct >= s.dur) {
        s.ct = s.dur;
        s.paused = true;
        s.ended = true;
        stop(el);
        fire(el, "timeupdate");
        fire(el, "ended");
        return;
      }
      fire(el, "timeupdate");
    }, 50);
  };
  Object.defineProperty(proto, "currentTime", {
    configurable: true,
    get() {
      return S(this).ct;
    },
    set(value) {
      const s = S(this);
      if (!Number.isFinite(value)) return;
      if (s.failSeeks > 0) {
        s.failSeeks -= 1; // simulate a mobile browser dropping the seek
        return;
      }
      s.ct = Math.max(0, value);
      fire(this, "seeking");
      win.setTimeout(() => {
        fire(this, "seeked");
        fire(this, "timeupdate");
      }, 0);
    },
  });
  Object.defineProperty(proto, "duration", {
    configurable: true,
    get() {
      const d = S(this).dur;
      return Number.isFinite(d) ? d : NaN;
    },
  });
  Object.defineProperty(proto, "paused", {
    configurable: true,
    get() {
      return S(this).paused;
    },
  });
  Object.defineProperty(proto, "ended", {
    configurable: true,
    get() {
      return S(this).ended;
    },
  });
  Object.defineProperty(proto, "networkState", {
    configurable: true,
    get() {
      return S(this).ready ? 1 : 0;
    },
  });
  Object.defineProperty(proto, "playbackRate", {
    configurable: true,
    get() {
      return S(this).rate;
    },
    set(value) {
      S(this).rate = value;
    },
  });
  proto.play = function () {
    const s = S(this);
    if (!s.ready) return Promise.reject(new Error("metadata not loaded"));
    s.paused = false;
    s.ended = false;
    fire(this, "play");
    fire(this, "playing");
    start(this);
    return Promise.resolve();
  };
  proto.pause = function () {
    const s = S(this);
    if (s.paused) return;
    s.paused = true;
    stop(this);
    fire(this, "pause");
  };
  proto.load = function () {
    const s = S(this);
    const el = this;
    s.ct = 0;
    s.paused = true;
    s.ready = false;
    stop(this);
    win.setTimeout(
      () => {
        s.dur = totalSeconds;
        s.ready = true;
        fire(el, "loadedmetadata");
      },
      Number(process.env.META_DELAY || 0),
    );
  };
  return { S };
}

/** Bundles the real component (and React) for the jsdom document. */
function bundleComponent() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "vocolens-player-audit-"));
  const entry = path.join(tmp, "entry.tsx");
  // Absolute specifier: the entry lives in the OS temp dir, so a relative
  // import would resolve against the wrong directory.
  const component = path
    .join(root, "src/components/vocolens/ListenToArticle")
    .split(path.sep)
    .join("/");
  fs.writeFileSync(
    entry,
    [
      'import { createRoot } from "react-dom/client";',
      `import { ListenToArticle } from "${component}";`,
      "export function mount(el: HTMLElement, slug: string) {",
      "  const root = createRoot(el);",
      "  root.render(<ListenToArticle slug={slug} />);",
      "  return root;",
      "}",
      "",
    ].join("\n"),
  );
  const outfile = path.join(tmp, "component.mjs");
  require(path.join(root, "node_modules/esbuild")).buildSync({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "browser",
    jsx: "automatic",
    outfile,
    absWorkingDir: root,
    nodePaths: [path.join(root, "node_modules")],
    define: { "process.env.NODE_ENV": '"development"' },
    logLevel: "warning",
  });
  return { outfile, tmp };
}

async function audit(slug) {
  const chapters = chaptersFor(slug);
  if (chapters.length === 0) return { slug, failures: 0, checks: 0 };
  const total = manifest[slug].minutes * 60;
  const chapterAt = (t) => {
    let idx = 0;
    for (let i = 0; i < chapters.length; i += 1) if (t >= chapters[i].startSec) idx = i;
    return idx;
  };
  const html = await (await fetch(`${base}/resources/${slug}`)).text();
  const $ = load(html);
  const dom = new JSDOM(
    `<!doctype html><html><body><div id="mount"></div>${$.html($("#article-root"))}</body></html>`,
    { pretendToBeVisual: true, url: "http://localhost/" },
  );
  const win = dom.window;
  globalThis.window = win;
  for (const key of [
    "document",
    "navigator",
    "HTMLElement",
    "Element",
    "Node",
    "Event",
    "MouseEvent",
    "getComputedStyle",
    "requestAnimationFrame",
    "cancelAnimationFrame",
    "MutationObserver",
  ])
    globalThis[key] = win[key];
  globalThis.performance = { now: () => Date.now() };
  win.matchMedia = () => ({
    matches: false,
    media: "",
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
  globalThis.matchMedia = win.matchMedia;
  win.Element.prototype.scrollIntoView = function () {};
  const media = installMedia(win, total);
  const { outfile, tmp } = bundleComponent();
  const { mount } = await import("file://" + outfile);
  const wait = (ms) => new Promise((resolve) => win.setTimeout(resolve, ms));

  mount(win.document.getElementById("mount"), slug);
  await wait(80);
  const audio = win.document.querySelector("audio");
  const P = '[aria-label="Listen to this article"] ';
  const transport = () =>
    [...win.document.querySelectorAll(P + "button")].find((b) =>
      /^(Listen|Pause)$/.test(b.textContent.trim()),
    );
  const rows = () => [...win.document.querySelectorAll(P + "ol button")];
  const openChapters = async () => {
    if (rows().length > 0) return;
    [...win.document.querySelectorAll(P + "button")]
      .find((b) => /Chapters/.test(b.textContent))
      .dispatchEvent(new win.MouseEvent("click", { bubbles: true }));
    await wait(60);
  };
  const tap = async (el) => {
    el.dispatchEvent(new win.MouseEvent("click", { bubbles: true }));
    await wait(120);
  };
  const snapshot = () => {
    const articleRoot = win.document.getElementById("article-root");
    const blocks = [articleRoot.firstElementChild];
    articleRoot
      .querySelectorAll(
        'section[aria-labelledby]:not([aria-labelledby="section-faq"]):not([aria-labelledby="section-overview"])',
      )
      .forEach((el) => blocks.push(el));
    const highlighted = win.document.querySelector("#article-root .vocolens-reading");
    const st = media.S(audio);
    return {
      ct: st.ct,
      paused: st.paused,
      btn: transport().textContent.trim(),
      read: chapterAt(st.ct),
      highlight: highlighted ? blocks.indexOf(highlighted) : -1,
      label: (win.document.querySelector(P + ".text-primary")?.textContent || "")
        .replace("§ ", "")
        .trim(),
    };
  };

  let failures = 0;
  let checks = 0;
  const name = (i) => (chapters[i] ? chapters[i].title.slice(0, 28) : "none");
  const check = (label, ok, snap, extra = "") => {
    checks += 1;
    if (!ok) failures += 1;
    console.log(
      `${ok ? "PASS" : "FAIL"}  ${label}\n` +
        `      ct=${snap.ct.toFixed(2)} playing=${!snap.paused} btn=${snap.btn} ` +
        `reads="${name(snap.read)}" highlight="${name(snap.highlight)}" §="${snap.label.slice(0, 28)}" ${extra}`,
    );
  };
  const finish = () => {
    // jsdom's visual rAF loop keeps the process alive otherwise.
    win.close();
    fs.rmSync(tmp, { recursive: true, force: true });
    return { slug, failures, checks };
  };

  console.log(`\n== ${slug} (${chapters.length} chapters, ${total}s)`);
  if (process.env.PRE_META === "1") {
    await openChapters();
    await tap(rows()[Math.min(2, chapters.length - 1)]);
    await wait(Number(process.env.META_DELAY || 0) + 400);
    const snap = snapshot();
    check(
      "0. a tap before metadata lands still reads that chapter",
      !snap.paused && snap.read === 2 && snap.highlight === 2,
      snap,
    );
    return finish();
  }

  await tap(transport());
  let snap = snapshot();
  check(
    "1. a fresh Listen reads chapter 0",
    !snap.paused && snap.read === 0 && snap.highlight === 0,
    snap,
  );
  await tap(transport());
  snap = snapshot();
  check("2. Pause stops it", snap.paused && snap.btn === "Listen", snap);

  const mid = Math.min(3, chapters.length - 1);
  const last = chapters.length - 1;
  await openChapters();
  await tap(rows()[mid]);
  snap = snapshot();
  check(
    `3. tapping chapter ${mid} while paused reads it`,
    !snap.paused && snap.read === mid && snap.highlight === mid,
    snap,
  );
  await tap(rows()[0]);
  snap = snapshot();
  check(
    "4. tapping chapter 0 reads it",
    !snap.paused && snap.read === 0 && snap.highlight === 0,
    snap,
  );
  await tap(rows()[last]);
  snap = snapshot();
  check(
    `5. tapping the last chapter (${last}) while playing reads it`,
    !snap.paused && snap.read === last && snap.highlight === last,
    snap,
  );
  await tap(win.document.querySelector(P + 'button[aria-label="Previous section"]'));
  snap = snapshot();
  check(
    "6. previous section reads the previous chapter",
    !snap.paused && snap.read === last - 1 && snap.highlight === last - 1,
    snap,
  );
  await tap(win.document.querySelector(P + 'button[aria-label="Next section"]'));
  snap = snapshot();
  check(
    "7. next section reads the next chapter",
    !snap.paused && snap.read === last && snap.highlight === last,
    snap,
  );

  await tap(transport());
  media.S(audio).failSeeks = 1;
  await openChapters();
  await tap(rows()[1]);
  await wait(200);
  snap = snapshot();
  check(
    "8. a dropped pre-play seek is re-asserted",
    !snap.paused && snap.read === 1 && snap.highlight === 1,
    snap,
  );

  await wait(2500);
  await tap(transport());
  const pausedAt = snapshot();
  await tap(transport());
  snap = snapshot();
  check(
    "9. resuming continues where it paused",
    !snap.paused && Math.abs(snap.ct - pausedAt.ct) < 1.5 && snap.highlight === pausedAt.highlight,
    snap,
    `pausedAt=${pausedAt.ct.toFixed(2)}`,
  );
  return finish();
}

(async () => {
  const results = [];
  for (const slug of slugs) results.push(await audit(slug));
  const failures = results.reduce((n, r) => n + r.failures, 0);
  const checks = results.reduce((n, r) => n + r.checks, 0);
  console.log(
    `\n${checks} checks across ${results.length} article(s): ${failures === 0 ? "all passed" : failures + " failed"}`,
  );
  process.exit(failures === 0 ? 0 : 1);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
