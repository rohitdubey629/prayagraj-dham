"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";

/**
 * Generic section wrapper used throughout the Hindu Dharma Diary.
 * Keeps consistent spacing, heading style and scroll-margin (for in-page nav).
 * `eyebrow`/`title`/`subtitle` accept either a plain string or a { hi, en } object.
 */
export default function Section({ id, eyebrow, title, subtitle, tone = "cream", children }) {
  const { t } = useTranslation();
  const resolve = (value) => (typeof value === "string" ? value : value ? t(value) : value);
  const bg = tone === "navy" ? "bg-bhagwa-dark text-white" : tone === "gold" ? "bg-gold/10" : "bg-cream";

  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${bg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          {eyebrow && (
            <p className={`uppercase tracking-widest text-sm font-semibold mb-2 ${tone === "navy" ? "text-gold" : "text-bhagwa-dark"}`}>
              {resolve(eyebrow)}
            </p>
          )}
          {title && (
            <h2 className={`font-serif-display text-3xl md:text-4xl font-bold ${tone === "navy" ? "text-white" : "text-navy"}`}>
              {resolve(title)}
            </h2>
          )}
          <div className="w-16 h-1 bg-gold mt-4 mb-4 rounded-full" />
          {subtitle && (
            <p className={`text-base md:text-lg ${tone === "navy" ? "text-white/80" : "text-gray-600"}`}>{resolve(subtitle)}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
