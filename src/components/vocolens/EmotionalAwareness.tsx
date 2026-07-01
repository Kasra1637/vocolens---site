import { AnimatedSection } from './AnimatedSection';
import { Radar, ArrowUpRight, Clock, ChevronRight, Circle as HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What is metacognitive awareness and why does it matter for emotional health?',
    answer: 'Metacognitive awareness is the ability to observe and reflect on your own thoughts and emotions — essentially thinking about your thinking. Research shows it directly enhances emotional regulation capacity because it creates psychological distance between you and your reactions. Instead of being swept away by emotion, you develop the ability to notice patterns, question automatic responses, and choose how to act rather than simply reacting.',
  },
  {
    question: 'How does pattern recognition in voice journaling improve emotional intelligence?',
    answer: 'When you journal consistently over days and weeks, isolated emotional reactions stop appearing random. Pattern recognition reveals that specific situations, people, or times of day reliably trigger certain emotions. This transforms vague feelings into structured self-knowledge — you understand not just what you feel, but when, why, and under what conditions. That clarity is the foundation of emotional intelligence and intentional behavior change.',
  },
  {
    question: 'How long does it take to start noticing emotional patterns through journaling?',
    answer: 'Most people begin noticing surface-level patterns within 1-2 weeks of daily voice journaling — such as mood dips on certain days or recurring frustrations after specific interactions. Deeper patterns involving triggers, behavioral cycles, and emotional cause-and-effect typically crystallize after 4-6 weeks of consistent practice. The key is frequency and honesty, not session length.',
  },
  {
    question: 'What is the difference between emotional awareness and emotional suppression?',
    answer: 'Emotional suppression means pushing feelings away or pretending they don\'t exist — which research shows increases physiological stress and reduces well-being over time. Emotional awareness is the opposite: deliberately noticing, naming, and understanding your emotions without judgment. Awareness doesn\'t mean dwelling on negativity — it means giving your brain the information it needs to regulate effectively, which produces genuine calm rather than surface-level avoidance.',
  },
  {
    question: 'Can voice journaling replace therapy for building self-awareness?',
    answer: 'Voice journaling is a powerful self-awareness practice, but it serves a different function than therapy. It excels at daily pattern tracking, emotional processing, and metacognitive skill-building — work that actually accelerates therapeutic progress. Many therapists recommend journaling between sessions precisely because the self-knowledge it generates makes therapy more focused and productive. Think of voice journaling as the daily practice and therapy as the guided interpretation.',
  },
];

