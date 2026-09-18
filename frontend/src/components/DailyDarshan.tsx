"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// components/DailyDarshan.js
export default function DailyDarshan() {
  const { t } = useTranslation();
  const dd = translations.dailyDarshan;

  return (
    <section className="py-20 md:py-28">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2 variants={item} className="font-serif-display text-3xl md:text-4xl font-bold text-bhagwa-dark mb-2 text-center">
          {t(dd.heading)}
        </motion.h2>
        <motion.div variants={item} className="w-24 h-1 bg-gold mx-auto mb-10"></motion.div>

        <motion.div variants={item} className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gold/20 space-y-8">

          {/* घाट दर्शन */}
          <div>
            <h3 className="font-serif-display text-xl font-semibold text-bhagwa-dark mb-4">{t(dd.ghatDarshanHeading)}</h3>
            <div className="space-y-4">
              {dd.ghatDarshans.map((darshanItem, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gold text-bhagwa-dark rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{t(darshanItem.event)}</h4>
                    <p className="text-gray-600">{t(darshanItem.time)} | {t(darshanItem.location)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* मंदिर दर्शन */}
          <div>
            <h3 className="font-serif-display text-xl font-semibold text-bhagwa-dark mb-4">{t(dd.templeDarshanHeading)}</h3>
            <div className="space-y-4">
              {dd.templeDarshans.map((darshanItem, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gold text-bhagwa-dark rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{t(darshanItem.event)}</h4>
                    <p className="text-gray-600">{t(darshanItem.time)} | {t(darshanItem.location)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link to full schedule */}
          <div className="pt-4 text-center">
            <Link
              href="/darshan-schedule"
              className="inline-flex items-center text-bhagwa-dark font-semibold hover:text-gold transition"
            >
              {t(dd.viewFullSchedule)} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
