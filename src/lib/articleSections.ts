/**
 * Estimated narration chapters per article, used to render section ticks on
 * the ListenToArticle scrubber and the live "current section" label.
 *
 * Each `ratio` is the section's share of the narrated text (characters of
 * h1/h2/h3/p/li blocks before the excluded FAQ + closing CTA, matching what
 * scripts/generate-article-audio.cjs feeds to TTS). Positions are
 * proportional estimates and may drift ~10-30s on long articles — good
 * enough for browsing, not frame-accurate.
 *
 * To regenerate ratios after article edits, extract per-h2 character counts
 * with the same block rules and divide by the total.
 */

export interface ArticleSection {
  /** Short display title for the scrubber label. */
  title: string;
  /** Share of total narration length, 0-1. Sections must sum to ~1. */
  ratio: number;
}

export const ARTICLE_SECTIONS: Record<string, ArticleSection[]> = {
  "alexithymia-emotional-vocabulary": [
    { title: "Introduction", ratio: 0.165 },
    { title: "What is alexithymia?", ratio: 0.161 },
    { title: "Why journaling fails", ratio: 0.151 },
    { title: "Voice + AI vocabulary", ratio: 0.185 },
    { title: "The body is talking", ratio: 0.152 },
    { title: "Emotional granularity", ratio: 0.186 },
  ],
  "autism-emotional-regulation": [
    { title: "Introduction", ratio: 0.192 },
    { title: "Alexithymia", ratio: 0.153 },
    { title: "Sensory-emotional link", ratio: 0.151 },
    { title: "Why voice journaling works", ratio: 0.215 },
    { title: "Early warning system", ratio: 0.14 },
    { title: "The cost of masking", ratio: 0.149 },
  ],
  "burnout-recovery-signs": [
    { title: "Introduction", ratio: 0.206 },
    { title: "The hidden ledger", ratio: 0.153 },
    { title: "Three warning signs", ratio: 0.162 },
    { title: "The vacation fallacy", ratio: 0.15 },
    { title: "A visible running total", ratio: 0.166 },
    { title: "Daily load check", ratio: 0.164 },
  ],
  "distress-detection": [
    { title: "Introduction", ratio: 0.164 },
    { title: "The body speaks first", ratio: 0.165 },
    { title: "Interoception", ratio: 0.181 },
    { title: "Early signs of overwhelm", ratio: 0.176 },
    { title: "Mapping the body", ratio: 0.161 },
    { title: "The 60-second practice", ratio: 0.153 },
  ],
  "emotional-awareness-patterns": [
    { title: "Introduction", ratio: 0.15 },
    { title: "Metacognitive awareness", ratio: 0.166 },
    { title: "Expressive disclosure", ratio: 0.18 },
    { title: "Moments into patterns", ratio: 0.167 },
    { title: "Emotional triggers", ratio: 0.182 },
    { title: "Accelerating growth", ratio: 0.154 },
  ],
  "emotional-granularity": [
    { title: "Introduction", ratio: 0.299 },
    { title: "What is granularity?", ratio: 0.165 },
    { title: "Why finer words work", ratio: 0.19 },
    { title: "Getting more specific", ratio: 0.189 },
    { title: "Words worth keeping", ratio: 0.156 },
  ],
  "overthinking-rumination": [
    { title: "Introduction", ratio: 0.188 },
    { title: "Unfinished thoughts", ratio: 0.137 },
    { title: "Default mode network", ratio: 0.168 },
    { title: "Why suppression backfires", ratio: 0.134 },
    { title: "Completion signal", ratio: 0.165 },
    { title: "Worry time practice", ratio: 0.208 },
  ],
  "science-of-reflection": [
    { title: "Introduction", ratio: 0.235 },
    { title: "Neuroscience of labeling", ratio: 0.191 },
    { title: "The Vocolens approach", ratio: 0.175 },
    { title: "Breaking worry loops", ratio: 0.203 },
    { title: "Long-term resilience", ratio: 0.196 },
  ],
  "adhd-time-blindness": [
    { title: "Introduction", ratio: 0.204 },
    { title: "Two clocks", ratio: 0.164 },
    { title: "Two-way distortion", ratio: 0.17 },
    { title: "Why alarms fail", ratio: 0.147 },
    { title: "External clock", ratio: 0.163 },
    { title: "Time-anchor habit", ratio: 0.151 },
  ],
};

/** Cumulative section start fractions (0-1), first entry always 0. */
export function sectionStarts(sections: readonly ArticleSection[]): number[] {
  const starts: number[] = [0];
  for (let i = 0; i < sections.length - 1; i += 1) {
    starts.push(starts[i] + sections[i].ratio);
  }
  return starts;
}

/** Index of the section containing the given playback fraction (0-1). */
export function sectionAt(sections: readonly ArticleSection[], fraction: number): number {
  const starts = sectionStarts(sections);
  let idx = 0;
  for (let i = 0; i < starts.length; i += 1) {
    if (fraction >= starts[i]) idx = i;
  }
  return idx;
}
