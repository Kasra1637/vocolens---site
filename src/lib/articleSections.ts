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
    { title: "Two clocks", startSec: 44.5 },
    { title: "Two-way distortion", startSec: 133.9 },
    { title: "Why alarms fail", startSec: 229.6 },
    { title: "External clock", startSec: 309.3 },
    { title: "Time-anchor habit", startSec: 405.3 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Introduction", startSec: 0 },
    { title: "What is alexithymia?", startSec: 48.5 },
    { title: "Why journaling fails", startSec: 158.5 },
    { title: "Voice + AI vocabulary", startSec: 268.6 },
    { title: "The body is talking", startSec: 399.7 },
    { title: "Emotional granularity", startSec: 509.7 },
  ],
  "autism-emotional-regulation": [
    { title: "Introduction", startSec: 0 },
    { title: "Alexithymia", startSec: 26.3 },
    { title: "Sensory-emotional link", startSec: 103.9 },
    { title: "Why voice journaling works", startSec: 179.5 },
    { title: "Early warning system", startSec: 283.1 },
    { title: "The cost of masking", startSec: 355.5 },
  ],
  "burnout-recovery-signs": [
    { title: "Introduction", startSec: 0 },
    { title: "The hidden ledger", startSec: 41.9 },
    { title: "Three warning signs", startSec: 123.4 },
    { title: "The vacation fallacy", startSec: 207.8 },
    { title: "A visible running total", startSec: 287.3 },
    { title: "Daily load check", startSec: 371.4 },
  ],
  "distress-detection": [
    { title: "Introduction", startSec: 0 },
    { title: "The body speaks first", startSec: 22.4 },
    { title: "Interoception", startSec: 84.6 },
    { title: "Early signs of overwhelm", startSec: 144.5 },
    { title: "Mapping the body", startSec: 208.9 },
    { title: "The 60-second practice", startSec: 269.7 },
  ],
  "emotional-awareness-patterns": [
    { title: "Introduction", startSec: 0 },
    { title: "Metacognitive awareness", startSec: 23.8 },
    { title: "Expressive disclosure", startSec: 91 },
    { title: "Moments into patterns", startSec: 168.6 },
    { title: "Emotional triggers", startSec: 239.6 },
    { title: "Accelerating growth", startSec: 320.1 },
  ],
  "emotional-granularity": [
    { title: "Introduction", startSec: 0 },
    { title: "What is granularity?", startSec: 47 },
    { title: "Why finer words work", startSec: 120.1 },
    { title: "Getting more specific", startSec: 200 },
    { title: "Words worth keeping", startSec: 290 },
  ],
  "overthinking-rumination": [
    { title: "Introduction", startSec: 0 },
    { title: "Unfinished thoughts", startSec: 40.3 },
    { title: "Default mode network", startSec: 118.1 },
    { title: "Why suppression backfires", startSec: 209.1 },
    { title: "Completion signal", startSec: 280.6 },
    { title: "Worry time practice", startSec: 374.4 },
  ],
  "science-of-reflection": [
    { title: "Introduction", startSec: 0 },
    { title: "Neuroscience of labeling", startSec: 23.7 },
    { title: "The Vocolens approach", startSec: 90.6 },
    { title: "Breaking worry loops", startSec: 146.2 },
    { title: "Long-term resilience", startSec: 226 },
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
