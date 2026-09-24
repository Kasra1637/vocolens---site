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
  quote: string;
  quoteAuthor: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Data — every feature is 100% implemented in the app codebase
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
      "Executive dysfunction makes starting feel impossible",
      "Racing thoughts outpace writing speed",
      "Emotional dysregulation hits without warning",
      "Difficulty building consistent habits",
    ],
    features: [
      {
        feature: "Voice-first input",
        benefit:
          "No blank page, no writing paralysis. Just speak — capture thoughts at the speed they arrive. Real-time transcription turns speech into text instantly.",
      },
      {
        feature: "AI emotion detection",
        benefit:
          "The AI analyzes the words and language in what you say to identify emotions you might not recognize in the moment — labeling them so you don't have to.",
      },
      {
        feature: "Self-correction that tunes later reads",
        benefit:
          "Tell the AI \"that's not anxiety — that's excitement for me.\" The correction is stored and weighted into later analysis, with your most recent corrections counting most.",
      },
      {
        feature: "Body heatmap with time tracking",
        benefit:
          "See where tension and stress show up in your body across 7-day, 14-day, or 30-day windows. The heatmap aggregates every session to reveal physical patterns.",
      },
      {
        feature: "Presence-based milestones",
        benefit:
          "No broken streaks. No guilt. 21 badges reward showing up — from your first entry to 100-day streaks — without punishing you for missing a day.",
      },
      {
        feature: "Pattern detection",
        benefit:
          "The app tracks topic-emotion correlations, mood cycles, and time-of-day patterns across your entries — surfacing triggers you can't self-monitor in real time.",
      },
    ],
    quote:
      'My thoughts race at 100 mph and writing them down feels like trying to catch a waterfall with a teaspoon. Speaking into Vocolens is instant relief — and the AI actually gets that my "anxiety" is usually just excitement now.',
    quoteAuthor: "Jordan, ADHD & Creative",
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
      "Emotions register as vague physical sensations",
      "Difficulty finding words for internal experiences",
      "Disconnect between body signals and feeling labels",
      'Frustration when asked "how do you feel?"',
    ],
    features: [
      {
        feature: "AI names emotions from your speech",
        benefit:
          "Speak freely about your day — the AI analyzes your transcript to identify emotions without you needing to label them yourself.",
      },
      {
        feature: "Body region tap-map (8 zones)",
        benefit:
          "Can't name the feeling? Tap where you feel it — head, face, neck, chest, stomach, arms, hands, or legs. The app connects physical regions to emotional patterns over time.",
      },
      {
        feature: "Self-correction that personalises later reads",
        benefit:
          "Each correction shifts which labels the AI leans toward next time. A pattern needs 3 corrections across 2 weeks, and your most recent ones carry extra weight.",
      },
      {
        feature: "Valence-arousal sliders",
        benefit:
          "Skip emotion labels entirely. Just indicate pleasant/unpleasant (-100 to +100) and calm/activated (0 to 100) on simple sliders. No vocabulary needed.",
      },
      {
        feature: "Plutchik emotion vocabulary with definitions",
        benefit:
          "Eight core emotions, each with plain-language definitions, body signals, and examples. Long-press any emotion to learn what it means — building vocabulary at your own pace.",
      },
      {
        feature: "Longitudinal body heatmap",
        benefit:
          "As you journal, the heatmap aggregates body-tap data across 7, 14, or 30 days — revealing which zones consistently light up with certain emotions.",
      },
    ],
    quote:
      "I used to just say \"I feel bad.\" Now the heatmap shows me it's chest tightness + stomach tension, and after months of corrections the AI knows that combination means I'm overwhelmed, not sad. I finally have a language for myself.",
    quoteAuthor: "Sam, living with alexithymia",
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
      "Masking exhaustion leaves nothing for self-processing",
      "Interoception challenges make emotions invisible until meltdown",
      "Overwhelm accumulates without clear warning signs",
      "Social processing environments feel unsafe for vulnerability",
    ],
    features: [
      {
        feature: "Private, local-first space",
        benefit:
          "No audience, no social rules, no masking. Your journal is stored on your device behind a biometric lock — no cloud account, no synced backup, nothing shared. Speak authentically without performing for anyone.",
      },
      {
        feature: "Self-correction that adjusts to YOUR labels",
        benefit:
          "Autistic emotions don't always match neurotypical labels. Correct the AI and later analyses lean toward the labels you chose.",
      },
      {
        feature: "Predictable, structured reflection",
        benefit:
          "Multi-step reflection follows a fixed sequence: emotion selection, valence-arousal sliders, body scan. Same order every time. No surprises.",
      },
      {
        feature: "Skip anything, anytime",
        benefit:
          "Every step is optional — skip individual steps or turn off reflection entirely. Three modes (full, quick, off) respect fluctuating capacity.",
      },
      {
        feature: "Valence-arousal over emotion labels",
        benefit:
          "Don't relate to standard emotion names? Simply indicate pleasant/unpleasant and calm/activated on numeric sliders. The system works without forcing neurotypical vocabulary.",
      },
      {
        feature: "PDF reports for clinicians",
        benefit:
          "Export your journal as a styled HTML/PDF document with emotion data, body patterns, and transcripts — share with therapists without needing to verbally explain everything.",
      },
    ],
    quote:
      'After correcting the AI for months, it finally stopped calling my excitement "anxiety." It gets me now. The structured flow and body map help me understand what I\'m feeling before it becomes a meltdown.',
    quoteAuthor: "Riley, Autistic & Graduate Student",
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
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mx-auto mb-4 shadow-clay">
              <Mic className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <h3 className="font-bold text-xl mb-2">Speak, don't write</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              No executive-function barrier. No blank page. Just talk — the app captures everything.
            </p>
          </RevealItem>
          <RevealItem className="card-app rounded-3xl p-5 sm:p-8 text-center">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mx-auto mb-4 shadow-clay">
              <Sparkles className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <h3 className="font-bold text-xl mb-2">AI names your emotions</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              When feelings are hard to identify, the AI does it for you — and leans toward the
              labels you confirm over time.
            </p>
          </RevealItem>
          <RevealItem className="card-app rounded-3xl p-5 sm:p-8 text-center">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mx-auto mb-4 shadow-clay">
              <TrendingUp className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <h3 className="font-bold text-xl mb-2">Patterns emerge privately</h3>
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
          <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Talk for 60 seconds. Spot the patterns you're missing. Private, neurodivergent-first.
            Try it Free on Google Play.
          </p>
          <a
            href={GOOGLE_PLAY_URL}
            {...STORE_LINK_ATTRS}
            className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-12 sm:py-6 rounded-full whitespace-nowrap text-base sm:text-xl font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
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
  const Icon = condition.icon;

  return (
    <Reveal delay={0.05}>
      <article id={condition.slug} className="scroll-mt-32">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center shadow-clay">
            <Icon className="w-5 h-5 text-[#6A3FC0]" />
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#1e293b" }}
            >
              {condition.name}
            </h2>
            <p className="text-text-secondary text-base mt-1">{condition.tagline}</p>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Challenges this addresses
          </p>
          <div className="flex flex-wrap gap-2">
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
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {condition.features.map((item) => (
            <RevealItem key={item.feature} className="card-app rounded-3xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 mt-0.5 shadow-clay">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6A3FC0]" />
                </div>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{item.feature}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Quote */}
        <div className="bg-primary/[0.04] border border-primary/15 rounded-2xl px-6 py-5">
          <p className="text-text-primary text-base leading-relaxed italic mb-2">
            "{condition.quote}"
          </p>
          <p className="text-text-muted text-sm font-semibold">— {condition.quoteAuthor}</p>
        </div>
      </article>
    </Reveal>
  );
}
