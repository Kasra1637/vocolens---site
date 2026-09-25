import { useEffect, useRef } from "react";
import { Flame, Trophy } from "@phosphor-icons/react";
import { DemoTabBar } from "./DemoTabBar";
import { BodyMapCard } from "./BodyMapCard";

interface Props {
  isActive: boolean;
  isPaused: boolean;
}

const GLASS_BG = "rgba(255,255,255,0.08)";
const GLASS_BORDER = "rgba(255,255,255,0.18)";

export function InsightsScreen({ isActive, isPaused }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const bodyMapRef = useRef<HTMLDivElement | null>(null);

  const pausedRef = useRef(isPaused);
  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // When this screen rotates into view, glide down to the body map section
  // with a slow eased animation (native smooth-scroll timing feels abrupt).
  // Any manual scroll/touch interrupts the glide. Only runs on activation.
  // Progress accumulates only while unpaused, so hovering freezes the glide
  // in step with the demo clock instead of letting it run on.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    if (!isActive) {
      container.scrollTop = 0;
      return;
    }
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const cancel = () => cancelAnimationFrame(raf);
    const t = setTimeout(() => {
      const card = bodyMapRef.current;
      if (!card) return;
      const target = Math.max(card.offsetTop - 36, 0);
      const start = container.scrollTop;
      const dist = target - start;
      if (reduced || dist <= 0) {
        container.scrollTop = target;
        return;
      }
      const DURATION = 1600;
      const easeInOutCubic = (x: number) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      let elapsed = 0;
      let lastTs: number | null = null;
      const step = (ts: number) => {
        if (lastTs !== null && !pausedRef.current) elapsed += ts - lastTs;
        lastTs = ts;
        const p = Math.min(elapsed / DURATION, 1);
        container.scrollTop = start + dist * easeInOutCubic(p);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, 950);
    container.addEventListener("wheel", cancel, { passive: true });
    container.addEventListener("touchmove", cancel, { passive: true });
    return () => {
      clearTimeout(t);
      cancel();
      container.removeEventListener("wheel", cancel);
      container.removeEventListener("touchmove", cancel);
    };
  }, [isActive]);

  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)",
      }}
    >
      <div
        ref={scrollRef}
        className="relative px-3.5 pt-9 pb-1 overflow-y-auto demo-screen-scroll flex-1 min-h-0"
      >
        <div className="flex flex-col items-center mb-3">
          <h3
            className="text-white text-[15px] font-bold mt-1.5 text-center"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Good morning, Alex!
          </h3>
          <p className="text-white/65 text-[8.5px] mt-0.5 text-center px-4 leading-snug">
            Here's what your voice revealed about you.
          </p>
        </div>

        {/* Streak & badge card */}
        <div
          className="rounded-xl p-3 mb-2.5"
          style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}
        >
          <div className="flex items-center gap-2.5 mb-2.5">
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 30, height: 30, background: "rgba(255,255,255,0.12)" }}
            >
              <Flame className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} />
            </div>
            <div>
              <p className="text-white text-[12px] font-semibold leading-tight">7 days streak</p>
              <p className="text-white/75 text-[8.5px] leading-tight">Next: 14-day streak</p>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(147,112,219,0.15)", margin: "8px 0" }} />
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 30, height: 30, background: "rgba(255,255,255,0.12)" }}
            >
              <Trophy className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[10px] mb-1">Next: 30-Day Milestone</p>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(147,112,219,0.15)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "46%", background: "#FFFFFF" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Body sensation map — mirrors the app's BodyHeatmapCard section */}
        <div ref={bodyMapRef}>
          <BodyMapCard />
        </div>
      </div>

      <DemoTabBar active="Insights" />
    </div>
  );
}
