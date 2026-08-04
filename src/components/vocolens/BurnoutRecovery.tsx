import { AnimatedSection } from './AnimatedSection';
import { Flame, ArrowUpRight, Clock, ChevronRight, HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What are the first signs of burnout?',
    answer: 'The earliest signs of burnout are rarely dramatic — they show up as small, easy-to-dismiss shifts: needing more effort to start tasks you used to do automatically, feeling irritated by things that didn\'t used to bother you, and a flattening sense of "what\'s the point" around work you once cared about. Maslach and Leiter\'s three-dimension model names these as the beginning of exhaustion and the early edge of cynicism, both of which typically appear well before performance visibly drops. Because they\'re subtle and easy to explain away individually, most people don\'t notice the pattern until the exhaustion dimension is already severe.',
  },
  {
    question: 'Can journaling help with burnout?',
    answer: 'Yes, but the mechanism matters. Burnout builds through accumulation that goes unlogged — small stressors compounding without ever being registered as a running total. Structured journaling interrupts this by giving your nervous system a regular checkpoint: naming today\'s load, in your own words, before it silently adds to tomorrow\'s. Research on expressive disclosure (Pennebaker & Beall, 1986; Frattaroli\'s 2006 meta-analysis of 146 studies) shows that structured processing measurably reduces the physiological cost of chronic stress. Unstructured venting without any reflection or tracking doesn\'t show the same effect — the value comes from making the load visible, not from complaining about it.',
  },
  {
    question: 'How long does burnout recovery take?',
    answer: 'There\'s no fixed timeline, because burnout is a function of how long the imbalance between demand and recovery went unaddressed — not a single event with a countdown clock. Clinical reviews of burnout recovery describe a general arc: acute exhaustion easing within weeks once the demand load is genuinely reduced, but the cynicism and reduced-efficacy dimensions — the parts that make you doubt your own competence and care — often take months to rebuild, because they involve restoring trust in your environment and yourself, not just resting your body. Recovery that only addresses tiredness (a vacation, a long weekend) frequently doesn\'t hold, because the underlying allostatic load and the unresolved cynicism are still there when you return.',
  },
  {
    question: "What's the difference between burnout and depression?",
    answer: 'Burnout is generally understood as context-specific and load-driven — it develops in relation to a particular role or set of demands, and Maslach\'s research shows it typically improves, at least partially, when that specific load is reduced or the environment changes. Depression is more pervasive, affecting mood, energy, and interest across contexts, not just the one producing the strain, and it doesn\'t reliably lift just because the triggering situation changes. In practice the two frequently overlap and can be hard to distinguish from the inside, which is exactly why tracking your load and mood over time — rather than relying on a single-moment gut check — matters: a pattern that\'s confined to specific triggers looks different from a pattern that spreads into everything.',
  },
];

