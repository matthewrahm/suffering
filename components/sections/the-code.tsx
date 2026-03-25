"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RULES = [
  "We endure the process.",
  "Diamond hands are forged in fire.",
  "We lift the fallen.",
  "The market rewards those who wait.",
  "No one walks this path alone.",
];

function AnimatedNumber({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 800;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl text-text-muted/20 leading-none select-none block mb-4 tabular-nums">
      {String(display).padStart(2, "0")}
    </span>
  );
}

export function TheCode() {
  const rm = useReducedMotion();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 py-16 sm:py-24 px-4">
      {RULES.map((rule, i) => (
        <motion.div
          key={i}
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <AnimatedNumber value={i + 1} delay={i * 0.1} />
          <p className="font-body italic text-base sm:text-lg text-text-primary">
            {rule}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
