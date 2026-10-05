import { createFileRoute } from "@tanstack/react-router";
import { MixedEmotions } from "@/components/vocolens/MixedEmotions";

export const Route = createFileRoute("/resources/mixed-emotions")({
  head: () => ({
    meta: [
      {
        title:
          "Mixed Emotions: Why Feeling Two Things at Once Is Information, Not Confusion | Vocolens",
      },
      {
        name: "description",
        content:
          "Can you feel two emotions at once? Learn what mixed emotions are, why they are information, not confusion, and how voice journaling helps you hold both.",
      },
      {
        property: "og:title",
        content:
          "Mixed Emotions: Why Feeling Two Things at Once Is Information, Not Confusion | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Excited and terrified. Relieved and resentful. Feeling two things at once isn't confusion — the research says it's a more complete read of the situation.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/mixed-emotions" }],
  }),
  component: () => <MixedEmotions />,
});
