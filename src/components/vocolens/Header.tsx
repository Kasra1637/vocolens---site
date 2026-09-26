import { useState, useEffect, useRef } from "react";
import {
  List as Menu,
  X,
  Brain,
  Target as Radar,
  CaretDown as ChevronDown,
  GooglePlayLogo,
} from "@phosphor-icons/react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";

const resourcesDropdown = [
  { to: "/resources/science-of-reflection", icon: Brain, label: "Science of Reflection" },
  { to: "/resources/emotional-awareness-patterns", icon: Radar, label: "Emotional Awareness" },
] as const;

/**
 * Logo → store CTA swap, as a fraction of viewport height (not page height, so
 * it reads the same on a long article and a short page). SWAP_OUT sits well
 * below SWAP_IN on purpose: mobile browsers collapse the URL bar while
 * scrolling, which grows innerHeight, and a single threshold would let that
 * push itself back above the scroll position and flicker the swap.
 */
const CTA_SWAP_IN = 0.3;
const CTA_SWAP_OUT = 0.15;

/**
 * Compact-bar logo slot. The CTA is absolutely positioned so it never
 * contributes to the bar's layout, which is what keeps the hamburger from
 * shifting when the swap happens. Desktop has room for both the logo and a
 * permanent CTA, so it renders a plain logo link instead.
 */
function BrandSlot({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="relative flex items-center h-9 flex-shrink-0">
      <Link
        to="/"
        className={`flex items-center group transition-opacity duration-300 ease-soft ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden={isScrolled}
        tabIndex={isScrolled ? -1 : undefined}
      >
        <img
          src="/vocolens-logo.png"
          alt="Vocolens AI voice journal logo"
          className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <a
        href={GOOGLE_PLAY_URL}
        {...STORE_LINK_ATTRS}
        className={`absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-4 py-1.5 text-sm font-semibold shadow-lg shadow-primary/30 transition-opacity duration-300 ease-soft ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isScrolled}
        tabIndex={isScrolled ? undefined : -1}
      >
        <GooglePlayLogo className="w-4 h-4" weight="fill" />
        Get it on Google Play
      </a>
    </div>
  );
}

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  // Past 30% of the viewport the logo cross-fades into the store CTA.
  const [isScrolled, setIsScrolled] = useState(false);
  // Scroll-progress hairline (0→1). Skipped on blog article routes, which
  // stay fully static by standing decision.
  const [progress, setProgress] = useState(0);
  const showProgress = !location.pathname.startsWith("/resources/");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Mirrors isScrolled so the rAF tick reads the current value, not stale state.
  const isScrolledRef = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Latched: once the CTA is shown it stays until the user scrolls back
        // near the top, so a collapsing URL bar can't un-trigger it.
        if (isScrolledRef.current) {
          if (y < window.innerHeight * CTA_SWAP_OUT) {
            isScrolledRef.current = false;
            setIsScrolled(false);
          }
        } else if (y >= window.innerHeight * CTA_SWAP_IN) {
          isScrolledRef.current = true;
          setIsScrolled(true);
        }
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (!isHome) {
      navigate({ to: "/", hash: sectionId });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const navLinks = [
    { id: "story", label: "Story" },
    { id: "privacy", label: "Privacy" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-3 sm:px-6 pointer-events-none">
        {showProgress && (
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-blue-400 rounded-r-full"
            style={{ width: `${progress * 100}%`, transition: "width 150ms linear" }}
          />
        )}
        <div className="pointer-events-auto w-full" style={{ maxWidth: "min(92%, 1200px)" }}>
          {/* Desktop */}
          <div
            className="hidden lg:flex items-center justify-between bg-white rounded-3xl px-8 py-5"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}
          >
            {/* Desktop keeps the logo permanently: the bar is wide enough to
                carry the brand and the store CTA at once, so it never needs the
                compact bar's swap. */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/vocolens-logo.png"
                alt="Vocolens AI voice journal logo"
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200 hover:opacity-100 opacity-80 rounded-xl hover:bg-primary/[0.04] relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}

              <Link
                to="/features"
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200 hover:opacity-100 opacity-80 rounded-xl hover:bg-primary/[0.04] relative group"
              >
                Features
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link
                to="/use-cases"
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200 hover:opacity-100 opacity-80 rounded-xl hover:bg-primary/[0.04] relative group"
              >
                Use Cases
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => setResourcesOpen(false), 150);
                }}
              >
                <Link
                  to="/resources"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200 hover:opacity-100 opacity-80 rounded-xl hover:bg-primary/[0.04] relative group"
                >
                  Resources
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                  />
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                    resourcesOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05)" }}
                >
                  <div className="p-2">
                    {resourcesDropdown.map(({ to, icon: Icon, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setResourcesOpen(false)}
                        className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/[0.04] transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-semibold text-text-primary group-hover/item:text-primary transition-colors text-base leading-relaxed">
                          {label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <a
              href={GOOGLE_PLAY_URL}
              {...STORE_LINK_ATTRS}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
            >
              <GooglePlayLogo className="w-4 h-4" weight="fill" />
              Get it on Google Play
            </a>
          </div>

          {/* Compact bar — phones and tablets (below lg) */}
          <div
            className="flex lg:hidden items-center justify-between bg-white rounded-3xl px-4 py-4"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}
          >
            {/*
              Phones and tablets swap the logo for the store CTA on scroll;
              BrandSlot keeps the hamburger from shifting. See BrandSlot.
            */}
            <BrandSlot isScrolled={isScrolled} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-1 text-text-secondary hover:text-text-primary transition-colors rounded-xl hover:bg-primary/[0.04]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-[4.5rem] px-3">
          <nav
            className={`w-full bg-white rounded-[20px] overflow-hidden transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.05)" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-primary/[0.04] rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/features"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-primary/[0.04] rounded-xl transition-colors"
              >
                Features
              </Link>
              <Link
                to="/use-cases"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-primary/[0.04] rounded-xl transition-colors"
              >
                Use Cases
              </Link>
              <Link
                to="/resources"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-primary/[0.04] rounded-xl transition-colors"
              >
                Resources
              </Link>
              {resourcesDropdown.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/[0.04] rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {label}
                </Link>
              ))}
              <div className="pt-2 px-1 pb-1">
                <a
                  href={GOOGLE_PLAY_URL}
                  {...STORE_LINK_ATTRS}
                  className="flex w-full items-center justify-center gap-2 bg-gradient-primary text-white py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
                >
                  <GooglePlayLogo className="w-4 h-4" weight="fill" />
                  Get it on Google Play
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
