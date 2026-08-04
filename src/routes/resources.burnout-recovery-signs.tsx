import { createFileRoute } from "@tanstack/react-router";
import { BurnoutRecovery } from "@/components/vocolens/BurnoutRecovery";

export const Route = createFileRoute("/resources/burnout-recovery-signs")({
  head: () => ({
    meta: [
      { title: "Burnout Recovery: Signs of Burnout & What Actually Helps | Vocolens" },
      { name: "description", content: "Burnout builds through unlogged accumulation, not a single bad week. Learn the science of allostatic load, why a vacation alone doesn't fix it, and how a daily voice-journaled load check catches burnout before it becomes collapse." },
      { property: "og:title", content: "Burnout Doesn't Start in Your Job — It Starts in Your Nervous System | Vocolens" },
      { property: "og:description", content: "Discover the science of allostatic load and Maslach's three dimensions of burnout — and how a daily voice-journaled load check catches burnout before it becomes collapse." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/burnout-recovery-signs" }],
  }),
  component: () => <BurnoutRecovery />,
});
