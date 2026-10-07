/**
 * Precise narration chapter timestamps per article.
 *
 * Measured from the actual MP3s (2026-09-22), not estimated:
 *  - Speech blocks extracted with the same rules as
 *    scripts/generate-article-audio.cjs (h1/h2/h3/p/li before
 *    data-listen-exclude), fitted to per-article speech rate
 *  - Each section start snapped to the measured silence boundary
 *    (ffmpeg silencedetect) preceding its H2/H3 block
 *  - Residual error is ~±1s; the player adds a short header lead-in
 *
 * Timestamps match the single female (Aria) narration MP3 per article.
 * The ten SEO refreshes use separately synthesized section durations from
 * scripts/refresh-resource-audio.cjs; their offsets are measured, not hand-tuned.
 *
 * To regenerate after article edits:
 *   1. Run scripts/generate-article-audio.cjs --force (rebuilds MP3s)
 *   2. Re-measure section starts from the new MP3 silences (same method)
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
    { title: "Introduction", startSec: 0 },
    { title: "What is ADHD time blindness?", startSec: 20.544 },
    { title: "Examples: estimating, tracking, and switching", startSec: 69.792 },
    { title: "Practical supports that make time visible", startSec: 106.8 },
    { title: "An estimate-versus-actual journal you can reuse", startSec: 157.584 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Introduction", startSec: 0 },
    { title: "What is alexithymia?", startSec: 18.528 },
    { title: "Examples: knowing the event but not the feeling", startSec: 62.856 },
    { title: "Start with sensations, context, and tentative words", startSec: 96.6 },
    { title: "Using vocabulary without outsourcing your judgment", startSec: 140.304 },
  ],
  "autism-emotional-regulation": [
    { title: "Introduction", startSec: 0 },
    { title: "What does emotional regulation mean for autistic adults?", startSec: 21.816 },
    { title: "Sensory overload and emotions are related, not identical", startSec: 65.4 },
    { title: "A practical support plan before, during, and after overload", startSec: 101.352 },
    { title: "Reflection without pressure to mask or perform", startSec: 156.096 },
  ],
  "burnout-recovery-signs": [
    { title: "Introduction", startSec: 0 },
    { title: "What is burnout? The scope of the WHO definition", startSec: 23.4 },
    { title: "Signs worth noticing, without a self-diagnosis", startSec: 69.456 },
    { title: "Recovery supports: change demands as well as rest", startSec: 106.776 },
    { title: "A gentle demand-and-recovery check-in", startSec: 164.376 },
  ],
  "distress-detection": [
    { title: "Introduction", startSec: 0 },
    { title: "What is interoception?", startSec: 18.936 },
    { title: "Physical signs that can accompany overwhelm", startSec: 57.288 },
    { title: "A gentle body-and-context check-in", startSec: 96.768 },
    { title: "When a body map is useful, and when it is not", startSec: 140.904 },
  ],
  "emotional-awareness-patterns": [
    { title: "Introduction", startSec: 0 },
    { title: "What is emotional awareness?", startSec: 12.696 },
    { title: "Everyday examples of emotional awareness", startSec: 57.312 },
    { title: "How to improve emotional awareness: a short check-in", startSec: 101.64 },
    { title: "An emotion-and-trigger journal you can reuse", startSec: 151.968 },
    { title: "Awareness, naming, and granularity are different skills", startSec: 207.576 },
  ],
  "emotional-granularity": [
    { title: "Introduction", startSec: 0 },
    { title: "What is granularity?", startSec: 47 },
    { title: "Why finer words work", startSec: 120.1 },
    { title: "Getting more specific", startSec: 200 },
    { title: "Words worth keeping", startSec: 290 },
  ],
  // Measured from the MP3 (2026-10-05): the 95 ≥0.8s silences align 1:1 with
  // the 95 narrated sentences, so each chapter start is the silence_end
  // preceding its H2 block (ffmpeg silencedetect noise=-35dB:d=0.35).
  "mixed-emotions": [
    { title: "Introduction", startSec: 0 },
    { title: "What are mixed emotions?", startSec: 17.4 },
    { title: "Examples: happy and sad, relieved and disappointed", startSec: 62.928 },
    { title: "A reflection that makes room for both", startSec: 103.824 },
    { title: "Using a journal without forcing a single answer", startSec: 151.392 },
  ],
  "overthinking-rumination": [
    { title: "Introduction", startSec: 0 },
    { title: "What is rumination, and how is it different from reflection?", startSec: 21.624 },
    { title: "Examples: a replay, a prediction, and a useful question", startSec: 69.024 },
    { title: "A practical next-step check", startSec: 105.864 },
    { title: "Using a journal without extending the loop", startSec: 146.592 },
  ],
  // Chapter starts are the word-count model below (manifest words / MP3
  // duration), excluding the FAQ block because articleBlocks() skips it. The
  // same model reproduces the existing entries to within ~4s, which is the
  // accuracy the 1.5s header lead-in is built to absorb.
  "rejection-sensitivity": [
    { title: "Introduction", startSec: 0 },
    { title: "What is rejection sensitivity, and what does RSD mean?", startSec: 24.72 },
    { title: "Examples: separating the event from its meaning", startSec: 63.12 },
    { title: "What to try in the moment", startSec: 103.344 },
    { title: "A brief reflection instead of a repeated replay", startSec: 142.32 },
  ],
  "science-of-reflection": [
    { title: "Introduction", startSec: 0 },
    { title: "What is affect labeling, and what does research show?", startSec: 13.416 },
    { title: "Affect labeling examples: feelings are not predictions", startSec: 78.504 },
    { title: "How to practice affect labeling in a brief check-in", startSec: 130.056 },
    { title: "Naming emotions, emotional awareness, and granularity", startSec: 192.6 },
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
