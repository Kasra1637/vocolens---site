/**
 * App store / distribution links — single source of truth for every CTA on the site.
 * Add the App Store URL here when the iOS listing goes live.
 */
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.vocolens.app";

/** External links open in a new tab and should never leak the site's URL as referrer context. */
export const STORE_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
