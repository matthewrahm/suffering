"use client";

import { useEffect, useRef, useState } from "react";
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
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio.mp4");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

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
        <div className="flex items-center">
          <button
            onClick={toggleAudio}
            className={`flex items-center justify-center w-7 h-7 rounded-md border transition-colors ${playing ? "border-text-muted" : "border-border hover:border-text-muted animate-audio-pulse"}`}
            aria-label={playing ? "Mute music" : "Play music"}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-text-secondary hover:fill-text-primary transition-colors">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-text-muted hover:fill-text-primary transition-colors">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            )}
          </button>
        </div>
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
