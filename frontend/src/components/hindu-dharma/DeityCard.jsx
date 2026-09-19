"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function DeityCard({ name, altNames, tradition, symbols, festivals, places, significance }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-serif-display font-bold text-lg text-navy mb-1">{t(name)}</h3>
      {altNames?.length > 0 && (
        <p className="text-sm text-bhagwa-dark mb-2">{altNames.map((n) => t(n)).join(" • ")}</p>
      )}
      {tradition && (
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-gold/15 text-bhagwa-dark mb-3">
          {t(tradition)}
        </span>
      )}
      {significance && <p className="text-sm text-gray-600 mb-3">{t(significance)}</p>}

      <dl className="space-y-1.5 text-sm">
        {symbols?.length > 0 && (
          <div className="flex gap-2">
            <dt className="text-gray-400 shrink-0 w-20">{t({ hi: "प्रतीक", en: "Symbols" })}</dt>
            <dd className="text-navy/80">{symbols.map((s) => t(s)).join(", ")}</dd>
          </div>
        )}
        {festivals?.length > 0 && (
          <div className="flex gap-2">
            <dt className="text-gray-400 shrink-0 w-20">{t({ hi: "त्योहार", en: "Festivals" })}</dt>
            <dd className="text-navy/80">{festivals.map((f) => t(f)).join(", ")}</dd>
          </div>
        )}
        {places?.length > 0 && (
          <div className="flex gap-2">
            <dt className="text-gray-400 shrink-0 w-20">{t({ hi: "स्थल", en: "Places" })}</dt>
            <dd className="text-navy/80">{places.map((p) => t(p)).join(", ")}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
