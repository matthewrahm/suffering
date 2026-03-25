"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed right-2 top-1/4 bottom-1/4 w-px z-50 hidden md:block" aria-hidden="true">
      <div className="h-full w-full bg-border/20 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-text-muted to-text-secondary origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>
    </div>
  );
}
