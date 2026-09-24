import { ListenToArticle } from './ListenToArticle';
import { Heart, ArrowUpRight, Clock, CaretRight, CaretRight as ChevronRight, Question as HelpCircle } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';
import { BackToTop } from './BackToTop';

const faqData = [
  {
    question: 'What is emotional granularity?',
    answer: 'Emotional granularity is the ability to make fine, specific distinctions between emotional states — the difference between "I feel bad" and "I feel apprehensively braced, resentfully tired, and restless with unfinished tasks." Psychologists Lisa Feldman Barrett and James Gross describe emotion concepts as tools the brain uses to make sense of internal sensations, and granularity is what separates having a few broad tools from having a useful set. It is a dimensional skill, not an on/off trait: everyone is more or less granular, and the skill changes with experience, language, and practice.',
  },
  {
    question: 'Is emotional granularity just using fancy emotion words?',
    answer: 'No. Granularity is about accuracy of distinction, not display of vocabulary. Saying "I feel emotionally complex" is not granular if what is actually happening is more specific — a tightened chest, a sense of being behind, a restless inability to settle. Higher granularity means the word you use is a little closer to what is true, which makes it more useful as a handle for the system to work with. A simple, specific word is better than a vague, elaborate one.',
  },
  {
    question: 'Why do more specific emotion words seem to help?',
    answer: 'Because the label is not just description — it becomes a target the brain can regulate toward. Research on affect labeling shows that putting a specific emotion into words is associated with reduced reactivity in the amygdala and increased engagement of regulatory regions, with repeated practice linked to changes in the connectivity between the two. This is not magic language therapy: naming does not erase the feeling. It changes how the feeling is processed, and a more specific label gives the system more to work with than a vague one.',
  },
  {
    question: 'If I cannot name my emotions, is this still for me?',
    answer: 'Yes, because granularity is built, not required up front. The alexithymia piece in this library is about what happens when someone cannot find words at all; this piece is about what comes next, once a word is available. Voice journaling helps here in the same way it helps with alexithymia: you speak about your experience in your own words, and the system proposes emotion labels you can confirm, reject, or adjust. Over time, repeated corrections shift which labels the AI suggests — and for someone working on granularity, the useful step is often moving from one broad candidate to a more specific one, rather than inventing the word from nothing.',
  },
  {
    question: 'How long does it take to get better at naming emotions specifically?',
    answer: 'Initial movement — the first time a broad word gives way to something more precise — can show up within a few weeks of regular practice, because the muscle being trained is partly attention ("what is the most true word here?") and partly vocabulary. More stable granularity, where specific labels come more readily and you notice the difference they make, typically develops over a few months. A pattern in Vocolens needs at least 3 corrections across 2 weeks before it shifts later analysis, and a clearer personal taxonomy usually emerges over dozens of entries.',
  },
];
export function EmotionalGranularity() {

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Emotional Granularity: Why Specific Words Change What You Feel",
    "alternativeHeadline": "Emotional Granularity: Why Saying 'Anxious' or 'Stressed' Is Not Enough — and How More Specific Words Change the Feeling",
    "description": "Once you can name an emotion, the next question is how specific to get. Learn what emotional granularity is, why more specific labels change what you feel, and how voice journaling helps build a personal emotional vocabulary.",
    "image": "https://vocolens.com/vocolens_-_preview.png",
    "datePublished": "2026-09-17",
    "dateModified": "2026-09-17",
    "author": {
      "@type": "Organization",
      "name": "Vocolens",
      "url": "https://vocolens.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vocolens",
      "url": "https://vocolens.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vocolens.com/vocolens_favicon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vocolens.com/resources/emotional-granularity",
    },
    "articleSection": "Neuroscience & Emotional Intelligence",
    "keywords": "emotional granularity, emotion words, naming emotions, affect labeling, emotional vocabulary, alexithymia, voice journaling emotions, emotional awareness, granular emotions, how to name feelings, emotion regulation",
    "about": [
      { "@type": "Thing", "name": "Emotional granularity", "description": "The ability to make fine-grained distinctions between emotional states rather than collapsing them into broad labels" },
      { "@type": "Thing", "name": "Affect labeling", "description": "Putting an emotion into words, which is associated with changes in how the brain processes emotional experience" },
      { "@type": "Thing", "name": "Emotional vocabulary", "description": "The range of emotion words a person can use to distinguish what they are feeling" },
      { "@type": "Thing", "name": "Emotion regulation", "description": "The processes by which emotions are activated, shaped, maintained, and influenced in response to what is happening" },
      { "@type": "Thing", "name": "Alexithymia", "description": "A trait involving difficulty identifying and describing emotions" },
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "Putting Feelings Into Words: Affect Labeling Disconfirms Neural Markers of Distress", "author": { "@type": "Person", "name": "Matthew D. Lieberman" }, "datePublished": "2007", "url": "https://pubmed.ncbi.nlm.nih.gov/17576282/" },
      { "@type": "ScholarlyArticle", "name": "Conceptual Act Theory", "author": { "@type": "Person", "name": "Lisa Feldman Barrett" }, "datePublished": "2006", "url": "https://pubmed.ncbi.nlm.nih.gov/16430327/" },
      { "@type": "ScholarlyArticle", "name": "The Toronto Alexithymia Scale", "author": { "@type": "Person", "name": "Graeme J. Taylor" }, "datePublished": "1985" },
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["[data-speakable='summary']", "[data-speakable='key-takeaways']"],
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vocolens.com" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vocolens.com/resources" },
        { "@type": "ListItem", "position": 3, "name": "Emotional Granularity", "item": "https://vocolens.com/resources/emotional-granularity" },
      ],
    },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }),
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
              <span className="text-text-primary font-medium" itemProp="name">Emotional Granularity</span>
              <meta itemProp="item" content="https://vocolens.com/resources/emotional-granularity" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay" aria-hidden="true">
              <Heart className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5" itemProp="articleSection">
                Neuroscience &amp; Emotional Intelligence
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>7 min read</span>
                <span aria-hidden="true" className="mx-1">·</span>
                <time dateTime="2026-09-17" itemProp="datePublished">Sep 17, 2026</time>
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}
          >
            Emotional Granularity: Why Specific Words Change What You Feel
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            Once you can name a feeling, the next lever is not more effort — it is more precision. Here is what emotional granularity is, why specific emotion words seem to change the feeling itself, and how a voice-journaling habit can build a personal vocabulary of emotion words one entry at a time.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="emotional-granularity" />
<div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">Key takeaways</p>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Emotional granularity is the skill of telling similar feelings apart, not just noticing that something is happening.</strong> "Bad" collapses a lot of different states into one word. "Apprehensively braced and resentfully tired" keeps the information that makes a feeling handleable.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Finer labels are linked to better regulation because they give the brain a more specific target.</strong> Research on affect labeling associates naming an emotion with reduced amygdala reactivity and increased activity in regions tied to cognitive control — the label appears to be part of the regulation, not just a report of it.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Granularity is trainable, and the correction loop is what trains it.</strong> Voice journaling proposes candidate labels, you confirm or reject them, and repeated rejections shift which labels the AI suggests next time.</div>
              </li>
            </ul>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg" itemProp="articleBody" id="article-root">

        <div>
          <p>
            Someone asks how you are, and this time you actually have an answer. "Anxious," you say. And it's true — but as soon as the word leaves your mouth, you notice it doesn't quite land. Anxious could mean the tight-chested kind, the wired-at-3am kind, or the bracing-for-news kind. It covers a whole weather system, and you've just described all of it with one word that fits none of it exactly.
          </p>
          <p className="mt-4">
            If that sounds familiar, you're past the first problem and into the second one. The alexithymia article in this library is about not having words at all. This one is about the words you already have being too broad to be useful — and about why choosing a sharper one is worth the effort.
          </p>
        </div>

        <div>
          <section aria-labelledby="section-what-is-granularity">
            <h2 id="section-what-is-granularity" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              So what is emotional granularity, exactly?
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The term names a specific skill: the ability to make fine distinctions between emotional states rather than collapsing them into a single broad label. Psychologist Lisa Feldman Barrett has argued that emotions are not fixed programs that fire automatically — they are constructed, in part, from the emotion concepts you have available. In that framing, a word for a feeling isn't a sticker you put on something already finished. It's part of how the brain makes sense of what the body is doing.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              If concepts are tools, then the size of your toolbox matters. "I feel stressed" is a hammer: it can strike almost anything, and it tells you very little. "I feel apprehensively braced, already behind, and restless with unfinished things" is a set of finer tools — each one pointing at a different part of the experience, and each one suggesting a different thing to do about it.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "In the how of emotion, then, become specific and you can change the what of experience."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Barrett, 2006, Personality and Social Psychology Review</cite>
            </blockquote>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: granularity is not the same as having a big vocabulary. "I feel emotionally complex" is long and vague. "I feel apprehensive and unfinished" is short and specific — and specific is what makes a label usable.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/16430327/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Barrett (2006) on categorization and the experience of emotion — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">Read the research: Solving the emotion paradox — PubMed</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>
