import { ListenToArticle } from './ListenToArticle';
import { Brain, ArrowUpRight, Clock, CaretRight, CaretRight as ChevronRight, Question as HelpCircle } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';
import { BackToTop } from './BackToTop';

const faqData = [
  {
    "question": "What is affect labeling?",
    "answer": "Affect labeling is putting an emotion into words. An example is saying \"I feel nervous about this conversation\" rather than simply \"I feel bad.\""
  },
  {
    "question": "Does naming emotions reduce stress?",
    "answer": "Research suggests labeling can change responses to emotional stimuli in some settings. The cited 2007 imaging study found diminished amygdala responses to negative emotional images relative to other encoding tasks. This is not guaranteed felt relief or evidence of an app treatment effect."
  },
  {
    "question": "How do I practice affect labeling?",
    "answer": "Pause somewhere safe, notice a sensation and the situation, and choose a tentative word. Say or write \"I feel [emotion] about [situation].\" Check whether it fits, then choose a practical next step. Stop if this increases distress."
  },
  {
    "question": "Is voice journaling better than writing?",
    "answer": "Neither is established here as universally better. Speaking may be easier for some people; writing may feel more private for others. The cited imaging study did not compare Vocolens with written journaling."
  },
  {
    "question": "Is labeling the same as emotional granularity?",
    "answer": "No. Labeling is naming an emotion; granularity is how precisely you distinguish feelings. A broad label can be a starting point. Greater precision is useful only if the word fits your experience."
  }
];

export function ScienceOfReflection() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Affect Labeling: How to Name Your Emotions",
        "description": "Learn what affect labeling is, what research shows about naming emotions, and how to try a short check-in without promises of guaranteed stress relief.",
    "image": "https://vocolens.com/vocolens-logo.png",
    "datePublished": "2026-02-28",
    "dateModified": "2026-10-06",
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
      "@id": "https://vocolens.com/resources/science-of-reflection"
    },
    "articleSection": "Neuroscience & Mental Wellness",
    "keywords": "affect labeling, emotion labeling, voice journaling, stress relief, emotional resilience, amygdala, mental wellness, daily journaling, anxiety journaling, worry loop, emotional regulation, Lieberman study",
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Affect labeling", "description": "Putting an emotion into words" },
      { "@type": "Thing", "name": "Emotional resilience", "description": "The ability to recover from and adapt to stress and adversity" },
      { "@type": "Thing", "name": "Voice journaling", "description": "Recording spoken reflections to build self-awareness and emotional clarity" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "Putting Feelings Into Words", "author": { "@type": "Person", "name": "Matthew D. Lieberman" }, "datePublished": "2007", "url": "https://pubmed.ncbi.nlm.nih.gov/17576282/" }
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
        { "@type": "ListItem", "position": 3, "name": "Affect Labeling", "item": "https://vocolens.com/resources/science-of-reflection" }
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
              <span className="text-text-primary font-medium" itemProp="name">Affect Labeling</span>
              <meta itemProp="item" content="https://vocolens.com/resources/science-of-reflection" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay" aria-hidden="true">
              <Brain className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full" itemProp="articleSection">
                Neuroscience &amp; Mental Wellness
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}
          >
            Affect Labeling: How to Name Your Emotions
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">Learn what affect labeling is, what research shows about naming emotions, and how to try a short check-in without promises of guaranteed stress relief.</p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              <span>4 min read</span>
              <span aria-hidden="true" className="mx-1">·</span>
              <time dateTime="2026-02-28" itemProp="datePublished">Feb 28, 2026</time>
              <span className="ml-2">Updated <time dateTime="2026-10-06" itemProp="dateModified">Oct 6, 2026</time></span>
            </span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="science-of-reflection" />

          <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">Key takeaways</p>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">Affect labeling means putting an emotion into words; tentative labels are a starting point.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">Laboratory findings suggest a mechanism, not guaranteed stress relief or a fixed percentage benefit.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">Naming feelings can support reflection, but does not replace action or professional care.</div>
              </li>
            </ul>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose" itemProp="articleBody" id="article-root">

        <div><p>Naming a feeling can give you a clearer starting point for reflection without requiring you to argue with it or pretend it has gone away. Here is what the evidence supports, where its limits are, and how to try a brief check-in.</p></div>

        <div><section aria-labelledby="section-neuroscience">
