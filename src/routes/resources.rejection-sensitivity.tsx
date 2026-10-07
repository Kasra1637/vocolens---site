import { createFileRoute } from "@tanstack/react-router";
import { RejectionSensitivity } from "@/components/vocolens/RejectionSensitivity";

export const Route = createFileRoute("/resources/rejection-sensitivity")({
  head: () => ({
    meta: [
      { title: "Rejection Sensitivity and ADHD: What RSD Means and How to Respond | Vocolens" },
      {
        name: "description",
        content:
          "Learn what rejection sensitivity and RSD mean, why the label is not a formal diagnosis, and practical ways to respond to hurt without assuming intent.",
      },
      {
        property: "og:title",
        content: "Rejection Sensitivity and ADHD: What RSD Means and How to Respond | Vocolens",
      },
      {
        property: "og:description",
        content:
          "Learn what rejection sensitivity and RSD mean, why the label is not a formal diagnosis, and practical ways to respond to hurt without assuming intent.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/rejection-sensitivity" }],
  }),
  component: () => <RejectionSensitivity />,
});
