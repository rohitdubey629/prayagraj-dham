// components/TemplesList.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPlaces, getLocalizedPlace, Place } from '@/lib/api';
import { useTranslation } from '@/lib/useTranslation';
import { translations } from '@/lib/translations';

const CATEGORIES = ["All", "Temple", "Ghat", "Ashram", "Historical", "Other"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function TemplesList() {
  const [temples, setTemples] = useState<Place[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [category, setCategory] = useState<CategoryFilter>('All');
  const { t, lang } = useTranslation();
  const tr = translations.temples;

  useEffect(() => {
    getPlaces()
      .then((data) => {
        setTemples(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const filterLabels: Record<CategoryFilter, { hi: string; en: string }> = {
    All: tr.filterAll,
    Temple: tr.filterTemple,
    Ghat: tr.filterGhat,
    Ashram: tr.filterAshram,
    Historical: tr.filterHistorical,
    Other: tr.filterOther,
  };

  const filteredTemples = useMemo(() => {
    if (category === 'All') return temples;
    return temples.filter((temple) => temple.category === category);
  }, [temples, category]);

  if (status === 'loading') {
    return <p className="text-center text-gray-600">{t(tr.loading)}</p>;
  }

  if (status === 'error') {
    return (
      <p className="text-center text-red-600">
        {t(tr.loadError)}
      </p>
    );
  }

  if (temples.length === 0) {
    return <p className="text-center text-gray-600">{t(tr.empty)}</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              category === c
                ? 'bg-bhagwa-dark text-white border-bhagwa-dark'
                : 'bg-white text-bhagwa-dark border-amber-200 hover:bg-amber-50'
            }`}
          >
            {t(filterLabels[c])}
          </button>
        ))}
      </div>

      {filteredTemples.length === 0 ? (
        <p className="text-center text-gray-600">{t(tr.noneInCategory)}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemples.map((temple) => {
            const localized = getLocalizedPlace(temple, lang);
            return (
              <div
                key={temple._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-amber-100"
              >
                <div className="relative h-48 w-full bg-amber-50">
                  {temple.imageUrl ? (
                    <Image
                      src={temple.imageUrl}
                      alt={localized.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-6xl">🛕</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-bhagwa-dark mb-1">{temple.name}</h3>
                  <h4 className="text-md text-bhagwa-dark font-serif mb-2">{temple.nameHindi}</h4>
                  <p className="text-gray-700 text-sm line-clamp-3 mb-4">{localized.description}</p>

                  <Link
                    href={`/temples/${temple._id}`}
                    className="inline-block text-bhagwa-dark font-semibold hover:underline"
                  >
                    {t(tr.viewDetails)}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
