"use client";

import { CheckCircle2 } from "lucide-react";
import { useYatra } from "@/lib/yatra/useYatra";
import { useTranslation } from "@/lib/useTranslation";

export default function YatraWishlist({ places }) {
  const { t } = useTranslation();
  const { toggleWishlist } = useYatra();

  if (places.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        {t({
          hi: "आपकी यात्रा सूची खाली है — डायरी में किसी भी मंदिर पर ♡ आइकन दबाकर जोड़ें।",
          en: "Your wishlist is empty — tap the ♡ icon on any temple in the diary to add it.",
        })}
      </p>
    );
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((place) => (
        <li key={place.id} className="bg-white border border-gold/20 rounded-xl p-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-navy">{t(place.name)}</p>
            <p className="text-xs text-bhagwa-dark">{t(place.category)}</p>
          </div>
          {place.visited ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-dharmic-green whitespace-nowrap">
              <CheckCircle2 size={14} /> {t({ hi: "देखा गया", en: "Visited" })}
            </span>
          ) : (
            <button
              onClick={() => toggleWishlist(place.id)}
              className="text-xs text-gray-400 hover:text-red-500 whitespace-nowrap"
            >
              {t({ hi: "हटाएँ", en: "Remove" })}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
