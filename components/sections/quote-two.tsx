"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function QuoteTwo() {
  const rm = useReducedMotion();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-12 md:gap-16 items-center py-16 sm:py-24 px-4">
      {/* Standing Musashi */}
      <motion.div
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden md:block"
      >
        <ParallaxImage
          src="/images/standing_miyamoto.jpeg"
          alt="Miyamoto Musashi"
          width={300}
          height={500}
          speed={0.05}
        />
      </motion.div>

      {/* Quote image */}
      <motion.div
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="max-w-xs sm:max-w-sm">
          <ParallaxImage
            src="/images/other_quote.jpeg"
            alt="A man is great because failure hasn't stopped him."
            width={500}
            height={600}
            speed={0.04}
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
          className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient uppercase leading-[0.95] tracking-tight"
        >
          A man is great because failure hasn&rsquo;t stopped him.
        </motion.p>
        <motion.p
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-xs text-text-muted tracking-widest uppercase mt-6"
        >
          Vagabond
        </motion.p>
      </div>
    </section>
  );
}
