"use client";

import { motion, useReducedMotion } from "framer-motion";

const PILLARS = [
  { title: "Strength", body: "Built through adversity, not comfort." },
  { title: "Discipline", body: "Show up every day. Especially when it\u2019s hard." },
  { title: "Kindness", body: "True strength is gentle." },
  { title: "Perseverance", body: "The boulder rolls back. We push again." },
];

export function Community() {
  const rm = useReducedMotion();

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 sm:py-24 px-4">
      {PILLARS.map((p, i) => (
        <motion.div
          key={p.title}
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative"
        >
          {/* Number watermark */}
          <span className="absolute -top-4 -left-1 font-display text-6xl sm:text-7xl text-white/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient uppercase leading-none mb-3 relative">
            {p.title}
          </h3>
          <p className="font-body italic text-text-secondary text-sm sm:text-base relative">
            {p.body}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
