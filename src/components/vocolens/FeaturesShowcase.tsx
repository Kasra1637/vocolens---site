import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import {
  CalendarBlank as CalendarDays,
  BookOpenText,
  ChartBar as BarChart3,
  CaretCircleDown as ChevronDownCircle,
  MapTrifold as Map,
  Pulse as Activity,
  Sparkle as Sparkles,
  Lightning as Zap,
  Repeat,
  Clock,
  CaretRight,
  CaretUp,
  CaretDown,
  TrendUp,
  TrendDown,
  SlidersHorizontal,
  Medal as Award,
  HandHeart as HeartHandshake,
  Briefcase,
  Bed,
  CurrencyCircleDollar,
  Users,
  Microphone,
  Fire,
  ChatCircle,
  Compass,
  SunHorizon,
  Stethoscope,
  Brain,
  Smiley,
  Bone,
  Heartbeat,
  Butterfly,
  Hand,
  HandsClapping,
  Footprints,
} from "@phosphor-icons/react";

type Feature = {
  id: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  body: string;
  outcome: string;
  visual: React.ReactNode;
};

/* ---------- Visuals ---------- */

/* ---------- Scroll-driven motion (uniform across all 13 visuals) ----------
 * Standing decision: no scroll-driven motion on site. This hook now reports
 * visible immediately so every visual renders its final state on first
 * paint. Signature kept so all 13 call sites work unchanged. */

function useInViewOnce<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  void threshold;
  return { ref, inView: true };
}

function useCountUp(target: number, start: boolean, duration = 1100) {
  // Standing decision: no animated counting on site — return the final
  // value immediately once started. Signature kept so all visuals work
  // unchanged. `duration` accepted and ignored.
  void duration;
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!start) return;
    setValue(target);
  }, [start, target]);

  return value;
}

function CalendarVisual() {
  const days = Array.from({ length: 30 }, (_, i) => i);
  const active = new Set([1, 2, 4, 5, 8, 10, 11, 14, 17, 18, 19, 22, 25, 28]);
  const pulse = new Set([18, 25]);
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const daysCount = useCountUp(14, inView);
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <p className="text-4xl font-bold text-primary leading-none tabular-nums">{daysCount}</p>
          <p className="text-sm text-text-muted mt-1.5">days this month</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-text-secondary">Longest run · 6</p>
          <p className="text-xs text-text-muted mt-0.5">Total · 87</p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        {days.map((d) => (
          <span
            key={d}
            className={`aspect-square rounded-full transition-all duration-500 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } ${
              active.has(d)
                ? pulse.has(d)
                  ? "bg-primary shadow-sm shadow-primary/30"
                  : "bg-primary/70"
                : "bg-primary/10"
            }`}
            style={{ transitionDelay: inView ? `${d * 18}ms` : "0ms" }}
          />
        ))}
      </div>
      <p className="text-xs text-text-muted mt-5 italic">Every dot is a day you showed up</p>
    </div>
  );
}

function WeeklyReflectionVisual() {
  const weekArc = [
    { day: "M", mood: "Tense", level: 30 },
    { day: "T", mood: "Anxious", level: 40 },
    { day: "W", mood: "Calm", level: 70 },
    { day: "T", mood: "Focused", level: 75 },
    { day: "F", mood: "Relief", level: 85 },
    { day: "S", mood: "Rest", level: 60 },
    { day: "S", mood: "Peace", level: 80 },
  ];

  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Your week · Mar 18 – 24
        </p>
      </div>

      <p className="text-text-secondary text-[15px] leading-relaxed mb-5">
        Monday opened with tension around the deadline. By Wednesday you&apos;d named it — and the
        calm followed. Friday brought a quiet breakthrough about boundaries with your team.
      </p>

      <div className="flex items-end gap-1.5 h-16 mb-5 px-1">
        {weekArc.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
            <div
              className="w-full rounded-full bg-primary transition-colors duration-200 group-hover:brightness-110"
              style={{
                height: inView ? `${d.level}%` : "0%",
                opacity: 0.35 + (d.level / 100) * 0.65,
                transitionDelay: inView ? `${i * 60}ms` : "0ms",
              }}
            />
            <span className="text-[11px] font-semibold text-text-muted">{d.day}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {[
          { label: "Work pressure", Icon: TrendDown },
          { label: "Self-trust", Icon: TrendUp },
          { label: "Rest", Icon: TrendUp },
        ].map(({ label, Icon }) => (
          <span
            key={label}
            className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary font-semibold transition-all duration-200 hover:bg-primary/15 flex items-center gap-1"
          >
            <Icon className="w-3.5 h-3.5 text-[#6A3FC0]" weight="bold" />
            {label}
          </span>
        ))}
      </div>

      <div className="bg-primary/[0.04] border border-primary/15 rounded-2xl px-4 py-3.5 relative">
        <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-primary/40" />
        <p className="text-sm text-text-secondary italic leading-relaxed pl-2">
          &ldquo;You spoke kindly to yourself three times this week. Try one more.&rdquo;
        </p>
      </div>
    </div>
  );
}

