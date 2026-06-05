import { AnimatedSection } from './AnimatedSection';
import { Layers, Activity, Edit3, Brain, Sparkles, Mic } from 'lucide-react';

const whyItMatters = [
  {
    icon: <Layers className="w-6 h-6 text-[#9b87f5]" />,
    desc: 'AI surfaces a layered emotional picture, not just one label.',
  },
  {
    icon: <Activity className="w-6 h-6 text-[#9b87f5]" />,
    desc: 'Multiple emotions can appear at once, with intensity levels that shift over time.',
  },
  {
    icon: <Edit3 className="w-6 h-6 text-[#9b87f5]" />,
    desc: 'User corrections help personalize future insights without replacing the original analysis.',
  },
  {
    icon: <Brain className="w-6 h-6 text-[#9b87f5]" />,
    desc: 'The system learns from stable patterns, not one-off reactions.',
  },
];

export function EmotionDetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-16 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
          </svg>
          Hybrid Emotion Intelligence
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          Understand your emotions without forcing a single label.
        </h2>
        <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto text-base leading-relaxed">
          AI surfaces hidden layers of your mood. You decide what's true. We preserve the nuance of your experience without flattening feelings into flat labels.
        </p>
      </AnimatedSection>

      {/* New Simplified Hybrid Workflow Graphic */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-20">
        <div className="relative">
          {/* Subtle connecting background element for desktop */}
          <div className="hidden md:block absolute top-[5rem] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-[#9b87f5]/20 to-transparent z-0 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-clay border border-primary/10 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-2xl bg-[#E9DFFE] text-[#9b87f5] flex items-center justify-center mb-6 mx-auto shadow-sm relative bg-white">
                  <div className="absolute inset-0 bg-[#E9DFFE] rounded-2xl opacity-50"></div>
                  <Mic className="w-7 h-7 relative z-10" />
               </div>
               <h4 className="text-center font-bold text-xl mb-4">1. You Speak Freely</h4>
               <div className="bg-gray-50/80 rounded-2xl p-5 text-center text-text-secondary italic border border-gray-100 shadow-inner text-base leading-relaxed">
                 "I'm excited about the promotion, but terrified of failing."
               </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-clay border border-primary/10 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-2xl bg-[#E9DFFE] text-[#9b87f5] flex items-center justify-center mb-6 mx-auto shadow-sm relative bg-white">
                  <div className="absolute inset-0 bg-[#E9DFFE] rounded-2xl opacity-50"></div>
                  <Brain className="w-7 h-7 relative z-10" />
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
            <div className="bg-gradient-to-b from-[#E9DFFE]/30 to-[#9b87f5]/10 rounded-3xl p-6 lg:p-8 shadow-clay-lg border-2 border-[#9b87f5]/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full blur-2xl opacity-50"></div>
               <div className="w-14 h-14 rounded-2xl bg-white shadow-md text-[#9b87f5] flex items-center justify-center mb-6 mx-auto relative z-10">
                  <Sparkles className="w-7 h-7" />
               </div>
               <h4 className="text-center font-bold text-xl mb-4 relative z-10">3. You Define the Truth</h4>
               <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-primary/10 relative z-10">
                 <span className="block text-xs uppercase tracking-widest text-[#9b87f5]/70 font-bold mb-2">Refined by you</span>
                 <span className="text-xl font-extrabold text-[#9b87f5]">"Cautiously Optimistic"</span>
               </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why it matters & Built for clarity */}
      <AnimatedSection animation="fade-in-up" delay={0.2}>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Why it matters</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyItMatters.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-gradient-to-br from-[#E9DFFE]/40 to-transparent rounded-3xl p-8 border border-[#9b87f5]/20 flex flex-col justify-center">
             <div className="w-14 h-14 rounded-full bg-white shadow-clay flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#9b87f5]" />
             </div>
             <h3 className="text-2xl font-bold mb-3">Built for emotional clarity</h3>
             <p className="text-text-secondary text-lg leading-relaxed">
               This is designed to feel reflective, supportive, and premium, not clinical or robotic. You get a clearer view of what you felt, why it matters, and how your emotional patterns evolve over time.
             </p>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
