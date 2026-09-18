"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function Glossary({ terms }) {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = terms.filter(
      (term) =>
        !q ||
        term.term.hi.toLowerCase().includes(q) ||
        term.term.en.toLowerCase().includes(q) ||
        term.definition.hi.toLowerCase().includes(q) ||
        term.definition.en.toLowerCase().includes(q)
    );
    const map = {};
    filtered.forEach((term) => {
      if (!map[term.letter]) map[term.letter] = [];
      map[term.letter].push(term);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [terms, query]);

  return (
    <div>
      <div className="relative max-w-md mb-8">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t({ hi: "शब्दावली में खोजें…", en: "Filter the glossary…" })}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
        />
      </div>

      {grouped.length === 0 ? (
        <p className="text-gray-500">{t({ hi: "कोई शब्द नहीं मिला।", en: "No terms match your search." })}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {grouped.map(([letter, items]) => (
            <div key={letter}>
              <h3 className="font-serif-display text-2xl font-bold text-bhagwa-dark mb-3">{letter}</h3>
              <dl className="space-y-3">
                {items.map((term, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-navy">{t(term.term)}</dt>
                    <dd className="text-sm text-gray-600">{t(term.definition)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
