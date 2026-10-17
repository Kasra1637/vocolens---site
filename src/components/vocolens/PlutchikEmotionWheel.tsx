import { ArrowUpRight, CaretRight, Clock, Compass, Question } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { BackToTop } from "./BackToTop";
import { ListenToArticle } from "./ListenToArticle";

const title = "Plutchik’s emotion wheel: why “annoyed” and “furious” belong on the same ladder";
const description =
  "Plutchik’s emotion wheel groups feelings into eight families and three intensity steps. Learn when a wheel helps or overwhelms and how to check in.";
const url = "https://vocolens.com/resources/plutchik-emotion-wheel";
const date = "2026-10-15";
const modifiedDate = "2026-10-17";
const imageUrl = "https://vocolens.com/og/plutchik-emotion-wheel.png";
const plutchikSource =
  "https://www.emotionalcompetency.com/papers/plutchiknatureofemotions%202001.pdf";
const mixedEmotionsSource = "https://pmc.ncbi.nlm.nih.gov/articles/PMC4397957/";
const circumplexSource = "https://pmc.ncbi.nlm.nih.gov/articles/PMC2367156/";
const differentiationSource = "https://journals.sagepub.com/doi/10.1177/0963721414550708";

const faqData = [
  {
    question: "What are the 8 basic emotions on Plutchik’s wheel?",
    answer:
      "Plutchik’s model groups emotions into eight primary families arranged as four pairs of opposites: joy (happiness) opposite sadness, trust opposite disgust, fear opposite anger, and surprise opposite anticipation. Each family spans from a milder everyday form to a high-intensity form.",
  },
  {
    question: "How do you read Plutchik’s emotion wheel without getting overwhelmed?",
    answer:
      "Instead of reading every word on the chart at once, use it in two steps. First, pick one or two of the eight broad families that roughly match the situation. Second, move inward or outward on just that spoke to decide whether the feeling is mild, moderate, or strong.",
  },
  {
    question: "What is the difference between Plutchik’s emotion wheel and valence and arousal?",
    answer:
      "Plutchik’s wheel organizes discrete emotion families and their intensity ladders (such as uneasy, anxious, and terrified). Valence and arousal (the circumplex model) plot how pleasant or unpleasant and how calm or activated you feel on two continuous axes. Using both together helps because two emotions on the wheel can share high activation while feeling very different in context.",
  },
  {
    question: "Can you feel two emotions from different parts of the wheel at the same time?",
    answer:
      "Yes. Plutchik described combinations of primary emotions as dyads (for example, joy and anticipation blending into optimism), and experimental research on mixed emotions shows that people can also feel pleasant and unpleasant emotions—such as pride and sadness during a life transition—at the same time.",
  },
  {
    question: "Are Plutchik’s 8 basic emotions scientifically proven as hardwired brain circuits?",
    answer:
      "No. Plutchik’s psychoevolutionary wheel is an influential theoretical classification, not a settled map of eight separate brain circuits. Many contemporary emotion researchers use dimensional or constructionist models alongside or instead of basic-emotion categories. The wheel is best used as a practical vocabulary aid rather than a biological verdict.",
  },
  {
    question: "How does Vocolens use Plutchik’s emotion model?",
    answer:
      "When you record a voice entry, Vocolens analyzes your transcript across the eight Plutchik emotion families, ranks the top matches with a PRIMARY badge, and maps intensity along three-step ladders (such as Wistful, Sad, and Grief). You can review, confirm, or correct any suggested label and intensity in Refine Analysis.",
  },
];

