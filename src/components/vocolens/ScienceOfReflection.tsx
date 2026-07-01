import { AnimatedSection } from './AnimatedSection';
import { Brain, ArrowUpRight, Clock, ChevronRight, Circle as HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What is affect labeling and how does it reduce stress?',
    answer: 'Affect labeling is the neuroscience-backed practice of putting your emotions into specific words. Research by Lieberman et al. (2007) demonstrated that simply naming what you feel — such as saying "I feel anxious about being judged" instead of just "I feel bad" — measurably reduces activity in the amygdala, the brain\'s threat-detection center. This dampens the fight-or-flight response and produces genuine emotional regulation, not just suppression.',
  },
  {
    question: 'How does voice journaling help with anxiety and worry loops?',
    answer: 'Voice journaling breaks anxiety loops through two mechanisms. First, speaking your worries externalizes them — your brain registers them as "stored" rather than requiring active processing. Second, scheduling a daily worry time (5-10 minutes) with voice journaling prevents rumination from hijacking your day. You capture anxious thoughts as they arise, then review them during your designated time, asking whether action is possible or acceptance is needed.',
  },
  {
    question: 'Is voice journaling more effective than written journaling for emotional health?',
    answer: 'Voice journaling engages additional neural pathways beyond what writing activates. Speaking your emotions involves auditory, motor, and linguistic processing simultaneously, creating stronger memory traces and deeper emotional insight. While both forms of journaling have proven benefits, voice journaling removes the friction barrier that stops many people from maintaining a consistent practice — you can journal anywhere, anytime, without needing to sit down and write.',
  },
  {
    question: 'How long does it take to build emotional resilience through journaling?',
    answer: 'Research suggests that consistent daily journaling produces measurable changes in emotional regulation within 2-4 weeks. The amygdala response begins shifting after just a few sessions of affect labeling. Long-term resilience — the ability to recover faster from setbacks and adapt more gracefully — develops over months of consistent practice as neural pathways strengthen through repeated use.',
  },
  {
    question: 'What does the neuroscience say about naming emotions?',
    answer: 'The key finding from Lieberman\'s 2007 study published in Psychological Science is that affect labeling produces a lasting dampening of the amygdala\'s emotional response. A 2011 follow-up study confirmed these results. The prefrontal cortex — responsible for rational thinking and self-regulation — becomes more active when you name emotions, effectively giving your brain the language it needs to process experiences rather than simply react to them.',
  },
];

