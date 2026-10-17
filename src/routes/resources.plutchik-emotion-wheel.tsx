import { createFileRoute } from "@tanstack/react-router";
import { PlutchikEmotionWheel } from "@/components/vocolens/PlutchikEmotionWheel";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/plutchik-emotion-wheel")({
  head: () => buildArticleHead("plutchik-emotion-wheel"),
  component: PlutchikEmotionWheel,
});
