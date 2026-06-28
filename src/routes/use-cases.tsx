import { createFileRoute } from "@tanstack/react-router";
import { UseCases } from "@/components/vocolens/UseCases";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Neurodivergent Use Cases | How Vocolens Helps ADHD, Autism & Alexithymia" },
      {
        name: "description",
        content:
          "Discover how Vocolens AI voice journal supports neurodivergent minds — ADHD, autism, and alexithymia.",
      },
      { property: "og:title", content: "Vocolens for Neurodivergent Minds — ADHD, Autism & Alexithymia" },
      {
        property: "og:description",
        content:
          "Voice-first, AI-powered emotional journaling designed from the ground up for neurodivergent brains. See exactly how Vocolens helps each condition.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vocolens.com/use-cases" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vocolens for Neurodivergent Minds — ADHD, Autism & Alexithymia" },
      {
        name: "twitter:description",
        content:
          "Voice-first, AI-powered emotional journaling designed from the ground up for neurodivergent brains.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/use-cases" }],
  }),
  component: () => <UseCases />,
});
