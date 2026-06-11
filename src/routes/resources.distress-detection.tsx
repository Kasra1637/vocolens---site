import { createFileRoute } from "@tanstack/react-router";
import { DistressDetection } from "@/components/vocolens/DistressDetection";

export const Route = createFileRoute("/resources/distress-detection")({
  head: () => ({
    meta: [
      { title: "How Your Body Tells You Are Overwhelmed Before Your Mind Does | Vocolens" },
      { name: "description", content: "Your body registers distress seconds before your conscious mind catches up. Learn the neuroscience of interoception, body-based early warning signs, and how voice journaling with body-sensation mapping helps you catch overwhelm before it escalates." },
      { property: "og:title", content: "How Your Body Tells You Are Overwhelmed Before Your Mind Does | Vocolens" },
      { property: "og:description", content: "Discover the neuroscience of distress detection: how interoception, somatic markers, and body-sensation mapping help you catch overwhelm early — before it becomes a crisis." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/distress-detection" }],
  }),
  component: () => <DistressDetection />,
});
