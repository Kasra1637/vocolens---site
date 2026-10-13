import { ListenToArticle } from "./ListenToArticle";
import {
  ArrowClockwise as RefreshCw,
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
    question: "Is rumination the same as problem-solving?",
    answer:
      "Not necessarily. Problem-solving can produce information or action; rumination often repeats distressing themes without movement.",
  },
  {
    question: "What is the difference between worry and rumination?",
    answer:
      "Worry often concerns possible future problems, while rumination often revisits distress or its causes. They overlap and are not diagnoses by themselves.",
  },
  {
    question: "Does recording a worry make it stop?",
    answer:
      "No guaranteed effect is established here. A brief record may clarify a next step, but repeated recording can also extend a loop.",
  },
  {
    question: "When should I seek support for overthinking?",
    answer:
      "Seek qualified help if repetitive thinking persistently affects sleep, work, relationships, or safety, or if self-help makes distress worse.",
  },
];

export function OverthinkingRumination() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Overthinking and Rumination: How to Recognize the Loop",
    description:
      "Understand rumination versus useful reflection, see examples of repetitive worry, and try a practical next-step check without promises of instant relief.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-07-14",
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
      "@id": "https://vocolens.com/resources/overthinking-rumination",
    },
    articleSection: "Anxiety & Mental Wellness",
    keywords:
      "overthinking, how to stop overthinking, rumination, can't stop thinking, worry loop, intrusive thoughts, default mode network, Zeigarnik effect, worry time, voice journaling anxiety, racing thoughts at night",

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
          name: "Overthinking & Rumination",
          item: "https://vocolens.com/resources/overthinking-rumination",
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
                Overthinking & Rumination
              </span>
              <meta
                itemProp="item"
                content="https://vocolens.com/resources/overthinking-rumination"
              />
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
              <RefreshCw className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                Anxiety &amp; Mental Wellness
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Overthinking and Rumination: How to Recognize the Loop
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Understand rumination versus useful reflection, see examples of repetitive worry, and
            try a practical next-step check without promises of instant relief.
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
              <time dateTime="2026-07-14" itemProp="datePublished">
                Jul 14, 2026
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

      <ListenToArticle slug="overthinking-rumination" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>Rumination and worry can repeat without producing a useful next step.</li>
          <li>Separate what you can act on from uncertainty you cannot resolve right now.</li>
          <li>More journaling is not automatically better if it feeds the same loop.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            You replay a conversation, search for the one perfect explanation, and end up with the
            same question again. Overthinking is an everyday term; rumination and worry describe
            forms of repetitive thinking that can feel like problem-solving without reaching a
            useful next step. Not every repeated thought is harmful, but its effect on your day
            matters.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-zeigarnik">
            <h2
              id="section-zeigarnik"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is rumination, and how is it different from reflection?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Useful reflection can produce new information, a decision, or a next action.
              Rumination often returns to the same painful themes without movement. Worry frequently
              concerns possible future problems; rumination often revisits distress or its causes.
              The categories can overlap.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A 2022 qualitative study explores how people experience both forms of repetitive
              negative thinking. It does not establish that one brain network or an unfinished-task
              mechanism explains every thought loop, nor that recording a thought supplies a
              guaranteed completion signal.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Reference:{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9790473/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Understanding the experience of rumination and worry (2022)
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-dmn">
            <h2 id="section-dmn" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Examples: a replay, a prediction, and a useful question
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Replay: "Why did I say that?" repeated without new information. Prediction: "What if
              tomorrow goes badly?" Useful question: "Is there one thing I can prepare or clarify?"
              The last question does not guarantee calm, but it makes the purpose of thinking more
              concrete.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Notice what happens after a few minutes: do you understand more, or feel more stuck?
              You do not need to label yourself an overthinker. If a feeling is hard to separate
              from a prediction, try{" "}
              <Link
                to="/resources/science-of-reflection"
                className="text-primary font-semibold hover:underline"
              >
                naming the emotion
              </Link>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-suppression-backfires">
            <h2
              id="section-suppression-backfires"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A practical next-step check
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Write one sentence about the concern. Ask: Is there an action available now? If yes,
              choose a small action and a realistic time. If not, name the uncertainty and shift to
              an ordinary activity or supportive contact rather than demanding certainty from
              yourself.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A planned worry period is one self-help approach discussed by the Centre for Clinical
              Interventions. It may not suit everyone and is not a reason to postpone urgent action
              or care. If it worsens distress, stop and seek support.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Resource:{" "}
              <a
                href="https://www.cci.health.wa.gov.au/resources/looking-after-yourself/worry-and-rumination"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                CCI worry and rumination resources
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-completion-signal">
            <h2
              id="section-completion-signal"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Using a journal without extending the loop
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Try a bounded entry: concern, feeling, available action, and what I will do next.
              Example: "Worried about feedback; ask one clarifying question tomorrow; return to
              dinner now." End the entry rather than rehearsing the same conclusion repeatedly.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A Vocolens voice entry can hold a reflection, but speaking is not established here as
              superior to writing or as a treatment for anxiety. If reviewing entries fuels
              self-criticism, take a break. The{" "}
              <Link
                to="/resources/rejection-sensitivity"
                className="text-primary font-semibold hover:underline"
              >
                rejection-sensitivity guide
              </Link>{" "}
              may help distinguish hurt from assumptions about intent.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Persistent loops that disrupt sleep, work, relationships, or safety deserve qualified
              help. This article is educational and is not a replacement for assessment or
              treatment.
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
                Frequently asked questions about overthinking and rumination
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
              <Link
                to="/resources/distress-detection"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Body Awareness &amp; Distress Detection
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Physical Signs of Overwhelm: Body Awareness Without Guessing
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Learn what interoception means, explore physical signs that can accompany
                      overwhelm, and try a gentle check-in without treating sensations as diagnoses.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
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
                to="/resources/burnout-recovery-signs"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Stress &amp; Burnout Recovery
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Burnout Signs and Recovery: What to Notice and What Can Help
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Understand workplace burnout signs, how they differ from ordinary tiredness,
                      and practical recovery supports that address demands as well as rest.
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
              Break the loop
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
