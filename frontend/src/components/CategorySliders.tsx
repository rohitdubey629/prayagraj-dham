"use client";

import { useEffect, useState } from "react";
import { getPlaces, Place } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";
import CategoryRow from "./CategoryRow";

const CATEGORIES = ["Temple", "Ghat", "Ashram", "Historical", "Other"] as const;

export default function CategorySliders() {
  const [places, setPlaces] = useState<Place[]>([]);
  const { t } = useTranslation();
  const cs = translations.categorySliders;
  const tr = translations.temples;

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .catch(() => setPlaces([]));
  }, []);

  const categoryLabels: Record<(typeof CATEGORIES)[number], typeof tr.filterTemple> = {
    Temple: tr.filterTemple,
    Ghat: tr.filterGhat,
    Ashram: tr.filterAshram,
    Historical: tr.filterHistorical,
    Other: tr.filterOther,
  };

  const grouped = CATEGORIES.map((category) => ({
    category,
    items: places
      .filter((p) => p.category === category)
      .sort((a, b) => Number(b.featured) - Number(a.featured)),
  })).filter((group) => group.items.length > 0);

  if (grouped.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28">
      <div className="w-full px-4 md:px-8">
        <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-bhagwa-dark mb-2 text-center">
          {t(cs.heading)}
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-14"></div>

        {grouped.map((group) => (
          <CategoryRow
            key={group.category}
            categoryLabel={categoryLabels[group.category]}
            categoryValue={group.category}
            places={group.items}
          />
        ))}
      </div>
    </section>
  );
}
