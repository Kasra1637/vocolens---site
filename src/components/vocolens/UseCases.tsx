import { Link } from '@tanstack/react-router';
import { AnimatedSection, AnimatedGrid } from './AnimatedSection';
import { Zap, Brain, Circle as HelpCircle, Mic, Sparkles, TrendingUp, ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────────── */

interface Condition {
  id: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
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
 * Data
 * ────────────────────────────────────────────────────────────────────────────── */

const conditions: Condition[] = [
  {
    id: 'adhd',
    slug: 'adhd',
    icon: Zap,
    name: 'ADHD',
    tagline: 'Finally, a journal that moves as fast as your mind.',
    color: '#F59E0B',
    colorLight: '#FEF3C7',
    challenges: [
      'Executive dysfunction makes starting feel impossible',
      'Racing thoughts outpace writing speed',
      'Emotional dysregulation hits without warning',
      'Difficulty building consistent habits',
    ],
    features: [
      { feature: 'Voice-first input', benefit: 'No blank page, no writing paralysis. Just speak — capture thoughts at the speed they arrive.' },
      { feature: 'AI emotion naming', benefit: 'When feelings hit fast and hard, the AI labels them instantly so you don\'t have to untangle them alone.' },
      { feature: 'Self-correction that learns your brain', benefit: 'Tell the AI "that\'s not anxiety — that\'s excitement for me." It remembers. Over time, it stops confusing your restless energy with distress.' },
      { feature: 'Body heatmap over time', benefit: 'ADHD overwhelm lives in the body before you notice it mentally. The heatmap shows where stress accumulates across weeks — catching burnout before it hits.' },
      { feature: 'Streaks replaced by presence', benefit: 'No broken streaks. No guilt. Badges and milestones reward showing up without punishing you for missing a day.' },
      { feature: '50-second minimum', benefit: 'Low commitment, high impact. Speak for under a minute and get a full emotional snapshot.' },
      { feature: 'ADHD-aware personalization', benefit: 'The AI learns that your high energy is excitement, not anxiety — it adapts to how your brain actually works.' },
      { feature: 'Pattern detection', benefit: 'Your brain can\'t self-monitor in real time — but the app tracks mood cycles, triggers, and time-of-day patterns for you.' },
    ],
    quote: 'My thoughts race at 100 mph and writing them down feels like trying to catch a waterfall with a teaspoon. Speaking into Vocolens is instant relief — and the AI actually gets that my "anxiety" is usually just excitement now.',
    quoteAuthor: 'Jordan, ADHD & Creative',
  },
  {
    id: 'alexithymia',
    slug: 'alexithymia',
    icon: HelpCircle,
    name: 'Alexithymia',
    tagline: 'When you feel something but can\'t name it — we name it for you.',
    color: '#8B5CF6',
    colorLight: '#EDE9FE',
    challenges: [
      'Emotions register as vague physical sensations',
      'Difficulty finding words for internal experiences',
      'Disconnect between body signals and feeling labels',
      'Frustration when asked "how do you feel?"',
    ],
    features: [
      { feature: 'AI emotion detection from speech', benefit: 'Speak freely about your day — the AI identifies emotions from your words, tone, and context without you needing to label them.' },
      { feature: 'Body heatmap builds your emotion dictionary', benefit: 'Over 30 days, the heatmap reveals: "chest tightness always appears with what the AI calls apprehension." Your body becomes a map to emotions you couldn\'t name before.' },
      { feature: 'Self-correction trains a personal translator', benefit: 'Each correction teaches the AI your unique emotional dialect. After 50+ entries, it speaks YOUR language — not a textbook\'s. It becomes fluent in you.' },

      { feature: 'Body region tap-map (8 zones)', benefit: 'Can\'t name the feeling? Tap where you feel it — head, chest, stomach, hands. The app connects your physical experience to emotional patterns over time.' },
      { feature: 'Physical sensation vocabulary', benefit: '16 pre-defined body sensations (chest tightness, racing heart, heavy limbs, tingling) give words to physical experiences when emotion words fail.' },
      { feature: 'Valence-arousal sliders', benefit: 'Skip emotion labels entirely. Just indicate pleasant/unpleasant and calm/activated on simple sliders. No vocabulary needed.' },
      { feature: 'Gradual emotional literacy', benefit: 'Plutchik\'s wheel with tap-to-learn definitions builds emotion vocabulary over time — at your own pace, never forced.' },
    ],
    quote: 'I used to just say "I feel bad." Now the heatmap shows me it\'s chest tightness + stomach tension, and after months of corrections the AI knows that combination means I\'m overwhelmed, not sad. I finally have a language for myself.',
    quoteAuthor: 'Sam, living with alexithymia',
  },
  {
    id: 'autism',
    slug: 'autism',
    icon: Brain,
    name: 'Autism',
    tagline: 'Process emotions on your terms — no masking required.',
    color: '#10B981',
    colorLight: '#D1FAE5',
    challenges: [
      'Masking exhaustion leaves nothing for self-processing',
      'Interoception challenges make emotions invisible until meltdown',
      'Overwhelm accumulates without clear warning signs',
      'Social processing environments feel unsafe for vulnerability',
    ],
    features: [
      { feature: 'Private, non-social space', benefit: 'No audience, no social rules, no masking. Speak authentically without performing for anyone.' },

      { feature: 'Self-correction teaches YOUR emotional map', benefit: 'Autistic emotions don\'t always match neurotypical labels. Correct the AI — "that high arousal isn\'t fear, it\'s anticipation for me" — and it learns your neurology, not a textbook.' },
      { feature: 'Interoception body map (8 zones)', benefit: 'Build internal awareness with structured body scans. Tap where you feel something — even if you can\'t name it. The app connects body signals to emotions over time.' },
      { feature: 'Predictable, structured flow', benefit: 'Multi-step reflection follows a clear sequence: emotions, sliders, body scan, grounding. Same order every time. No surprises.' },

      { feature: 'Skip anything, anytime', benefit: 'Every step is optional. Respects fluctuating capacity — especially during burnout periods.' },
      { feature: 'PDF reports for clinicians', benefit: 'Share body patterns and emotional data with therapists without needing to verbally explain everything in session.' },
    ],
    quote: 'After correcting the AI for months, it finally stopped calling my excitement "anxiety." It gets me now. The structured flow and body map help me understand what I\'m feeling before it becomes a meltdown.',
    quoteAuthor: 'Riley, Autistic & Graduate Student',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Component
 * ────────────────────────────────────────────────────────────────────────────── */

export function UseCases() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Find your condition below ↓
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Built for minds that don't think in straight lines.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Vocolens is built exclusively for neurodivergent brains.
          </p>
        </AnimatedSection>

        {/* Quick-nav pills */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {conditions.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.id}
                  href={`#${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-clay-sm border border-primary/10 hover-lift transition-all duration-200 hover:border-primary/30"
                >
                  <Icon className="w-4 h-4" style={{ color: c.color }} />
                  <span className="text-sm font-semibold text-text-primary">{c.name}</span>
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* How it works — 3 pillars */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <AnimatedGrid
          className="grid md:grid-cols-3 gap-6"
          animation="fade-in-up"
          staggerDelay={0.12}
        >
          <div className="bg-white rounded-3xl p-8 shadow-clay border border-primary/10 text-center hover-lift">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mic className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">Speak, don't write</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              No executive-function barrier. No blank page. Just talk — the app captures everything.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-clay border border-primary/10 text-center hover-lift">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">AI names your emotions</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              When feelings are hard to identify, the AI does it for you — and learns your unique vocabulary over time.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-clay border border-primary/10 text-center hover-lift">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">Patterns emerge privately</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              See your emotional rhythms, triggers, and growth over time — at your pace, on your terms.
            </p>
          </div>
        </AnimatedGrid>
      </section>

      {/* Condition sections */}
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-24 space-y-20 lg:space-y-28">
        {conditions.map((condition, idx) => (
          <ConditionSection key={condition.id} condition={condition} index={idx} />
        ))}
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <AnimatedSection
          animation="fade-in-up"
          className="bg-white rounded-3xl shadow-clay-lg p-8 lg:p-12 border border-primary/10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Be the first to try Vocolens
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Private. Patient. Neurodivergent-first. Join the waitlist and be among the first to experience it.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Condition Section
 * ────────────────────────────────────────────────────────────────────────────── */

function ConditionSection({ condition, index }: { condition: Condition; index: number }) {
  const Icon = condition.icon;
  const reverse = index % 2 === 1;

  return (
    <AnimatedSection
      animation={reverse ? 'fade-in-right' : 'fade-in-left'}
      delay={0.05}
    >
      <article
        id={condition.slug}
        className="scroll-mt-32"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: condition.colorLight }}
          >
            <Icon className="w-6 h-6" style={{ color: condition.color }} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {condition.name}
            </h2>
            <p className="text-text-secondary text-base mt-1">{condition.tagline}</p>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
            Challenges this addresses
          </p>
          <div className="flex flex-wrap gap-2">
            {condition.challenges.map((challenge) => (
              <span
                key={challenge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: `${condition.color}08`,
                  borderColor: `${condition.color}20`,
                  color: condition.color,
                }}
              >
                {challenge}
              </span>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {condition.features.map((item) => (
            <div
              key={item.feature}
              className="bg-white rounded-2xl p-5 border border-primary/10 shadow-clay-sm hover-lift"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: condition.colorLight }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: condition.color }} />
                </div>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{item.feature}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="rounded-2xl px-6 py-5 border-l-4"
          style={{
            backgroundColor: `${condition.color}06`,
            borderLeftColor: condition.color,
          }}
        >
          <p className="text-text-primary text-base leading-relaxed italic mb-2">
            "{condition.quote}"
          </p>
          <p className="text-text-muted text-sm font-semibold">
            — {condition.quoteAuthor}
          </p>
        </div>
      </article>
    </AnimatedSection>
  );
}
