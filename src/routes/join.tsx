import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Waitlist | Vocolens" },
      { name: "description", content: "Sign up for the Vocolens waitlist. Be the first to know when our AI voice journal for emotional clarity launches." },
      { property: "og:title", content: "Join the Waitlist | Vocolens" },
      { property: "og:description", content: "Sign up for the Vocolens waitlist. Be the first to know when our AI voice journal for emotional clarity launches." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vocolens.com/join" },
      { property: "og:image", content: "https://vocolens.com/vocolens_-_preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/join" }],
  }),
  component: () => (
    <div className="pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Join the Vocolens Waitlist
        </h1>
        <iframe
          src="https://claude.site/public/artifacts/37b6f24e-4826-4d57-b9ed-da44e7a02bad/embed"
          title="vocolens-waitlist.html"
          width="100%"
          height="600"
          frameBorder="0"
          allow="clipboard-write"
          allowFullScreen
        />
      </div>
    </div>
  ),
});
