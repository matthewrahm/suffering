"use client";

import { useEffect, useState } from "react";
import { formatMarketCap } from "@/lib/utils";

interface Stats {
  priceUsd: string | null;
  marketCap: number | null;
  volume24h: number | null;
  priceChange24h: number | null;
}

export function StatsTicker() {
  const [stats, setStats] = useState<Stats>({
    priceUsd: null,
    marketCap: null,
    volume24h: null,
    priceChange24h: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/market-cap");
        const data = await res.json();
        setStats(data);
      } catch {
        // silent
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 30_000);
    return () => clearInterval(interval);
  }, []);

  const hasData = stats.marketCap != null;

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-border/50">
      <div className="max-w-[1440px] mx-auto px-4 py-2 grid grid-cols-[1fr_auto_1fr] items-center text-xs font-mono">
        <div />
        <div className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto">
          <Stat label="Price" value={hasData && stats.priceUsd ? `$${parseFloat(stats.priceUsd).toFixed(8)}` : null} />
          <Divider />
          <Stat label="MCap" value={hasData ? formatMarketCap(stats.marketCap) : null} />
          <Divider />
          <Stat label="24h Vol" value={hasData ? formatMarketCap(stats.volume24h) : null} />
          <Divider />
          <StatChange label="24h" value={stats.priceChange24h} />
        </div>
        <div className="flex items-center justify-end gap-2">
          <a
            href="https://x.com/sufferonsolana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-7 h-7 rounded-md border border-border hover:border-text-muted transition-colors"
            aria-label="Follow on X"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-text-secondary hover:fill-text-primary transition-colors">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://pump.fun/coin/COMING_SOON"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 h-7 rounded-md bg-white text-black text-[11px] font-sans font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
      <span className="text-text-muted uppercase tracking-wider">{label}</span>
      <span className="text-text-primary font-medium">
        {value ?? "---"}
      </span>
    </div>
  );
}

function StatChange({ label, value }: { label: string; value: number | null }) {
  const isPositive = value != null && value >= 0;
  const color = value == null ? "text-text-primary" : isPositive ? "text-green-400" : "text-red-400";

  return (
    <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
      <span className="text-text-muted uppercase tracking-wider">{label}</span>
      <span className={`font-medium ${color}`}>
        {value != null ? `${isPositive ? "+" : ""}${value.toFixed(1)}%` : "---"}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-3 bg-border shrink-0" />;
}
