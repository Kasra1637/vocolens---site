/** Refresh selected reviewed SEO articles; leave the reference article and general generator untouched.
 * Usage: BASE_URL=http://127.0.0.1:8797 node scripts/refresh-resource-audio.cjs
 * Requires the existing msedge-tts, cheerio, and ffmpeg/ffprobe on PATH.
 * Chapter offsets come from separately synthesized section durations, not hand edits.
 */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { execFileSync } = require("node:child_process");
const { load } = require("cheerio");
const { MsEdgeTTS, OUTPUT_FORMAT } = require("msedge-tts");
const root = path.resolve(__dirname, "..");
const base = process.env.BASE_URL || "http://127.0.0.1:8797";
const briefs = require("../test_reports/resource-refresh-content.json");
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : briefs.map((b) => b.slug);
const allowed = new Set([
  ...briefs.map((b) => b.slug),
  "emotional-awareness-patterns",
  "science-of-reflection",
]);
if (slugs.some((slug) => !allowed.has(slug))) throw new Error("Unknown refresh slug");
const tmp = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "vocolens-seo-audio-"));
const normalize = (s) =>
  s
    .replace(/\s*&\s*/g, " and ")
    .replace(/[<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const seconds = (file) =>
  Number(
    execFileSync(
      "ffprobe",
      [
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        file,
      ],
      { encoding: "utf8" },
    ).trim(),
  );
async function synthesize(text, dir) {
  fs.mkdirSync(dir, { recursive: true });
  const tts = new MsEdgeTTS();
  let timer;
  try {
    return await Promise.race([
      (async () => {
        await tts.setMetadata("en-US-AriaNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
        return (await tts.toFile(dir, text)).audioFilePath;
      })(),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("TTS timed out after 45 seconds")), 45000);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    tts.close();
  }
}
(async () => {
  try {
    for (const slug of slugs) {
      const res = await fetch(`${base}/resources/${slug}`, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`${slug}: HTTP ${res.status}`);
      const $ = load(await res.text());
      const article = $("#article-root");
      const blocks = [
        article.children().first(),
        ...article
          .find("section[aria-labelledby]:not([data-listen-exclude])")
          .toArray()
          .map((e) => $(e)),
      ];
      const sections = blocks.map((block, i) => ({
        title: i === 0 ? "Introduction" : normalize(block.find("h2").first().text()),
        text: block
          .find("h2,h3,p,li")
          .toArray()
          .map((e) => normalize($(e).text()))
          .filter(Boolean)
          .join("\n\n"),
      }));
      if (
        sections.length !==
          (briefs.find((b) => b.slug === slug)?.sections.length + 1 ||
            (slug === "emotional-awareness-patterns" ? 6 : 5)) ||
        sections.some((s) => !s.text)
      )
        throw new Error(`${slug}: invalid narration blocks`);
      let offset = 0;
      const files = [];
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        section.startSec = Number(offset.toFixed(3));
        console.log(`GEN ${slug} ${i}: ${section.title}`);
        const file = await synthesize(section.text, path.join(tmp, `${slug}-${i}`));
        const duration = seconds(file);
        if (!Number.isFinite(duration) || duration < section.text.split(/\s+/).length / 5)
          throw new Error(`${slug}: truncated section ${i}`);
        offset += duration;
        files.push(file);
      }
      const list = path.join(tmp, slug + ".txt");
      fs.writeFileSync(
        list,
        files.map((f) => `file '${f.split(String.fromCharCode(92)).join("/")}'`).join("\n"),
      );
      const output = path.join(tmp, slug + ".mp3");
      execFileSync("ffmpeg", [
        "-v",
        "error",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        list,
        "-ar",
        "24000",
        "-ac",
        "1",
        "-b:a",
        "32k",
        output,
      ]);
      const duration = seconds(output);
      if (Math.abs(duration - offset) > 1)
        throw new Error(`${slug}: concatenated duration mismatch`);
      const text = sections.map((s) => s.text).join("\n\n");
      const manifestPath = path.join(root, "public/audio/manifest.json");
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const sectionPath = path.join(root, "src/lib/articleSections.ts");
      let mapping = fs.readFileSync(sectionPath, "utf8");
      const entry = `"${slug}": [\n${sections.map((s) => `    { title: ${JSON.stringify(s.title)}, startSec: ${s.startSec} },`).join("\n")}\n  ],`;
      const start = mapping.indexOf('"' + slug + '": [');
      const end = mapping.indexOf("],", start) + 2;
      if (start < 0 || end < 2) throw new Error(`${slug}: missing section mapping`);
      mapping = mapping.slice(0, start) + entry + mapping.slice(end);
      fs.copyFileSync(output, path.join(root, "public/audio", slug + ".mp3"));
      manifest[slug] = {
        file: `/audio/${slug}.mp3`,
        voice: "en-US-AriaNeural",
        hash: crypto.createHash("sha256").update(text).digest("hex").slice(0, 16),
        chars: text.length,
        words: text.split(/\s+/).length,
        bytes: fs.statSync(output).size,
        minutes: Number((duration / 60).toFixed(1)),
        generatedAt: new Date().toISOString(),
      };
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
      fs.writeFileSync(sectionPath, mapping);
      execFileSync(
        process.execPath,
        [path.join(root, "node_modules/prettier/bin/prettier.cjs"), "--write", sectionPath],
        { stdio: "inherit" },
      );
      console.log(
        `DONE ${slug}: ${duration.toFixed(2)} seconds; ${sections.length} measured chapters`,
      );
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
