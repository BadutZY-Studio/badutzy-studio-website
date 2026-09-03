import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Gamepad2, Sparkles } from "lucide-react";
import { CountUp, EASE, Magnetic } from "./primitives";

const stats = [
  { k: "Total Game", v: 2, suffix: "" },
  { k: "Status", v: 0, suffix: "", display: "Active" },
  { k: "Engine", v: 0, suffix: "", display: "Unity & Java" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Gentle parallax: the backdrop drifts slower than scroll, the emblem
  // drifts slightly faster, so the hero has real depth without any jank.
  const backdropY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const emblemY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        style={reduce ? {} : { y: backdropY }}
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-background [mask-image:linear-gradient(to_top,black,transparent)]"
        aria-hidden
      />

      <motion.div
        style={reduce ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold"
          >
            <motion.span
              animate={reduce ? {} : { rotate: [0, 15, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              className="inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
            </motion.span>
            Solo Indie Game Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            BadutZY{" "}
            <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-[shimmer_6s_linear_infinite]">
              Studio
            </span>
            <span className="mt-3 block text-2xl font-semibold text-muted-foreground sm:text-3xl">
              One vision. Every pixel, every line of code.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A one-person game development studio where concept, design, programming, art direction,
            and release are all handled by a single developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.3}>
              <motion.a
                href="#games"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
              >
                <Gamepad2 className="h-4 w-4" /> Explore Games
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <motion.a
                href="#about"
                whileHover={{
                  y: -2,
                  borderColor: "color-mix(in oklab, var(--gold) 60%, transparent)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold"
              >
                About the studio <ArrowDown className="h-4 w-4" />
              </motion.a>
            </Magnetic>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.k}</dt>
                <dd className="mt-1 font-display text-xl font-bold text-gold">
                  {s.display ?? <CountUp value={s.v} suffix={s.suffix} />}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          style={reduce ? {} : { y: emblemY }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center"
        >
          <div
            className="absolute inset-0 rounded-3xl border border-border bg-surface"
            aria-hidden
          />
          <motion.img
            src="/badutzy-studio.png"
            alt="BadutZY Studio hexagonal Z emblem"
            width={512}
            height={512}
            className="relative w-2/3 max-w-[260px] drop-shadow-[0_18px_40px_oklch(0_0_0/45%)]"
            animate={reduce ? { y: 0 } : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit text-muted-foreground sm:block"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/70 backdrop-blur-sm"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
