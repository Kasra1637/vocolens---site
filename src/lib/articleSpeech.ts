export interface SpeechVoiceInfo {
  name: string;
  lang: string;
  localService: boolean;
  default: boolean;
}

export interface SplitOptions {
  maxLen?: number;
  minSentence?: number;
  maxChunks?: number;
}

export const DEFAULT_MAX_CHUNK = 180;
const DEFAULT_MIN_SENTENCE = 35;
const DEFAULT_MAX_CHUNKS = 400;

function normalizeLang(lang: string): string {
  return (lang || "").toLowerCase().replace("_", "-");
}

/** Returns true when at least one English voice is present. */
export function hasEnglishVoice(voices: readonly SpeechVoiceInfo[]): boolean {
  return voices.some((v) => normalizeLang(v.lang).startsWith("en"));
}

const FEMALE_NAME_HINT = /samantha|zira|aria|jenny|female|woman|girl|emma|olivia|sofia|anna|joanna|tessa|fiona|google us english/i;
const MALE_NAME_HINT = /^(male|man|boy|david|daniel|mark|james|fred|george|guy)\b/i;

/** Deterministic score: English first (US preferred), then female hint, on-device, OS default. */
export function scoreVoice(v: SpeechVoiceInfo): number {
  const lang = normalizeLang(v.lang);
  const isUS = lang === "en-us" || lang.indexOf("en-us") === 0;
  const isEN = lang === "en" || lang.indexOf("en-") === 0;
  let score = isUS ? 100 : isEN ? 60 : 0;
  if (FEMALE_NAME_HINT.test(v.name)) score += 25;
  if (v.localService) score += 10;
  if (v.default) score += 5;
  if (MALE_NAME_HINT.test(v.name)) score -= 40;
  return score;
}

/** Best English voice, falling back to the first voice when none is English. */
export function pickEnglishVoice(list: readonly SpeechVoiceInfo[]): SpeechVoiceInfo | null {
  if (list.length === 0) return null;
  let best = list[0];
  let bestScore = scoreVoice(best);
  for (let i = 1; i < list.length; i += 1) {
    const s = scoreVoice(list[i]);
    if (s > bestScore) {
      best = list[i];
      bestScore = s;
    }
  }
  return best;
}

const ABBREVIATIONS = new Set([
  "mr",
  "mrs",
  "ms",
  "dr",
  "st",
  "vs",
  "etc",
  "no",
  "fig",
  "approx",
  "inc",
  "jr",
  "sr",
  "a.m",
  "p.m",
  "u.s",
  "u.k",
  "e.g",
  "i.e",
]);

function endsWithAbbreviation(sentence: string): boolean {
  const tail = sentence.trim().split(/\s+/).pop() || "";
  const key = tail.replace(/[.]+$/, "").toLowerCase();
  if (ABBREVIATIONS.has(key)) return true;
  const bare = tail.replace(/[.]+$/, "");
  return /^[A-Z]$/.test(bare);
}

/**
 * Splits article text into speakable chunks. Sentences split on terminal
 * punctuation, abbreviations are glued back, short sentences merge with a
 * neighbour, and long runs are cut at clause boundaries.
 */
export function splitArticleText(text: string, opts: SplitOptions = {}): string[] {
  const maxLen = opts.maxLen || DEFAULT_MAX_CHUNK;
  const minSentence = opts.minSentence || DEFAULT_MIN_SENTENCE;
  const maxChunks = opts.maxChunks || DEFAULT_MAX_CHUNKS;

  const flat = (text || "").replace(/\s+/g, " ").trim();
  if (!flat) return [];

  let sentences = flat.split(/(?<=[.!?])\s+(?=[A-Z0-9"])/).map((s) => s.trim()).filter((s) => s.length > 0);

  const glued: string[] = [];
  for (let i = 0; i < sentences.length; i += 1) {
    const prev = glued[glued.length - 1];
    const cur = sentences[i];
    if (prev !== undefined && endsWithAbbreviation(prev)) {
      glued[glued.length - 1] = prev + " " + cur;
    } else {
      glued.push(cur);
    }
  }
  sentences = glued;

  const merged: string[] = [];
  for (let i = 0; i < sentences.length; i += 1) {
    const s = sentences[i];
    const next = sentences[i + 1];
    if (s.length < minSentence && next !== undefined) {
      merged.push(s + " " + next);
      i += 1;
    } else if (s.length < minSentence && merged.length > 0) {
      merged[merged.length - 1] = merged[merged.length - 1] + " " + s;
    } else {
      merged.push(s);
    }
  }

  const out: string[] = [];
  for (let k = 0; k < merged.length; k += 1) {
    let rest = merged[k];
    while (rest.length > maxLen) {
      let cut = -1;
      const marks = [", ", "; ", ": ", " - "];
      for (let m = 0; m < marks.length; m += 1) {
        const idx = rest.lastIndexOf(marks[m], maxLen);
        if (idx > maxLen * 0.4 && idx > cut) cut = idx + marks[m].length;
      }
      if (cut <= 0) {
        const space = rest.lastIndexOf(" ", maxLen);
        cut = space > maxLen * 0.4 ? space + 1 : maxLen;
      }
      out.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
      if (out.length >= maxChunks) break;
    }
    if (rest) out.push(rest);
    if (out.length >= maxChunks) break;
  }

  return out.filter((s) => s.length > 0).slice(0, maxChunks);
}

/** Voices ordered for the picker: English first by score, then the rest by name. */
export function orderVoices(list: readonly SpeechVoiceInfo[]): SpeechVoiceInfo[] {
  return [...list].sort((a, b) => {
    const aEN = hasEnglishVoice([a]);
    const bEN = hasEnglishVoice([b]);
    if (aEN !== bEN) return aEN ? -1 : 1;
    const byScore = scoreVoice(b) - scoreVoice(a);
    if (byScore !== 0) return byScore;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

/**
 * Minimal structural contract so tests can pass stubs and real Elements fit.
 * Elements marked `data-listen-exclude` (CTA, FAQ accordions) are skipped so
 * the reader never hears buttons, navigation, or duplicated question text.
 */
export interface TextQueryable {
  querySelectorAll(selector: string): ArrayLike<{ textContent: string | null }>;
}

export const CONTENT_SELECTOR = "h1, h2, h3, p, li, blockquote";
export const EXCLUDE_ATTR = "data-listen-exclude";

/** Visible article text, skipping non-reading UI (FAQ accordions, CTAs). */
export function currentArticleText(root: TextQueryable): string {
  const nodes = root.querySelectorAll(CONTENT_SELECTOR);
  const parts: string[] = [];
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i] as { textContent: string | null; closest?: (s: string) => unknown };
    if (node && typeof node.closest === "function" && node.closest("[" + EXCLUDE_ATTR + "]")) continue;
    const t = ((node && node.textContent) || "").replace(/\s+/g, " ").trim();
    if (t) parts.push(t);
  }
  return parts.join("\n\n");
}

/** Rough listening length at 150 wpm, minimum one minute. */
export function estimateMinutes(text: string, wpm = 150): number {
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  return Math.max(1, Math.round(words / wpm));
}