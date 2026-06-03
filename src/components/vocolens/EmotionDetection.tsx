import { AnimatedSection } from './AnimatedSection';
import { Layers, Activity, Edit3, Brain, Sparkles } from 'lucide-react';

// AI-detected ranked emotions with intensity tiers (Plutchik-inspired)
const aiEmotions = [
  { label: 'Apprehensive', family: 'Fear',     intensity: 0.78, tier: 'Strong',   color: '#8E6BFF' },
  { label: 'Hopeful',      family: 'Trust',    intensity: 0.62, tier: 'Moderate', color: '#10B981' },
  { label: 'Wistful',      family: 'Sadness',  intensity: 0.41, tier: 'Mild',     color: '#3B82F6' },
  { label: 'Anticipation', family: 'Joy',      intensity: 0.34, tier: 'Mild',     color: '#F59E0B' },
];

// User refinement — preserved alongside AI baseline
const userRefinement = {
  label: 'Tender + Uncertain',
  note: 'It felt more tender than fearful. Hope is real but quiet.',
};

const whyItMatters = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    desc: 'AI surfaces a layered emotional picture, not just one label.',
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    desc: 'Multiple emotions can appear at once, with intensity levels that shift over time.',
  },
  {
    icon: <Edit3 className="w-6 h-6 text-primary" />,
    desc: 'User corrections help personalize future insights without replacing the original analysis.',
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    desc: 'The system learns from stable patterns, not one-off reactions.',
  },
];

export function EmotionDetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
          </svg>
          Hybrid Emotion Intelligence
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
          Understand your emotions without forcing a single label.
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          Vocolens uses an AI-generated emotional baseline to detect multiple ranked emotions from each journal entry, then lets you refine what feels most true through reflection and correction. Instead of flattening everything into one mood, it preserves emotional nuance, intensity, and mixed feelings so you can see both the AI’s interpretation and your own lived experience.
        </p>
      </AnimatedSection>

      {/* Hybrid workflow visualization */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8">

          {/* Card header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="font-semibold uppercase tracking-widest text-primary/70 mb-1 text-base">Hybrid emotional reading</p>
              <h3 className="font-bold text-text-primary text-xl">Layered, ranked, and yours to refine</h3>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70 inline-block" /> AI baseline
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Your reflection
              </span>
            </div>
          </div>

          {/* Three-column hybrid flow */}
          <div className="grid lg:grid-cols-12 gap-5">

            {/* 1. Transcription source */}
            <div className="lg:col-span-4 rounded-2xl p-5 bg-gradient-to-br from-primary/5 via-white to-white border border-primary/10 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">1</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70 text-base">Voice transcription</p>
              </div>
              <p className="text-text-secondary italic text-base leading-relaxed">
                "I keep circling back to the same thought. There’s this quiet hope underneath everything, but I can’t tell if I’m bracing or actually breathing again."
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[11px] text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Analyzing emotional layers…
              </div>
            </div>

            {/* 2. AI baseline — multiple ranked emotions with intensity */}
            <div className="lg:col-span-5 rounded-2xl p-5 bg-white border border-primary/15 shadow-clay-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">2</span>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70 text-base">AI emotional baseline</p>
                </div>
                <span className="text-[10px] font-semibold text-text-muted bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                  Plutchik-inspired tiers
                </span>
              </div>

              <div className="space-y-3">
                {aiEmotions.map((e, i) => (
                  <div key={e.label} className="flex items-center gap-3">
                    <span className="text-[10px] w-5 font-bold text-text-muted">#{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-sm font-semibold text-text-primary">
                          {e.label}
                          <span className="ml-1.5 text-[10px] font-medium text-text-muted">· {e.family}</span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: e.color }}>
                          {e.tier}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${e.intensity * 100}%`,
                            background: `linear-gradient(90deg, ${e.color}55, ${e.color})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] text-text-muted">
                <svg className="w-3.5 h-3.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                </svg>
                Blended emotions · ambivalence preserved
              </div>
            </div>

            {/* 3. User reflection layer */}
            <div className="lg:col-span-3 rounded-2xl p-5 bg-gradient-to-br from-amber-50/60 via-white to-white border border-amber-200/40 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-600 text-[10px] font-bold flex items-center justify-center">3</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600/90 text-base">Your reflection</p>
              </div>

              <div className="rounded-xl bg-white border border-amber-200/50 p-3 mb-3 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 mb-1">Refined to</p>
                <p className="font-semibold text-text-primary">
                  <span className="text-amber-500">★</span> {userRefinement.label}
                </p>
              </div>

              <p className="text-text-secondary italic text-base leading-relaxed">
                "{userRefinement.note}"
              </p>

              <div className="mt-auto pt-4 text-[11px] text-text-muted leading-relaxed">
                Both layers preserved — AI reading and your reflection live side by side.
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.2}>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Why it matters</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyItMatters.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-sm text-[#9b87f5]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-primary/10 flex flex-col justify-center">
             <div className="w-14 h-14 rounded-full bg-white shadow-clay flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#9b87f5]" />
             </div>
             <h3 className="text-2xl font-bold text-text-primary mb-3">Built for emotional clarity</h3>
             <p className="text-text-secondary text-lg leading-relaxed">
               This is designed to feel reflective, supportive, and premium, not clinical or robotic. You get a clearer view of what you felt, why it matters, and how your emotional patterns evolve over time.
             </p>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
