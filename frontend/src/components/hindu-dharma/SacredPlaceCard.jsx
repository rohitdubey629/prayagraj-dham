"use client";

import { MapPin } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function SacredPlaceCard({ name, location, deity, temple, info, festival }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-serif-display font-bold text-lg text-navy mb-1">{t(name)}</h3>
      {location && (
        <p className="flex items-center gap-1.5 text-sm text-bhagwa-dark mb-2">
          <MapPin size={14} /> {t(location)}
        </p>
      )}
      {deity && <p className="text-sm text-navy/80 mb-1">{t({ hi: "संबंधित देवता", en: "Associated with" })}: {t(deity)}</p>}
      {temple && <p className="text-sm text-navy/80 mb-2">{t(temple)}</p>}
      {info && <p className="text-sm text-gray-500">{t(info)}</p>}
      {festival && <p className="text-xs text-gray-400 mt-2">{t({ hi: "प्रमुख त्योहार", en: "Major festival" })}: {t(festival)}</p>}
    </div>
  );
}
