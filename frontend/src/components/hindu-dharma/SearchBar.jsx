"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchIndex, searchCategories, matchesQuery, matchesCategory } from "@/data/hindu-dharma/searchIndex";
import { useTranslation } from "@/lib/useTranslation";
import CategoryFilter from "./CategoryFilter";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(searchCategories[0]);
  const { t } = useTranslation();

  const hasActiveFilter = Boolean(query.trim()) || category.en !== searchCategories[0].en;

  const results = useMemo(() => {
    if (!hasActiveFilter) return [];
    return searchIndex
      .filter((entry) => matchesCategory(entry, category))
      .filter((entry) => matchesQuery(entry, query))
      .slice(0, 30);
  }, [query, category, hasActiveFilter]);

  const handleJump = (sectionId) => {
    setQuery("");
    setCategory(searchCategories[0]);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gold/30 p-4 md:p-6">
      <div className="relative">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t({
            hi: "हिंदू धर्म डायरी में खोजें… (देवी-देवता, वेद, मंदिर, त्योहार, अवधारणाएँ)",
            en: "Search Hindu Dharma Diary… (deities, Vedas, temples, festivals, concepts)",
          })}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 text-navy"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="mt-4">
        <CategoryFilter categories={searchCategories} active={category} onChange={setCategory} />
      </div>

      {hasActiveFilter && (
        <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-gray-100 border-t border-gray-100">
          {results.length === 0 ? (
            <p className="text-sm text-gray-500 py-4">
              {t({ hi: "कोई परिणाम नहीं मिला। दूसरा शब्द या श्रेणी आज़माएँ।", en: "No matches. Try a different term or category." })}
            </p>
          ) : (
            results.map((entry, index) => (
              <button
                key={`${entry.title.en}-${index}`}
                onClick={() => handleJump(entry.sectionId)}
                className="w-full text-left py-3 hover:bg-gold/5 px-2 rounded transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-navy">{t(entry.title)}</span>
                  <span className="text-xs text-bhagwa-dark bg-gold/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t(entry.category)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-1 mt-0.5">{t(entry.description)}</p>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
