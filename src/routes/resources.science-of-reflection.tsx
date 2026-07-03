import { createFileRoute } from "@tanstack/react-router";
import { ScienceOfReflection } from "@/components/vocolens/ScienceOfReflection";

export const Route = createFileRoute("/resources/science-of-reflection")({
  head: () => ({
    meta: [
      { title: "How Naming Emotions Reduces Stress (Neuroscience) | Vocolens" },
      { name: "description", content: "Research by Lieberman (2007) proves affect labeling reduces amygdala activity by up to 50%. Learn how voice journaling applies this neuroscience to break worry loops, calm anxiety, and build lasting emotional resilience." },
      { property: "og:title", content: "How Naming Your Emotions Reduces Stress & Builds Emotional Resilience | Vocolens" },
      { property: "og:description", content: "Neuroscience proves that labeling emotions calms the amygdala. Discover how daily voice journaling with Vocolens applies affect labeling to reduce anxiety and build lasting resilience." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/science-of-reflection" }],
  }),
  component: () => <ScienceOfReflection />,
});
