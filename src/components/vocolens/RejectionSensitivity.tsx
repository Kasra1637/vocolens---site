import { ListenToArticle } from './ListenToArticle';
import { HeartBreak, ArrowUpRight, Clock, CaretRight, CaretRight as ChevronRight, Question as HelpCircle } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';
import { BackToTop } from './BackToTop';

const faqData = [
  {
    question: 'What is rejection sensitive dysphoria (RSD)?',
    answer: 'Rejection sensitive dysphoria is a community term — used mostly in ADHD circles — for sudden, intense emotional pain triggered by real or perceived criticism, rejection, or failure. The criticism that ruins an entire afternoon, the unread message that feels like a verdict. It is not an official diagnosis, but the experience it points to is real: heightened rejection sensitivity has been studied by psychologists since the 1990s, and emotional dysregulation is increasingly recognized as a core feature of ADHD.',
  },
  {
    question: 'Is rejection sensitive dysphoria an official diagnosis?',
    answer: 'No. RSD does not appear in the DSM-5 and has no formal diagnostic criteria. The term was popularized by ADHD psychiatrist Dr. William Dodson to describe a pattern he saw repeatedly in his patients. Researchers have reasonably pushed back on packaging it as a distinct condition — but the pieces underneath are solidly established: rejection sensitivity is a long-standing research construct, and emotional dysregulation is well documented in ADHD. The label is informal; the experience is not.',
  },
  {
    question: 'Why does rejection hurt so much more with ADHD?',
    answer: 'Two established threads converge. First, social-pain research shows that exclusion activates some of the same brain circuitry that registers the distress of physical pain — so hurt feelings are biologically real, not a metaphor. Second, ADHD is fundamentally a disorder of self-regulation, which includes regulating emotional responses. The hit arrives at full intensity, and the brake most people take for granted engages more slowly. Real, fast, and hard to self-soothe — that combination is what people mean when they say RSD.',
  },
  {
    question: 'How is rejection sensitivity different from social anxiety?',
    answer: 'Social anxiety is primarily anticipatory: fear of being judged before and during social situations, which often leads to avoidance. Rejection sensitivity is more about the intensity of the reaction when rejection actually lands — or seems to. The trigger can be as small as a short text reply. The two can overlap and feed each other, but one is about dreading the evaluation; the other is about the wound of the perceived verdict.',
  },
  {
    question: 'What actually helps when a rejection spiral hits?',
    answer: 'Three moves, in order. Name the feeling precisely — "dismissed," "humiliated," and "left out" are different experiences with different needs, and research on affect labeling suggests that finding a specific word takes intensity out of a feeling. Then separate the event from the story: say out loud what literally happened, then what the feeling says it meant — the gap between the two is where the spiral lives. Finally, get it into words early: a short voice note in the minutes after the hit gives the loop somewhere to go besides the rest of your afternoon. If rejection pain is significantly affecting your work or relationships, a therapist familiar with ADHD can help — journaling is a support, not a treatment.',
  },
];

