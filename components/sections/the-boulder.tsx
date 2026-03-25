"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TheBoulder() {
  const rm = useReducedMotion();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-20 items-center py-16 sm:py-24 px-4">
      {/* Quote */}
      <div>
        <motion.blockquote
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body italic text-2xl sm:text-3xl md:text-4xl leading-snug text-text-primary"
        >
          &ldquo;The struggle itself toward the heights is enough to fill a man&rsquo;s heart. One must imagine Sisyphus happy.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-xs text-text-muted tracking-widest uppercase mt-8"
        >
          Albert Camus
        </motion.p>
      </div>

      {/* Divider — visible on mobile only */}
      <div className="block md:hidden w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />

      {/* Kanji with glow */}
      <motion.div
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center text-center"
      >
        <p className="font-display text-6xl sm:text-7xl md:text-8xl text-gradient uppercase leading-none animate-kanji-glow">
          押す
        </p>
        <p className="font-sans text-xs text-text-muted tracking-widest uppercase mt-4">
          Push
        </p>
      </motion.div>
    </section>
  );
}
