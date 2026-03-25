"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function QuoteOne() {
  const rm = useReducedMotion();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-center py-16 sm:py-24 px-4">
      {/* Image */}
      <motion.div
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="max-w-[260px] sm:max-w-xs">
          <ParallaxImage
            src="/images/quote_miyamoto.jpeg"
            alt="All truly strong people are kind"
            width={300}
            height={550}
            speed={0.05}
            invert
            className="img-vignette"
          />
        </div>
      </motion.div>

      {/* Quote text */}
      <div>
        <motion.p
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient uppercase leading-[0.95] tracking-tight"
        >
          All truly strong people are kind.
        </motion.p>
        <motion.p
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-xs text-text-muted tracking-widest uppercase mt-8"
        >
          Miyamoto Musashi
        </motion.p>
      </div>
    </section>
  );
}
