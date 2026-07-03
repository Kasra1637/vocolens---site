import { createFileRoute } from "@tanstack/react-router";
import { Resources } from "@/components/vocolens/Resources";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Voice Journaling Resources for Mental Wellness | Vocolens" },
      { name: "description", content: "Evidence-based guides on voice journaling for stress relief, emotion labeling, and emotional resilience. Backed by peer-reviewed neuroscience research." },
      { property: "og:title", content: "Voice Journaling Resources for Mental Wellness | Vocolens" },
      { property: "og:description", content: "Explore neuroscience-backed articles on voice journaling, emotion labeling, and building emotional resilience through daily reflection." },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources" }],
  }),
  component: () => <Resources />,
});
