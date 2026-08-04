import { AnimatedSection } from './AnimatedSection';
import { RefreshCw, ArrowUpRight, Clock, ChevronRight, HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'Why can\'t I stop overthinking even when I want to?',
    answer: 'Overthinking persists because your brain treats unresolved concerns as unfinished business — a phenomenon researchers call the Zeigarnik effect. Incomplete thoughts are held in active memory and resurface involuntarily until they feel "closed." Willpower alone rarely works because the loop isn\'t a discipline problem; it\'s a completion-signal problem. Your brain needs to register that a thought has been processed, not just suppressed.',
  },
  {
    question: 'What is the default mode network and how is it related to rumination?',
    answer: 'The default mode network (DMN) is the set of brain regions that activate when you\'re not focused on an external task — during mind-wandering, daydreaming, and self-referential thought. Research by Killingsworth and Gilbert (2010) found that mind-wandering, largely driven by the DMN, is strongly associated with lower mood. In people prone to rumination, the DMN can become overactive and self-critical, replaying the same concerns without producing resolution.',
  },
  {
    question: 'Does writing or talking about a problem actually stop overthinking, or does it make it worse?',
    answer: 'It depends on how it\'s done. Simply repeating the same worry over and over — venting without structure — tends to deepen the rumination groove. But structured externalization, where you name the thought, its context, and either an action or an acceptance, gives your brain the completion signal it\'s missing. Research on expressive disclosure and scheduled worry time consistently shows that structured processing reduces intrusive thought frequency, while unstructured looping does not.',
  },
  {
    question: 'What is "worry time" and does it really work?',
    answer: 'Worry time is a technique from Borkovec\'s stimulus control therapy for chronic worry: you set aside a specific 10-20 minute window each day to worry on purpose, and when anxious thoughts arise outside that window, you note them and postpone them until your scheduled time. Clinical research on this approach shows it reduces both the frequency and intensity of worry over several weeks, because it teaches your brain that concerns will be addressed on a schedule rather than requiring immediate, constant attention.',
  },
  {
    question: 'How is voice journaling different from just thinking things through in my head?',
    answer: 'Thinking something through silently keeps the thought in the same loop that generated it — nothing external happens, so your brain has no new information that the loop is finished. Speaking it aloud forces you to structure the thought into language in real time, which engages different neural pathways than silent rumination and creates an external record your brain can register as "handled." This is why people often reach a conclusion out loud in seconds that they couldn\'t reach after an hour of silent replaying.',
  },
];

