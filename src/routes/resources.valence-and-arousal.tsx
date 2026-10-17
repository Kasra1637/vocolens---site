import { createFileRoute } from "@tanstack/react-router";
import { ValenceAndArousal } from "@/components/vocolens/ValenceAndArousal";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/valence-and-arousal")({
  head: () => buildArticleHead("valence-and-arousal"),
  component: ValenceAndArousal,
});
