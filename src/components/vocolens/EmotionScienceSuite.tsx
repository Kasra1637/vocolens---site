import { AnimatedSection, AnimatedGrid } from './AnimatedSection';
import { Smile, Frown, Flame, Shield, Sparkles, AlertTriangle, Handshake, Compass, Activity, HeartPulse, Brain, History, Fingerprint } from 'lucide-react';

const plutchikEmotions = [
  { name: 'Happiness', icon: Smile, color: '#F5B700', ladder: ['Content', 'Joyful', 'Elated'] },
  { name: 'Sadness',   icon: Frown, color: '#3B82F6', ladder: ['Wistful', 'Sad', 'Grief'] },
  { name: 'Anger',     icon: Flame, color: '#EF4444', ladder: ['Annoyed', 'Frustrated', 'Furious'] },
  { name: 'Fear',      icon: Shield, color: '#8E6BFF', ladder: ['Uneasy', 'Anxious', 'Terrified'] },
  { name: 'Surprise',  icon: Sparkles, color: '#06B6D4', ladder: ['Curious', 'Surprised', 'Astonished'] },
  { name: 'Disgust',   icon: AlertTriangle, color: '#84CC16', ladder: ['Dislike', 'Disgusted', 'Repulsed'] },
  { name: 'Trust',     icon: Handshake, color: '#10B981', ladder: ['Accepting', 'Trusting', 'Devoted'] },
  { name: 'Anticipation', icon: Compass, color: '#F97316', ladder: ['Interested', 'Anticipating', 'Vigilant'] },
];

const bodyRegions = [
  { name: 'Head', emoji: '👤' },
  { name: 'Throat', emoji: '🗣️' },
  { name: 'Chest', emoji: '🫁' },
  { name: 'Stomach', emoji: '🦋' },
  { name: 'Hands', emoji: '👐' },
  { name: 'Legs', emoji: '🦵' }
];

const distressLevels = [
  { level: 'Low',      color: '#10B981', response: 'Gentle reflection prompts' },
  { level: 'Moderate', color: '#F59E0B', response: 'Grounding & breathing guidance' },
  { level: 'High',     color: '#EF4444', response: 'Crisis resources surfaced immediately' },
];

