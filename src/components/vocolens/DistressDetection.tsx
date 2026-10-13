import { ListenToArticle } from "./ListenToArticle";
import {
  Pulse as Activity,
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
    question: "What is interoception?",
    answer:
      "It is sensing and interpreting signals from inside the body. Awareness and accurate interpretation are related but distinct.",
  },
  {
    question: "Does a tight chest mean anxiety?",
    answer:
      "Not necessarily. Physical sensations can have many causes. New, severe, or concerning symptoms should receive medical attention rather than an assumed emotional explanation.",
  },
  {
    question: "Can body awareness prevent overwhelm?",
    answer:
      "No preventive benefit is guaranteed here. A comfortable check-in may help you notice a need, but reducing demands or getting support may matter more.",
  },
  {
    question: "Can a body map diagnose stress?",
    answer: "No. It records observations and patterns, not diagnoses or reliable forecasts.",
  },
];

export function DistressDetection() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Physical Signs of Overwhelm: Body Awareness Without Guessing",
            description:
              "Learn what interoception means, explore physical signs that can accompany overwhelm, and try a gentle check-in without treating sensations as diagnoses.",
            image: "https://vocolens.com/vocolens-logo.png",
            datePublished: "2026-06-11",
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
              "@id": "https://vocolens.com/resources/distress-detection",
            },
            articleSection: "Body Awareness & Distress Detection",
            keywords:
              "distress detection, interoception, body awareness, overwhelm, somatic markers, nervous system, polyvagal, early warning signs, voice journaling, body sensation map, emotional regulation, anxiety, burnout prevention",
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
                  name: "Physical Signs of Overwhelm: Body Awareness Without Guessing",
                  item: "https://vocolens.com/resources/distress-detection",
                },
              ],
            },
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
                How Your Body Tells You Are Overwhelmed
              </span>
              <meta itemProp="item" content="https://vocolens.com/resources/distress-detection" />
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
              <Activity className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
                itemProp="articleSection"
              >
                Body Awareness &amp; Distress Detection
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1e293b" }}
          >
            Physical Signs of Overwhelm: Body Awareness Without Guessing
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            Learn what interoception means, explore physical signs that can accompany overwhelm, and
            try a gentle check-in without treating sensations as diagnoses.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>
              By{" "}
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Vocolens</span>
              </span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />4 min read
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-06-11" itemProp="datePublished">
              June 11, 2026
            </time>
            <span className="ml-2">
              Updated{" "}
              <time dateTime="2026-10-06" itemProp="dateModified">
                Oct 6, 2026
              </time>
            </span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="distress-detection" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">
          Key takeaways
        </p>
        <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>Interoception involves sensing and interpreting internal body signals.</li>
          <li>Tension, heat, or stomach discomfort are nonspecific clues, not emotion codes.</li>
          <li>
            New or severe physical symptoms deserve medical attention, not an app interpretation.
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
            Your shoulders tighten, your breathing changes, or your stomach feels unsettled during a
            demanding moment. These sensations can accompany overwhelm, but they can have many other
            causes. Body awareness starts with describing what you notice rather than assuming your
            body has diagnosed your emotional state.
          </p>
        </div>
        <div>
          <section aria-labelledby="section-body-first">
            <h2
              id="section-body-first"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What is interoception?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Interoception refers to sensing, interpreting, and integrating signals from within the
              body. It includes experiences such as hunger, breathing, heartbeat, and other internal
              sensations. Attention, context, and interpretation all matter.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Khalsa and colleagues describe interoception as a multidimensional research area, not
              a single early-warning switch. Noticing more signals is not automatically the same as
              interpreting them accurately or feeling better.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Reference:{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/29884281/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Interoception and Mental Health: A Roadmap (2018)
              </a>
              .
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-interoception">
            <h2
              id="section-interoception"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Physical signs that can accompany overwhelm
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You might notice muscle tension, restlessness, warmth, shallow breathing, or stomach
              discomfort. People differ, and the same sensation can occur with exertion, hunger,
              illness, medication effects, or anxiety. There is no reliable one-to-one map from a
              body area to an emotion.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Compare contexts rather than deciding immediately. Did the sensation begin after a
              difficult conversation, a missed meal, or physical activity? Record uncertainty. Our{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional awareness guide
              </Link>{" "}
              separates observation from interpretation.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-warning-signs">
            <h2
              id="section-warning-signs"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              A gentle body-and-context check-in
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Only if it feels comfortable, pause and describe one sensation without judging it:
              where, what it feels like, and whether it changed. Then notice the situation and one
              practical need such as water, food, a quieter space, or a break.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Do not force deep breathing or inward attention if it increases distress. You can
              instead look around, identify something neutral in the room, or contact a trusted
              person. This is a reflection suggestion, not a treatment protocol.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              For sensory demands, see{" "}
              <Link
                to="/resources/autism-emotional-regulation"
                className="text-primary font-semibold hover:underline"
              >
                autism and regulation supports
              </Link>
              . Choose support according to the individual rather than assuming one exercise fits
              everyone.
            </p>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-mapping">
            <h2
              id="section-mapping"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              When a body map is useful, and when it is not
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A paper sketch or Vocolens body-sensation record can help you remember what you
              noticed. A frequency map shows recorded patterns; it is not a predictive stress
              signature, diagnostic test, or proof that an emotion caused a symptom.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If sensation labels are easier than emotion words, begin there. The{" "}
              <Link
                to="/resources/alexithymia-emotional-vocabulary"
                className="text-primary font-semibold hover:underline"
              >
                alexithymia guide
              </Link>{" "}
              offers other starting points. Keep the record brief and stop if checking becomes
              distressing or repetitive.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Do not dismiss new, severe, or concerning symptoms as stress. Chest pain, serious
              breathing difficulty, fainting, or another urgent symptom can require immediate
              medical care. Seek qualified advice for persistent symptoms. This article is
              educational, not medical advice.
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
                Frequently asked questions about body awareness and distress detection
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
              Hear your body first
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
