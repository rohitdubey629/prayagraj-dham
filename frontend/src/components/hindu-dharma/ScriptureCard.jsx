"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function ScriptureCard({ name, sanskrit, description, themes, related }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <h3 className="font-serif-display font-bold text-xl text-navy">{t(name)}</h3>
        {sanskrit && <span className="text-lg text-bhagwa-dark">{sanskrit}</span>}
      </div>
      <p className="text-sm text-gray-600 mb-4">{t(description)}</p>
      {themes?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {themes.map((theme, i) => (
            <span key={i} className="text-xs bg-gold/10 text-bhagwa-dark px-2 py-1 rounded-full">
              {t(theme)}
            </span>
          ))}
        </div>
      )}
      {related?.length > 0 && (
        <p className="text-xs text-gray-400">
          {t({ hi: "संबंधित", en: "Related" })}: {related.map((r) => t(r)).join(", ")}
        </p>
      )}
    </div>
  );
}
