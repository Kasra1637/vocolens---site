import { createFileRoute } from "@tanstack/react-router";
import { FeaturesShowcase } from "@/components/vocolens/FeaturesShowcase";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features | Vocolens AI Voice Journal — Calendar, Weekly Reflection, Mood Story" },
      {
        name: "description",
        content:
          "Explore every Vocolens feature: journal calendar without streaks, weekly AI reflection, mood story by day, body sensation map, triggers, themes, time-of-day patterns, AI emotion corrections, milestone badges, and therapist-ready reports.",
      },
      { property: "og:title", content: "Inside Vocolens — 13 ways to finally understand yourself" },
      {
        property: "og:description",
        content:
          "Calendar, weekly reflection, mood story, emotional landscape, body sensation heatmap, triggers, themes, time-of-day analytics, AI + your corrections, milestones, and therapist sharing — all private, all on-device.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vocolens.com/features" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/features" }],
  }),
  component: () => <FeaturesShowcase />,
});
