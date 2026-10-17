import { createFileRoute } from "@tanstack/react-router";
import { DistressDetection } from "@/components/vocolens/DistressDetection";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/distress-detection")({
  head: () => buildArticleHead("distress-detection"),
  component: () => <DistressDetection />,
});
