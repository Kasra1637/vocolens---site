/**
 * Design tokens mirrored from the Vocolens mobile app (../Vocolens-app) so
 * article figures reproduce its UI exactly. Sources: src/lib/theme.ts (radii,
 * glass recipes), src/lib/state/onboarding-store.ts (the default "Midnight
 * Glow" theme), src/lib/types.ts (emotion colors, emojis, Plutchik ladders).
 *
 * These are deliberately NOT the site's light-theme tokens (`card-app` and
 * friends). A figure must look like a screenshot of the app, so it keeps the
 * app's own dark glass language.
 */

export const appColors = {
  primary: "#9370DB",
  deep: "#6A3FC0",
  secondary: "#A78BFA",
  white: "#FFFFFF",
} as const;

export const appGradients = {
  screen: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)",
  button: `linear-gradient(180deg, ${appColors.secondary} 0%, ${appColors.primary} 45%, ${appColors.deep} 100%)`,
  iconTile: "linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 100%)",
} as const;

/** The glass card recipe repeated verbatim across every app screen. */
export const appGlass = {
  cardBackground: "rgba(255,255,255,0.12)",
  cardBorder: "2px solid rgba(255,255,255,0.20)",
  nestedBackground: "rgba(255,255,255,0.08)",
  nestedBorder: "1px solid rgba(255,255,255,0.13)",
  track: "rgba(255,255,255,0.08)",
  sliderTrack: "rgba(255,255,255,0.10)",
  sliderFill: "rgba(255,255,255,0.55)",
  sliderCenterMark: "rgba(255,255,255,0.30)",
  sliderThumb: "rgba(255,255,255,0.92)",
  sliderThumbBorder: "rgba(255,255,255,0.40)",
  bubbleBackground: "rgba(255,255,255,0.16)",
  bubbleBorder: "1px solid rgba(255,255,255,0.28)",
  pillBackground: "rgba(255,255,255,0.08)",
  pillBorder: "1px solid rgba(255,255,255,0.13)",
} as const;

export const appCardShadow = "0 4px 8px rgba(0,0,0,0.08)";

export const appRadius = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
} as const;

/** Rank-decaying fill opacity for the Emotion Breakdown bars (entry-detail.tsx). */
export const appRankOpacity = [1, 0.75, 0.55, 0.4] as const;

export type PlutchikFamily =
  | "happiness"
  | "trust"
  | "fear"
  | "surprise"
  | "sadness"
  | "disgust"
  | "anger"
  | "anticipation";

/**
 * The eight Plutchik families with the app's own three-step intensity ladders
 * (`getEmotionSubLabel` in the app's src/lib/types.ts, thresholds low <=33,
 * mid <=66, high >66).
 */
export const PLUTCHIK_LADDERS: Record<
  PlutchikFamily,
  { label: string; emoji: string; color: string; low: string; mid: string; high: string }
> = {
  happiness: {
    label: "Happiness",
    emoji: "😊",
    color: "#FFD93D",
    low: "Serenity",
    mid: "Joy",
    high: "Ecstasy",
  },
  trust: {
    label: "Trust",
    emoji: "🤝",
    color: "#4DB6AC",
    low: "Acceptance",
    mid: "Trust",
    high: "Admiration",
  },
  fear: {
    label: "Fear",
    emoji: "😰",
    color: "#9575CD",
    low: "Apprehension",
    mid: "Fear",
    high: "Terror",
  },
  surprise: {
    label: "Surprise",
    emoji: "😮",
    color: "#FF8A65",
    low: "Distraction",
    mid: "Surprise",
    high: "Amazement",
  },
  sadness: {
    label: "Sadness",
    emoji: "😢",
    color: "#6B8DD6",
    low: "Pensiveness",
    mid: "Sadness",
    high: "Grief",
  },
  disgust: {
    label: "Disgust",
    emoji: "🤢",
    color: "#7CB342",
    low: "Boredom",
    mid: "Disgust",
    high: "Loathing",
  },
  anger: {
    label: "Anger",
    emoji: "😤",
    color: "#FF6B6B",
    low: "Annoyance",
    mid: "Anger",
    high: "Rage",
  },
  anticipation: {
    label: "Anticipation",
    emoji: "🤩",
    color: "#FFB74D",
    low: "Interest",
    mid: "Anticipation",
    high: "Vigilance",
  },
};

/** Resolves a 0-100 score to the app's intensity word for a family. */
export function plutchikIntensity(family: PlutchikFamily, score: number): string {
  const ladder = PLUTCHIK_LADDERS[family];
  if (score <= 33) return ladder.low;
  if (score <= 66) return ladder.mid;
  return ladder.high;
}

/** The 8 body regions, verbatim from the app's src/lib/types.ts. */
export const BODY_REGIONS = [
  { id: "head", label: "Head", emoji: "🧠" },
  { id: "face", label: "Face", emoji: "😶" },
  { id: "neck", label: "Neck", emoji: "🗣" },
  { id: "chest", label: "Chest", emoji: "🫁" },
  { id: "stomach", label: "Stomach", emoji: "🫃" },
  { id: "arms", label: "Arms", emoji: "💪" },
  { id: "hands", label: "Hands", emoji: "🤲" },
  { id: "legs", label: "Legs", emoji: "🦵" },
] as const;
