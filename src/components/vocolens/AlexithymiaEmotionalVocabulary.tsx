import { ListenToArticle } from "./ListenToArticle";
import {
  ArrowUpRight,
  Clock,
  CaretRight,
  CaretRight as ChevronRight,
  Question as HelpCircle,
  Heart,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { BackToTop } from "./BackToTop";

const faqData = [
  {
    question: "Does alexithymia mean I have no emotions?",
    answer:
      "No. It concerns difficulty identifying or explaining experience, not an absence of feelings or caring.",
  },
  {
    question: "Is alexithymia the same as autism?",
    answer:
      "No. They can co-occur, but alexithymia is not universal in autism and also occurs outside autism.",
  },
  {
    question: "Where can I start without an emotion word?",
    answer:
      "Describe sensations, energy, pleasant versus unpleasant, and the situation. A tentative word or not knowing yet is acceptable.",
  },
  {
    question: "Can an AI journal diagnose alexithymia?",
    answer:
      "No. AI labels are candidates to review. Seek qualified assessment or support when difficulties affect daily life.",
  },
];

export function AlexithymiaEmotionalVocabulary() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Alexithymia: Difficulty Identifying Emotions and Where to Start",
    description:
      "Explore what alexithymia means, examples of difficulty identifying feelings, and gentle ways to describe sensations and build emotional vocabulary.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-06-28",
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
      "@id": "https://vocolens.com/resources/alexithymia-emotional-vocabulary",
    },
    articleSection: "Neuroscience & Emotional Intelligence",
    keywords:
      "alexithymia, emotional vocabulary, voice journaling alexithymia, can't name emotions, emotion labeling difficulty, AI emotion detection, neurodivergent journaling, ADHD alexithymia, autism alexithymia, emotional granularity, interoception",

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
          name: "Alexithymia & Emotional Vocabulary",
          item: "https://vocolens.com/resources/alexithymia-emotional-vocabulary",
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
                Alexithymia & Emotional Vocabulary
              </span>
              <meta
                itemProp="item"
                content="https://vocolens.com/resources/alexithymia-emotional-vocabulary"
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
              <Heart className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div className="min-w-0">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                Neuroscience &amp; Emotional Intelligence
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Alexithymia: Difficulty Identifying Emotions and Where to Start
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Explore what alexithymia means, examples of difficulty identifying feelings, and gentle
            ways to describe sensations and build emotional vocabulary.
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
              <time dateTime="2026-06-28" itemProp="datePublished">
                Jun 28, 2026
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
      <ListenToArticle slug="alexithymia-emotional-vocabulary" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>Difficulty naming emotions does not mean an absence of feelings or caring.</li>
          <li>Sensations, context, and tentative words can offer a starting point.</li>
          <li>AI labels and journals cannot diagnose or cure alexithymia.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            Someone asks how you feel, and you know something is happening but cannot find a word.
            Alexithymia describes difficulty identifying and describing emotions, often alongside an
            externally focused thinking style. It is not the same as having no feelings or not
            caring about others.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-what-is-alexithymia">
            <h2
              id="section-what-is-alexithymia"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is alexithymia?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A person may notice a tight chest or an urge to leave before knowing whether they feel
              anxious, angry, or overwhelmed. Another can describe an event clearly but finds its
              emotional meaning harder to explain. These examples are not a diagnostic checklist.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Kinnaird and colleagues' 2019 systematic review found alexithymia more common in the
              autistic samples studied, but not universal. Autism and alexithymia are not
              interchangeable. Study results should not be treated as a personal diagnosis or a
              universal prevalence estimate.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6331035/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Read Investigating alexithymia in autism (Kinnaird and colleagues, 2019)
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-why-journaling-fails">
            <h2
              id="section-why-journaling-fails"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Examples: knowing the event but not the feeling
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You can say 'the meeting ended early' but not how it affected you. You notice
              restlessness after a conversation without a clear label. Asking 'what emotion is
              that?' may add pressure rather than clarity.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Not every uncertain feeling is alexithymia. Emotions can be ambiguous, mixed, or hard
              to name when you are tired. Persistent difficulty can be explored with qualified
              support; a questionnaire score or AI interpretation should not stand alone.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-voice-ai-vocabulary">
            <h2
              id="section-voice-ai-vocabulary"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Start with sensations, context, and tentative words
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Try one observation: 'my hands feel tense,' 'my energy dropped,' or 'this is
              unpleasant.' Add what happened, what you expected, and what you want to do. Body
              sensations are clues, not one-to-one emotion codes.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Offer two or three possible words rather than a perfect answer. Our{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional awareness exercise
              </Link>{" "}
              gives a reusable format. You can write, speak, draw, or pause; no format is
              universally better.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Avoid forcing an inward check if it increases distress. Attending to your
              surroundings, meeting a physical need, or seeking support may be more helpful.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-body-bridge">
            <h2
              id="section-body-bridge"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Using vocabulary without outsourcing your judgment
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Describe the situation in your own words. If Vocolens suggests a label, check it
              against your experience and correct it when needed. The suggestion is not a diagnosis
              or proof of what you really feel.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Personalization uses patterns in corrections; it does not retrain a model or guarantee
              improvement in alexithymia. Paper notes can support the same exploration. Keep
              reflection separate from claims about product effectiveness.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Once broad words are available,{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                emotional granularity
              </Link>{" "}
              explores finer distinctions. If sensory demands are also relevant, see{" "}
              <Link
                to="/resources/autism-emotional-regulation"
                className="text-primary font-semibold hover:underline"
              >
                autism and emotional regulation
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
                Frequently asked questions about alexithymia and voice journaling
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
              <Link
                to="/resources/autism-emotional-regulation"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Autism & Neurodivergent Wellness
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Autism and Emotional Regulation: Sensory Needs and Practical Supports
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Explore emotional regulation in autistic adults, how sensory demands and
                      alexithymia can differ, and ways to plan support without masking your needs.
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
            </div>
          </div>
        </div>
        <div>
          <div data-listen-exclude className="card-app rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Name what you feel
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
