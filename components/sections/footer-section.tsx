"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CopyButton } from "@/components/ui/copy-button";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { formatMarketCap } from "@/lib/utils";

const PLACEHOLDER_CA = "COMING_SOON";
const X_HANDLE = "https://x.com/sufferonsolana";

export function FooterSection() {
  const rm = useReducedMotion();
  const [marketCap, setMarketCap] = useState<number | null>(null);

  useEffect(() => {
    const fetchMcap = async () => {
      try {
        const res = await fetch("/api/market-cap");
        const data = await res.json();
        setMarketCap(data.marketCap);
      } catch {
        // silent
      }
    };
    fetchMcap();
    const interval = setInterval(fetchMcap, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 sm:py-24 px-4">
      {/* Horizontal rule */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 sm:mb-24" />

      {/* Giant title */}
      <motion.h2
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-gradient tracking-tight uppercase leading-none text-center mb-16 sm:mb-20"
      >
        $SUFFER
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Market Cap */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="text-xs text-text-muted tracking-wider uppercase font-sans mb-1">Market Cap</p>
          <AnimatedNumber
            value={marketCap}
            format={useCallback((n: number) => formatMarketCap(n), [])}
            className="font-mono text-xl sm:text-2xl text-text-primary font-medium"
          />
        </motion.div>

        {/* CA */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs text-text-muted tracking-wider uppercase font-sans mb-2">Contract</p>
          <CopyButton text={PLACEHOLDER_CA} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-2"
        >
          <a
            href={`https://pump.fun/coin/${PLACEHOLDER_CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-center text-sm"
          >
            Buy $SUFFER
          </a>
          <a
            href={X_HANDLE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline justify-center text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow
          </a>
        </motion.div>
      </div>

      <p className="text-[11px] text-text-muted text-center mt-16 font-sans">
        Not financial advice. DYOR.
      </p>
    </footer>
  );
}
