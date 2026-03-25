"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionDivider({ kanji }: { kanji?: string }) {
  const rm = useReducedMotion();

  return (
    <motion.div
      initial={rm ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-divider"
      aria-hidden="true"
    >
      <span>{kanji ?? "+"}</span>
    </motion.div>
  );
}
