import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, BarChart3, Sparkles, Frown, MessageSquare, Lightbulb, Brain, Heart, Clock, Cloud, Activity, Shield } from 'lucide-react';
import { AnimatedSection, AnimatedGrid } from '@/components/vocolens/AnimatedSection';
import { AppDemo } from '@/components/vocolens/AppDemo';
import { EmotionDetection } from '@/components/vocolens/EmotionDetection';
import { EmotionScienceSuite } from '@/components/vocolens/EmotionScienceSuite';
import { PrivacySection } from '@/components/vocolens/PrivacySection';

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
    <div className="min-h-screen bg-surface">      <section id="home" className="max-w-7xl mx-auto px-6 py-10 lg:py-16" style={{ paddingTop: '116.48px' }}>
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <AnimatedSection animation="fade-in-left" className="lg:pl-[11%]">
            <div className="hero-title-container mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight hero-title-shimmer" style={{ fontSize: 'clamp(36px, 8vw, 58px)' }}>
                <span className="hero-line-1">AI voice journal</span>
                <span className="hero-line-2">that reflects</span>
                <span className="hero-line-3"><span className="hero-emphasis">your true self</span></span>
              </h1>
            </div>
            <p className="text-text-secondary mb-8 max-w-md text-xl leading-relaxed">
              Speak your mind. Find your clarity. An audio journal app that listens.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={0.2} className="flex flex-col items-center justify-center lg:justify-start lg:-ml-4">
            <AppDemo />
          </AnimatedSection>
        </div>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
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
              <h3 className="font-bold text-text-primary mb-3 text-xl">The problem</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Living with Tourette's, my mind races fast. Traditional journaling felt like catching lightning with a pencil—frustrating, slow, and never truly me.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <MessageSquare className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-text-primary mb-3 text-xl">Daily struggle</h3>
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
              <h3 className="font-bold text-text-primary mb-3 text-xl">The breakthrough</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                So I built this app. Now I just talk, and my thoughts are captured instantly. No barriers between mind and app. Finally, freedom to be authentically me.
              </p>
            </div>
          </div>
        </AnimatedGrid>
      </section>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection animation="blur-in" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            How our AI voice journal works
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            Three steps from raw thoughts to clear audio journal insights.
          </p>
        </AnimatedSection>
        <AnimatedGrid
          className="grid md:grid-cols-3 gap-8"
          animation="scale-in"
          staggerDelay={0.2}
        >
          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <Mic className="w-10 h-10 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-text-primary mb-3 text-xl">Speak Freely</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Your thoughts, captured instantly. No friction, no judgment—just you and your voice.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <BarChart3 className="w-10 h-10 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-text-primary mb-3 text-xl">Understand Instantly</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                AI reveals your emotional triggers, patterns, and what truly drives your mood.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-clay border border-primary/10 hover-lift">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-4 shadow-clay">
                <Sparkles className="w-10 h-10 text-[#9b87f5]" />
              </div>
              <h3 className="font-bold text-text-primary mb-3 text-xl">Track Growth</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                See your progress, celebrate wins, and watch yourself evolve over weeks and months.
              </p>
            </div>
          </div>
        </AnimatedGrid>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <AnimatedSection animation="fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            Journal in your native tongue
          </h2>
          <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            World-class real-time transcription. 30+ languages. Zero friction.
          </p>
        </AnimatedSection>
        <div
          className="relative overflow-hidden py-4"
          role="marquee"
          aria-label="Supported languages scrolling display"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-left gap-3">
            {(() => {
              const languages = [
                'English (US)', 'Spanish', 'French', 'German', 'Italian',
                'Portuguese', 'Japanese', 'Korean', 'Mandarin', 'Hindi',
                'Arabic', 'Dutch', 'Swedish', 'Norwegian', 'Danish',
                'Finnish', 'Polish', 'Turkish', 'Russian', 'Thai',
                'Catalan', 'Estonian', 'Flemish', 'Swiss German', 'Greek',
                'Latvian', 'Lithuanian', 'Malay', 'Romanian', 'Slovak'
              ];
              return [...languages, ...languages];
            })().map((lang, index) => (
              <div
                key={`${lang}-${index}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10 flex-shrink-0 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-3 h-3 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm text-text-secondary whitespace-nowrap font-medium">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmotionDetection />

      <EmotionScienceSuite />


      <section id="features" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <AnimatedSection animation="blur-in" className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Emotional Intelligence Analysis
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto mb-8 text-base leading-relaxed">
            See the patterns you've missed. Understand yourself deeply.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" className="bg-white rounded-3xl shadow-clay-lg p-8 lg:p-12 border border-primary/10 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay hover-icon">
                <Clock className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1 text-lg">Sentiment Timeline</h4>
                <p className="text-text-secondary text-base leading-relaxed">Track emotional patterns over time</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay hover-icon">
                <Cloud className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1 text-lg">Emotion Cloud</h4>
                <p className="text-text-secondary text-base leading-relaxed">Visualize frequent emotions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay hover-icon">
                <Activity className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1 text-lg">Voice Analysis</h4>
                <p className="text-text-secondary text-base leading-relaxed">Analyze tone and energy</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay hover-icon">
                <Brain className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1 text-lg">AI Insights</h4>
                <p className="text-text-secondary text-base leading-relaxed">Get personalized patterns</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5 border border-primary/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Emotional Vocabulary Analysis</h4>
                <span className="px-2 py-1 bg-primary text-white text-sm rounded-full font-semibold">HIGH</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Tracks the complexity and richness of your emotional expression over time, revealing your growing self-awareness.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-primary/10">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"Your emotional vocabulary has expanded by 23% this month"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-xl p-5 border border-accent/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Trigger Detection</h4>
                <span className="px-2 py-1 bg-amber-500 text-white text-sm rounded-full font-semibold">MEDIUM</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Identifies correlations between specific topics and your emotional responses with confidence scores.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-accent/10">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"Work meetings correlate with anxiety 78% of the time"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5 border border-primary/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Emotional Coherence Analysis</h4>
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded-full font-semibold">INFO</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Detects when your expressed emotions conflict with each other, helping you understand inner tensions.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-blue-50">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"Detected conflicting emotions: excitement + anxiety about promotion"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5 border border-primary/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Mood Cycle Detection</h4>
                <span className="px-2 py-1 bg-primary text-white text-sm rounded-full font-semibold">HIGH</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Discovers temporal patterns like morning energy dips, weekend recovery cycles, and seasonal mood shifts.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-primary/10">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"You tend to feel more energized on weekends (avg +2.3 points)"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-xl p-5 border border-accent/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Emotional Shift Tracking</h4>
                <span className="px-2 py-1 bg-amber-500 text-white text-sm rounded-full font-semibold">MEDIUM</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Monitors how you transition between emotional states and identifies what helps you recover from difficult feelings.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-accent/10">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"Exercise helps you shift from stressed to calm in 2 hours"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5 border border-primary/10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-text-primary text-lg">Growth Pattern Recognition</h4>
                <span className="px-2 py-1 bg-emerald-500 text-white text-sm rounded-full font-semibold">GROWTH</span>
              </div>
              <p className="text-text-secondary mb-3 text-base leading-relaxed">
                Tracks your resilience development and self-awareness evolution, celebrating your progress over time.
              </p>
              <div className="bg-white/80 rounded-lg p-3 border border-emerald-50">
                <p className="text-text-muted mb-1 text-base leading-relaxed">Evidence from your journal:</p>
                <p className="text-text-primary italic text-base leading-relaxed">"Your resilience score has improved 34% in 3 months"</p>
              </div>
            </div>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 text-xl">
              Download & start using Vocolens now!
            </h3>
            <img
              src="/getitongoogleplay_badge_web_color_english.png"
              alt="Download Vocolens AI voice journal on Google Play"
              className="h-16 sm:h-20 lg:h-28 mx-auto hover:opacity-90 transition-opacity cursor-pointer btn-scale-gentle"
            />
          </div>
        </AnimatedSection>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-8">
        <AnimatedSection animation="fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-16">
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
            <h4 className="font-bold text-text-primary mb-1 text-lg">Sarah Chen</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">UX Designer & Mom</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "This AI voice journal has been life-changing for me. As a busy mom and designer, I struggle to find time to reflect on my thoughts, although this audio journal app makes it so easy to capture my emotions on the go every day."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "100% recommend this app for busy people"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-clay p-8 border border-primary/10 hover-lift h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <h4 className="font-bold text-text-primary mb-1 text-lg">Marcus Rodriguez</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">Tech Entrepreneur</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "The AI insights are incredibly impressive. I've tried many journaling apps but none have made reflections this meaningful. Understanding my mental patterns helps me make better business and life decisions every single day now."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "This AI journaling really does add value"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-clay p-8 border border-primary/10 hover-lift h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">&#9733;</div>
              ))}
            </div>
            <h4 className="font-bold text-text-primary mb-1 text-lg">Alex Thompson</h4>
            <p className="text-text-muted mb-4 text-base leading-relaxed">College Student</p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              "I never thought I'd be into journaling, but this app changed my perspective completely. The voice recording removes the intimidation of writing, and I love seeing my emotional growth over time, which is remarkable."
            </p>
            <div className="bg-primary/5 rounded-xl p-3">
              <p className="text-primary italic text-base leading-relaxed">
                "The emotional growth tracker is truly amazing"
              </p>
            </div>
          </div>
        </AnimatedGrid>
      </section>

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

          <div className="flex justify-center gap-4 mb-16">
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
