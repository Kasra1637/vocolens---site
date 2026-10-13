import { ListenToArticle } from "./ListenToArticle";
import {
  Flame,
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
    question: "What are the main burnout signs?",
    answer:
      "WHO describes exhaustion, increased distance or cynicism toward work, and reduced professional efficacy. These can overlap with other difficulties and do not establish a diagnosis on their own.",
  },
  {
    question: "Is burnout just being tired?",
    answer:
      "Ordinary tiredness and sustained work-related exhaustion are not interchangeable. Duration, demands, and functioning matter; persistent symptoms deserve assessment.",
  },
  {
    question: "Will a vacation fix burnout?",
    answer:
      "Rest may help, but it does not guarantee recovery if demands and support remain unchanged. Consider practical adjustments and qualified care when needed.",
  },
  {
    question: "Can a journal detect burnout?",
    answer:
      "A journal can record observations but cannot diagnose burnout or predict collapse. Do not substitute app patterns for assessment or workplace support.",
  },
];

export function BurnoutRecovery() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Burnout Signs and Recovery: What to Notice and What Can Help",
    description:
      "Understand workplace burnout signs, how they differ from ordinary tiredness, and practical recovery supports that address demands as well as rest.",
    image: "https://vocolens.com/vocolens-logo.png",
    datePublished: "2026-08-04",
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
      "@id": "https://vocolens.com/resources/burnout-recovery-signs",
    },
    articleSection: "Stress & Burnout Recovery",
    keywords:
      "burnout, signs of burnout, burnout recovery, burnout symptoms, how to recover from burnout, emotional exhaustion, allostatic load, occupational burnout, burnout prevention, voice journaling stress",

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
          name: "Burnout Recovery",
          item: "https://vocolens.com/resources/burnout-recovery-signs",
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
                Burnout Recovery
              </span>
              <meta
                itemProp="item"
                content="https://vocolens.com/resources/burnout-recovery-signs"
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
              <Flame className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                Stress &amp; Burnout Recovery
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Burnout Signs and Recovery: What to Notice and What Can Help
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Understand workplace burnout signs, how they differ from ordinary tiredness, and
            practical recovery supports that address demands as well as rest.
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
              <time dateTime="2026-08-04" itemProp="datePublished">
                Aug 4, 2026
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

      <ListenToArticle slug="burnout-recovery-signs" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>WHO defines burnout in the occupational context, not as every form of exhaustion.</li>
          <li>
            Exhaustion, distance from work, and reduced efficacy can overlap with other
            difficulties.
          </li>
          <li>
            Recovery may require changes to demands and support, not simply better journaling.
          </li>
        </ul>
      </div>

      <div
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
        itemProp="articleBody"
        id="article-root"
      >
        <div>
          <p>
            You feel drained, increasingly detached from work, and less able to do tasks that once
            felt manageable. Burnout is not a personal failure. The World Health Organization
            describes it as an occupational phenomenon resulting from chronic workplace stress that
            has not been successfully managed. Persistent exhaustion deserves attention without
            assuming one explanation.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-allostatic-load">
            <h2
              id="section-allostatic-load"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is burnout? The scope of the WHO definition
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              WHO describes three dimensions: energy depletion or exhaustion, increased mental
              distance or cynicism toward work, and reduced professional efficacy. Its ICD-11
              definition refers specifically to the occupational context and does not classify
              burnout as a medical condition.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              People also use burnout informally for caregiving, study, or other prolonged demands.
              Those experiences matter, but they should not be presented as identical to the WHO
              definition. A journal cannot determine whether exhaustion comes from burnout,
              depression, a physical condition, or another cause.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Source:{" "}
              <a
                href="https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                WHO on burnout as an occupational phenomenon
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-maslach">
            <h2
              id="section-maslach"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Signs worth noticing, without a self-diagnosis
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You may notice sustained exhaustion, increasing dread or detachment about work, or
              feeling less effective despite effort. These are not necessarily stages in a fixed
              order. A difficult week alone does not establish burnout.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Record duration, demands, opportunities for rest, and how daily functioning has
              changed. Include what improves the situation. If low mood, sleep problems, or
              exhaustion persist, consider professional assessment rather than treating a checklist
              as a diagnosis.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-vacation-fallacy">
            <h2
              id="section-vacation-fallacy"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Recovery supports: change demands as well as rest
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Rest can matter, but returning to unchanged demands may leave the same difficulties in
              place. Consider workload, control over tasks, realistic priorities, social support,
              and whether agreed accommodations or time away are possible. The available options
              depend on your circumstances.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A small next step could be naming one unsustainable demand and asking for a concrete
              change. Avoid framing recovery as another productivity project. If a conversation
              feels difficult, write down the request before speaking to a manager, trusted
              supporter, or clinician.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Persistent or severe symptoms warrant qualified care. Journaling is not a replacement
              for medical assessment or workplace changes. If planning itself is hard,{" "}
              <Link
                to="/resources/adhd-time-blindness"
                className="text-primary font-semibold hover:underline"
              >
                practical time supports
              </Link>{" "}
              may help organize one manageable step.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-daily-load-check">
            <h2
              id="section-daily-load-check"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A gentle demand-and-recovery check-in
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Try: What took energy today? What restored some energy? What could be reduced or
              shared? What support do I need? Example: "Back-to-back calls were draining; a quiet
              break helped; ask for a gap between meetings." This is a reflection prompt, not a
              validated burnout score.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Paper notes or a Vocolens voice entry can keep observations in one place. Look for
              recurring demands without assuming the app predicts collapse or measures
              nervous-system damage. Stop if tracking becomes another obligation.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              See{" "}
              <Link
                to="/resources/distress-detection"
                className="text-primary font-semibold hover:underline"
              >
                body-awareness clues
              </Link>{" "}
              and{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional awareness
              </Link>{" "}
              for related exercises. This guide is educational, not medical advice.
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
                Frequently asked questions about burnout and recovery
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
              Catch the load early
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
