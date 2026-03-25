"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MangaPanelProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  noSlide?: boolean;
  noBorder?: boolean;
  elevated?: boolean;
  viewportAmount?: number;
}

export function MangaPanel({
  children,
  className,
  style,
  delay = 0,
  noSlide = false,
  noBorder = false,
  elevated = false,
  viewportAmount = 0.1,
}: MangaPanelProps) {
  const rm = useReducedMotion();

  return (
    <motion.div
      initial={rm ? false : { opacity: 0, y: noSlide ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={cn(
        "overflow-hidden",
        !noBorder && (elevated ? "surface-elevated" : "surface-card"),
        className
      )}
      style={style}
    >
      {children}
    </motion.div>
  );
}
