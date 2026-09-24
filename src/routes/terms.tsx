import { createFileRoute } from "@tanstack/react-router";
import { TermsOfService } from "@/components/vocolens/TermsOfService";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Vocolens" },
      {
        name: "description",
        content:
          "Read the Vocolens Terms of Service. Understand your rights and responsibilities when using our AI voice journal app.",
      },
      { property: "og:title", content: "Terms of Service | Vocolens" },
      {
        property: "og:description",
        content: "Read the Vocolens Terms of Service for our AI voice journal app.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/terms" }],
  }),
  component: () => <TermsOfService />,
});
