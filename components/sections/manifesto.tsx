"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function Manifesto() {
  const rm = useReducedMotion();
  const scaleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], rm ? [1, 1] : [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], rm ? [1, 1] : [0.3, 1]);

  return (
    <section className="py-16 sm:py-24 px-4 space-y-20 sm:space-y-28">
      {/* Row 1: text | sword | text — staggered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center">
        <motion.p
          initial={rm ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body italic text-xl sm:text-2xl text-text-primary leading-relaxed md:-translate-y-6"
        >
          The path is not meant to be easy. Every wound is a lesson. Every scar, a testament.
        </motion.p>

        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          <ParallaxImage
            src="/images/chained_sword.jpeg"
            alt="Chained sword"
            width={512}
            height={512}
            speed={0.06}
          />
        </motion.div>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-xl sm:text-2xl text-text-primary leading-relaxed md:translate-y-6"
        >
          Discipline is not punishment — it is the bridge between who you are and who you could become.
        </motion.p>
      </div>

      {/* Row 2: text | kanji | text — staggered opposite */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center">
        <motion.p
          initial={rm ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body italic text-xl sm:text-2xl text-text-primary leading-relaxed md:translate-y-4"
        >
          We do not run from suffering. We sharpen ourselves against it.
        </motion.p>

        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-display text-5xl sm:text-6xl md:text-7xl text-gradient uppercase leading-none animate-kanji-glow">
            忍耐
          </p>
          <p className="font-sans text-[10px] text-text-muted tracking-widest uppercase mt-4">
            Endurance
          </p>
        </motion.div>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-xl sm:text-2xl text-text-primary leading-relaxed md:-translate-y-4"
        >
          Patience is not passive. It is the fiercest form of strength.
        </motion.p>
      </div>

      {/* Row 3: full-width statement with parallax scale */}
      <motion.div
        ref={scaleRef}
        style={{ scale, opacity }}
        className="text-center py-8"
      >
        <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient uppercase tracking-tight">
          Through suffering, strength.
        </p>
      </motion.div>
    </section>
  );
}
