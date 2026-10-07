import { createFileRoute } from "@tanstack/react-router";
import { TimeBlindness } from "@/components/vocolens/TimeBlindness";

export const Route = createFileRoute("/resources/adhd-time-blindness")({
  head: () => ({
    meta: [
      { title: "ADHD Time Blindness: Examples and Practical Time Supports | Vocolens" },
      {
        name: "description",
        content:
          "Learn what ADHD time blindness means, recognize everyday examples, and try visible timers, task estimates, and transition cues without blaming yourself.",
      },
      {
        property: "og:title",
        content: "ADHD Time Blindness: Examples and Practical Time Supports | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Learn what ADHD time blindness means, recognize everyday examples, and try visible timers, task estimates, and transition cues without blaming yourself.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/adhd-time-blindness" }],
  }),
  component: () => <TimeBlindness />,
});
