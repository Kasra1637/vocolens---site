import { ListenToArticle } from './ListenToArticle';
import { Timer, ArrowUpRight, Clock, CaretRight, CaretRight as ChevronRight, Question as HelpCircle } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';
import { BackToTop } from './BackToTop';

const faqData = [
  {
    question: 'What is ADHD time blindness?',
    answer: 'Time blindness is the term clinicians use for a measurable difficulty accurately sensing how much time has passed or how much time a task will take, common in ADHD. It is not a metaphor for being disorganized — psychologist Russell Barkley\'s influential model describes ADHD as disrupting the developmental process that normally lets people use an internal sense of time to guide behavior toward the future, leaving attention anchored to "the temporal now." In practice this means deadlines that are two weeks away don\'t feel real until they\'re suddenly almost due, and a 20-minute task can consume two hours without any felt sense of time passing.',
  },
  {
    question: 'Is time blindness a real, measurable symptom or just an excuse?',
    answer: "It's measurable, not anecdotal. A 2021 meta-analysis by Zheng, Wang, Chiu, and Shum, pooling data from over 1,600 children and adolescents with ADHD against nearly 1,250 peers without it, found consistent deficits in time accuracy and precision, with a tendency to misjudge duration regardless of the type of timing task used. Separate research on adults by Weissenberger and colleagues describes time perception as a focal, central symptom of adult ADHD rather than a side effect of inattention. The deficit shows up in controlled lab tasks, not just self-report, which is why it's treated as a core feature of ADHD rather than a character trait.",
  },
  {
    question: 'Why do reminders and alarms not fully fix time blindness?',
    answer: "Alarms solve the problem of remembering to check the time — they don't solve the problem of accurately feeling how much time an activity will take or how much has already gone by. Someone with time blindness can hear an alarm, silence it, and go right back into a task with no felt urgency, because the alarm doesn't create the missing internal sense of duration. That's why external tools help most when they're used to build a track record of actual-versus-estimated time, not just to interrupt a moment.",
  },
  {
    question: 'Can journaling or voice logging actually help with time blindness?',
    answer: "Yes, through calibration rather than willpower. Because the core deficit is an inaccurate internal clock, the most direct fix is feeding your brain accurate external data about time until estimation gets better. Speaking a quick timestamp at the start and end of a task — out loud, in the moment — creates a real record you can compare against your gut guess afterward. Over enough repetitions, this narrows the gap between how long something feels like it will take and how long it actually takes, which is the same mechanism behind time-perception training used in some ADHD interventions.",
  },
  {
    question: "What's the difference between time blindness and procrastination?",
    answer: 'Procrastination is choosing to delay a task despite knowing the deadline is approaching. Time blindness is not reliably sensing that the deadline is approaching in the first place, or not sensing how much time a task will consume once started. The two frequently look identical from the outside — a missed deadline is a missed deadline — but they call for different responses: procrastination responds to motivation and task-initiation strategies, while time blindness responds to building external, felt reference points for the passage of time itself.',
  },
];

