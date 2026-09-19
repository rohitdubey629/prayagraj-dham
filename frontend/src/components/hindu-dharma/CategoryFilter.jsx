"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function CategoryFilter({ categories, active, onChange }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.en}
          onClick={() => onChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
            active.en === category.en
              ? "bg-bhagwa-dark text-white border-bhagwa-dark"
              : "bg-white text-navy border-gold/30 hover:border-gold"
          }`}
        >
          {t(category)}
        </button>
      ))}
    </div>
  );
}
