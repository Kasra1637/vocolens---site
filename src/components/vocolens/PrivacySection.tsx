import { Smartphone, Eye, Lock, Database, Trash2, Shield } from 'lucide-react';
import { AnimatedSection, AnimatedGrid } from './AnimatedSection';
import { Link } from '@tanstack/react-router';

const features = [
  {
    icon: Smartphone,
    title: 'Stays on your device',
    description: 'Entries, audio, stats, and preferences are stored locally. No cloud sync, no server backup, no remote access.',
  },
  {
    icon: Lock,
    title: 'Biometric lock',
    description: 'Your journal is protected by biometrics the moment you enable them. A secure PIN acts as your backup — so your entries stay private no matter what.',
  },
  {
    icon: Shield,
    title: 'Encrypted in transit',
    description: 'All network calls use HTTPS / TLS. Audio is sent transiently for analysis and discarded immediately after.',
  },
  {
    icon: Eye,
    title: 'Zero tracking',
    description: 'No analytics SDKs, no advertising IDs, no location data, no screen tracking. None.',
  },
  {
    icon: Database,
    title: 'No account database',
    description: 'Vocolens runs no centralised user store. There is nothing on our servers to breach.',
  },
  {
    icon: Trash2,
    title: 'Full data control',
    description: 'Export everything as JSON, delete individual entries, or wipe the app entirely — all from Settings.',
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1230] via-[#1e1638] to-[#120d25]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-light/8 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-primary-muted" />
              <span className="text-sm text-white/70 font-medium tracking-wide uppercase">Privacy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Your journal. Your privacy.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
              Your thoughts stay on your device. Always private, always yours.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedGrid
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
          animation="fade-in-up"
          staggerDelay={0.1}
        >
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary-muted" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-xl">{title}</h3>
              <p className="text-white/55 text-base leading-relaxed">{description}</p>
            </div>
          ))}
        </AnimatedGrid>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="border border-white/10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.04]">
            <p className="text-white/70 text-center sm:text-left text-base leading-relaxed">
              <span className="text-white font-semibold">"Your personal reflections belong to you."</span>
              {' '}— Vocolens Privacy Policy
            </p>
            <Link
              to="/privacy"
              className="text-primary-muted text-sm font-medium whitespace-nowrap hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              Read full policy
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
