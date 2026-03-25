"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedNumberProps {
  value: number | null;
  format: (n: number) => string;
  fallback?: string;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({
  value,
  format,
  fallback = "---",
  className,
  duration = 1200,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const rm = useReducedMotion();
  const [display, setDisplay] = useState(fallback);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (value == null) {
      setDisplay(fallback);
      return;
    }

    if (rm || !isInView || hasAnimated.current) {
      setDisplay(format(value));
      return;
    }

    hasAnimated.current = true;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(format(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView, rm, format, fallback, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