const ladders = [
  {
    family: "Happiness (Joy)",
    lower: "Content (serenity)",
    moderate: "Joyful (joy)",
    higher: "Elated (ecstasy)",
    clue: "A sense of ease, warmth, or wanting the moment to continue.",
  },
  {
    family: "Trust",
    lower: "Accepting (acceptance)",
    moderate: "Trusting (trust)",
    higher: "Devoted (admiration)",
    clue: "Feeling safe enough to lower your guard or rely on someone.",
  },
  {
    family: "Fear",
    lower: "Uneasy (apprehension)",
    moderate: "Anxious (fear)",
    higher: "Terrified (terror)",
    clue: "Bracing for something uncertain or wanting to protect yourself.",
  },
  {
    family: "Surprise",
    lower: "Curious (distraction)",
    moderate: "Surprised (surprise)",
    higher: "Astonished (amazement)",
    clue: "A sudden pause or shift in attention when expectations break.",
  },
  {
    family: "Sadness",
    lower: "Wistful (pensiveness)",
    moderate: "Sad (sadness)",
    higher: "Grief (grief)",
    clue: "Heaviness, quiet withdrawal, or noticing what is missing.",
  },
  {
    family: "Disgust",
    lower: "Dislike (boredom)",
    moderate: "Disgusted (disgust)",
    higher: "Repulsed (loathing)",
    clue: "An urge to pull back from something unpleasant or that grates on your values.",
  },
  {
    family: "Anger",
    lower: "Annoyed (annoyance)",
    moderate: "Frustrated (anger)",
    higher: "Furious (rage)",
    clue: "Friction against a blocked goal, interruption, or crossed boundary.",
  },
  {
    family: "Anticipation",
    lower: "Interested (interest)",
    moderate: "Anticipating (anticipation)",
    higher: "Vigilant (vigilance)",
    clue: "Leaning forward into what comes next—either with curiosity or on high alert.",
  },
];

const relatedArticles = [
  {
    to: "/resources/valence-and-arousal" as const,
    title: "Valence and Arousal: Why Calm Isn’t Always Happy",
    description:
      "Separate pleasantness from activation when an emotion word does not quite fit, and see how a two-axis map complements emotion families.",
  },
  {
    to: "/resources/emotional-granularity" as const,
    title: "Emotional Granularity: Why Specific Words Change What You Feel",
    description:
      "Learn why distinguishing between broad labels and specific rungs on an emotion ladder gives you a clearer handle on what to do next.",
  },
  {
    to: "/resources/mixed-emotions" as const,
    title: "Mixed Emotions: Why You Can Feel Happy and Sad at Once",
    description:
      "Explore what happens when two emotion families show up in the same moment and how to reflect without forcing a single winner.",
  },
  {
    to: "/resources/alexithymia-emotional-vocabulary" as const,
    title: "Alexithymia: Difficulty Identifying Emotions and Where to Start",
    description: "Practical starting points when emotion wheels and word lists feel inaccessible.",
  },
];

