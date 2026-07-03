import { createFileRoute } from "@tanstack/react-router";
import { EmotionalAwareness } from "@/components/vocolens/EmotionalAwareness";

export const Route = createFileRoute("/resources/emotional-awareness-patterns")({
  head: () => ({
    meta: [
      { title: "Emotional Awareness Through Pattern Recognition | Vocolens" },
      { name: "description", content: "Discover how metacognitive awareness and pattern recognition through voice journaling rewire your brain for emotional intelligence. Learn to identify emotional triggers and behavioral patterns with Vocolens." },
      { property: "og:title", content: "Building Emotional Awareness: How Pattern Recognition Transforms Self-Understanding | Vocolens" },
      { property: "og:description", content: "Learn how consistent voice journaling helps you recognize emotional patterns, identify triggers, and accelerate personal growth through the science of metacognitive awareness." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/emotional-awareness-patterns" }],
  }),
  component: () => <EmotionalAwareness />,
});
