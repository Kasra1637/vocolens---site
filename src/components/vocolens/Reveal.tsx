import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

/**
 * Reveal — the single section-entrance primitive for non-blog pages.
 *
 * One calm rhythm everywhere: fadeUp 0.7s SOFT with a 0.15s pre-beat,
 * replaying on every viewport entry (fades out on exit). Reduced motion is
 * governed globally by MotionConfig in routes/__root. Never render this
 * under /resources routes (blogs stay fully static by standing decision).
 *
 * Failsafe: if a section was never entered 6s after mount AND it sits at
 * or above the viewport fold (i.e. the user could already have seen it),
 * it is forced visible. Below-fold sections keep waiting for scroll, so
 * slow readers still get entrances. No section can ever stick invisible.
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
  const [entered, setEntered] = useState(false);
  const [forced, setForced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const enteredRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (enteredRef.current) return;
      const el = ref.current;
      if (!el || typeof window === "undefined") return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setForced(true);
      }
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  const markEntered = () => {
    enteredRef.current = true;
    setEntered(true);
  };

  const shown = entered || forced;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: false, margin: "0px", amount: 0.1 }}
      onViewportEnter={markEntered}
      onViewportLeave={() => setEntered(false)}
      custom={0.15 + delay}
    >
      {children}
    </motion.div>
  );
}
