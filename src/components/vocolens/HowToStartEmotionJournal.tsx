import {
  ArrowUpRight,
  CaretRight,
  Clock,
  Microphone,
  Question,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from "@/lib/app-links";
import { BackToTop } from "./BackToTop";
import { ListenToArticle } from "./ListenToArticle";
import { AppFigure } from "./figures/AppFigure";
import { RecordingIdleFigure } from "./figures/RecordingIdleFigure";

const title = "How to Start an Emotion Journal: When Your Mind Goes Blank";
const description =
  "Learn how to start an emotion journal without blank-page pressure: what to record, how often to check in, and where to begin when no emotion word comes.";
const url = "https://vocolens.com/resources/how-to-start-emotion-journal";
const date = "2026-10-20";
const liebermanSource = "https://pubmed.ncbi.nlm.nih.gov/17576282/";
const frattaroliSource = "https://pubmed.ncbi.nlm.nih.gov/17073523/";
const lallySource = "https://doi.org/10.1002/ejsp.674";

const faqData = [
  {
    question: "What is the difference between an emotion journal and a regular diary?",
    answer:
      "A regular diary usually records events and thoughts across a whole day. An emotion journal focuses on specific moments: what happened, how it felt in your energy or body, and which emotion words come closest. Entries can be as short as one or two sentences.",
  },
  {
    question: "How long should an emotion journal entry take?",
    answer:
      "A check-in only needs 30 to 90 seconds. Four brief lines—the situation, your energy and pleasantness, one or two tentative emotion words, and a practical next step—give you enough detail to spot patterns later without turning reflection into a chore.",
  },
  {
    question: "What should I write when I do not know what I am feeling?",
    answer:
      "Skip the emotion label at first. Record what you were doing, whether the moment feels pleasant, unpleasant, or flat, and one physical or energy clue (such as tense shoulders, restlessness, or heavy fatigue). You can add “not sure which emotion word fits yet” and return later.",
  },
  {
    question: "Is it better to write or speak an emotion journal?",
    answer:
      "Neither format is universally better for everyone. Writing can feel quieter and easier to edit; speaking out loud in a voice journal removes blank-page friction and typing fatigue. Both approaches rely on putting experience into words, so the best method is the one you will comfortably use.",
  },
  {
    question: "What if journaling makes me overthink more?",
    answer:
      "Set a short time or length boundary and end every check-in with one concrete external step—such as taking a break, asking a clarifying question, or setting the topic aside until tomorrow. If reviewing a situation repeatedly increases distress without adding clarity, stop the entry and shift your attention to a grounding activity or qualified support.",
  },
];

const startingPoints = [
  {
    entryPoint: "The situation",
    prompt: "What just happened, in plain facts?",
    example: "Finished the budget call; my manager changed the deadline without asking.",
  },
  {
    entryPoint: "Body or energy",
    prompt: "How activated, tired, or tense do I feel?",
    example: "Shoulders tight, talking fast, restless energy in my chest.",
  },
  {
    entryPoint: "Pleasantness",
    prompt: "Does this feel pleasant, unpleasant, mixed, or flat?",
    example: "Unpleasant and stirred up—definitely not settled, even though the room is quiet.",
  },
  {
    entryPoint: "Tentative label",
    prompt: "What word comes close, even if it is rough?",
    example: "Maybe frustrated or sidelined. Not sure which part matters more yet.",
  },
];

const relatedArticles = [
  {
    to: "/resources/science-of-reflection" as const,
    title: "Affect Labeling: How to Name Your Emotions",
    description:
      "Explore what putting a feeling into words can—and cannot—tell you when you check in.",
  },
  {
    to: "/resources/emotional-awareness-patterns" as const,
    title: "Emotional Awareness: What It Is & How to Improve It",
    description:
      "Use a simple context-and-feeling template to notice recurring triggers across entries.",
  },
  {
    to: "/resources/valence-and-arousal" as const,
    title: "Valence & Arousal: Why Calm Isn’t Always Happy",
    description:
      "Start with pleasantness and activation when a specific emotion word will not come.",
  },
  {
    to: "/resources/alexithymia-emotional-vocabulary" as const,
    title: "Alexithymia: Difficulty Identifying Emotions & Where to Start",
    description:
      "Gentle, sensation-first ways to reflect when feelings are hard to identify or describe.",
  },
];

export function HowToStartEmotionJournal() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: "https://vocolens.com/og/how-to-start-emotion-journal.png",
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
    articleSection: "Mental Wellness & Self-Discovery",
    keywords:
      "how to start an emotion journal, emotion journal for beginners, what to write in an emotion journal, emotion check-in, voice journaling, affect labeling, emotional awareness, emotional granularity",
    about: [
      {
        "@type": "Thing",
        name: "Emotion journaling",
        description:
          "Recording brief observations of feelings, context, and physical or energy cues to support self-reflection.",
      },
      {
        "@type": "Thing",
        name: "Affect labeling",
        description: "Putting an emotional experience into words.",
      },
      {
        "@type": "Thing",
        name: "Habit formation",
        description: "Building a repeatable behavioral routine tied to everyday situational cues.",
      },
    ],
    citation: [liebermanSource, frattaroliSource, lallySource],
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
        { "@type": "ListItem", position: 3, name: "How to Start an Emotion Journal", item: url },
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
              How to Start an Emotion Journal
            </span>
            <meta
              itemProp="item"
              content="https://vocolens.com/resources/how-to-start-emotion-journal"
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
            <Microphone className="w-5 h-5 text-[#6A3FC0]" />
          </div>
          <span
            className="inline-flex px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full"
            itemProp="articleSection"
          >
            Mental Wellness &amp; Self-Discovery
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
              Oct 20, 2026
            </time>
          </span>
        </div>
      </header>

      <ListenToArticle slug="how-to-start-emotion-journal" />

      <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
        <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-3">
          Key takeaways
        </p>
        <ul className="list-disc pl-5 space-y-3 text-sm text-text-secondary leading-relaxed">
          <li>
            <strong className="text-text-primary font-semibold">
              An emotion journal is a brief check-in, not a full diary.
            </strong>{" "}
            One sentence connecting what happened, how it felt in your energy or body, and a
            tentative emotion word is enough.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              You do not need the right emotion word before you start.
            </strong>{" "}
            When your mind goes blank, noticing whether the moment feels pleasant or unpleasant—or
            settled or restless—gives you a working entry.
          </li>
          <li>
            <strong className="text-text-primary font-semibold">
              Short and repeatable beats long and exhausting.
            </strong>{" "}
            A 60-second spoken or written note that ends with one practical need is easier to
            sustain than multi-page venting, and missing a day does not erase what you have already
            noticed.
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
              Most advice on how to start an emotion journal assumes you already know what you feel
              and have twenty quiet minutes to write about it. In practice, you open a fresh
              notebook or notes app at the end of a long day, stare at the cursor, and find either
              nothing at all or five competing thoughts you do not have the energy to untangle.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Suppose it is 9 p.m. on a Tuesday. You know the afternoon left you snappy and worn
              out, so you sit down to “process your feelings.” Two minutes later you have written a
              date at the top of the page, crossed out a sentence that sounded dramatic, and closed
              the notebook. Nothing was wrong with your motivation; the format asked for an essay
              when all you needed was a snapshot.
            </p>
            <p className="mt-4">
              Our{" "}
              <Link
                to="/resources/emotional-awareness-patterns"
                className="text-primary font-semibold hover:underline"
              >
                emotional-awareness guide
              </Link>{" "}
              looks at how recurring triggers and patterns show up across many entries, and the{" "}
              <Link
                to="/resources/emotional-granularity"
                className="text-primary font-semibold hover:underline"
              >
                emotional-granularity guide
              </Link>{" "}
              explores how specific emotion words differ from broad ones. This guide starts earlier:
              what actually goes into your first few check-ins, how short they are allowed to be,
              and how to begin when no emotion word comes to mind.
            </p>
          </section>
        </div>

        <section aria-labelledby="section-what-is-emotion-journal">
          <h2
            id="section-what-is-emotion-journal"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What is an emotion journal, and how does it differ from a diary?
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary font-semibold">
              An emotion journal is a short, structured record of what you feel, the situation
              around it, and how it registers in your energy or body.
            </strong>{" "}
            Unlike a traditional diary—which often retells the events of an entire day in
            chronological order—an emotion check-in zooms in on a single moment so you can notice a
            feeling without having to narrate everything that happened since breakfast.
          </p>
          <p className="mb-4">
            That distinction matters if you have ever abandoned a journal because keeping up with
            your own life felt like a second job. A diary asks for a story. An emotion check-in asks
            for three or four small pieces of information: what was happening, what you noticed
            inside, what word might fit, and whether anything would help next.
          </p>
          <p>
            Even that brief act of naming has been studied in laboratory settings. In a 2007
            functional MRI study by Matthew Lieberman and colleagues, participants who matched an
            emotion word to an emotional face showed lower amygdala activity and greater activity in
            the right ventrolateral prefrontal cortex than when they matched non-emotional labels.
            That study examined brief laboratory tasks rather than daily journaling apps, and it
            does not show that keeping a journal guarantees stress relief—but it illustrates why
            putting a tentative label on an experience is a distinct mental step from simply
            re-living the event. Check our{" "}
            <Link
              to="/resources/science-of-reflection"
              className="text-primary font-semibold hover:underline"
            >
              affect-labeling guide
            </Link>{" "}
            for a closer look at what that research does and does not establish.
          </p>
          <a
            href={liebermanSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the study: Putting feelings into words (2007)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: you are recording a moment, not writing your memoirs.
          </p>
        </section>

        <section aria-labelledby="section-starting-points">
          <h2
            id="section-starting-points"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            Four starting points when you do not know what to write
          </h2>
          <p className="mb-5">
            Beginners often stall because they try to answer “What emotion am I feeling?” first. If
            the word is already there, use it. When it is not, start with whichever piece of the
            moment is easiest to observe.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/15">
            <table className="w-full text-left text-sm leading-relaxed">
              <caption className="text-left p-4 bg-primary/[0.04] text-text-primary font-semibold">
                Four entry points for a beginner emotion check-in
              </caption>
              <thead className="border-y border-primary/15 bg-primary/[0.04] text-text-primary">
                <tr>
                  <th scope="col" className="p-3 sm:p-4">
                    Starting point
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Question to ask
                  </th>
                  <th scope="col" className="p-3 sm:p-4">
                    Example one-line entry
                  </th>
                </tr>
              </thead>
              <tbody>
                {startingPoints.map(({ entryPoint, prompt, example }) => (
                  <tr
                    key={entryPoint}
                    className="border-b border-primary/10 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="p-3 sm:p-4 font-semibold text-text-primary align-top"
                    >
                      {entryPoint}
                    </th>
                    <td className="p-3 sm:p-4 align-top">{prompt}</td>
                    <td className="p-3 sm:p-4 align-top">
                      <span className="font-medium text-text-primary">{example}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5">
            You do not need all four rows in every entry. On a busy afternoon, combining the
            situation with pleasantness and energy (“After the budget call—unpleasant and restless”)
            already captures enough context to be useful when you look back later in the week.
          </p>
          <p className="mt-4">
            If separating pleasantness from energy feels unfamiliar, the{" "}
            <Link
              to="/resources/valence-and-arousal"
              className="text-primary font-semibold hover:underline"
            >
              valence and arousal guide
            </Link>{" "}
            walks through why low energy can mean either peaceful contentment or drained heaviness.
            And if emotion words rarely show up on command, our{" "}
            <Link
              to="/resources/alexithymia-emotional-vocabulary"
              className="text-primary font-semibold hover:underline"
            >
              guide to alexithymia and emotional vocabulary
            </Link>{" "}
            explains why starting with physical sensations or situational facts is a legitimate way
            in, not a failed check-in.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: start with the part of the moment you can actually observe.
          </p>
        </section>

        <section aria-labelledby="section-blank-or-mixed">
          <h2
            id="section-blank-or-mixed"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            What to do when you feel nothing—or too many things at once
          </h2>
          <p className="mb-4">
            Two moments trip up new journalers more than any others: feeling completely blank, and
            feeling several contradictory things at the same time.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary font-semibold">
              When you feel “nothing” or “fine.”
            </strong>{" "}
            Flatness is still an observation. Sometimes “nothing” means a genuinely neutral,
            unremarkable Tuesday. Other times it means you are depleted, overstimulated, or running
            on autopilot after a demanding stretch. Instead of forcing a dramatic emotion word,
            record the neutral or muted state as it is: “Low energy, quiet, not much registering
            after six hours of screen work.” Over a few weeks, noticing when you go flat can be just
            as informative as noticing when you feel angry or excited.
          </p>
          <p>
            <strong className="text-text-primary font-semibold">
              When two feelings collide.
            </strong>{" "}
            Real events rarely produce a single clean label. Leaving a job, finishing a hard
            project, or setting a boundary with a friend can feel relieving and sad in the same
            hour. If you try to average those into one mood score, the entry loses the details that
            actually mattered. Write both down side by side—for example, “Relieved the presentation
            is over, and embarrassed that I stumbled on the last slide.” Our{" "}
            <Link
              to="/resources/mixed-emotions"
              className="text-primary font-semibold hover:underline"
            >
              mixed-emotions guide
            </Link>{" "}
            and{" "}
            <Link
              to="/resources/plutchik-emotion-wheel"
              className="text-primary font-semibold hover:underline"
            >
              Plutchik’s emotion wheel guide
            </Link>{" "}
            show how to hold two feelings or trace mild-to-strong gradations without forcing a
            single winner.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: “flat,” “mixed,” and “not sure yet” are valid entries.
          </p>
        </section>

        <section aria-labelledby="section-length-limits">
          <h2
            id="section-length-limits"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            Why longer entries are not always better
          </h2>
          <p className="mb-4">
            A common myth about emotional journaling is that deeper clarity requires pouring out
            page after page. Research on expressive disclosure paints a more nuanced picture.
          </p>
          <p className="mb-4">
            In a 2006 meta-analysis published in Psychological Bulletin, Joanne Frattaroli examined
            146 randomized studies of experimental emotional disclosure—protocols following James
            Pennebaker’s paradigm, in which participants write or speak about significant or
            stressful experiences across several short sessions. Across those studies, disclosure
            showed a small but statistically significant overall positive effect, while outcomes
            varied depending on context, instructions, and individual differences. Importantly,
            those structured protocols were typically brief (often 15 to 20 minutes across a few
            sessions around a specific event), not open-ended daily marathons, and they do not
            establish that an app provides a clinical benefit.
          </p>
          <a
            href={frattaroliSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mb-4 text-primary font-semibold hover:underline"
          >
            Read the meta-analysis: Experimental disclosure and its moderators (2006)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p>
            For an everyday emotion journal, going long can sometimes backfire. If twenty minutes of
            writing turns into replaying an argument line by line without new perspective,
            reflection has quietly slid into rumination. As our{" "}
            <Link
              to="/resources/overthinking-rumination"
              className="text-primary font-semibold hover:underline"
            >
              overthinking and rumination guide
            </Link>{" "}
            explains, repeating a distressing story without a next step can keep the loop going
            rather than settling it. Putting a natural ceiling on your check-in—a few sentences on
            paper, or a 60-second voice note—helps you capture the signal and step away.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: stop when you have named the moment and one next step.
          </p>
        </section>

        <section aria-labelledby="section-frequency-habits">
          <h2
            id="section-frequency-habits"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            How often to check in—and what happens when you miss a day
          </h2>
          <p className="mb-4">
            You do not need to log every mood shift from morning to midnight. For most beginners,
            one brief check-in a day—or three to four times a week tied to a real transition—is
            plenty. Good anchor points are moments that already happen: sitting in the car before
            walking inside, closing your laptop after work, or winding down before bed.
          </p>
          <p>
            It also helps to drop the “all or nothing” rule before you begin. In a 2010 field study
            by Phillippa Lally and colleagues tracking 96 adults who chose a new daily behavior over
            12 weeks, the median time to reach an automaticity plateau was 66 days, with individual
            curves ranging from 18 to 254 days. Crucially, missing a single opportunity to perform
            the behavior did not materially derail habit formation—what mattered was returning to
            the cue on subsequent days. Skipping Thursday does not ruin what you built on Monday
            through Wednesday.
          </p>
          <a
            href={lallySource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 mt-4 text-primary font-semibold hover:underline"
          >
            Read the study: How are habits formed in the real world (2010)
            <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: consistency comes from returning after a gap, not from never missing.
          </p>
        </section>

        <section aria-labelledby="section-first-entry">
          <h2
            id="section-first-entry"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            A 60-second first entry you can write or speak today
          </h2>
          <p className="mb-4">
            When you are ready to try a first check-in, use these four prompts in order. Write them
            on an index card, type them into a note, or speak them out loud in under a minute. This
            is a practical reflection format, not a validated treatment, and you can skip any step
            that feels unhelpful.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-text-primary font-semibold">Name the anchor moment.</strong>{" "}
              Where are you in the day, and what just happened? Keep it to one observable sentence.
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Locate pleasantness and activation.
              </strong>{" "}
              Does this feel pleasant, unpleasant, or mixed—and does your body feel settled, slowed
              down, alert, or wired?
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Offer one or two candidate words.
              </strong>{" "}
              Pick the closest emotion words you have right now, even if you preface them with
              “maybe” or “a little.”
            </li>
            <li>
              <strong className="text-text-primary font-semibold">
                Add one small need or boundary.
              </strong>{" "}
              Ask what would help in the next hour: water, ten quiet minutes, a clarifying message,
              or leaving the problem until tomorrow.
            </li>
          </ol>
          <div className="mt-5 bg-primary/[0.04] border border-primary/15 rounded-2xl p-5">
            <p className="text-base">
              “Just closed my laptop after three back-to-back calls. Unpleasant and wired—my jaw is
              clenched and my attention is scattered. Mostly overwhelmed, with a little irritation
              underneath because I said yes to a task I do not have time for. I am going to walk
              around the block before dinner and draft a boundary email in the morning.”
            </p>
          </div>
          <p className="mt-5">
            Notice what that entry does not do. It does not judge the irritation as bad or demand a
            permanent solution tonight. It records what happened, separates energy from
            pleasantness, tests two labels, and picks one concrete next action.
          </p>
          <p className="mt-4 text-sm text-text-muted italic">
            Takeaway: four sentences are enough to turn vague tension into something workable.
          </p>
        </section>

        <section aria-labelledby="section-vocolens">
          <h2
            id="section-vocolens"
            className="text-xl lg:text-2xl font-bold text-text-primary mb-4"
          >
            How an entry works inside Vocolens
          </h2>
          <p className="mb-4">
            If staring at a keyboard is the part that stops you, Vocolens is built around the spoken
            version of that same check-in. You tap record, talk through what happened in your normal
            voice for about a minute, and let the app turn the transcript into a structured starting
            point you can review.
          </p>
          <p className="mb-4">
            After an entry is analyzed, Vocolens displays “Top Emotions — Plutchik Intensity”
            (marking the strongest match with a PRIMARY badge and expressing intensity as Plutchik
            intensity words such as Interest, Anticipation, or Vigilance), an 8-region body map
            (head, face, neck, chest, stomach, arms, hands, legs) when physical sensations are
            mentioned, and the Unpleasant ↔ Pleasant and Calm ↔ Activated dials under “Adjust how
            it felt.”
          </p>
          <AppFigure
            label="The Record tab in Vocolens, showing the Speak your mind screen with a single microphone button."
            caption="Instead of a blank page, an entry in Vocolens starts with one microphone button. You speak naturally, and the candidate emotion labels and dials appear afterward for you to review."
          >
            <RecordingIdleFigure />
          </AppFigure>
          <p className="mb-4">
            Because AI suggestions are only candidates inferred from your words—never a direct
            measurement of your nervous system—you stay in charge of the record. In Refine Analysis,
            you can confirm what fits or correct the emotion label and the valence and arousal
            dials, tagging whether the suggestion had the Wrong label, Wrong intensity, or Context.
            The AI’s original values are kept alongside yours in the correction log, and once a
            pattern reaches at least 3 corrections across 2 distinct weeks (with recent corrections
            weighted more heavily), local aggregation appends personalized guidance to future
            analysis prompts without retraining any model.
          </p>
          <p className="mb-4">
            Streaks work transparently too: consecutive local-calendar days build your current
            streak, and a gap of two or more days resets the current counter to 1—while your longest
            streak, total entries, and calendar dots remain intact. You can explore the full flow
            with a 3-day free trial before choosing a subscription, or use the four-step check-in
            above in a paper notebook anytime.
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
              Frequently asked questions about starting an emotion journal
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
            Skip the blank page
          </h2>
          <p className="text-text-secondary mb-5 text-base leading-relaxed">
            Speak a 60-second check-in, review the candidate emotions, and keep the words that fit.
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
              Browse more guides
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
