import { createFileRoute } from "@tanstack/react-router";
import { RejectionSensitivity } from "@/components/vocolens/RejectionSensitivity";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/rejection-sensitivity")({
  head: () => buildArticleHead("rejection-sensitivity"),
  component: () => <RejectionSensitivity />,
});
