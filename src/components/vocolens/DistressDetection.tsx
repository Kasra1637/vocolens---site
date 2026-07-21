import { AnimatedSection } from './AnimatedSection';
import { Activity, ArrowUpRight, Clock, ChevronRight, Circle as HelpCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What is interoception and how does it help detect overwhelm early?',
    answer: 'Interoception is your capacity to sense internal body signals — heartbeat, breath, muscle tension, gut sensation, and temperature. Research by Garfinkel et al. (2015) shows that people with higher interoceptive accuracy regulate emotions more effectively and recover from stress faster. By tuning into these signals, you can detect overwhelm in its earliest physical stage — before it escalates into full emotional distress or burnout.',
  },
  {
    question: 'What are the most common early body signals of stress and overwhelm?',
    answer: 'The most frequent early warning signs include shallow or held breath, chest tightness, jaw clenching, neck and shoulder tension, stomach knots or nausea, cold hands, restless legs, and a feeling of heaviness. These signals typically appear minutes or even hours before you consciously realize you are overwhelmed. Learning to notice them gives you a window to intervene with a pause, a breath, or a boundary.',
  },
  {
    question: 'How does body-sensation mapping in voice journaling work?',
    answer: 'Body-sensation mapping means tagging where an emotion or stress response lives in your body as you voice journal — chest, stomach, throat, shoulders, hands, etc. Over days and weeks, these tags form a personal map showing which situations produce which physical responses. The map reveals patterns your mind might rationalize away, giving you an honest feedback loop for catching distress early.',
  },
  {
    question: 'Can you train your body awareness to detect stress earlier?',
    answer: 'Yes. Interoception is a trainable skill. Every time you pause to ask "what does this feel like in my body right now?" you strengthen the insular cortex — the brain region responsible for mapping internal states into conscious awareness. Studies show that consistent practice (even 60 seconds of body scanning per day) measurably improves interoceptive accuracy within weeks, making you progressively better at catching stress signals before they escalate.',
  },
  {
    question: 'What is the difference between somatic awareness and overthinking about symptoms?',
    answer: 'Somatic awareness is a brief, curious check-in: noticing a sensation, naming it, and letting it inform your next action. Overthinking about symptoms (health anxiety or hypervigilance) involves rumination, catastrophizing, and prolonged focus on what might be wrong. The key difference is duration and intent — a 10-second body scan that leads to action (a breath, a break, a boundary) is awareness. Looping on a sensation for minutes without resolution is anxiety, and benefits from different support.',
  },
];

