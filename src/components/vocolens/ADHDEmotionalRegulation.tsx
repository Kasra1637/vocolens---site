import { AnimatedSection } from './AnimatedSection';
import { Zap, ArrowUpRight, Clock, ChevronRight, Circle as HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What is emotional dysregulation in ADHD?',
    answer: 'Emotional dysregulation in ADHD refers to difficulty managing the intensity, speed, and duration of emotional responses. Research published in the American Journal of Psychiatry (Shaw et al., 2014) identifies it as a core feature of ADHD — not a separate condition — linked to how the brain orients toward and processes emotional stimuli. For ADHD adults, this means feelings can arrive faster, hit harder, and take longer to settle than they would for a neurotypical brain, even though the underlying emotion itself is the same one everyone experiences.',
  },
  {
    question: 'What is Rejection Sensitive Dysphoria (RSD)?',
    answer: 'Rejection Sensitive Dysphoria is a term coined by Dr. William Dodson to describe the extreme emotional pain many ADHD adults feel in response to real or perceived rejection, criticism, or failure. It is not an official DSM diagnosis, but it is widely recognized clinically as a common ADHD experience. RSD can turn a minor comment into a spiraling sense of shame or anger within seconds, and because the reaction feels disproportionate, many ADHD adults learn to mask it — which only adds to the emotional load they are carrying.',
  },
  {
    question: 'Why is traditional journaling hard for people with ADHD?',
    answer: 'Written journaling requires task initiation, sustained attention, and handwriting or typing speed that often cannot keep pace with ADHD racing thoughts — three areas where executive function is already strained. By the time a thought is written down, the emotional moment that triggered it may have already faded or transformed into something else. This mismatch between thought speed and writing speed is one of the most common reasons ADHD adults abandon journaling habits within days.',
  },
  {
    question: 'How does voice journaling help ADHD emotional regulation?',
    answer: 'Voice journaling removes the writing bottleneck entirely — you speak at the speed your emotions actually move. Vocolens then applies AI emotion naming in real time, so a feeling that would normally spiral unnamed gets labeled the moment it is spoken. Over time, pattern tracking also reveals when emotional flooding tends to happen — after specific meetings, at certain times of day, after periods of masking — turning invisible cycles into a predictable, manageable pattern.',
  },
  {
    question: 'Is Vocolens designed specifically for ADHD?',
    answer: 'Vocolens was built by someone who lives with ADHD and Tourette Syndrome, specifically because traditional journaling never worked with a racing mind. Its voice-first design, 50-second minimum entries, self-correcting AI that learns your personal emotional vocabulary, and streak-free presence tracking are all shaped around ADHD needs — while remaining useful for anyone who wants faster, lower-friction emotional self-awareness.',
  },
];

