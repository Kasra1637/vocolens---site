import { AnimatedSection } from './AnimatedSection';
import { Brain, ArrowUpRight, Clock, ChevronRight, HelpCircle, Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const faqData = [
  {
    question: 'What is alexithymia and how common is it?',
    answer: 'Alexithymia is a trait characterised by difficulty identifying, describing, and distinguishing emotions. It affects approximately 10% of the general population, but is significantly more prevalent among autistic individuals (~50%) and those with ADHD (~30%). It is not a diagnosis itself but a dimensional trait — everyone sits somewhere on the spectrum of emotional awareness.',
  },
  {
    question: 'Can alexithymia be improved or is it permanent?',
    answer: 'Research suggests alexithymia is not fixed. Emotional granularity — the ability to make fine-grained distinctions between emotional states — can be developed through repeated practice. Studies on affect labeling show that consistently naming emotions strengthens prefrontal-limbic connectivity over time. AI-assisted voice journaling accelerates this by providing external labels that the user can confirm or correct, building vocabulary incrementally.',
  },
  {
    question: 'How does AI voice journaling help someone who cannot identify their emotions?',
    answer: 'Traditional journaling requires you to already have words for what you feel — which is the exact skill alexithymia impairs. Voice journaling removes this prerequisite: you simply speak about your experience, and AI analyses the linguistic content to suggest emotion labels. Over time, the correction loop (confirm, reject, or adjust the AI suggestion) builds a personalised emotional dictionary that maps your unique expressions to specific emotional states.',
  },
  {
    question: 'Is alexithymia the same as being emotionless?',
    answer: 'No. People with alexithymia feel emotions as intensely as anyone else — often more so, because unnamed emotions tend to manifest as undifferentiated distress or physical symptoms. The deficit is specifically in labeling and describing emotions, not in experiencing them. The body registers everything; alexithymia means the mind lacks the vocabulary to interpret those signals.',
  },
  {
    question: 'How long does it take to build an emotional vocabulary?',
    answer: 'Initial improvements in emotion identification can appear within 2-4 weeks of daily practice. Meaningful vocabulary expansion — where you consistently use specific emotion words rather than generic descriptors — typically develops over 2-3 months. The AI personalisation system in Vocolens begins adapting after approximately 10-15 corrections, with significant personalisation emerging after 50+ entries.',
  },
];


export function AlexithymiaEmotionalVocabulary() {
  const navigate = useNavigate();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why You Can't Name What You Feel: The Neuroscience of Alexithymia and How Voice Journaling Builds an Emotional Vocabulary",
    "alternativeHeadline": "Alexithymia and Emotional Vocabulary: How AI Voice Journaling Creates Words for Feelings You Cannot Name",
    "description": "Around 10% of people struggle to identify and describe their own emotions — a trait called alexithymia. Learn the neuroscience of emotional blindness, why traditional journaling fails, and how AI-assisted voice journaling creates a personal emotional vocabulary from scratch.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28",
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
      "@id": "https://vocolens.com/resources/alexithymia-emotional-vocabulary"
    },
    "articleSection": "Neuroscience & Emotional Intelligence",
    "keywords": "alexithymia, emotional vocabulary, voice journaling alexithymia, can't name emotions, emotion labeling difficulty, AI emotion detection, neurodivergent journaling, ADHD alexithymia, autism alexithymia, emotional granularity, interoception",
    "wordCount": 1400,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Alexithymia", "description": "A trait characterised by difficulty identifying and describing one's own emotions" },
      { "@type": "Thing", "name": "Emotional granularity", "description": "The ability to make fine-grained distinctions between similar emotional states" },
      { "@type": "Thing", "name": "Voice journaling", "description": "Recording spoken reflections to build self-awareness and emotional clarity" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "The Toronto Alexithymia Scale", "author": { "@type": "Person", "name": "Graeme J. Taylor" }, "datePublished": "1985" },
      { "@type": "ScholarlyArticle", "name": "Levels of Emotional Awareness", "author": { "@type": "Person", "name": "Richard D. Lane" }, "datePublished": "1990" },
      { "@type": "ScholarlyArticle", "name": "Alexithymia: Concept and Measurement", "author": { "@type": "Person", "name": "John C. Nemiah" }, "datePublished": "1970" }
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
        { "@type": "ListItem", "position": 3, "name": "Alexithymia & Emotional Vocabulary", "item": "https://vocolens.com/resources/alexithymia-emotional-vocabulary" }
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
      className="max-w-3xl mx-auto px-6 py-16 lg:py-24"
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
              <meta itemProp="item" content="https://vocolens.com/resources" />
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-text-primary font-medium" itemProp="name">Alexithymia & Emotional Vocabulary</span>
              <meta itemProp="item" content="https://vocolens.com/resources/alexithymia-emotional-vocabulary" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block" itemProp="articleSection">
                Neuroscience &amp; Emotional Intelligence
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>6 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-06-28" itemProp="datePublished">Jun 28, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4"
          >
            Why You Can't Name What You Feel: The Neuroscience of Alexithymia and How Voice Journaling Builds an Emotional Vocabulary
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Around 10% of people struggle to identify and describe their own emotions — a trait called <strong className="text-text-primary font-semibold">alexithymia</strong>. The feelings are there, but the words are not. Learn why traditional journaling fails for this population and how AI-assisted voice journaling builds a personal emotional vocabulary from scratch.
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
                <strong className="font-medium text-text-primary">Alexithymia is about labeling, not feeling.</strong> People with this trait experience emotions as intensely as anyone — they simply lack the vocabulary to identify and describe them.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">Traditional journaling assumes the skill it's trying to build.</strong> A blank page requires words you don't yet have. Voice journaling removes this prerequisite entirely.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">AI provides the labels; you build the dictionary.</strong> The correction loop — confirm, reject, adjust — incrementally creates a personalised emotional vocabulary mapped to your unique way of expressing experience.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            You feel something. You know it's there — a weight in your chest, a restlessness in your limbs, a vague sense that something is wrong. But when someone asks "How are you feeling?" the honest answer is: <em>I don't know</em>. Not because you feel nothing. Because you have no words for what you feel.
          </p>
          <p className="mt-4">
            This experience has a name. It's called <strong className="text-text-primary font-semibold">alexithymia</strong> — from the Greek: "no words for emotions." And it's far more common than most people realise.
          </p>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-what-is-alexithymia">
            <h2 id="section-what-is-alexithymia" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              What Is Alexithymia? The Science of Emotional Blindness
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Alexithymia was first described by psychiatrists <strong className="text-text-primary font-semibold">Nemiah and Sifneos in 1970</strong>, who observed that many of their patients could describe physical symptoms in vivid detail but went blank when asked about feelings. The term was formalised with the development of the <strong className="text-text-primary font-semibold">Toronto Alexithymia Scale (TAS-20)</strong> by Taylor, Bagby, and Parker in 1985 — still the gold-standard measure used in clinical research today.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Crucially, alexithymia is <em>not</em> the absence of emotion. Brain imaging studies consistently show that people high in alexithymia have normal — and sometimes heightened — emotional activation in subcortical regions. The deficit is specifically in the <strong className="text-text-primary font-semibold">connection between feeling and labeling</strong>: the prefrontal cortex struggles to attach linguistic labels to the signals the body is generating.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "The emotions are there. The body registers them. What's missing is the bridge between sensation and language — the capacity to say 'this feeling is grief' or 'this feeling is excitement.'"
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Lane & Schwartz, 1987, Levels of Emotional Awareness</cite>
            </blockquote>
            <p className="mb-4 text-base leading-relaxed">
              The prevalence is striking: approximately <strong className="text-text-primary font-semibold">10% of the general population</strong> scores in the clinical range. But among autistic adults, estimates rise to 50%. Among those with ADHD, around 30%. These aren't separate issues — alexithymia is a core dimension of the neurodivergent experience that compounds every other challenge.
            </p>
            <p>
              Without words for emotions, distress becomes undifferentiated. You can't manage what you can't name. Anxiety, frustration, sadness, and overwhelm collapse into a single state: <em>"I feel bad."</em> This lack of emotional granularity is what makes alexithymia so corrosive over time — it prevents the targeted coping that specific emotion identification enables.
            </p>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-why-journaling-fails">
            <h2 id="section-why-journaling-fails" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why Traditional Journaling Fails for Alexithymia
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              The advice is well-meaning: <em>"Just write down how you feel."</em> But for someone with alexithymia, this instruction contains a hidden prerequisite — you must already possess the emotional vocabulary that the practice is supposedly developing. It's like telling someone who can't read to "just look it up in the dictionary."
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The blank page becomes a mirror of the blank mind. You sit down, pen in hand, and the same frustrating cycle repeats: <em>What do I feel? I don't know. I should know. Why don't I know?</em> The exercise that's meant to build self-awareness instead reinforces the sense of deficiency.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Written journaling also demands a level of cognitive filtering that works against emotional discovery. You must compose sentences, choose grammar, manage spelling — all of which engage the analytical prefrontal cortex at the expense of the emotional processing you're trying to access. For ADHD brains already struggling with executive function, this friction is often enough to abandon the practice entirely.
            </p>
            <p>
              The problem isn't willpower or motivation. It's that the tool assumes a skill that alexithymia specifically impairs. A fundamentally different approach is needed — one that meets you where you are and builds the vocabulary incrementally, from the outside in.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-voice-ai-vocabulary">
            <h2 id="section-voice-ai-vocabulary" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              How Voice + AI Creates an Emotional Vocabulary From Nothing
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Voice journaling inverts the traditional model. Instead of requiring words <em>before</em> you begin, you simply talk about your experience — what happened, how your body feels, what's on your mind — and the AI provides candidate emotion labels after the fact. You don't need to know the word "apprehension" to describe the tightness in your chest before a meeting. You just describe the tightness, and the system maps it.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This works because of a key insight from emotional granularity research: <strong className="text-text-primary font-semibold">people can recognise emotions they cannot spontaneously generate</strong>. You might never think to label a feeling as "anticipatory grief" on your own — but when the AI suggests it, something clicks. <em>Yes, that's exactly what this is.</em>
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The correction loop is where the real learning happens. After every entry, the AI presents its emotion analysis. You have three options:
            </p>
            <ul className="space-y-2 mb-4 ml-4 text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">Confirm</strong> — "Yes, that's right." This reinforces the connection between your expression pattern and that emotion label.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">Correct</strong> — "No, it's not anxiety — it's excitement." The AI learns your unique emotional dialect and adjusts future analysis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">"I don't know"</strong> — And that's valid. The system tracks these moments without judgment, building a pattern over time that itself becomes informative.</span>
              </li>
            </ul>
            <p>
              Over dozens of entries, this loop builds something remarkable: a personalised emotional dictionary that maps <em>your</em> specific expressions, body descriptions, and narrative patterns to specific emotional states. The AI doesn't impose a universal model — it learns <em>your</em> language for <em>your</em> feelings.
            </p>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-body-bridge">
            <h2 id="section-body-bridge" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              The Body as a Bridge to Emotions You Cannot Name
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              When words fail entirely, the body still speaks. Research on <strong className="text-text-primary font-semibold">interoception</strong> — the sense of internal bodily signals — shows that physical sensations are often the first and most reliable indicators of emotional states. Chest tightness, stomach churning, jaw clenching, heat in the face — these are not random. They are the body's emotional vocabulary.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              For people with alexithymia, the body becomes the primary entry point to emotional understanding. Rather than asking "What emotion am I feeling?" — a question that may produce only silence — you ask: "Where in my body do I notice something?" This question almost always has an answer.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Vocolens provides a 9-region body map where you tap to indicate where sensations are present, paired with 16 pre-defined physical sensation descriptors — chest tightness, racing heart, heavy limbs, tingling, heat, pressure, and more. These give language to physical experience when emotion words fail entirely.
            </p>
            <p>
              Over time, patterns emerge. The app might reveal: <em>"Chest tightness + shallow breathing appears in 80% of entries the AI labels as apprehension."</em> Gradually, the connection forms — not through abstract learning, but through your own lived, embodied data. The body teaches the mind what it's feeling, one entry at a time.
            </p>
            <a
              href="/resources/distress-detection"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read more about interoception and body-based awareness</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.48}>
          <section aria-labelledby="section-granularity">
            <h2 id="section-granularity" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              From "I Feel Bad" to Emotional Granularity
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Psychologist Lisa Feldman Barrett's research on <strong className="text-text-primary font-semibold">emotional granularity</strong> reveals a critical insight: people who can distinguish between finely differentiated emotional states navigate life more effectively. They make better decisions, regulate themselves more skillfully, and experience less chronic distress — not because they feel less, but because they can respond to specific emotions with specific strategies.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The journey from alexithymia toward granularity follows a predictable path. In the early stages, every negative experience collapses into "bad" or "stressed." With repeated AI-assisted labeling, you begin to distinguish: <em>this is frustration</em> (not anger), <em>this is disappointment</em> (not sadness), <em>this is decision fatigue</em> (not laziness).
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Vocolens accelerates this through Plutchik's Wheel of Emotions — scoring 8 primary emotions at three intensity tiers. You don't just learn "I feel fear." You learn the difference between <strong className="text-text-primary font-semibold">apprehension</strong> (low fear), <strong className="text-text-primary font-semibold">fear</strong> (moderate), and <strong className="text-text-primary font-semibold">terror</strong> (high) — and the correction system ensures these distinctions reflect your actual experience rather than a textbook definition.
            </p>
            <p>
              Each correction is a micro-lesson in emotional literacy. Over months, the AI's confidence in reading <em>you</em> grows — and so does yours. The vocabulary expands not through study, but through repeated, embodied practice grounded in your real emotional life.
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
                Frequently Asked Questions About Alexithymia and Voice Journaling
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
            <h3 className="font-bold text-text-primary mb-6 text-xl">Explore Related Articles</h3>
            <div className="space-y-4">
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
              <button
                onClick={() => navigate({ to: '/resources/science-of-reflection' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Neuroscience & Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How Naming Your Emotions Reduces Stress and Builds Emotional Resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Neuroscience research proves that labeling emotions calms the amygdala. Discover how voice journaling applies affect labeling science.</p>
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
              Your feelings exist — even without words for them yet
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              You don't need to arrive with a vocabulary. You just need to speak. The words will come — one entry at a time.
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
