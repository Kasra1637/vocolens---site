import { createFileRoute } from "@tanstack/react-router";
import { OverthinkingRumination } from "@/components/vocolens/OverthinkingRumination";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/overthinking-rumination")({
  head: () => buildArticleHead("overthinking-rumination"),
  component: () => <OverthinkingRumination />,
});
