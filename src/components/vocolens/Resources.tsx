import { Brain, Clock, BookOpen, Radar, Activity, Puzzle, Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export function Resources() {
  const navigate = useNavigate();
  return (
    <main aria-label="Voice journaling and mental wellness resources" className="max-w-5xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Voice Journaling Resources for Mental Wellness",
            "description": "Evidence-based articles and practical guides on voice journaling for stress relief, emotion labeling, emotional awareness, and building emotional resilience. Backed by peer-reviewed neuroscience research.",
            "url": "https://vocolens.com/resources",
            "publisher": {
              "@type": "Organization",
              "name": "Vocolens",
              "url": "https://vocolens.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" }
              ]
            }
          })
        }}
      />

      <div>
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            Learning Hub
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-5 leading-tight">
            Resources & Guides
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            Evidence-based guides on mental wellness, journaling, and emotional resilience — backed by peer-reviewed research.
          </p>
        </div>
      </div>

      <div>
        <article
          itemScope
          itemType="https://schema.org/Article"
          className="w-full"
        >
          <meta itemProp="url" content="https://vocolens.com/resources/science-of-reflection" />
          <meta itemProp="datePublished" content="2026-02-28" />
          <meta itemProp="dateModified" content="2026-02-28" />
          <meta itemProp="image" content="https://vocolens.com/vocolens_-_preview.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <button
            onClick={() => navigate({ to: '/resources/science-of-reflection' })}
            aria-label="Read: How Naming Your Emotions with Voice Journaling Reduces Stress and Builds Emotional Resilience"
            className="w-full text-left bg-white rounded-3xl shadow-clay-lg border border-primary/10 p-8 lg:p-10 hover:shadow-clay-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider" itemProp="articleSection">
                    Neuroscience &amp; Mental Wellness
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    <Clock className="w-3 h-3" />
                    5 min read
                  </span>
                </div>
                <h2
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors"
                >
                  How Naming Your Emotions with Voice Journaling Reduces Stress and Builds Emotional Resilience
                </h2>
                <p className="text-text-secondary line-clamp-3 text-base leading-relaxed" itemProp="description">
                  Neuroscience research by Lieberman (2007) proves that labeling emotions reduces amygdala activity and calms the nervous system. Discover how daily voice journaling with Vocolens uses this science to help you reduce anxiety, create mental space, and build lasting emotional resilience.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-muted px-2.5 py-1 bg-primary/5 rounded-full border border-primary/10">
                    Emotion Labeling · Stress Relief Journaling · Resilience
                  </span>
                </div>
              </div>
            </div>
          </button>
        </article>

        <article
          itemScope
          itemType="https://schema.org/Article"
          className="w-full mt-8"
        >
          <meta itemProp="url" content="https://vocolens.com/resources/emotional-awareness-patterns" />
          <meta itemProp="datePublished" content="2026-03-30" />
          <meta itemProp="dateModified" content="2026-03-30" />
          <meta itemProp="image" content="https://vocolens.com/vocolens_-_preview.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <button
            onClick={() => navigate({ to: '/resources/emotional-awareness-patterns' })}
            aria-label="Read: Building Emotional Awareness: How Pattern Recognition in Voice Journaling Transforms Self-Understanding"
            className="w-full text-left bg-white rounded-3xl shadow-clay-lg border border-primary/10 p-8 lg:p-10 hover:shadow-clay-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <Radar className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider" itemProp="articleSection">
                    Mental Wellness &amp; Self-Discovery
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    <Clock className="w-3 h-3" />
                    6 min read
                  </span>
                </div>
                <h2
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors"
                >
                  Building Emotional Awareness: How Pattern Recognition in Voice Journaling Transforms Self-Understanding
                </h2>
                <p className="text-text-secondary line-clamp-3 text-base leading-relaxed" itemProp="description">
                  Discover how metacognitive awareness and pattern recognition through daily voice journaling rewire your brain for emotional intelligence. Learn to identify triggers and behavioral cycles with Vocolens' emotion tracking.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-muted px-2.5 py-1 bg-primary/5 rounded-full border border-primary/10">
                    Pattern Recognition · Emotional Intelligence · Self-Awareness
                  </span>
                </div>
              </div>
            </div>
          </button>
        </article>

        <article
          itemScope
          itemType="https://schema.org/Article"
          className="w-full mt-8"
        >
          <meta itemProp="url" content="https://vocolens.com/resources/distress-detection" />
          <meta itemProp="datePublished" content="2026-06-11" />
          <meta itemProp="dateModified" content="2026-06-11" />
          <meta itemProp="image" content="https://vocolens.com/vocolens_-_preview.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <button
            onClick={() => navigate({ to: '/resources/distress-detection' })}
            aria-label="Read: How Your Body Tells You Are Overwhelmed Before Your Mind Does"
            className="w-full text-left bg-white rounded-3xl shadow-clay-lg border border-primary/10 p-8 lg:p-10 hover:shadow-clay-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider" itemProp="articleSection">
                    Body Awareness &amp; Distress Detection
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    <Clock className="w-3 h-3" />
                    6 min read
                  </span>
                </div>
                <h2
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors"
                >
                  How Your Body Tells You Are Overwhelmed Before Your Mind Does
                </h2>
                <p className="text-text-secondary line-clamp-3 text-base leading-relaxed" itemProp="description">
                  Your body registers distress seconds before your conscious mind catches up. Learn the neuroscience of interoception, body-based early warning signs, and how voice journaling with body-sensation mapping helps you catch overwhelm before it escalates.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-muted px-2.5 py-1 bg-primary/5 rounded-full border border-primary/10">
                    Interoception · Body Awareness · Overwhelm
                  </span>
                </div>
              </div>
            </div>
          </button>
        </article>

        <article
          itemScope
          itemType="https://schema.org/Article"
          className="w-full mt-8"
        >
          <meta itemProp="url" content="https://vocolens.com/resources/autism-emotional-regulation" />
          <meta itemProp="datePublished" content="2026-06-29" />
          <meta itemProp="dateModified" content="2026-06-29" />
          <meta itemProp="image" content="https://vocolens.com/vocolens_-_preview.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <button
            onClick={() => navigate({ to: '/resources/autism-emotional-regulation' })}
            aria-label="Read: Autism and Emotional Regulation: How Voice Journaling Helps Autistic Adults Process Emotions"
            className="w-full text-left bg-white rounded-3xl shadow-clay-lg border border-primary/10 p-8 lg:p-10 hover:shadow-clay-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <Puzzle className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider" itemProp="articleSection">
                    Autism &amp; Neurodivergent Wellness
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    <Clock className="w-3 h-3" />
                    7 min read
                  </span>
                </div>
                <h2
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors"
                >
                  Autism and Emotional Regulation: How Voice Journaling Helps Autistic Adults Process Emotions
                </h2>
                <p className="text-text-secondary line-clamp-3 text-base leading-relaxed" itemProp="description">
                  Autistic adults face unique emotional regulation challenges including alexithymia, sensory overload, and meltdown cycles. Discover how voice journaling builds emotional vocabulary, tracks overwhelm patterns, and provides a safe space to process without masking pressure.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-muted px-2.5 py-1 bg-primary/5 rounded-full border border-primary/10">
                    Autism · Alexithymia · Emotional Regulation
                  </span>
                </div>
              </div>
            </div>
          </button>
        </article>

        <article
          itemScope
          itemType="https://schema.org/Article"
          className="w-full mt-8"
        >
          <meta itemProp="url" content="https://vocolens.com/resources/alexithymia-emotional-vocabulary" />
          <meta itemProp="datePublished" content="2026-06-28" />
          <meta itemProp="dateModified" content="2026-06-28" />
          <meta itemProp="image" content="https://vocolens.com/vocolens_-_preview.png" />
          <span itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Vocolens" />
          </span>
          <button
            onClick={() => navigate({ to: '/resources/alexithymia-emotional-vocabulary' })}
            aria-label="Read: Why You Can't Name What You Feel: The Neuroscience of Alexithymia and How Voice Journaling Builds an Emotional Vocabulary"
            className="w-full text-left bg-white rounded-3xl shadow-clay-lg border border-primary/10 p-8 lg:p-10 hover:shadow-clay-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider" itemProp="articleSection">
                    Neuroscience &amp; Emotional Intelligence
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    <Clock className="w-3 h-3" />
                    6 min read
                  </span>
                </div>
                <h2
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors"
                >
                  Why You Can't Name What You Feel: The Neuroscience of Alexithymia and How Voice Journaling Builds an Emotional Vocabulary
                </h2>
                <p className="text-text-secondary line-clamp-3 text-base leading-relaxed" itemProp="description">
                  Around 10% of people struggle to identify and describe their own emotions — a trait called alexithymia. Learn the neuroscience of emotional blindness, why traditional journaling fails, and how AI-assisted voice journaling creates a personal emotional vocabulary from scratch.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-muted px-2.5 py-1 bg-primary/5 rounded-full border border-primary/10">
                    Alexithymia · Emotional Vocabulary · AI Journaling
                  </span>
                </div>
              </div>
            </div>
          </button>
        </article>
      </div>
    </main>
  );
}
