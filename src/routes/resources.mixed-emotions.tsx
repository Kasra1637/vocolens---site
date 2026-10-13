import { createFileRoute } from "@tanstack/react-router";
import { MixedEmotions } from "@/components/vocolens/MixedEmotions";

export const Route = createFileRoute("/resources/mixed-emotions")({
  head: () => ({
    meta: [
      {
        title: "Mixed Emotions: Why You Can Feel Happy and Sad at Once | Vocolens",
      },
      {
        name: "description",
        content:
          "Learn what mixed emotions are, see everyday examples of feeling two things at once, and try a reflection that makes room for both without forcing a choice.",
      },
      {
        property: "og:title",
        content: "Mixed Emotions: Why You Can Feel Happy and Sad at Once | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Learn what mixed emotions are, see everyday examples of feeling two things at once, and try a reflection that makes room for both without forcing a choice.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/mixed-emotions" }],
  }),
  component: () => <MixedEmotions />,
});
