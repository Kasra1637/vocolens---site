import { ArrowUpRight, CaretRight, Clock, Heart, Question } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { BackToTop } from "./BackToTop";
import { ListenToArticle } from "./ListenToArticle";
import { AdjustHowItFeltFigure } from "./figures/AdjustHowItFeltFigure";
import { AppFigure } from "./figures/AppFigure";

const title = "Valence & Arousal: Why Calm Isn’t Always Happy";
const description =
  "Learn how emotional valence and arousal differ, why low energy does not always mean calm contentment, and how to use a two-axis emotion check-in.";
const url = "https://vocolens.com/resources/valence-and-arousal";
const date = "2026-10-11";
const circumplexSource = "https://pmc.ncbi.nlm.nih.gov/articles/PMC2367156/";
const mixedEmotionsSource = "https://doi.org/10.3389/fpsyg.2015.00428";

const faqData = [
  {
    question: "What are valence and arousal in emotions?",
    answer:
      "Valence describes how pleasant or unpleasant a feeling is. Arousal describes how activated or low-energy it feels. They are different dimensions: excitement can be pleasant and highly activated, while contentment can be pleasant and less activated. Neither rating identifies an emotion or explains its cause by itself.",
  },
  {
    question: "Does emotional arousal mean sexual arousal?",
    answer:
      "Not specifically. In this emotion model, arousal means activation or alertness. Feeling excited, tense, or apprehensive can involve high activation. The term is broader than sexual arousal; activated is often the clearer everyday word.",
  },
  {
    question: "Is arousal the same as emotional intensity?",
    answer:
      "Not exactly. Arousal asks how activated or energized you feel. Emotional intensity asks how strongly you experience a feeling, although researchers and rating scales can use intensity differently. The two can relate, but a deeply felt sadness need not be highly activated. Check what a particular scale is asking rather than treating all scores as interchangeable.",
  },
  {
    question: "Can low arousal feel unpleasant?",
    answer:
      "Yes. Low activation can accompany pleasant contentment or an unpleasant sense of feeling drained or down. Low energy alone does not show whether you feel well, identify an emotion, or diagnose a condition. Context and your own description still matter.",
  },
  {
    question: "Can a valence score capture mixed emotions?",
    answer:
      "Not fully. A single pleasant–unpleasant rating can summarize an experience while hiding simultaneous pleasant and unpleasant feelings. You might feel proud about a change and sad about what you are leaving. Record both in words rather than assuming a middle score means you feel nothing.",
  },
  {
    question: "How does Vocolens use valence and arousal?",
    answer:
      "Vocolens includes Unpleasant ↔ Pleasant and Calm ↔ Activated controls in its emotion views. You can review suggested emotion labels and adjust how an entry felt. These are reflection aids, not measurements that establish your true feelings or diagnose a condition. Your own account can include details that a score leaves out.",
  },
];

const examples = [
  {
    valence: "Pleasant",
    activation: "Lower activation",
    example: "Contented after an unhurried afternoon",
    note: "Settled, with little urge to move or act.",
  },
  {
    valence: "Pleasant",
    activation: "Higher activation",
    example: "Excited before a long-awaited reunion",
    note: "Energized and looking forward to what comes next.",
  },
  {
    valence: "Unpleasant",
    activation: "Lower activation",
    example: "Down or drained after a disappointment",
    note: "Little energy, but not necessarily a sense of ease.",
  },
  {
    valence: "Unpleasant",
    activation: "Higher activation",
    example: "Apprehensive before a difficult conversation",
    note: "Braced, restless, or ready to respond.",
  },
];