export function OverthinkingRumination() {
  const navigate = useNavigate();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Overthinking Trap: Why Your Brain Won't Stop and What Actually Helps",
    "alternativeHeadline": "Why You Can't Stop Overthinking: The Neuroscience of Rumination and How to Break the Loop",
    "description": "Overthinking isn't a willpower problem — it's what happens when your brain treats a thought as unfinished business. Learn the neuroscience of rumination, why \"just stop thinking about it\" backfires, and how voice journaling gives your brain the completion signal it's been missing.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
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
      "@id": "https://vocolens.com/resources/overthinking-rumination"
    },
    "articleSection": "Anxiety & Mental Wellness",
    "keywords": "overthinking, how to stop overthinking, rumination, can't stop thinking, worry loop, intrusive thoughts, default mode network, Zeigarnik effect, worry time, voice journaling anxiety, racing thoughts at night",
    "wordCount": 1500,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Rumination", "description": "Repetitive, passive dwelling on distressing thoughts or concerns" },
      { "@type": "Thing", "name": "Default mode network", "description": "The brain network active during mind-wandering and self-referential thought" },
      { "@type": "Thing", "name": "Voice journaling", "description": "Recording spoken reflections to build self-awareness and emotional clarity" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "A Wandering Mind Is an Unhappy Mind", "author": { "@type": "Person", "name": "Matthew A. Killingsworth" }, "datePublished": "2010", "url": "https://www.science.org/doi/10.1126/science.1192439" },
      { "@type": "ScholarlyArticle", "name": "Responses to Depression and Their Effects on the Duration of Depressive Episodes", "author": { "@type": "Person", "name": "Susan Nolen-Hoeksema" }, "datePublished": "1991" },
      { "@type": "ScholarlyArticle", "name": "Preliminary Exploration of Worry: Some Characteristics and Processes", "author": { "@type": "Person", "name": "Thomas D. Borkovec" }, "datePublished": "1983" }
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
        { "@type": "ListItem", "position": 3, "name": "Overthinking & Rumination", "item": "https://vocolens.com/resources/overthinking-rumination" }
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
              <span className="text-text-primary font-medium" itemProp="name">Overthinking & Rumination</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <RefreshCw className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Anxiety &amp; Mental Wellness
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>7 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-07-14" itemProp="datePublished">Jul 14, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            The Overthinking Trap: Why Your Brain Won't Stop and What Actually Helps
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Overthinking isn't a willpower problem. It's what happens when your brain treats a thought as unfinished business and keeps reopening the file. Here's the neuroscience of <strong className="text-text-primary font-semibold">rumination</strong>, why "just stop thinking about it" tends to backfire, and how giving your brain a real completion signal — out loud — actually closes the loop.
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
                <strong className="font-medium text-text-primary">Your brain reopens unfinished thoughts on purpose.</strong> The Zeigarnik effect explains why unresolved worries intrude — they're not closed files, so your mind keeps pulling them back up.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Fighting a thought often strengthens it.</strong> Suppression tends to backfire; what actually reduces intrusive thoughts is structured processing, not avoidance.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Speaking a thought out loud closes the loop faster than replaying it silently.</strong> Voice journaling gives your brain the external "handled" signal that silent rumination never provides.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            It's 2am. You've replayed the same five minutes of a conversation for the fourth time tonight, each pass a little more distorted than the last. Your body is exhausted. Your eyes are burning. And your brain, for reasons that feel completely outside your control, will not let it go.
          </p>
          <p className="mt-4">
            If you've ever tried to talk yourself out of this — <em>stop thinking about it, it doesn't matter, go to sleep</em> — you already know it doesn't work. That's not a failure of discipline. It's a clue about what overthinking actually is: not a bad habit, but an unfinished process your brain refuses to file away until you give it a reason to.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-zeigarnik">
            <h2 id="section-zeigarnik" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why your brain won't let go of unfinished thoughts
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              In the 1920s, psychologist Bluma Zeigarnik noticed something odd while watching waiters in a Vienna café: they could recall complicated, unpaid orders in vivid detail, but forgot the details almost immediately once the bill was settled. She ran it as a formal experiment, and the pattern held — people remember interrupted, unfinished tasks far better than completed ones. Today it's known as the <strong className="text-text-primary font-semibold">Zeigarnik effect</strong>.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Your brain treats emotional loose ends the same way it treats an unpaid tab. An argument that ended without resolution, a decision you haven't made, a worry you haven't addressed — these stay active in memory precisely because they're incomplete. They resurface not to torment you, but because some part of your mind is still, quite literally, waiting for closure.
            </p>
            <p>
              This reframes the whole problem. Overthinking isn't your brain malfunctioning — it's your brain doing exactly what it's built to do with an open file. The question isn't how to force it to stop. It's how to actually close the file.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: the thought keeps coming back because it's unfinished, not because something is wrong with you. Closure — not suppression — is what turns it off.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-dmn">
            <h2 id="section-dmn" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Meet the default mode network: your brain's rumination engine
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              There's a specific set of brain regions that light up when you're not actively focused on a task — when you're in the shower, staring at the ceiling, or driving a familiar route on autopilot. Neuroscientists call this the <strong className="text-text-primary font-semibold">default mode network (DMN)</strong>, and it's responsible for mind-wandering, daydreaming, and self-referential thought — the running commentary about yourself and your life.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              In a widely cited 2010 study, Harvard researchers Matthew Killingsworth and Daniel Gilbert tracked thousands of people in real time and found that people spend nearly half their waking hours mind-wandering — and that wandering minds are, on average, unhappier minds, regardless of what they were wandering to. The DMN isn't inherently a problem. But in people prone to rumination, it can get stuck in a self-critical loop, replaying the same material without ever producing an answer.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "A human mind is a wandering mind, and a wandering mind is an unhappy mind."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Killingsworth & Gilbert, 2010, Science</cite>
            </blockquote>
            <p>
              Psychologist Susan Nolen-Hoeksema, who spent decades studying this pattern, called it <strong className="text-text-primary font-semibold">rumination</strong>: repetitive, passive dwelling on a problem without moving toward a solution. Her research found that people who ruminate recover more slowly from low mood than people who engage in active problem-solving — not because their problems are worse, but because looping isn't the same thing as processing.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: mind-wandering is normal. The trouble starts when the wandering turns into looping — thinking about a problem without ever getting closer to resolving it.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-suppression-backfires">
            <h2 id="section-suppression-backfires" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why "just stop thinking about it" makes things worse
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Here's the frustrating irony: telling yourself not to think about something usually makes you think about it more. This isn't just anecdotal — it's one of the more replicated findings in cognitive psychology, sometimes summarized as the "white bear problem," after an experiment in which people told to avoid thinking about a white bear for five minutes thought about it more than people given no instruction at all.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Suppression takes effort, and that effort is itself a kind of monitoring — to successfully avoid a thought, some part of your brain has to keep checking whether you're thinking about it, which means the thought never actually leaves. You end up spending energy maintaining the very loop you're trying to escape.
            </p>
            <p>
              This is why willpower-based advice — distract yourself, think positive, just let it go — so often fails for people who overthink. It's not that they're trying wrong. It's that suppression was never going to work in the first place. What actually interrupts a loop is giving it somewhere to go.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you can't out-willpower a thought loop. The way out isn't fighting the thought — it's giving it a place to land.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-completion-signal">
            <h2 id="section-completion-signal" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Giving your brain a completion signal it can actually register
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              If overthinking is your brain treating a thought as unfinished, then the fix has to involve something that convincingly says: <em>this has been handled</em>. Thinking about the problem again, silently, in the same loop that produced it, doesn't send that signal — nothing new has happened. The file looks exactly as open as it did the first time.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Speaking the thought out loud does something different. To turn a vague, circling worry into spoken language, your brain has to organize it — pick a starting point, name what's actually bothering you, and follow it somewhere. That act of structuring is itself a form of processing that silent replay can't offer. Ever notice how a problem that felt unsolvable in your head suddenly has an obvious next step the moment you say it to a friend? You didn't get new information. You got structure.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This is the same principle behind <strong className="text-text-primary font-semibold">affect labeling</strong> — the well-documented finding that putting feelings into words calms the brain's threat response. Voice journaling applies that mechanism directly to overthinking: you're not just naming an emotion, you're narrating a whole loop out into the open, where your brain can finally treat it as something that happened rather than something still happening.
            </p>
            <a
              href="/resources/science-of-reflection"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read more about the neuroscience of affect labeling</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: your brain doesn't need you to solve everything. It needs proof that the thought has been processed. Speaking it out loud is often the fastest way to provide that proof.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.48}>
          <section aria-labelledby="section-worry-time">
            <h2 id="section-worry-time" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Building a worry time practice that actually holds up
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              In the early 1980s, researcher Thomas Borkovec tested a deceptively simple intervention for chronic worriers: instead of trying to eliminate worry, schedule it. Set aside a specific 15-20 minute window each day — not right before bed — as dedicated <strong className="text-text-primary font-semibold">worry time</strong>. When an anxious thought shows up outside that window, you don't fight it or indulge it. You note it in a sentence and consciously postpone it: "I'll think about this at 6pm."
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The results were consistent: postponement reduced both how often people worried and how intense the worry felt, because it taught their nervous system something it didn't previously believe — that a concern would get addressed, just not right now. That "just not right now" is doing a lot of work. It gives the brain permission to stand down without demanding that the problem disappear entirely.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Voice journaling turns this into daily practice with less friction than writing. Throughout the day, you capture a worry the moment it surfaces — a 20-second voice note is enough. Then, during your scheduled window, you review each one and ask a single question: <em>is there an action I can take, or is this something I need to accept?</em> Some entries lead to a concrete next step. Others simply get marked as processed, which — per the Zeigarnik effect — is sometimes all a thought needed to stop resurfacing.
            </p>
            <p>
              Over a few weeks, most people notice something else: patterns. The same three or four worries recur in slightly different clothing. Once you can see that, the loop stops feeling infinite and starts feeling like a short, repeating playlist — which is a much easier thing to manage than an endless stream of "new" catastrophes.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you don't have to solve a worry the instant it appears. You just have to promise your brain, credibly, that it will get a turn.
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
                Frequently asked questions about overthinking and rumination
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
                onClick={() => navigate({ to: '/resources/emotional-awareness-patterns' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Mental Wellness &amp; Self-Discovery</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      Building emotional awareness: how pattern recognition transforms self-understanding
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover metacognitive awareness and how recognizing emotional patterns accelerates personal growth and self-understanding.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
              <button
                onClick={() => navigate({ to: '/resources/burnout-recovery-signs' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Stress &amp; Burnout Recovery</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      Burnout doesn't start in your job — it starts in your nervous system
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn the science of allostatic load and how a daily voice-journaled load check catches burnout before it becomes collapse.</p>
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
              Give the loop somewhere to go
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              You don't need to win the argument in your head at 2am. Say it out loud, let Vocolens help you name it, and give your brain the closure it's been asking for.
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
