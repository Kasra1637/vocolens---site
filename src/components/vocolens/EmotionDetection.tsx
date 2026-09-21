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

export function EmotionDetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-16 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
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

      {/* New Simplified Hybrid Workflow Graphic */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-20">
        <div className="relative">
          {/* Subtle connecting background element for desktop */}
          <div className="hidden md:block absolute top-[5rem] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-primary/25 to-transparent z-0 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {/* Step 1 */}
            <div className="card-app rounded-3xl p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-6 mx-auto shadow-clay">
                  <Mic className="w-6 h-6" />
               </div>
               <h4 className="text-center font-bold text-xl mb-4">1. You Speak Freely</h4>
               <div className="bg-primary/[0.04] rounded-2xl p-5 text-center text-text-secondary italic border border-primary/10 text-base leading-relaxed">
                 "I'm excited about the promotion, but terrified of failing."
               </div>
            </div>

            {/* Step 2 */}
            <div className="card-app rounded-3xl p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-6 mx-auto shadow-clay">
                  <Brain className="w-6 h-6" />
               </div>
               <h4 className="text-center font-bold text-xl mb-4">2. AI Sees Layers</h4>
               <div className="flex flex-col gap-3">
                 <div className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl text-sm font-semibold flex justify-between items-center border border-emerald-100/50">
                   <span>Anticipation</span> <span className="text-xs uppercase tracking-wider opacity-70">High</span>
                 </div>
                 <div className="bg-rose-50 text-rose-700 px-4 py-3 rounded-xl text-sm font-semibold flex justify-between items-center border border-rose-100/50">
                   <span>Apprehension</span> <span className="text-xs uppercase tracking-wider opacity-70">Medium</span>
                 </div>
               </div>
            </div>

            {/* Step 3 */}
            <div className="card-app rounded-3xl p-6 lg:p-8 border-2 border-primary/40 btn-app-glow hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
               <div className="w-14 h-14 rounded-full chip-app text-[#6A3FC0] flex items-center justify-center mb-6 mx-auto shadow-clay relative z-10">
                  <Sparkles className="w-6 h-6" />
               </div>
               <h4 className="text-center font-bold text-xl mb-4 relative z-10">3. You Define the Truth</h4>
               <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-primary/10 relative z-10">
                  <span className="block text-xs uppercase tracking-widest text-primary/70 font-bold mb-2">Refined by you</span>
                  <span className="text-xl font-extrabold text-primary">"Cautiously Optimistic"</span>
               </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why it matters & Built for clarity */}
      <AnimatedSection animation="fade-in-up" delay={0.2}>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-bold mb-6">Why it matters</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyItMatters.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
           <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#9b87f5]/20 flex flex-col justify-center">
              <div className="relative flex items-center justify-center mb-6" style={{ width: 44, height: 44 }}>
                 <div className="absolute rounded-full demo-mic-pulse" style={{ width: 44, height: 44, border: '1.5px solid rgba(147,139,250,0.35)' }} aria-hidden="true" />
                 <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center relative shadow-clay">
                    <Sparkles className="w-5 h-5 text-[#6A3FC0]" />
                 </div>
              </div>
             <h3 className="text-xl font-bold mb-3">Built for emotional clarity</h3>
             <p className="text-text-secondary text-lg leading-relaxed">
               This is designed to feel reflective, supportive, and premium, not clinical or robotic. You get a clearer view of what you felt, why it matters, and how your emotional patterns evolve over time.
             </p>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