export function ADHDEmotionalRegulation() {
  const navigate = useNavigate();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ADHD and Emotional Dysregulation: How Voice Journaling Helps ADHD Adults Manage Big Feelings",
    "alternativeHeadline": "Rejection Sensitive Dysphoria and ADHD: Why Feelings Hit Harder — And What Actually Helps",
    "description": "ADHD isn't just an attention disorder — up to 70% of ADHD adults struggle with emotional dysregulation and Rejection Sensitive Dysphoria. Discover how voice journaling captures fast-moving emotions, calms RSD spirals, and builds pattern awareness for ADHD brains.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-07-20",
    "dateModified": "2026-07-20",
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
      "@id": "https://vocolens.com/resources/adhd-emotional-regulation"
    },
    "articleSection": "ADHD & Neurodivergent Wellness",
    "keywords": "ADHD emotional dysregulation, rejection sensitive dysphoria, RSD, ADHD adults emotions, ADHD journaling, voice journaling ADHD, emotional flooding ADHD, ADHD executive dysfunction, ADHD mental health, Shaw emotion dysregulation study",
    "wordCount": 1350,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "ADHD", "description": "Attention-Deficit/Hyperactivity Disorder, a neurodevelopmental condition affecting attention, impulse control, and emotional regulation" },
      { "@type": "Thing", "name": "Rejection Sensitive Dysphoria", "description": "Extreme emotional pain in response to real or perceived rejection or criticism, common in ADHD adults" },
      { "@type": "Thing", "name": "Emotional dysregulation", "description": "Difficulty managing the intensity, speed, and duration of emotional responses" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "Emotion Dysregulation in Attention Deficit Hyperactivity Disorder", "author": { "@type": "Person", "name": "Philip Shaw" }, "datePublished": "2014", "url": "https://pubmed.ncbi.nlm.nih.gov/24480998/" }
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
        { "@type": "ListItem", "position": 3, "name": "ADHD and Emotional Dysregulation", "item": "https://vocolens.com/resources/adhd-emotional-regulation" }
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
              <span className="text-text-primary font-medium" itemProp="name">ADHD and Emotional Dysregulation</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                ADHD &amp; Neurodivergent Wellness
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>7 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-07-20" itemProp="datePublished">Jul 20, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            ADHD and Emotional Dysregulation: How Voice Journaling Helps ADHD Adults Manage Big Feelings
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            ADHD is often framed as an attention disorder, but for many adults the hardest part is <strong className="text-text-primary font-semibold">emotional dysregulation</strong> — feelings that hit fast, hit hard, and take a long time to settle. Discover how voice journaling captures big emotions in the moment, calms Rejection Sensitive Dysphoria spirals, and reveals the patterns behind them.
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
                <strong className="font-medium text-text-primary">Emotional dysregulation is core to ADHD.</strong> Research shows it affects the majority of ADHD adults and is a major driver of daily impairment — not a separate, secondary issue.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Rejection Sensitive Dysphoria intensifies emotional spikes.</strong> Naming the feeling the moment it happens interrupts the spiral before it takes over your day.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Speaking matches the speed of ADHD thought.</strong> Voice journaling removes the writing bottleneck so emotions get captured and labeled in real time, not lost to the next distraction.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            A comment in a meeting lingers for hours. A minor mistake feels like proof you are failing at everything. A wave of excitement gets mistaken — by you or by others — for anxiety or anger. For ADHD adults, emotions do not just arrive; they arrive fast, land hard, and often outstay their welcome. This is not a personality flaw or a lack of willpower. It is one of the most under-discussed parts of ADHD — and one of the most exhausting.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-core-feature">
            <h2 id="section-core-feature" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Emotional Dysregulation Is Core to ADHD — Not a Side Effect
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              For decades, ADHD was clinically framed almost entirely around attention and hyperactivity. But a landmark review by <strong className="text-text-primary font-semibold">Shaw, Stringaris, Nigg, and Leibenluft (2014)</strong>, published in the <em>American Journal of Psychiatry</em>, concluded that emotional dysregulation is prevalent across the ADHD lifespan and is a major contributor to functional impairment — implicating the same striato-amygdalo-prefrontal circuitry involved in attention and impulse control.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "Emotion dysregulation is prevalent in ADHD throughout the lifespan and is a major contributor to functional impairment."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Shaw et al., 2014, <span className="italic">American Journal of Psychiatry</span></cite>
            </blockquote>
            <p>
              In plain terms: the same brain networks that make it hard to filter distractions also make it hard to filter emotional intensity. A frustration that a neurotypical brain might register as a 3 out of 10 can register as an 8 for an ADHD brain — and once the emotion is that loud, it becomes almost impossible to think your way out of it in the moment.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/24480998/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Shaw et al. (2014) on emotion dysregulation in ADHD — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read the peer-reviewed research — PubMed</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-rsd">
            <h2 id="section-rsd" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Rejection Sensitive Dysphoria: When Feelings Become Overwhelming Fast
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Clinician William Dodson coined the term <strong className="text-text-primary font-semibold">Rejection Sensitive Dysphoria (RSD)</strong> to describe a pattern many ADHD adults recognize instantly: extreme emotional pain triggered by real or perceived rejection, criticism, teasing, or even the sense of falling short of your own expectations. RSD is not a formal DSM diagnosis, but it is one of the most consistently reported experiences in ADHD communities and clinical practice.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              What makes RSD so disruptive is its speed and disproportion. A neutral message from a coworker can spiral into an afternoon of rumination. Because the reaction feels bigger than the situation warrants, many ADHD adults learn to mask it — smiling through the sting, then processing the crash alone hours later, unlabeled and unresolved.
            </p>
            <p>
              The problem isn't the emotion itself — anger, shame, and hurt are universal human experiences. The problem is that without a fast way to name and externalize it, the feeling has nowhere to go except to loop, intensify, or get buried until it resurfaces as irritability or burnout.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-journaling-fails">
            <h2 id="section-journaling-fails" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why Traditional Journaling Fails ADHD Brains
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              "Just journal about it" is common advice — and one of the least ADHD-friendly suggestions available. Written journaling demands three things ADHD brains struggle with most: task initiation (opening the notebook or app at all), sustained attention (staying with one thought long enough to finish a sentence), and handwriting or typing speed that cannot keep pace with racing thoughts.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              By the time a feeling is written down, it has often already faded, morphed into something else, or been replaced by the next thought entirely. The blank page itself becomes another barrier — a small executive-function tax that is just large enough to make the habit collapse within days for many ADHD adults, no matter how much they want it to stick.
            </p>
            <p>
              This is not a discipline problem. It is a mismatch between the tool and the brain it is meant to serve.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-voice-journaling-adhd">
            <h2 id="section-voice-journaling-adhd" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              How Voice Journaling Helps ADHD Adults Catch and Name Big Feelings Fast
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Speaking is faster than writing for almost everyone — but for ADHD brains, it closes the gap between feeling and expression almost entirely. There is no blank page, no handwriting lag, no typing to keep up with. You just talk, the moment the feeling hits, and it's captured.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              With Vocolens, that captured moment gets AI emotion naming instantly — turning a vague, overwhelming wave into a specific word: frustration, shame, excitement, overstimulation. This matters because affect labeling (the same mechanism that calms the amygdala in general stress research) only works once the feeling has a name — and ADHD brains need that naming to happen fast, before the moment is lost to the next distraction.
            </p>
            <p>
              Just as importantly, Vocolens' self-correcting AI learns your personal emotional dialect over time. If you tell it "that's not anxiety — that's excitement for me," it remembers. Many ADHD adults describe their internal states as physiologically similar whether they are excited or anxious — the app adapts to that instead of forcing a generic label onto an experience that is genuinely different for your brain.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <section aria-labelledby="section-pattern-awareness-adhd">
            <h2 id="section-pattern-awareness-adhd" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Building Pattern Awareness: From Reactive to Proactive
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              ADHD brains are famously bad at real-time self-monitoring — noticing in the moment that stress is building is often impossible until it has already boiled over. This is where consistent voice journaling adds a second layer of value beyond in-the-moment naming: it builds a visible record of your emotional rhythms over time.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              A body-sensation heatmap that lights up in the same region every Tuesday and Thursday reveals which meetings or demands are quietly draining you. A time-of-day pattern showing repeated afternoon crashes flags decision fatigue before it becomes an evening meltdown. None of this requires you to consciously track anything — the pattern simply becomes visible after a few weeks of speaking naturally into the app.
            </p>
            <p>
              And because ADHD habits are famously hard to sustain, Vocolens replaces streaks with presence — no broken chains, no guilt for a missed day, just a low-friction habit (as short as 50 seconds) that is easy to return to whenever you need it.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.58}>
          <section aria-labelledby="section-faq" className="py-8 border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently Asked Questions About ADHD and Emotional Dysregulation
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

        <AnimatedSection animation="fade-in-up" delay={0.64}>
          <div className="py-8 border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-xl">Explore Related Articles</h3>
            <div className="space-y-4">
              <button
                onClick={() => navigate({ to: '/resources/autism-emotional-regulation' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Autism &amp; Neurodivergent Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      Autism and Emotional Regulation: How Voice Journaling Helps Autistic Adults Process Emotions
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn how voice journaling addresses alexithymia and helps autistic adults build emotional vocabulary without masking pressure.</p>
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
                      How Your Body Tells You Are Overwhelmed Before Your Mind Does
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn the neuroscience of interoception and how body-sensation mapping helps you catch overwhelm before it escalates.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.7}>
          <div className="bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              A journal that moves as fast as your mind
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              No blank page. No writing paralysis. Just speak — and let the AI catch your feelings before they spiral.
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