export function BurnoutRecovery() {
  const navigate = useNavigate();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Burnout Doesn't Start in Your Job — It Starts in Your Nervous System",
    "alternativeHeadline": "Signs of Burnout and How to Recover: The Science of Allostatic Load and Emotional Exhaustion",
    "description": "Burnout isn't a single bad week — it's an unlogged accumulation of small stressors your nervous system never got to close out. Learn the science of allostatic load, why willpower and vacations don't fix it, and how a daily voice-journaled load check catches burnout before it becomes collapse.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-08-04",
    "dateModified": "2026-08-04",
    "author": {
      "@type": "Organization",
      "name": "Vocolens",
      "url": "https://vocolens.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vocolens",
      "url": "https://vocolens.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vocolens.com/vocolens_favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vocolens.com/resources/burnout-recovery-signs"
    },
    "articleSection": "Stress & Burnout Recovery",
    "keywords": "burnout, signs of burnout, burnout recovery, burnout symptoms, how to recover from burnout, emotional exhaustion, allostatic load, occupational burnout, burnout prevention, voice journaling stress",
    "wordCount": 1550,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Burnout", "description": "A state of physical and emotional exhaustion caused by prolonged, unresolved stress" },
      { "@type": "Thing", "name": "Allostatic load", "description": "The cumulative physiological cost of chronic stress on the body's regulatory systems" },
      { "@type": "Thing", "name": "Voice journaling", "description": "Recording spoken reflections to build self-awareness and emotional clarity" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "The Truth About Burnout", "author": { "@type": "Person", "name": "Christina Maslach" }, "datePublished": "1997" },
      { "@type": "ScholarlyArticle", "name": "Allostasis, Allostatic Load, and the Costs of Adaptation", "author": { "@type": "Person", "name": "Bruce S. McEwen" }, "datePublished": "2003" },
      { "@type": "ScholarlyArticle", "name": "Confronting a Traumatic Event: Toward an Understanding of Inhibition and Disease", "author": { "@type": "Person", "name": "James W. Pennebaker" }, "datePublished": "1986" }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["[data-speakable='summary']", "[data-speakable='key-takeaways']"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" },
        { "@type": "ListItem", "position": 3, "name": "Burnout Recovery", "item": "https://vocolens.com/resources/burnout-recovery-signs" }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer,
      },
    })),
  };

  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="max-w-3xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AnimatedSection animation="fade-in-up">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-text-muted" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <button
                onClick={() => navigate({ to: '/resources' })}
                className="hover:text-primary transition-colors"
                itemProp="name"
              >
                Resources
              </button>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-text-primary font-medium" itemProp="name">Burnout Recovery</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Stress &amp; Burnout Recovery
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>7 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-08-04" itemProp="datePublished">Aug 4, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            Burnout Doesn't Start in Your Job — It Starts in Your Nervous System
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Burnout doesn't arrive the day you finally break. It arrives months earlier, one unlogged stressor at a time, and your nervous system has been keeping a running total the whole way. Here's the science of <strong className="text-text-primary font-semibold">allostatic load</strong>, why a vacation alone rarely fixes it, and how a daily voice-journaled load check catches the accumulation before it becomes collapse.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
          </div>
          <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6" />

          <div data-speakable="key-takeaways" className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
            <p className="font-semibold text-primary mb-2 uppercase tracking-wide text-base leading-relaxed">Key takeaways</p>
            <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Burnout is a running total, not a single event.</strong> Allostatic load explains how small, ordinary stressors compound silently until the body crosses a threshold.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Exhaustion is the last symptom to show up, not the first.</strong> Cynicism and a creeping sense of inefficacy typically arrive earlier, and they're easy to mistake for a personality change instead of a warning sign.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">A vacation resets your energy, not your ledger.</strong> Naming the load daily — out loud — is what actually keeps the running total visible before it becomes a crash.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            You didn't wake up burned out. There was no single Tuesday that broke you. What actually happened is quieter and much harder to notice in the moment: for months, your days asked more of you than your nights gave back, and somewhere underneath conscious awareness, your body kept a tally of the difference.
          </p>
          <p className="mt-4">
            By the time it feels sudden — the morning you can't make yourself open your laptop, the meeting where you have to fight back tears over nothing in particular — the total has already been building for a long time. Burnout isn't a personal failing that shows up out of nowhere. It's the visible endpoint of an invisible ledger that finally came due.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-allostatic-load">
            <h2 id="section-allostatic-load" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Your body is keeping a ledger you can't see
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              In the early 1990s, neuroscientists Bruce McEwen and Eliot Stellar coined a term for something the body does constantly and invisibly: <strong className="text-text-primary font-semibold">allostatic load</strong> — the cumulative physiological wear of adapting, again and again, to demand. Your cortisol, blood pressure, and inflammation systems aren't built to reset to zero between stressors. They're built to stay slightly elevated, ready for the next one, and that readiness has a cost that compounds.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              A single stressful meeting doesn't burn you out. Neither does one bad night of sleep, one difficult client, or one missed workout. The problem is that none of these register individually as a big deal, so nothing in your daily experience flags the pattern. Meanwhile, the ledger doesn't care whether any single entry felt significant — it only cares about the running total.
            </p>
            <p>
              This reframes what burnout actually is. It isn't a sign that you're too sensitive or not resilient enough. It's what happens to any system — human or otherwise — when demand consistently outpaces recovery for long enough, and nothing along the way gave the system a chance to see the total add up.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: burnout isn't caused by one hard thing. It's caused by many ordinary things that were never subtracted from, only added to.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-maslach">
            <h2 id="section-maslach" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The three warning signs — and why exhaustion is the last one to show up
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Psychologist Christina Maslach spent decades studying burnout and found it isn't a single symptom but a pattern of three: <strong className="text-text-primary font-semibold">emotional exhaustion</strong>, <strong className="text-text-primary font-semibold">cynicism</strong> (a growing detachment or negativity toward the work itself), and <strong className="text-text-primary font-semibold">reduced sense of efficacy</strong> — a creeping belief that nothing you do matters or works anymore.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Most people assume exhaustion comes first, because it's the loudest and most physical. In practice, cynicism and doubt about your own competence often arrive earlier, and they're far easier to misread. You start rolling your eyes at meetings you used to care about. You catch yourself thinking, quietly, "why bother." It doesn't feel like burnout. It feels like you've just stopped liking your job, or stopped being good at it — which is exactly why so many people miss the window where intervention is easiest.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "Burnout is a syndrome of emotional exhaustion, depersonalization, and reduced personal accomplishment that can occur among individuals who work with people in some capacity."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Maslach & Jackson, 1981, Journal of Occupational Behaviour</cite>
            </blockquote>
            <p>
              Exhaustion is usually the dimension that finally forces you to pay attention — because it's physical, undeniable, and eventually impossible to push through. But by the time it shows up in force, the other two dimensions have often been quietly present for weeks or months.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: if you've started feeling cynical or ineffective about work you used to care about, that's not a mood — it's an early warning sign, arriving before the exhaustion that usually gets all the attention.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-vacation-fallacy">
            <h2 id="section-vacation-fallacy" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why a vacation resets your energy but not your ledger
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Here's the frustrating pattern almost everyone who's burned out eventually recognizes: you take a week off, you feel noticeably better, and within days of returning, it's like the break never happened. This isn't a failure of the vacation. It's a mismatch between what rest restores and what burnout actually depletes.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              A week away lowers your acute stress hormones and gives your body genuine short-term recovery — that part is real. But it doesn't touch the cynicism or the eroded sense of efficacy, because those dimensions aren't about energy. They're about trust: trust that your effort produces results, trust that the environment you're returning to won't simply refill the ledger at the same rate. Rest addresses the numerator. It does nothing to the conditions generating the load in the first place.
            </p>
            <p>
              This is why willpower-and-rest advice — push through, then take a long weekend — so often fails people who are genuinely burned out. It's not that they rested wrong. It's that resting was only ever going to solve one-third of a three-part problem.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you can't rest your way out of a load you're not tracking. The environment producing the load has to change, or the tracking has to start, or both.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-daily-load-check">
            <h2 id="section-daily-load-check" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Giving your nervous system a running total it can actually see
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              If burnout builds because small stressors go unlogged, then the fix has to involve something that actually logs them — consistently, before the total gets large enough to notice on its own. Waiting until you feel overwhelmed to reflect on why is like checking your bank balance only after it's already overdrawn.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Speaking your day out loud — even briefly — does something a mental recap doesn't: it forces you to notice specifics instead of averaging everything into a vague "fine" or "exhausted." Naming what actually happened ("three back-to-back meetings, skipped lunch, didn't hear back on the thing I've been anxious about") turns a diffuse feeling into a countable event. That specificity is what makes the running total visible at all.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This is the same mechanism behind <strong className="text-text-primary font-semibold">expressive disclosure</strong> — the well-documented finding that structured verbal or written processing of stressful experiences produces measurable physiological benefits, not just a subjective sense of relief. Voice journaling applies that mechanism directly to burnout: you're not just venting about a hard day, you're logging load in a way your nervous system can actually reference later.
            </p>
            <a
              href="/resources/distress-detection"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read more about how your body signals overwhelm early</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: your nervous system doesn't need you to eliminate stress. It needs a running total it can trust — and speaking your day out loud is one of the fastest ways to keep one.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.48}>
          <section aria-labelledby="section-load-check-practice">
            <h2 id="section-load-check-practice" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Building a daily load check that catches burnout before it catches you
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Researchers studying burnout recovery consistently find the same thing: early intervention, while the load is still moderate, is far more effective than intervention after collapse. The problem has never been a lack of good advice for burned-out people — it's that most people don't realize they're accumulating load until the exhaustion dimension is already severe.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              A daily load check closes that gap. At the end of each day, take 60-90 seconds and answer three questions out loud: <em>What drained me today? What, if anything, actually restored me? On a scale of "manageable" to "running on empty," where am I right now?</em> You're not trying to solve anything in this moment — you're just making today's entry in a ledger that's been running whether you tracked it or not.
            </p>
            <p>
              Over two or three weeks, the same drains tend to repeat — a specific meeting, a specific person, a specific type of task — while the "restored me" column often stays suspiciously empty. Once you can see that asymmetry laid out across days instead of buried in a single overwhelming feeling, it stops being a mystery why you're exhausted, and starts being a specific, addressable list.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you don't need to fix your entire life to prevent burnout. You need a daily, honest total — because the load you can see is the load you can actually act on.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.52}>
          <section aria-labelledby="section-faq" className="py-8 border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently asked questions about burnout and recovery
              </h2>
            </div>
            <div className="space-y-6">
              {faqData.map(({ question, answer }, i) => (
                <details
                  key={i}
                  className="group bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-start gap-3 cursor-pointer px-5 py-4 text-text-primary font-semibold text-sm lg:text-base select-none list-none [&::-webkit-details-marker]:hidden">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" aria-hidden="true" />
                    <span>{question}</span>
                  </summary>
                  <div className="px-5 pb-5 pl-12 text-sm lg:text-base text-text-secondary leading-relaxed">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.56}>
          <div className="py-8 border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-xl">Explore related articles</h3>
            <div className="space-y-4">
              <button
                onClick={() => navigate({ to: '/resources/distress-detection' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Body Awareness &amp; Distress Detection</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How your body tells you it's overwhelmed before your mind does
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn the neuroscience of interoception and how body-sensation mapping helps you catch overwhelm before it escalates.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
              <button
                onClick={() => navigate({ to: '/resources/overthinking-rumination' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Anxiety &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      The overthinking trap: why your brain won't stop
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover the neuroscience of rumination and how giving your brain a completion signal breaks the loop.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
              <button
                onClick={() => navigate({ to: '/resources/science-of-reflection' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Neuroscience &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How naming your emotions reduces stress and builds resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn how affect labeling decreases amygdala activity and calms your nervous system through daily voice journaling.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              Start keeping the ledger
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              You don't need a vacation to see the pattern. You need sixty seconds and your own voice. Let Vocolens help you name today's load before it becomes tomorrow's crash.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/join"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
              >
                Join Waitlist
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                onClick={() => navigate({ to: '/resources' })}
                className="inline-flex items-center gap-2 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                Back to Resources
              </button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </article>
  );
}
