import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/motion";
import { SmileySad as Frown, ChatsCircle as MessageSquare, Lightbulb, CalendarBlank as CalendarDays, BookOpenText, ChartBar as BarChart3, CaretRight, Lock, Clock, Sparkle, Crosshair } from '@phosphor-icons/react';
import { AnimatedSection } from '@/components/vocolens/AnimatedSection';
import { Reveal, RevealGroup, RevealItem } from '@/components/vocolens/Reveal';
import { AppDemo } from '@/components/vocolens/AppDemo';
import { EmotionDetection } from '@/components/vocolens/EmotionDetection';
import { EmotionScienceSuite } from '@/components/vocolens/EmotionScienceSuite';
import { PrivacySection } from '@/components/vocolens/PrivacySection';
import { FAQSection } from '@/components/vocolens/FAQSection';
import { GOOGLE_PLAY_URL, STORE_LINK_ATTRS } from '@/lib/app-links';

const speakableLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://vocolens.com",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#hero-heading", "#hero-subheading"],
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vocolens | AI Voice Journal That Learns From Every Entry" },
      { name: "description", content: "Now I use Vocolens - the AI voice journal that learns from every entry. Inside Vocolens: body sensation mapping and distress awareness. Get it on Google Play." },
      { property: "og:title", content: "Vocolens | AI Voice Journal That Learns From Every Entry" },
      { property: "og:description", content: "Now I use Vocolens - the AI voice journal that learns from every entry. Inside Vocolens: body sensation mapping and distress awareness. Get it on Google Play." },
      { property: "og:image", content: "/vocolens_-_preview.png" },
      { property: "og:url", content: "https://vocolens.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vocolens | AI Voice Journal That Learns From Every Entry" },
      { name: "twitter:description", content: "Now I use Vocolens - the AI voice journal that learns from every entry. Inside Vocolens: body sensation mapping and distress awareness. Get it on Google Play." },
      { name: "twitter:image", content: "/vocolens_-_preview.png" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(speakableLd) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <section id="home" className="relative max-w-7xl mx-auto px-6 pt-24 sm:pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
          <AnimatedSection animation="fade-in-left" className="lg:pl-[11%]">
            {/* Hero entrance orchestration (Motion house system): title →
              sub → chips → demo, one calm cascade on load. */}
            <motion.div
              className="hero-title-container mb-6"
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              custom={0.05}
            >
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#1e293b' }}>
                <span className="block">AI voice journal</span>
                <span className="block">that reflects</span>
                <span className="block"><span className="font-bold" style={{ color: '#1e293b' }}>your true self</span></span>
              </h1>
            </motion.div>
            <motion.p
              id="hero-subheading"
              className="text-text-secondary mb-6 max-w-md text-xl leading-relaxed"
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              custom={0.15}
            >
              Put a name to the emotions your mind overlooks - just speak, and let the words you say do the rest.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-6 max-w-lg"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 card-app rounded-full shadow-sm"
              >
                <div className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                  <Lock className="w-3.5 h-3.5 text-primary" weight="bold" />
                </div>
                <span className="text-sm text-text-primary font-semibold whitespace-nowrap">Private by design</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 card-app rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                  <Clock className="w-3.5 h-3.5 text-primary" weight="bold" />
                </div>
                <span className="text-sm text-text-primary font-semibold whitespace-nowrap">Just speak - no typing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 card-app rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                  <Sparkle className="w-3.5 h-3.5 text-primary" weight="bold" />
                </div>
                <span className="text-sm text-text-primary font-semibold whitespace-nowrap">Neurodivergent-friendly</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 card-app rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                  <Crosshair className="w-3.5 h-3.5 text-primary" weight="bold" />
                </div>
                <span className="text-sm text-text-primary font-semibold whitespace-nowrap">Granular emotion mapping</span>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={0.2} className="flex flex-col items-center justify-center lg:justify-start lg:-ml-4">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="show"
              custom={0.35}
            >
              <AppDemo />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: '#1e293b' }}>
            Real stories, real impact
          </h2>
        </Reveal>
        <RevealGroup
          className="grid md:grid-cols-3 gap-8"
        >
          <RevealItem className="card-app rounded-3xl p-8 h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <div className="min-w-0 mb-1">
              <h4 className="font-bold text-lg leading-tight">Jordan</h4>
              <p className="text-text-muted text-sm leading-relaxed">ADHD & Creative</p>
            </div>
            <p className="text-text-secondary my-4 text-base leading-relaxed flex-1">
              "I hit record on my commute, talked for 90 seconds about my morning frustration, and the AI showed me it wasn't anger — it was decision fatigue. Three weeks in, I can see my energy crashes always follow overstimulating meetings."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "90 seconds of talking replaced an hour of overthinking"
              </p>
            </div>
          </RevealItem>

          <RevealItem className="card-app rounded-3xl p-8 h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <div className="min-w-0 mb-1">
              <h4 className="font-bold text-lg leading-tight">Riley</h4>
              <p className="text-text-muted text-sm leading-relaxed">Autistic & Graduate Student</p>
            </div>
            <p className="text-text-secondary my-4 text-base leading-relaxed flex-1">
              "After a meltdown last month, I went back through my entries and saw the body map lighting up my shoulders and chest for five days straight before it happened. Now I check my weekly pattern and take a rest day when I see it building."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "My body was warning me for days — now I actually listen"
              </p>
            </div>
          </RevealItem>

          <RevealItem className="card-app rounded-3xl p-8 h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <div className="min-w-0 mb-1">
              <h4 className="font-bold text-lg leading-tight">Sam</h4>
              <p className="text-text-muted text-sm leading-relaxed">Alexithymia & Designer</p>
            </div>
            <p className="text-text-secondary my-4 text-base leading-relaxed flex-1">
              "The AI labeled my entry as 'grief' and I almost corrected it — but then I sat with it and realized it was right. I'd been carrying that for weeks without a word for it. The emotion wheel helped me learn the difference between sadness and loss."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "The AI named what I couldn't — and it was right"
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      <section id="story" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full p-1.5 chip-app shadow-clay hover-scale">
              <img
                src="/2e7f4e7c-9a75-4292-9b1d-399ac3f34923.jpg"
                alt="Vocolens founder - Creator of AI voice journal app"
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: '#1e293b' }}>
            A personal mission
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 text-base leading-relaxed">
            Turning racing thoughts into clear, effortless expression.
          </p>
        </Reveal>
        <RevealGroup
          className="grid md:grid-cols-3 gap-8"
        >
          <RevealItem className="card-app rounded-[28px] p-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <Frown className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold mb-2 text-xl">The problem</h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  Living with Tourette Syndrome & ADHD, my mind races. Traditional journaling felt like catching lightning with a pencil—frustrating, slow, never truly me.
                </p>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="card-app rounded-[28px] p-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <MessageSquare className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold mb-2 text-xl">Daily struggle</h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  Writing was a fight with myself. My thoughts raced while my hand cramped trying to keep up. I needed something as fast as my mind.
                </p>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="card-app rounded-[28px] p-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0 shadow-clay">
                <Lightbulb className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold mb-2 text-xl">The breakthrough</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                So I built this app. Now I just talk, and my thoughts are captured instantly. No barriers between mind and app. Finally, freedom to be authentically me.
              </p>
            </div>
          </div>
          </RevealItem>
        </RevealGroup>
      </section>

      <Reveal>
        <EmotionDetection />
      </Reveal>

      <section id="features-preview" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Inside Vocolens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}>
            Inside Vocolens: 13 ways to finally understand yourself
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Every screen has one job — turn your voice into clarity.
          </p>
        </Reveal>

        <RevealGroup
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: CalendarDays, label: 'Journal calendar', desc: 'Presence, not streaks.' },
            { icon: BookOpenText, label: 'Weekly reflection', desc: 'Your week as a story.' },
            { icon: BarChart3, label: 'Mood story', desc: 'One emotion per day.' },
          ].map(({ icon: Icon, label, desc }) => (
            <RevealItem key={label} className="card-app rounded-2xl p-5 text-center">
              <div className="w-11 h-11 rounded-full chip-app flex items-center justify-center mb-3 mx-auto shadow-clay">
                <Icon className="w-5 h-5 text-[#6A3FC0]" />
              </div>
              <p className="font-bold text-text-primary mb-1">{label}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="text-center mt-12 lg:mt-16">
          <Link
            to="/features"
            className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-10 sm:py-5 rounded-full whitespace-nowrap text-base sm:text-xl font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Explore all 13 features
            <CaretRight className="w-6 h-6" />
          </Link>
          <p className="text-text-muted text-base mt-5">
            Curious how it fits your mind specifically?{' '}
            <Link to="/use-cases" className="text-primary font-semibold hover:underline">
              See Vocolens for ADHD, autism &amp; alexithymia
            </Link>
          </p>
        </Reveal>
      </section>

      <Reveal>
        <EmotionScienceSuite />
      </Reveal>

      <section id="download" className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Reveal className="card-app rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Understand yourself, one conversation at a time.
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Speak instead of typing — Vocolens turns your voice into mood insights and emotional clarity. Free to try on Google Play.
          </p>
          <a
            href={GOOGLE_PLAY_URL}
            {...STORE_LINK_ATTRS}
            className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-12 sm:py-6 rounded-full whitespace-nowrap text-base sm:text-xl font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Get it on Google Play
            <CaretRight className="w-6 h-6" />
          </a>
        </Reveal>
      </section>

      <Reveal>
        <FAQSection />
      </Reveal>

      <Reveal>
        <PrivacySection />
      </Reveal>
    </div>
  );
}
