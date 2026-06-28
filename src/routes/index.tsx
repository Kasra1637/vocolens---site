import { createFileRoute, Link } from "@tanstack/react-router";
import { Frown, MessageSquare, Lightbulb, CalendarDays, BookOpenText, BarChart3, Activity, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedGrid } from '@/components/vocolens/AnimatedSection';
import { AppDemo } from '@/components/vocolens/AppDemo';
import { EmotionDetection } from '@/components/vocolens/EmotionDetection';
import { EmotionScienceSuite } from '@/components/vocolens/EmotionScienceSuite';
import { PrivacySection } from '@/components/vocolens/PrivacySection';
import { FAQSection } from '@/components/vocolens/FAQSection';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vocolens | AI Voice Journal App for Emotional Clarity" },
      { name: "description", content: "Vocolens is an AI voice journal app to name emotions, reduce stress, and gain emotional clarity. Free on Android." },
      { property: "og:title", content: "Vocolens | AI Voice Journal for Emotional Clarity & Stress Relief" },
      { property: "og:description", content: "Name your emotions, reduce stress, and build resilience. Vocolens turns your spoken thoughts into powerful self-awareness — free AI voice journal for Android." },
      { property: "og:image", content: "/vocolens_-_preview.png" },
      { property: "og:url", content: "https://vocolens.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vocolens | AI Voice Journal for Emotional Clarity & Stress Relief" },
      { name: "twitter:description", content: "Name your emotions, reduce stress, and build resilience. Vocolens turns your spoken thoughts into powerful self-awareness — free AI voice journal for Android." },
      { name: "twitter:image", content: "/vocolens_-_preview.png" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <section id="home" className="max-w-7xl mx-auto px-6 py-10 lg:py-16" style={{ paddingTop: '116.48px' }}>
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <AnimatedSection animation="fade-in-left" className="lg:pl-[11%]">
            <div className="hero-title-container mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontSize: 'clamp(36px, 8vw, 58px)', color: '#1e293b' }}>
                <span className="block">AI voice journal</span>
                <span className="block">that reflects</span>
                <span className="block"><span className="font-bold" style={{ color: '#1e293b' }}>your true self</span></span>
              </h1>
            </div>
            <p className="text-text-secondary mb-6 max-w-md text-xl leading-relaxed">
              Speak your mind. Find your clarity. An audio journal app that listens.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 max-w-lg">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-primary/10">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-primary"><rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <span className="text-sm text-text-primary font-medium whitespace-nowrap">Private by design</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-primary/10">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-primary"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <span className="text-sm text-text-primary font-medium whitespace-nowrap">Flawlessly accurate transcription</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-primary/10">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-primary"><path d="M7 1.5l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm text-text-primary font-medium whitespace-nowrap">Neurodivergent-friendly</span>
              </div>

            </div>
          </AnimatedSection>


          <AnimatedSection animation="fade-in-right" delay={0.2} className="flex flex-col items-center justify-center lg:justify-start lg:-ml-4">
            <AppDemo />
          </AnimatedSection>
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <AnimatedSection animation="fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: '#1e293b' }}>
            Real stories, real impact
          </h2>
        </AnimatedSection>
        <AnimatedGrid
          className="grid md:grid-cols-3 gap-8"
          animation="fade-in-up"
          staggerDelay={0.15}
        >
          <div className="bg-white rounded-3xl shadow-clay p-8 border border-primary/10 hover-lift h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <h4 className="font-bold mb-1 text-lg">Jordan</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">ADHD & Creative</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "My thoughts race at 100 mph and writing them down feels like trying to catch a waterfall with a teaspoon. Speaking into Vocolens is instant relief — no paralysis, no perfectionism, just pure unfiltered me. I finally understand my own patterns."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "Finally, a journal that moves as fast as my mind"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-clay p-8 border border-primary/10 hover-lift h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <h4 className="font-bold mb-1 text-lg">Riley</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">Autistic & Graduate Student</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "Writing has always felt like translating my brain into a foreign language. With Vocolens, I just talk — no pressure to organize thoughts first. The AI helps me see emotional patterns I never noticed, especially around burnout and sensory overload."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "Like having a translator for my own mind"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-clay p-8 border border-primary/10 hover-lift h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <h4 className="font-bold mb-1 text-lg">Sam</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">Alexithymia & Designer</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "I used to just say 'I feel bad' — I couldn't name what was actually going on. Vocolens showed me the patterns in my body that matched specific emotions. Now I have a language for what I feel."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "I finally have words for what my body already knew"
              </p>
            </div>
          </div>
        </AnimatedGrid>
      </section>



      <section id="story" className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection animation="scale-in">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/2e7f4e7c-9a75-4292-9b1d-399ac3f34923.jpg"
              alt="Vocolens founder - Creator of AI voice journal app"
              className="w-40 h-40 rounded-full object-cover shadow-clay hover-scale"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: '#1e293b' }}>
            A personal mission
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 text-base leading-relaxed">
            Turning racing thoughts into clear, effortless expression.
          </p>
        </AnimatedSection>
        <AnimatedGrid
          className="grid md:grid-cols-3 gap-8"
          animation="fade-in-up"
          staggerDelay={0.15}
        >
          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <Frown className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold mb-3 text-xl">The problem</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                My mind races fast due to Tourette Syndrome and ADHD. Traditional journaling felt like catching lightning with a pencil—frustrating, slow, and never truly me.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <MessageSquare className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Daily struggle</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Writing was a fight with myself. My thoughts raced while my hand cramped trying to keep up. I needed something as fast as my mind.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <Lightbulb className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold mb-3 text-xl">The breakthrough</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                So I built this app. Now I just talk, and my thoughts are captured instantly. No barriers between mind and app. Finally, freedom to be authentically me.
              </p>
            </div>
          </div>
        </AnimatedGrid>
      </section>




      <EmotionDetection />

      <section id="features-preview" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
            Inside Vocolens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1e293b' }}>
            Ten ways to finally understand yourself.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Every screen has one job — turn your voice into clarity you can act on. No streaks. No guilt. No overwhelm.
          </p>
        </AnimatedSection>

        <AnimatedGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" animation="fade-in-up" staggerDelay={0.08}>
          {[
            { icon: CalendarDays, label: 'Journal calendar', desc: 'Presence, not streaks.' },
            { icon: BookOpenText, label: 'Weekly reflection', desc: 'Your week as a story.' },
            { icon: BarChart3, label: 'Mood story', desc: 'One emotion per day.' },
            { icon: Activity, label: 'Body sensation map', desc: 'Read what your body knows.' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-primary/10 shadow-clay-sm hover-lift">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-text-primary mb-1">{label}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </AnimatedGrid>

        <AnimatedSection animation="fade-in-up" className="text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore all 10 features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>

      <EmotionScienceSuite />

      <section id="download" className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <AnimatedSection animation="fade-in-up" className="bg-white rounded-3xl shadow-clay-lg p-10 lg:p-16 border border-primary/10 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Be the first to try Vocolens
          </h3>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            One email when we launch. Nothing else.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
        </AnimatedSection>
      </section>


      <FAQSection />


      <PrivacySection />

      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary/[0.03] to-primary/[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
          <div className="text-center mb-16">
            <img
              src="/logo_vocolens.png"
              alt="Vocolens AI voice journal logo"
              className="h-12 w-auto mx-auto mb-6"
            />
            <p className="text-text-secondary font-medium mb-2 text-base leading-relaxed">
              Stop overthinking. Start understanding.
            </p>
            <p className="text-text-muted text-base leading-relaxed">
              AI voice journaling for people who want to grow.
            </p>
          </div>

          <div className="hidden">
            <a
              href="https://www.instagram.com/vocolensapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vocolens on Instagram"
              className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-clay border border-primary/10 flex items-center justify-center hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@vocolens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vocolens on YouTube"
              className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-clay border border-primary/10 flex items-center justify-center hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/vocolens/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vocolens on LinkedIn"
              className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-clay border border-primary/10 flex items-center justify-center hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vocolensapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vocolens on TikTok"
              className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-clay border border-primary/10 flex items-center justify-center hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            <Link
              to="/terms"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-text-muted/30 hidden sm:inline">|</span>
            <Link
              to="/privacy"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-text-muted/30 hidden sm:inline">|</span>
            <Link
              to="/resources"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </div>

          <div className="border-t border-primary/10 pt-8">
            <p className="text-center text-text-muted/60 text-base leading-relaxed">
              2026 Vocolens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
