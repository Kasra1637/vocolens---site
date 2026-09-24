import { createFileRoute } from "@tanstack/react-router";
import { UseCases } from "@/components/vocolens/UseCases";

const useCasesLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Vocolens for ADHD, Autism & Alexithymia",
  description:
    "How Vocolens' AI voice journal supports neurodivergent minds — ADHD, autism, and alexithymia — with voice-first capture, AI emotion detection, and personalized correction.",
  url: "https://vocolens.com/use-cases",
  publisher: {
    "@type": "Organization",
    name: "Vocolens",
    url: "https://vocolens.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vocolens.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Use Cases",
        item: "https://vocolens.com/use-cases",
      },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ADHD",
        url: "https://vocolens.com/use-cases#adhd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Alexithymia",
        url: "https://vocolens.com/use-cases#alexithymia",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Autism",
        url: "https://vocolens.com/use-cases#autism",
      },
    ],
  },
};

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Neurodivergent Use Cases | How Vocolens Helps ADHD, Autism & Alexithymia" },
      {
        name: "description",
        content:
          "Discover how Vocolens AI voice journal supports neurodivergent minds — ADHD, autism, and alexithymia.",
      },
      {
        property: "og:title",
        content: "Vocolens for Neurodivergent Minds — ADHD, Autism & Alexithymia",
      },
      {
        property: "og:description",
        content:
          "Voice-first, AI-powered emotional journaling designed from the ground up for neurodivergent brains. See exactly how Vocolens helps each condition.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vocolens.com/use-cases" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vocolens for Neurodivergent Minds — ADHD, Autism & Alexithymia",
      },
      {
        name: "twitter:description",
        content:
          "Voice-first, AI-powered emotional journaling designed from the ground up for neurodivergent brains.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/use-cases" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(useCasesLd) }],
  }),
  component: () => <UseCases />,
});
