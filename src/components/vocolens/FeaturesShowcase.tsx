import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CalendarDays, BookOpenText, ChartBar as BarChart3, CircleChevronDown as ChevronDownCircle, Map, Activity, Sparkles, Zap, Repeat, Clock, ArrowRight } from 'lucide-react';

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

function CalendarVisual() {
  const days = Array.from({ length: 30 }, (_, i) => i);
  const active = new Set([1, 2, 4, 5, 8, 10, 11, 14, 17, 18, 19, 22, 25, 28]);
  const pulse = new Set([18, 25]);
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.06] via-white to-amber-50/40 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <p className="text-4xl font-bold text-primary leading-none">14</p>
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
            className={`aspect-square rounded-full transition-transform duration-300 hover:scale-125 ${
              active.has(d)
                ? pulse.has(d)
                  ? 'bg-primary animate-pulse shadow-sm shadow-primary/30'
                  : 'bg-primary/70'
                : 'bg-primary/10'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-text-muted mt-5 italic">No streaks, no guilt — just presence</p>
    </div>
  );
}

function WeeklyReflectionVisual() {
  const weekArc = [
    { day: 'M', mood: 'Tense', level: 30, color: '#ef4444' },
    { day: 'T', mood: 'Anxious', level: 40, color: '#f97316' },
    { day: 'W', mood: 'Calm', level: 70, color: '#10b981' },
    { day: 'T', mood: 'Focused', level: 75, color: '#06b6d4' },
    { day: 'F', mood: 'Relief', level: 85, color: '#10b981' },
    { day: 'S', mood: 'Rest', level: 60, color: '#8b5cf6' },
    { day: 'S', mood: 'Peace', level: 80, color: '#10b981' },
  ];

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50/60 via-white to-primary/[0.06] border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-full pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Your week · Mar 18 – 24
        </p>
        <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          +12% wellbeing
        </span>
      </div>

      <p className="text-text-secondary text-[15px] leading-relaxed mb-5">
        Monday opened with tension around the deadline. By Wednesday you&apos;d
        named it — and the calm followed. Friday brought a quiet breakthrough
        about boundaries with your team.
      </p>

      <div className="flex items-end gap-1.5 h-16 mb-5 px-1">
        {weekArc.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
            <div
              className="w-full rounded-md transition-all duration-300 group-hover:brightness-110 group-hover:scale-x-110"
              style={{
                height: `${d.level}%`,
                background: `linear-gradient(180deg, ${d.color}cc, ${d.color}66)`,
              }}
            />
            <span className="text-[9px] font-semibold text-text-muted">{d.day}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {[
          { label: 'Work pressure', icon: '~' },
          { label: 'Self-trust', icon: '+' },
          { label: 'Rest', icon: '+' },
        ].map((t) => (
          <span
            key={t.label}
            className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary font-semibold transition-all duration-200 hover:bg-primary/15 hover:-translate-y-0.5 flex items-center gap-1"
          >
            <span className={`text-[10px] font-bold ${t.icon === '+' ? 'text-emerald-500' : 'text-amber-500'}`}>
              {t.icon}
            </span>
            {t.label}
          </span>
        ))}
      </div>

      <div className="rounded-xl bg-gradient-to-r from-primary/[0.03] to-white border border-primary/12 px-4 py-3.5 shadow-sm relative">
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
    { d: 'Mon', e: 'Trust', c: '#10B981', intensity: 72 },
    { d: 'Tue', e: 'Fear', c: '#8E6BFF', intensity: 55 },
    { d: 'Wed', e: 'Anticipation', c: '#F97316', intensity: 80 },
    { d: 'Thu', e: 'Happiness', c: '#F5B700', intensity: 88 },
    { d: 'Fri', e: 'Surprise', c: '#06B6D4', intensity: 65 },
    { d: 'Sat', e: 'Happiness', c: '#F5B700', intensity: 90 },
    { d: 'Sun', e: 'Trust', c: '#10B981', intensity: 78 },
  ];
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.06] via-white to-cyan-50/30 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-50/40 to-transparent rounded-tr-full pointer-events-none" />

      <div className="flex items-center justify-between mb-2 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Mood story · This week
        </p>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium text-text-muted">Mostly positive</span>
        </div>
      </div>

      <p className="text-[13px] text-text-muted mb-5 relative">Dominant emotion each day</p>

      <div className="grid grid-cols-7 gap-2.5 items-end h-40 mb-3 relative">
        {week.map((w) => (
          <div key={w.d} className="flex flex-col items-center gap-1.5 group">
            <div className="relative w-full flex justify-center">
              <div
                className="w-full max-w-[32px] rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md relative overflow-hidden"
                style={{
                  height: `${w.intensity}%`,
                  minHeight: '28px',
                }}
                aria-label={`${w.d}: ${w.e}`}
              >
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(180deg, ${w.c} 0%, ${w.c}88 100%)`,
                  }}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 to-white/20" />
              </div>
            </div>
            <span className="text-[11px] font-semibold text-text-secondary mt-1">{w.d}</span>
            <span
              className="text-[9px] font-medium leading-tight text-center px-0.5 transition-colors duration-200"
              style={{ color: w.c }}
            >
              {w.e}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/8 relative">
        <div className="flex -space-x-1">
          {['#10B981', '#F5B700', '#06B6D4'].map((c, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white"
              style={{ background: c }}
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
    { name: 'Journal calendar', icon: CalendarDays, color: '#8E6BFF' },
    { name: 'Weekly reflection', icon: BookOpenText, color: '#F97316' },
    { name: 'Mood story', icon: BarChart3, color: '#06B6D4' },
  ];
  const hiddenSections = [
    'Emotional landscape', 'Body map', 'Deep insights', 'Triggers',
    'Themes', 'Time of day', 'Growth moments',
  ];

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.06] via-white to-emerald-50/30 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-4 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Your dashboard
        </p>
        <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-full border border-primary/10">
          3 of 10 active
        </span>
      </div>

      <div className="space-y-2.5 mb-5 relative">
        {visibleSections.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="rounded-xl border border-primary/12 bg-white px-4 py-3 flex items-center justify-between shadow-sm transition-all duration-200 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${s.color}15` }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                </span>
                <span className="text-sm font-semibold text-text-primary">{s.name}</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
            <span key={s} className="text-[10px] px-2 py-1 rounded-md bg-primary/[0.04] text-text-muted font-medium border border-primary/8">
              {s}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full rounded-xl border border-dashed border-primary/25 bg-gradient-to-r from-primary/[0.03] to-primary/[0.06] px-4 py-3.5 flex items-center justify-center gap-2.5 text-primary text-sm font-semibold transition-all duration-300 hover:bg-primary/[0.08] hover:border-primary/40 hover:shadow-sm group relative">
        <ChevronDownCircle className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
        Explore deeper · 7 more
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

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50/50 via-white to-blue-50/40 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-50/50 to-transparent rounded-tr-full pointer-events-none" />

      <div className="flex items-center justify-between mb-3 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Emotional landscape
        </p>
        <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-full border border-primary/10">
          Last 7 days
        </span>
      </div>

      <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-rose-50/20 via-white/80 to-emerald-50/20 border border-primary/10 overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(239,68,68,0.06)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_72%,rgba(16,185,129,0.06)_0%,transparent_45%)]" />

        <div className="absolute inset-y-4 left-1/2 w-px bg-gradient-to-b from-primary/5 via-primary/15 to-primary/5" />
        <div className="absolute inset-x-4 top-1/2 h-px bg-gradient-to-r from-primary/5 via-primary/15 to-primary/5" />

        <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-text-muted/80 uppercase tracking-wider">Activated</span>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-text-muted/80 uppercase tracking-wider">Calm</span>
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[10px] font-bold text-text-muted/80 uppercase tracking-wider">Unpleasant</span>
        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[10px] font-bold text-text-muted/80 uppercase tracking-wider">Pleasant</span>

        <div className="absolute top-[18%] left-[12%] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span className="text-[10px] font-semibold text-rose-500">Tense</span>
        </div>
        <div className="absolute bottom-[12%] right-[10%] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold text-emerald-500">Calm</span>
        </div>

        {clusters.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary transition-all duration-300 hover:scale-[1.8] hover:z-10"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size}px ${p.size / 2}px rgba(142, 107, 255, 0.15)`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        <div
          className="absolute rounded-full border border-dashed border-rose-300/50 pointer-events-none"
          style={{ top: '18%', left: '14%', width: '28%', height: '30%' }}
        />
        <div
          className="absolute rounded-full border border-dashed border-emerald-300/50 pointer-events-none"
          style={{ top: '55%', left: '55%', width: '32%', height: '34%' }}
        />
      </div>

      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-primary/8 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border border-dashed border-rose-300" />
          <span className="text-[10px] font-medium text-text-muted">Work days</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border border-dashed border-emerald-300" />
          <span className="text-[10px] font-medium text-text-muted">Weekends</span>
        </div>
        <p className="text-[10px] text-text-muted italic ml-auto">2 clusters detected</p>
      </div>
    </div>
  );
}

