import { ListenToArticle } from "./ListenToArticle";
import {
  PuzzlePiece as Puzzle,
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
    question: "Do all autistic adults have difficulty naming emotions?",
    answer:
      "No. Emotional experiences vary. Alexithymia can co-occur with autism but is not universal.",
  },
  {
    question: "Can sensory changes help with emotional overload?",
    answer:
      "Reducing an uncomfortable demand may be useful. Choose adjustments according to the individual rather than assuming one technique helps everyone.",
  },
  {
    question: "Should I journal during a meltdown?",
    answer:
      "Not if it adds demand or distress. Safety, space, agreed support, and recovery can take priority; reflection can wait.",
  },
  {
    question: "Can Vocolens predict or prevent meltdowns?",
    answer:
      "No such predictive or preventive effectiveness is established here. Journal patterns are observations, not reliable forecasts or medical assessments.",
  },
];

export function AutismEmotionalRegulation() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Autism and Emotional Regulation: Sensory Needs and Practical Supports",
    description:
      "Explore emotional regulation in autistic adults, how sensory demands and alexithymia can differ, and ways to plan support without masking your needs.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-06-29",
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
      "@id": "https://vocolens.com/resources/autism-emotional-regulation",
    },
    articleSection: "Autism & Neurodivergent Wellness",
    keywords:
      "autism emotional regulation, autistic adults emotions, alexithymia, autistic meltdown prevention, sensory overload, voice journaling autism, emotional vocabulary autism, interoception autism, neurodivergent mental health, autistic burnout",

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
          name: "Autism and Emotional Regulation",
          item: "https://vocolens.com/resources/autism-emotional-regulation",
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
                Autism and Emotional Regulation
              </span>
              <meta
                itemProp="item"
                content="https://vocolens.com/resources/autism-emotional-regulation"
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
              <Puzzle className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div className="min-w-0">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                Autism &amp; Neurodivergent Wellness
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Autism and Emotional Regulation: Sensory Needs and Practical Supports
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Explore emotional regulation in autistic adults, how sensory demands and alexithymia can
            differ, and ways to plan support without masking your needs.
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
              <time dateTime="2026-06-29" itemProp="datePublished">
                Jun 29, 2026
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

      <ListenToArticle slug="autism-emotional-regulation" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>Autistic people have varied emotional and sensory experiences.</li>
          <li>Sensory adjustments and communication supports matter alongside reflection.</li>
          <li>A journal cannot predict meltdowns or replace individualized care.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            A noisy room, a sudden change of plan, and a difficult conversation can add up.
            Emotional regulation means responding to feelings in ways that fit your needs and
            situation. For autistic adults, support may include sensory adjustments, clearer
            communication, rest, and space to process rather than pressure to appear unaffected.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-alexithymia">
            <h2
              id="section-alexithymia"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What does emotional regulation mean for autistic adults?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Regulation is not suppressing every visible reaction or performing calm for others. It
              may involve reducing demands, recognizing a need, asking for a change, or recovering
              in a less overwhelming environment. Different people need different supports.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Difficulty identifying feelings is called alexithymia. A 2019 systematic review found
              it common but not universal in the autistic samples studied. Do not assume every
              autistic person struggles to identify emotions or lacks empathy.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Read{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6331035/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Kinnaird and colleagues on alexithymia in autism
              </a>
              , and our{" "}
              <Link
                to="/resources/alexithymia-emotional-vocabulary"
                className="text-primary font-semibold hover:underline"
              >
                alexithymia guide
              </Link>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-sensory-emotional">
            <h2
              id="section-sensory-emotional"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Sensory overload and emotions are related, not identical
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              An uncomfortable sound, bright light, crowded space, or unexpected touch may make a
              situation harder to tolerate. You may need a sensory change before you can think about
              an emotion word. Naming a feeling does not remove the source of discomfort.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A shutdown, meltdown, or need to withdraw should not be treated as deliberate
              misbehavior or reduced to a single cause from a journal entry. Make room for
              individual descriptions and agreed support instead of assuming a universal sequence.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-voice-journaling">
            <h2
              id="section-voice-journaling"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A practical support plan before, during, and after overload
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Before a demanding situation, identify one likely sensory challenge and one available
              adjustment. Examples include a quieter waiting area, written instructions, a
              predictable schedule, or permission to leave. Ask what is helpful rather than imposing
              a tool.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              During overload, reduce demands when possible. Keep communication simple and allow
              processing time. A person may prefer quiet, space, or a trusted supporter; do not
              assume breathing exercises, touch, or speaking are welcome.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Afterwards, prioritize recovery before analysis. A short note can record the setting,
              what felt difficult, what helped, and what might change next time. Our{" "}
              <Link
                to="/resources/distress-detection"
                className="text-primary font-semibold hover:underline"
              >
                body-awareness guide
              </Link>{" "}
              explains why sensations are clues rather than diagnoses.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-meltdown-prevention">
            <h2
              id="section-meltdown-prevention"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Reflection without pressure to mask or perform
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If reflection is useful, try: What demand was present? What did I notice? What support
              did I need? Which change helped? Writing, voice, drawing, or no journal at all are
              valid options. Do not record someone else without consent.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Vocolens can hold voice reflections and suggested emotion labels for you to review. It
              is not a meltdown predictor, a measure of how autistic you are, or a treatment proven
              by the cited review. Keep your own interpretation and preferences central.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Persistent distress or difficulty meeting daily needs deserves qualified support and
              accommodations. See{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional awareness
              </Link>{" "}
              for a gentler check-in. This article is educational, not medical advice.
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
                Frequently asked questions about autism and emotional regulation
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
                      Neuroscience & Mental Wellness
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
                      Body Awareness & Distress Detection
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
            </div>
          </div>
        </div>

        <div>
          <div data-listen-exclude className="card-app rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Regulate on your terms
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
