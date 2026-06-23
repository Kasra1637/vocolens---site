import { Link } from '@tanstack/react-router';
import { AnimatedSection, AnimatedGrid } from './AnimatedSection';
import {
  Zap,
  Brain,
  HelpCircle,
  Heart,
  Shield,
  Repeat,
  Activity,
  Eye,
  Mic,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

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
      { feature: 'ADHD-aware personalization', benefit: 'The AI learns that your high energy is excitement, not anxiety — it adapts to how your brain actually works.' },
      { feature: 'Streaks replaced by presence', benefit: 'No broken streaks. No guilt. Badges and milestones reward showing up without punishing you for missing a day.' },
      { feature: '50-second minimum', benefit: 'Low commitment, high impact. Speak for under a minute and get a full emotional snapshot.' },
      { feature: 'Pattern detection', benefit: 'Your brain can\'t self-monitor in real time — but the app tracks mood cycles, triggers, and time-of-day patterns for you.' },
    ],
    quote: 'My thoughts race at 100 mph and writing them down feels like trying to catch a waterfall with a teaspoon. Speaking into Vocolens is instant relief.',
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
      { feature: '"I don\'t know" is a valid answer', benefit: 'The app tracks alexithymia moments without judgment. No forced emotion selection required.' },
      { feature: 'Body region tap-map', benefit: 'Can\'t name the feeling? Tap where you feel it. 8 body zones offer an alternative entry point to emotional awareness.' },
      { feature: 'Physical sensation vocabulary', benefit: '16 pre-defined body sensations (chest tightness, racing heart, heavy limbs) give words to physical experiences.' },
      { feature: 'Valence-arousal sliders', benefit: 'Skip emotion labels entirely. Just indicate pleasant/unpleasant and calm/activated on simple sliders.' },
      { feature: 'Gradual emotional literacy', benefit: 'Plutchik\'s wheel with tap-to-learn definitions builds emotion vocabulary over time at your own pace.' },
    ],
    quote: 'I used to just say "I feel bad." Now I can see it\'s actually chest tightness + low energy + something the AI calls "apprehension." That\'s a huge leap for me.',
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
      { feature: 'Interoception body map', benefit: 'Build internal awareness with structured body scans across 8 zones — addressing the interoception gap many autistic people experience.' },
      { feature: 'Predictable, structured flow', benefit: 'Multi-step reflection follows a clear sequence: emotions, sliders, body scan, grounding. Same order every time.' },
      { feature: 'Distress detection + auto-grounding', benefit: 'Catches overwhelm early via valence-arousal monitoring and offers grounding exercises before meltdown onset.' },
      { feature: 'Skip anything, anytime', benefit: 'Every step is optional. Respects fluctuating capacity — especially during burnout periods.' },
      { feature: 'PDF reports for clinicians', benefit: 'Share emotional patterns with therapists without needing to verbally explain everything in session.' },
    ],
    quote: 'Writing has always felt like translating my brain into a foreign language. With Vocolens, I just talk — no pressure to organize thoughts first.',
    quoteAuthor: 'Riley, Autistic & Graduate Student',
  },
  {
    id: 'anxiety',
    slug: 'anxiety',
    icon: Shield,
    name: 'Anxiety',
    tagline: 'Interrupt the spiral before it takes over.',
    color: '#3B82F6',
    colorLight: '#DBEAFE',
    challenges: [
      'Rumination loops replay endlessly without resolution',
      'Physical tension builds unnoticed until overwhelm',
      'Catastrophizing makes every worry feel equally urgent',
      'Difficulty distinguishing real threats from false alarms',
    ],
    features: [
      { feature: '5-4-3-2-1 Senses exercise', benefit: 'Guided sensory grounding interrupts anxious thought spirals by redirecting attention to present-moment reality.' },
      { feature: 'Box Breathing with animation', benefit: 'Animated expanding circle guides 4-count breathing, activating the parasympathetic nervous system within minutes.' },
      { feature: 'Thought externalization', benefit: 'Speaking anxious thoughts aloud and seeing them transcribed creates cognitive distance — shrinking the worry to manageable size.' },
      { feature: 'Trigger pattern detection', benefit: 'Identifies which topics reliably spike your anxiety over 7, 14, or 30 days — turning invisible patterns into visible data.' },
      { feature: 'Body scan meditation', benefit: 'Guided progressive relaxation from feet to head helps notice and release physical tension accompanying anxiety.' },
      { feature: 'Mood cycle insights', benefit: 'Identifies morning dips, evening peaks, and weekly stress cycles — giving you predictive awareness of when anxiety is likely to rise.' },
    ],
    quote: 'The grounding tools caught me before a full panic attack twice this week. Just seeing my worry written out made it smaller somehow.',
    quoteAuthor: 'Alex, generalized anxiety',
  },
  {
    id: 'ocd',
    slug: 'ocd',
    icon: Repeat,
    name: 'OCD',
    tagline: 'Break the loop without feeding the compulsion.',
    color: '#EC4899',
    colorLight: '#FCE7F3',
    challenges: [
      'Thought loops replay without resolution',
      'Written journaling becomes a compulsive rewriting cycle',
      'Need for precision makes "close enough" labels feel wrong',
      'Rumination disguises itself as productive problem-solving',
    ],
    features: [
      { feature: 'Voice input — no editing possible', benefit: 'Speech is naturally impermanent. No rewriting, no perfectionism spiral. What you said is captured as-is.' },
      { feature: 'OCD-aware AI calibration', benefit: 'When you correct labels with "not quite right" precision, the AI learns to use simpler, clearer emotion names — reducing ambiguity.' },
      { feature: 'Structured correction outlet', benefit: 'A bounded system for correcting the AI — satisfies the need for accuracy without enabling infinite correction loops.' },
      { feature: 'Grounding for rumination', benefit: '5-4-3-2-1 technique redirects attention from mental compulsions to sensory reality. Interrupts the loop.' },
      { feature: 'External pattern analysis', benefit: 'The app analyzes patterns so you don\'t have to — reducing compulsive self-analysis while still providing insight.' },
      { feature: 'AI as external validator', benefit: 'Provides a "second opinion" on emotional states, reducing the obsessive need to internally verify your own feelings.' },
    ],
    quote: 'Written journaling became another compulsion for me. With voice, I can\'t go back and rewrite. That constraint is actually freedom.',
    quoteAuthor: 'Morgan, OCD recovery',
  },
  {
    id: 'ptsd',
    slug: 'ptsd',
    icon: Heart,
    name: 'PTSD / C-PTSD',
    tagline: 'Process at your own pace. The app never pushes.',
    color: '#6366F1',
    colorLight: '#E0E7FF',
    challenges: [
      'Emotional flooding makes processing feel dangerous',
      'Avoidance prevents gradual engagement with feelings',
      'Dissociation disconnects mind from body',
      'Hyperarousal makes calm reflection impossible',
    ],
    features: [
      { feature: 'Voice narrative processing', benefit: 'Speaking about experiences — even vaguely — reduces intrusive memories and helps the brain process rather than suppress.' },
      { feature: 'Grounding during distress', benefit: 'Body scan and 5-4-3-2-1 exercises anchor you to the present during flashbacks or dissociation.' },
      { feature: 'Body region mapping', benefit: 'Trauma often lives in the body. Tap where you feel tension without needing to name or explain the full experience.' },
      { feature: 'Distress safety monitoring', benefit: 'Offers support when arousal gets too high — preventing re-traumatization by intervening at moderate distress levels.' },
      { feature: 'Avoidance pattern detection', benefit: 'Gently surfaces when you\'re consistently avoiding certain emotions or topics — supporting gradual approach at your own pace.' },
      { feature: 'Complete user control', benefit: 'Skip any step. Stop anytime. Delete anything. You are always in control — critical for trauma survivors.' },
    ],
    quote: 'For the first time, I can acknowledge what I\'m feeling without being swallowed by it. The grounding tools are a lifeline.',
    quoteAuthor: 'Taylor, C-PTSD survivor',
  },
  {
    id: 'bipolar',
    slug: 'bipolar',
    icon: Activity,
    name: 'Bipolar Disorder',
    tagline: 'See the shift before it arrives.',
    color: '#F97316',
    colorLight: '#FFEDD5',
    challenges: [
      'Mood episodes are hard to detect from inside them',
      'Insight diminishes during mania or hypomania',
      'Inconsistent self-monitoring — especially during low periods',
      'Difficulty distinguishing "good day" from early hypomania',
    ],
    features: [
      { feature: 'Continuous mood tracking', benefit: 'Captures both pleasantness (valence) and energy (arousal) — the two dimensions most relevant to detecting bipolar episode shifts.' },
      { feature: 'Mood cycle detection', benefit: 'Identifies weekly patterns, morning dips, and recovery cycles that may signal episode onset before you recognize it yourself.' },
      { feature: 'Emotional shift analysis', benefit: 'Tracks recurring transitions (e.g., happiness to sadness frequency) that may correspond to cycling patterns.' },
      { feature: 'Low-friction voice entry', benefit: 'During depression, just speak for 50 seconds. During mania, voice naturally captures pressured speech patterns.' },
      { feature: 'Streak calendar (gap visibility)', benefit: 'Missing days become visible patterns — gaps during depression or "I don\'t need this" periods become data, not failures.' },
      { feature: 'PDF reports for psychiatrists', benefit: 'Share longitudinal emotional data between appointments, enabling data-driven medication discussions.' },
    ],
    quote: 'My psychiatrist said the mood report showed my last hypomanic shift started 3 days before I noticed anything. That early warning is everything.',
    quoteAuthor: 'Jamie, Bipolar II',
  },
  {
    id: 'sensory-processing',
    slug: 'sensory-processing',
    icon: Eye,
    name: 'Sensory Processing',
    tagline: 'Understand the overwhelm before it overtakes you.',
    color: '#14B8A6',
    colorLight: '#CCFBF1',
    challenges: [
      'Sensory overwhelm feels sudden and unexplainable',
      'Difficulty connecting overload to emotional state',
      'Meltdown onset is hard to predict',
      'Environments that should be "fine" somehow aren\'t',
    ],
    features: [
      { feature: 'Body scan and region mapping', benefit: 'Identify where sensory overwhelm manifests physically — distinguishing sensory distress from emotional distress.' },
      { feature: 'Grounding (controlled sensory input)', benefit: '5-4-3-2-1 engages controlled sensory input that can help recalibrate an overwhelmed system.' },
      { feature: 'Distress auto-detection', benefit: 'Catches escalation early. When overload registers as high arousal, the app offers intervention before meltdown.' },
      { feature: 'Trigger pattern identification', benefit: 'Over time, identifies recurring situations that correlate with distress — revealing sensory triggers you haven\'t consciously named.' },
      { feature: 'Voice-only interaction', benefit: 'Minimal visual complexity. No writing, no complex UI during vulnerable states. Just speak.' },
      { feature: 'Customizable themes + dark mode', benefit: 'Six calm color palettes and true dark mode reduce visual sensory load to your comfort level.' },
    ],
    quote: 'I never connected my afternoon meltdowns to the fluorescent lights until Vocolens showed me the pattern. Now I take breaks before it builds.',
    quoteAuthor: 'Avery, sensory processing differences',
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
            Built for neurodivergent minds
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Your brain works differently.<br />
            <span className="bg-gradient-to-r from-primary to-[#A88AFF] bg-clip-text text-transparent">
              Your journal should too.
            </span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Vocolens was designed from the ground up for neurodivergent brains — not adapted from
            neurotypical tools. Voice-first, AI-powered, and endlessly patient.
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
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatedSection
          animation="fade-in-up"
          className="bg-white rounded-3xl shadow-clay-lg p-10 lg:p-14 border border-primary/10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built different — for brains that are different.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