export function DistressDetection() {
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
            "headline": "How Your Body Tells You Are Overwhelmed Before Your Mind Does",
            "description": "Your body registers distress seconds before your conscious mind catches up. Learn the neuroscience of interoception, body-based early warning signs, and how voice journaling with body-sensation mapping helps you catch overwhelm before it escalates.",
            "image": "https://vocolens.com/vocolens_-_preview.png",
            "datePublished": "2026-06-11",
            "dateModified": "2026-06-11",
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
              "@id": "https://vocolens.com/resources/distress-detection"
            },
            "articleSection": "Body Awareness & Distress Detection",
            "keywords": "distress detection, interoception, body awareness, overwhelm, somatic markers, nervous system, polyvagal, early warning signs, voice journaling, body sensation map, emotional regulation, anxiety, burnout prevention",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" },
                { "@type": "ListItem", "position": 3, "name": "How Your Body Tells You Are Overwhelmed Before Your Mind Does", "item": "https://vocolens.com/resources/distress-detection" }
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
              <meta itemProp="item" content="https://vocolens.com/resources" />
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-text-primary font-medium" itemProp="name">How Your Body Tells You Are Overwhelmed</span>
              <meta itemProp="item" content="https://vocolens.com/resources/distress-detection" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Body Awareness &amp; Distress Detection
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
            How Your Body Tells You Are Overwhelmed Before Your Mind Does
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-06-11" itemProp="datePublished">June 11, 2026</time>
          </div>
          <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6" />

          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
            <p className="font-semibold text-primary mb-2 uppercase tracking-wide text-base leading-relaxed">Key takeaways</p>
            <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Your autonomic nervous system detects threat and overload several seconds before conscious thought registers it.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Interoception—the felt sense of your internal state—is the most reliable early warning system you have for overwhelm.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                Mapping body sensations during voice journaling helps you catch distress while it's still manageable, not after it explodes.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            By the time your brain says "I'm overwhelmed," your body has been saying it for a while. A tight jaw at 10am. Shallow breath in a meeting. A knot in your stomach you keep ignoring. These aren't side effects of stress—they're the first draft of it. The signal arrives in the body long before the story arrives in the mind.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-body-first">
            <h2 id="section-body-first" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The Body Speaks First: The Neuroscience of Early Distress Signals
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Your autonomic nervous system is constantly scanning your environment for threat and demand—a process Stephen Porges called <em>neuroception</em>. It operates below awareness, and it operates fast. Before your prefrontal cortex finishes interpreting a difficult email, your heart rate has already shifted, your breath has shortened, and your shoulders have begun to lift toward your ears.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Antonio Damasio's somatic marker hypothesis points to the same truth from a different angle: the body's physiological state shapes decision-making and emotion long before conscious reasoning catches up. Distress isn't an idea you arrive at. It's a physical event you eventually notice.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "The body is not separate from emotion. It is the medium through which emotion is built."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Adapted from research on interoception and emotional awareness</cite>
            </blockquote>
            <p>
              The implication is practical: if you only listen for emotional words, you miss the warning. If you learn to listen to your body, you get a head start on every wave of overwhelm.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-interoception">
            <h2 id="section-interoception" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Interoception: Your Built-in Early Warning System
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Interoception is your capacity to sense what's happening inside your body—heartbeat, breath, muscle tension, gut sensation, temperature. Research by Sarah Garfinkel and colleagues has shown that people with higher interoceptive accuracy regulate emotion more effectively, recover from stress faster, and make decisions that align better with their actual needs.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The opposite is also true. When interoception is dulled—by chronic stress, dissociation, or simply a culture that rewards ignoring the body—distress accumulates silently. You don't notice the tight chest, the clenched jaw, the held breath. You only notice the crash: the sudden tears, the snap at a colleague, the night you couldn't sleep.
            </p>
            <p>
              The good news is that interoception is trainable. Every time you pause to ask "what does this feel like in my body right now?" you strengthen the insular cortex—the brain region responsible for mapping internal states into conscious awareness.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/25451381/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Garfinkel et al. (2015) on interoceptive accuracy and emotional experience — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read the research: Knowing your own heart — interoceptive accuracy and emotion — PubMed</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-warning-signs">
            <h2 id="section-warning-signs" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The Common Early Signs of Overwhelm—And Why You Miss Them
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Most people share the same handful of early signals. Chest tightness or shallow breathing. A clenched stomach or sudden loss of appetite. Tension in the neck and shoulders. Restless hands. Heaviness in the legs. None of these are dramatic on their own, which is exactly why they're easy to dismiss.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Your brain has a strong bias toward continuing whatever you're already doing. So when your stomach knots in the third meeting of the day, your mind narrates it away: "It's nothing. Push through." The signal doesn't disappear. It compounds. And by the time it becomes loud enough to interrupt you, you're already past the point where a small intervention would have worked.
            </p>
            <p>
              Naming the sensation early—even just whispering "my chest feels tight"—is enough to shift the trajectory. You've moved the experience from background noise into conscious processing, which is where you can actually do something about it.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-mapping">
            <h2 id="section-mapping" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Mapping the Body: Turning Sensation into Information
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              A single body sensation in isolation is just a moment. But the same sensations, tracked across days and weeks, become a map. You start to see that your chest tightens before difficult conversations, your stomach drops in the hour before a deadline, your hands go cold when you're masking emotion in a social setting.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This is where Vocolens' body sensation tracking comes in. As you voice journal, you can tag where the feeling lives in your body—chest, stomach, neck, hands, and more. Over time, the body map becomes one of the most honest pieces of feedback you have. Your mind may rationalize. Your body keeps the receipts.
            </p>
            <p>
              Once a pattern is visible, it becomes interruptible. A 30-second pause, a long exhale, a step outside—these tiny interventions only work when you catch the signal early. The map is what makes early possible.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <section aria-labelledby="section-practice">
            <h2 id="section-practice" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              A Simple Practice: Catching Overwhelm in the First 60 Seconds
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Try this the next time something feels "off" without an obvious reason. Pause. Close your eyes if you can. Scan from head to feet and answer one question: <em>where in my body is something asking for attention?</em> Then voice journal what you noticed—out loud, for one minute, no editing.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              You'll often discover that the sensation already had a story attached to it: a worry, a memory, a need. Naming the body brings the mind along with it. This is the reverse of how most of us were taught to handle stress, and it works precisely because it follows the order your nervous system actually uses.
            </p>
            <p>
              Done consistently, this practice doesn't just defuse single moments of overwhelm. It rebuilds the relationship between your body and your awareness—the foundation of every other emotional skill.
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
                Frequently Asked Questions About Body Awareness and Distress Detection
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
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Neuroscience &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How Naming Your Emotions Reduces Stress and Builds Resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn how affect labeling decreases amygdala activity and calms your nervous system through daily voice journaling.</p>
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
                      Building Emotional Awareness: How Pattern Recognition Transforms Self-Understanding
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Discover metacognitive awareness and how recognizing emotional patterns accelerates personal growth and self-understanding.</p>
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
              Feel lighter before the day gets heavy
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Wake up calmer, respond instead of react, and finally know what your body's been trying to tell you.
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
