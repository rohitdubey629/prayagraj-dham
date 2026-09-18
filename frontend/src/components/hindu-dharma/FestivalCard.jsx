"use client";

import { Calendar } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function FestivalCard({ name, around, deity, regions, significance, practices }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-serif-display font-bold text-lg text-navy mb-1">{t(name)}</h3>
      <p className="flex items-center gap-1.5 text-sm text-bhagwa-dark mb-2">
        <Calendar size={14} /> {t({ hi: "सामान्यतः इस दौरान मनाया जाता है", en: "Usually observed around" })}: {t(around)}
      </p>
      {deity && <p className="text-sm text-navy/80 mb-1">{t(deity)}</p>}
      {significance && <p className="text-sm text-gray-600 mb-2">{t(significance)}</p>}
      {practices?.length > 0 && (
        <p className="text-xs text-gray-400">
          {t({ hi: "सामान्य प्रथाएँ", en: "Common practices" })}: {practices.map((p) => t(p)).join(", ")}
        </p>
      )}
      {regions?.length > 0 && (
        <p className="text-xs text-gray-400 mt-1">
          {t({ hi: "क्षेत्र", en: "Regions" })}: {regions.map((r) => t(r)).join(", ")}
        </p>
      )}
    </div>
  );
}
