import { ListenToArticle } from "./ListenToArticle";
import {
  Timer,
  ArrowUpRight,
  Clock,
  CaretRight,
  CaretRight as ChevronRight,
  Question as HelpCircle,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { BackToTop } from "./BackToTop";

const faqData = [
  {
    question: "Is time blindness a diagnosis?",
    answer:
      "No. It is an informal description of difficulty noticing or estimating time. It does not establish ADHD or replace clinical assessment.",
  },
  {
    question: "Can alarms help ADHD time blindness?",
    answer:
      "They can provide external cues. Pair an alert with a specific transition action and test whether it fits your routine. No single tool works for everyone.",
  },
  {
    question: "How can I estimate tasks more realistically?",
    answer:
      "Compare an estimate with actual elapsed time and include preparation, travel, and transitions. Treat the result as information, not a judgment.",
  },
  {
    question: "Does voice journaling fix time perception?",
    answer:
      "The cited review does not test Vocolens or show that journaling recalibrates time perception. A journal can record observations while other supports address timing.",
  },
];

export function TimeBlindness() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADHD Time Blindness: Examples and Practical Time Supports",
    description:
      "Learn what ADHD time blindness means, recognize everyday examples, and try visible timers, task estimates, and transition cues without blaming yourself.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-09-09",
    dateModified: "2026-10-06",
    author: {
      "@type": "Organization",
      name: "Vocolens",
      url: "https://vocolens.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Vocolens",
      url: "https://vocolens.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vocolens.com/vocolens_favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vocolens.com/resources/adhd-time-blindness",
    },
    articleSection: "ADHD & Time Perception",
    keywords:
      "ADHD time blindness, time blindness, ADHD and time perception, why does time feel unreal, internal clock ADHD, interval timing, ADHD deadlines, ADHD hyperfocus time, voice journaling ADHD",

    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable='summary']", "[data-speakable='key-takeaways']"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vocolens.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: "https://vocolens.com/resources",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ADHD Time Blindness",
          item: "https://vocolens.com/resources/adhd-time-blindness",
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="max-w-3xl mx-auto px-6 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20"
    >
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div>
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2 text-sm text-text-muted"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link
                to="/resources"
                className="text-primary font-semibold hover:underline"
                itemProp="name"
              >
                Resources
              </Link>
              <meta itemProp="item" content="https://vocolens.com/resources" />
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-text-primary font-medium" itemProp="name">
                ADHD Time Blindness
              </span>
              <meta itemProp="item" content="https://vocolens.com/resources/adhd-time-blindness" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
              aria-hidden="true"
            >
              <Timer className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div className="min-w-0">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                ADHD &amp; Time Perception
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            ADHD Time Blindness: Examples and Practical Time Supports
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Learn what ADHD time blindness means, recognize everyday examples, and try visible
            timers, task estimates, and transition cues without blaming yourself.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>
              By{" "}
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Vocolens</span>
              </span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              <span>4 min read</span>
              <span aria-hidden="true" className="mx-1">
                ·
              </span>
              <time dateTime="2026-09-09" itemProp="datePublished">
                Sep 9, 2026
              </time>
              <span className="ml-2">
                Updated{" "}
                <time dateTime="2026-10-06" itemProp="dateModified">
                  Oct 6, 2026
                </time>
              </span>
            </span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="adhd-time-blindness" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>
            Time blindness describes difficulty tracking or estimating time, not a separate
            diagnosis.
          </li>
          <li>
            Visible clocks, task estimates, and transition cues can make time easier to notice.
          </li>
          <li>Timing research varies; journals are not proven to recalibrate an internal clock.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            You plan to leave in ten minutes, start one small task, and look up much later than
            expected. Time blindness is an informal description for difficulty sensing elapsed time
            or estimating how long things will take. It can occur with ADHD, but does not diagnose
            ADHD or mean you do not care about a deadline.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-two-clocks">
            <h2
              id="section-two-clocks"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is ADHD time blindness?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Time perception includes estimating duration, reproducing an interval, and organizing
              actions around time. Everyday difficulties can involve underestimating preparation,
              losing track during absorbing work, or struggling to change activities. These
              experiences vary between people and situations.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Mette's 2023 review found few adult ADHD studies and mixed results across methods.
              Some showed timing difficulties; others did not show a clear association. The evidence
              does not support describing every ADHD brain as having the same missing clock, or
              claiming that journaling repairs it.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9962130/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Read Time Perception in Adult ADHD (Mette, 2023)
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-two-way-distortion">
            <h2
              id="section-two-way-distortion"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Examples: estimating, tracking, and switching
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You budget twenty minutes for an errand but omit getting dressed, finding keys, and
              travel. Or an interesting task captures attention and you miss your intended stopping
              point. A vague plan such as 'leave soon' gives less information than a visible
              departure time.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Fatigue, stress, interruptions, and unfamiliar tasks can also affect timing. Record
              the context rather than treating one late arrival as proof of a condition. If time
              pressure brings strong feelings, try the{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional awareness check-in
              </Link>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-alarms-fail">
            <h2
              id="section-alarms-fail"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Practical supports that make time visible
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Choose one support and test it on an ordinary task. Put a clock where you can see it,
              use a visible countdown, or set a cue that names an action: 'save the file and stand
              up.' These are practical experiments, not guaranteed treatment.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Break departure into steps and add a realistic buffer. An alarm can be useful; the
              question is what happens after it rings. If you dismiss it repeatedly, try changing
              its location, simplifying the transition, or arranging an agreed check-in with someone
              supportive.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Avoid stacking more alerts than you can use. Tools should reduce friction, not become
              another source of criticism. Discuss persistent difficulties and ADHD care options
              with a qualified professional.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-external-clock">
            <h2
              id="section-external-clock"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              An estimate-versus-actual journal you can reuse
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Before one task, note your estimate and start time. Afterwards, record elapsed time,
              interruptions, and preparation you left out. Example: 'Estimated 15 minutes; actual
              28; included finding materials and answering a call.' Adjust your next plan rather
              than scoring your character.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A written note or voice entry in Vocolens can hold the observation. The app is not a
              time-perception assessment, and the record does not establish why a mismatch happened.
              Stop if tracking becomes punitive; use a gentler support instead.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If overload keeps recurring, read about{" "}
              <Link
                to="/resources/burnout-recovery-signs"
                className="text-primary font-semibold hover:underline"
              >
                burnout signs and recovery supports
              </Link>
              . This guide is educational, not medical advice.
            </p>
          </section>
        </div>
        <div>
          <section
            data-listen-exclude
            aria-labelledby="section-faq"
            className="border-t border-primary/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <HelpCircle className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently asked questions about ADHD time blindness
              </h2>
            </div>
            <div className="space-y-6">
              {faqData.map(({ question, answer }, i) => (
                <details
                  key={i}
                  className="group card-app rounded-3xl p-6 sm:p-8 overflow-hidden transition-shadow"
                >
                  <summary className="flex items-start gap-3 cursor-pointer px-5 py-4 text-text-primary font-semibold text-sm lg:text-base select-none list-none [&::-webkit-details-marker]:hidden">
                    <ChevronRight
                      className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-90"
                      aria-hidden="true"
                    />
                    <span>{question}</span>
                  </summary>
                  <div className="px-5 pb-5 pl-12 text-sm lg:text-base text-text-secondary leading-relaxed">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div className="border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-lg">Explore related articles</h3>
            <div className="space-y-4">
              <Link
                to="/resources/emotional-awareness-patterns"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Mental Wellness &amp; Self-Discovery
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Emotional Awareness: What It Is and How to Improve It
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Learn to notice feelings and use a short emotion-and-trigger check-in.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/overthinking-rumination"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Anxiety &amp; Mental Wellness
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Overthinking and Rumination: How to Recognize the Loop
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Understand rumination versus useful reflection, see examples of repetitive
                      worry, and try a practical next-step check without promises of instant relief.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/science-of-reflection"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Neuroscience &amp; Mental Wellness
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Affect Labeling: How to Name Your Emotions
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Explore research, practical examples, and the limits of claims about naming
                      emotions.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div data-listen-exclude className="card-app rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              See time clearly
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed max-w-[547px] mx-auto lg:max-w-[720px]">
              Keep a voice reflection, review suggested emotion labels, and decide what fits your
              experience. Vocolens supports reflection; it does not diagnose or predict distress.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={GOOGLE_PLAY_URL}
                {...STORE_LINK_ATTRS}
                className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-5 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold btn-app-glow btn-app-float transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Get it on Google Play
                <CaretRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <Link
                to="/resources"
                className="inline-flex items-center text-sm text-primary font-semibold hover:underline"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
