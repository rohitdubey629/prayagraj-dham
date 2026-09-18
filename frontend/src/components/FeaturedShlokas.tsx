"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getShlokas, Shloka } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

function ShlokaCard({ shloka }: { shloka: Shloka }) {
  return (
    <div className="w-80 md:w-96 flex-shrink-0 bg-white/10 p-6 rounded-lg border border-gold/30 backdrop-blur-sm">
      <blockquote className="text-lg italic mb-4 text-cream" style={{ whiteSpace: "pre-line" }}>
        &quot;{shloka.text}&quot;
      </blockquote>
      {shloka.meaning && <p className="text-sm mb-2 text-cream/80">{shloka.meaning}</p>}
      {shloka.source && <p className="text-right text-gold">- {shloka.source}</p>}
    </div>
  );
}

export default function FeaturedShlokas() {
  const [shlokas, setShlokas] = useState<Shloka[]>([]);
  const { t } = useTranslation();
  const fs = translations.featuredShlokas;

  useEffect(() => {
    getShlokas(true)
      .then((data) => setShlokas(data))
      .catch(() => setShlokas([]));
  }, []);

  if (shlokas.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28  text-white">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-serif-display text-3xl md:text-4xl font-bold mb-2 text-center">{t(fs.heading)}</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>

        <div className="shloka-marquee overflow-hidden">
          <div className="shloka-marquee-track flex w-max gap-6">
            {[...shlokas, ...shlokas].map((shloka, index) => (
              <ShlokaCard key={`${shloka._id}-${index}`} shloka={shloka} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shlokas"
            className="inline-block bg-gold text-bhagwa-dark px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
          >
            {t(fs.viewAll)}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
