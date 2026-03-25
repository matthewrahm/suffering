"use client";

import { motion, useReducedMotion } from "framer-motion";

const LINES = [
  "Weeks of grinding.",
  "Relentless hustle.",
  "Endless onboarding.",
];

export function TheTruth() {
  const rm = useReducedMotion();

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Opening */}
        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body italic text-xl sm:text-2xl md:text-3xl text-text-primary leading-relaxed"
        >
          Have you ever noticed almost every memecoin narrative is built on
          optimism?
        </motion.p>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg sm:text-xl text-text-secondary leading-relaxed"
        >
          &ldquo;Believe in something.&rdquo;&ensp;&ldquo;What
          if&hellip;&rdquo;&ensp;&ldquo;Imagine if&rdquo;
        </motion.p>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-lg sm:text-xl text-text-secondary leading-relaxed"
        >
          It all sounds good&hellip; until the same people preaching it dump the
          second they get the chance. That is not belief. That is not long term.
          And if we are being honest, that is not reality.
        </motion.p>

        {/* The turn */}
        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"
        />

        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient uppercase tracking-tight text-center"
        >
          The truth is, real coins are built through suffering.
        </motion.p>

        {/* Staccato lines */}
        <div className="space-y-3 text-center">
          {LINES.map((line, i) => (
            <motion.p
              key={line}
              initial={rm ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="font-body italic text-lg sm:text-xl text-text-primary"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={rm ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"
        />

        {/* Closing */}
        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-lg sm:text-xl text-text-secondary leading-relaxed text-center"
        >
          It is not just a ticker, a name, and a cool PFP anymore.
        </motion.p>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-xl sm:text-2xl md:text-3xl text-text-primary leading-relaxed text-center"
        >
          This coin is made to embrace that suffering. Every holder is expected
          to grind like it is their last coin&hellip;
        </motion.p>

        <motion.p
          initial={rm ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient uppercase tracking-tight text-center"
        >
          Because if we do this right, it very well might be.
        </motion.p>
      </div>
    </section>
  );
}
