import { Link } from "@tanstack/react-router";

/**
 * SiteFooter — single shared footer rendered in __root below every route,
 * so all pages (home, features, resources listing, articles, terms,
 * privacy, use-cases) end with identical brand + legal navigation.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="text-center mb-16">
          <img
            src="/vocolens-logo.png"
            alt="Vocolens AI voice journal logo"
            className="h-12 w-auto mx-auto mb-6"
          />
          <p className="text-text-secondary font-medium mb-2 text-base leading-relaxed">
            Hear yourself clearly
          </p>
          <p className="text-text-muted text-base leading-relaxed">
            AI voice journaling for ADHD, autism & alexithymia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-12">
          <Link
            to="/terms"
            className="text-sm text-text-muted hover:text-primary transition-colors py-2"
          >
            Terms of Service
          </Link>
          <span className="w-1 h-1 rounded-full bg-primary/40" aria-hidden="true" />
          <Link
            to="/privacy"
            className="text-sm text-text-muted hover:text-primary transition-colors py-2"
          >
            Privacy Policy
          </Link>
          <span className="w-1 h-1 rounded-full bg-primary/40" aria-hidden="true" />
          <Link
            to="/resources"
            className="text-sm text-text-muted hover:text-primary transition-colors py-2"
          >
            Resources
          </Link>
          <span className="w-1 h-1 rounded-full bg-primary/40" aria-hidden="true" />
          <Link
            to="/use-cases"
            className="text-sm text-text-muted hover:text-primary transition-colors py-2"
          >
            Use Cases
          </Link>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <p className="text-center text-text-muted/60 text-sm leading-relaxed">
            2026 Vocolens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
