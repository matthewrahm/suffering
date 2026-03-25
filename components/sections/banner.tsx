"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function Banner() {
  const rm = useReducedMotion();

  return (
    <motion.section
      initial={rm ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden relative"
    >
      <ParallaxImage
        src="/images/musashi_banner.jpg"
        alt="Musashi mid-strike"
        width={1200}
        height={400}
        speed={0.06}
        invert
        className="img-vignette"
      />

      {/* Scrolling marquee overlay */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-white/[0.06] uppercase tracking-widest mx-8"
            >
              THROUGH SUFFERING STRENGTH
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
