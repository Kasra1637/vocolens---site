/** Read-only SSR regression audit. Run against dev or production preview:
 * BASE_URL=http://127.0.0.1:8797 node scripts/audit-resource-seo.cjs
 */
const assert = require("node:assert/strict");
const { load } = require("cheerio");
const base = process.env.BASE_URL || "http://127.0.0.1:8797";
const origin = "https://vocolens.com";
const briefs = require("../test_reports/resource-refresh-content.json");
const refreshed = new Set([
  ...briefs.map((b) => b.slug),
  "emotional-awareness-patterns",
  "science-of-reflection",
]);
const audioVerified = new Set([
  ...refreshed,
  "emotional-granularity",
  "valence-and-arousal",
  "plutchik-emotion-wheel",
]);
async function get(route) {
  const res = await fetch(base + route, { signal: AbortSignal.timeout(30000) });
  assert.equal(res.status, 200, `${route}: HTTP ${res.status}`);
  assert(!/noindex/i.test(res.headers.get("x-robots-tag") || ""), `${route}: X-Robots-Tag`);
  return await res.text();
}
(async () => {
  const hub = load(await get("/resources"));
  const paths = [
    ...new Set(
      hub('a[href^="/resources/"]')
        .toArray()
        .map((e) => hub(e).attr("href")),
    ),
  ];
  const expected = process.env.EXPECTED_ARTICLES
    ? Number(process.env.EXPECTED_ARTICLES)
    : require("node:fs")
        .readdirSync(require("node:path").join(__dirname, "../src/routes"))
        .filter(
          (name) =>
            name.startsWith("resources.") &&
            name.endsWith(".tsx") &&
            name !== "resources.index.tsx" &&
            name !== "resources.tsx",
        ).length;
  assert.equal(paths.length, expected, "resource hub must expose every article route");
  const xml = load(await get("/sitemap.xml"), { xmlMode: true });
  const sitemap = xml("loc")
    .toArray()
    .map((e) => xml(e).text());
  assert.match(await get("/robots.txt"), /Allow: \/[\r\n]/);
  const titles = new Set(),
    descriptions = new Set();
  const cache = new Map();
  const results = [];
  for (const route of paths) {
    const $ = load(await get(route));
    assert.equal($("h1").length, 1, `${route}: one H1`);
    const title = $("title").text();
    const description = $('meta[name="description"]').attr("content");
    assert(title && !titles.has(title), `${route}: unique title`);
    assert(description && !descriptions.has(description), `${route}: unique description`);
    assert(title.length < 60, `${route}: title length ${title.length} >= 60`);
    assert(description.length < 155, `${route}: description length ${description.length} >= 155`);
    if (route.endsWith("plutchik-emotion-wheel")) {
      // Intentional exception: the HTML <title> was shortened (50 chars) while
      // og:title / twitter:title deliberately retain the legacy title.
      assert.equal(
        $('meta[property="og:title"]').attr("content"),
        "Plutchik's Emotion Wheel Explained: 8 Families, 3 Steps",
        `${route}: og:title`,
      );
      assert.equal(
        $('meta[name="twitter:title"]').attr("content"),
        "Plutchik's Emotion Wheel Explained: 8 Families, 3 Steps",
        `${route}: twitter:title`,
      );
    } else {
      assert.equal($('meta[property="og:title"]').attr("content"), title, `${route}: og:title`);
      assert.equal(
        $('meta[name="twitter:title"]').attr("content"),
        title,
        `${route}: twitter:title`,
      );
    }
    assert.equal(
      $('meta[property="og:description"]').attr("content"),
      description,
      `${route}: og:description`,
    );
    assert.equal(
      $('meta[name="twitter:description"]').attr("content"),
      description,
      `${route}: twitter:description`,
    );
    assert.equal(
      $('meta[name="twitter:card"]').attr("content"),
      "summary_large_image",
      `${route}: twitter:card`,
    );
    assert(
      $('meta[property="og:image"]').attr("content") !== "https://vocolens.com/vocolens-logo.png",
      `${route}: must not fall back to site logo`,
    );
    titles.add(title);
    descriptions.add(description);
    assert.equal($('link[rel="canonical"]').length, 1, `${route}: one canonical`);
    assert.equal($('link[rel="canonical"]').attr("href"), origin + route);
    assert(!/noindex/i.test($('meta[name="robots"]').attr("content") || ""));
    assert(sitemap.includes(origin + route), `${route}: sitemap inclusion`);
    assert($("#article-root").text().trim().length > 1500, `${route}: initial SSR article text`);
    const schemas = $('script[type="application/ld+json"]')
      .toArray()
      .map((e) => JSON.parse($(e).text()));
    const article = schemas.find((s) => s["@type"] === "Article");
    assert(
      article && article.headline && article.datePublished && article.dateModified,
      `${route}: Article fields`,
    );
    assert.equal(article.mainEntityOfPage["@id"], origin + route);
    assert(article.dateModified >= article.datePublished, `${route}: chronological dates`);
    assert.equal(article.breadcrumb["@type"], "BreadcrumbList");
    const faq = schemas.find((s) => s["@type"] === "FAQPage");
    assert(faq && faq.mainEntity.length > 0, `${route}: FAQ schema`);
    const details = $("details").toArray();
    for (const q of faq.mainEntity) {
      const detail = details.find((e) => $(e).find("summary").text().trim() === q.name);
      assert(detail, `${route}: FAQ question matches visible content`);
      assert.equal(
        $(detail).find("summary").next().text().trim(),
        q.acceptedAnswer.text,
        `${route}: FAQ answer matches`,
      );
    }
    for (const link of $('a[href^="/"]').toArray()) {
      const target = $(link).attr("href").split("#")[0];
      if (!cache.has(target)) cache.set(target, get(target));
      await cache.get(target);
    }
    if (process.env.BASELINE !== "1" && refreshed.has(route.split("/").pop())) {
      assert.equal(article.headline, $("h1").text().trim());
      assert.equal(article.dateModified, "2026-10-06");
      assert.equal($('time[itemprop="dateModified"]').attr("datetime"), article.dateModified);
      const slugBrief = briefs.find((b) => route.endsWith("/" + b.slug));
      if (slugBrief) {
        assert.equal(article.headline, slugBrief.title);
        assert.equal(description, slugBrief.description);
      }
      assert($("#article-root a[href^='/resources/']").length >= 2, `${route}: contextual links`);
      assert($("#article-root a[href^='https:']").length >= 1, `${route}: visible source`);
      assert($("#section-faq").closest("section").is("[data-listen-exclude]"));
      assert(
        !/proves|rewires neural pathways|up to 50%/i.test($("article").text()),
        `${route}: unsupported claim regression`,
      );
      const slug = route.split("/").pop();
    }
    if (process.env.BASELINE !== "1" && audioVerified.has(route.split("/").pop())) {
      const slug = route.split("/").pop();
      const mapping = require("node:fs").readFileSync(
        require("node:path").join(__dirname, "../src/lib/articleSections.ts"),
        "utf8",
      );
      const start = mapping.indexOf('"' + slug + '": [');
      const sectionMap = mapping.slice(start, mapping.indexOf("],", start));
      const starts = [...sectionMap.matchAll(/startSec: ([0-9.]+)/g)].map((m) => Number(m[1]));
      const bodySections = $(
        "#article-root section[aria-labelledby]:not([data-listen-exclude]):not([aria-labelledby=section-overview]):not([aria-labelledby=section-faq])",
      );
      assert.equal(starts.length, bodySections.length + 1, `${route}: complete chapter map`);
      assert.equal(starts[0], 0);
      assert(
        starts.every((v, i) => i === 0 || v > starts[i - 1]),
        `${route}: chronological chapters`,
      );
      const manifest = require("../public/audio/manifest.json")[slug];
      const normalize = (s) =>
        s
          .replace(/\s*&\s*/g, " and ")
          .replace(/[<>]/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      const blocks = [
        $("#article-root").children().first(),
        ...$(
          "#article-root section[aria-labelledby]:not([data-listen-exclude]):not([aria-labelledby=section-overview]):not([aria-labelledby=section-faq])",
        )
          .toArray()
          .map((e) => $(e)),
      ];
      const text = blocks
        .map((b) =>
          b
            .find("h2,h3,p,li")
            .toArray()
            .map((e) => normalize($(e).text()))
            .filter(Boolean)
            .join("\n\n"),
        )
        .filter(Boolean)
        .join("\n\n");
      assert.equal(
        require("node:crypto").createHash("sha256").update(text).digest("hex").slice(0, 16),
        manifest.hash,
        `${route}: narration content hash`,
      );
    }
    if (route.endsWith("valence-and-arousal")) {
      assert.equal(article.headline, $("h1").text().trim());
      assert.equal(article.datePublished, "2026-10-11");
      assert.equal(article.dateModified, "2026-10-11");
      assert.equal($('time[itemprop="datePublished"]').attr("datetime"), article.datePublished);
      assert.equal($('meta[property="og:title"]').attr("content"), title);
      assert.equal($('meta[name="twitter:title"]').attr("content"), title);
      assert.equal($('meta[property="og:description"]').attr("content"), description);
      assert.equal($('meta[name="twitter:description"]').attr("content"), description);
      assert.equal($('meta[property="og:type"]').attr("content"), "article");
      assert.equal($('meta[property="og:url"]').attr("content"), origin + route);
      assert.equal($("#article-root table tbody tr").length, 4, "four valence/arousal examples");
      assert($("#article-root table caption").text().trim(), "accessible examples caption");
      assert($("#section-intensity").length, "separate explanation of intensity");
      assert($("#section-map-limits").length, "explicit model limitations");
      assert($("#section-faq").closest("section").is("[data-listen-exclude]"));
      assert(article.speakable.cssSelector.every((selector) => $(selector).length));
      assert.equal(article.citation.length, 2);
      for (const source of article.citation) {
        assert(
          $("#article-root a")
            .toArray()
            .some((e) => $(e).attr("href") === source),
          "visible research citation",
        );
      }
      assert($('#article-root a[href="/resources/emotional-granularity"]').length);
      assert($('#article-root a[href="/resources/emotional-awareness-patterns"]').length);
      assert.match($("#article-root").text(), /not diagnostic or medical advice/);
      assert.match(
        await get("/llms.txt"),
        /https:\/\/vocolens\.com\/resources\/valence-and-arousal/,
      );
      assert.match(
        await get("/llms-full.txt"),
        /https:\/\/vocolens\.com\/resources\/valence-and-arousal/,
      );
      const reference = load(await get("/resources/emotional-granularity"));
      assert(reference(`a[href="${route}"]`).length, "reference article links to the new guide");
    }
    if (route.endsWith("plutchik-emotion-wheel")) {
      assert.equal(article.headline, $("h1").text().trim());
      assert.equal(article.datePublished, "2026-10-15");
      assert.equal(article.dateModified, "2026-10-17");
      assert.equal($('time[itemprop="datePublished"]').attr("datetime"), article.datePublished);
      assert.equal($('time[itemprop="dateModified"]').attr("datetime"), article.dateModified);
      assert.equal(
        title,
        "Plutchik's Emotion Wheel: Annoyed to Furious Guide",
        "plutchik exact title tag",
      );
      assert.equal(
        $('meta[property="og:title"]').attr("content"),
        "Plutchik's Emotion Wheel Explained: 8 Families, 3 Steps",
      );
      assert.equal(
        $('meta[name="twitter:title"]').attr("content"),
        "Plutchik's Emotion Wheel Explained: 8 Families, 3 Steps",
      );
      assert.equal($('meta[property="og:description"]').attr("content"), description);
      assert.equal($('meta[name="twitter:description"]').attr("content"), description);
      assert.equal($('meta[property="og:type"]').attr("content"), "article");
      assert.equal($('meta[property="og:url"]').attr("content"), origin + route);
      assert.equal(
        $('meta[property="og:image"]').attr("content"),
        "https://vocolens.com/og/plutchik-emotion-wheel.png",
      );
      assert.equal($('meta[property="og:image:width"]').attr("content"), "1200");
      assert.equal($('meta[property="og:image:height"]').attr("content"), "630");
      assert($('meta[property="og:image:alt"]').attr("content")?.trim());
      assert.equal(
        $('meta[name="twitter:image"]').attr("content"),
        "https://vocolens.com/og/plutchik-emotion-wheel.png",
      );
      assert.equal($('meta[name="twitter:card"]').attr("content"), "summary_large_image");
      assert.equal($("#article-root table tbody tr").length, 8, "eight Plutchik families");
      assert($("#article-root table caption").text().trim(), "accessible ladders caption");
      assert($("#section-blends").length, "separate explanation of blended emotions");
      assert($("#section-wheel-limits").length, "explicit model limitations");
      assert($("#section-faq").closest("section").is("[data-listen-exclude]"));
      assert(article.speakable.cssSelector.every((selector) => $(selector).length));
      assert.equal(article.citation.length, 4);
      for (const source of article.citation) {
        assert(
          $("#article-root a")
            .toArray()
            .some((e) => $(e).attr("href") === source),
          "visible research citation",
        );
      }
      assert($('#article-root a[href="/resources/valence-and-arousal"]').length);
      assert($('#article-root a[href="/resources/emotional-granularity"]').length);
      assert($('#article-root a[href="/resources/mixed-emotions"]').length);
      assert.match($("#article-root").text(), /not diagnostic or medical advice/);
      assert.match(
        await get("/llms.txt"),
        /https:\/\/vocolens\.com\/resources\/plutchik-emotion-wheel/,
      );
      assert.match(
        await get("/llms-full.txt"),
        /https:\/\/vocolens\.com\/resources\/plutchik-emotion-wheel/,
      );
      const reference = load(await get("/resources/valence-and-arousal"));
      assert(reference(`a[href="${route}"]`).length, "reference article links to the new guide");
    }
    results.push({
      route,
      status: 200,
      title,
      h1: $("h1").text().trim(),
      articleModified: article.dateModified,
      sitemapModified: xml("url")
        .filter((_, e) => xml(e).find("loc").text() === origin + route)
        .find("lastmod")
        .text(),
      schemaTypes: schemas.map((s) => s["@type"]),
      internalLinks: $('a[href^="/"]').length,
    });
    console.log("PASS " + route);
  }
  console.log(JSON.stringify(results, null, 2));
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
