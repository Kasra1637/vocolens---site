import { createFileRoute } from "@tanstack/react-router";
import { RejectionSensitivity } from "@/components/vocolens/RejectionSensitivity";

export const Route = createFileRoute("/resources/rejection-sensitivity")({
  head: () => ({
    meta: [
      { title: "Why 'No' Lands Like a Bruise: Rejection Sensitivity and the ADHD Brain | Vocolens" },
      { name: "description", content: "Why does criticism or rejection hurt so much with ADHD? Learn what rejection sensitive dysphoria is, what social-pain research actually shows, and what genuinely helps in the minutes after the hit." },
      { property: "og:title", content: "Why 'No' Lands Like a Bruise: Rejection Sensitivity and the ADHD Brain | Vocolens" },
      { property: "og:description", content: "RSD isn't a diagnosis — but the pain is real, fast, and physical to your brain. Learn what actually helps in the ten minutes after the hit." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/rejection-sensitivity" }],
  }),
  component: () => <RejectionSensitivity />,
});
