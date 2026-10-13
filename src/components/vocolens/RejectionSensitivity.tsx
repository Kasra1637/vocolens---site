import { ListenToArticle } from "./ListenToArticle";
import {
  HeartBreak,
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
    question: "Is RSD a formal diagnosis?",
    answer:
      "No. It is an informal term used for intense rejection-related distress. Research on its causes and prevalence remains limited.",
  },
  {
    question: "Does feeling rejected mean someone rejected me?",
    answer:
      "Not necessarily. The feeling is real, but the meaning of a vague interaction may still be uncertain. Separate the event from the interpretation.",
  },
  {
    question: "What can I do after painful feedback?",
    answer:
      "Pause if possible, name the feeling, identify an observable fact, and choose support or a clarifying question. These suggestions do not guarantee immediate relief.",
  },
  {
    question: "Can an AI journal diagnose RSD?",
    answer:
      "No. A journal cannot diagnose RSD, infer another person's intention, or choose treatment. Seek qualified help for persistent or severe distress.",
  },
];

export function RejectionSensitivity() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rejection Sensitivity and ADHD: What RSD Means and How to Respond",
    description:
      "Learn what rejection sensitivity and RSD mean, why the label is not a formal diagnosis, and practical ways to respond to hurt without assuming intent.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-09-29",
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
      "@id": "https://vocolens.com/resources/rejection-sensitivity",
    },
    articleSection: "ADHD & Emotional Regulation",
    keywords:
      "rejection sensitivity dysphoria, RSD, ADHD rejection, rejection sensitivity, social pain, emotional dysregulation ADHD, ADHD emotional regulation, criticism sensitivity, voice journaling ADHD",

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
          name: "Rejection Sensitivity & the ADHD Brain",
          item: "https://vocolens.com/resources/rejection-sensitivity",
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
                Rejection Sensitivity &amp; the ADHD Brain
              </span>
              <meta
                itemProp="item"
                content="https://vocolens.com/resources/rejection-sensitivity"
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
              <HeartBreak className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                ADHD &amp; Emotional Regulation
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Rejection Sensitivity and ADHD: What RSD Means and How to Respond
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Learn what rejection sensitivity and RSD mean, why the label is not a formal diagnosis,
            and practical ways to respond to hurt without assuming intent.
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
              <time dateTime="2026-09-29" itemProp="datePublished">
                Sep 29, 2026
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

      <ListenToArticle slug="rejection-sensitivity" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>RSD is an informal term, not an officially recognized diagnosis.</li>
          <li>Painful feelings are real even when another person's intent is uncertain.</li>
          <li>A pause, clarification, and qualified support can matter more than more analysis.</li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            A short reply or a small correction lands painfully, and you start reading it as a
            verdict about you. Rejection sensitivity concerns anticipating or reacting strongly to
            rejection. Rejection sensitive dysphoria, or RSD, is a term used for intense
            rejection-related distress, especially in ADHD discussions. It is not a formal
            diagnosis.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-what-is-rsd">
            <h2
              id="section-what-is-rsd"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is rejection sensitivity, and what does RSD mean?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The experience can involve embarrassment, hurt, worry about disapproval, or a strong
              urge to withdraw or defend yourself. These examples are not a diagnostic test and do
              not establish ADHD.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Cleveland Clinic describes RSD as not an officially recognized symptom or diagnosis
              and notes limited research on its prevalence and causes. Avoid presenting a proposed
              mechanism or a popular label as settled evidence about every ADHD brain.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Reference:{" "}
              <a
                href="https://my.clevelandclinic.org/health/diseases/24099-rejection-sensitive-dysphoria-rsd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Cleveland Clinic on rejection sensitive dysphoria
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-social-pain">
            <h2
              id="section-social-pain"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Examples: separating the event from its meaning
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Event: a colleague writes "please revise this." Interpretation: "they think I am
              incompetent." Feeling: hurt, shame, or anxiety. Separating the three does not
              invalidate the feeling; it leaves room for another explanation and a useful response.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Social-pain research does not mean emotional rejection and physical injury are
              identical, or that a scan can diagnose RSD. Past experiences, context, and other
              difficulties can also matter. Do not infer another person's intention from the
              intensity of your reaction.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-adhd-brain">
            <h2
              id="section-adhd-brain"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What to try in the moment
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If it is safe, pause before sending the reply you may later regret. Notice one feeling
              and one observable fact. A sentence such as "I feel hurt, and I do not yet know what
              they intended" keeps both in view.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Choose an ordinary support: a quieter space, a break, a trusted person, or a
              clarifying question. For example: "Which part should I revise first?" These are
              practical suggestions, not a guarantee that distress will disappear in ten minutes.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Our guide to{" "}
              <Link
                to="/resources/science-of-reflection"
                className="text-primary font-semibold hover:underline"
              >
                affect labeling
              </Link>{" "}
              explains naming feelings without promises of instant relief.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-advice-backfires">
            <h2
              id="section-advice-backfires"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A brief reflection instead of a repeated replay
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Try recording: what happened, what I assumed, what I felt, and what I need next.
              Include alternative explanations without demanding that you feel positive. If the
              entry becomes a repeated prosecution of yourself, stop and return to a concrete
              activity or support.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Vocolens can hold a voice reflection and candidate emotion labels. It cannot diagnose
              RSD, determine someone else's intentions, or establish which treatment you need.
              Writing can serve the same purpose.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              See{" "}
              <Link
                to="/resources/overthinking-rumination"
                className="text-primary font-semibold hover:underline"
              >
                rumination versus reflection
              </Link>{" "}
              and{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                specific emotion words
              </Link>
              . Persistent distress or relationship difficulties deserve qualified support. This
              guide is educational, not medical advice.
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
                Frequently asked questions about rejection sensitivity and ADHD
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
                      Precise emotion labels take intensity out of a feeling — the skill that makes
                      naming rejection pain actually work.
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
                to="/resources/alexithymia-emotional-vocabulary"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">
                      Alexithymia &amp; Emotional Vocabulary
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
            </div>
          </div>
        </div>

        <div>
          <div data-listen-exclude className="card-app rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Name the sting
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