function MoodStoryVisual() {
  const week = [
    { d: "Mon", e: "Trust", intensity: 72 },
    { d: "Tue", e: "Fear", intensity: 55 },
    { d: "Wed", e: "Anticipation", intensity: 80 },
    { d: "Thu", e: "Happiness", intensity: 88 },
    { d: "Fri", e: "Surprise", intensity: 65 },
    { d: "Sat", e: "Happiness", intensity: 90 },
    { d: "Sun", e: "Trust", intensity: 78 },
  ];
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Mood story · This week
        </p>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[11px] font-medium text-text-muted">Mostly positive</span>
        </div>
      </div>

      <p className="text-[13px] text-text-muted mb-5 relative">Dominant emotion each day</p>

      <div className="grid grid-cols-7 gap-1 sm:gap-2.5 items-end h-40 mb-3 relative">
        {week.map((w, i) => (
          <div key={w.d} className="flex flex-col items-center gap-1.5 group">
            <div className="relative w-full flex justify-center">
              <div
                className="w-full max-w-[32px] rounded-2xl bg-primary transition-colors duration-200 group-hover:shadow-md relative"
                style={{
                  height: inView ? `${w.intensity}%` : "0%",
                  minHeight: inView ? "28px" : "0px",
                  opacity: 0.35 + (w.intensity / 100) * 0.65,
                  transitionDelay: inView ? `${i * 70}ms` : "0ms",
                }}
                aria-label={`${w.d}: ${w.e}`}
              />
            </div>
            <span className="text-[11px] font-semibold text-text-secondary mt-1">{w.d}</span>
            <span className="text-[11px] font-medium leading-tight text-center px-0.5 text-text-muted">
              {w.e}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/8 relative">
        <div className="flex -space-x-1">
          {[1, 0.7, 0.4].map((o, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white bg-primary"
              style={{ opacity: o }}
            />
          ))}
        </div>
        <p className="text-xs text-text-muted italic flex-1">
          Words, not numbers — one dominant emotion per day
        </p>
      </div>
    </div>
  );
}

function ExploreDeeperVisual() {
  const visibleSections = [
    { name: "Journal calendar", icon: CalendarDays },
    { name: "Weekly reflection", icon: BookOpenText },
    { name: "Mood story", icon: BarChart3 },
  ];
  const hiddenSections = [
    "Emotional landscape",
    "Body map",
    "Deep insights",
    "Triggers",
    "Themes",
    "Time of day",
  ];

  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Your dashboard
        </p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          3 pinned to top
        </span>
      </div>

      <div className="space-y-2.5 mb-5 relative">
        {visibleSections.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className={`rounded-2xl border border-primary/15 bg-primary/[0.04] px-4 py-3 flex items-center justify-between transition-all duration-500 hover:border-primary/25 hover:shadow-md group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                  <Icon className="w-3.5 h-3.5 text-[#6A3FC0]" />
                </span>
                <span className="text-sm font-semibold text-text-primary">{s.name}</span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-primary bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Visible
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="pt-4 flex flex-wrap gap-1.5">
          {hiddenSections.map((s) => (
            <span
              key={s}
              className="text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-1 rounded-full bg-primary/8 text-text-muted border border-primary/15"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full inline-flex items-center justify-center gap-2 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-5 py-2.5 rounded-full text-sm font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
        <ChevronDownCircle className="w-4 h-4" />
        Explore deeper · 6 more
      </button>
    </div>
  );
}

function EmotionalLandscapeVisual() {
  const clusters = [
    { x: 20, y: 25, size: 14, opacity: 0.9, label: null },
    { x: 28, y: 32, size: 11, opacity: 0.75, label: null },
    { x: 35, y: 27, size: 12, opacity: 0.8, label: null },
    { x: 26, y: 40, size: 10, opacity: 0.65, label: null },
    { x: 63, y: 68, size: 14, opacity: 0.9, label: null },
    { x: 70, y: 75, size: 12, opacity: 0.85, label: null },
    { x: 66, y: 62, size: 11, opacity: 0.7, label: null },
    { x: 74, y: 70, size: 13, opacity: 0.8, label: null },
    { x: 78, y: 78, size: 10, opacity: 0.6, label: null },
    { x: 48, y: 52, size: 9, opacity: 0.5, label: null },
  ];

  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Emotional landscape
        </p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          Last 7 days
        </span>
      </div>

      <div className="relative aspect-[4/3] rounded-2xl bg-primary/[0.04] border border-primary/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(147,112,219,0.07)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_72%,rgba(106,63,192,0.06)_0%,transparent_45%)]" />

        <div className="absolute inset-y-4 left-1/2 w-px bg-gradient-to-b from-primary/5 via-primary/15 to-primary/5" />
        <div className="absolute inset-x-4 top-1/2 h-px bg-gradient-to-r from-primary/5 via-primary/15 to-primary/5" />

        <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-text-muted uppercase tracking-wider">
          Activated
        </span>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-text-muted uppercase tracking-wider">
          Calm
        </span>
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[11px] font-bold text-text-muted uppercase tracking-wider">
          Unpleasant
        </span>
        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[11px] font-bold text-text-muted uppercase tracking-wider">
          Pleasant
        </span>

        <div className="absolute top-[18%] left-[12%] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-text-secondary">Tense</span>
        </div>
        <div className="absolute bottom-[12%] right-[10%] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span className="text-[11px] font-semibold text-text-secondary">Calm</span>
        </div>

        {clusters.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary transition-opacity duration-700 hover:z-10"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: inView ? p.opacity : 0,
              transform: "translate(-50%, -50%)",
              transitionDelay: inView ? `${i * 70}ms` : "0ms",
            }}
          />
        ))}

        <div
          className="absolute rounded-full border border-dashed border-primary/40 pointer-events-none"
          style={{ top: "18%", left: "14%", width: "28%", height: "30%" }}
        />
        <div
          className="absolute rounded-full border border-dashed border-primary/25 pointer-events-none"
          style={{ top: "55%", left: "55%", width: "32%", height: "34%" }}
        />
      </div>

      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-primary/8 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border border-dashed border-primary/50" />
          <span className="text-[11px] font-medium text-text-muted">Work days</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border border-dashed border-primary/30" />
          <span className="text-[11px] font-medium text-text-muted">Weekends</span>
        </div>
        <p className="text-[11px] text-text-muted italic ml-auto">2 clusters detected</p>
      </div>
    </div>
  );
}

function BodyMapVisual() {
  const regions = [
    { name: "Head", Icon: Brain, heat: 0.2 },
    { name: "Face", Icon: Smiley, heat: 0.15 },
    { name: "Neck", Icon: Bone, heat: 0.55 },
    { name: "Chest", Icon: Heartbeat, heat: 0.85 },
    { name: "Stomach", Icon: Butterfly, heat: 0.7 },
    { name: "Arms", Icon: Hand, heat: 0.1 },
    { name: "Hands", Icon: HandsClapping, heat: 0.45 },
    { name: "Legs", Icon: Footprints, heat: 0.1 },
  ];

  const highStress = regions.filter((r) => r.heat >= 0.7);

  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const progress = useCountUp(100, inView, 1200);

  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-1 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Where you feel it most
        </p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          Last 30 days
        </span>
      </div>

      <p className="text-[11px] text-text-muted mb-4 relative">
        {highStress.length} region{highStress.length !== 1 ? "s" : ""} at 70%+ peak frequency
      </p>

      <div className="space-y-2 relative">
        {regions.map((r) => (
          <div key={r.name} className="flex items-center gap-2.5 group">
            <span
              className="w-7 h-7 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
              aria-hidden="true"
            >
              <r.Icon className="w-3.5 h-3.5 text-[#6A3FC0]" weight="bold" />
            </span>
            <span className="w-14 text-[11px] font-semibold text-text-secondary">{r.name}</span>
            <div className="flex-1 h-4 rounded-full bg-primary/[0.06] overflow-hidden border border-primary/8 relative">
              <div
                className="h-full rounded-full bg-primary relative"
                style={{
                  width: `${r.heat * progress}%`,
                  opacity: 0.3 + r.heat * 0.7,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-white/20" />
              </div>
            </div>
            <span
              className={`text-[11px] font-bold w-9 text-right tabular-nums ${r.heat >= 0.7 && progress === 100 ? "text-[#6A3FC0]" : "text-text-muted"}`}
            >
              {Math.round(r.heat * progress)}%
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-3 border-t border-primary/8 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-2.5 rounded-full bg-primary" style={{ opacity: 0.35 }} />
          <span className="text-[11px] text-text-muted">Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2.5 rounded-full bg-primary" />
          <span className="text-[11px] text-text-muted">High</span>
        </div>
        <p className="text-[11px] text-text-muted italic ml-auto">Most tagged: chest & stomach</p>
      </div>
    </div>
  );
}

function DeepInsightsVisual() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <div
        className={`rounded-2xl bg-primary/[0.04] border border-primary/15 p-5 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          One insight · this week
        </p>
        <p className="text-text-primary font-semibold mb-2 text-lg leading-snug">
          You name fear faster than joy.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed">
          Over the last 14 entries, your fear vocabulary expanded 3x faster than your happiness
          vocabulary. A gentle invitation: name one good thing before naming the worry.
        </p>
        <button className="mt-4 -my-1 min-h-[28px] text-sm font-semibold text-primary hover:underline transition-colors duration-200">
          See more <CaretRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function TriggersVisual() {
  const triggers = [
    { topic: "Work", Icon: Briefcase, shift: "+62%", dir: "up", bar: 0.62 },
    { topic: "Sleep", Icon: Bed, shift: "-28%", dir: "down", bar: 0.28 },
    { topic: "Money", Icon: CurrencyCircleDollar, shift: "+41%", dir: "up", bar: 0.41 },
    { topic: "Family", Icon: Users, shift: "+18%", dir: "up", bar: 0.18 },
  ];
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Trigger analysis
        </p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          Correlation strength
        </span>
      </div>

      <div className="flex gap-2 mb-5 relative">
        {["7d", "14d", "30d"].map((r, i) => (
          <span
            key={r}
            className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
              i === 1
                ? "chip-app text-[#6A3FC0] shadow-sm"
                : "bg-primary/8 text-primary/60 hover:bg-primary/15 hover:text-primary/80"
            }`}
          >
            {r}
          </span>
        ))}
      </div>

      <ul className="space-y-2 relative">
        {triggers.map((t, i) => (
          <li
            key={t.topic}
            className={`rounded-2xl border border-primary/15 bg-primary/[0.04] px-4 py-3 transition-all duration-500 hover:border-primary/20 hover:shadow-md group ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-7 h-7 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
                  aria-hidden="true"
                >
                  <t.Icon className="w-3.5 h-3.5 text-[#6A3FC0]" weight="bold" />
                </span>
                <span className="text-sm font-semibold text-text-primary">{t.topic}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary flex items-center">
                  {t.dir === "up" ? (
                    <CaretUp className="w-3 h-3" weight="bold" />
                  ) : (
                    <CaretDown className="w-3 h-3" weight="bold" />
                  )}
                </span>
                <span className="text-sm font-bold text-text-primary tabular-nums">{t.shift}</span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-primary/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-primary group-hover:brightness-110"
                style={{
                  width: inView ? `${t.bar * 100}%` : "0%",
                  opacity: 0.45 + t.bar * 0.55,
                  transitionDelay: inView ? `${i * 80 + 150}ms` : "0ms",
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-text-muted italic mt-4 pt-3 border-t border-primary/8 relative">
        Top trigger: Work — strongest correlation with elevated stress
      </p>
    </div>
  );
}

function ThemesVisual() {
  const themes = [
    { name: "Work", count: 12 },
    { name: "Sleep", count: 8 },
    { name: "Relationships", count: 6 },
    { name: "Health", count: 4 },
  ];
  const max = 12;
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
        Themes · this month
      </p>
      <ul className="space-y-3 mb-5">
        {themes.map((t, i) => (
          <li key={t.name} className="flex items-center gap-3 group">
            <span className="w-24 text-sm font-semibold text-text-primary">{t.name}</span>
            <div className="flex-1 h-3 rounded-full bg-primary/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary group-hover:from-primary/60 group-hover:to-primary"
                style={{
                  width: inView ? `${(t.count / max) * 100}%` : "0%",
                  transitionDelay: inView ? `${i * 90}ms` : "0ms",
                }}
              />
            </div>
            <span className="text-xs font-semibold text-text-muted w-6 text-right tabular-nums">
              {t.count}
            </span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl bg-primary/[0.04] border border-primary/15 px-4 py-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">
          Micro-action
        </p>
        <p className="text-sm text-text-secondary">
          Work appeared 12 times — pause and name the feeling before reacting.
        </p>
      </div>
    </div>
  );
}

function TimeOfDayVisual() {
  const slots = [
    { t: "Morning", range: "5–12", v: 72 },
    { t: "Afternoon", range: "12–17", v: 45 },
    { t: "Evening", range: "17–21", v: 60 },
    { t: "Night", range: "21–5", v: 85 },
  ];
  const peak = slots.reduce((a, b) => (a.v > b.v ? a : b));
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-1 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Mood by hour</p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          7-day average
        </span>
      </div>

      <p className="text-[11px] text-text-muted mb-4 relative">
        Peak intensity at {peak.t} ({peak.v}%)
      </p>

      <div className="flex items-end gap-2.5 h-32 mb-3 relative">
        {slots.map((s, i) => (
          <div key={s.t} className="flex-1 flex flex-col items-center gap-1 group">
            <span className="text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {s.v}%
            </span>
            <div className="w-full relative">
              <div
                className="w-full rounded-full bg-primary group-hover:shadow-sm relative"
                style={{
                  height: inView ? `${s.v}%` : "0%",
                  minHeight: inView ? "12px" : "0px",
                  transitionDelay: inView ? `${i * 60}ms` : "0ms",
                }}
              />
            </div>
            <span className="text-[11px] font-semibold text-text-muted">{s.t}</span>
            <span className="text-[11px] text-text-muted tabular-nums">{s.range}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-primary/[0.04] border border-primary/15 px-4 py-3 relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">Insight</p>
        <p className="text-sm text-text-secondary">
          Strongest at night — afternoons dip, suggesting an energy pattern to plan around.
        </p>
      </div>
    </div>
  );
}

function RefineAnalysisVisual() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const confidence = useCountUp(78, inView);
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
        Emotion breakdown
      </p>
      <div className="rounded-2xl bg-primary/[0.04] border border-primary/15 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted mb-1">
              AI detected
            </p>
            <p className="text-text-primary font-bold text-lg">Sadness</p>
          </div>
          <span className="text-[10px] font-semibold text-text-muted bg-primary/[0.06] px-2 py-1 rounded-full tabular-nums">
            {confidence}% confidence
          </span>
        </div>
        <div className="h-px bg-primary/10" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary/70 mb-1">
              You corrected it to
            </p>
            <p className="text-primary font-bold text-lg">Grief</p>
          </div>
          <span className="text-[10px] font-semibold text-white bg-primary px-2 py-1 rounded-full">
            Saved
          </span>
        </div>
      </div>
      <p className="text-[11px] text-text-muted italic mt-4">
        Your correction is kept alongside the AI&apos;s original read — nothing is overwritten.
      </p>
    </div>
  );
}

function MilestonesVisual() {
  const badges = [
    { Icon: Microphone, name: "First Entry", unlocked: true },
    { Icon: Fire, name: "7-Day Streak", unlocked: true },
    { Icon: ChatCircle, name: "10 Entries", unlocked: true },
    { Icon: SunHorizon, name: "Early Bird", unlocked: false },
    { Icon: Compass, name: "Emotional Explorer", unlocked: false },
    { Icon: CalendarDays, name: "Weekly Ritual", unlocked: false },
  ];
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Your milestones
        </p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
          21 badges to earn
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {badges.map((b, i) => (
          <div
            key={b.name}
            className={`rounded-2xl p-3 text-center border transition-all duration-500 ${
              b.unlocked
                ? "bg-primary/[0.04] border-primary/15"
                : "bg-primary/[0.04] border-primary/15 opacity-50"
            } ${inView ? "scale-100" : "scale-90"}`}
            style={{
              transitionDelay: inView ? `${i * 70}ms` : "0ms",
              opacity: !inView ? 0 : undefined,
            }}
          >
            <span
              className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 mx-auto mb-4 shadow-clay"
              aria-hidden="true"
            >
              <b.Icon className="w-5 h-5 text-[#6A3FC0]" weight={b.unlocked ? "fill" : "regular"} />
            </span>
            <p className="text-[11px] font-semibold text-text-secondary leading-tight">{b.name}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-text-muted italic mt-4">
        Tap any unlocked badge to see its story — and share it.
      </p>
    </div>
  );
}

function TherapistShareVisual() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="card-app rounded-3xl p-6">
      <div className="rounded-2xl bg-primary/[0.04] border border-primary/15 p-5">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
            aria-hidden="true"
          >
            <Stethoscope className="w-5 h-5 text-[#6A3FC0]" weight="bold" />
          </span>
          <div>
            <p className="font-bold text-text-primary text-base leading-tight">Insights report</p>
            <p className="text-[11px] text-text-muted">Ready to share as a report file</p>
          </div>
        </div>
        <div className="space-y-2">
          {["Mood trends (30 days)", "Dominant emotions", "Key patterns & triggers"].map(
            (line, i) => (
              <div
                key={line}
                className={`flex items-center gap-2 text-sm text-text-secondary transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                }`}
                style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {line}
              </div>
            ),
          )}
        </div>
        <p
          className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-text-secondary"
          aria-hidden="true"
        >
          Share with therapist
          <CaretRight className="w-3.5 h-3.5" />
        </p>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */

const features: Feature[] = [
  {
    id: "journal-calendar",
    eyebrow: "Journal calendar",
    icon: CalendarDays,
    headline: "Easily track every day you showed up",
    body: "Dots mark the days you showed up, with entry counts on tap. Streaks sit alongside — a missed day resets them.",
    outcome: "\u201CI journaled 14 times this month without once feeling like I failed.\u201D",
    visual: <CalendarVisual />,
  },
  {
    id: "weekly-reflection",
    eyebrow: "Weekly reflection",
    icon: BookOpenText,
    headline: "Read your weekly reflection summary",
    body: "Each week you get a reflection: a summary, emotional journey, key themes, a highlight, and what is ahead.",
    outcome:
      "The kind of weekly debrief a thoughtful friend would give you — generated in seconds, updated with every new entry.",
    visual: <WeeklyReflectionVisual />,
  },
  {
    id: "mood-story",
    eyebrow: "Mood story",
    icon: BarChart3,
    headline: "See your dominant mood by weekday",
    body: "Across the last 30 days, each weekday gets a bar showing the emotion that showed up most, so patterns emerge.",
    outcome: "Know your emotional rhythm by day — and plan your life around it.",
    visual: <MoodStoryVisual />,
  },
  {
    id: "explore-deeper",
    eyebrow: "Explore deeper",
    icon: ChevronDownCircle,
    headline: "Explore six more analyses on demand",
    body: "Three core views load first: calendar, reflection, mood story. Explore deeper reveals six more analyses.",
    outcome:
      "Full control over your cognitive load. See more when you\u2019re sharp. See less when you\u2019re overstimulated.",
    visual: <ExploreDeeperVisual />,
  },
  {
    id: "emotional-landscape",
    eyebrow: "Emotional landscape",
    icon: Map,
    headline: "Map your moods in one scatter chart",
    body: "Every entry plots on Unpleasant-Pleasant and Calm-Activated, filling the Tense, Excited, Down, and Calm.",
    outcome:
      "\u201CI live in Tense during work weeks and shift to Calm every Saturday at 6pm.\u201D — self-knowledge that changes real decisions.",
    visual: <EmotionalLandscapeVisual />,
  },
  {
    id: "body-map",
    eyebrow: "Body sensation map",
    icon: Activity,
    headline: "Map where feelings land in your body",
    body: "Tap where you felt it across 8 regions — head, face, neck, chest, stomach, arms, hands, legs — as a heatmap.",
    outcome: "See which regions you reach for most when load accumulates.",
    visual: <BodyMapVisual />,
  },
  {
    id: "deep-insights",
    eyebrow: "Deep insights",
    icon: Sparkles,
    headline: "One clear insight, four more inside",
    body: "One insight shows first, ordered by priority — self-awareness, growth, warning, strength. Tap for up to five.",
    outcome: "Personalised emotional intelligence that respects your bandwidth.",
    visual: <DeepInsightsVisual />,
  },
  {
    id: "triggers",
    eyebrow: "Emotional triggers",
    icon: Zap,
    headline: "Discover what sets your state off",
    body: "Pick a 7, 14, or 30 day window to see which topics accompany spikes, plus a concrete coping step for each.",
    outcome: "Stop being blindsided. See the trigger before the spiral starts.",
    visual: <TriggersVisual />,
  },
  {
    id: "themes",
    eyebrow: "Emotional themes",
    icon: Repeat,
    headline: "Read the story your emotions tell",
    body: "Recurring topics get ranked, with a next step for your top theme: pause and name the feeling before reacting.",
    outcome: "See the narrative. Then decide if you want to keep writing it.",
    visual: <ThemesVisual />,
  },
  {
    id: "time-of-day",
    eyebrow: "Time of day",
    icon: Clock,
    headline: "See your mood shift through the day",
    body: "Entries group into morning, afternoon, evening, and night, each labelled with a mood and an entry count.",
    outcome: "Schedule hard conversations for your strong hours. Protect the weak ones.",
    visual: <TimeOfDayVisual />,
  },
  {
    id: "refine-analysis",
    eyebrow: "AI + Your Corrections",
    icon: SlidersHorizontal,
    headline: "Your call on every single reading",
    body: "Tap Refine Analysis to correct the label and the Pleasant/Activated dials. Your original stays beside it.",
    outcome:
      "\u201CThe AI labeled my entry as sadness. I changed it to grief \u2014 and finally had a word for what I\u2019d been carrying.\u201D",
    visual: <RefineAnalysisVisual />,
  },
  {
    id: "milestones",
    eyebrow: "Milestones",
    icon: Award,
    headline: "Celebrate each milestone as it lands",
    body: "21 badges unlock as you go — streaks, entry counts, Early Bird, Night Owl — each with a tip you can share.",
    outcome:
      "\u201CSeeing \u201810 entries\u2019 light up felt like proof I was actually showing up for myself.\u201D",
    visual: <MilestonesVisual />,
  },
  {
    id: "therapist-share",
    eyebrow: "Therapist Share",
    icon: HeartHandshake,
    headline: "Bring your report to your therapist",
    body: "Build a wellness report over any date range, then share the file: moods, emotions, body map, and triggers.",
    outcome:
      "\u201CI stopped trying to summarise three weeks of feelings in five minutes. I just handed my therapist the report.\u201D",
    visual: <TherapistShareVisual />,
  },
];

function FeatureNav({ activeId }: { activeId: string }) {
  return (
    <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
      <nav className="flex flex-col gap-2">
        {features.map((f) => {
          const isActive = f.id === activeId;
          return (
            <a
              key={f.id}
              href={`#${f.id}`}
              title={f.eyebrow}
              className={`group flex items-center gap-3 transition-all duration-300 ${isActive ? "" : "opacity-50 hover:opacity-100"}`}
            >
              <span
                className={`block rounded-full ${isActive ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-primary/40"}`}
              />
              <span
                className={`text-xs font-medium ${isActive ? "text-primary" : "text-text-muted"}`}
              >
                {f.eyebrow}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 sm:pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <Reveal className="relative text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Inside Vocolens
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#1e293b" }}
          >
            13 ways to finally understand yourself
          </h1>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mx-auto">
            Vocolens has one job: turn your voice into clarity you can act on now
          </p>
        </Reveal>

        {/* Feature icon strip */}
        <Reveal delay={0.2} className="relative">
          <div className="flex justify-center flex-wrap gap-3 max-w-4xl mx-auto">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="group flex items-center gap-2 px-4 py-2 card-app rounded-full transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                    {f.eyebrow}
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Feature navigation sidebar */}
      <FeatureNav activeId={activeFeature} />

      {/* Feature sections */}
      <div className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16 lg:pb-20 space-y-16 sm:space-y-24 lg:space-y-32">
        {features.map((f, i) => {
          const Icon = f.icon;
          const reverse = i % 2 === 1;
          return (
            <Reveal key={f.id} delay={0.05}>
              <FeatureObserver id={f.id} onVisible={setActiveFeature}>
                <article
                  id={f.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="mb-5">
                      <span className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mb-3">
                        <Icon className="w-5 h-5 text-[#6A3FC0]" />
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                        {f.eyebrow}
                      </span>
                    </div>
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
                      style={{ color: "#1e293b" }}
                    >
                      {f.headline}
                    </h2>
                    <p className="text-text-secondary text-base leading-relaxed mb-6">{f.body}</p>
                    <div className="rounded-2xl bg-primary/[0.04] border border-primary/15 px-5 py-4">
                      <p className="text-primary text-base leading-relaxed italic">{f.outcome}</p>
                    </div>
                  </div>
                  <div className="lg:sticky lg:top-32">{f.visual}</div>
                </article>
              </FeatureObserver>
            </Reveal>
          );
        })}
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <Reveal delay={0.2} className="relative card-app rounded-3xl p-8 lg:p-12 text-center">
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#1e293b" }}
            >
              Understand yourself, one conversation at a time.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[547px] mx-auto">
              13 features, one simple habit: 60 seconds a day. Free to try &amp; built to help
              surface your emotional patterns.
            </p>
            <a
              href={GOOGLE_PLAY_URL}
              {...STORE_LINK_ATTRS}
              className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-10 sm:py-5 rounded-full whitespace-nowrap text-base sm:text-xl font-semibold btn-app-glow btn-app-float transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 group"
            >
              Get it on Google Play
              <CaretRight className="w-6 h-6" />
            </a>
            <p className="text-text-muted text-sm mt-4">
              3-day free trial, then $79.99/year. Cancel anytime.
            </p>
          </div>
        </Reveal>
      </section>

      {/* JSON-LD: FeatureList for SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Vocolens",
            applicationCategory: "HealthApplication",
            operatingSystem: "Android",
            featureList: features.map((f) => `${f.eyebrow}: ${f.headline}`),
          }),
        }}
      />

      {/* JSON-LD: FAQ for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does Vocolens use streaks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A streak counts the consecutive days you journal and resets if you skip one. The Journal Calendar keeps the days you checked in, your total entries, and your longest run, so a gap never erases your history.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Weekly Reflection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every week Vocolens reads your entries and writes a reflection card: a narrative summary, your emotional journey, key themes, one highlight, and a look ahead.",
                },
              },
              {
                "@type": "Question",
                name: "How does Vocolens show emotions across the week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Mood Story maps your dominant emotion to every weekday across 30 days using words rather than scores, so you can see your emotional rhythm by day.",
                },
              },
              {
                "@type": "Question",
                name: "Can I hide advanced analytics if they overwhelm me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Three core sections show by default and the rest of the emotional dashboard — landscape, body map, triggers, themes — stay hidden behind an Explore deeper toggle for cognitive load control.",
                },
              },
              {
                "@type": "Question",
                name: "How does the body sensation map work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "After each entry you tap one of 8 body regions — head, face, neck, chest, stomach, arms, hands, or legs — and Vocolens builds a frequency heatmap of where you tap most often over time.",
                },
              },
              {
                "@type": "Question",
                name: "Can I correct the AI\u2019s emotion analysis if it gets it wrong?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every entry\u2019s emotion and valence/arousal reading can be refined by you. Your correction is saved alongside the AI\u2019s original read, so both are kept for comparison and nothing is forced.",
                },
              },
              {
                "@type": "Question",
                name: "Does Vocolens have achievements or badges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Vocolens has a Milestones section with unlockable badges for consistency, entry counts, and emotional breakthroughs, each with a story and a tip, and each shareable once unlocked.",
                },
              },
              {
                "@type": "Question",
                name: "Can I share my Vocolens insights with a therapist?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Vocolens builds a report over any date range covering mood trends, dominant emotions, body patterns, and triggers, then shares it as a file you can open, print, or save anywhere.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

function FeatureObserver({
  id,
  onVisible,
  children,
}: {
  id: string;
  onVisible: (id: string) => void;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(id);
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return <div ref={ref}>{children}</div>;
}