export function ScienceOfReflection() {
  const navigate = useNavigate();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Naming Your Emotions with Voice Journaling Reduces Stress and Builds Emotional Resilience",
    "alternativeHeadline": "The Neuroscience of Affect Labeling: Why Voice Journaling Calms Your Brain",
    "description": "Neuroscience research by Lieberman (2007) proves that labeling emotions (affect labeling) reduces amygdala activity and calms the nervous system. Discover how daily voice journaling with Vocolens uses this science to reduce anxiety and build lasting emotional resilience.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-02-28",
    "dateModified": "2026-03-30",
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
    "wordCount": 1200,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Affect labeling", "description": "The neuroscience practice of naming emotions to reduce amygdala activity" },
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
        { "@type": "ListItem", "position": 3, "name": "How Naming Emotions Reduces Stress", "item": "https://vocolens.com/resources/science-of-reflection" }
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
              <span className="text-text-primary font-medium" itemProp="name">How Naming Emotions Reduces Stress</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Neuroscience &amp; Mental Wellness
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>5 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-02-28" itemProp="datePublished">Feb 28, 2026</time>
                <span aria-hidden="true" className="mx-1">·</span>
                <span>Updated <time dateTime="2026-03-30" itemProp="dateModified">Mar 30, 2026</time></span>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            How Naming Your Emotions with Voice Journaling Reduces Stress and Builds Emotional Resilience
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Neuroscience research proves that putting emotions into specific words — a process called <strong className="text-text-primary font-semibold">affect labeling</strong> — reduces amygdala activity and calms your nervous system. Learn how daily voice journaling applies this science to help you break free from worry loops and build lasting resilience.
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
                <strong className="font-medium text-text-primary">Affect labeling reduces amygdala activity.</strong> Naming emotions measurably calms the brain's stress response, producing genuine regulation — not suppression.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Scheduled worry time prevents rumination.</strong> A daily 5-10 minute voice journaling slot stops anxious thoughts from hijacking your entire day.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Consistent practice rewires neural pathways.</strong> Daily voice journaling with Vocolens builds long-term emotional resilience through repeated prefrontal cortex engagement.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            In a world full of constant demands, emotional overwhelm is becoming the norm. Most of us feel our emotions deeply — but few of us have been taught to name them with precision. That gap between feeling and labeling turns out to be one of the most powerful levers for mental wellness and stress relief.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-neuroscience">
            <h2 id="section-neuroscience" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The Neuroscience of Emotion Labeling: How Affect Labeling Reduces Stress
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Scientific studies by <strong className="text-text-primary font-semibold">Lieberman et al. (2007)</strong> and a 2011 follow-up demonstrated that simply putting feelings into words — a process called <strong className="text-text-primary font-semibold">affect labeling</strong> — reduces activity in the amygdala, the brain's alarm center. Less amygdala activation means a calmer nervous system and a more measured emotional response.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "Putting feelings into words produces a lasting dampening of emotional response — not just suppression, but genuine regulation."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Lieberman et al., 2007, <span className="italic">Psychological Science</span></cite>
            </blockquote>
            <p className="mb-4 text-base leading-relaxed">
              This isn't about toxic positivity or ignoring hard emotions. It's about giving your brain the language it needs to process what you're experiencing — and in doing so, creating real neurological relief. The prefrontal cortex — responsible for rational thinking and self-regulation — becomes more active when you name emotions, effectively bridging the gap between reactive feeling and deliberate understanding.
            </p>
            <p>
              The implication for daily life is significant: every time you pause to name what you're feeling with specificity ("overwhelmed by uncertainty" rather than just "stressed"), you engage your brain's regulatory systems and reduce the intensity of the emotional response.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17576282/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read the full Lieberman (2007) study on affect labeling and amygdala reduction — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read the peer-reviewed research — PubMed</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-vocolens-approach">
            <h2 id="section-vocolens-approach" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              How Voice Journaling Applies Affect Labeling Science to Daily Life
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              With Vocolens, you don't just record — you harness this neurological power every time you speak. The app prompts you to go beyond surface-level descriptions and precisely name what you're feeling: not just "stressed," but "overwhelmed by uncertainty," or "anxious about being judged."
            </p>
            <p className="mb-4 text-base leading-relaxed">
              By precisely naming your feelings, distancing yourself from them through voice, and grounding in the physical sensations behind each emotion, you create mental space between stimulus and response. Over time, this daily voice journaling practice reduces baseline stress levels and fosters genuine resilience — the ability to recover faster and adapt more gracefully.
            </p>
            <p>
              Voice journaling is uniquely effective for this because speaking engages multiple neural pathways simultaneously — auditory, motor, and linguistic processing — creating stronger memory traces and deeper emotional regulation than silent reflection alone.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-worry-loops">
            <h2 id="section-worry-loops" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Breaking Anxiety Worry Loops with Structured Voice Journaling
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              In today's fast-paced world, our minds often get trapped in endless loops of worry. Instead of fighting intrusive thoughts — which research shows often makes them stronger — voice journaling helps you give your brain what it truly needs: a sense of control and completion.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The approach is structured and evidence-informed. First, you set a specific <strong className="text-text-primary font-semibold">worry time</strong> each day — a 5-10 minute slot when you have mental energy, just not right before bed. As anxious thoughts arise throughout the day, Vocolens captures each concern in a dedicated voice entry. This act of recording creates a sense of containment: your brain knows the worry is stored somewhere safe, releasing it from active processing.
            </p>
            <p>
              During your scheduled worry time, you review each captured thought and ask: <em>Is there an action I can take now, or can I accept this uncertainty?</em> By anchoring your attention in this structured way, you prevent rumination from hijacking your entire day. The combination of voice externalization and scheduled review directly targets the cognitive loops that sustain anxiety.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-structured-review">
            <h2 id="section-structured-review" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Pattern Awareness and Building Long-Term Emotional Resilience
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              The power of consistent voice journaling extends beyond individual sessions. Over time, you see patterns emerge — helping you identify when certain worries spike, which contexts trigger them, and how long they typically last. That pattern awareness is itself transformative, because you shift from reacting to individual emotional events to understanding the architecture of your emotional life.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              For long-standing thought loops, pairing voice journaling with a counter-narrative practice — recording evidence that directly challenges your negative beliefs — further accelerates resilience building. What we focus on expands, so by using voice journaling daily, you actively condition your mind toward strength rather than anxiety.
            </p>
            <p>
              This is the bridge between short-term stress relief and long-term emotional resilience. Single sessions of affect labeling calm the amygdala; sustained practice rewires neural pathways, strengthening prefrontal regulation and building your capacity to navigate difficulty with greater composure.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.48}>
          <section aria-labelledby="section-faq" className="py-8 border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently Asked Questions About Voice Journaling and Stress Relief
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

        <AnimatedSection animation="fade-in-up" delay={0.52}>
          <div className="py-8 border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-xl">Explore Related Articles</h3>
            <div className="space-y-4">
              <button
                onClick={() => navigate({ to: '/resources/emotional-awareness-patterns' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Mental Wellness & Self-Discovery</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      Building Emotional Awareness: How Pattern Recognition Transforms Self-Understanding
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover metacognitive awareness and how recognizing emotional patterns accelerates personal growth and self-understanding.</p>
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
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Body Awareness & Distress Detection</p>
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

        <AnimatedSection animation="fade-in-up" delay={0.56}>
          <div className="bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              Sleep better. Worry less. Think clearer
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              People who reflect daily report less anxiety, better sleep, and sharper decisions. Your voice is the fastest way in.
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
