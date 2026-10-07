import { createFileRoute } from "@tanstack/react-router";
import { AlexithymiaEmotionalVocabulary } from "@/components/vocolens/AlexithymiaEmotionalVocabulary";

export const Route = createFileRoute("/resources/alexithymia-emotional-vocabulary")({
  head: () => ({
    meta: [
      { title: "Alexithymia: Difficulty Identifying Emotions and Where to Start | Vocolens" },
      {
        name: "description",
        content:
          "Explore what alexithymia means, examples of difficulty identifying feelings, and gentle ways to describe sensations and build emotional vocabulary.",
      },
      {
        property: "og:title",
        content: "Alexithymia: Difficulty Identifying Emotions and Where to Start | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Explore what alexithymia means, examples of difficulty identifying feelings, and gentle ways to describe sensations and build emotional vocabulary.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://vocolens.com/resources/alexithymia-emotional-vocabulary" },
    ],
  }),
  component: () => <AlexithymiaEmotionalVocabulary />,
});
