/**
 * Narration chapter timestamps per article.
 *
 * Every start time is measured, never hand-tuned:
 * scripts/refresh-resource-audio.cjs synthesizes each chapter's text separately
 * with Aria and concatenates the parts, so `startSec` is the exact sum of the
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
    { title: "What is ADHD time blindness?", startSec: 32.904 },
    { title: "Examples: estimating, tracking, and switching", startSec: 82.104 },
    { title: "Practical supports that make time visible", startSec: 119.04 },
    { title: "An estimate-versus-actual journal you can reuse", startSec: 169.752 },
  ],
  "alexithymia-emotional-vocabulary": [
    { title: "Overview", startSec: 0 },
    { title: "What is alexithymia?", startSec: 30.192 },
    { title: "Examples: knowing the event but not the feeling", startSec: 74.472 },
    { title: "Start with sensations, context, and tentative words", startSec: 108.168 },
    { title: "Using vocabulary without outsourcing your judgment", startSec: 151.824 },
  ],
  "autism-emotional-regulation": [
    { title: "Overview", startSec: 0 },
    { title: "What does emotional regulation mean for autistic adults?", startSec: 33.192 },
    { title: "Sensory overload and emotions are related, not identical", startSec: 76.704 },
    { title: "A practical support plan before, during, and after overload", startSec: 112.608 },
    { title: "Reflection without pressure to mask or perform", startSec: 167.304 },
  ],
  "burnout-recovery-signs": [
    { title: "Overview", startSec: 0 },
    { title: "What is burnout? The scope of the WHO definition", startSec: 34.32 },
    { title: "Signs worth noticing, without a self-diagnosis", startSec: 80.328 },
    { title: "Recovery supports: change demands as well as rest", startSec: 117.576 },
    { title: "A gentle demand-and-recovery check-in", startSec: 175.128 },
  ],
  "distress-detection": [
    { title: "Overview", startSec: 0 },
    { title: "What is interoception?", startSec: 30.216 },
    { title: "Physical signs that can accompany overwhelm", startSec: 68.52 },
    { title: "A gentle body-and-context check-in", startSec: 107.952 },
    { title: "When a body map is useful, and when it is not", startSec: 152.04 },
  ],
  "emotional-awareness-patterns": [
    { title: "Overview", startSec: 0 },
    { title: "What is emotional awareness?", startSec: 23.064 },
    { title: "Everyday examples of emotional awareness", startSec: 67.632 },
    { title: "How to improve emotional awareness: a short check-in", startSec: 111.912 },
    { title: "An emotion-and-trigger journal you can reuse", startSec: 162.168 },
    { title: "Awareness, naming, and granularity are different skills", startSec: 217.728 },
  ],
  "emotional-granularity": [
    { title: "Overview", startSec: 0 },
    { title: "So what is emotional granularity, exactly?", startSec: 62.88 },
    { title: "Why a finer word does something, not just describes something", startSec: 135.456 },
    { title: "How to get more specific without guessing", startSec: 216.672 },
    { title: "A few words worth keeping", startSec: 303.072 },
  ],
  // Measured from the MP3 (2026-10-05): the 95 ≥0.8s silences align 1:1 with
  // the 95 narrated sentences, so each chapter start is the silence_end
  // preceding its H2 block (ffmpeg silencedetect noise=-35dB:d=0.35).
  "mixed-emotions": [
    { title: "Overview", startSec: 0 },
    { title: "What are mixed emotions?", startSec: 28.488 },
    { title: "Examples: happy and sad, relieved and disappointed", startSec: 73.968 },
    { title: "A reflection that makes room for both", startSec: 114.792 },
    { title: "Using a journal without forcing a single answer", startSec: 162.312 },
  ],
  "overthinking-rumination": [
    { title: "Overview", startSec: 0 },
    { title: "What is rumination, and how is it different from reflection?", startSec: 33.24 },
    { title: "Examples: a replay, a prediction, and a useful question", startSec: 80.592 },
    { title: "A practical next-step check", startSec: 117.384 },
    { title: "Using a journal without extending the loop", startSec: 158.064 },
  ],
  // Chapter starts are the word-count model below (manifest words / MP3
  // duration), excluding the FAQ block because articleBlocks() skips it. The
  // same model reproduces the existing entries to within ~4s, which is the
  // accuracy the 1.5s header lead-in is built to absorb.
  "rejection-sensitivity": [
    { title: "Overview", startSec: 0 },
    { title: "What is rejection sensitivity, and what does RSD mean?", startSec: 36.264 },
    { title: "Examples: separating the event from its meaning", startSec: 74.616 },
    { title: "What to try in the moment", startSec: 114.792 },
    { title: "A brief reflection instead of a repeated replay", startSec: 153.72 },
  ],
  "science-of-reflection": [
    { title: "Overview", startSec: 0 },
    { title: "What is affect labeling, and what does research show?", startSec: 24.288 },
    { title: "Affect labeling examples: feelings are not predictions", startSec: 89.328 },
    { title: "How to practice affect labeling in a brief check-in", startSec: 140.832 },
    { title: "Naming emotions, emotional awareness, and granularity", startSec: 203.328 },
  ],
  // Measured per-section synthesis (same method as the two SEO refreshes above):
  // each chapter synthesized separately with Aria, offsets from ffprobe.
  "valence-and-arousal": [
    { title: "Overview", startSec: 0 },
    { title: "What are valence and arousal?", startSec: 52.896 },
    { title: "Four combinations, not four boxes you have to fit", startSec: 118.56 },
    { title: "Is arousal the same as emotional intensity?", startSec: 158.256 },
    { title: "What a two-axis emotion map cannot tell you", startSec: 220.2 },
    { title: "A check-in for when the emotion word will not come", startSec: 283.656 },
    { title: "How to read these dimensions in Vocolens", startSec: 366.312 },
  ],
  "plutchik-emotion-wheel": [
    { title: "Overview", startSec: 0 },
    { title: "What is Plutchik’s emotion wheel?", startSec: 79.44 },
    { title: "The eight emotion families and their intensity ladders", startSec: 199.272 },
    {
      title: "Primary families, blends, and why two feelings can show up together",
      startSec: 267.936,
    },
    {
      title: "What an emotion wheel leaves out (and when it feels like too much)",
      startSec: 353.52,
    },
    { title: "A two-step ladder check-in (without memorizing the wheel)", startSec: 453.576 },
    { title: "How to read Plutchik intensity in Vocolens", startSec: 576.744 },
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
