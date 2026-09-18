"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function ConceptCard({ term, sanskrit, definition, explanation }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <h3 className="font-serif-display font-bold text-lg text-navy">{t(term)}</h3>
        {sanskrit && <span className="text-sm text-bhagwa-dark">{sanskrit}</span>}
      </div>
      <p className="text-sm font-medium text-navy/90 mb-1">{t(definition)}</p>
      {explanation && <p className="text-sm text-gray-500">{t(explanation)}</p>}
    </div>
  );
}
