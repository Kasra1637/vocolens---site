import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, MessageCircleQuestionMark as MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    q: "Is my voice and journal data private and secure?",
    a: "Yes, absolutely. Your journal entries are stored locally on your device, meaning there is no cloud sync or server-side backup of your personal data. Additionally, the app is protected by biometric authentication (Face ID or Fingerprint) and a PIN, ensuring that your most personal thoughts are completely locked away. You also have full control to export or permanently delete your data at any time."
  },
  {
    q: "How does the AI actually know what I'm feeling?",
    a: "Vocolens uses advanced AI to analyze the words and language in your journal transcript. It detects emotions from your word choice, phrasing, and narrative context — mapping your feelings to 8 core psychology-backed emotions and placing them on a 2D scale of pleasantness and energy. Over time, our on-device personalization AI learns from any corrections you make to build your unique emotional fingerprint."
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
    a: "Vocolens is a personal journaling and self-awareness tool, not a medical device or therapy service. However, it does include built-in emotional wellbeing tools. If the app detects moderate or high distress during your entry, it immediately surfaces grounding exercises—like box breathing and 5-4-3-2-1 sensory grounding—to help you regulate your emotions in the moment."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
      <AnimatedSection animation="fade-in-up" className="text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-6 shadow-clay">
          <MessageCircleQuestion className="w-8 h-8 text-[#9b87f5]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Frequently Asked Questions
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
