import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CaretDown as ChevronDown, Question as MessageCircleQuestion } from '@phosphor-icons/react';

const faqs = [
  {
    q: "Is my voice and journal data private and secure?",
    a: "Your journal lives on your device â€” entries stay local, no cloud account, locked behind biometrics or PIN. Two brief encrypted requests turn speech into insight: transcription plus emotion analysis of your words and tone. Audio is deleted after processing; export or wipe everything in Settings.",
  },
  {
    q: "How does the AI actually know what I'm feeling?",
    a: "Vocolens reads what you said â€” words, phrasing, and story â€” plus vocal tone from audio when available. It maps feelings to 8 core emotions on a 2D scale of pleasantness and energy. Corrections tune future results: the app learns which labels fit you and biases later analysis your way.",
  },
  {
    q: "What makes Vocolens different from other journaling apps?",
    a: "Most apps make you write. Vocolens lets you speak: AI reads emotion from your words and vocal tone, learns from every correction, and tracks patterns across entries â€” streaks, triggers, weekly reflections. It is built for minds that think faster than they can type.",
  },
  {
    q: "What happens if the AI gets my emotion wrong?",
    a: "Open any entry and correct the emotion to what you actually felt. Each correction is saved and tunes your personal analysis, so future results lean toward your labels over time. Corrections stay on your device and shape only your results â€” never anyone else’s.",
  },
  {
    q: "Is this a replacement for therapy or mental health support?",
    a: "Vocolens is a journaling and self-awareness tool â€” not therapy or a medical device. It watches for strain: entries scoring moderate or high distress show a gentle note suggesting you pause and take a moment. For ongoing struggles, please contact a qualified professional or local support line.",
  },
];

export function FAQSection() {
  // First answer expanded by default on desktop; collapsed by default on
  // mobile (<768px, Tailwind md) where the long privacy answer dominates
  // the viewport. Lazily read at mount (SSR-safe: server renders desktop
  // default, client corrects before paint on mobile).
  const [openIndex, setOpenIndex] = useState<number | null>(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
      ? null
      : 0,
  );

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
        <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mx-auto mb-6 shadow-clay">
          <MessageCircleQuestion className="w-5 h-5 text-[#6A3FC0]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Frequently asked questions
        </h2>

      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={0.1}>
        <div className="card-app rounded-3xl p-2 sm:p-3 divide-y divide-primary/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-5 py-5 flex items-center justify-between text-left focus:outline-none rounded-2xl hover:bg-primary/[0.04] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-text-primary text-lg pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'chip-app text-[#6A3FC0]' : 'chip-app text-text-muted'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-soft ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-6 pt-1 text-text-secondary text-base leading-relaxed">
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
