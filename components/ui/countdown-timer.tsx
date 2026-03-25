"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const midnight = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
      );
      const diff = midnight.getTime() - now.getTime();
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    setTime(calc());
    const interval = setInterval(() => setTime(calc()), 1_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-sans text-[10px] text-text-muted tracking-widest uppercase">
        Next Challenge
      </span>
      <span className="font-mono text-sm text-text-secondary tabular-nums" aria-live="polite">
        {time ?? "--:--:--"}
      </span>
    </div>
  );
}
