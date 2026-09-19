"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// The rotating background itself lives in FixedBackground.tsx, rendered once
// by Layout.tsx behind the whole page. Hero only owns the foreground content.
export default function Hero() {
  const { t } = useTranslation();
  const h = translations.hero;

  return (
    <div className="relative h-screen w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full flex items-center"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              variants={item}
              className="font-serif-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              {t(h.title)}
            </motion.h1>
            <motion.p variants={item} className="text-xl md:text-2xl mb-10 leading-relaxed text-cream/90">
              {t(h.subtitleLine1)}
              <br />
              {t(h.subtitleLine2)}
            </motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sangam"
                className="bg-gold text-bhagwa-dark px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition text-lg shadow-lg"
              >
                {t(h.ctaSangam)}
              </Link>
              <Link
                href="/kumbh"
                className="border-2 border-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-bhagwa-dark transition text-lg"
              >
                {t(h.ctaKumbh)}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
