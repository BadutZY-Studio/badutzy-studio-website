import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * A thin gold progress bar fixed to the very top of the viewport, tracking
 * scroll position with a light spring for a smooth, non-jittery feel.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    mass: 0.2,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gold"
    />
  );
}