<h2 id="section-neuroscience" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">What is affect labeling, and what does research show?</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Affect labeling means putting an emotion into words, whether it is your own feeling or an emotion you perceive in someone else. "I feel nervous before this call" is a label; "everything will go wrong" is a prediction.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">In a 2007 functional MRI study, Lieberman and colleagues found that labeling affective stimuli diminished amygdala responses to negative emotional images relative to other encoding tasks. Labeling also increased activity in the right ventrolateral prefrontal cortex. The authors suggested a possible pathway through which labeling may diminish emotional reactivity.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">An imaging result is not the same as feeling calmer in everyday life. The study did not test Vocolens, establish a universal percentage reduction, or demonstrate long-term brain changes from app use. Research about a mechanism should not be presented as a clinical result for a product.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><a href="https://pubmed.ncbi.nlm.nih.gov/17576282/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Read Lieberman and colleagues: Putting Feelings Into Words (2007)</a>.</p>
</section></div>

        <div><section aria-labelledby="section-vocolens-approach">
<h2 id="section-vocolens-approach" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">Affect labeling examples: feelings are not predictions</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Before a presentation: "I feel anxious about being evaluated." After a cancelled plan: "I feel disappointed and a little relieved." During conflict: "I feel angry, and I want to be heard." These labels name an experience without claiming to know another person's intentions.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Compare "I feel ignored" with "I feel hurt because I interpreted the silence as rejection." The second separates a feeling from a possible explanation. You may later learn that the other person was busy; the hurt was still real.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">If identifying a feeling is difficult, start with a sensation or broad word. Our <Link to="/resources/alexithymia-emotional-vocabulary" className="text-primary font-semibold hover:underline">alexithymia and emotional vocabulary guide</Link> discusses difficulty finding words. There is no need to force a precise label.</p>
</section></div>

        <div><section aria-labelledby="section-worry-loops">
<h2 id="section-worry-loops" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">How to practice affect labeling in a brief check-in</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Pause somewhere safe. Notice a body sensation and the immediate context. Choose a possible emotion, then say or write: "I feel [emotion] about [situation]." Add "maybe" if you are unsure. This is a suggested everyday exercise, not the exact laboratory task used in the imaging study.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">For example: "My stomach is tight. I may be apprehensive about tomorrow's appointment." Check whether the word fits instead of repeating it until it produces a desired result. You can change your mind, use two words, or leave the feeling unnamed.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Choose one next step: ask a question, prepare what you need, take a break, or contact someone supportive. Naming alone cannot resolve every source of distress. If you keep analysing the same worry without gaining useful information, pause; our <Link to="/resources/overthinking-rumination" className="text-primary font-semibold hover:underline">guide to overthinking and rumination</Link> explores that distinction.</p>
</section></div>

        <div><section aria-labelledby="section-structured-review">
<h2 id="section-structured-review" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">Naming emotions, emotional awareness, and granularity</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><Link to="/resources/emotional-awareness-patterns" className="text-primary font-semibold hover:underline">Emotional awareness</Link> is noticing and understanding feelings. Affect labeling is putting a word to them. <Link to="/resources/emotional-granularity" className="text-primary font-semibold hover:underline">Emotional granularity</Link> is distinguishing closely related feelings: disappointed, lonely, or resentful instead of only "bad."</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Voice journaling is one possible format, not a superior treatment established by the cited study. In Vocolens, suggested emotion labels can be reviewed and corrected. Treat them as candidates, not diagnoses or authoritative readings of your mind. Paper or a private note can work too.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">There is no established timetable here for building resilience, and no promise that daily use will rewire your brain. Stop if the exercise increases distress. Persistent or severe distress deserves qualified support. This article is educational and is not medical advice.</p>
</section></div>

        <div>
          <section data-listen-exclude aria-labelledby="section-faq" className="border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <HelpCircle className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently asked questions about affect labeling
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Mental Wellness & Self-Discovery</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">Emotional Awareness: What It Is and How to Improve It</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn to notice feelings and use a short emotion-and-trigger check-in.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/distress-detection"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Body Awareness & Distress Detection</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">Physical Signs of Overwhelm: Body Awareness Without Guessing</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn what interoception means, explore physical signs that can accompany overwhelm, and try a gentle check-in without treating sensations as diagnoses.</p>
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Anxiety & Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">Overthinking and Rumination: How to Recognize the Loop</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Understand rumination versus useful reflection, see examples of repetitive worry, and try a practical next-step check without promises of instant relief.</p>
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
              Name it to ease it
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed max-w-[547px] mx-auto lg:max-w-[720px]">
              Turn your thoughts into clarity, calm, and patterns you can make sense of.
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

