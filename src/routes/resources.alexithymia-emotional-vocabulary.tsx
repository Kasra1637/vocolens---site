import { createFileRoute } from "@tanstack/react-router";
import { AlexithymiaEmotionalVocabulary } from "@/components/vocolens/AlexithymiaEmotionalVocabulary";

export const Route = createFileRoute("/resources/alexithymia-emotional-vocabulary")({
  head: () => ({
    meta: [
      { title: "Why You Can't Name What You Feel: The Neuroscience of Alexithymia | Vocolens" },
      { name: "description", content: "Around 10% of people struggle to identify and describe their own emotions — a trait called alexithymia. Learn the neuroscience of emotional blindness, why traditional journaling fails, and how AI-assisted voice journaling creates a personal emotional vocabulary from scratch." },
      { property: "og:title", content: "Why You Can't Name What You Feel: Alexithymia and How Voice Journaling Builds an Emotional Vocabulary | Vocolens" },
      { property: "og:description", content: "Discover the neuroscience of alexithymia — why some people can't name their emotions — and how AI voice journaling builds a personal emotional vocabulary through the correction loop." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/alexithymia-emotional-vocabulary" }],
  }),
  component: () => <AlexithymiaEmotionalVocabulary />,
});
