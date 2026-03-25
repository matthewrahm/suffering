"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const CONTRACT_ADDRESS = "EEdZH7ZqLmuE26vjcHzXmugFFtTJJ82QVpQMhyfWpump";
const X_HANDLE = "https://x.com/SufferOnSol";

export function Hero() {
  const rm = useReducedMotion();

  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center relative px-4 py-20">
      {/* Title */}
      <motion.h1
        initial={rm ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient uppercase leading-none tracking-widest text-center relative"
      >
        $SUFFER
      </motion.h1>

      {/* Logo — large, hero centerpiece with breathing animation */}
      <motion.div
        initial={rm ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="my-6 sm:my-8 animate-breathe"
      >
        <Image
          src="/images/suffer_logo.jpeg"
          alt="$SUFFER"
          width={512}
          height={512}
          priority
          className="w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto img-invert img-vignette"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={rm ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="font-body italic text-lg sm:text-xl md:text-2xl text-text-secondary mt-4 sm:mt-6"
      >
        Through suffering, strength.
      </motion.p>

      {/* Ink brush divider */}
      <motion.div
        initial={rm ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-32 sm:w-40 h-px bg-gradient-to-r from-transparent via-text-muted to-transparent mt-6 sm:mt-8"
      />

      {/* CTAs */}
      <motion.div
        initial={rm ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex flex-wrap gap-3 mt-6 sm:mt-8"
      >
        <a
          href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-sm"
        >
          Buy $SUFFER
        </a>
        <a
          href={X_HANDLE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline text-sm"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-6 animate-float-down"
      >
        <ChevronDown className="w-5 h-5 text-text-muted" />
      </motion.div>
    </section>
  );
}
