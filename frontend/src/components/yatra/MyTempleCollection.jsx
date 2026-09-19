"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

const SORTS = [
  { id: "latest", label: { hi: "नवीनतम विज़िट", en: "Latest visit" } },
  { id: "oldest", label: { hi: "पुरानी विज़िट", en: "Oldest visit" } },
  { id: "most", label: { hi: "सर्वाधिक विज़िट", en: "Most visits" } },
  { id: "alpha", label: { hi: "वर्णानुक्रम", en: "Alphabetical" } },
];

function formatDate(iso, lang) {
  try {
    return new Date(iso).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function MyTempleCollection({ visitedPlaces }) {
  const { t, lang } = useTranslation();
  const [sort, setSort] = useState("latest");

  const sorted = useMemo(() => {
    const list = [...visitedPlaces];
    switch (sort) {
      case "oldest":
        return list.sort((a, b) => new Date(a.lastVisitedAt) - new Date(b.lastVisitedAt));
      case "most":
        return list.sort((a, b) => b.visitCount - a.visitCount);
      case "alpha":
        return list.sort((a, b) => t(a.place.name).localeCompare(t(b.place.name)));
      case "latest":
      default:
        return list.sort((a, b) => new Date(b.lastVisitedAt) - new Date(a.lastVisitedAt));
    }
  }, [visitedPlaces, sort, t]);

  if (visitedPlaces.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        {t({ hi: "आपने अभी तक कोई मंदिर दर्ज नहीं किया है।", en: "You haven't logged any temples yet." })}
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {SORTS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSort(s.id)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              sort === s.id ? "bg-bhagwa-dark text-white border-bhagwa-dark" : "bg-white text-navy border-gray-200"
            }`}
          >
            {t(s.label)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map(({ place, visitCount, lastVisitedAt }) => (
          <div key={place.id} className="bg-white border border-gold/20 rounded-xl p-4">
            <p className="font-semibold text-navy">{t(place.name)}</p>
            <p className="text-xs text-bhagwa-dark mb-1">{t(place.category)}</p>
            <p className="text-sm text-gray-500">
              {visitCount} {visitCount === 1 ? t({ hi: "विज़िट", en: "visit" }) : t({ hi: "विज़िट्स", en: "visits" })}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {t({ hi: "आखिरी बार", en: "Last visited" })}: {formatDate(lastVisitedAt, lang)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
