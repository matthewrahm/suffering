"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number;
  invert?: boolean;
  noBlend?: boolean;
  className?: string;
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  speed = 0.08,
  invert = false,
  noBlend = false,
  className,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-speed * 60, speed * 60]
  );

  return (
    <div ref={containerRef} className="relative">
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn(
            "w-full h-auto",
            invert && "img-invert",
            !noBlend && "img-blend",
            className
          )}
        />
      </motion.div>
    </div>
  );
}
