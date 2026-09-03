import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#games", label: "Games" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#founder", label: "Founder" },
];

// Cheap, GPU-friendly easing/timing shared across the menu's motion.
const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const pick = () => {
      const line = window.innerHeight * 0.32;
      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = `#${el.id}`;
      }
      setActive(current);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Auto-close the mobile menu if the viewport grows into the desktop
  // breakpoint while it's open (e.g. rotating a tablet).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // BUG FIX: previously each link only did `onClick={() => setOpen(false)}`
  // and let the browser's default anchor-jump handle the scroll. But
  // `setOpen(false)` is async (React state), so the native "jump to #id"
  // could fire while `document.body.style.overflow` was still "hidden"
  // (set while the menu was open) — and overflow:hidden blocks that native
  // scroll entirely. Result: the menu closed but the page never scrolled.
  // Fix: take over navigation manually — reset overflow synchronously,
  // close the menu, then scroll on the next frame once the body can move.
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.slice(1);
      const target = id ? document.getElementById(id) : null;

      document.body.style.overflow = "";
      setOpen(false);

      requestAnimationFrame(() => {
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        history.pushState(null, "", href);
      });
    },
    [],
  );

  // The header should carry a solid backdrop whenever it's scrolled OR the
  // mobile menu is open, so the top bar and the dropdown panel always share
  // the exact same background instead of the panel suddenly "popping" its
  // own background on top of a transparent bar (this was the flicker).
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/* Dim backdrop behind the mobile panel. Plain color, no blur — a
          second full-screen blur layer stacked on top of the header's own
          backdrop-blur is what made the menu feel heavy/laggy on phones.
          It fades with the menu and a tap on it closes the menu. */}
      <AnimatePresence>
        {open ? (
          <motion.button
            key="mobile-menu-backdrop"
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="fixed inset-0 -z-10 bg-black/50 lg:hidden"
          />
        ) : null}
      </AnimatePresence>

      <nav
        aria-label="Main"
        className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src="/badutzy-logo.png"
            alt="BadutZY Studio logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
            BadutZY <span className="text-gold">Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isFounder = l.href === "#founder";
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-all duration-300 hover:bg-surface hover:text-foreground ${
                  active === l.href
                    ? "glow-gold bg-surface font-semibold text-gold"
                    : isFounder
                      ? "font-medium text-gold/90 [text-shadow:0_0_12px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
                      : "text-muted-foreground"
                }`}
              >
                {l.label}
                {active === l.href ? (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold"
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md border border-border bg-surface transition-colors duration-300 lg:hidden"
        >
          {/* Icons are absolutely positioned so the cross-fade only touches
              opacity/transform — no layout reflow on the button itself. */}
          <span className="relative h-5 w-5">
            <AnimatePresence initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </nav>

      {/* Panel is animated with opacity + transform only (no `height`), which
          is composited on the GPU and stays smooth even on low-end phones.
          It no longer needs a height tween because the header's own
          background now already stays solid for the whole time the menu is
          open, so there's nothing left to "pop". */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{ willChange: "transform, opacity" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03, delayChildren: 0.04 } },
              }}
              className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8"
            >
              {links.map((l) => {
                const isFounder = l.href === "#founder";
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className={`border-b border-border/60 py-3 text-sm transition-colors last:border-0 hover:text-gold ${
                      active === l.href
                        ? "font-semibold text-gold"
                        : isFounder
                          ? "font-medium text-gold/90 [text-shadow:0_0_12px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
                          : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}