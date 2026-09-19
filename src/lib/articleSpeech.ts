/**
 * Shared constants for the article audio player.
 * Narration is pre-generated human-like neural audio (`/audio/<slug>.mp3`);
 * nothing is synthesized in the browser anymore.
 */

/** Elements marked with this attribute are skipped by audio extraction. */
export const EXCLUDE_ATTR = "data-listen-exclude";

/** Rough listening length at 150 wpm, minimum one minute. */
export function estimateMinutes(text: string, wpm = 150): number {
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  return Math.max(1, Math.round(words / wpm));
}
