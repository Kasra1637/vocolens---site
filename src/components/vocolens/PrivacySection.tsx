import {
  DeviceMobile as Smartphone,
  Eye,
  Lock,
  Database,
  Trash as Trash2,
  Shield,
} from "@phosphor-icons/react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Link } from "@tanstack/react-router";

const features = [
  {
    icon: Smartphone,
    title: "Lives on your device",
    description:
      "Entries, audio, stats, and preferences stay on your phone. No cloud account or journal sync — nothing on a server to breach.",
  },
  {
    icon: Lock,
    title: "Biometric lock",
    description:
      "Unlock with Face ID, fingerprint, or a secure PIN backup. Your journal stays private from the moment you enable protection.",
  },
  {
    icon: Shield,
    title: "Encrypted in transit",
    description:
      "Audio and transcripts travel over encrypted HTTPS for transcription and analysis. Neither our backend nor vendors keep them.",
  },
  {
    icon: Eye,
    title: "No ads, no selling data",
    description:
      "No advertising SDKs, ad identifiers, location tracking, or analytics. Never sold; shared only to transcribe and analyze.",
  },
  {
    icon: Database,
    title: "No account database",
    description:
      "Vocolens runs no central user store and no accounts. None of your journal lives on our servers for anyone to breach — ever.",
  },
  {
    icon: Trash2,
    title: "Full data control",
    description:
      "Export everything as JSON, delete single entries, or wipe the app entirely from Settings. Your data answers only to you.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1230] via-[#1e1638] to-[#120d25]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-primary-muted" />
              <span className="text-sm text-white/70 font-semibold tracking-widest uppercase">
                Privacy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Your journal. Your privacy.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
              Your thoughts stay on your device. Always private, always yours.
            </p>
          </div>
        </Reveal>

        <RevealGroup delay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map(({ icon: Icon, title, description }) => (
            <RevealItem
              key={title}
              className="group bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary-muted" />
              </div>
              <h3 className="text-white font-bold mb-2 text-xl text-center">{title}</h3>
              <p className="text-white/55 text-base leading-relaxed text-left">{description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.3}>
          <div className="border border-white/10 rounded-2xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.04]">
            <p className="text-white/70 text-center sm:text-left text-base leading-relaxed">
              <span className="text-white font-semibold">
                "Your personal reflections belong to you."
              </span>{" "}
              — Vocolens Privacy Policy
            </p>
            <Link
              to="/privacy"
              className="text-primary-muted text-sm font-medium whitespace-nowrap hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              Read full policy
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
