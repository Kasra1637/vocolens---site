import { createFileRoute } from "@tanstack/react-router";
import { ValenceAndArousal } from "@/components/vocolens/ValenceAndArousal";

const title = "Valence and Arousal: Why Calm Isn’t Always Happy | Vocolens";
const description =
  "Learn how emotional valence and arousal differ, why low energy does not always mean calm contentment, and how to use a two-axis emotion check-in.";
const url = "https://vocolens.com/resources/valence-and-arousal";

export const Route = createFileRoute("/resources/valence-and-arousal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "article:published_time", content: "2026-10-11" },
      { property: "article:modified_time", content: "2026-10-11" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ValenceAndArousal,
});