const relatedArticles = [
  {
    to: "/resources/plutchik-emotion-wheel" as const,
    title: "Plutchik’s emotion wheel: why “annoyed” & “furious” belong on the same ladder",
    description:
      "See how eight primary emotion families and three intensity rungs complement the two-axis map.",
  },
  {
    to: "/resources/emotional-granularity" as const,
    title: "Emotional Granularity: Why Specific Words Change What You Feel",
    description:
      "Once you have a rough location, explore the finer distinctions between emotion words.",
  },
  {
    to: "/resources/emotional-awareness-patterns" as const,
    title: "Emotional Awareness: What It Is & How to Improve It",
    description: "Connect a possible feeling with its situation and a practical next step.",
  },
  {
    to: "/resources/science-of-reflection" as const,
    title: "Affect Labeling: How to Name Your Emotions",
    description: "Explore what putting a feeling into words can—and cannot—tell you.",
  },
];

export function ValenceAndArousal() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: "https://vocolens.com/og/valence-and-arousal.png",
    datePublished: date,
    dateModified: date,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Vocolens", url: "https://vocolens.com" },
    publisher: {
      "@type": "Organization",
      name: "Vocolens",
      url: "https://vocolens.com",
      logo: { "@type": "ImageObject", url: "https://vocolens.com/vocolens_favicon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: "Neuroscience & Emotional Intelligence",
    keywords:
      "valence and arousal, emotional arousal, circumplex model of affect, emotional intensity, emotion check-in, voice journaling",
    about: [
      {
        "@type": "Thing",
        name: "Emotional valence",
        description: "The pleasant–unpleasant dimension of affect.",
      },
      {
        "@type": "Thing",
        name: "Emotional arousal",
        description: "The activation dimension of affect.",
      },
      {
        "@type": "Thing",
        name: "Circumplex model of affect",
        description: "A framework organizing affect along valence and arousal dimensions.",
      },
    ],
    citation: [circumplexSource, mixedEmotionsSource],
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
        { "@type": "ListItem", position: 3, name: "Valence & Arousal", item: url },
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

      <nav aria-label="Breadcrumb" className="mb-8">
        <ol
          className="flex flex-wrap items-center gap-2 text-sm text-text-muted"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              to="/"
              className="text-primary font-semibold hover:underline"
              itemProp="name"
            >
              Home
            </Link>
            <meta itemProp="item" content="https://vocolens.com" />
            <meta itemProp="position" content="1" />
          </li>
          <CaretRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              to="/resources"
              className="text-primary font-semibold hover:underline"
              itemProp="name"
            >
              Resources
            </Link>
            <meta itemProp="item" content="https://vocolens.com/resources" />
            <meta itemProp="position" content="2" />
          </li>
          <CaretRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span className="text-text-primary font-medium" itemProp="name">
              Valence & Arousal
            </span>
            <meta
              itemProp="item"
              content="https://vocolens.com/resources/valence-and-arousal"
            />
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <header className="mb-12 lg:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
            aria-hidden="true"
          >
            <Heart className="w-5 h-5 text-[#6A3FC0]" />
          </div>
          <span
            className="inline-flex px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
            itemProp="articleSection"
          >
            Neuroscience &amp; Emotional Intelligence
          </span>
        </div>
        <h1
          itemProp="headline"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#1e293b]"
        >
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span>
            By{" "}
            <span itemProp="author" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">Vocolens</span>
            </span>
          </span>
          <span className="flex flex-wrap items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            <span>6 min read</span>
            <span aria-hidden="true" className="mx-1">
              ·
            </span>
            <time dateTime={date} itemProp="datePublished">
              Oct 11, 2026
            </time>
          </span>
        </div>
      </header>

      <ListenToArticle slug="valence-and-arousal" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-3">
          Key takeaways
        </p>
        <ul className="list-disc pl-5 space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>
            <strong className="text-text-primary font-semibold">
              Valence is pleasantness; arousal is activation.
            </strong>{" "}
            Feeling energized does not tell you whether the experience feels good.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              Lower activation is not automatically wellbeing.
            </strong>{" "}
            Contentment and feeling drained can both involve little energy, but feel very different.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              Two axes are a starting point, not a verdict.
            </strong>{" "}
            Context, mixed feelings, and your own words add what a score leaves out.
          </li>
        </ul>
      </div>

      <div
        id="article-root"
        itemProp="articleBody"
        className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose"
      >
        <div>
          <section aria-labelledby="section-overview">
            <h2
              id="section-overview"
              className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
            >
              Overview
            </h2>
            <p data-speakable="summary" className="mb-4 text-base lg:text-lg leading-relaxed">
              Quiet can feel peaceful, or it can feel heavy. Energy can feel exciting, or it can
              feel like being braced for bad news. Valence and arousal separate those questions—so a
              single mood score does not have to carry the whole story.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You finish the day, sit down, and notice that everything has gone quiet. Yesterday
              that quiet felt like relief. Tonight it feels more like being emptied out. If the only
              question is “How much energy do I have?”, the two evenings look similar. If the
              question is “How am I?”, they are not the same at all.
            </p>
            <p className="mt-4">
              The{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                emotional-granularity guide
              </Link>{" "}
              is about finding a more precise word. This guide takes a step back: when the word is
              not there yet, what can you notice? Pleasantness and activation give you two useful
              questions before you ask for a label.
            </p>
          </section>
        </div>

        <section aria-labelledby="section-valence-arousal">
          <h2
            id="section-valence-arousal"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What are valence and arousal?
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary font-semibold">
              Valence describes how pleasant or unpleasant a feeling is. Arousal describes how
              activated or low-energy it feels.
            </strong>{" "}
            They are separate dimensions: you can feel pleasantly energized, unpleasantly energized,
            pleasantly settled, or unpleasantly low in energy.
          </p>
          <p className="mb-4">
            Here, “arousal” means activation or alertness, not specifically sexual arousal. Think
            “How stirred up or slowed down do I feel?” rather than “Which emotion is this?” And
            “positive” or “negative” valence describes pleasantness—not whether an emotion is
            morally good, useful, or allowed.
          </p>
          <p>
            Psychologist James Russell’s circumplex model organizes affect around these two
            dimensions. A 2005 review by Posner, Russell, and Peterson explains the framework and
            research behind it. It is an influential way to summarize affect, not the only theory of
            emotion or a claim that two numbers explain a person.
          </p>
          <a
            href={circumplexSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the review: The circumplex model of affect (2005)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: “Does it feel pleasant?” and “How activated am I?” are different questions.
          </p>
        </section>

        <section aria-labelledby="section-four-combinations">
          <h2
            id="section-four-combinations"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            Four combinations, not four boxes you have to fit
          </h2>
          <p className="mb-5">
            These examples illustrate the axes. They are not fixed coordinates for everyone: sadness
            can feel restless, excitement can feel gentle, and the same emotion can shift as a
            situation unfolds.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/15">
            <table className="w-full text-left text-sm leading-relaxed">
              <caption className="text-left p-4 bg-primary/[0.04] text-text-primary font-semibold">
                Examples of valence and arousal in everyday feelings
              </caption>
              <thead className="border-y border-primary/15 bg-primary/[0.04] text-text-primary">
                <tr>
                  <th scope="col" className="p-3 sm:p-4">
                    Valence
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Activation
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Possible experience
                  </th>
                </tr>
              </thead>
              <tbody>
                {examples.map(({ valence, activation, example, note }) => (
                  <tr
                    key={`${valence}-${activation}`}
                    className="border-b border-primary/10 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="p-3 sm:p-4 font-semibold text-text-primary align-top"
                    >
                      {valence}
                    </th>
                    <td className="p-3 sm:p-4 align-top">{activation}</td>
                    <td className="p-3 sm:p-4 align-top">
                      <span className="font-medium text-text-primary">{example}.</span>
                      <span className="block mt-1">{note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5">
            The useful contrast is not “calm people feel good; activated people feel bad.” A quiet
            afternoon can be satisfying or lonely. A racing sense of anticipation can be welcome or
            uncomfortable. Activation alone leaves the pleasantness question unanswered.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: similar energy does not mean similar feelings.
          </p>
        </section>

        <section aria-labelledby="section-intensity">
          <h2
            id="section-intensity"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            Is arousal the same as emotional intensity?
          </h2>
          <p className="mb-4">
            Not exactly. Arousal asks about activation. In an everyday check-in, intensity asks how
            strongly you feel something. You can feel sadness deeply without feeling wired, or
            notice a small flicker of excitement without it becoming an overwhelming experience.
          </p>
          <p className="mb-4">
            There is a language trap here: researchers and apps do not always use “intensity” in the
            same way. Some scales use it in relation to arousal; others ask about the strength of a
            particular emotion. Check the label and instructions rather than assuming every high
            number answers the same question.
          </p>
          <p>
            For reflection, keep three prompts separate: “How pleasant is this?”, “How activated am
            I?”, and “How strongly do I feel this particular emotion?” You do not need to give them
            percentages. “Unpleasant, low-energy, and strongly felt” is already a useful
            description.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: a quiet feeling can still matter a great deal.
          </p>
        </section>

        <section aria-labelledby="section-map-limits">
          <h2
            id="section-map-limits"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What a two-axis emotion map cannot tell you
          </h2>
          <p className="mb-4">
            A location is not an explanation. Anger and apprehension can both feel unpleasant and
            activated, but one may relate to a crossed boundary and the other to uncertainty. The
            axes do not identify the cause, decide what you need, or tell you whether your
            interpretation of an event is accurate.
          </p>
          <p className="mb-4">
            They can also compress mixed feelings. You might be proud of a new opportunity and sad
            about leaving friends. A middle pleasant–unpleasant rating does not necessarily mean you
            feel neutral; it may leave out the two experiences you are trying to hold together.
          </p>
          <p>
            A 2015 meta-analysis by Berrios, Totterdell, and Kellett examined 63 experiments on
            eliciting mixed emotions. Its findings support studying co-occurring feelings across
            different models and measures—not assuming that one rating captures every layer, or that
            an app provides a health benefit.
          </p>
          <a
            href={mixedEmotionsSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the research: Eliciting mixed emotions (2015)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: use the map to begin a description, not to replace it.
          </p>
        </section>

        <section aria-labelledby="section-check-in">
          <h2
            id="section-check-in"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            A check-in for when the emotion word will not come
          </h2>
          <p className="mb-4">
            Try this when you have room to reflect. Write it, speak it, or just consider it. The
            exercise is a reflection suggestion, not a validated treatment, and there is no need to
            force an answer.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-text-primary font-semibold">Notice pleasantness.</strong> Does
              this feel pleasant, unpleasant, mixed, or unclear?
            </li>
            <li>
              <strong className="text-text-primary font-semibold">Notice activation.</strong> Do I
              feel settled, slowed down, alert, restless, or braced? Describe it in your own words.
            </li>
            <li>
              <strong className="text-text-primary font-semibold">Add the situation.</strong> What
              happened before this? Keep the event separate from what you assume it means.
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Try a tentative label and next step.
              </strong>{" "}
              What word might fit? Would rest, information, a boundary, or a conversation help?
            </li>
          </ol>
          <div className="mt-5 bg-primary/[0.04] border border-primary/15 rounded-2xl p-5">
            <p className="text-base">
              “Unpleasant and activated after the meeting. Possibly apprehensive, because the next
              step was unclear. I can ask one clarifying question tomorrow.”
            </p>
          </div>
          <p className="mt-5">
            That entry does not prove what caused the feeling. It gives the experience some edges.
            If words remain difficult, the{" "}
            <Link
              to="/resources/alexithymia-emotional-vocabulary"
              className="text-primary font-semibold hover:underline"
            >
              guide to difficulty identifying emotions
            </Link>{" "}
            offers gentler starting points; the{" "}
            <Link
              to="/resources/emotional-awareness-patterns"
              className="text-primary font-semibold hover:underline"
            >
              emotional-awareness guide
            </Link>{" "}
            adds a reusable context-and-feeling template.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: “not sure yet” belongs in a check-in too.
          </p>
        </section>

        <section aria-labelledby="section-vocolens">
          <h2
            id="section-vocolens"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            How to read these dimensions in Vocolens
          </h2>
          <p className="mb-4">
            Vocolens uses “Unpleasant ↔ Pleasant” and “Calm ↔ Activated” in its emotion views. Treat
            the first as a pleasantness question and the second as an activation question. The
            “Calm” end does not establish that you feel content, safe, or well; your words provide
            that context.
          </p>
          <p className="mb-4">
            Review the suggested emotion labels and use “Adjust how it felt” if the dimensions do
            not match your experience. The suggestions come from analysis of your journal
            transcript—not direct measurement of your nervous system. You can describe a mixture or
            an uncertainty in the entry even when a score cannot express it fully.
          </p>
          <AppFigure
            label="The Adjust how it felt step in Vocolens, showing an Unpleasant to Pleasant dial reading minus 18 and a Calm to Activated dial reading 22 percent."
            caption="“Adjust how it felt” is the only valence and arousal control in Vocolens. This example is unpleasant but calm — the combination that looks calm but does not feel good."
          >
            <AdjustHowItFeltFigure
              title="Adjust how it felt"
              dials={[
                {
                  label: "Unpleasant ↔ Pleasant",
                  minLabel: "Unpleasant",
                  maxLabel: "Pleasant",
                  knobPct: 41,
                  valueNum: -18,
                  value: "-18",
                  bipolar: true,
                },
                {
                  label: "Calm ↔ Activated",
                  minLabel: "Calm",
                  maxLabel: "Activated",
                  knobPct: 22,
                  valueNum: 22,
                  value: "22%",
                  bipolar: false,
                },
              ]}
            />
          </AppFigure>
          <p className="mb-4">
            The purpose is not to push every entry toward pleasant and calm. Excitement can be
            welcome; disappointment can point to something important. A paper journal can hold the
            same observations. Vocolens offers a voice-first way to record and review them, not
            proof of greater emotional accuracy or a clinical benefit.
          </p>
          <p className="text-sm text-text-muted">
            This article is educational, not diagnostic or medical advice. Stop if focusing inward
            makes distress worse. Persistent or severe difficulties deserve qualified support; a
            journal does not replace assessment or care.
          </p>
        </section>

        <section
          aria-labelledby="section-faq"
          data-listen-exclude
          className="border-t border-primary/10 pt-6"
        >
          <div className="flex items-start gap-3 mb-6">
            <Question className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
              Frequently asked questions about valence and arousal
            </h2>
          </div>
          <div className="space-y-3">
            {faqData.map(({ question, answer }) => (
              <details
                key={question}
                className="group bg-primary/[0.04] border border-primary/15 rounded-2xl p-5"
              >
                <summary className="cursor-pointer font-semibold text-text-primary text-base focus-visible:outline-primary">
                  {question}
                </summary>
                <div className="mt-3 text-base text-text-secondary leading-relaxed">{answer}</div>
              </details>
            ))}
          </div>
        </section>

        <div data-listen-exclude className="border-t border-primary/10 pt-6">
          <h2 className="font-bold text-text-primary mb-6 text-lg">Explore related articles</h2>
          <div className="space-y-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.to}
                to={article.to}
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-bold text-text-primary group-hover:underline mb-2 text-lg">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div data-listen-exclude className="card-app rounded-3xl p-6 sm:p-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Start with how it feels
          </h2>
          <p className="text-text-secondary mb-5 text-base leading-relaxed">
            Speak a reflection, review the suggestions, and keep the description that fits. Your
            experience is more than a point on a map.
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
    </article>
  );
}
