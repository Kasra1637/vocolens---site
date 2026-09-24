import { ReactNode } from "react";

type AnimationType = "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "blur-in";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

// Static passthrough (standing decision: no scroll-reveal motion on site).
// Keeps the component API so all call sites render unchanged, fully visible
// on first paint. `animation`, `delay`, and `threshold` are accepted and
// ignored.
export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}

interface AnimatedGridProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

// Static passthrough — every item renders immediately, no stagger timers.
export function AnimatedGrid({ children, className = "", itemClassName = "" }: AnimatedGridProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <div key={index} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
}
