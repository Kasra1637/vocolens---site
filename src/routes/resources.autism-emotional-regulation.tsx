import { createFileRoute } from "@tanstack/react-router";
import { AutismEmotionalRegulation } from "@/components/vocolens/AutismEmotionalRegulation";

export const Route = createFileRoute("/resources/autism-emotional-regulation")({
  head: () => ({
    meta: [
      { title: "Autism and Emotional Regulation: How Voice Journaling Helps Autistic Adults | Vocolens" },
      { name: "description", content: "Autistic adults face unique emotional regulation challenges including alexithymia, sensory overload, and meltdown cycles. Discover how voice journaling builds emotional vocabulary, tracks overwhelm patterns, and provides a safe space to process without masking pressure." },
      { property: "og:title", content: "Autism and Emotional Regulation: How Voice Journaling Helps Autistic Adults Process Emotions | Vocolens" },
      { property: "og:description", content: "Learn how voice journaling addresses alexithymia, prevents autistic burnout, and builds emotional self-awareness — without the pressure of social interaction or masking." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/autism-emotional-regulation" }],
  }),
  component: () => <AutismEmotionalRegulation />,
});
