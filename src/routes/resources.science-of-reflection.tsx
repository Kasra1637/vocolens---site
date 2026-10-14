import { createFileRoute } from "@tanstack/react-router";
import { ScienceOfReflection } from "@/components/vocolens/ScienceOfReflection";

export const Route = createFileRoute("/resources/science-of-reflection")({
  head: () => ({
    meta: [
      { title: "Affect Labeling: How to Name Your Emotions | Vocolens" },
      { name: "description", content: "Learn what affect labeling is, what research shows about naming emotions, and how to try a short check-in without promises of guaranteed stress relief." },
      { property: "og:title", content: "Affect Labeling: How to Name Your Emotions | Vocolens" },
      { property: "og:description", content: "Learn what affect labeling is, what research shows about naming emotions, and how to try a short check-in without promises of guaranteed stress relief." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/science-of-reflection" }],
  }),
  component: () => <ScienceOfReflection />,
});