export function EmotionalAwareness() {
  const navigate = useNavigate();

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Building Emotional Awareness: How Pattern Recognition in Voice Journaling Transforms Self-Understanding",
            "description": "Discover how metacognitive awareness and pattern recognition through daily voice journaling rewire your brain for emotional intelligence. Research-backed insights on how Vocolens helps you identify emotional triggers, behavioral patterns, and accelerate personal growth.",
            "image": "https://vocolens.com/vocolens_-_preview.png",
            "datePublished": "2026-03-30",
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
              "@id": "https://vocolens.com/resources/emotional-awareness-patterns"
            },
            "articleSection": "Mental Wellness & Self-Discovery",
            "keywords": "emotional awareness, pattern recognition, metacognition, self-awareness, voice journaling, emotional intelligence, behavioral patterns, trigger identification, personal growth, reflective practice",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" },
                { "@type": "ListItem", "position": 3, "name": "Building Emotional Awareness Through Pattern Recognition", "item": "https://vocolens.com/resources/emotional-awareness-patterns" }
              ]
            }
          })
        }}
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
              <span className="text-text-primary font-medium" itemProp="name">Building Emotional Awareness</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Radar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Mental Wellness &amp; Self-Discovery
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                6 min read
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            Building Emotional Awareness: How Pattern Recognition in Voice Journaling Transforms Self-Understanding
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-03-30" itemProp="datePublished">March 30, 2026</time>
          </div>
          <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6" />

          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
            <p className="font-semibold text-primary mb-2 uppercase tracking-wide text-base leading-relaxed">Key takeaways</p>
            <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Metacognitive awareness—thinking about your thinking—is the foundation of emotional intelligence and accelerates personal growth.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Pattern recognition through voice journaling reveals hidden emotional triggers and behavioral cycles you can't see alone.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Consistent reflective practice rewires neural pathways, strengthening prefrontal regions and enhancing emotional regulation capacity.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            You experience the same emotional trigger again. Your anxiety spikes in certain situations. A particular conversation pattern leaves you frustrated every time. Yet each moment feels isolated, disconnected from the pattern beneath it. That's the gap where self-awareness lives—and where the most profound personal transformation becomes possible.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-metacognition">
            <h2 id="section-metacognition" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The Power of Metacognitive Awareness: Thinking About Your Thinking
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Metacognition—the ability to observe and reflect on your own thoughts and emotions—is one of the most powerful tools for personal growth. Unlike simple thinking, which is automatic and reactive, metacognitive awareness gives you the psychological distance needed to understand <em>why</em> you think and feel the way you do.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Research on metacognitive awareness demonstrates that individuals who regularly engage in reflective practice show significantly enhanced emotional regulation abilities. A study on metacognitive awareness and emotional development found that improving metacognitive awareness through structured reflection directly enhances emotional regulation capacity and concentration, with effects that persist over time.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "The faculty to observe one's own thoughts is a fundamental human capacity, yet most of us go through life without fully developing it. Metacognitive awareness is where genuine change begins."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Research on Metacognitive Awareness in Emotional Regulation</cite>
            </blockquote>
            <p>
              When you pause to reflect on an emotional reaction—to ask yourself <em>why</em> you responded that way—you activate prefrontal regions involved in self-awareness and emotional insight. Over time, this practice literally rewires your brain, strengthening the neural pathways that support emotional intelligence.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-expressive-writing">
            <h2 id="section-expressive-writing" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Expressive Disclosure: Why Speaking Your Emotions Unlocks Insight
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Talking through your experiences isn't just emotionally cathartic—it's neurologically transformative. Research by Pennebaker and Beall (1986) showed that expressive writing about emotional experiences leads to measurable gains in clarity and insight into emotional patterns. Later meta-analyses by Frattaroli (2006) examining 146 studies confirmed that expressive disclosure produces lasting improvements in psychological health outcomes.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              What makes voice journaling uniquely powerful is that speaking engages different neural pathways than writing. When you articulate your emotions aloud, you're encoding them through multiple sensory channels—auditory, motor, and linguistic—creating stronger memory traces and deeper insight. This is why a 10-minute voice journal can sometimes unlock clarity that writing alone might take much longer to achieve.
            </p>
            <p>
              The mechanism is straightforward: as you externalize your thoughts through voice, your prefrontal cortex becomes engaged in organizing and narrating your experience. This process itself is therapeutic—your brain gains perspective simply by putting feelings into words.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17073523/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read the Frattaroli (2006) meta-analysis on experimental disclosure and its health effects — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read the meta-analysis: Experimental Disclosure and Its Moderators — PubMed</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-pattern-recognition">
            <h2 id="section-pattern-recognition" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              From Single Moments to Patterns: The Real Power of Voice Journaling
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              An isolated emotional reaction is just data. But when you journal consistently, something remarkable happens: patterns emerge. You notice that frustration tends to spike on Monday mornings. Anxiety about judgment clusters around social situations. Energy crashes after intense focus periods.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This is where pattern recognition—one of the highest-level cognitive functions—transforms self-awareness into actionable insight. By reviewing your voice journals over weeks and months, you start to see the architecture of your emotional life. Triggers become visible. Behavioral cycles crystallize. You understand not just <em>what</em> you're feeling, but <em>when</em>, <em>why</em>, and <em>under what conditions</em>.
            </p>
            <p>
              Vocolens' emotion tracking and pattern visualization features are specifically designed to support this. As you capture emotions, environmental contexts, and intensity levels in your voice entries, the app helps you recognize recurring patterns—transforming raw experience into structured self-knowledge. This is the gateway to intentional change.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-emotional-triggers">
            <h2 id="section-emotional-triggers" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Identifying Your Emotional Triggers: The Foundation of Self-Regulation
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              You can't regulate an emotional response you don't understand. The first step to genuine emotional control is precise trigger identification—and voice journaling accelerates this process dramatically.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              When you pause to voice journal immediately after an emotional spike, you capture the full context: what happened beforehand, what you were thinking, what your body felt like. Over time, patterns emerge. You realize that criticism from authority figures triggers shame. Uncertainty about the future activates anxiety. Feeling unheard in relationships activates frustration.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Once a trigger is identified and named, your nervous system begins to respond differently to it. There's research showing that simply labeling an emotional trigger reduces its automatic power—the same affect labeling mechanism that names emotions also works for understanding the conditions that activate them. This knowledge becomes your leverage point for change.
            </p>
            <p>
              In Vocolens, you can tag entries with trigger information, review them over time, and watch patterns crystallize. What felt random and overwhelming becomes comprehensible and manageable.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <section aria-labelledby="section-accelerating-growth">
            <h2 id="section-accelerating-growth" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Accelerating Personal Growth Through Reflective Insight
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              The research is clear: individuals who engage in regular reflective practice—pausing to think about their experiences, emotions, and reactions—progress faster in therapy, coaching, and personal development than those who don't. Why? Because reflection bridges the gap between experience and learning.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Without reflection, you repeat the same patterns. With consistent voice journaling, each experience becomes an opportunity for insight. You're not just living your life—you're learning from it. Over months and years, this compounding effect transforms your emotional intelligence, resilience, and capacity for meaningful change.
            </p>
            <p>
              Vocolens is designed around this insight. Daily voice journaling isn't just a wellness habit—it's an accelerant for personal transformation. By creating a space where you can reflect, track patterns, and build metacognitive awareness, the app turns your ordinary daily experiences into extraordinary opportunities for growth.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.55}>
          <section aria-labelledby="section-faq" className="py-8 border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently Asked Questions About Emotional Awareness and Pattern Recognition
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

        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="py-8 border-t border-primary/10">
            <h3 className="font-bold text-text-primary mb-6 text-xl">Explore Related Articles</h3>
            <div className="space-y-4">
              <button
                onClick={() => navigate({ to: '/resources/science-of-reflection' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Neuroscience & Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How Naming Your Emotions Reduces Stress and Builds Resilience
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

        <AnimatedSection animation="fade-in-up" delay={0.65}>
          <div className="bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              Finally understand why you feel what you feel
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Stop guessing. Start knowing. Get clarity on your emotional patterns so you can grow with intention.
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
