"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPlaces, getLocalizedPlace, Place } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function FeaturedPlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const { t, lang } = useTranslation();
  const fp = translations.featuredPlaces;

  useEffect(() => {
    getPlaces(undefined, true)
      .then((data) => setPlaces(data.slice(0, 6)))
      .catch(() => setPlaces([]));
  }, []);

  if (places.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
          {t(fp.heading)}
        </h2>
        <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {places.map((place) => {
            const localized = getLocalizedPlace(place, lang);
            return (
              <div
                key={place._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="h-48 bg-amber-100 relative">
                  {place.imageUrl ? (
                    <Image
                      src={place.imageUrl}
                      alt={localized.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">🛕</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bhagwa-dark mb-2 font-serif">
                    {localized.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{localized.description}</p>
                  <Link
                    href={`/temples/${place._id}`}
                    className="text-bhagwa-dark font-medium hover:underline"
                  >
                    {t(translations.temples.learnMoreDetailed)}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/temples"
            className="inline-block bg-bhagwa-dark text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            {t(fp.viewAll)}
          </Link>
        </div>
      </div>
    </section>
  );
}
