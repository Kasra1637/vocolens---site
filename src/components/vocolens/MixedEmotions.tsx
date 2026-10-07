import { ListenToArticle } from "./ListenToArticle";
import {
  Intersect,
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
    question: "Can I feel happy and sad at the same time?",
    answer:
      "Yes, research supports the co-occurrence of pleasant and unpleasant feelings in some situations. Your experience does not need to fit a single label.",
  },
  {
    question: "Are mixed emotions the same as indecision?",
    answer:
      "No. Mixed emotions concern feelings; indecision concerns action. You can make a clear choice and still have mixed feelings about it.",
  },
  {
    question: "How can I describe mixed feelings?",
    answer:
      "Name each feeling and the aspect of the situation it relates to. Tentative words and different intensities are acceptable.",
  },
  {
    question: "Does journaling mixed feelings improve health?",
    answer:
      "No product or universal health benefit is established here. A journal can support reflection, but it is not a substitute for qualified care.",
  },
];

export function MixedEmotions() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mixed Emotions: Why You Can Feel Happy and Sad at Once",
    description:
      "Learn what mixed emotions are, see everyday examples of feeling two things at once, and try a reflection that makes room for both without forcing a choice.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-10-06",
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
      "@id": "https://vocolens.com/resources/mixed-emotions",
    },
    articleSection: "Neuroscience & Emotional Intelligence",
    keywords:
      "mixed emotions, mixed feelings, can you feel two emotions at once, emotional ambivalence, conflicting emotions, happy and sad at the same time, bittersweet, emotional complexity, emotional granularity, affect labeling, voice journaling emotions",
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
          name: "Mixed Emotions",
          item: "https://vocolens.com/resources/mixed-emotions",
        },
      ],
    },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }),
        }}
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
                Mixed Emotions
              </span>
              <meta itemProp="item" content="https://vocolens.com/resources/mixed-emotions" />
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
              <Intersect className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
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
            Mixed Emotions: Why You Can Feel Happy and Sad at Once
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Learn what mixed emotions are, see everyday examples of feeling two things at once, and
            try a reflection that makes room for both without forcing a choice.
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
              <time dateTime="2026-10-06" itemProp="datePublished">
                Oct 6, 2026
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

      <ListenToArticle slug="mixed-emotions" />
      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>Pleasant and unpleasant feelings can co-occur about the same situation.</li>
          <li>Mixed feelings are not automatically indecision or a problem to eliminate.</li>
          <li>Research on mixed emotions does not establish a health benefit from an app.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            You are happy about a new opportunity and sad about what you will leave behind. Mixed
            emotions are feelings that co-occur, often with opposite valence: one pleasant and one
            unpleasant. You do not have to choose a single word just because the situation is hard
            to summarize.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-two-at-once">
            <h2
              id="section-two-at-once"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What are mixed emotions?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Researchers often use the term for simultaneous positive and negative emotions, such
              as happy and sad. Ordinary language also uses mixed feelings more broadly. A
              transition, farewell, or meaningful choice can have both a gain and a loss.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Berrios and colleagues' 2015 meta-analysis examined 63 experiments and found that
              mixed emotions could be elicited across different models, emotion pairs, and
              measurement methods. How they are measured matters. This supports studying the
              experience, not a claim that everyone feels the same mix.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Source:{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4397957/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Eliciting mixed emotions (Berrios and colleagues, 2015)
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-information-not-noise">
            <h2
              id="section-information-not-noise"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Examples: happy and sad, relieved and disappointed
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Graduation can bring pride and sadness. A cancelled commitment can bring relief and
              disappointment. A move can feel exciting and unsettling. These examples do not tell
              you what you ought to feel; they show why a single pleasant-or-unpleasant score may
              miss part of an experience.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Indecision concerns what action to take. Mixed emotions concern what you feel. You can
              be decided about moving and still feel sad about leaving. Equally, a repeated conflict
              can point to a decision that deserves practical attention rather than more emotion
              analysis.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-dont-flatten">
            <h2
              id="section-dont-flatten"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A reflection that makes room for both
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Try two sentences: "I feel [first emotion] because [one aspect]. I also feel [second
              emotion] because [another aspect]." You can use tentative words and change them later.
              There is no requirement that the two feelings be equal in intensity.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Example: "I feel excited about the new role. I also feel apprehensive about learning
              the routine." Ask what each feeling points toward, then choose one next step such as
              preparing a question or planning a goodbye. This is a reflection suggestion, not a
              validated treatment.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              For more precise words, see{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                emotional granularity
              </Link>
              . For the act of naming a feeling, see{" "}
              <Link
                to="/resources/science-of-reflection"
                className="text-primary font-semibold hover:underline"
              >
                affect labeling
              </Link>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-holding-both">
            <h2
              id="section-holding-both"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Using a journal without forcing a single answer
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Paper or a voice entry can hold both sentences. If Vocolens suggests labels, review
              them rather than treating the analysis as a definitive explanation. You can reject a
              label, adjust it, or leave the experience partly unnamed.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Do not interpret the research as proof that mixed feelings improve physical health for
              everyone or that recording them in an app produces a clinical benefit. An association
              or laboratory finding is not a product trial.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If reflection becomes repetitive distress, pause and seek support. The{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                awareness guide
              </Link>{" "}
              offers a brief check-in; persistent or severe difficulties deserve qualified care.
              This article is educational, not medical advice.
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
                Frequently asked questions about mixed emotions and voice journaling
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
                to="/resources/emotional-granularity"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Neuroscience &amp; Emotional Intelligence
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Emotional granularity: why specific words change what you feel
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Anxious, stressed, overwhelmed — broad words can be true and still too vague
                      to act on. Learn why finer labels are linked to better regulation and how
                      voice journaling builds a personal emotional vocabulary.
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
              <Link
                to="/resources/alexithymia-emotional-vocabulary"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Neuroscience &amp; Emotional Intelligence
                    </p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Alexithymia: Difficulty Identifying Emotions and Where to Start
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Explore what alexithymia means, examples of difficulty identifying feelings,
                      and gentle ways to describe sensations and build emotional vocabulary.
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
              Hold both
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
