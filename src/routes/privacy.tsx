import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicy } from "@/components/vocolens/PrivacyPolicy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Vocolens" },
      {
        name: "description",
        content:
          "Read the Vocolens Privacy Policy. Learn how we protect your personal data and voice journal entries.",
      },
      { property: "og:title", content: "Privacy Policy | Vocolens" },
      {
        property: "og:description",
        content: "Learn how Vocolens protects your data and voice journal entries.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/privacy" }],
  }),
  component: () => <PrivacyPolicy />,
});
