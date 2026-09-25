import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import {
  Lightning as Zap,
  Brain,
  Question as HelpCircle,
  Microphone as Mic,
  Sparkle as Sparkles,
  TrendUp as TrendingUp,
  CaretRight,
  CheckCircle as CheckCircle2,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

/* ─────────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────────── */

interface Condition {
  id: string;
  slug: string;
  icon: Icon;
  name: string;
  tagline: string;
  color: string;
  colorLight: string;
  challenges: string[];
  features: { feature: string; benefit: string }[];
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Data — every benefit below is verified against the app source, and phrased
 * to what the app actually does. Watch the known gaps: the body heatmap is a
 * frequency count per region (no region-to-emotion link), the body map and
 * triggers each carry their own 7/14/30 windows, and the real-time
 * transcription path is disabled by design (text lands when you stop talking).
 * ────────────────────────────────────────────────────────────────────────────── */

const conditions: Condition[] = [
  {
    id: "adhd",
    slug: "adhd",
    icon: Zap,
    name: "ADHD",
    tagline: "Finally, a journal that moves as fast as your mind.",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    challenges: [
      "You can’t start, so nothing gets done",
      "Your thoughts outrun your hands",
      "Emotions hit with no warning shot",
      "Routines never survive real life",
    ],
    features: [
      {
        feature: "Say it, don't type it",
        benefit:
          "No blank page. Speak through your racing thoughts, then read them back as text the moment you stop.",
      },
      {
        feature: "A name for what you felt",
        benefit:
          "You get a name for what you felt, read from your own words, so you never hunt for the label yourself.",
      },
      {
        feature: "Correct it once, it sticks",
        benefit:
          "Correct a wrong label and it is remembered. Repeat it, and later entries lean toward your words.",
      },
      {
        feature: "See where you feel it",
        benefit:
          "Tap where you feel it, and over 7, 14, or 30 days the map shows which spots you reach for most often.",
      },
      {
        feature: "Badges that mark showing up",
        benefit:
          "21 badges mark every milestone: 3-day to 100-day streaks, entry counts, Early Bird and Night Owl.",
      },
      {
        feature: "See your own rhythms",
        benefit:
          "Recurring topics, weekday moods and time-of-day rhythms appear once you have enough entries to see.",
      },
    ],
  },
  {
    id: "alexithymia",
    slug: "alexithymia",
    icon: HelpCircle,
    name: "Alexithymia",
    tagline: "When you feel something but can't name it — we name it for you.",
    color: "#8B5CF6",
    colorLight: "#EDE9FE",
    challenges: [
      "Feelings show up as vague body sensations",
      "No words for what you’re feeling",
      "Your body knows before you do",
      "“How do you feel?” and the silence after",
    ],
    features: [
      {
        feature: "It names what you can't",
        benefit:
          "Speak about your day in whatever words you happen to have. The AI finds the emotion and offers it to you.",
      },
      {
        feature: "Point to where you feel it",
        benefit:
          "Tap where you feel it across 8 areas of the body. Over time you see which spots you reach for most often.",
      },
      {
        feature: "It remembers your words",
        benefit:
          "Fix a label once and it is remembered. Repeating a correction, especially recently, shapes later reads.",
      },
      {
        feature: "Skip the words, use sliders",
        benefit:
          "Skip the emotion grid if the words will not come. Two sliders: pleasant or unpleasant, calm or activated.",
      },
      {
        feature: "Look up any emotion",
        benefit:
          "Long-press any of the 8 emotions to read its Plutchik definition and example, written in plain language.",
      },
      {
        feature: "Your body map over time",
        benefit:
          "The heatmap counts how often each region was tagged, so your 7, 14, or 30 day view shows patterns.",
      },
    ],
  },
  {
    id: "autism",
    slug: "autism",
    icon: Brain,
    name: "Autism",
    tagline: "Process emotions on your terms — no masking required.",
    color: "#10B981",
    colorLight: "#D1FAE5",
    challenges: [
      "Masking all day leaves nothing for you",
      "You don’t feel it until it’s a meltdown",
      "Overwhelm builds with no warning signs",
      "Being vulnerable never feels safe",
    ],
    features: [
      {
        feature: "No audience, just you",
        benefit:
          "Your journal stays on your device, with an optional Face ID or PIN lock. No account, no server sync.",
      },
      {
        feature: "Labels that fit your experience",
        benefit:
          "Correct a label that does not fit autistic experience, and later entries lean toward the words you chose.",
      },
      {
        feature: "The same steps, your way",
        benefit:
          "Full mode repeats the same steps: review the AI read, adjust the two dials, then note where it landed.",
      },
      {
        feature: "Skip anything, anytime",
        benefit:
          "Every step has a skip button, and three modes let you choose full reflection, quick, or save immediately.",
      },
      {
        feature: "Prefer sliders to names",
        benefit:
          "Prefer sliders to names? Skip the emotion grid and use Unpleasant to Pleasant, then Calm to Activated.",
      },
      {
        feature: "A report for your care team",
        benefit:
          "Build a styled report of mood trends, top emotions, body patterns and triggers for your care team.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Component
 * ────────────────────────────────────────────────────────────────────────────── */

export function UseCases() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 sm:pt-32 pb-12 lg:pt-40 lg:pb-16">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            Find your condition below ↓
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#1e293b" }}
          >
            Built for minds that don't think in straight lines.
          </h1>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mx-auto">
            Vocolens is built exclusively for neurodivergent brains.
          </p>
        </Reveal>

        {/* Quick-nav pills */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {conditions.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.id}
                  href={`#${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 card-app rounded-full transition-colors duration-200 hover:border-primary/40"
                >
                  <Icon className="w-4 h-4" color={c.color} />
                  <span className="text-sm font-semibold text-text-primary">{c.name}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* How it works — 3 pillars */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <RevealGroup className="grid md:grid-cols-3 gap-6">
          <RevealItem className="card-app rounded-3xl p-5 sm:p-8 text-center">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 mx-auto mb-4 shadow-clay">
              <Mic className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <p className="font-bold text-xl mb-2">Speak, don't write</p>
            <p className="text-text-secondary text-base leading-relaxed">
              No executive-function barrier. No blank page. Just talk — the app captures everything.
            </p>
          </RevealItem>
          <RevealItem className="card-app rounded-3xl p-5 sm:p-8 text-center">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 mx-auto mb-4 shadow-clay">
              <Sparkles className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <p className="font-bold text-xl mb-2">AI names your emotions</p>
            <p className="text-text-secondary text-base leading-relaxed">
              When feelings are hard to identify, the AI does it for you — and leans toward the
              labels you confirm over time.
            </p>
          </RevealItem>
          <RevealItem className="card-app rounded-3xl p-5 sm:p-8 text-center">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 mx-auto mb-4 shadow-clay">
              <TrendingUp className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <p className="font-bold text-xl mb-2">Patterns emerge privately</p>
            <p className="text-text-secondary text-base leading-relaxed">
              See your emotional rhythms, triggers, and growth over time — at your pace, on your
              terms.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Condition sections */}
      <div className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16 lg:pb-20 space-y-16 sm:space-y-24 lg:space-y-32">
        {conditions.map((condition) => (
          <ConditionSection key={condition.id} condition={condition} />
        ))}
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <Reveal delay={0.1} className="card-app rounded-3xl p-5 sm:p-8 lg:p-12 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#1e293b" }}
          >
            Talk it out. See your patterns.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[547px] mx-auto">
            If your thoughts outrun your typing, this was built for you. Start with your 60-second
            voice entries, free to try.
          </p>
          <a
            href={GOOGLE_PLAY_URL}
            {...STORE_LINK_ATTRS}
            className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-12 sm:py-6 rounded-full whitespace-nowrap text-base sm:text-xl font-semibold btn-app-glow btn-app-float transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Get it on Google Play
            <CaretRight className="w-6 h-6" />
          </a>
        </Reveal>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Condition Section — unified layout for visual cohesion
 * ────────────────────────────────────────────────────────────────────────────── */

function ConditionSection({ condition }: { condition: Condition }) {
  return (
    <Reveal delay={0.05}>
      <article id={condition.slug} className="scroll-mt-32">
        {/* Header */}
        <div className="mb-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center"
            style={{ color: "#1e293b" }}
          >
            {condition.name}
          </h2>
          <p className="text-text-secondary text-base mt-1 text-center">{condition.tagline}</p>
        </div>

        {/* Challenges */}
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Challenges this addresses
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {condition.challenges.map((challenge) => (
              <span
                key={challenge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-text-primary card-app"
              >
                {challenge}
              </span>
            ))}
          </div>
        </div>

        {/* Features grid — 2 rows × 3 columns on desktop, consistent across all sections */}
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {condition.features.map((item) => (
            <RevealItem key={item.feature} className="card-app rounded-3xl p-5">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mb-3 mx-auto">
                <CheckCircle2 className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <p className="font-bold text-text-primary text-sm mb-1 text-center">{item.feature}</p>
              <p className="text-text-secondary text-sm leading-relaxed text-center">
                {item.benefit}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </article>
    </Reveal>
  );
}
