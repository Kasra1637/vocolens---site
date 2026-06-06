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
    a: "Vocolens uses advanced multimodal AI to simultaneously analyze both the words you speak and the tone of your voice (prosody). It maps your feelings to 8 core psychology-backed emotions and places them on a 2D scale of pleasantness and energy. Over time, our on-device personalization AI learns from any corrections you make to build your unique emotional fingerprint."
  },
  {
    q: "Is this a replacement for therapy or mental health support?",
    a: "Vocolens is a personal journaling and self-awareness tool, not a medical device or therapy service. However, it does include built-in emotional wellbeing tools. If the app detects moderate or high distress during your entry, it immediately surfaces grounding exercises—like 4-7-8 breathing and sensory grounding—to help you regulate your emotions in the moment."
  },
  {
    q: "How much does it cost, and are there limits on how much I can record?",
    a: "Vocolens offers a premium subscription starting with our best-value Yearly plan ($79.99/year), which includes a 3-day free trial so you can experience the full app risk-free. Your subscription includes 300 minutes per month of world-class, real-time transcription—plenty of time to journal naturally every day."
  },
  {
    q: "Can I journal in a language other than English?",
    a: "Yes! Vocolens features real-time transcription in over 30 languages. You can speak freely, track your emotional growth, and receive AI-powered insights in the language you're most comfortable with. The app is available for download on both iOS and Android."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
      <AnimatedSection animation="fade-in-up" className="text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-6 shadow-clay">
          <MessageCircleQuestion className="w-8 h-8 text-[#9b87f5]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about privacy, AI analysis, and getting started with Vocolens.
        </p>
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
