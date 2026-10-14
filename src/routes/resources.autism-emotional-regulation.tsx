import { createFileRoute } from "@tanstack/react-router";
import { AutismEmotionalRegulation } from "@/components/vocolens/AutismEmotionalRegulation";

export const Route = createFileRoute("/resources/autism-emotional-regulation")({
  head: () => ({
    meta: [
      { title: "Autism and Emotional Regulation: Sensory Needs and Practical Supports | Vocolens" },
      {
        name: "description",
        content:
          "Explore emotional regulation in autistic adults, how sensory demands and alexithymia can differ, and ways to plan support without masking your needs.",
      },
      {
        property: "og:title",
        content: "Autism and Emotional Regulation: Sensory Needs and Practical Supports | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Explore emotional regulation in autistic adults, how sensory demands and alexithymia can differ, and ways to plan support without masking your needs.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://vocolens.com/resources/autism-emotional-regulation" },
    ],
  }),
  component: () => <AutismEmotionalRegulation />,
});
