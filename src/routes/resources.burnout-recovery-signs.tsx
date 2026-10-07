import { createFileRoute } from "@tanstack/react-router";
import { BurnoutRecovery } from "@/components/vocolens/BurnoutRecovery";

export const Route = createFileRoute("/resources/burnout-recovery-signs")({
  head: () => ({
    meta: [
      { title: "Burnout Signs and Recovery: What to Notice and What Can Help | Vocolens" },
      {
        name: "description",
        content:
          "Understand workplace burnout signs, how they differ from ordinary tiredness, and practical recovery supports that address demands as well as rest.",
      },
      {
        property: "og:title",
        content: "Burnout Signs and Recovery: What to Notice and What Can Help | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Understand workplace burnout signs, how they differ from ordinary tiredness, and practical recovery supports that address demands as well as rest.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/burnout-recovery-signs" }],
  }),
  component: () => <BurnoutRecovery />,
});
