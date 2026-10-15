import { createFileRoute } from "@tanstack/react-router";
import { PlutchikEmotionWheel } from "@/components/vocolens/PlutchikEmotionWheel";

const title =
  "Plutchik’s emotion wheel: why “annoyed” and “furious” belong on the same ladder | Vocolens";
const description =
  "Learn how Plutchik’s emotion wheel groups feelings into eight families and three intensity steps, when a wheel helps or overwhelms, and how to use it in a check-in.";
const url = "https://vocolens.com/resources/plutchik-emotion-wheel";

export const Route = createFileRoute("/resources/plutchik-emotion-wheel")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "article:published_time", content: "2026-10-15" },
      { property: "article:modified_time", content: "2026-10-15" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PlutchikEmotionWheel,
});
