import { createFileRoute } from "@tanstack/react-router";
import { TimeBlindness } from "@/components/vocolens/TimeBlindness";

export const Route = createFileRoute("/resources/adhd-time-blindness")({
  head: () => ({
    meta: [
      { title: "ADHD Time Blindness: Why It Happens & What Actually Helps | Vocolens" },
      { name: "description", content: "ADHD time blindness isn't laziness — it's a measurable gap in how the brain tracks duration. Learn the science of interval timing, why alarms alone don't fix it, and how a daily voice-logged time-anchor habit recalibrates your internal clock." },
      { property: "og:title", content: "Time Blindness Isn't a Focus Problem — It's a Missing Internal Clock | Vocolens" },
      { property: "og:description", content: "Discover the neuroscience of ADHD time perception — and how a simple voice-logged time-anchor habit gives your brain the external clock it's missing." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/resources/adhd-time-blindness" }],
  }),
  component: () => <TimeBlindness />,
});
