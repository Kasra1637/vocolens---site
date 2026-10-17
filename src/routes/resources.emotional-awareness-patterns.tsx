import { createFileRoute } from "@tanstack/react-router";
import { EmotionalAwareness } from "@/components/vocolens/EmotionalAwareness";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/emotional-awareness-patterns")({
  head: () => buildArticleHead("emotional-awareness-patterns"),
  component: () => <EmotionalAwareness />,
});
