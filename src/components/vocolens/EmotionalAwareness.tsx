import { ListenToArticle } from './ListenToArticle';
import { Target as Radar, ArrowUpRight, Clock, CaretRight, CaretRight as ChevronRight, Question as HelpCircle } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';
import { BackToTop } from './BackToTop';

const faqData = [
  {
    "question": "What is emotional awareness?",
    "answer": "Emotional awareness is recognizing and describing feelings in yourself and others. A tentative label can help you consider the context; it is not a diagnosis."
  },
  {
    "question": "How can I improve emotional awareness?",
    "answer": "Try a short check-in: notice a sensation, choose a possible emotion, record what happened, and consider what you need. Review several entries for recurring situations. This is a reflection exercise, not a treatment or a guaranteed timetable."
  },
  {
    "question": "What is an example of emotional awareness?",
    "answer": "After a meeting, you notice tense shoulders and an urge to withdraw. You consider whether you feel disappointed because you wanted your idea to be heard, rather than assuming others dislike you."
  },
  {
    "question": "Is awareness the same as regulation?",
    "answer": "No. Awareness means recognizing feelings; regulation concerns how you respond. Granularity is distinguishing similar feelings more precisely. You can notice anger and still need help choosing a response."
  },
  {
    "question": "What if I cannot identify my emotions?",
    "answer": "Start with sensations, energy, or pleasant versus unpleasant. Not knowing yet is valid. Persistent difficulty can be associated with alexithymia, but a journal cannot diagnose it. Seek qualified support if distress interferes with daily life."
  }
];

export function EmotionalAwareness() {

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Emotional Awareness: What It Is and How to Improve It",
            "description": "Learn what emotional awareness means, see everyday examples, and try a simple emotion-and-trigger journal to recognize feelings and patterns.",
            "image": "https://vocolens.com/vocolens-logo.png",
            "datePublished": "2026-03-30",
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
              "@id": "https://vocolens.com/resources/emotional-awareness-patterns"
            },
            "articleSection": "Mental Wellness & Self-Discovery",
            "keywords": "emotional awareness, pattern recognition, metacognition, self-awareness, voice journaling, emotional intelligence, behavioral patterns, trigger identification, personal growth, reflective practice",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" },
                { "@type": "ListItem", "position": 3, "name": "Emotional Awareness", "item": "https://vocolens.com/resources/emotional-awareness-patterns" }
              ]
            }
          })
        }}
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
              <span className="text-text-primary font-medium" itemProp="name">Emotional Awareness</span>
              <meta itemProp="item" content="https://vocolens.com/resources/emotional-awareness-patterns" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay" aria-hidden="true">
              <Radar className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full" itemProp="articleSection">
                Mental Wellness &amp; Self-Discovery
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}
          >
            Emotional Awareness: What It Is and How to Improve It
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">Learn what emotional awareness means, see everyday examples, and try a simple emotion-and-trigger journal to recognize feelings and patterns.</p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              4 min read
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-03-30" itemProp="datePublished">March 30, 2026</time>
              <span>Updated <time dateTime="2026-10-06" itemProp="dateModified">Oct 6, 2026</time></span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="emotional-awareness-patterns" />

          <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">Key takeaways</p>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">Awareness starts with noticing feelings, not forcing yourself to feel differently.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">A record of situation, sensation, emotion, and need makes reflection concrete.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">Repeated entries may reveal patterns; they do not prove causes or diagnose conditions.</div>
              </li>
            </ul>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose" itemProp="articleBody" id="article-root">

        <div><p>You do not need the perfect emotion word or an app to begin. Start by noticing what changed, then consider what the feeling might tell you about the situation. A tentative label is enough.</p></div>

        <div><section aria-labelledby="section-metacognition">
<h2 id="section-metacognition" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">What is emotional awareness?</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Emotional awareness is the ability to recognize and describe emotions in yourself and others. It means noticing what is happening before deciding how to respond. Awareness is different from control: recognizing anger does not make it disappear.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Lane and Smith's 2021 review describes emotional awareness as a socio-emotional skill and summarizes evidence linking it with emotion regulation and social functioning. This does not establish that a particular journaling app improves those outcomes. The exercises below are reflection suggestions, not a treatment protocol.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8395748/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Read Lane and Smith's review of emotional awareness (2021)</a>.</p>
</section></div>

        <div><section aria-labelledby="section-expressive-writing">
