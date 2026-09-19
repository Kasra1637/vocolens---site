/**
 * Precise narration chapter timestamps per article.
 *
 * Computed from:
 *  - Actual MP3 durations measured via ffmpeg (ffprobe)
 *  - Per-section word counts extracted from production HTML
 *  - Same extraction rules as scripts/generate-article-audio.cjs
 *    (h1/h2/h3/p/li blocks before data-listen-exclude)
 *
 * Both female (Aria) and male (Guy) voices read the same text at
 * similar rates, so the same timestamps apply to both.
 *
 * To regenerate after article edits:
 *   1. Ensure the production site is live
 *   2. Run scripts/generate-article-audio.cjs --force
 *   3. Measure new durations with ffprobe
 *   4. Re-run the extraction + timestamp computation
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
    { title: "Two clocks", startSec: 47.9 },
    { title: "Two-way distortion", startSec: 138.2 },
    { title: "Why alarms fail", startSec: 231.9 },
    { title: "External clock", startSec: 315.9 },
    { title: "Time-anchor habit", startSec: 410.6 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Introduction", startSec: 0 },
    { title: "What is alexithymia?", startSec: 49.3 },
    { title: "Why journaling fails", startSec: 159.8 },
    { title: "Voice + AI vocabulary", startSec: 270.3 },
    { title: "The body is talking", startSec: 404.3 },
    { title: "Emotional granularity", startSec: 512.5 },
  ],
  "autism-emotional-regulation": [
    { title: "Introduction", startSec: 0 },
    { title: "Alexithymia", startSec: 28.5 },
    { title: "Sensory-emotional link", startSec: 105.8 },
    { title: "Why voice journaling works", startSec: 182.6 },
    { title: "Early warning system", startSec: 284.8 },
    { title: "The cost of masking", startSec: 359 },
  ],
  "burnout-recovery-signs": [
    { title: "Introduction", startSec: 0 },
    { title: "The hidden ledger", startSec: 43.6 },
    { title: "Three warning signs", startSec: 124.8 },
    { title: "The vacation fallacy", startSec: 210.9 },
    { title: "A visible running total", startSec: 290.6 },
    { title: "Daily load check", startSec: 376 },
  ],
  "distress-detection": [
    { title: "Introduction", startSec: 0 },
    { title: "The body speaks first", startSec: 25.1 },
    { title: "Interoception", startSec: 84 },
    { title: "Early signs of overwhelm", startSec: 145.5 },
    { title: "Mapping the body", startSec: 212 },
    { title: "The 60-second practice", startSec: 273.8 },
  ],
  "emotional-awareness-patterns": [
    { title: "Introduction", startSec: 0 },
    { title: "Metacognitive awareness", startSec: 22.9 },
    { title: "Expressive disclosure", startSec: 94 },
    { title: "Moments into patterns", startSec: 168.9 },
    { title: "Emotional triggers", startSec: 242.9 },
    { title: "Accelerating growth", startSec: 323.8 },
  ],
  "emotional-granularity": [
    { title: "Introduction", startSec: 0 },
    { title: "What is granularity?", startSec: 47.6 },
    { title: "Why finer words work", startSec: 121.7 },
    { title: "Getting more specific", startSec: 205.4 },
    { title: "Words worth keeping", startSec: 293.6 },
  ],
  "overthinking-rumination": [
    { title: "Introduction", startSec: 0 },
    { title: "Unfinished thoughts", startSec: 42.6 },
    { title: "Default mode network", startSec: 119.5 },
    { title: "Why suppression backfires", startSec: 208.2 },
    { title: "Completion signal", startSec: 285.1 },
    { title: "Worry time practice", startSec: 378.7 },
  ],
  "science-of-reflection": [
    { title: "Introduction", startSec: 0 },
    { title: "Neuroscience of labeling", startSec: 23.6 },
    { title: "The Vocolens approach", startSec: 90.8 },
    { title: "Breaking worry loops", startSec: 150.3 },
    { title: "Long-term resilience", startSec: 227.4 },
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
