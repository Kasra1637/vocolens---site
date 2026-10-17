import { createFileRoute } from "@tanstack/react-router";
import { MixedEmotions } from "@/components/vocolens/MixedEmotions";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/mixed-emotions")({
  head: () => buildArticleHead("mixed-emotions"),
  component: () => <MixedEmotions />,
});
