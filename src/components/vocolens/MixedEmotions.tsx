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
    question: "What are mixed emotions?",
    answer:
      "Mixed emotions are the experience of two emotions at the same time, usually of opposite valence — one pleasant and one unpleasant — about the same situation: happy and sad, excited and afraid, relieved and resentful. Researchers set them apart from blends of similar valence (anxious and afraid), which nobody disputes. The contested case was always the opposite-valence pair, and the evidence since 2001 says it is real: on an ordinary day most people report one or the other, but in emotionally complex moments — endings, beginnings, bittersweet films — around half report both.",
  },
  {
    question: "Is it normal to feel two opposite emotions at the same time?",
    answer:
      "Yes. In the Larsen, McGraw and Cacioppo studies, 10 to 20% of people reported feeling both happy and sad on a typical day, rising to 44 to 54% immediately after watching Life Is Beautiful, moving out of a dormitory, or graduating. A 2015 meta-analysis of 63 experiments found that mixed emotions can be reliably elicited across different emotion pairs and measurement methods. The reason it feels unusual is mostly a language problem: English has very few single words for a two-part feeling, so 'bittersweet' does a lot of work and 'weird' does the rest.",
  },
  {
    question: "Are mixed emotions the same as being ambivalent or indecisive?",
    answer:
      "Not quite, though the words travel together. In research, emotional ambivalence is the co-occurrence of positive and negative feelings about the same thing — which is what mixed emotions are. Indecision is about action: not knowing what to do. You can feel strongly mixed about a move and be completely decided about making it, in which case the mixed feeling is not a problem to solve but an accurate description of a situation with a cost and a benefit. Mixed feelings that keep returning to the same unmade choice are a different matter, and worth noticing as a pattern.",
  },
  {
    question: "Why do I feel happy and sad at the same time?",
    answer:
      "Usually because the situation has a gain and a loss in it, and your system is reading both. Graduation is the clearest example: it is the end of something and the start of something, and when researchers measured it, half of graduates reported feeling both. The evaluative space model explains how that is possible — positive and negative affect are handled by separable processes, so both can be active at once, even though most of the time one dominates and the other stays quiet. The feeling is not confused. The situation is simply more than one thing.",
  },
  {
    question: "How does voice journaling help with mixed emotions?",
    answer:
      "Speaking lets you say both halves before you have edited them into one. You describe the situation in your own words, and Vocolens analyses the language in the transcript to surface the emotions present — including blended emotions and the tension between them, rather than collapsing them into a single label. Each emotion comes back with its Plutchik intensity, so 'excited and a little uneasy' and 'excited and terrified' are different readings, not the same one. If a label or its intensity is wrong, you adjust it; the correction is stored on your device alongside the original, and a pattern in Vocolens needs at least 3 corrections across 2 weeks before it shifts later analysis. Over dozens of entries, you start to see which pairs you keep carrying together.",
  },
];

