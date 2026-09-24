import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { fadeUp, STAGGER_STEP } from "@/lib/motion";

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

/**
 * RevealGroup + RevealItem — card-level consistency using the same system.
 *
 * The group fires once per viewport entry (same failsafe semantics as
 * Reveal) and staggers its items by STAGGER_STEP (house token, 80ms —
 * the app's TAB_ENTER scale). Items use the plain `fadeUp` variant with
 * no per-card curves. Use for card grids INSTEAD of wrapping them in a
 * plain Reveal (motion happens once per card, not twice). Never render
 * under /resources routes.
 */
export function RevealGroup({
  children,
  className,
  delay = 0,
  stagger = STAGGER_STEP,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
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
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: false, margin: "0px", amount: 0.1 }}
      onViewportEnter={markEntered}
      onViewportLeave={() => setEntered(false)}
      variants={{
        hidden: {},
        show: (baseDelay: number = 0) => ({
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.15 + baseDelay,
          },
        }),
      }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
