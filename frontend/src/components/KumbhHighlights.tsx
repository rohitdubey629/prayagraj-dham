"use client";

import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

// components/KumbhHighlights.js
export default function KumbhHighlights() {
  const { t } = useTranslation();
  const kh = translations.kumbhHighlights;

  return (
    <section className="py-12 bg-bhagwa-light text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center font-serif">{t(kh.heading)}</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl mb-4">
            {t(kh.intro)}
          </p>
          <p style={{ whiteSpace: "pre-line" }}>{t(kh.shloka)}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {kh.highlights.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-30 text-gray-600">
              <h3 className="text-xl font-bold mb-2 font-serif">{t(item.title)}</h3>
              <p className="mb-2">{t(item.description)}</p>
              <p className="text-sm opacity-80">{t(item.date)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
