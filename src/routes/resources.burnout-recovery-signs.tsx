import { createFileRoute } from "@tanstack/react-router";
import { BurnoutRecovery } from "@/components/vocolens/BurnoutRecovery";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/burnout-recovery-signs")({
  head: () => buildArticleHead("burnout-recovery-signs"),
  component: () => <BurnoutRecovery />,
});