export function TimeBlindness() {

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Time Blindness Isn't a Focus Problem — It's a Missing Internal Clock",
    "alternativeHeadline": "ADHD Time Blindness Explained: The Neuroscience of Time Perception and What Actually Helps",
    "description": "ADHD time blindness isn't laziness or poor planning — it's a measurable difference in how the brain tracks duration. Learn the neuroscience of interval timing, why alarms and willpower don't fix it, and how a daily voice-logged time-anchor habit gives your brain the external clock it's missing.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-09-09",
    "dateModified": "2026-09-09",
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
      "@id": "https://vocolens.com/resources/adhd-time-blindness"
    },
    "articleSection": "ADHD & Time Perception",
    "keywords": "ADHD time blindness, time blindness, ADHD and time perception, why does time feel unreal, internal clock ADHD, interval timing, ADHD deadlines, ADHD hyperfocus time, voice journaling ADHD",
    "wordCount": 1550,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Time blindness", "description": "A difficulty accurately sensing the passage or duration of time, common in ADHD" },
      { "@type": "Thing", "name": "Interval timing", "description": "The brain's process for perceiving and estimating the duration of events" },
      { "@type": "Thing", "name": "Voice journaling", "description": "Recording spoken reflections to build self-awareness and emotional clarity" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "Attention-Deficit Hyperactivity Disorder, Self-Regulation, and Time", "author": { "@type": "Person", "name": "Russell A. Barkley" }, "datePublished": "1997" },
      { "@type": "ScholarlyArticle", "name": "Time Perception Deficits in Children and Adolescents With ADHD: A Meta-Analysis", "author": { "@type": "Person", "name": "Qianqian Zheng" }, "datePublished": "2021" },
      { "@type": "ScholarlyArticle", "name": "Time Perception is a Focal Symptom of Attention-Deficit/Hyperactivity Disorder in Adults", "author": { "@type": "Person", "name": "Simon Weissenberger" }, "datePublished": "2021" }
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
        { "@type": "ListItem", "position": 3, "name": "ADHD Time Blindness", "item": "https://vocolens.com/resources/adhd-time-blindness" }
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
          <ol className="flex items-center gap-2 text-sm text-text-muted" itemScope itemType="https://schema.org/BreadcrumbList">
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
              <span className="text-text-primary font-medium" itemProp="name">ADHD Time Blindness</span>
              <meta itemProp="item" content="https://vocolens.com/resources/adhd-time-blindness" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay" aria-hidden="true">
              <Timer className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5" itemProp="articleSection">
                ADHD &amp; Time Perception
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>7 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-09-09" itemProp="datePublished">Sep 9, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}
          >
            Time Blindness Isn't a Focus Problem — It's a Missing Internal Clock
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Time blindness doesn't mean you don't care about the clock. It means your brain isn't reliably generating the internal signal that tells you how much time has actually passed. Here's the science of <strong className="text-text-primary font-semibold">interval timing</strong> in ADHD, why alarms and willpower alone don't fix it, and how a simple voice-logged time-anchor habit gives your brain the external clock it's missing.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="adhd-time-blindness" />

          <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">Key takeaways</p>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Time blindness is a measurable timing deficit, not a character flaw.</strong> Meta-analyses across children and adults with ADHD show consistent, testable differences in how accurately time is perceived.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Time distorts in two directions, not one.</strong> A task's length gets underestimated before you start, then disappears almost entirely once you're absorbed in it.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Alarms remind you to check the clock — they don't fix the broken sense of duration.</strong> What actually helps is feeding your brain accurate, spoken data about time until its own estimate improves.</div>
              </li>
            </ul>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody" id="article-root">

        <div>
          <p>
            You told yourself you'd start at 2pm. You look up, certain it's been twenty minutes, and it's 4:30. Nothing dramatic happened in between — no distraction you could point to, no single moment you can blame. Time simply didn't register the way it registers for other people, and now you're left explaining, again, why something that felt instant took two and a half hours.
          </p>
          <p className="mt-4">
            If you've heard "just set an alarm" or "you need better time management" in response to this, you already know it doesn't land, because the problem was never that you forgot to check a clock. The problem is that the internal sense most people use to feel time passing — without needing to check anything — isn't generating a reliable signal in the first place.
          </p>
        </div>

        <div>
          <section aria-labelledby="section-two-clocks">
            <h2 id="section-two-clocks" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Your brain has two clocks, and ADHD affects the one you can't see
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              There's the clock on your wall, and then there's the one your brain builds internally — a felt sense of duration that lets you sense, without checking anything, that "this has been about ten minutes" or "I should wrap this up soon." Psychologist Russell Barkley, whose self-regulation model has shaped decades of ADHD research, described ADHD as disrupting exactly this internal mechanism — pulling behavior back to what he called <strong className="text-text-primary font-semibold">"the temporal now,"</strong> a present-focused mode where the future doesn't carry much felt weight until it's no longer the future.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              This isn't a loose metaphor. A 2021 meta-analysis pooling more than 1,600 children and adolescents with ADHD against nearly 1,250 peers found consistent deficits in how accurately and precisely time was judged, regardless of the specific timing task used. Separate research on adults describes time perception as a <strong className="text-text-primary font-semibold">focal, central symptom</strong> of adult ADHD in its own right — not a downstream side effect of being distracted, but a core piece of how the condition works.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "ADHD disrupts this process and returns control of behavior to the temporal now... a blindness to past, future, and time more generally."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Barkley, 1997, Journal of Developmental &amp; Behavioral Pediatrics</cite>
            </blockquote>
            <p>
              This reframes the whole experience. You're not failing to try hard enough to feel time pass. You're missing a background process that, for most brains, runs quietly and automatically all day without ever needing conscious effort.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: time blindness isn't inattention to the clock. It's a measurable gap in the internal sense that's supposed to make checking the clock unnecessary most of the time.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-two-way-distortion">
            <h2 id="section-two-way-distortion" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The two-way distortion: shrinking before, vanishing during
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Time blindness rarely shows up as one clean symptom — it shows up as two related distortions that happen at opposite ends of a task. Before you start, duration gets compressed: a task that will realistically take ninety minutes gets mentally filed as "twenty minutes, no problem," which is part of why deadlines two weeks out don't feel urgent until they're two hours out. This isn't optimism or carelessness — the meta-analytic data on children with ADHD specifically found a tendency to misjudge duration in ways that weren't explained by the type of task or the kind of stimulus used, suggesting something more basic than a planning habit.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Then, once a task actually starts and captures attention — especially one you find engaging — time can disappear almost entirely in the other direction. Research on adults with ADHD describes time as subjectively speeding up during focused activity, with duration becoming genuinely difficult to track from the inside while it's happening. That's why "I'll just do fifteen more minutes of this" can dissolve into three hours without a single moment that felt like a decision to keep going.
            </p>
            <p>
              Both distortions point the same direction: the felt experience of duration and the actual clock have quietly come uncoupled, in both directions, and neither end offers a natural warning sign.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you're not bad at planning and separately bad at stopping. Both problems come from the same missing signal, showing up on either side of the same task.
            </p>
          </section>
        </div>

        <div>
          <div className="h-px bg-primary/10" />
        </div>

        <div>
          <section aria-labelledby="section-alarms-fail">
            <h2 id="section-alarms-fail" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why alarms, planners, and willpower keep failing the same way
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The standard advice — set more alarms, use a planner, try harder to "be aware" of the time — treats time blindness like a memory problem: you just need a better prompt. But an alarm only solves the problem of remembering to glance at a clock. It does nothing to fix the part that's actually missing, which is an accurate felt sense of how much time an activity will consume or how much has already gone by.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              This is why so many people with time blindness can silence an alarm mid-task and walk straight back into the exact same absorbed state thirty seconds later — the interruption registered, but it didn't create the missing internal urgency, because urgency was never the thing that was broken. You already knew, intellectually, that time was passing. What you didn't have was a felt sense that translated that knowledge into "stop now."
            </p>
            <p>
              Willpower-based fixes fail for the same reason burnout doesn't resolve with a single vacation: they target the symptom you can see, not the underlying signal that's actually missing. More discipline can't manufacture a sense that isn't being generated in the first place.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: an alarm interrupts you. It doesn't teach your brain what ninety minutes actually feels like — and that felt calibration is the part that's missing.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-external-clock">
            <h2 id="section-external-clock" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Giving your brain an external clock it can actually borrow
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If the core problem is a felt sense of duration that isn't reliable, the most direct fix isn't a louder reminder — it's feeding your brain accurate, real data about time until its own estimate gets closer to reality. That requires a record, not just a nudge: something that captures what you guessed a task would take, and later, what it actually took, so the gap between the two becomes visible instead of invisible.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Speaking a quick timestamp out loud does this with almost no friction — "it's 2:04, starting the email draft, I think this is a ten-minute thing" — and then again when you resurface: "okay, it's 3:40." You're not journaling about your feelings here; you're building a spoken, timestamped ledger your internal clock can eventually learn from, the same way any system improves once it gets real feedback instead of a guess.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              This is the same underlying mechanism that makes voice journaling useful for tracking mood over time: your entries carry a real timestamp automatically, and reviewing when things happened — not just what happened — starts to reveal patterns your felt sense of time consistently misses, like the tasks that reliably run three times longer than you expect, or the hours where focus reliably runs away from you.
            </p>
            <a
              href="/resources/emotional-awareness-patterns"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">Read more about how pattern recognition builds self-understanding</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: your brain doesn't need to be scolded about the time. It needs real, repeated data about the time — and a spoken timestamp is one of the fastest ways to create it.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-time-anchor-practice">
            <h2 id="section-time-anchor-practice" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Building a time-anchor habit that actually recalibrates you
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              A time-anchor practice is small on purpose, because the goal isn't to fix every task — it's to slowly close the gap between how long things feel like they'll take and how long they actually take. At the start of anything that matters — a work block, a chore, a "quick" errand — say your guess out loud: <em>what time is it, and how long do I think this will take?</em> When you resurface, say the actual time back.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Do this for two or three weeks and a pattern usually appears fast: certain categories of task — anything on a screen, anything you find genuinely absorbing — consistently run two or three times longer than the guess, while other categories are estimated almost perfectly. That asymmetry is useful information you can actually plan around, instead of a vague, demoralizing sense that you're "just bad with time" across the board.
            </p>
            <p>
              Once you can see which specific situations swallow time, you can build guardrails around those specific situations — a second check-in timestamp for the tasks that reliably run long — rather than trying to white-knuckle a general sense of time that was never going to appear on its own.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you don't need to develop a perfect internal clock. You need a running comparison between guess and reality — because the gap you can see is the gap you can actually plan around.
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
                Frequently asked questions about ADHD time blindness
              </h2>
            </div>
            <div className="space-y-6">
              {faqData.map(({ question, answer }, i) => (
                <details
                  key={i}
                  className="group card-app rounded-3xl p-6 sm:p-8 overflow-hidden transition-shadow"
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
        </div>

        <div>
          <div className="border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-lg">Explore related articles</h3>
            <div className="space-y-4">
              <Link
                to="/resources/emotional-awareness-patterns"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Mental Wellness &amp; Self-Discovery</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      Building emotional awareness: how pattern recognition transforms self-understanding
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover metacognitive awareness and how recognizing emotional patterns accelerates personal growth and self-understanding.</p>
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Anxiety &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      The overthinking trap: why your brain won't stop
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover the neuroscience of rumination and how giving your brain a completion signal breaks the loop.</p>
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Neuroscience &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      How naming your emotions reduces stress and builds resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn how affect labeling decreases amygdala activity and calms your nervous system through daily voice journaling.</p>
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
              See time clearly
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Felt like ten minutes? Was ninety. Vocolens shows the gap your clock can&#x27;t.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={GOOGLE_PLAY_URL}
                {...STORE_LINK_ATTRS}
                className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-5 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
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

