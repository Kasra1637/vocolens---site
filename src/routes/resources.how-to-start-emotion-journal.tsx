import { createFileRoute } from "@tanstack/react-router";
import { HowToStartEmotionJournal } from "@/components/vocolens/HowToStartEmotionJournal";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/how-to-start-emotion-journal")({
  head: () => buildArticleHead("how-to-start-emotion-journal"),
  component: HowToStartEmotionJournal,
});
