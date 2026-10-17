import { createFileRoute } from "@tanstack/react-router";
import { AutismEmotionalRegulation } from "@/components/vocolens/AutismEmotionalRegulation";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/autism-emotional-regulation")({
  head: () => buildArticleHead("autism-emotional-regulation"),
  component: () => <AutismEmotionalRegulation />,
});
