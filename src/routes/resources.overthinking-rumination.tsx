import { createFileRoute } from "@tanstack/react-router";
import { OverthinkingRumination } from "@/components/vocolens/OverthinkingRumination";

export const Route = createFileRoute("/resources/overthinking-rumination")({
  head: () => ({
    meta: [
      { title: "Overthinking and Rumination: How to Recognize the Loop | Vocolens" },
      {
        name: "description",
        content:
          "Understand rumination versus useful reflection, see examples of repetitive worry, and try a practical next-step check without promises of instant relief.",
      },
      {
        property: "og:title",
        content: "Overthinking and Rumination: How to Recognize the Loop | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Understand rumination versus useful reflection, see examples of repetitive worry, and try a practical next-step check without promises of instant relief.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/overthinking-rumination" }],
  }),
  component: () => <OverthinkingRumination />,
});
