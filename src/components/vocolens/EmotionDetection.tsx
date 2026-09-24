import { AnimatedSection } from './AnimatedSection';
import { Stack as Layers, Pulse as Activity, PencilSimple as Edit3, Brain, Sparkle as Sparkles, Microphone as Mic, Crosshair } from '@phosphor-icons/react';

const whyItMatters = [
  {
    icon: <Layers className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'AI surfaces a layered emotional picture, not just one label.',
  },
  {
    icon: <Activity className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'Several emotions can appear together, shifting in intensity.',
  },
  {
    icon: <Edit3 className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'Your corrections tune insights, while originals stay intact.',
  },
  {
    icon: <Brain className="w-5 h-5 text-[#6A3FC0]" />,
    desc: 'The system learns from stable patterns, not one-off reactions.',
  },
];

const detectedLayers = [
  { label: 'Anticipation', intensity: 'High', fill: 'w-[78%]', tone: '' },
  { label: 'Apprehension', intensity: 'Medium', fill: 'w-[56%]', tone: 'opacity-75' },
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

      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-16 lg:mb-20">
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
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-app rounded-3xl p-5 flex flex-col">
            <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-5 shadow-clay">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl mb-5">2. AI Sees Layers</h4>
            <div className="bg-primary/[0.04] rounded-3xl p-5 mt-auto space-y-4">
              {detectedLayers.map(({ label, intensity, fill, tone }) => (
                <div key={label}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-semibold text-text-primary">{label}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6A3FC0] bg-primary/8 border border-primary/15 rounded-full px-2 py-0.5">
                      {intensity}
                    </span>
                  </div>
                  <div className="mt-2.5 h-1.5 rounded-full bg-primary/12">
                    <div className={`h-full ${fill} rounded-full bg-primary ${tone}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-app rounded-3xl p-5 flex flex-col">
            <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-5 shadow-clay">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl mb-5">3. You Define the Truth</h4>
            <div className="bg-white border border-primary/12 rounded-3xl p-5 text-center mt-auto">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
                Refined by you
              </span>
              <h5 className="text-xl font-bold text-[#6A3FC0]">"Cautiously Optimistic"</h5>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why it matters & Built for clarity */}
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
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mb-6 shadow-clay">
                <Sparkles className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built for emotional clarity</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                This is designed to feel reflective, supportive, and premium, not clinical or robotic. You get a clearer view of what you felt, why it matters, and how your emotional patterns evolve over time.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