<h2 id="section-expressive-writing" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">Everyday examples of emotional awareness</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">After receiving brief feedback, you notice a hot face and an urge to defend yourself. "I feel embarrassed and uncertain" separates the emotion from the assumption that the other person dislikes you.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Before a busy afternoon, a tight stomach could accompany anxiety, hunger, or both. Body signals are clues, not an emotion detector. After good news, you may feel excited and apprehensive at once; awareness can hold both.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">If words are hard to find, begin with "unpleasant and activated." Our guide to <Link to="/resources/alexithymia-emotional-vocabulary" className="text-primary font-semibold hover:underline">difficulty identifying emotions and alexithymia</Link> explores this experience without requiring a label up front.</p>
</section></div>

        <div><section aria-labelledby="section-pattern-recognition">
<h2 id="section-pattern-recognition" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">How to improve emotional awareness: a short check-in</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Try this when you have space to reflect. Stop if focusing inward makes distress worse. Write, speak, or make a few notes; choose whichever format is easiest for you.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><strong>1. Notice:</strong> What sensation or change in energy do I observe? "My shoulders are tense."</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><strong>2. Name:</strong> What emotion might fit? "Possibly anxious or disappointed." Putting a feeling into words is called <Link to="/resources/science-of-reflection" className="text-primary font-semibold hover:underline">affect labeling</Link>.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><strong>3. Locate the context:</strong> What happened just before this? Separate the event from your interpretation.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed"><strong>4. Choose a next step:</strong> Do I need rest, information, a boundary, or a conversation? A feeling is information, not an instruction.</p>
</section></div>

        <div><section aria-labelledby="section-emotional-triggers">
<h2 id="section-emotional-triggers" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">An emotion-and-trigger journal you can reuse</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Use this template: Situation | Body sensation | Possible emotion | Intensity in my own words | Need or next step. Example: "Meeting ended without feedback | tight chest | uncertain and disappointed | noticeable but manageable | ask for clarification tomorrow."</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">After several entries, look for repeated contexts: rushed mornings, missed meals, specific conversations, or overstimulation. Include exceptions too. If a situation sometimes feels easy, what was different? A small journal sample cannot prove causation.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Keep records private and avoid recording others without consent. In Vocolens, voice entries and emotion views can support reflection; suggested labels still need your judgment. You can use the same exercise on paper, without AI.</p>
</section></div>

        <div><section aria-labelledby="section-accelerating-growth">
<h2 id="section-accelerating-growth" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">Awareness, naming, and granularity are different skills</h2>
<p className="mb-4 text-base lg:text-lg leading-relaxed">Awareness asks "What am I noticing?" Affect labeling adds "What word might fit?" <Link to="/resources/emotional-granularity" className="text-primary font-semibold hover:underline">Emotional granularity</Link> asks "Is disappointed more accurate than upset?" You can practice each without demanding certainty.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">There is no universal timetable for improvement. A brief check-in may be more sustainable than a long analysis. If reviewing entries becomes repetitive self-criticism, pause rather than treating more journaling as automatically better.</p>
<p className="mb-4 text-base lg:text-lg leading-relaxed">This guide is educational, not diagnostic or medical advice. If feelings are overwhelming, persistent, or disrupting daily life, consider a qualified mental-health professional. Reflection can complement support; it does not replace it.</p>
</section></div>

        <div>
          <section data-listen-exclude aria-labelledby="section-faq" className="border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <HelpCircle className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently asked questions about emotional awareness and pattern recognition
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
                to="/resources/science-of-reflection"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Neuroscience & Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">Affect Labeling: How to Name Your Emotions</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Explore research, practical examples, and the limits of claims about naming emotions.</p>
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
                to="/resources/adhd-time-blindness"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">ADHD & Time Perception</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">ADHD Time Blindness: Examples and Practical Time Supports</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn what ADHD time blindness means, recognize everyday examples, and try visible timers, task estimates, and transition cues without blaming yourself.</p>
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
              Stop guessing why
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed max-w-[547px] mx-auto lg:max-w-[720px]">
              Stop guessing. Vocolens turns your voice into clarity you can grow from.
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

