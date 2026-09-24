/**
 * House motion system — the single source of truth for site animation.
 *
 * Dialect ported from the mobile app (react-native-reanimated SOFT curves +
 * TAB_ENTER stagger scale). The app is the source of truth; the site
 * mirrors it. Standing decisions encoded here:
 *  - Calm-first: warm decelerations, ~0.7s reveals, ~80ms staggers.
 *  - Reduced motion is governed globally by <MotionConfig reducedMotion>
 *    in routes/__root (OS setting wins, no per-component checks needed).
 *  - Blog scope stays fully static: never render motion components under
 *    /resources routes (see isBlogPath + the static-blogs rule).
 */

export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT_PAYWALL = [0.16, 1, 0.3, 1] as const;

export const DUR_REVEAL = 0.7;
export const DUR_HOVER = 0.3;
export const STAGGER_STEP = 0.08;

/** Blog article + listing routes — motion-free by standing decision. */
export function isBlogPath(pathname: string): boolean {
  return pathname === "/resources" || pathname.startsWith("/resources/");
}

const softTransition = (delay = 0, duration = DUR_REVEAL) => ({
  duration,
  delay,
  ease: [...EASE_SOFT] as [number, number, number, number],
});

/** Shared variants — import these, never invent curves per component. */
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: softTransition(delay),
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -16 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: softTransition(delay),
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: softTransition(delay),
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: softTransition(delay, 0.6),
  }),
};
