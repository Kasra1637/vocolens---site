/**
 * Narration chapter timestamps per article.
 *
 * Every start time is measured, never hand-tuned:
 * scripts/refresh-resource-audio.cjs synthesizes each chapter's text separately
 * with Andrew and concatenates the parts, so `startSec` is the exact sum of the
 * preceding chapter durations (each part opens with ~0.15s of lead-in silence
 * followed immediately by that section's H2/H3 heading).
 *
 * Every chapter narrates only its own section heading (H2/H3) and its body
 * content — never the top H1 blog title. `title` here is display copy for SSR /
 * first paint only; the player reads each chapter's heading from the article
 * itself.
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
    { title: "What is ADHD time blindness?", startSec: 30.744 },
    { title: "Examples: estimating, tracking, and switching", startSec: 76.08 },
    { title: "Practical supports that make time visible", startSec: 110.28 },
    { title: "An estimate-versus-actual journal you can reuse", startSec: 156.6 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Overview", startSec: 0 },
    { title: "What is alexithymia?", startSec: 27.84 },
    { title: "Examples: knowing the event but not the feeling", startSec: 68.952 },
    { title: "Start with sensations, context, and tentative words", startSec: 100.32 },
    { title: "Using vocabulary without outsourcing your judgment", startSec: 140.856 },
  ],
  "autism-emotional-regulation": [
    { title: "Overview", startSec: 0 },
    { title: "What does emotional regulation mean for autistic adults?", startSec: 31.872 },
    { title: "Sensory overload and emotions are related, not identical", startSec: 72.192 },
    { title: "A practical support plan before, during, and after overload", startSec: 106.896 },
    { title: "Reflection without pressure to mask or perform", startSec: 156.576 },
  ],
  "burnout-recovery-signs": [
    { title: "Overview", startSec: 0 },
    { title: "What is burnout? The scope of the WHO definition", startSec: 32.4 },
    { title: "Signs worth noticing, without a self-diagnosis", startSec: 76.056 },
    { title: "Recovery supports: change demands as well as rest", startSec: 109.848 },
    { title: "A gentle demand-and-recovery check-in", startSec: 162.096 },
  ],
  "distress-detection": [
    { title: "Overview", startSec: 0 },
    { title: "What is interoception?", startSec: 28.248 },
    { title: "Physical signs that can accompany overwhelm", startSec: 64.056 },
    { title: "A gentle body-and-context check-in", startSec: 100.704 },
    { title: "When a body map is useful, and when it is not", startSec: 142.296 },
  ],
  "emotional-awareness-patterns": [
    { title: "Overview", startSec: 0 },
    { title: "What is emotional awareness?", startSec: 20.376 },
    { title: "Everyday examples of emotional awareness", startSec: 61.824 },
    { title: "How to improve emotional awareness: a short check-in", startSec: 103.728 },
    { title: "An emotion-and-trigger journal you can reuse", startSec: 148.872 },
    { title: "Awareness, naming, and granularity are different skills", startSec: 198.456 },
  ],
  "emotional-granularity": [
    { title: "Overview", startSec: 0 },
    { title: "So what is emotional granularity, exactly?", startSec: 57.36 },
    { title: "Why a finer word does something, not just describes something", startSec: 126.888 },
    { title: "How to get more specific without guessing", startSec: 203.232 },
    { title: "A few words worth keeping", startSec: 282.816 },
  ],
  // Measured from the MP3 (2026-10-05): the 95 ≥0.8s silences align 1:1 with
  // the 95 narrated sentences, so each chapter start is the silence_end
  // preceding its H2 block (ffmpeg silencedetect noise=-35dB:d=0.35).
  "mixed-emotions": [
    { title: "Overview", startSec: 0 },
    { title: "What are mixed emotions?", startSec: 26.136 },
    { title: "Examples: happy and sad, relieved and disappointed", startSec: 67.68 },
    { title: "A reflection that makes room for both", startSec: 105.024 },
    { title: "Using a journal without forcing a single answer", startSec: 146.592 },
  ],
  "overthinking-rumination": [
    { title: "Overview", startSec: 0 },
    { title: "What is rumination, and how is it different from reflection?", startSec: 31.968 },
    { title: "Examples: a replay, a prediction, and a useful question", startSec: 76.752 },
    { title: "A practical next-step check", startSec: 109.92 },
    { title: "Using a journal without extending the loop", startSec: 146.256 },
  ],
  // Chapter starts are the word-count model below (manifest words / MP3
  // duration), excluding the FAQ block because articleBlocks() skips it. The
  // same model reproduces the existing entries to within ~4s, which is the
  // accuracy the 1.5s header lead-in is built to absorb.
  "rejection-sensitivity": [
    { title: "Overview", startSec: 0 },
    { title: "What is rejection sensitivity, and what does RSD mean?", startSec: 33.72 },
    { title: "Examples: separating the event from its meaning", startSec: 70.152 },
    { title: "What to try in the moment", startSec: 106.872 },
    { title: "A brief reflection instead of a repeated replay", startSec: 143.256 },
  ],
  "science-of-reflection": [
    { title: "Overview", startSec: 0 },
    { title: "What is affect labeling, and what does research show?", startSec: 22.224 },
    { title: "Affect labeling examples: feelings are not predictions", startSec: 85.104 },
    { title: "How to practice affect labeling in a brief check-in", startSec: 133.08 },
    { title: "Naming emotions, emotional awareness, and granularity", startSec: 190.704 },
  ],
  // Measured per-section synthesis (same method as the two SEO refreshes above):
  // each chapter synthesized separately with Andrew, offsets from ffprobe.
  "valence-and-arousal": [
    { title: "Overview", startSec: 0 },
    { title: "What are valence and arousal?", startSec: 47.448 },
    { title: "Four combinations, not four boxes you have to fit", startSec: 110.424 },
    { title: "Is arousal the same as emotional intensity?", startSec: 147.432 },
    { title: "What a two-axis emotion map cannot tell you", startSec: 205.464 },
    { title: "A check-in for when the emotion word will not come", startSec: 264.648 },
    { title: "How to read these dimensions in Vocolens", startSec: 335.4 },
  ],
  "plutchik-emotion-wheel": [
    { title: "Overview", startSec: 0 },
    { title: "What is Plutchik’s emotion wheel?", startSec: 77.208 },
    { title: "The eight emotion families and their intensity ladders", startSec: 198.552 },
    {
      title: "Primary families, blends, and why two feelings can show up together",
      startSec: 265.032,
    },
    {
      title: "What an emotion wheel leaves out (and when it feels like too much)",
      startSec: 347.76,
    },
    { title: "A two-step ladder check-in (without memorizing the wheel)", startSec: 445.56 },
    { title: "How to read Plutchik intensity in Vocolens", startSec: 564.528 },
  ],
  "how-to-start-emotion-journal": [
    { title: "Overview", startSec: 0 },
    { title: "What is an emotion journal, and how does it differ from a diary?", startSec: 61.896 },
    { title: "Four starting points when you do not know what to write", startSec: 153.072 },
    { title: "What to do when you feel nothing—or too many things at once", startSec: 213.12 },
    { title: "Why longer entries are not always better", startSec: 301.584 },
    { title: "How often to check in—and what happens when you miss a day", startSec: 396.24 },
    { title: "A 60-second first entry you can write or speak today", startSec: 460.752 },
    { title: "How an entry works inside Vocolens", startSec: 555.336 },
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