<div>
          <section aria-labelledby="section-why-it-helps">
            <h2 id="section-why-it-helps" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why a finer word does something, not just describes something
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              It's tempting to think of emotion words as labels applied after the fact — the feeling happens, then you name it, for someone else's benefit. The research points somewhere more interesting. In a widely cited neuroimaging study, Lieberman and colleagues found that putting feelings into words was associated with reduced activity in the amygdala, the structure that helps drive the body's alarm response, alongside increased activity in the prefrontal regions involved in control.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              In other words, naming looks less like reporting and more like regulating. The word becomes a handle the system can grip. And the finer the handle, the more specific the grip: "I'm stressed" points vaguely at everything, while "I'm braced for a conversation I haven't had yet" points at one thing — which is a thing you can actually prepare for.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "Putting feelings into words... reduces the response of the amygdala."
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— Lieberman et al., 2007, Psychological Science</cite>
            </blockquote>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              This is worth being honest about, though: a better word does not delete the feeling, and nobody should expect one label to solve anything. What it does is narrow the problem from "everything is wrong" to something with edges. Narrower problems are easier to act on. That is the whole claim, and it is enough.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: naming isn't a magic eraser. It's a targeting system — and a specific target beats a vague one.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17576282/"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Lieberman et al. (2007) on affect labeling and reduced amygdala response — PubMed"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">Read the research: Putting feelings into words — affect labeling disconfirms amygdala response — PubMed</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-how-to-get-specific">
            <h2 id="section-how-to-get-specific" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              How to get more specific without guessing
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Granularity is often taught as vocabulary homework — memorize an emotion wheel, learn forty words, call it done. That approach tends to fail for the same reason a thesaurus doesn't make you a better writer: selecting a word you don't actually feel is just a more elaborate kind of guessing.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              What works better is narrower and more personal. Instead of asking "what is this feeling called?", ask what makes this instance different from the last time you used the same word. Is it heavy or wired? Does it sit in your chest or your jaw? Is it about something that already happened, or something you're braced for? Is it a feeling about a person, or about a situation you can name?
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Answering those questions doesn't require a list. It requires two or three candidates to compare — which is where a sounding board helps, and where a voice journal earns its place. You speak the experience in your own words, and the system offers a couple of candidate labels. You keep the one that rings truer and reject the one that doesn't. The rejection matters as much as the acceptance: repeated rejections shift which labels the AI suggests next time, so the suggestions get closer to the distinctions you actually make.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: don't hunt for the perfect word. Compare two plausible ones and keep the truer — the comparison is the skill.
            </p>
            <a
              href="https://journals.sagepub.com/doi/abs/10.1177/0963721414550708"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Kashdan, Barrett & McKnight (2015) on emotion differentiation — Current Directions in Psychological Science"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-colors group"
            >
              <span className="min-w-0">Read the review: Unpacking emotion differentiation — Current Directions in Psychological Science</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        </div>
        <div>
          <section aria-labelledby="section-few-words">
            <h2 id="section-few-words" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              A few words worth keeping
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You don't need forty. A handful of specific labels, used when they actually fit, goes further than a long list used loosely. These four cover a surprising amount of everyday territory:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong className="text-text-primary font-semibold">Apprehensive</strong> — braced for something uncertain and unpleasant before it arrives. More precise than "anxious" when the feeling is anticipatory.</li>
              <li><strong className="text-text-primary font-semibold">Resentfully tired</strong> — exhaustion with an edge, tired partly because something unfair has been carried too long. More precise than "exhausted."</li>
              <li><strong className="text-text-primary font-semibold">Restless</strong> — energy with nowhere to go, often felt in the body before it has a name. More precise than "bored" or "wound up."</li>
              <li><strong className="text-text-primary font-semibold">Heavy and unfinished</strong> — the weight of something unresolved. More precise than "sad," and it points somewhere useful: at the thing still open.</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed">
              None of these is a diagnosis, and none is mandatory. They're demonstrations of a move: taking a broad word and asking what it's actually made of. Once you can make that move, you can generate your own words.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you need a handful of words that fit, not a dictionary. The skill is the asking, not the list.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-faq" className="border-t border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <HelpCircle className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <h2 id="section-faq" className="text-xl lg:text-2xl font-bold text-text-primary">
                Frequently asked questions about emotional granularity and voice journaling
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
                to="/resources/alexithymia-emotional-vocabulary"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Neuroscience &amp; Emotional Intelligence</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      Why you can't name what you're feeling: alexithymia and the emotional vocabulary you were never taught
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Around 10% of people struggle to identify and describe their own emotions. Learn the neuroscience of emotional blindness and how AI voice journaling builds a personal vocabulary from scratch.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/science-of-reflection"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Neuroscience &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      How naming your emotions reduces stress and builds resilience
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn how affect labeling decreases amygdala activity and calms your nervous system through daily voice journaling.</p>
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Body Awareness &amp; Distress Detection</p>
                    <h4 className="font-bold text-text-primary group-text-primary font-semibold hover:underline mb-2 text-lg">
                      How your body tells you it's overwhelmed before your mind does
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Learn the neuroscience of interoception and how body-sensation mapping helps you catch overwhelm before it escalates.</p>
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
              Find the exact word
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed">
              Specific words change what you feel. Vocolens sharpens your vocabulary.
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
