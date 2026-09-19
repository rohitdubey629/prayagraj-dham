"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function YatraStats({ stats }) {
  const { t } = useTranslation();

  const cards = [
    { icon: "🛕", label: { hi: "अद्वितीय मंदिर", en: "Unique Temples Visited" }, value: stats.uniqueTemples },
    { icon: "📍", label: { hi: "कुल विज़िट्स", en: "Total Visits" }, value: stats.totalVisits },
    { icon: "🗺", label: { hi: "राज्य भ्रमण किए", en: "States Visited" }, value: stats.statesVisited },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label.en} className="bg-white border border-gold/20 rounded-xl p-5 text-center">
          <p className="text-3xl mb-1">{card.icon}</p>
          <p className="text-3xl font-bold text-navy font-serif-display">{card.value}</p>
          <p className="text-sm text-gray-500 mt-1">{t(card.label)}</p>
        </div>
      ))}
    </div>
  );
}
