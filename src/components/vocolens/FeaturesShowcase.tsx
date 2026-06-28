import { AnimatedSection, AnimatedGrid } from './AnimatedSection';
import {
  CalendarDays,
  BookOpenText,
  BarChart3,
  ChevronDownCircle,
  Map,
  Activity,
  Sparkles,
  Zap,
  Repeat,
  Clock,
} from 'lucide-react';

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
  // 30-day dot grid, ~14 active days, soft pulse on a couple
  const days = Array.from({ length: 30 }, (_, i) => i);
  const active = new Set([1, 2, 4, 5, 8, 10, 11, 14, 17, 18, 19, 22, 25, 28]);
  const pulse = new Set([18, 25]);
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.04] to-white border border-primary/10">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <p className="text-3xl font-bold text-primary leading-none">14</p>
          <p className="text-sm text-text-muted mt-1">days this month</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-text-secondary">Longest run · 6</p>
          <p className="text-xs text-text-muted">Total · 87</p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        {days.map((d) => (
          <span
            key={d}
            className={`aspect-square rounded-full ${
              active.has(d)
                ? pulse.has(d)
                  ? 'bg-primary animate-pulse'
                  : 'bg-primary/70'
                : 'bg-primary/10'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-text-muted mt-4 italic">No streaks, no guilt — just presence</p>
    </div>
  );
}

function WeeklyReflectionVisual() {
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50/60 via-white to-primary/[0.04] border border-primary/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">
        Your week · Mar 18 – Mar 24
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Monday opened with tension around the deadline. By Wednesday you&apos;d
        named it — and the calm followed. Friday brought a quiet breakthrough
        about boundaries with your team.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {['Work pressure', 'Self-trust', 'Rest'].map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary font-semibold">
            {t}
          </span>
        ))}
      </div>
      <div className="rounded-xl bg-white border border-primary/10 px-4 py-3">
        <p className="text-sm text-text-secondary italic">
          &ldquo;You spoke kindly to yourself three times this week. Try one more.&rdquo;
        </p>
      </div>
    </div>
  );
}

function MoodStoryVisual() {
  const week = [
    { d: 'Mon', e: 'Trust', c: '#10B981' },
    { d: 'Tue', e: 'Fear', c: '#8E6BFF' },
    { d: 'Wed', e: 'Anticipation', c: '#F97316' },
    { d: 'Thu', e: 'Happiness', c: '#F5B700' },
    { d: 'Fri', e: 'Surprise', c: '#06B6D4' },
    { d: 'Sat', e: 'Happiness', c: '#F5B700' },
    { d: 'Sun', e: 'Trust', c: '#10B981' },
  ];
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.04] to-white border border-primary/10">
      <div className="grid grid-cols-7 gap-2 items-end h-44">
        {week.map((w, i) => (
          <div key={w.d} className="flex flex-col items-center gap-2">
            <div
              className="w-full rounded-t-lg transition-all"
              style={{
                background: w.c,
                height: `${50 + ((i * 37) % 45)}%`,
                opacity: 0.85,
              }}
              aria-label={`${w.d}: ${w.e}`}
            />
            <span className="text-[10px] font-semibold text-text-secondary">{w.d}</span>
            <span className="text-[9px] text-text-muted leading-tight text-center">{w.e}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-muted mt-4 italic">Words, not numbers — one dominant emotion per day</p>
    </div>
  );
}

function ExploreDeeperVisual() {
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.04] to-white border border-primary/10">
      <div className="space-y-3 mb-4">
        {['Journal calendar', 'Weekly reflection', 'Mood story'].map((s) => (
          <div key={s} className="rounded-xl border border-primary/15 bg-white px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-text-primary">{s}</span>
            <span className="text-xs text-emerald-600 font-semibold">Visible</span>
          </div>
        ))}
      </div>
      <button className="w-full rounded-xl border border-dashed border-primary/30 bg-primary/[0.04] px-4 py-3 flex items-center justify-center gap-2 text-primary text-sm font-semibold">
        <ChevronDownCircle className="w-4 h-4" />
        Explore deeper · 7 more
      </button>
    </div>
  );
}

function EmotionalLandscapeVisual() {
  const pins = [
    { x: 22, y: 28 }, { x: 30, y: 35 }, { x: 38, y: 30 }, { x: 28, y: 42 },
    { x: 65, y: 70 }, { x: 72, y: 78 }, { x: 68, y: 65 }, { x: 75, y: 72 },
    { x: 55, y: 50 }, { x: 42, y: 60 },
  ];
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50 via-white to-blue-50 border border-primary/10">
      <div className="relative aspect-[4/3] rounded-xl bg-white/60 border border-primary/10">
        <div className="absolute inset-y-3 left-1/2 w-px bg-primary/20" />
        <div className="absolute inset-x-3 top-1/2 h-px bg-primary/20" />
        <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-text-muted">Activated</span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-text-muted">Calm</span>
        <span className="absolute top-1/2 left-1 -translate-y-1/2 text-[10px] font-semibold text-text-muted">Unpleasant</span>
        <span className="absolute top-1/2 right-1 -translate-y-1/2 text-[10px] font-semibold text-text-muted">Pleasant</span>
        <span className="absolute top-[14%] left-[14%] text-[10px] font-semibold text-rose-400/80">Tense</span>
        <span className="absolute bottom-[14%] right-[14%] text-[10px] font-semibold text-emerald-500/80">Calm</span>
        {pins.map((p, i) => (
          <span
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-primary shadow-sm ring-2 ring-primary/20"
            style={{ top: `${p.y}%`, left: `${p.x}%` }}
          />
        ))}
      </div>
      <p className="text-xs text-text-muted mt-3 italic">Two clusters: Tense (work week) and Calm (weekends)</p>
    </div>
  );
}

function BodyMapVisual() {
  const regions = [
    { name: 'Head', heat: 0.2 },
    { name: 'Face', heat: 0.15 },
    { name: 'Neck', heat: 0.55 },
    { name: 'Chest', heat: 0.85 },
    { name: 'Stomach', heat: 0.7 },
    { name: 'Arms', heat: 0.1 },
    { name: 'Hands', heat: 0.45 },
    { name: 'Legs', heat: 0.1 },
  ];
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-rose-50/60 via-white to-primary/[0.04] border border-primary/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">
        Where stress lives · last 30 days
      </p>
      <div className="space-y-2">
        {regions.map((r) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-16 text-xs font-semibold text-text-secondary">{r.name}</span>
            <div className="flex-1 h-3 rounded-full bg-primary/8 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${r.heat * 100}%`,
                  background: `linear-gradient(90deg, hsl(${200 - r.heat * 180}, 80%, 60%), hsl(${200 - r.heat * 180}, 80%, 50%))`,
                }}
              />
            </div>
            <span className="text-[10px] font-semibold text-text-muted w-8 text-right">
              {Math.round(r.heat * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeepInsightsVisual() {
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.05] to-white border border-primary/10">
      <div className="rounded-xl bg-white border border-primary/15 p-5 shadow-clay-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          One insight · this week
        </p>
        <p className="text-text-primary font-semibold mb-2 text-lg leading-snug">
          You name fear faster than joy.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed">
          Over the last 14 entries, your fear vocabulary expanded 3× faster than
          your happiness vocabulary. A gentle invitation: name one good thing
          before naming the worry.
        </p>
        <button className="mt-4 text-sm font-semibold text-primary">See more →</button>
      </div>
    </div>
  );
}

function TriggersVisual() {
  const triggers = [
    { topic: 'Work', shift: '+62%', dir: 'up' },
    { topic: 'Sleep', shift: '−28%', dir: 'down' },
    { topic: 'Money', shift: '+41%', dir: 'up' },
    { topic: 'Family', shift: '+18%', dir: 'up' },
  ];
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.04] to-white border border-primary/10">
      <div className="flex gap-2 mb-4">
        {['7d', '14d', '30d'].map((r, i) => (
          <span
            key={r}
            className={`text-xs px-3 py-1 rounded-full font-semibold ${
              i === 1
                ? 'bg-primary text-white'
                : 'bg-primary/8 text-primary/70'
            }`}
          >
            {r}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {triggers.map((t) => (
          <li
            key={t.topic}
            className="flex items-center justify-between rounded-xl border border-primary/10 bg-white px-4 py-3"
          >
            <span className="text-sm font-semibold text-text-primary">{t.topic}</span>
            <span
              className={`text-sm font-bold ${
                t.dir === 'up' ? 'text-rose-500' : 'text-emerald-600'
              }`}
            >
              {t.shift}
            </span>
          </li>
        ))}
      </ul>
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
    <div className="rounded-2xl p-5 bg-gradient-to-br from-primary/[0.04] to-white border border-primary/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4">
        Themes · this month
      </p>
      <ul className="space-y-2 mb-4">
        {themes.map((t) => (
          <li key={t.name} className="flex items-center gap-3">
            <span className="w-24 text-sm font-semibold text-text-primary">{t.name}</span>
            <div className="flex-1 h-2.5 rounded-full bg-primary/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary"
                style={{ width: `${(t.count / max) * 100}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-text-muted w-6 text-right">{t.count}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-xl bg-white border border-primary/15 px-4 py-3">
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
    { t: '6a', v: 35 },
    { t: '9a', v: 78 },
    { t: '12p', v: 55 },
    { t: '3p', v: 40 },
    { t: '6p', v: 62 },
    { t: '9p', v: 85 },
  ];
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50/60 via-white to-primary/[0.04] border border-primary/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4">
        Mood by hour
      </p>
      <div className="flex items-end gap-2 h-32 mb-2">
        {slots.map((s) => (
          <div key={s.t} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
              style={{ height: `${s.v}%` }}
            />
            <span className="text-[10px] font-semibold text-text-muted">{s.t}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-muted italic">Peaks at 9am & 9pm, dip mid-afternoon</p>
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
      'Across all your entries, certain topics surface again and again. Vocolens counts them, ranks them, and gives you one concrete micro-action for your most dominant theme: \u201CWork appeared 12 times — pause and name the feeling before reacting.\u201D',
    outcome: 'See the narrative. Then decide if you want to keep writing it.',
    visual: <ThemesVisual />,
  },
  {
    id: 'time-of-day',
    eyebrow: 'Time of day',
    icon: Clock,
    headline: 'Morning you and evening you are different people. Now you have proof.',
    body:
      'Vocolens breaks your emotional profile by time slot. See which hours your mood peaks, which hours it dips, and where your entries cluster. The data was always in your timestamps — now it\u2019s visible.',
    outcome: 'Schedule hard conversations for your strong hours. Protect the weak ones.',
    visual: <TimeOfDayVisual />,
  },
];

export function FeaturesShowcase() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Inside Vocolens
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Ten ways to finally understand yourself
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Every screen in Vocolens has one job: turn your voice into clarity
            you can act on — without overwhelm, streaks, or guilt.
          </p>
        </AnimatedSection>
      </section>

      {/* Feature sections */}
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-24 space-y-16 lg:space-y-24">
        {features.map((f, i) => {
          const Icon = f.icon;
          const reverse = i % 2 === 1;
          return (
            <AnimatedSection
              key={f.id}
              animation={reverse ? 'fade-in-right' : 'fade-in-left'}
              delay={0.05}
            >
              <article
                id={f.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-32 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                      {f.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                    {f.headline}
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed mb-5">
                    {f.body}
                  </p>
                  <div className="rounded-xl bg-primary/5 border-l-4 border-primary px-4 py-3">
                    <p className="text-primary text-base leading-relaxed italic">
                      {f.outcome}
                    </p>
                  </div>
                </div>
                <div>{f.visual}</div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatedSection
          animation="fade-in-up"
          className="bg-white rounded-3xl shadow-clay-lg p-10 lg:p-14 border border-primary/10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            All ten features. One quiet app.
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Private. Powerful. Launching soon. Get in early.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
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
