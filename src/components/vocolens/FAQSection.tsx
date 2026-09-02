import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, MessageCircleQuestionMark as MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    q: "Is my voice and journal data private and secure?",
    a: "Your journal lives on your device — entries, audio, and personalization data stay local and locked behind biometric authentication (Face ID or Fingerprint) and a PIN, with no cloud account or synced backup of your journal. Turning speech into insight does involve two brief, encrypted steps off-device: your audio is sent for speech-to-text transcription, and the resulting text is sent for emotion analysis. Neither service permanently stores your data, and no audio is sent for the analysis step. You can export or permanently delete everything at any time. Full detail lives in our Privacy Policy."
  },
  {
    q: "How does the AI actually know what I'm feeling?",
    a: "Vocolens uses advanced AI to analyze the words and language in your journal transcript. It detects emotions from your word choice, phrasing, and narrative context — mapping your feelings to 8 core psychology-backed emotions and placing them on a 2D scale of pleasantness and energy. Over time, a personalization layer learns from any corrections you make and adapts future AI analysis to build your unique emotional fingerprint."
  },
  {
    q: "What makes Vocolens different from other journaling apps?",
    a: "Most journaling apps make you write. Vocolens lets you speak — and does the rest. The AI detects your emotions from your words, learns from your corrections over time, and builds a personal emotional map you can't get anywhere else. It's designed specifically for neurodivergent brains that think faster than they can type."
  },
  {
    q: "What happens if the AI gets my emotion wrong?",
    a: "You correct it — and it learns. Tap the emotion label, change it to what you actually felt, and the AI remembers. Over time, it stops making that mistake for you specifically. Your corrections build a personalised emotional vocabulary that no other user shares. The AI gets better the more you use it."
  },
  {
    q: "Is this a replacement for therapy or mental health support?",
    a: "Vocolens is a personal journaling and self-awareness tool, not a medical device or therapy service. However, it does include built-in emotional wellbeing awareness. If the app detects moderate or high distress during your entry, it gently flags it so you can pause and take a moment for yourself."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnimatedSection animation="fade-in-up" className="text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-6 shadow-clay">
          <MessageCircleQuestion className="w-8 h-8 text-[#9b87f5]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Frequently asked questions
        </h2>

      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.1}>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#9b87f5]/30 shadow-clay-sm' : 'border-primary/10 hover:border-primary/20'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-text-primary text-lg pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#E9DFFE] text-[#9b87f5]' : 'bg-gray-50 text-text-muted'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-text-secondary text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
