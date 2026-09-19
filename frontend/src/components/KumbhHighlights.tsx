"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// components/KumbhHighlights.js
export default function KumbhHighlights() {
  const { t } = useTranslation();
  const kh = translations.kumbhHighlights;

  return (
    <section className="py-20 md:py-28 text-white">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2 variants={item} className="font-serif-display text-3xl md:text-4xl font-bold mb-2 text-center">
          {t(kh.heading)}
        </motion.h2>
        <motion.div variants={item} className="w-24 h-1 bg-gold mx-auto mb-8"></motion.div>

        <motion.div variants={item} className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xl mb-4 text-cream/90">{t(kh.intro)}</p>
          <p className="text-gold font-serif-display" style={{ whiteSpace: "pre-line" }}>
            {t(kh.shloka)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {kh.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-gold/30 hover:border-gold/70 transition"
            >
              <h3 className="font-serif-display text-xl font-bold mb-2 text-gold">{t(highlight.title)}</h3>
              <p className="mb-2 text-cream/90">{t(highlight.description)}</p>
              <p className="text-sm text-cream/60">{t(highlight.date)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
