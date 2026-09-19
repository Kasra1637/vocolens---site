"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button for long-form article pages.
 * Appears on the right side once the user has scrolled, and smooth-scrolls
 * back to the top on tap/click.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        "fixed bottom-6 right-6 z-50 flex items-center gap-2",
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
