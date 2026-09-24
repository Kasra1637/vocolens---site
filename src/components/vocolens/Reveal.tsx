import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

/**
 * Reveal — the single section-entrance primitive for non-blog pages.
 *
 * One calm rhythm everywhere: fadeUp 0.7s SOFT, fires once when the section
 * enters the viewport. Reduced motion is governed globally by MotionConfig
 * in routes/__root. Never render this under /resources routes (blogs stay
 * fully static by standing decision).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20% 0px", amount: 0.3 }}
      custom={0.15 + delay}
    >
      {children}
    </motion.div>
  );
}
