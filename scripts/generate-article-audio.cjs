#!/usr/bin/env node
/**
 * Generates the narrator MP3s for the resource articles.
 *
 * Text source of truth: the built, server-rendered pages. We fetch each
 * article from a locally running worker, take the text inside the element
 * marked id="article-root", drop any block marked data-listen-exclude (FAQ
 * accordion, Join-Waitlist CTA), and feed that to Microsoft Edge's neural
 * TTS voices.
 *
 * Output: public/audio/<slug>.mp3 plus public/audio/manifest.json, which
 * records a content hash per article so unchanged posts are skipped.
 *
 * NOTE: keep MP3s small for Workers deploys — after generating, downsample
 * to 24 kHz mono 32 kbps and refresh manifest bytes/minutes, e.g.:
 *   ffmpeg -i in.mp3 -ar 24000 -ac 1 -b:a 32k out.mp3
 * (Committed files are ~16 MB total; 48 kbps originals exceed that.)
 *
 * Usage (worker must be running):
 *   node scripts/generate-article-audio.cjs
 *   node scripts/generate-article-audio.cjs --force
 *   BASE_URL=https://vocolens.com node scripts/generate-article-audio.cjs
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { MsEdgeTTS, OUTPUT_FORMAT } = require("msedge-tts");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "audio");
const MANIFEST = path.join(OUT_DIR, "manifest.json");
const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8793";
const VOICE = process.env.TTS_VOICE || "en-US-AriaNeural";
const FORMAT = OUTPUT_FORMAT.AUDIO_24KHZ_32KBITRATE_MONO_MP3 || OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3;
const FORCE = process.argv.includes("--force");

const SLUGS = [
  "adhd-time-blindness",
  "alexithymia-emotional-vocabulary",
  "burnout-recovery-signs",
  "overthinking-rumination",
  "autism-emotional-regulation",
  "distress-detection",
  "emotional-awareness-patterns",
  "science-of-reflection",
  "emotional-granularity",
];

function decodeEntities(s) {
  return s
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;|&#8212;/g, " - ")
    .replace(/&ndash;|&#8211;/g, "-")
    .replace(/&rsquo;|&#8217;/g, "'")
    .replace(/&lsquo;|&#8216;/g, "'")
    .replace(/&ldquo;|&#8220;/g, '"')
    .replace(/&rdquo;|&#8221;/g, '"')
    .replace(/&hellip;|&#8230;/g, "...")
    .replace(/&#x[0-9a-f]+;/gi, " ")
    .replace(/&#\d+;/g, " ");
}

/** Pulls the readable article text out of a server-rendered page. */
function extractArticleText(html) {
  const marker = 'id="article-root"';
  const start = html.indexOf(marker);
  if (start === -1) return null;
  // Body ends at the sibling CTA card, which is excluded from reading.
  const ctaIdx = html.indexOf("data-listen-exclude", start);
  const end = ctaIdx === -1 ? html.length : ctaIdx;
  let slice = html.slice(start, end);

  // Drop anything explicitly excluded from listening (FAQ accordion etc.).
  slice = slice.replace(/<[^>]*data-listen-exclude[\s\S]*?<\/div>\s*<\/section>/g, " ");
  slice = slice.replace(/<[^>]*data-listen-exclude[^>]*>[\s\S]*$/g, " ");

  // Headings and paragraphs become separate utterances.
  const blocks = [];
  const re = /<(h1|h2|h3|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(slice)) !== null) {
    const text = toSpeakableText(m[2].replace(/<[^>]+>/g, " "));
    if (text.length > 1) blocks.push(text);
  }
  return blocks.join("\n\n");
}

/**
 * Normalises a text block for synthesis. Edge's endpoint drops the stream on a
 * raw ampersand (and on stray angle brackets), so we spell "&" as "and" — which
 * also sounds better — and drop any remaining tag characters.
 */