function BodyMapVisual() {
  const regions = [
    { name: 'Head', emoji: '🧠', heat: 0.2 },
    { name: 'Face', emoji: '😶', heat: 0.15 },
    { name: 'Neck', emoji: '🦴', heat: 0.55 },
    { name: 'Chest', emoji: '💓', heat: 0.85 },
    { name: 'Stomach', emoji: '🫁', heat: 0.7 },
    { name: 'Arms', emoji: '💪', heat: 0.1 },
    { name: 'Hands', emoji: '🤲', heat: 0.45 },
    { name: 'Legs', emoji: '🦵', heat: 0.1 },
  ];

  const getBarColor = (heat: number) => {
    const hue = 270 - heat * 40;
    const saturation = 50 + heat * 30;
    return `linear-gradient(90deg, hsl(${hue}, ${saturation}%, 72%) 0%, hsl(${hue - 10}, ${saturation + 10}%, 58%) 100%)`;
  };

  const highStress = regions.filter((r) => r.heat >= 0.7);

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-rose-50/50 via-white to-primary/[0.06] border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center justify-between mb-1 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Where stress lives
        </p>
        <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-full border border-primary/10">
          Last 30 days
        </span>
      </div>

      <p className="text-[11px] text-text-muted mb-4 relative">
        {highStress.length} region{highStress.length !== 1 ? 's' : ''} above 70% activation
      </p>

      <div className="space-y-2 relative">
        {regions.map((r) => (
          <div key={r.name} className="flex items-center gap-2.5 group">
            <span className="text-sm w-5 text-center">{r.emoji}</span>
            <span className="w-14 text-[11px] font-semibold text-text-secondary">{r.name}</span>
            <div className="flex-1 h-4 rounded-full bg-primary/[0.06] overflow-hidden border border-primary/8 relative">
              <div
                className="h-full rounded-full transition-all duration-500 group-hover:brightness-110 group-hover:shadow-sm relative"
                style={{
                  width: `${r.heat * 100}%`,
                  background: getBarColor(r.heat),
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-white/20" />
              </div>
            </div>
            <span
              className="text-[11px] font-bold w-9 text-right"
              style={{ color: r.heat >= 0.7 ? 'hsl(240, 50%, 55%)' : 'hsl(240, 20%, 60%)' }}
            >
              {Math.round(r.heat * 100)}%
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-3 border-t border-primary/8 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-2.5 rounded-full" style={{ background: getBarColor(0.2) }} />
          <span className="text-[10px] text-text-muted">Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2.5 rounded-full" style={{ background: getBarColor(0.85) }} />
          <span className="text-[10px] text-text-muted">High</span>
        </div>
        <p className="text-[10px] text-text-muted italic ml-auto">Focus: chest & stomach</p>
      </div>
    </div>
  );
}

function DeepInsightsVisual() {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.07] via-white to-amber-50/30 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay">
      <div className="rounded-xl bg-white border border-primary/15 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          One insight · this week
        </p>
        <p className="text-text-primary font-semibold mb-2 text-lg leading-snug">
          You name fear faster than joy.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed">
          Over the last 14 entries, your fear vocabulary expanded 3x faster than
          your happiness vocabulary. A gentle invitation: name one good thing
          before naming the worry.
        </p>
        <button className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 transition-all duration-200 hover:gap-2">
          See more <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function TriggersVisual() {
  const triggers = [
    { topic: 'Work', emoji: '💼', shift: '+62%', dir: 'up', bar: 0.62 },
    { topic: 'Sleep', emoji: '😴', shift: '-28%', dir: 'down', bar: 0.28 },
    { topic: 'Money', emoji: '💰', shift: '+41%', dir: 'up', bar: 0.41 },
    { topic: 'Family', emoji: '👨‍👩‍👧', shift: '+18%', dir: 'up', bar: 0.18 },
  ];
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.06] via-white to-rose-50/30 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-rose-50/40 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-2 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Trigger analysis
        </p>
        <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-full border border-primary/10">
          Correlation strength
        </span>
      </div>

      <div className="flex gap-2 mb-5 relative">
        {['7d', '14d', '30d'].map((r, i) => (
          <span
            key={r}
            className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
              i === 1
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-primary/8 text-primary/60 hover:bg-primary/15 hover:text-primary/80'
            }`}
          >
            {r}
          </span>
        ))}
      </div>

      <ul className="space-y-2 relative">
        {triggers.map((t) => (
          <li
            key={t.topic}
            className="rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span className="text-sm">{t.emoji}</span>
                <span className="text-sm font-semibold text-text-primary">{t.topic}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                    t.dir === 'up'
                      ? 'bg-rose-50 text-rose-500'
                      : 'bg-emerald-50 text-emerald-600'
                  }`}
                >
                  {t.dir === 'up' ? '↑' : '↓'}
                </span>
                <span
                  className={`text-sm font-bold ${
                    t.dir === 'up' ? 'text-rose-500' : 'text-emerald-600'
                  }`}
                >
                  {t.shift}
                </span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-primary/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 group-hover:brightness-110"
                style={{
                  width: `${t.bar * 100}%`,
                  background:
                    t.dir === 'up'
                      ? 'linear-gradient(90deg, hsl(350, 70%, 72%), hsl(340, 75%, 58%))'
                      : 'linear-gradient(90deg, hsl(160, 60%, 65%), hsl(155, 65%, 50%))',
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="text-[10px] text-text-muted italic mt-4 pt-3 border-t border-primary/8 relative">
        Top trigger: Work — strongest correlation with elevated stress
      </p>
    </div>
  );
}

function ThemesVisual() {
  const themes = [
    { name: 'Work', count: 12 },
    { name: 'Sleep', count: 8 },
    { name: 'Relationships', count: 6 },
    { name: 'Health', count: 4 },
  ];
  const max = 12;
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/[0.06] via-white to-emerald-50/30 border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4">
        Themes · this month
      </p>
      <ul className="space-y-3 mb-5">
        {themes.map((t) => (
          <li key={t.name} className="flex items-center gap-3 group">
            <span className="w-24 text-sm font-semibold text-text-primary">{t.name}</span>
            <div className="flex-1 h-3 rounded-full bg-primary/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-500 group-hover:from-primary/60 group-hover:to-primary"
                style={{ width: `${(t.count / max) * 100}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-text-muted w-6 text-right">{t.count}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-xl bg-white border border-primary/15 px-4 py-3 shadow-sm">
        <p className="text-xs uppercase tracking-widest font-semibold text-primary/70 mb-1">
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
    { t: '6a', emoji: '🌅', v: 35, label: 'Dawn' },
    { t: '9a', emoji: '☀️', v: 78, label: 'Morning' },
    { t: '12p', emoji: '🌤️', v: 55, label: 'Noon' },
    { t: '3p', emoji: '😮‍💨', v: 40, label: 'Afternoon' },
    { t: '6p', emoji: '🌆', v: 62, label: 'Evening' },
    { t: '9p', emoji: '🌙', v: 85, label: 'Night' },
  ];
  const peak = slots.reduce((a, b) => (a.v > b.v ? a : b));
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50/50 via-white to-primary/[0.06] border border-primary/10 shadow-clay-sm transition-shadow duration-300 hover:shadow-clay relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-1 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
          Mood by hour
        </p>
        <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-full border border-primary/10">
          7-day average
        </span>
      </div>

      <p className="text-[11px] text-text-muted mb-4 relative">
        Peak intensity at {peak.t} ({peak.v}%)
      </p>

      <div className="flex items-end gap-2.5 h-32 mb-3 relative">
        {slots.map((s) => (
          <div key={s.t} className="flex-1 flex flex-col items-center gap-1 group">
            <span className="text-[10px] font-bold text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {s.v}%
            </span>
            <div className="w-full relative">
              <div
                className="w-full rounded-lg bg-gradient-to-t from-primary/30 to-primary transition-all duration-300 group-hover:from-primary/40 group-hover:to-primary group-hover:shadow-sm relative"
                style={{ height: `${s.v}%`, minHeight: '12px' }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-white/15" />
              </div>
            </div>
            <span className="text-xs mt-0.5">{s.emoji}</span>
            <span className="text-[9px] font-semibold text-text-muted">{s.t}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white border border-primary/15 px-4 py-3 shadow-sm relative">
        <p className="text-xs uppercase tracking-widest font-semibold text-primary/70 mb-1">
          Insight
        </p>
        <p className="text-sm text-text-secondary">
          Peaks at 9am & 9pm — dip mid-afternoon suggests energy depletion pattern.
        </p>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */

const features: Feature[] = [
  {
    id: 'journal-calendar',
    eyebrow: 'Journal calendar',
    icon: CalendarDays,
    headline: 'You showed up. That\u2019s the whole point.',
    body:
      'No streaks. No guilt. Just dots on a calendar — each one proof you checked in with yourself. Vocolens counts the days you showed up this month, your total days journaled, and your longest run. Miss a day? Nothing breaks. Come back whenever. The calendar celebrates presence, not perfection.',
    outcome: '\u201CI journaled 14 times this month without once feeling like I failed.\u201D',
    visual: <CalendarVisual />,
  },
  {
    id: 'weekly-reflection',
    eyebrow: 'Weekly reflection',
    icon: BookOpenText,
    headline: 'Your week, told back to you like a story you can finally understand.',
    body:
      'Every week, Vocolens reads your entries and writes a warm, personal narrative — connecting your Monday tension to your Wednesday calm to your Friday breakthrough. Key themes. Growth moments. A single encouraging sentence for the week ahead. You never have to summarise your own feelings again.',
    outcome:
      'The kind of weekly debrief a thoughtful friend would give you — generated in seconds, updated with every new entry.',
    visual: <WeeklyReflectionVisual />,
  },
  {
    id: 'mood-story',
    eyebrow: 'Mood story',
    icon: BarChart3,
    headline: 'See which emotion runs each day of your week.',
    body:
      'Trust on Monday. Anticipation on Wednesday. Happiness on Saturday. Vocolens maps your dominant emotion to every weekday across 30 days — no guessing, no \u201CI think I feel\u2026\u201D Each bar tells you the word, not the number. The Emotions tab shows what\u2019s rising, what\u2019s fading, and which feeling shifted most this week.',
    outcome: 'Know your emotional rhythm by day — and plan your life around it.',
    visual: <MoodStoryVisual />,
  },
  {
    id: 'explore-deeper',
    eyebrow: 'Explore deeper',
    icon: ChevronDownCircle,
    headline: 'Go as deep as you want. Or don\u2019t. Both are fine.',
    body:
      'Three sections show by default — enough to understand your week without overwhelm. When you\u2019re ready for more, tap \u201CExplore deeper\u201D to reveal your full emotional dashboard: landscape mapping, body sensation heatmap, AI-powered triggers, and pattern detection. It\u2019s all there. It waits for you.',
    outcome:
      'Full control over your cognitive load. See more when you\u2019re sharp. See less when you\u2019re overstimulated.',
    visual: <ExploreDeeperVisual />,
  },
  {
    id: 'emotional-landscape',
    eyebrow: 'Emotional landscape',
    icon: Map,
    headline: 'Plot yourself on the map of how humans feel.',
    body:
      'Every entry drops a pin: calm or activated? Pleasant or unpleasant? Over time, your pins form a constellation — your emotional fingerprint. See if you\u2019re stuck in one quadrant. See when you escape. Tap any dot to relive that exact moment.',
    outcome:
      '\u201CI live in Tense during work weeks and shift to Calm every Saturday at 6pm.\u201D — self-knowledge that changes real decisions.',
    visual: <EmotionalLandscapeVisual />,
  },
  {
    id: 'body-map',
    eyebrow: 'Body sensation map',
    icon: Activity,
    headline: 'Your body keeps score. Now you can finally read it.',
    body:
      'After each entry, tap where you felt it — chest, stomach, neck, hands, or any of the 8 body regions. Over time, Vocolens builds a heatmap of your physical stress signature. The pattern is often the first warning sign — days before your mood catches up.',
    outcome: 'Catch the burnout in your chest before it reaches your head.',
    visual: <BodyMapVisual />,
  },
  {
    id: 'deep-insights',
    eyebrow: 'Deep insights',
    icon: Sparkles,
    headline: 'An AI that studied you — not a textbook.',
    body:
      'One insight at a time. That\u2019s all. No wall of cards competing for attention. Once you\u2019ve built up a few entries, Vocolens surfaces the single most important pattern it found — a recurring loop, a growth moment you missed, or a gentle warning. Tap \u201CSee more\u201D when you\u2019re ready. Or don\u2019t.',
    outcome: 'Personalised emotional intelligence that respects your bandwidth.',
    visual: <DeepInsightsVisual />,
  },
  {
    id: 'triggers',
    eyebrow: 'Emotional triggers',
    icon: Zap,
    headline: 'Name the thing that keeps setting you off.',
    body:
      'Vocolens cross-references your topics with your emotional spikes over 7, 14, or 30 days. Work. Relationships. Health. Money. It shows you which subjects reliably shift your state — and in which direction. Not a guess. A correlation built from your own voice.',
    outcome: 'Stop being blindsided. See the trigger before the spiral starts.',
    visual: <TriggersVisual />,
  },
  {
    id: 'themes',
    eyebrow: 'Emotional themes',
    icon: Repeat,
    headline: 'The story you keep telling yourself on repeat.',
    body:
      'Certain topics keep resurfacing. Vocolens ranks them and offers one concrete micro-action for your top theme — so patterns become choices, not loops.',
    outcome: 'See the narrative. Then decide if you want to keep writing it.',
    visual: <ThemesVisual />,
  },
  {
    id: 'time-of-day',
    eyebrow: 'Time of day',
    icon: Clock,
    headline: 'Morning you and evening you are different people. Now you have proof.',
    body:
      'Your mood has a schedule. Vocolens maps peaks, dips, and entry clusters by hour — turning timestamps you already left into patterns you can act on.',
    outcome: 'Schedule hard conversations for your strong hours. Protect the weak ones.',
    visual: <TimeOfDayVisual />,
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
              className={`group flex items-center gap-3 transition-all duration-300 ${isActive ? '' : 'opacity-50 hover:opacity-100'}`}
            >
              <span className={`block rounded-full transition-all duration-300 ${isActive ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-primary/40 group-hover:bg-primary/70'}`} />
              <span className={`text-xs font-medium transition-all duration-300 ${isActive ? 'text-primary opacity-100 translate-x-0' : 'text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
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
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
        <AnimatedSection animation="fade-in-up" className="relative text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-6 border border-primary/10">
            <Sparkles className="w-3.5 h-3.5" />
            Inside Vocolens
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ten ways to finally{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              understand yourself
            </span>
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Every screen in Vocolens has one job: turn your voice into clarity
            you can act on — without overwhelm, streaks, or guilt.
          </p>
        </AnimatedSection>

        {/* Feature icon strip */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="relative mt-12">
          <div className="flex justify-center flex-wrap gap-3 max-w-3xl mx-auto">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                    {f.eyebrow}
                  </span>
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Feature navigation sidebar */}
      <FeatureNav activeId={activeFeature} />

      {/* Feature sections */}
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-24 space-y-20 lg:space-y-32">
        {features.map((f, i) => {
          const Icon = f.icon;
          const reverse = i % 2 === 1;
          return (
            <AnimatedSection
              key={f.id}
              animation={reverse ? 'fade-in-right' : 'fade-in-left'}
              delay={0.05}
            >
              <FeatureObserver id={f.id} onVisible={setActiveFeature}>
                <article
                  id={f.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                        {f.eyebrow}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5">
                      {f.headline}
                    </h2>
                    <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-6">
                      {f.body}
                    </p>
                    <div className="rounded-xl bg-gradient-to-r from-primary/5 to-primary/[0.02] border-l-4 border-primary px-5 py-4">
                      <p className="text-primary text-base leading-relaxed italic">
                        {f.outcome}
                      </p>
                    </div>
                  </div>
                  <div className="lg:sticky lg:top-32">{f.visual}</div>
                </article>
              </FeatureObserver>
            </AnimatedSection>
          );
        })}
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <AnimatedSection
          animation="fade-in-up"
          className="relative overflow-hidden bg-white rounded-3xl shadow-clay-lg p-8 lg:p-12 border border-primary/10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              All ten features. One quiet app.
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Private. Powerful. Launching soon. Get in early.
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* JSON-LD: FeatureList for SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Vocolens',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Android',
            featureList: features.map((f) => `${f.eyebrow}: ${f.headline}`),
          }),
        }}
      />

      {/* JSON-LD: FAQ for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Does Vocolens use streaks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Vocolens deliberately avoids streaks and guilt mechanics. The Journal Calendar shows the days you checked in, your total entries, and your longest run — but nothing breaks if you miss a day.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the Weekly Reflection?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every week Vocolens reads your entries and writes a short personal narrative that connects your themes, growth moments, and one encouraging sentence for the week ahead.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Vocolens show emotions across the week?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Mood Story maps your dominant emotion to every weekday across 30 days using words rather than scores, so you can see your emotional rhythm by day.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I hide advanced analytics if they overwhelm me?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Three core sections show by default and the rest of the emotional dashboard — landscape, body map, triggers, themes — stay hidden behind an Explore deeper toggle for cognitive load control.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the body sensation map work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After each entry you tap one of 8 body regions — head, face, neck, chest, stomach, arms, hands, or legs — and Vocolens builds a heatmap of your physical stress signature over time.',
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
      { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return <div ref={ref}>{children}</div>;
}

