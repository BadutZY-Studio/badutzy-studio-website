import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/** Shared "premium" easing curve — a soft, confident deceleration. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A card wrapper with a soft 3D tilt and a cursor-tracked spotlight glow,
 * driven by spring-smoothed motion values. Mouse tracking updates motion
 * values directly (no React state), so it never triggers re-renders and
 * stays cheap even with many cards on screen. Disabled on touch devices
 * and for users who prefer reduced motion.
 */
export function MagicCard({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springOpts = { stiffness: 220, damping: 24, mass: 0.6 };
  const sx = useSpring(mx, springOpts);
  const sy = useSpring(my, springOpts);

  const rotateX = useTransform(sy, [0, 1], [6, -6]);
  const rotateY = useTransform(sx, [0, 1], [-6, 6]);
  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);

  function handleMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType === "touch") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: EASE }}
      style={
        reduce
          ? {}
          : ({
              rotateX,
              rotateY,
              transformPerspective: 900,
              "--spot-x": spotX,
              "--spot-y": spotY,
            } as unknown as import("motion/react").MotionStyle)
      }
      className={`magic-card group relative border-color-transition ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--gold) 16%, transparent), transparent 70%)",
        }}
      />
      {children}
    </MotionTag>
  );
}

/**
 * Wraps interactive elements (typically buttons/links) with a subtle
 * magnetic pull toward the cursor, snapping back with a spring on leave.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.4 });

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={reduce ? {} : ({ x, y } as unknown as import("motion/react").MotionStyle)}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Animates a number counting up from 0 once it scrolls into view. */
export function CountUp({
  value,
  duration = 1.1,
  className,
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce || !inView) {
      if (reduce) el.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate(v) {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border/70 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