export function PlutchikEmotionWheel() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: imageUrl,
    datePublished: date,
    dateModified: modifiedDate,
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
      "Plutchik's emotion wheel, Plutchik wheel of emotions, 8 basic emotions Plutchik, emotional intensity ladder, how to use an emotion wheel, emotion families, primary and blended emotions, voice journaling",
    about: [
      {
        "@type": "Thing",
        name: "Plutchik's wheel of emotions",
        description:
          "A psychoevolutionary classification organizing eight primary emotion families by similarity, opposition, and intensity.",
      },
      {
        "@type": "Thing",
        name: "Emotional intensity",
        description: "Gradations of an emotion family from mild to moderate to strong.",
      },
      {
        "@type": "Thing",
        name: "Emotional granularity",
        description: "The ability to distinguish between fine-grained emotional states.",
      },
    ],
    citation: [plutchikSource, mixedEmotionsSource, circumplexSource, differentiationSource],
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
        { "@type": "ListItem", position: 3, name: "Plutchik’s Emotion Wheel", item: url },
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
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          <li>
            <Link to="/resources" className="text-primary font-semibold hover:underline">
              Resources
            </Link>
          </li>
          <li aria-hidden="true">
            <CaretRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-text-primary font-medium">
            Plutchik’s Emotion Wheel
          </li>
        </ol>
      </nav>

      <header className="mb-12 lg:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay"
            aria-hidden="true"
          >
            <Compass className="w-5 h-5 text-[#6A3FC0]" />
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
            <span>7 min read</span>
            <span aria-hidden="true" className="mx-1">
              ·
            </span>
            <time dateTime={date} itemProp="datePublished">
              Oct 15, 2026
            </time>
            <span className="ml-2">
              Updated{" "}
              <time dateTime={modifiedDate} itemProp="dateModified">
                Oct 17, 2026
              </time>
            </span>
          </span>
        </div>
      </header>

      <ListenToArticle slug="plutchik-emotion-wheel" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-3">
          Key takeaways
        </p>
        <ul className="list-disc pl-5 space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>
            <strong className="text-text-primary font-semibold">
              Plutchik’s wheel is a map of families and degrees, not a test with one right word.
            </strong>{" "}
            It organizes eight primary emotion families from milder to stronger forms so you can
            narrow down a feeling in two steps instead of scanning a hundred labels at once.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              Stepping down an intensity ladder often makes a word easier to accept.
            </strong>{" "}
            People frequently reject a label like angry or afraid because the word sounds too
            extreme, when a gentler step on the same ladder—annoyed or uneasy—fits what is actually
            happening.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              An emotion wheel is a practical organizing model, not a literal diagram of the brain.
            </strong>{" "}
            When word lists feel overwhelming, starting with pleasantness, energy, or a plain
            description of the situation works just as well.
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
              Most people first meet an emotion wheel as a densely packed circle of seventy or
              eighty words and a well-meaning instruction to “pick what you feel.” When you are
              already tired, overstimulated, or unsure what is going on inside, staring at a
              color-coded wall of vocabulary rarely brings relief. It feels like a pop quiz you did
              not study for.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Suppose a meeting runs twenty minutes past the hour and derails your afternoon plan.
              If someone asks whether you are angry, you might say no—angry sounds like slamming a
              door or wanting a fight, and you are just sitting at your desk staring at your
              calendar. Because the big word feels too dramatic, it is easy to brush the whole
              reaction aside as “nothing, just tired.” Yet if you look at the smaller steps in the
              same family, annoyed or frustrated might land right away.
            </p>
            <p className="mt-4">
              The{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                emotional granularity guide
              </Link>{" "}
              explores why specific words give you a clearer handle on an experience than broad
              ones, and the{" "}
              <Link
                to="/resources/valence-and-arousal"
                className="text-primary font-semibold hover:underline"
              >
                valence and arousal guide
              </Link>{" "}
              shows how to locate a feeling by pleasantness and energy when words will not come at
              all. This guide looks at the bridge between the two: how psychologist Robert
              Plutchik’s emotion model groups feelings into eight families and three intensity
              steps, where that structure helps in everyday reflection, and where its limits are.
            </p>
          </section>
        </div>

        <section aria-labelledby="section-what-is-plutchik">
          <h2
            id="section-what-is-plutchik"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What is Plutchik’s emotion wheel?
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary font-semibold">
              Plutchik’s emotion wheel is a psychological model that organizes emotions into eight
              primary families, arranged by how closely they relate, what sits opposite them, and
              how intense they feel.
            </strong>{" "}
            Instead of treating every emotion word as a separate island, it treats most words as
            either a milder or stronger degree of a core family, or a blend of two neighbors.
          </p>
          <p className="mb-4">
            Psychologist Robert Plutchik developed this framework as part of his psychoevolutionary
            theory of emotion, first formalized in 1980 and summarized for a broader scientific
            audience in his 2001 American Scientist paper, “The Nature of Emotions.” Plutchik
            proposed that emotions evolved as adaptive responses that help organisms respond to
            recurring life situations—such as threat, loss, bonding, territorial boundaries, or
            unexpected change.
          </p>
          <p className="mb-4">
            In Plutchik’s three-dimensional cone (which flattens into the familiar wheel), three
            rules do the organizing: eight primary families (joy or happiness, trust, fear,
            surprise, sadness, disgust, anger, and anticipation); opposites across the circle (joy
            opposite sadness, trust opposite disgust, fear opposite anger, and surprise opposite
            anticipation); and intensity from the outer edge to the center. The outer ring holds
            quieter, everyday versions of a feeling; the middle ring holds the familiar family name;
            the center ring holds the most concentrated form.
          </p>
          <p>
            Evolutionary models like Plutchik’s offer a structured way to think about how basic
            affective states relate to behavior, while ongoing research continues to debate how
            emotions are organized in the nervous system. That distinction matters: the wheel is a
            useful map for reflection, not a claim that your brain contains eight color-coded
            compartments.
          </p>
          <a
            href={plutchikSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the paper: The nature of emotions (Plutchik, 2001, PDF)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: instead of asking “Which of these eighty words am I?”, Plutchik’s wheel lets
            you ask two smaller questions: “Which neighborhood am I in?” and “How strong is it?”
          </p>
        </section>

        <section aria-labelledby="section-eight-families">
          <h2
            id="section-eight-families"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            The eight emotion families and their intensity ladders
          </h2>
          <p className="mb-5">
            One reason people get stuck when naming feelings is that everyday conversation defaults
            to the middle or top of the ladder. We ask “Are you sad?” or “Why are you angry?” When
            the feeling is still small, those words sound like an exaggeration, so we say “I’m
            fine.” Looking at each family as a three-step ladder makes the quieter forms visible
            before they build. The table below shows the eight families using everyday intensity
            ladders alongside Plutchik’s classical terms in parentheses.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/15">
            <table className="w-full text-left text-sm leading-relaxed">
              <caption className="text-left p-4 bg-primary/[0.04] text-text-primary font-semibold">
                Plutchik’s eight emotion families and three-step intensity ladders
              </caption>
              <thead className="border-y border-primary/15 bg-primary/[0.04] text-text-primary">
                <tr>
                  <th scope="col" className="p-3 sm:p-4">
                    Emotion family
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Intensity ladder (low → moderate → high)
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Everyday clue it may be present
                  </th>
                </tr>
              </thead>
              <tbody>
                {ladders.map(({ family, lower, moderate, higher, clue }) => (
                  <tr key={family} className="border-b border-primary/10 last:border-b-0">
                    <th
                      scope="row"
                      className="p-3 sm:p-4 font-semibold text-text-primary align-top"
                    >
                      {family}
                    </th>
                    <td className="p-3 sm:p-4 align-top">
                      <span className="font-medium text-text-primary">
                        {lower} → {moderate} → {higher}
                      </span>
                    </td>
                    <td className="p-3 sm:p-4 align-top">{clue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5">
            Notice what happens on the Fear and Anticipation rows. Being uneasy before a performance
            review belongs to the same family as fear, even if your heart is not racing. Being
            vigilant—scanning emails late at night to make sure nothing went wrong—is the high end
            of anticipation. Naming the lower rung early does not make a small feeling dramatic; it
            keeps you from ignoring it until it climbs the ladder.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: if a big emotion word feels too heavy to be true, try stepping one rung down
            the same ladder before deciding you feel nothing.
          </p>
        </section>

        <section aria-labelledby="section-blends">
          <h2 id="section-blends" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
            Primary families, blends, and why two feelings can show up together
          </h2>
          <p className="mb-4">
            Real life rarely hands you one clean petal of the wheel at a time. Plutchik accounted
            for this by describing dyads—blended emotions that form when two primary families are
            active together, much like mixing primary colors.
          </p>
          <p className="mb-4">
            For example, when anticipation and joy combine, the blend often feels like optimism or
            hopefulness. When fear and surprise collide, it can feel like alarm. When joy and trust
            meet, it can feel like affection. You can also experience feelings from non-adjacent
            parts of the wheel at the same time—such as feeling proud of finishing a project (joy
            family) and wistful that a shared chapter is ending (sadness family).
          </p>
          <p>
            A 2015 meta-analysis by Berrios, Totterdell, and Kellett across 63 experimental studies
            confirmed that co-occurring emotions—including pleasant and unpleasant ones—can be
            reliably elicited and measured. When a check-in forces you to pick a single winner from
            the wheel, you lose the tension between the two feelings, which is often the most
            informative part of the entry. Our{" "}
            <Link
              to="/resources/mixed-emotions"
              className="text-primary font-semibold hover:underline"
            >
              mixed emotions guide
            </Link>{" "}
            walks through how to hold two co-occurring feelings in one reflection without flattening
            them.
          </p>
          <a
            href={mixedEmotionsSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the research: Eliciting mixed emotions (Berrios et al., 2015)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: picking one family on the wheel does not ban the others; a single situation
            can light up two ladders at once.
          </p>
        </section>

        <section aria-labelledby="section-wheel-limits">
          <h2
            id="section-wheel-limits"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What an emotion wheel leaves out (and when it feels like too much)
          </h2>
          <p className="mb-4">
            Because Plutchik’s wheel is visual and tidy, it is often treated in classrooms and
            worksheets as the definitive periodic table of human feeling. Scientifically and
            practically, it has real boundaries worth keeping in mind.
          </p>
          <p className="mb-4">
            First, emotions are not universally agreed to be fixed building blocks. While Plutchik
            proposed eight evolutionary primaries, dimensional researchers such as Posner, Russell,
            and Peterson (2005) model affect along continuous axes of pleasantness (valence) and
            activation (arousal), and constructionist researchers such as Kashdan, Barrett, and
            McKnight (2015) emphasize how people differentiate experiences using situation-specific
            concepts rather than firing eight hardwired circuits.
          </p>
          <p className="mb-4">
            Second, intensity on a wheel is not the same as physical energy. Moving toward the
            center of Plutchik’s wheel means a stronger degree of that emotion. Yet grief sits at
            the high end of the sadness ladder—deeply intense—while often leaving your body feeling
            heavy, slowed down, and low in activation.
          </p>
          <p>
            Third, word wheels can overload neurodivergent and alexithymic readers. If you
            experience alexithymia, ADHD, or sensory fatigue, scanning dozens of similar adjectives
            can trigger decision paralysis rather than clarity. Choosing a word just to finish a
            worksheet is compliance, not self-awareness.
          </p>
          <div className="flex flex-col items-start gap-2 mt-4">
            <a
              href={circumplexSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-primary font-semibold hover:underline"
            >
              Read the review: The circumplex model of affect (Posner, Russell, &amp; Peterson,
              2005)
              <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
            </a>
            <a
              href={differentiationSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-primary font-semibold hover:underline"
            >
              Read the review: Unpacking emotion differentiation (Kashdan, Barrett, &amp; McKnight,
              2015)
              <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: if the wheel narrows your options, use it; if it feels like a wall of text,
            close the wheel and start with your own plain words.
          </p>
        </section>

        <section aria-labelledby="section-check-in">
          <h2
            id="section-check-in"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            A two-step ladder check-in (without memorizing the wheel)
          </h2>
          <p className="mb-4">
            You do not need a printed chart to use Plutchik’s structure in a daily check-in. When
            you have a quiet minute, try narrowing the feeling in four short steps. This is a
            reflection exercise, not a clinical assessment, and you can stop or skip any step that
            feels unhelpful.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-text-primary font-semibold">
                Describe what happened in one plain sentence.
              </strong>{" "}
              Stick to the observable event before hunting for an emotion word.
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Pick one or two broad neighborhoods from the eight families.
              </strong>{" "}
              Ask whether this is closer to annoyance/anger, uneasiness/fear, heaviness/sadness,
              pulling back/disgust, leaning forward/anticipation, surprise, trust, or happiness.
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Step up or down the intensity ladder.
              </strong>{" "}
              Once you have a family, ask whether the feeling is on the quiet outer rung (annoyed,
              uneasy, wistful, interested), the middle rung (frustrated, anxious, sad,
              anticipating), or the strong inner rung (furious, terrified, grief, vigilant).
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Pair the rung with one small next step.
              </strong>{" "}
              A milder rung often points to a small adjustment before the load builds.
            </li>
          </ol>
          <div className="mt-5 bg-primary/[0.04] border border-primary/15 rounded-2xl p-5">
            <p className="text-base">
              “After the schedule changed at 4 p.m., I felt annoyed (anger family, lower rung) and
              uneasy (fear family, lower rung) because I do not know which deadline moves first. I
              can message the team lead in the morning to confirm the priority.”
            </p>
          </div>
          <p className="mt-5">
            Notice how different that reads from “I’m stressed” or “I’m fine.” Naming annoyed and
            uneasy captures the boundary friction and the uncertainty while they are still
            manageable. If even choosing one of the eight families feels out of reach today, our{" "}
            <Link
              to="/resources/alexithymia-emotional-vocabulary"
              className="text-primary font-semibold hover:underline"
            >
              alexithymia and emotional vocabulary guide
            </Link>{" "}
            shows how to start with body sensations and context first, and the{" "}
            <Link
              to="/resources/science-of-reflection"
              className="text-primary font-semibold hover:underline"
            >
              affect labeling guide
            </Link>{" "}
            explains how tentative labels work without forcing certainty.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: family first, rung second, context third—three small choices beat hunting
            through a hundred words.
          </p>
        </section>

        <section aria-labelledby="section-vocolens">
          <h2
            id="section-vocolens"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            How to read Plutchik intensity in Vocolens
          </h2>
          <p className="mb-4">
            Instead of asking you to spin a color wheel before you can record an entry, Vocolens
            turns the sequence around: you speak freely about your day in your own words, and the
            app scores the eight Plutchik emotion families from your transcript.
          </p>
          <p className="mb-4">
            In your entry’s Emotion Breakdown, Vocolens ranks the top detected emotions under “Top
            Emotions — Plutchik Intensity” (marking the leading family with a PRIMARY badge) and
            maps each family along its three-step intensity ladder—for example, Interested,
            Anticipating, and Vigilant, or Content, Joyful, and Elated. If you want a quick reminder
            of what a family means while reflecting, you can long-press any of the eight emotions in
            the app to read its plain-language definition and example.
          </p>
          <p className="mb-4">
            Those scores are candidates generated from your words, not a direct readout of your
            nervous system or proof of what you truly feel. If the AI suggests Sadness when Grief or
            Wistful is closer—or if it misses the mark entirely—you can open Refine Analysis, choose
            the emotion label that fits, tag why (Wrong label, Wrong intensity, or Context), and
            adjust the Unpleasant ↔ Pleasant and Calm ↔ Activated dials. Your correction is saved
            alongside the AI’s original reading, and once a pattern reaches at least three
            corrections across two distinct weeks (with recent corrections weighted more heavily),
            future suggestions lean toward the distinctions you actually use.
          </p>
          <p className="text-sm text-text-muted">
            You can do the same family-and-ladder check-in on paper.
          </p>
          <div className="my-4 bg-primary/[0.04] border border-primary/15 rounded-2xl p-5">
            <p className="text-sm sm:text-base font-semibold text-text-primary leading-relaxed">
              Or skip the manual steps entirely — Vocolens detects all eight emotion families from
              your voice in seconds.
            </p>
          </div>
          <p className="text-sm text-text-muted">
            Vocolens offers a voice-first way to record and review candidate labels, not a clinical
            assessment or guaranteed emotional outcome. This article is educational, not diagnostic
            or medical advice. Stop if focusing inward makes distress worse; persistent or severe
            difficulties deserve qualified support.
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
              Frequently asked questions about Plutchik’s emotion wheel
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
            Find the emotion that fits
          </h2>
          <p className="text-text-secondary mb-5 text-base leading-relaxed">
            Speak a reflection, review the eight emotion families, and track them over time.
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
