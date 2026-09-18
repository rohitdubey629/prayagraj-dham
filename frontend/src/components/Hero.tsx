"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { t } = useTranslation();
  const h = translations.hero;

  return (
    <div className="relative bg-bhagwa-DEFAULT text-white py-24 mb-12">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            {t(h.title)}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t(h.subtitleLine1)}
            <br />
            {t(h.subtitleLine2)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/sangam"
              className="bg-white text-bhagwa-dark px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition text-lg"
            >
              {t(h.ctaSangam)}
            </Link>
            <Link
              href="/kumbh"
              className="bg-dharmic-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 transition text-lg"
            >
              {t(h.ctaKumbh)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
