/**
 * Narration chapter timestamps per article.
 *
 * Every start time is measured, never hand-tuned:
 * scripts/refresh-resource-audio.cjs synthesizes each chapter's text separately
 * with Aria and concatenates the parts, so `startSec` is the exact sum of the
 * preceding chapter durations (each part opens with ~0.15s of lead-in silence,
 * which the player's 1.5s header lead-in absorbs).
 *
 * Chapter 0 ("Overview") narrates the article's own H1 title first, then the
 * Overview heading and its summary — narration starts at the top of the post,
 * so the title of the blog is never skipped. Every later chapter narrates its
 * H2/H3 heading first. `title` here is display copy for SSR / first paint only;
 * the player reads each chapter's heading from the article itself.
 *
 * To regenerate after article edits:
 *   1. Run scripts/refresh-resource-audio.cjs against a running dev or preview
 *      server (needs msedge-tts >= 2.1.0, cheerio, ffmpeg/ffprobe on PATH)
 *   2. It rewrites these entries and public/audio/manifest.json
 *   3. Never hand-tweak individual values to "fix" playback
 */

export interface ArticleSection {
  /** Display title for the scrubber label. */
  title: string;
  /** Absolute start time in seconds from the beginning of the MP3. */
  startSec: number;
}

export const ARTICLE_SECTIONS: Record<string, ArticleSection[]> = {
  "adhd-time-blindness": [
    { title: "Overview", startSec: 0 },
    { title: "What is ADHD time blindness?", startSec: 38.11 },
    { title: "Examples: estimating, tracking, and switching", startSec: 87.31 },
    { title: "Practical supports that make time visible", startSec: 124.25 },
    { title: "An estimate-versus-actual journal you can reuse", startSec: 174.96 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Overview", startSec: 0 },
    { title: "What is alexithymia?", startSec: 35.21 },
    { title: "Examples: knowing the event but not the feeling", startSec: 79.49 },
    { title: "Start with sensations, context, and tentative words", startSec: 113.19 },
    { title: "Using vocabulary without outsourcing your judgment", startSec: 156.85 },
  ],
  "autism-emotional-regulation": [
    { title: "Overview", startSec: 0 },
    { title: "What does emotional regulation mean for autistic adults?", startSec: 38.62 },
    { title: "Sensory overload and emotions are related, not identical", startSec: 82.13 },
    { title: "A practical support plan before, during, and after overload", startSec: 118.03 },
    { title: "Reflection without pressure to mask or perform", startSec: 172.73 },
  ],
  "burnout-recovery-signs": [
    { title: "Overview", startSec: 0 },
    { title: "What is burnout? The scope of the WHO definition", startSec: 38.62 },
    { title: "Signs worth noticing, without a self-diagnosis", startSec: 84.63 },
    { title: "Recovery supports: change demands as well as rest", startSec: 121.88 },
    { title: "A gentle demand-and-recovery check-in", startSec: 179.43 },
  ],
  "distress-detection": [
    { title: "Overview", startSec: 0 },
    { title: "What is interoception?", startSec: 34.58 },
    { title: "Physical signs that can accompany overwhelm", startSec: 72.88 },
    { title: "A gentle body-and-context check-in", startSec: 112.31 },
    { title: "When a body map is useful, and when it is not", startSec: 156.4 },
  ],
  "emotional-awareness-patterns": [
    { title: "Overview", startSec: 0 },
    { title: "What is emotional awareness?", startSec: 27.22 },
    { title: "Everyday examples of emotional awareness", startSec: 71.79 },
    { title: "How to improve emotional awareness: a short check-in", startSec: 116.07 },
    { title: "An emotion-and-trigger journal you can reuse", startSec: 166.33 },
    { title: "Awareness, naming, and granularity are different skills", startSec: 221.89 },
  ],
  "emotional-granularity": [
    { title: "Overview", startSec: 0 },
    { title: "So what is emotional granularity, exactly?", startSec: 67.61 },
    { title: "Why a finer word does something, not just describes something", startSec: 140.19 },
    { title: "How to get more specific without guessing", startSec: 221.41 },
    { title: "A few words worth keeping", startSec: 307.81 },
  ],
  // Measured from the MP3 (2026-10-05): the 95 ≥0.8s silences align 1:1 with
  // the 95 narrated sentences, so each chapter start is the silence_end
  // preceding its H2 block (ffmpeg silencedetect noise=-35dB:d=0.35).
  "mixed-emotions": [
    { title: "Overview", startSec: 0 },
    { title: "What are mixed emotions?", startSec: 32.78 },
    { title: "Examples: happy and sad, relieved and disappointed", startSec: 78.26 },
    { title: "A reflection that makes room for both", startSec: 119.08 },
    { title: "Using a journal without forcing a single answer", startSec: 166.6 },
  ],
  "overthinking-rumination": [
    { title: "Overview", startSec: 0 },
    { title: "What is rumination, and how is it different from reflection?", startSec: 37.34 },
    { title: "Examples: a replay, a prediction, and a useful question", startSec: 84.69 },
    { title: "A practical next-step check", startSec: 121.48 },
    { title: "Using a journal without extending the loop", startSec: 162.16 },
  ],
  // Chapter starts are the word-count model below (manifest words / MP3
  // duration), excluding the FAQ block because articleBlocks() skips it. The
  // same model reproduces the existing entries to within ~4s, which is the
  // accuracy the 1.5s header lead-in is built to absorb.
  "rejection-sensitivity": [
    { title: "Overview", startSec: 0 },
    { title: "What is rejection sensitivity, and what does RSD mean?", startSec: 42.1 },
    { title: "Examples: separating the event from its meaning", startSec: 80.45 },
    { title: "What to try in the moment", startSec: 120.63 },
    { title: "A brief reflection instead of a repeated replay", startSec: 159.56 },
  ],
  "science-of-reflection": [
    { title: "Overview", startSec: 0 },
    { title: "What is affect labeling, and what does research show?", startSec: 27.79 },
    { title: "Affect labeling examples: feelings are not predictions", startSec: 92.83 },
    { title: "How to practice affect labeling in a brief check-in", startSec: 144.33 },
    { title: "Naming emotions, emotional awareness, and granularity", startSec: 206.83 },
  ],
  // Measured per-section synthesis (same method as the two SEO refreshes above):
  // each chapter synthesized separately with Aria, offsets from ffprobe.
  "valence-and-arousal": [
    { title: "Overview", startSec: 0 },
    { title: "What are valence and arousal?", startSec: 56.83 },
    { title: "Four combinations, not four boxes you have to fit", startSec: 122.49 },
    { title: "Is arousal the same as emotional intensity?", startSec: 162.19 },
    { title: "What a two-axis emotion map cannot tell you", startSec: 224.13 },
    { title: "A check-in for when the emotion word will not come", startSec: 287.59 },
    { title: "How to read these dimensions in Vocolens", startSec: 370.25 },
  ],
  "plutchik-emotion-wheel": [
    { title: "Overview", startSec: 0 },
    { title: "What is Plutchik’s emotion wheel?", startSec: 84.456 },
    { title: "The eight emotion families and their intensity ladders", startSec: 204.288 },
    {
      title: "Primary families, blends, and why two feelings can show up together",
      startSec: 272.952,
    },
    {
      title: "What an emotion wheel leaves out (and when it feels like too much)",
      startSec: 358.536,
    },
    { title: "A two-step ladder check-in (without memorizing the wheel)", startSec: 458.592 },
    { title: "How to read Plutchik intensity in Vocolens", startSec: 581.76 },
  ],
};

/** Index of the section containing the given time (seconds). */
export function sectionAt(sections: readonly ArticleSection[], currentTime: number): number {
  let idx = 0;
  for (let i = 0; i < sections.length; i += 1) {
    if (currentTime >= sections[i].startSec) idx = i;
  }
  return idx;
}

/** Start time of the next section, or Infinity if at the last section. */
export function nextSectionStart(sections: readonly ArticleSection[], currentTime: number): number {
  const idx = sectionAt(sections, currentTime);
  if (idx + 1 < sections.length) return sections[idx + 1].startSec;
  return Infinity;
}
