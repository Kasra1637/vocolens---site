import { createFileRoute } from "@tanstack/react-router";
import { ADHDEmotionalRegulation } from "@/components/vocolens/ADHDEmotionalRegulation";

export const Route = createFileRoute("/resources/adhd-emotional-regulation")({
  head: () => ({
    meta: [
      { title: "ADHD and Emotional Dysregulation: How Voice Journaling Helps ADHD Adults | Vocolens" },
      { name: "description", content: "ADHD isn't just an attention disorder — most ADHD adults struggle with emotional dysregulation and Rejection Sensitive Dysphoria. Discover how voice journaling captures fast-moving emotions, calms RSD spirals, and builds pattern awareness for ADHD brains." },
      { property: "og:title", content: "ADHD and Emotional Dysregulation: How Voice Journaling Helps ADHD Adults Manage Big Feelings | Vocolens" },
      { property: "og:description", content: "Learn how voice journaling addresses ADHD emotional dysregulation and Rejection Sensitive Dysphoria — capturing big feelings in real time and revealing the patterns behind them." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/adhd-emotional-regulation" }],
  }),
  component: () => <ADHDEmotionalRegulation />,
});
