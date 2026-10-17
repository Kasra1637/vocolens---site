import { createFileRoute } from "@tanstack/react-router";
import { TimeBlindness } from "@/components/vocolens/TimeBlindness";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/adhd-time-blindness")({
  head: () => buildArticleHead("adhd-time-blindness"),
  component: () => <TimeBlindness />,
});