export function RejectionSensitivity() {

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why 'No' Lands Like a Bruise: Rejection Sensitivity and the ADHD Brain",
    "alternativeHeadline": "Rejection Sensitive Dysphoria Explained: Why Criticism Hurts So Much With ADHD",
    "description": "Why does criticism or rejection hurt so much with ADHD? Learn what rejection sensitive dysphoria is, what social-pain research actually shows, and what helps in the minutes after the hit.",
    "image": "https://vocolens.com/vocolens-logo.png",
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-19",
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
      "@id": "https://vocolens.com/resources/rejection-sensitivity"
    },
    "articleSection": "ADHD & Emotional Regulation",
    "keywords": "rejection sensitivity dysphoria, RSD, ADHD rejection, rejection sensitivity, social pain, emotional dysregulation ADHD, ADHD emotional regulation, criticism sensitivity, voice journaling ADHD",
    "wordCount": 1550,
    "inLanguage": "en-US",
    "about": [
      { "@type": "Thing", "name": "Rejection sensitivity", "description": "The tendency to anxiously expect, readily perceive, and intensely react to real or perceived rejection" },
      { "@type": "Thing", "name": "Social pain", "description": "The distress experienced in response to social exclusion or rejection, sharing neural circuitry with physical pain" },
      { "@type": "Thing", "name": "Emotional dysregulation", "description": "Emotions that arrive at full intensity and take longer to settle, a core feature of ADHD" }
    ],
    "mentions": [
      { "@type": "ScholarlyArticle", "name": "Does Rejection Hurt? An fMRI Study of Social Exclusion", "author": { "@type": "Person", "name": "Naomi I. Eisenberger" }, "datePublished": "2003", "url": "https://www.science.org/doi/10.1126/science.1089134" },
      { "@type": "ScholarlyArticle", "name": "Attention-Deficit Hyperactivity Disorder, Self-Regulation, and Time", "author": { "@type": "Person", "name": "Russell A. Barkley" }, "datePublished": "1997" },
      { "@type": "ScholarlyArticle", "name": "Implications of Rejection Sensitivity for Intimate Relationships", "author": { "@type": "Person", "name": "Geraldine Downey" }, "datePublished": "1996" }
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
        { "@type": "ListItem", "position": 3, "name": "Rejection Sensitivity & the ADHD Brain", "item": "https://vocolens.com/resources/rejection-sensitivity" }
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
              <span className="text-text-primary font-medium" itemProp="name">Rejection Sensitivity &amp; the ADHD Brain</span>
              <meta itemProp="item" content="https://vocolens.com/resources/rejection-sensitivity" />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay" aria-hidden="true">
              <HeartBreak className="w-5 h-5 text-[#6A3FC0]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full" itemProp="articleSection">
                ADHD &amp; Emotional Regulation
              </span>
            </div>
          </div>
          <h1
            itemProp="headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}
          >
            Why 'No' Lands Like a Bruise: Rejection Sensitivity and the ADHD Brain
          </h1>
          <p data-speakable="summary" className="text-text-secondary mb-5 text-base leading-relaxed">
            For some people — especially with ADHD — a small sign of rejection lands like a physical blow: sudden, disproportionate, and impossible to shake. Here's what <strong className="text-text-primary font-semibold">rejection sensitive dysphoria</strong> actually is, what brain research says about why social pain hurts like real pain, and what genuinely helps in the ten minutes after the hit.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
            <span>By <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Vocolens</span></span></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              <span>8 min read</span>
              <span aria-hidden="true" className="mx-1">·</span>
              <time dateTime="2026-09-19" itemProp="datePublished">Sep 19, 2026</time>
            </span>
          </div>
        </div>
      </div>

      <ListenToArticle slug="rejection-sensitivity" />

          <div data-speakable="key-takeaways" className="card-app rounded-3xl p-6 sm:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-2">Key takeaways</p>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">Rejection pain is real pain, as far as your brain is concerned.</strong> In a landmark fMRI study, social exclusion activated some of the same circuitry that registers the distress of physical pain. "Hurt feelings" is not a metaphor.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">"RSD" is a community term, not a diagnosis — but the experience is well documented.</strong> Rejection sensitivity has been studied by psychologists since the 1990s, and emotional dysregulation is increasingly recognized as a core feature of ADHD.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0"><strong className="font-semibold text-text-primary">What shrinks the hit: precise naming, and separating the event from the story.</strong> A short voice note in the minutes after — what literally happened, versus what the feeling says it meant — gives the spiral somewhere to go besides your entire afternoon.</div>
              </li>
            </ul>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-text-secondary leading-relaxed text-base lg:text-lg max-w-prose" itemProp="articleBody" id="article-root">

        <div>
          <p>
            It's 9:04 on a Tuesday morning. Your manager returns a document with three comments. Two are fine — "good catch here," "nice phrasing." The third says, simply: "I'd reword this section." By 9:10, you've read that one line eleven times. You've drafted an apology you'll never send, audited your last four weeks of work for the pattern behind it, and started composing a resignation letter in your head. You know, somewhere underneath all of it, that it's one comment on one document. Knowing makes no difference at all.
          </p>
          <p className="mt-4">
            If criticism, a slow text reply, or being left off a meeting invite lands somewhere physical — a hot drop in the chest, a bruise with no visible source — you are not dramatic, and you are not weak. And if you have ADHD, this is not a coincidence. There's a name used widely in the ADHD community for the pattern, a real research story underneath it, and — more usefully — a short list of things that genuinely take the edge off in the ten minutes after the hit.
          </p>
        </div>

        <div>
          <section aria-labelledby="section-what-is-rsd">
            <h2 id="section-what-is-rsd" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              What rejection sensitivity actually is (and what it isn't)
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <strong className="text-text-primary font-semibold">Rejection sensitive dysphoria (RSD)</strong> is a community term — most used in ADHD circles — for sudden, intense emotional pain triggered by real or perceived criticism, rejection, or failure. "Perceived" is doing important work in that sentence. The wound doesn't require an actual rejection. A flat "ok" can do it. A pause before a reply can do it.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              It's worth being precise about the label, because precision is what keeps this from becoming either a trend diagnosis or a dismissed one. RSD is not in the DSM-5. The term was popularized by ADHD psychiatrist Dr. William Dodson, who noticed the same pattern in patient after patient: not the occasional sting everyone knows, but lightning-fast, whole-body devastation at the smallest sign of disapproval. Researchers have pushed back on packaging it as a distinct condition — and that pushback is fair. But the pieces underneath are solidly established. Psychologists Geraldine Downey and Scott Feldman formalized <strong className="text-text-primary font-semibold">rejection sensitivity</strong> as a studied pattern back in the 1990s — an anxious expectation of rejection, a quick readiness to perceive it, and an outsized reaction when it, or its shadow, appears. And emotional dysregulation — emotions that arrive at full volume and take much longer to settle — is increasingly understood as a central feature of ADHD, not a footnote to it.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you don't need the acronym to be official for the experience to be real. The research story holds up without it.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-social-pain">
            <h2 id="section-social-pain" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why rejection physically hurts: the social pain studies
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              In 2003, neuroscientists Naomi Eisenberger, Matthew Lieberman, and Kipling Williams put people in an fMRI scanner and had them play a simple ball-tossing game called Cyberball — with two other "players" who were actually computer scripts. Partway through, the other players stopped passing the ball to the participant. That is the entire manipulation: a cartoon ball game, a deliberate snub, no stakes, no history.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Watching the exclusion, participants' brains showed increased activity in the dorsal anterior cingulate cortex — a region that also registers the distress of physical pain. The more excluded people said they felt, the more active that region was.
            </p>
            <blockquote className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 italic text-base text-text-secondary leading-relaxed">
              "Does rejection hurt?"
              <cite className="block mt-2 text-sm not-italic text-text-muted font-medium">— the opening question of Eisenberger, Lieberman &amp; Williams, 2003, Science</cite>
            </blockquote>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Careful with the pop version of this finding. It doesn't mean social pain and physical pain are identical — later work suggests the overlap is mostly in the distress component of pain, the suffering rather than the location. But that's exactly the part that matters here. When people with rejection sensitivity describe criticism as a blow, they're not reaching for a metaphor. Their brains are doing something measurably similar to what they'd do after a physical injury: sounding an alarm, recruiting distress circuitry, demanding attention now.
            </p>
            <a
              href="https://www.science.org/doi/10.1126/science.1089134"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Eisenberger, Lieberman & Williams (2003) on social exclusion and pain-related brain regions — Science"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="underline underline-offset-2">Read the research: Does rejection hurt? An fMRI study of social exclusion — Science</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: hurt feelings aren't a metaphor. Your brain treats social injury as injury — and responds with similar urgency.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-adhd-brain">
            <h2 id="section-adhd-brain" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why the ADHD brain takes the hit harder
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              Every brain sounds the social-pain alarm. What differs is the braking system. ADHD, in the model psychiatrist Russell Barkley has spent a career building, is at root a disorder of <strong className="text-text-primary font-semibold">self-regulation</strong> — not just of attention or activity, but of the machinery that modulates your own responses, emotions included. The attention and hyperactivity symptoms are what other people see. The slower, quieter part — emotions that arrive at full intensity and take much longer to settle — is what you live with.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The timing is the tell. For most people, a sting arrives, the brake engages, and the feeling decays over minutes. With ADHD, there's essentially no ramp: zero to devastated in a heartbeat. And then, often, a second arrow arrives — shame about the reaction itself. <em>Why am I like this? It was one comment.</em> The second arrow usually hurts longer than the first, because it turns a moment of pain into an indictment of character.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: the speed and force of the reaction is the self-regulation system working the way it works in ADHD — not a character verdict.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-advice-backfires">
            <h2 id="section-advice-backfires" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Why "just don't take it personally" has never once worked
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              You already know the standard advice. Don't take it personally. Let it roll off. It's not that serious. If you could, you would have by now — nobody chooses an afternoon of chest-tight replaying. Suppression fails here for the same reason it fails with rumination: a feeling that's pushed down without being processed doesn't close. It reopens, usually with reinforcements.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              What fills the gap instead, for many people, is managing the risk rather than the feeling: people-pleasing to avoid criticism entirely, perfectionism as armor, over-explaining, apologizing preemptively for things that don't need apologies. These work, in the narrow sense — fewer hits land. But they charge you a subscription fee, because now your sense of safety depends on everyone around you being careful with you, forever. That's not regulation. It's a second job with no days off.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              The alternative isn't caring less. It's giving the hit somewhere to go besides rumination — early, while it's still one comment and not the story of your entire worth.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: you can't will the sting smaller. You can give it a place to land — fast — before it becomes the story of your whole day.
            </p>
          </section>
        </div>

        <div>
          <section aria-labelledby="section-what-helps">
            <h2 id="section-what-helps" className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              What actually helps in the ten minutes after
            </h2>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <strong className="text-text-primary font-semibold">Name it precisely.</strong> "Hurt" is a fog. "Dismissed," "embarrassed," "left out," "devalued" are different experiences with different shapes — and a body of research on affect labeling suggests that the act of finding a specific word reliably takes intensity out of a feeling. This is the emotional granularity move: the finer the label, the more usable the handle. "Bad" gives you nothing to work with. "Publicly corrected" points at something.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <strong className="text-text-primary font-semibold">Separate the event from the story.</strong> Out loud, in plain sentences: <em>She wrote "I'd reword this section."</em> That's the event. <em>Everyone can finally see I don't belong here</em> — that's the story the feeling generated. The story is where the spiral lives; the event, spoken plainly, is usually survivable. Voice journaling is unusually good at forcing this distinction, because you can't hide vagueness in spoken words the way you can in thought. Saying it makes you commit to what actually happened.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              <strong className="text-text-primary font-semibold">Get it out early — then look for the pattern.</strong> A sixty-second voice note in the minutes after the hit does more than an hour of silent replay that evening, because it gives the loop a completion signal while it's still small. And after a few weeks of entries, something else appears: it's rarely every rejection. It's the same two or three triggers in different clothing — being corrected in front of others, being left on read, being excluded from a decision that involves you. A specific, repeating pattern is workable in a way that "everything devastates me" never is.
            </p>
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              One honest limit: journaling is a support, not a treatment. If rejection pain is driving depression, rage episodes, or making work or relationships feel impossible, that's a therapist conversation — ideally one who knows ADHD well. None of what's above replaces that. It's what you do alongside it.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              Takeaway: name it precisely, split the event from the story, and get it out of your head early. That's the whole playbook — it fits in ten minutes.
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
                Frequently asked questions about rejection sensitivity and ADHD
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
                to="/resources/emotional-granularity"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Neuroscience &amp; Emotional Intelligence</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Emotional granularity: why specific words change what you feel
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Precise emotion labels take intensity out of a feeling — the skill that makes naming rejection pain actually work.</p>
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
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Anxiety &amp; Mental Wellness</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      The overthinking trap: why your brain won't stop and what actually helps
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">The 2am replay is rumination, not reflection — learn why unfinished thoughts loop and how speaking closes the file.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/alexithymia-emotional-vocabulary"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Alexithymia &amp; Emotional Vocabulary</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Why you can't name what you're feeling
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">When feelings register as fog, AI-assisted voice journaling helps build a vocabulary from your own words.</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <Link
                to="/resources/emotional-awareness-patterns"
                className="block w-full text-left p-6 sm:p-8 card-app rounded-3xl group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="inline-flex rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary leading-none mb-1">Mental Wellness &amp; Self-Discovery</p>
                    <h4 className="font-bold text-text-primary group-text-primary hover:underline mb-2 text-lg">
                      Building emotional awareness through pattern recognition
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">Once your entries accumulate, patterns surface — including which rejections actually trigger you and which don't.</p>
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
              Name the sting
            </h2>
            <p className="text-text-secondary mb-5 text-base leading-relaxed max-w-[547px] mx-auto lg:max-w-[720px]">
              Say what happened out loud — Vocolens separates the hit from the story.
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
