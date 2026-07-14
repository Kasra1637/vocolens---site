import { createFileRoute } from "@tanstack/react-router";
import { OverthinkingRumination } from "@/components/vocolens/OverthinkingRumination";

export const Route = createFileRoute("/resources/overthinking-rumination")({
  head: () => ({
    meta: [
      { title: "The Overthinking Trap: Why Your Brain Won't Stop | Vocolens" },
      { name: "description", content: "Overthinking isn't a willpower problem — it's what happens when your brain treats a thought as unfinished business. Learn the neuroscience of rumination, why \"just stop thinking about it\" backfires, and how voice journaling gives your brain the completion signal it's been missing." },
      { property: "og:title", content: "The Overthinking Trap: Why Your Brain Won't Stop and What Actually Helps | Vocolens" },
      { property: "og:description", content: "Discover the neuroscience of rumination and the Zeigarnik effect — and how structured voice journaling and scheduled worry time break the overthinking loop." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/overthinking-rumination" }],
  }),
  component: () => <OverthinkingRumination />,
});
