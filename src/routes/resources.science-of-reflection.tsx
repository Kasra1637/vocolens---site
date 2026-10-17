import { createFileRoute } from "@tanstack/react-router";
import { ScienceOfReflection } from "@/components/vocolens/ScienceOfReflection";
import { buildArticleHead } from "@/lib/resourceArticles";

export const Route = createFileRoute("/resources/science-of-reflection")({
  head: () => buildArticleHead("science-of-reflection"),
  component: () => <ScienceOfReflection />,
});
