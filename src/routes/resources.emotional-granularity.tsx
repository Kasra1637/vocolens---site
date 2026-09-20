import { createFileRoute } from "@tanstack/react-router";
import { EmotionalGranularity } from "@/components/vocolens/EmotionalGranularity";

export const Route = createFileRoute("/resources/emotional-granularity")({
  head: () => ({
    meta: [
      { title: "Emotional Granularity: Why Specific Words Change What You Feel | Vocolens" },
      { name: "description", content: "Once you can name an emotion, the next question is how specific to get. Learn what emotional granularity is, why specific labels help regulation, and how voice journaling builds a personal emotional vocabulary." },
      { property: "og:title", content: "Emotional Granularity: Why Specific Words Change What You Feel | Vocolens" },
      { property: "og:description", content: "Anxious, stressed, overwhelmed — broad words hide what is actually happening. Learn what emotional granularity is and why finer labels help." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/emotional-granularity" }],
  }),
  component: () => <EmotionalGranularity />,
});