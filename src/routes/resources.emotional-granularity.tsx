import { createFileRoute } from "@tanstack/react-router";
import { EmotionalGranularity } from "@/components/vocolens/EmotionalGranularity";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/emotional-granularity")({
  head: () => buildArticleHead("emotional-granularity"),
  component: () => <EmotionalGranularity />,
});
