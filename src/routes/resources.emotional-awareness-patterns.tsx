import { createFileRoute } from "@tanstack/react-router";
import { EmotionalAwareness } from "@/components/vocolens/EmotionalAwareness";

export const Route = createFileRoute("/resources/emotional-awareness-patterns")({
  head: () => ({
    meta: [
      { title: "Emotional Awareness: What It Is and How to Improve It | Vocolens" },
      { name: "description", content: "Learn what emotional awareness means, see everyday examples, and try a simple emotion-and-trigger journal to recognize feelings and patterns." },
      { property: "og:title", content: "Emotional Awareness: What It Is and How to Improve It | Vocolens" },
      { property: "og:description", content: "Learn what emotional awareness means, see everyday examples, and try a simple emotion-and-trigger journal to recognize feelings and patterns." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/emotional-awareness-patterns" }],
  }),
  component: () => <EmotionalAwareness />,
});