export function MixedEmotions() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mixed Emotions: Why Feeling Two Things at Once Is Information, Not Confusion",
    alternativeHeadline:
      "Mixed Emotions: Why You Can Feel Excited and Terrified at the Same Time — and Why Naming Both Beats Flattening Them Into One",
    description:
      "Can you feel two emotions at once? Learn what mixed emotions are, why they are information, not confusion, and how voice journaling helps you hold both.",
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
    about: [
      {
        "@type": "Thing",
        name: "Mixed emotions",
        description:
          "The simultaneous experience of two emotions, usually of opposite valence, about the same situation",
      },
      {
        "@type": "Thing",
        name: "Emotional ambivalence",
        description:
          "The co-occurrence of positive and negative feelings toward the same object, person, or event",
      },
      {
        "@type": "Thing",
        name: "Evaluative space model",
        description:
          "A model of affect in which positive and negative evaluation are separable processes that can be co-activated",
      },
      {
        "@type": "Thing",
        name: "Emotional granularity",
        description:
          "The ability to make fine-grained distinctions between emotional states rather than collapsing them into broad labels",
      },
      {
        "@type": "Thing",
        name: "Affect labeling",
        description:
          "Putting an emotion into words, which is associated with changes in how the brain processes emotional experience",
      },
    ],
    mentions: [
      {
        "@type": "ScholarlyArticle",
        name: "Can People Feel Happy and Sad at the Same Time?",
        author: { "@type": "Person", name: "Jeff T. Larsen" },
        datePublished: "2001",
        url: "https://pubmed.ncbi.nlm.nih.gov/11642354/",
      },
      {
        "@type": "ScholarlyArticle",
        name: "Eliciting Mixed Emotions: A Meta-Analysis Comparing Models, Types, and Measures",
        author: { "@type": "Person", name: "Raul Berrios" },
        datePublished: "2015",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4397957/",
      },
      {
        "@type": "ScholarlyArticle",
        name: "When Feeling Bad Can Be Good: Mixed Emotions Benefit Physical Health Across Adulthood",
        author: { "@type": "Person", name: "Hal E. Hershfield" },
        datePublished: "2013",
        url: "https://pubmed.ncbi.nlm.nih.gov/24032072/",
      },
    ],
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
            Mixed Emotions: Why Feeling Two Things at Once Is Information, Not Confusion
          </h1>
          <p
            data-speakable="summary"
            className="text-text-secondary mb-5 text-base leading-relaxed"
          >
            You can be excited about the promotion and terrified of failing at it — in the same
            breath. Here is what the research says about feeling two things at once, why it is not a
            sign that you are confused, and how a voice-journaling habit can hold both feelings
            instead of flattening them into one word that fits neither.
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
              <span>8 min read</span>
              <span aria-hidden="true" className="mx-1">
                ·
              </span>
              <time dateTime="2026-10-06" itemProp="datePublished">
                Oct 6, 2026
              </time>
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
          <li className="flex items-start gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <strong className="font-semibold text-text-primary">
                Mixed emotions are real, measurable, and most common at the moments that matter.
              </strong>{" "}
              In one landmark study, 54% of students felt both happy and sad on the day they moved
              out of their dorm, compared with 16% on an ordinary day. The feeling did not get
              confused. The situation got more complicated.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <strong className="font-semibold text-text-primary">
                Two feelings about one situation usually means the situation has two things in it.
              </strong>{" "}
              The excitement is about the role; the fear is about the first month. What costs you is
              not the second feeling — it is the one vague word ("weird," "stressed") you reach for
              to cover both.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <strong className="font-semibold text-text-primary">
                Holding both is a skill, and it is built the same way granularity is: by naming each
                feeling separately instead of averaging them.
              </strong>{" "}
              Speaking helps because "and" happens before you have time to tidy it, and a voice
              journal can detect blended emotions and the tension between them rather than
              flattening them into one label.
            </div>
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
            The offer comes through. It's the job you wanted, at the number you asked for, and you
            say yes before they can change their mind. Then you hang up and sit very still, because
            the feeling that arrives isn't the one you ordered. You're excited. You're also,
            somewhere under that, terrified — of the first month, of being found out, of what you
            just agreed to carry. If a friend asked how you feel, the honest answer would be "both,"
            and "both" is not an answer most people know what to do with.
          </p>
          <p className="mt-4">
            The emotional granularity article in this library is about choosing a sharper word than
            "anxious" or "stressed." This one is about what happens when the honest answer is not
            one sharper word but two that seem to contradict each other — and why that is not a
            failure of self-knowledge. It is usually the opposite.
          </p>
        </div>

        <div>
          <section aria-labelledby="section-two-at-once">
            <h2
              id="section-two-at-once"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Can you really feel two things at once?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              For most of the last century, the tidy answer was no. The best-known map of emotion,
              the circumplex, puts feelings on a dial: pleasant at one end, unpleasant at the other.
              On a dial you can only be in one place, so happiness and sadness are opposites the way
              hot and cold are — more of one means less of the other, and "both" is a measurement
              error.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              In 2001, Jeff Larsen, Peter McGraw and John Cacioppo went looking for the places where
              the dial breaks. They surveyed people leaving the film Life Is Beautiful, students
              handing in their dorm keys in June, and graduates walking out of their ceremony. On an
              ordinary day, 10 to 20% of people said they felt both happy and sad. After the film it
              was 44%. On move-out day, 54%. On graduation day, 50%. The same people, asked the same
              way, had not become confused. The situation had got more complicated, and their
              feelings had followed it.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "Although affective experience may typically be bipolar, the underlying processes, and
              occasionally the resulting experience of emotion, are better characterized as
              bivariate."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">
                — Larsen, McGraw &amp; Cacioppo, 2001, Journal of Personality and Social Psychology
              </cite>
            </blockquote>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Bivariate is the technical word for a simple idea: pleasant and unpleasant feeling run
              on two separate channels, not one dial. Most days one channel is quiet, so the dial
              model looks right. On the days that matter, both are on at once.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: "both" is a legitimate answer. Your system runs two channels, not one dial,
              and the moments when both light up are not noise.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/11642354/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Larsen, McGraw & Cacioppo (2001) on feeling happy and sad at the same time — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">
                Read the research: Can people feel happy and sad at the same time? — PubMed
              </span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-information-not-noise">
            <h2
              id="section-information-not-noise"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Why two feelings is information, not noise
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If mixed emotions were rare or flimsy, you could be forgiven for treating them as
              static. They aren't. A 2015 meta-analysis of 63 experimental studies found that mixed
              emotions can be reliably produced with a moderate-to-large effect, whether researchers
              measured broad positive and negative affect or specific pairs — happy and sad, or fear
              and happiness, which is the exact pairing inside "excited and terrified."
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "The current study indicates that mixed emotions are a robust, measurable and
              non-artifactual experience."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">
                — Berrios, Totterdell &amp; Kellett, 2015, Frontiers in Psychology
              </cite>
            </blockquote>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Here is why that matters for you rather than for emotion theory. A feeling is a
              reading of a situation. If the situation has two things in it — a reward and a risk,
              an ending and a beginning — then an accurate reading has two parts. The excitement is
              about the role. The fear is about the first month. They are not fighting. They are
              pointing at different things, and each one suggests a different thing to do.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              What costs you is not the second feeling. It's the word you reach for to cover both.
              "I feel weird about it." "I'm just stressed." Those words win because they are the
              only ones vague enough to hold two things at once — and in winning, they throw away
              the half of the information that would have told you what to do next. That is the
              granularity problem in a different shape: not a word that is too broad, but one word
              asked to do the job of two.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: two feelings about one situation usually means the situation has two things
              in it. Name both, and you know what each one is for.
            </p>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4397957/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Berrios, Totterdell & Kellett (2015), a meta-analysis of mixed emotions — PMC"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">
                Read the research: Eliciting mixed emotions — a meta-analysis of 63 studies — PMC
              </span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-dont-flatten">
            <h2
              id="section-dont-flatten"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              What happens when you don't flatten it
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              There is a version of emotional health that sounds like a thermostat: bad feelings
              down, good ones up, hold steady. Mixed emotions make a mess of that picture, which may
              be why people apologise for them — "I know I should just be happy." But a ten-year
              study suggests the mess is doing something useful.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Hal Hershfield and colleagues followed adults across the lifespan, sampling their
              emotions in daily life over a decade. People who frequently felt positive and negative
              emotions together — not in sequence, together — were in relatively better physical
              health, and those whose mixed emotions increased over the years showed smaller
              age-related health declines. This is an association, not a prescription; nobody should
              manufacture dread to go with their joy. But it sits awkwardly with the idea that the
              goal is to resolve every feeling into one.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "Not only were frequent experiences of mixed emotions … strongly associated with
              relatively good physical health, but … increases of mixed emotions over many years
              attenuated typical age-related health declines."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">
                — Hershfield, Scheibe, Sims &amp; Carstensen, 2013, Social Psychological and
                Personality Science
              </cite>
            </blockquote>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The plainer explanation is one Larsen and colleagues offered years earlier: the people
              who cope best with hard things do not get there by neutralising the hard feeling. They
              carry it alongside the good one. One cancer patient in that literature described going
              to the opera and putting her illness "in the seat next to me. It was there but I had a
              wonderful time." That is not confusion. That is two true things, each given its own
              seat.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: a flattened feeling isn't calmer, just less legible. Holding both is
              associated with better outcomes than averaging them away.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/24032072/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Hershfield, Scheibe, Sims & Carstensen (2013) on mixed emotions and physical health — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">
                Read the research: When feeling bad can be good — mixed emotions and physical health
                — PubMed
              </span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-holding-both">
            <h2
              id="section-holding-both"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              How to hold two feelings without picking a winner
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              None of this needs a technique so much as a small change in grammar. Four moves cover
              most of the everyday cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>
                <strong className="text-text-primary font-semibold">
                  Say both, joined by "and."
                </strong>{" "}
                "I'm relieved and I'm resentful." Not "but" — "but" demotes whichever feeling comes
                second to a footnote, and the footnote is usually the one you needed to hear.
              </li>
              <li>
                <strong className="text-text-primary font-semibold">
                  Give each one its own object.
                </strong>{" "}
                Excited about what, exactly? Afraid of what, exactly? They are rarely about the same
                thing, and once they have separate objects they stop looking like a contradiction.
              </li>
              <li>
                <strong className="text-text-primary font-semibold">
                  Check the volume separately.
                </strong>{" "}
                Both can be real at very different intensities. A little unease under a lot of
                anticipation is a different week from a lot of dread under a little interest —
                "uneasy" versus "terrified" is a distinction worth making out loud.
              </li>
              <li>
                <strong className="text-text-primary font-semibold">
                  Let it stay unresolved for now.
                </strong>{" "}
                You don't have to pick a winner before you act. Most mixed states settle once each
                half has been named and has somewhere to go. The ones that don't are telling you
                about a decision you haven't made yet — which is also information.
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed">
              Speaking helps here in a way that writing often doesn't. When you talk, "and" happens
              before you have had time to tidy it: you say both things in one breath and only
              afterwards notice that they don't match. That is the moment a voice journal is built
              for. Vocolens detects blended emotions and the tension between them rather than
              flattening them into a single label, so an entry can come back as anticipation and
              fear, each at its own intensity, instead of a vague "stressed" that fits neither. If
              the read is off, you adjust it, and over time your corrections shape which labels it
              suggests.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: "and" is the whole technique. Two named feelings at their own volumes are
              easier to carry than one vague one.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-faq" className="border-t border-primary/10">
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
                      How naming your emotions reduces stress and builds resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Learn how affect labeling decreases amygdala activity and calms your nervous
                      system through daily voice journaling.
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
                      Why you can't name what you're feeling: alexithymia and the emotional
                      vocabulary you were never taught
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Around 10% of people struggle to identify and describe their own emotions.
                      Learn the neuroscience of emotional blindness and how AI voice journaling
                      builds a personal vocabulary from scratch.
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
              Feeling two things at once is information. Vocolens names each one instead of
              averaging them.
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
