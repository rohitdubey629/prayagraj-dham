// components/TemplesList.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { getPlaces, getLocalizedPlace, Place } from '@/lib/api';
import { useTranslation } from '@/lib/useTranslation';
import { translations } from '@/lib/translations';

const CATEGORIES = ["All", "Temple", "Ghat", "Ashram", "Historical", "Other"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function TemplesList() {
  const searchParams = useSearchParams();
  const initialCategory = CATEGORIES.includes(searchParams.get('category') as CategoryFilter)
    ? (searchParams.get('category') as CategoryFilter)
    : 'All';

  const [temples, setTemples] = useState<Place[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [search, setSearch] = useState('');
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
    let result = category === 'All' ? temples : temples.filter((temple) => temple.category === category);

    const query = search.trim().toLowerCase();
    if (query) {
      result = result.filter((temple) => {
        const localized = getLocalizedPlace(temple, lang);
        return (
          temple.name.toLowerCase().includes(query) ||
          temple.nameHindi.toLowerCase().includes(query) ||
          localized.location.toLowerCase().includes(query) ||
          localized.description.toLowerCase().includes(query)
        );
      });
    }

    return result;
  }, [temples, category, search, lang]);

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
      <div className="max-w-md mx-auto mb-6 relative">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t(tr.searchPlaceholder)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-bhagwa-dark/30 bg-white text-bhagwa-dark"
        />
      </div>

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
        <p className="text-center text-gray-600">
          {search.trim() ? t(tr.noSearchResults) : t(tr.noneInCategory)}
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemples.map((temple) => {
            const localized = getLocalizedPlace(temple, lang);
            return (
              <div
                key={temple._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-amber-100"
              >
                <div className="relative h-64 w-full bg-amber-50">
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
