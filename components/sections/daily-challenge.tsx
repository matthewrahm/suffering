"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import challenges from "@/data/challenges.json";

// Launch epoch — Day 1 starts on this date (UTC)
const LAUNCH_DATE = new Date(Date.UTC(2026, 2, 25)); // March 25, 2026

function getDayNumber() {
  const now = new Date();
  const days = Math.floor((now.getTime() - LAUNCH_DATE.getTime()) / 86_400_000);
  return Math.max(days, 0);
}

function getDayIndex(dayNumber: number) {
  return ((dayNumber % challenges.length) + challenges.length) % challenges.length;
}

function getArchive(dayNumber: number, count: number) {
  const available = Math.min(count, dayNumber);
  return Array.from({ length: available }, (_, i) => {
    const idx = getDayIndex(dayNumber - (i + 1));
    return challenges[idx];
  });
}

function getDayProgress() {
  const now = new Date();
  const h = now.getUTCHours();
  const m = now.getUTCMinutes();
  const s = now.getUTCSeconds();
  return (h * 3600 + m * 60 + s) / 86400;
}

export function DailyChallenge() {
  const rm = useReducedMotion();
  const [dayNumber, setDayNumber] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setDayNumber(getDayNumber());
    setProgress(getDayProgress());
    const interval = setInterval(() => setProgress(getDayProgress()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (dayNumber === null) return null;

  const todayIndex = getDayIndex(dayNumber);
  const today = challenges[todayIndex];
  const archive = getArchive(dayNumber, 4);

  const tweetText = encodeURIComponent(`${today.prompt}\n\n$SUFFER`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-12 md:gap-16 items-start">
        {/* Kanji with glow */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-display text-6xl sm:text-7xl md:text-8xl text-gradient uppercase leading-none animate-kanji-glow">
            {today.kanji}
          </p>
          <p className="font-sans text-[10px] text-text-muted tracking-widest uppercase mt-4">
            {today.meaning}
          </p>
        </motion.div>

        {/* Main challenge */}
        <div>
          <motion.div
            initial={rm ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="font-sans text-xs text-text-muted tracking-widest uppercase">
              Daily Suffering
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="font-mono text-xs text-text-muted">
              Day {dayNumber + 1}
            </span>
          </motion.div>

          <motion.blockquote
            initial={rm ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body italic text-2xl sm:text-3xl md:text-4xl leading-snug text-text-primary"
          >
            &ldquo;{today.prompt}&rdquo;
          </motion.blockquote>

          {today.source && (
            <motion.p
              initial={rm ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-sans text-xs text-text-muted tracking-widest uppercase mt-6"
            >
              {today.source}
            </motion.p>
          )}

          <motion.div
            initial={rm ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Tweet Your Answer
            </a>
            <CountdownTimer />
          </motion.div>

          {/* Day progress bar */}
          <motion.div
            initial={rm ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <div className="h-px w-full bg-border/30 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-text-muted to-text-secondary"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="font-mono text-[9px] text-text-muted">00:00 UTC</span>
              <span className="font-mono text-[9px] text-text-muted">23:59 UTC</span>
            </div>
          </motion.div>
        </div>

        {/* Archive */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-sans text-[10px] text-text-muted tracking-widest uppercase mb-4">
            Previous
          </p>
          {archive.length === 0 ? (
            <p className="font-body italic text-xs text-text-muted">
              Day 1 &mdash; the path begins.
            </p>
          ) : (
            archive.map((c, i) => (
              <motion.div
                key={c.id}
                initial={rm ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="py-3 border-b border-border/30 last:border-b-0"
              >
                <span className="font-mono text-[10px] text-text-muted block mb-1">
                  {c.kanji} &middot; {c.meaning}
                </span>
                <p className="font-body italic text-xs sm:text-sm text-text-secondary line-clamp-2">
                  {c.prompt}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
