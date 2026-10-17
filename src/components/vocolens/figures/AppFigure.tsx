import type { ReactNode } from "react";
import { appGradients } from "@/lib/appTheme";

interface Props {
  /** Describes the whole figure for screen readers; the inner UI is hidden. */
  label: string;
  caption: ReactNode;
  children: ReactNode;
}

/**
 * Wrapper for every app-UI figure in an article. Renders the app's screen
 * gradient so the panel reads as a screenshot, and announces one image to
 * assistive tech rather than re-reading the mock UI's own labels.
 *
 * The subtree deliberately contains no h2/h3/p/li — article narration is hashed
 * from those elements (scripts/refresh-resource-audio.cjs), so a figure must
 * never change an existing chapter's audio.
 */
export function AppFigure({ label, caption, children }: Props) {
  return (
    <figure className="my-5">
      <div
        role="img"
        aria-label={label}
        className="mx-auto w-full max-w-[420px] rounded-3xl overflow-hidden"
        style={{ background: appGradients.screen }}
      >
        {children}
      </div>
      <figcaption className="mt-3 text-center text-sm leading-relaxed text-text-secondary">
        {caption}
      </figcaption>
    </figure>
  );
}
