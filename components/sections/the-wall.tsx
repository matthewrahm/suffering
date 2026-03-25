"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WALL_TWEETS } from "@/data/wall-tweets";

export function TheWall() {
  const rm = useReducedMotion();

  return (
    <section className="py-16 sm:py-24 px-4">
      {/* Header */}
      <motion.h2
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient uppercase tracking-tight text-center"
      >
        The Wall
      </motion.h2>
      <motion.p
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-body italic text-lg text-text-secondary mt-3 text-center"
      >
        Voices from the path.
      </motion.p>

      {/* Tweets with vertical column dividers */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 md:divide-x md:divide-border/20">
        {WALL_TWEETS.map((tweet, i) => {
          const isPlaceholder = tweet.id.startsWith("placeholder");
          const tweetUrl = isPlaceholder
            ? `https://x.com/${tweet.handle.replace("@", "")}`
            : `https://x.com/${tweet.handle.replace("@", "")}/status/${tweet.id}`;

          return (
            <motion.a
              key={tweet.id}
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={rm ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="block py-6 px-4 md:px-6 border-b border-border/30 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-white/5 border border-border/50 flex items-center justify-center shrink-0">
                  <span className="font-sans text-[10px] text-text-muted font-medium">
                    {tweet.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-sans text-sm text-text-primary font-medium">
                    {tweet.author}
                  </span>
                  <span className="font-mono text-xs text-text-muted ml-2">
                    {tweet.handle}
                  </span>
                </div>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-text-muted shrink-0">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <p className="font-body italic text-text-secondary text-sm leading-relaxed">
                {tweet.text}
              </p>
            </motion.a>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={rm ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href="https://twitter.com/intent/tweet?text=%24SUFFER&hashtags=SUFFER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-xs text-text-muted tracking-widest uppercase hover:text-text-secondary transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Add your voice to the wall
        </a>
      </motion.div>
    </section>
  );
}
