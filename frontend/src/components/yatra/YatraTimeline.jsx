"use client";

import { useMemo, useState } from "react";
import { findOption, companionOptions } from "@/lib/yatra/options";
import { useTranslation } from "@/lib/useTranslation";

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

const ordinal = (n, lang) => {
  if (lang === "hi") return `${n}${n === 1 ? "ली" : "वीं"} विज़िट`;
  const suffix = n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  return `${n}${suffix} Visit`;
};

export default function YatraTimeline({ timeline }) {
  const { t, lang } = useTranslation();
  const [yearFilter, setYearFilter] = useState("all");

  const years = useMemo(() => {
    const set = new Set(timeline.map((entry) => new Date(entry.visitedAt).getFullYear()));
    return Array.from(set).sort((a, b) => b - a);
  }, [timeline]);

  const grouped = useMemo(() => {
    const filtered = yearFilter === "all" ? timeline : timeline.filter((e) => String(new Date(e.visitedAt).getFullYear()) === yearFilter);
    const map = new Map();
    filtered.forEach((entry) => {
      const year = new Date(entry.visitedAt).getFullYear();
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(entry);
    });
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [timeline, yearFilter]);

  if (timeline.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        {t({ hi: "अभी तक कोई विज़िट दर्ज नहीं है। किसी मंदिर पर जाकर \"विज़िट जोड़ें\" पर क्लिक करें।", en: "No visits recorded yet. Open a temple above and click \"Add Visit\"." })}
      </p>
    );
  }

  return (
    <div>
      {years.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setYearFilter("all")}
            className={`px-3 py-1 rounded-full text-sm border ${yearFilter === "all" ? "bg-bhagwa-dark text-white border-bhagwa-dark" : "bg-white text-navy border-gray-200"}`}
          >
            {t({ hi: "सभी वर्ष", en: "All Years" })}
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(String(y))}
              className={`px-3 py-1 rounded-full text-sm border ${yearFilter === String(y) ? "bg-bhagwa-dark text-white border-bhagwa-dark" : "bg-white text-navy border-gray-200"}`}
            >
              {y}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-10">
        {grouped.map(([year, entries]) => (
          <div key={year}>
            <h3 className="font-serif-display text-2xl font-bold text-bhagwa-dark mb-4">{year}</h3>
            <div className="space-y-4 border-l-2 border-gold/30 pl-5">
              {entries.map((entry) => {
                const companion = entry.companions ? findOption(companionOptions, entry.companions) : null;
                return (
                  <div key={entry.id} className="relative bg-white border border-gold/20 rounded-xl p-4">
                    <span className="absolute -left-[27px] top-5 w-3 h-3 rounded-full bg-bhagwa-dark border-2 border-cream" />
                    <p className="font-semibold text-navy">🛕 {t(entry.place.name)}</p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {formatDate(entry.visitedAt, lang)} · {ordinal(entry.visitNumber, lang)}
                      {companion && <> · {companion.icon} {t(companion.label)}</>}
                    </p>
                    {entry.memory && <p className="text-sm text-gray-700 mt-2 italic">“{entry.memory}”</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
