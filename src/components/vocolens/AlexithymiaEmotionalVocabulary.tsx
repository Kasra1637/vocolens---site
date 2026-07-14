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
    "headline": "Why You Can't Name What You're Feeling: Alexithymia and the Emotional Vocabulary You Were Never Taught",
    "alternativeHeadline": "Alexithymia and Emotional Vocabulary: How AI Voice Journaling Creates Words for Feelings You Cannot Name",
    "description": "Around 10% of people struggle to identify and describe their own emotions — a trait called alexithymia. Learn the neuroscience of emotional blindness, why traditional journaling fails, and how AI-assisted voice journaling creates a personal emotional vocabulary from scratch.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-06-28",
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
      "@id": "https://vocolens.com/resources/alexithymia-emotional-vocabulary"
    },
    "articleSection": "Neuroscience & Emotional Intelligence",
    "keywords": "alexithymia, emotional vocabulary, voice journaling alexithymia, can't name emotions, emotion labeling difficulty, AI emotion detection, neurodivergent journaling, ADHD alexithymia, autism alexithymia, emotional granularity, interoception",
    "wordCount": 1500,
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
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-text-primary font-medium" itemProp="name">Alexithymia & Emotional Vocabulary</span>
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
            Why You Can't Name What You're Feeling: Alexithymia and the Emotional Vocabulary You Were Never Taught
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Around 10% of people know something is wrong but can't say what — a trait called <strong className="text-text-primary font-semibold">alexithymia</strong>. The feeling shows up. The word never does. Here's why traditional journaling makes that worse, and how AI-assisted voice journaling helps you build an emotional vocabulary from the ground up.
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
                <strong className="font-medium text-text-primary">Alexithymia is a labeling problem, not a feeling problem.</strong> People with this trait feel emotions just as intensely as anyone — they just can't find the words for them.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">"Just write down how you feel" assumes the skill it's trying to teach.</strong> A blank page needs words you don't have yet. Voice journaling skips that step entirely.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <strong className="font-medium text-text-primary">AI offers the labels; you build the dictionary.</strong> Confirm, correct, or shrug — every response teaches the system your emotional language, one entry at a time.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="space-y-10 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody">

        <AnimatedSection animation="fade-in-up" delay={0.05}>
          <p>
            Someone asks how you're doing, and there's a pause before you answer — because you actually don't know. There's a weight in your chest. A restlessness that won't sit still. Something is clearly happening in there. But when you reach for a word to describe it, you come up empty, and "fine" comes out instead, because "fine" is the only word available.
          </p>
          <p className="mt-4">
            If that sounds familiar, you're not broken, and you're definitely not alone. Psychologists call this <strong className="text-text-primary font-semibold">alexithymia</strong> — literally, from the Greek, "no words for emotions." It's a lot more common than most people think, and once you understand what's actually happening in your brain, it stops feeling like a personal failing and starts looking like a skill you were simply never taught.
          </p>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <section aria-labelledby="section-what-is-alexithymia">
            <h2 id="section-what-is-alexithymia" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              So what is alexithymia, exactly?
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              The term goes back to 1970, when psychiatrists <strong className="text-text-primary font-semibold">Nemiah and Sifneos</strong> noticed something odd in their patients: people who could describe a headache or a stomachache in exhaustive detail would go completely quiet the moment the question turned to feelings. Fifteen years later, Taylor, Bagby, and Parker turned that observation into something measurable — the <strong className="text-text-primary font-semibold">Toronto Alexithymia Scale (TAS-20)</strong>, still the standard tool researchers use today.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Here's the part that surprises most people: alexithymia has nothing to do with feeling less. Brain scans of people high in alexithymia show completely normal — sometimes even heightened — activity in the emotional centers of the brain. The disconnect happens somewhere else entirely, in the handoff between the body's signal and the mind's ability to attach a word to it. It's a wiring issue, not an empathy issue.
            </p>
            <blockquote className="border-l-4 border-primary/40 pl-5 my-5 italic text-text-secondary bg-primary/4 rounded-r-xl py-4 pr-4">
              "The emotions are there. The body registers them. What's missing is the bridge between sensation and language — the capacity to say 'this feeling is grief' or 'this feeling is excitement.'"
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Lane & Schwartz, 1987, Levels of Emotional Awareness</cite>
            </blockquote>
            <p className="mb-4 text-base leading-relaxed">
              And it's genuinely widespread. Roughly <strong className="text-text-primary font-semibold">10% of the general population</strong> scores in the clinical range — but that number jumps to nearly 50% among autistic adults, and around 30% for people with ADHD. This isn't a coincidence or a side note. Alexithymia runs underneath a lot of the neurodivergent experience, quietly making everything else harder.
            </p>
            <p>
              Think about what happens when every difficult feeling collapses into the same vague category: <em>"I feel bad."</em> Anxiety, disappointment, exhaustion, and grief all start to look identical from the inside — because you never learned to tell them apart. And you can't manage what you can't tell apart. That's really the whole problem in one sentence.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: alexithymia doesn't mean you feel nothing. It means the bridge between feeling and language hasn't been built yet — which also means it can be.
            </p>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <section aria-labelledby="section-why-journaling-fails">
            <h2 id="section-why-journaling-fails" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why "just write down how you feel" doesn't work here
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              It's well-meaning advice, and it's also a little cruel if you think about it: <em>"Just write down how you feel."</em> That instruction quietly assumes you already have the exact thing alexithymia takes away — a working vocabulary for your inner life. It's a bit like telling someone who's never learned to read, "just look it up in the dictionary."
            </p>
            <p className="mb-4 text-base leading-relaxed">
              So the blank page becomes a mirror of the blank feeling. You sit down, pen ready, and the same loop starts up: <em>What do I feel? I don't know. I should know by now. Why don't I know?</em> A practice that's supposed to build self-awareness ends up reinforcing the opposite — the sense that something's wrong with you for not having the answer.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              There's a second problem, too, and it's more mechanical. Writing requires you to compose sentences, fix your grammar, spell things correctly — all tasks that keep your analytical brain busy at exactly the moment you're trying to access something underneath the analysis. For anyone with ADHD already fighting an uphill battle with executive function, that friction alone is often enough to make the whole habit die within a week.
            </p>
            <p>
              None of this is about willpower. The tool is simply asking for a skill that alexithymia specifically blocks. What actually helps is a different starting point — one that doesn't require you to arrive with words already in hand, and instead builds them for you, gradually, from the outside in.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: if journaling has never stuck for you, it's probably not a discipline problem — it's a design problem. The method assumed a skill you're still building.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="h-px bg-primary/10" />
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.35}>
          <section aria-labelledby="section-voice-ai-vocabulary">
            <h2 id="section-voice-ai-vocabulary" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              How voice and AI build a vocabulary out of nothing
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Here's where voice journaling flips the whole model on its head. Instead of needing the words first, you just talk — about what happened, how your body feels, what's rattling around in your head — and an AI listens for patterns and offers candidate emotion labels afterward. You don't need to already know the word "apprehension" to describe the tightness in your chest before a meeting. You describe the tightness. The system does the naming.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This works for a reason emotional granularity research keeps confirming: <strong className="text-text-primary font-semibold">people can recognize an emotion they'd never have generated on their own</strong>. You might never sit down and think "this is anticipatory grief" — but when it's suggested to you, something clicks. <em>Yes. That's exactly it.</em> Ever had that moment where a friend names what you're feeling and it just fits? This is the same mechanism, on demand.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              The real learning happens in what comes next — the correction loop. After each entry, the AI shows you its read on what you were feeling, and you get to respond:
            </p>
            <ul className="space-y-2 mb-4 ml-4 text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">Confirm</strong> — "Yes, that's it." This locks in the connection between how you express yourself and that specific emotion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">Correct</strong> — "No, that's not anxiety, that's excitement." The AI quietly relearns your particular emotional dialect and adjusts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-text-primary font-semibold">"I don't know"</strong> — Completely valid, and tracked without judgment. Even the pattern of not knowing turns out to be useful information over time.</span>
              </li>
            </ul>
            <p>
              String enough of those together — dozens of entries, weeks of small corrections — and something genuinely useful starts to take shape: a personal emotional dictionary, built entirely from your own words, your own body descriptions, your own way of telling a story. Vocolens isn't handing you a universal model of emotion and asking you to fit inside it. It's learning your language, for your feelings, on your terms.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you don't need the right word to start. You just need to talk — the vocabulary catches up as you go.
            </p>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.42}>
          <section aria-labelledby="section-body-bridge">
            <h2 id="section-body-bridge" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              When words fail, the body is still talking
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              And when even that doesn't produce a word? The body usually still has something to say. Research on <strong className="text-text-primary font-semibold">interoception</strong> — your ability to sense internal signals like heartbeat, breath, and muscle tension — shows that physical sensations are often the earliest and most trustworthy clue to what you're actually feeling. Chest tightness. A churning stomach. A clenched jaw. Heat rising in your face. None of that is random. It's your body's own vocabulary, running ahead of your mind's.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              For a lot of people with alexithymia, the body becomes the real entry point into emotional understanding — not the mind. Instead of asking "what am I feeling?" and getting silence back, try asking: "where in my body do I notice something?" That question almost never comes up empty.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              This is exactly what Vocolens' body map is built for — a 9-region diagram you tap to mark where a sensation is showing up, paired with 16 physical descriptors like chest tightness, racing heart, heavy limbs, tingling, heat, and pressure. When emotion words won't come, this gives you a language you already have access to.
            </p>
            <p>
              Keep doing this, and patterns start surfacing on their own. Maybe you notice: <em>"Chest tightness plus shallow breathing shows up in 80% of the entries the AI later labels as apprehension."</em> That connection doesn't arrive through studying flashcards — it arrives through your own lived, embodied data, entry by entry, until your body has effectively taught your mind what it's been feeling all along.
            </p>
            <a
              href="/resources/distress-detection"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read more about interoception and body-based awareness</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: if your mind goes blank, ask your body instead. It's usually been keeping notes the whole time.
            </p>
          </section>
        </AnimatedSection>


        <AnimatedSection animation="fade-in-up" delay={0.48}>
          <section aria-labelledby="section-granularity">
            <h2 id="section-granularity" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Getting past "I feel bad": what emotional granularity actually looks like
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Psychologist Lisa Feldman Barrett has spent years studying something called <strong className="text-text-primary font-semibold">emotional granularity</strong> — the ability to tell closely related emotions apart instead of lumping them together. Her research keeps landing on the same conclusion: people who can distinguish "frustrated" from "disappointed" from "overwhelmed" tend to make better decisions, regulate themselves more skillfully, and carry less chronic distress. Not because they feel less. Because they know exactly what they're responding to.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Getting there tends to follow a fairly predictable arc. At the start, everything negative just collapses into "bad" or "stressed" — one bucket for every hard feeling. With enough AI-assisted labeling, though, distinctions start to emerge: <em>this is frustration</em>, not anger. <em>This is disappointment</em>, not sadness. <em>This is decision fatigue</em>, not laziness — which, honestly, might be the most useful reframe of all.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Vocolens leans on Plutchik's Wheel of Emotions to speed this along, scoring 8 primary emotions across three intensity tiers. So instead of a flat "I feel fear," you start to notice the difference between <strong className="text-text-primary font-semibold">apprehension</strong> (fear, low), <strong className="text-text-primary font-semibold">fear</strong> (moderate), and <strong className="text-text-primary font-semibold">terror</strong> (high) — and because the correction system keeps learning from you, those distinctions end up reflecting your actual life, not a definition out of a textbook.
            </p>
            <p>
              Every correction is a tiny lesson in emotional literacy, and they add up. Over months, the AI gets better at reading you — and, almost as a side effect, you get better at reading yourself. Ask yourself: what would change if "decision fatigue" and "laziness" stopped feeling like the same thing? That's the kind of shift this builds, one small correction at a time, grounded in your real emotional life rather than a study you've never read.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: the goal isn't more vocabulary for its own sake — it's precision. The more specific the word, the more specific (and useful) your response can be.
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
                Frequently asked questions about alexithymia and voice journaling
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
                onClick={() => navigate({ to: '/resources/distress-detection' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Body Awareness & Distress Detection</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      How your body tells you it's overwhelmed before your mind does
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn the neuroscience of interoception and how body-sensation mapping helps you catch overwhelm before it escalates.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </button>
              <button
                onClick={() => navigate({ to: '/resources/autism-emotional-regulation' })}
                className="w-full text-left p-5 rounded-xl border border-primary/15 bg-primary/3 hover:bg-primary/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-primary uppercase tracking-wider mb-1 text-base leading-relaxed">Autism & Neurodivergent Wellness</p>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 text-lg">
                      Autism and emotional regulation: how voice journaling helps autistic adults process emotions
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Alexithymia affects up to 50% of autistic adults. See how voice journaling builds emotional vocabulary without social pressure.</p>
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
                      How naming your emotions reduces stress and builds emotional resilience
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
              You don't need to show up with a vocabulary already built. You just need to start talking. The words come one entry at a time — Vocolens is built to help them arrive faster.
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
