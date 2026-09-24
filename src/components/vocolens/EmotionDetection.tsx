import { AnimatedSection } from './AnimatedSection';
import { Stack as Layers, Pulse as Activity, PencilSimple as Edit3, Brain, Sparkle as Sparkles, Microphone as Mic, Crosshair, ArrowsClockwise } from '@phosphor-icons/react';

const whyItMatters = [
  {
    icon: <Layers className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'All 8 core emotions are scored on the Plutchik model, not reduced to one verdict.',
  },
  {
    icon: <Activity className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'Blended emotions and emotional tension are detected, not flattened.',
  },
  {
    icon: <Edit3 className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'Your corrections stay on your device and are replayed as context in later analysis.',
  },
  {
    icon: <Brain className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'A pattern needs 3 corrections across 2 weeks, and recent ones count most.',
  },
];

const correctionReasons = ['Wrong label', 'Wrong intensity', 'Context'];

const detectedLayers = [
  { label: 'Vigilance', base: 'Anticipation', primary: true, fill: 'w-[78%]', tone: '' },
  { label: 'Apprehension', base: 'Fear', primary: false, fill: 'w-[56%]', tone: 'opacity-75' },
  { label: 'Surprise', base: '', primary: false, fill: 'w-[38%]', tone: 'opacity-55' },
];

const scales = [
  { title: 'Unpleasant ↔ Pleasant', left: 'Unpleasant', right: 'Pleasant', position: '62%' },
  { title: 'Calm ↔ Activated', left: 'Calm', right: 'Activated', position: '48%' },
];

export function EmotionDetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-16 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <Crosshair className="w-3.5 h-3.5" />
          AI + Your Corrections
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Understand your emotions without forcing a single label
        </h2>
        <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto text-base leading-relaxed">
          AI reveals what's beneath the surface — you decide what's true.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-6 lg:mb-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div className="card-app rounded-3xl p-5 flex flex-col">
            <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-5 shadow-clay">
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl mb-5">1. You Speak Freely</h4>
            <div className="bg-primary/10 border-[1.5px] border-primary/20 rounded-3xl p-5 mt-auto">
              <p className="italic text-text-secondary text-[15px] leading-6">
                "I'm excited about the promotion, but terrified of failing."
              </p>
              <div className="h-1.5 rounded-full bg-primary/15 overflow-hidden mt-5" aria-hidden="true">
                <div className="h-full w-[70%] rounded-full bg-primary" />
              </div>
              <p className="text-xs text-text-muted mt-3 leading-relaxed">
                Record for at least 50s for accurate emotional insights
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-app rounded-3xl p-5 flex flex-col">
            <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-5 shadow-clay">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl mb-5">2. AI Sees Layers</h4>
            <div className="bg-primary/[0.04] rounded-3xl p-5 mt-auto">
              <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-4">
                Top Emotions — Plutchik Intensity
              </p>
              <div className="space-y-4">
                {detectedLayers.map(({ label, base, primary, fill, tone }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[13px] font-semibold text-text-primary">{label}</span>
                        {base && (
                          <span className="block text-[9px] uppercase tracking-[0.05em] text-text-muted mt-0.5">
                            {base}
                          </span>
                        )}
                      </div>
                      {primary && (
                        <span className="text-[9px] font-semibold text-[#6A3FC0] bg-primary/8 border border-primary/15 rounded-full px-2 py-0.5">
                          Primary
                        </span>
                      )}
                    </div>
                    <div className="mt-2.5 h-1.5 rounded-full bg-primary/12">
                      <div className={`h-full ${fill} rounded-full bg-primary ${tone}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-app rounded-3xl p-5 flex flex-col">
            <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-5 shadow-clay">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl mb-5">3. You Define the Truth</h4>
            <div className="bg-white border border-primary/12 rounded-3xl p-5 mt-auto">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
                You selected
              </span>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <h5 className="text-xl font-bold text-[#6A3FC0]">"Cautiously Optimistic"</h5>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#6A3FC0] bg-primary/8 border border-primary/20 rounded-full px-2 py-0.5">
                  <ArrowsClockwise className="w-3 h-3" />
                  Adjusted
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {correctionReasons.map((reason) => (
                  <span
                    key={reason}
                    className="px-3 py-1.5 rounded-full bg-primary/[0.06] border border-primary/15 text-[13px] font-medium text-text-secondary"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.15} className="mb-16 lg:mb-20">
        <div className="card-app rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold">Fine-tune if needed</h3>
            <p className="text-sm text-text-muted">Adjust how it felt</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
            {scales.map(({ title, left, right, position }) => (
              <div key={title}>
                <p className="text-[13px] font-semibold text-text-primary mb-4">{title}</p>
                <div className="relative h-1.5 rounded-full bg-primary/12" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-primary/45"
                    style={{ width: position }}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm"
                    style={{ left: position }}
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[11px] text-text-muted">{left}</span>
                  <span className="text-[11px] text-text-muted">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.2}>
        <div className="card-app rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold mb-6">Why it matters</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {whyItMatters.map((item) => (
                  <div key={item.desc} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                      {item.icon}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 lg:border-l lg:border-primary/10 lg:pl-10 border-t border-primary/10 pt-8 lg:border-t-0 lg:pt-0 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-5">How well AI reads you</h3>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-[#6A3FC0] leading-none">86%</span>
                <span className="text-sm font-semibold text-text-primary pb-1.5">
                  AI matched your feeling
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                Based on the entries you reviewed and confirmed or adjusted.
              </p>
              <p className="text-xs text-text-muted mt-3">
                On average: pleasantness +10 · energy -5
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
