"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

/**
 * Floating "back to top" button for long-form article pages.
 * Appears on the right side once the user has scrolled, and smooth-scrolls
 * back to the top on tap/click.
 */
export const MINIBAR_EVENT = "vocolens:minibar";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  // Lifted while the narration mini-bar is on screen so the two floating
  // controls never stack on narrow viewports (desktop keeps bottom-6: the
  // left-anchored bar never reaches the right side at lg widths).
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMinibar = (e: Event) => {
      try {
        setLifted(Boolean((e as CustomEvent<{ visible?: boolean }>).detail?.visible));
      } catch {
        /* non-fatal */
      }
    };
    window.addEventListener(MINIBAR_EVENT, onMinibar);
    return () => window.removeEventListener(MINIBAR_EVENT, onMinibar);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        `fixed right-6 z-50 flex items-center gap-2 ${lifted ? "bottom-24 lg:bottom-6" : "bottom-6"}`,
        "rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold",
        "shadow-clay-lg hover:shadow-clay-lg hover:bg-primary-dark active:scale-95",
        "transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">Back to top</span>
    </button>
  );
}
