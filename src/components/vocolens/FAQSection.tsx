import { useState } from "react";
import { Reveal } from "./Reveal";
import { CaretDown as ChevronDown, Question as MessageCircleQuestion } from "@phosphor-icons/react";

const faqs = [
  {
    q: "Is my voice and journal data private and secure?",
    a: "Entries stay local, no cloud account, locked behind biometrics or a PIN. Two brief encrypted requests turn speech into insight: transcription plus emotion analysis of your words and tone. Audio stays on your device so you can play an entry back; delete it any time with the entry, or wipe everything in settings.",
  },
  {
    q: "How does the AI actually know what I'm feeling?",
    a: "Vocolens reads your words, phrasing, and story, plus vocal tone from audio when available. It maps feelings to 8 core emotions on a 2D scale of pleasantness and energy. Corrections tune future results: a pattern needs at least 3 corrections across 2 weeks, and your most recent ones count most.",
  },
  {
    q: "What makes Vocolens different from other journaling apps?",
    a: "Most apps make you write. Vocolens lets you speak: AI reads emotion from your words and vocal tone, tunes later analysis from your corrections, and tracks patterns across entries, such as streaks, triggers, and weekly reflections. It's built for minds that think faster than they type.",
  },
  {
    q: "What happens if the AI gets my emotion wrong?",
    a: "Open any entry and correct the emotion to what you actually felt. Each correction is saved and tunes your personal analysis, so future results lean toward your labels over time. Your corrections stay on your device and shape only your results, never anyone else’s.",
  },
  {
    q: "Is this a replacement for therapy or mental health support?",
    a: "Vocolens is a journaling and self-awareness tool, not therapy or a medical device. It identifies signs of strain in your entries; moderate or high distress shows a note asking you to take a moment if you need.",
  },
];

export function FAQSection() {
  // First answer expanded by default on desktop; collapsed by default on
  // mobile (<768px, Tailwind md) where the long privacy answer dominates
  // the viewport. Lazily read at mount (SSR-safe: server renders desktop
  // default, client corrects before paint on mobile).
  const [openIndex, setOpenIndex] = useState<number | null>(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? null : 0,
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Reveal className="text-center mb-12 lg:mb-16">
        <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 mx-auto mb-6 shadow-clay">
          <MessageCircleQuestion className="w-5 h-5 text-[#6A3FC0]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
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
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-clay transition-colors duration-300 ${isOpen ? "chip-app text-[#6A3FC0]" : "chip-app text-text-muted"}`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-soft ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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
      </Reveal>
    </section>
  );
}