export function EmotionScienceSuite() {
  return (
    <section
      id="emotion-science"
      className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      aria-labelledby="emotion-science-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <Brain className="w-3.5 h-3.5" />
          Scientific Foundation
        </span>
        <h2 id="emotion-science-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5" itemProp="name">
          The emotion science inside Vocolens
        </h2>
        <p className="text-text-secondary text-base leading-relaxed" itemProp="description">
          8 core emotions, valence & arousal tracking, distress detection, body mapping, and adaptive AI — all running privately on your device.
        </p>
      </AnimatedSection>

      {/* 8 Plutchik emotions */}
      <AnimatedSection animation="fade-in-up" delay={0.05} className="mb-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p className="font-semibold uppercase tracking-widest text-primary/70 mb-1 text-sm">8 Plutchik emotions, scored</p>
              <h3 className="font-bold text-xl">Detected and ranked in every entry</h3>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-md">
              Each emotion family maps to an intensity ladder — your wording reveals which step you're on.
            </p>
          </div>

          <AnimatedGrid className="grid grid-cols-2 sm:grid-cols-4 gap-3" animation="fade-in-up" staggerDelay={0.04}>
            {plutchikEmotions.map(({ name, icon: Icon, color, ladder }) => (
              <article
                key={name}
                className="rounded-2xl p-4 border border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}1A` }}>
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </span>
                  <h4 className="font-bold text-lg">{name}</h4>
                </div>
                <ol className="space-y-1">
                  {ladder.map((step, i) => (
                    <li key={step} className="flex items-center gap-2 text-text-secondary text-base leading-relaxed">
                      <span
                        className="h-1 rounded-full"
                        style={{ width: `${(i + 1) * 18}px`, background: color, opacity: 0.4 + i * 0.25 }}
                      />
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </AnimatedGrid>
        </div>
      </AnimatedSection>

      {/* Valence/Arousal + Distress */}
      <div className="grid lg:grid-cols-5 gap-5 mb-10">
        <AnimatedSection animation="fade-in-up" delay={0.1} className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8 h-full">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-primary" />
              <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Valence & Arousal</p>
            </div>
            <h3 className="font-bold mb-2 text-xl">Your emotion in 2D psychological space</h3>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Every entry is mapped on two axes: Pleasant ↔ Unpleasant and Calm ↔ Activated — the gold standard from affective neuroscience.
            </p>

            <div className="relative aspect-[5/4] rounded-2xl bg-gradient-to-br from-amber-50 via-white to-blue-50 border border-primary/10 overflow-hidden">
              {/* axes */}
              <div className="absolute inset-y-6 left-1/2 w-px bg-primary/15" />
              <div className="absolute inset-x-6 top-1/2 h-px bg-primary/15" />
              {/* labels */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-semibold text-text-muted">Activated</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-semibold text-text-muted">Calm</span>
              <span className="absolute top-1/2 left-2 -translate-y-1/2 text-sm font-semibold text-text-muted">Unpleasant</span>
              <span className="absolute top-1/2 right-2 -translate-y-1/2 text-sm font-semibold text-text-muted">Pleasant</span>
              {/* quadrants */}
              <span className="absolute top-[18%] left-[18%] text-sm font-semibold text-rose-400/80">Stressed</span>
              <span className="absolute top-[18%] right-[18%] text-sm font-semibold text-amber-500/80">Excited</span>
              <span className="absolute bottom-[18%] left-[18%] text-sm font-semibold text-indigo-400/80">Depressed</span>
              <span className="absolute bottom-[18%] right-[18%] text-sm font-semibold text-emerald-500/80">Serene</span>
              {/* point */}
              <div
                className="absolute w-4 h-4 rounded-full bg-primary shadow-clay-sm ring-4 ring-primary/20"
                style={{ top: '32%', left: '63%' }}
                aria-label="Your current emotional state — pleasant and slightly activated"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.15} className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="w-4 h-4 text-primary" />
              <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Distress detection</p>
            </div>
            <h3 className="font-bold mb-2 text-xl">Right care, right moment</h3>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Vocolens listens for distress signals and matches the response to the severity — never one-size-fits-all.
            </p>
            <ul className="space-y-3">
              {distressLevels.map(({ level, color, response }) => (
                <li key={level} className="flex items-start gap-3 rounded-xl p-3 border border-primary/10 bg-gradient-to-r from-white to-primary/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0" style={{ background: color }} />
                  <div>
                    <p className="font-bold text-text-primary text-lg">{level} distress</p>
                    <p className="text-text-secondary text-base leading-relaxed">{response}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* Body mapping + Personalization */}
      <div className="grid lg:grid-cols-5 gap-5 mb-10">
        <AnimatedSection animation="fade-in-up" delay={0.2} className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8 h-full">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-primary" />
              <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Body sensation mapping</p>
            </div>
            <h3 className="font-bold mb-2 text-xl">Where do you feel it?</h3>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              After recording, tap the body region — chest, throat, stomach — where the emotion lives. Interoception turns feelings into data.
            </p>
            <div className="flex flex-wrap gap-2">
              {bodyRegions.map((region) => (
                <span
                  key={region.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-semibold"
                >
                  <span className="text-base">{region.emoji}</span>
                  {region.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.25} className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8 h-full">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Personalization AI</p>
            </div>
            <h3 className="font-bold mb-2 text-xl">Learns your emotional fingerprint</h3>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              A recency-weighted model studies the corrections you make and refines future suggestions — capped at an honest 80% accuracy ceiling, because feelings aren't perfectly predictable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-4 border border-primary/10 bg-gradient-to-br from-primary/5 to-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary/70 mb-2">Model accuracy</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-primary">80<span className="text-2xl">%</span></span>
                  <span className="text-text-muted text-base leading-relaxed">ceiling</span>
                </div>
                <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary" style={{ width: '80%' }} />
                </div>
                <p className="text-text-muted mt-2 text-base leading-relaxed">Recency-weighted, learns continuously.</p>
              </div>

              <div className="rounded-2xl p-4 border border-primary/10 bg-gradient-to-br from-amber-50/60 to-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-600/90 mb-2 flex items-center gap-2">
                  <History className="w-3.5 h-3.5" /> Correction history
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center justify-between text-base text-text-secondary leading-relaxed">
                    <span>Anxious → <span className="text-text-primary font-semibold">Apprehensive</span></span>
                    <span className="text-sm text-text-muted">Tue</span>
                  </li>
                  <li className="flex items-center justify-between text-base text-text-secondary leading-relaxed">
                    <span>Joyful → <span className="text-text-primary font-semibold">Hopeful</span></span>
                    <span className="text-sm text-text-muted">Mon</span>
                  </li>
                  <li className="flex items-center justify-between text-base text-text-secondary leading-relaxed">
                    <span>Sad → <span className="text-text-primary font-semibold">Wistful</span></span>
                    <span className="text-sm text-text-muted">Sun</span>
                  </li>
                </ul>
                <p className="text-text-muted mt-2 text-base leading-relaxed">View and manage every past correction.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* AEO FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Which emotions does Vocolens detect?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens detects and scores the 8 Plutchik emotions: Happiness, Sadness, Anger, Fear, Surprise, Disgust, Trust, and Anticipation. Each is mapped to an intensity ladder (e.g. Happiness → Content → Joyful → Elated) for nuanced emotional vocabulary.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are valence and arousal scoring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Valence and arousal map your emotional state to a 2D psychological space — Pleasant vs. Unpleasant on one axis, Calm vs. Activated on the other. It is the standard model from affective neuroscience used to capture the full texture of a feeling.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Vocolens handle distress?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens detects low, moderate, and high distress levels and surfaces an appropriate wellness response — gentle reflection prompts for low distress, grounding and breathing for moderate, and immediate crisis resources for high distress.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is body sensation mapping?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After each recording you can tap a body region — chest, throat, stomach, head, and others — to log where you physically feel the emotion. This builds interoceptive awareness over time.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the personalization AI learn?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens uses a recency-weighted personalization model that studies your emotion corrections and refines future suggestions, with an honest 80% accuracy ceiling. You can view and manage every past correction at any time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is my emotional data private?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Vocolens is biometric-locked and stores entries, audio, and personalization data on your device. Nothing is uploaded, synced to the cloud, or shared.',
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}
