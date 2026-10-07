import {
  Brain,
  Target as Radar,
  Pulse as Activity,
  PuzzlePiece as Puzzle,
  Heart,
  HeartBreak,
  ArrowClockwise as RefreshCw,
  Flame,
  Timer,
  Intersect,
  ArrowRight,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Resources() {
  return (
    <main
      aria-label="Voice journaling and mental wellness resources"
      className="max-w-5xl mx-auto px-6 pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Voice Journaling Resources for Mental Wellness",
            description:
              "Evidence-based articles and practical guides on voice journaling for stress relief, emotion labeling, emotional awareness, and building emotional resilience. Backed by peer-reviewed neuroscience research.",
            url: "https://vocolens.com/resources",
            publisher: {
              "@type": "Organization",
              name: "Vocolens",
              url: "https://vocolens.com",
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
              ],
            },
          }),
        }}
      />

      <Reveal>
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Learning Hub
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ color: "#1e293b" }}
          >
            Resources & Guides
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            Evidence-based guides on mental wellness, journaling, and emotional resilience — backed
            by peer-reviewed research.
          </p>
        </div>
      </Reveal>

      <RevealGroup stagger={0.05} eager>
        <article itemScope itemType="https://schema.org/Article" className="w-full">
          <meta itemProp="url" content="https://vocolens.com/resources/mixed-emotions" />
          <meta itemProp="datePublished" content="2026-10-06" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/mixed-emotions"
              aria-label="Read: Mixed Emotions: Why You Can Feel Happy and Sad at Once"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Intersect className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Neuroscience &amp; Emotional Intelligence
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Mixed Emotions: Why You Can Feel Happy and Sad at Once
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what mixed emotions are, see everyday examples of feeling two things at
                    once, and try a reflection that makes room for both without forcing a choice.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Mixed Emotions · Emotional Ambivalence · Voice Journaling
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/rejection-sensitivity" />
          <meta itemProp="datePublished" content="2026-09-29" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/rejection-sensitivity"
              aria-label="Read: Rejection Sensitivity and ADHD: What RSD Means and How to Respond"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <HeartBreak className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      ADHD &amp; Emotional Regulation
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Rejection Sensitivity and ADHD: What RSD Means and How to Respond
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what rejection sensitivity and RSD mean, why the label is not a formal
                    diagnosis, and practical ways to respond to hurt without assuming intent.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Rejection Sensitivity · RSD · ADHD
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/emotional-granularity" />
          <meta itemProp="datePublished" content="2026-09-17" />
          <meta itemProp="dateModified" content="2026-09-17" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/emotional-granularity"
              aria-label="Read: Emotional Granularity: Why Specific Words Change What You Feel"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Heart className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Neuroscience &amp; Emotional Intelligence
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Emotional Granularity: Why Specific Words Change What You Feel
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Anxious, stressed, overwhelmed — broad words can all be true and still be too
                    vague to act on. Learn what emotional granularity is, why finer labels are
                    linked to better regulation, and how voice journaling builds a personal
                    emotional vocabulary.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Emotional Granularity · Affect Labeling · Voice Journaling
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/adhd-time-blindness" />
          <meta itemProp="datePublished" content="2026-09-09" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/adhd-time-blindness"
              aria-label="Read: ADHD Time Blindness: Examples and Practical Time Supports"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Timer className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      ADHD &amp; Time Perception
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    ADHD Time Blindness: Examples and Practical Time Supports
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what ADHD time blindness means, recognize everyday examples, and try
                    visible timers, task estimates, and transition cues without blaming yourself.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      ADHD · Time Blindness · Interval Timing
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/burnout-recovery-signs" />
          <meta itemProp="datePublished" content="2026-08-04" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/burnout-recovery-signs"
              aria-label="Read: Burnout Signs and Recovery: What to Notice and What Can Help"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Flame className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Stress &amp; Burnout Recovery
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Burnout Signs and Recovery: What to Notice and What Can Help
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Understand workplace burnout signs, how they differ from ordinary tiredness, and
                    practical recovery supports that address demands as well as rest.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Burnout · Allostatic Load · Stress Recovery
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/overthinking-rumination" />
          <meta itemProp="datePublished" content="2026-07-14" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/overthinking-rumination"
              aria-label="Read: Overthinking and Rumination: How to Recognize the Loop"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <RefreshCw className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Anxiety &amp; Mental Wellness
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Overthinking and Rumination: How to Recognize the Loop
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Understand rumination versus useful reflection, see examples of repetitive
                    worry, and try a practical next-step check without promises of instant relief.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Overthinking · Rumination · Worry Time
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta
            itemProp="url"
            content="https://vocolens.com/resources/autism-emotional-regulation"
          />
          <meta itemProp="datePublished" content="2026-06-29" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/autism-emotional-regulation"
              aria-label="Read: Autism and Emotional Regulation: Sensory Needs and Practical Supports"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Puzzle className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Autism &amp; Neurodivergent Wellness
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Autism and Emotional Regulation: Sensory Needs and Practical Supports
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Explore emotional regulation in autistic adults, how sensory demands and
                    alexithymia can differ, and ways to plan support without masking your needs.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Autism · Alexithymia · Emotional Regulation
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta
            itemProp="url"
            content="https://vocolens.com/resources/alexithymia-emotional-vocabulary"
          />
          <meta itemProp="datePublished" content="2026-06-28" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/alexithymia-emotional-vocabulary"
              aria-label="Read: Alexithymia: Difficulty Identifying Emotions and Where to Start"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Heart className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Neuroscience &amp; Emotional Intelligence
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Alexithymia: Difficulty Identifying Emotions and Where to Start
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Explore what alexithymia means, examples of difficulty identifying feelings, and
                    gentle ways to describe sensations and build emotional vocabulary.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Alexithymia · Emotional Vocabulary · AI Journaling
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/distress-detection" />
          <meta itemProp="datePublished" content="2026-06-11" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/distress-detection"
              aria-label="Read: Physical Signs of Overwhelm: Body Awareness Without Guessing"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Activity className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Body Awareness &amp; Distress Detection
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Physical Signs of Overwhelm: Body Awareness Without Guessing
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what interoception means, explore physical signs that can accompany
                    overwhelm, and try a gentle check-in without treating sensations as diagnoses.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Interoception · Body Awareness · Overwhelm
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta
            itemProp="url"
            content="https://vocolens.com/resources/emotional-awareness-patterns"
          />
          <meta itemProp="datePublished" content="2026-03-30" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/emotional-awareness-patterns"
              aria-label="Read: Emotional Awareness: What It Is and How to Improve It"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Radar className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Mental Wellness &amp; Self-Discovery
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Emotional Awareness: What It Is and How to Improve It
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what emotional awareness means, see everyday examples, and try a simple
                    emotion-and-trigger journal to recognize feelings and patterns.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Pattern Recognition · Emotional Intelligence · Self-Awareness
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>

        <article itemScope itemType="https://schema.org/Article" className="w-full mt-5 sm:mt-8">
          <meta itemProp="url" content="https://vocolens.com/resources/science-of-reflection" />
          <meta itemProp="datePublished" content="2026-02-28" />
          <meta itemProp="dateModified" content="2026-10-06" />
          <meta itemProp="image" content="https://vocolens.com/vocolens-logo.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <RevealItem>
            <Link
              to="/resources/science-of-reflection"
              aria-label="Read: Affect Labeling: How to Name Your Emotions"
              className="block w-full text-left card-app rounded-3xl p-5 sm:p-8 lg:p-10 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay mx-auto sm:mx-0"
                  aria-hidden="true"
                >
                  <Brain className="w-5 h-5 text-[#6A3FC0]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                    <span
                      className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest text-center sm:text-left"
                      itemProp="articleSection"
                    >
                      Neuroscience &amp; Mental Wellness
                    </span>
                  </div>
                  <h2
                    itemProp="headline"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug text-center sm:text-left"
                  >
                    Affect Labeling: How to Name Your Emotions
                  </h2>
                  <p
                    className="text-text-secondary line-clamp-3 text-base leading-relaxed text-left"
                    itemProp="description"
                  >
                    Learn what affect labeling is, what research shows about naming emotions, and
                    how to try a short check-in without promises of guaranteed stress relief.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-3 mt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="max-w-full text-xs sm:text-sm text-text-muted px-2.5 py-1 rounded-full bg-primary/[0.04] border border-primary/15 leading-relaxed break-words">
                      Emotion Labeling · Stress Relief Journaling · Resilience
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        </article>
      </RevealGroup>
    </main>
  );
}
