import { createFileRoute } from "@tanstack/react-router";
import { AlexithymiaEmotionalVocabulary } from "@/components/vocolens/AlexithymiaEmotionalVocabulary";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/alexithymia-emotional-vocabulary")({
  head: () => buildArticleHead("alexithymia-emotional-vocabulary"),
  component: () => <AlexithymiaEmotionalVocabulary />,
});
