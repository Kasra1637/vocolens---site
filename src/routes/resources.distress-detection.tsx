import { createFileRoute } from "@tanstack/react-router";
import { DistressDetection } from "@/components/vocolens/DistressDetection";

export const Route = createFileRoute("/resources/distress-detection")({
  head: () => ({
    meta: [
      { title: "Physical Signs of Overwhelm: Body Awareness Without Guessing | Vocolens" },
      {
        name: "description",
        content:
          "Learn what interoception means, explore physical signs that can accompany overwhelm, and try a gentle check-in without treating sensations as diagnoses.",
      },
      {
        property: "og:title",
        content: "Physical Signs of Overwhelm: Body Awareness Without Guessing | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Learn what interoception means, explore physical signs that can accompany overwhelm, and try a gentle check-in without treating sensations as diagnoses.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/distress-detection" }],
  }),
  component: () => <DistressDetection />,
});