function toSpeakableText(raw) {
  return decodeEntities(raw)
    .replace(/\s*&\s*/g, " and ")
    .replace(/[<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Rough MP3 duration from byte size at the known 48 kbps mono bitrate. */
function mp3Minutes(bytes, kbps = 48) {
  return (bytes * 8) / (kbps * 1000) / 60;
}

function sha256(s) {
  return crypto.createHash("sha256").update(s).digest("hex").slice(0, 16);
}

const CHUNK_CHARS = 2000;

/** Splits article text into request-sized chunks on paragraph/sentence edges. */
function splitForSpeech(text, max = CHUNK_CHARS) {
  const paras = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  const chunks = [];
  let cur = "";
  const pushCur = () => {
    if (cur.trim()) chunks.push(cur.trim());
    cur = "";
  };
  for (const para of paras) {
    if (para.length > max) {
      const sentences = para.split(/(?<=[.!?])\s+/);
      for (const s of sentences) {
        if ((cur + " " + s).trim().length > max) pushCur();
        cur = (cur ? cur + " " : "") + s;
      }
      pushCur();
    } else if ((cur + "\n\n" + para).trim().length > max) {
      pushCur();
      cur = para;
    } else {
      cur = cur ? cur + "\n\n" + para : para;
    }
  }
  pushCur();
  return chunks;
}

/** Length of a leading ID3v2 tag, or 0 when absent. */
function id3v2Length(buf) {
  if (buf.length < 10 || buf[0] !== 0x49 || buf[1] !== 0x44 || buf[2] !== 0x33) return 0;
  const size = ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
  return 10 + size;
}

/** Concatenates MP3 chunks, keeping only the first chunk's ID3 tag. */
function concatMp3(files, outPath) {
  const parts = [];
  files.forEach((f, i) => {
    let buf = fs.readFileSync(f);
    if (i > 0) buf = buf.subarray(id3v2Length(buf));
    if (buf.length > 128 && buf.subarray(buf.length - 128, buf.length - 125).toString() === "TAG") {
      buf = buf.subarray(0, buf.length - 128);
    }
    parts.push(buf);
  });
  fs.writeFileSync(outPath, Buffer.concat(parts));
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let manifest = {};
  if (fs.existsSync(MANIFEST)) {
    try {
      manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
    } catch {
      manifest = {};
    }
  }

  const tmpDir = path.join(ROOT, ".audio-tmp");
  fs.mkdirSync(tmpDir, { recursive: true });

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const slug of SLUGS) {
    const url = BASE_URL + "/resources/" + slug;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const html = await res.text();
      const text = extractArticleText(html);
      if (!text || text.length < 200) throw new Error("extracted text too short (" + (text ? text.length : 0) + " chars)");
      const hash = sha256(text);
      const outFile = path.join(OUT_DIR, slug + ".mp3");
      const prev = manifest[slug];

      if (!FORCE && prev && prev.hash === hash && fs.existsSync(outFile)) {
        console.log("SKIP  " + slug + " (unchanged, " + Math.round(fs.statSync(outFile).size / 1024) + " KB)");
        skipped += 1;
        continue;
      }

      const chunks = splitForSpeech(text);
      console.log("GEN   " + slug + " (" + text.length + " chars, " + chunks.length + " chunk(s))...");
      const partFiles = [];
      for (let ci = 0; ci < chunks.length; ci += 1) {
        const tts = new MsEdgeTTS();
        await tts.setMetadata(VOICE, FORMAT);
        const { audioFilePath } = await tts.toFile(tmpDir, chunks[ci]);
        // The library always writes `<tmpDir>/audio.mp3`, so copy each chunk to
        // its own filename before the next chunk overwrites it.
        const unique = path.join(tmpDir, slug + "-part" + String(ci).padStart(3, "0") + ".mp3");
        fs.copyFileSync(audioFilePath, unique);
        const partBytes = fs.statSync(unique).size;
        if (partBytes < 2000) {
          throw new Error("chunk " + ci + " produced only " + partBytes + " bytes");
        }
        partFiles.push(unique);
        await new Promise((r) => setTimeout(r, 300));
      }
      concatMp3(partFiles, outFile);
      for (const f of partFiles) {
        try {
          fs.unlinkSync(f);
        } catch {
          /* non-fatal */
        }
      }

      const bytes = fs.statSync(outFile).size;
      const words = text.split(/\s+/).filter(Boolean).length;
      const expectedMin = words / 230; // Aria speaks quickly; floor for sanity
      const actualMin = mp3Minutes(bytes);
      if (actualMin < expectedMin * 0.75) {
        throw new Error(
          "audio too short: " + actualMin.toFixed(1) + " min for " + words + " words (expected >= " + expectedMin.toFixed(1) + " min)"
        );
      }
      manifest[slug] = {
        file: "/audio/" + slug + ".mp3",
        voice: VOICE,
        hash,
        chars: text.length,
        words,
        bytes,
        minutes: Number(actualMin.toFixed(1)),
        generatedAt: new Date().toISOString(),
      };
      fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n", "utf8");
      console.log("DONE  " + slug + " -> " + Math.round(bytes / 1024) + " KB (~" + actualMin.toFixed(1) + " min)");
      generated += 1;
      await new Promise((r) => setTimeout(r, 800));
    } catch (err) {
      failed += 1;
      console.error("FAIL  " + slug + ": " + err.message);
    }
  }

  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch {
    /* non-fatal */
  }

  console.log("SUMMARY generated=" + generated + " skipped=" + skipped + " failed=" + failed);
  process.exit(failed > 0 ? 1 : 0);
})();