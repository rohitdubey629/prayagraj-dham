"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getShlokas, Shloka } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function FeaturedShlokas() {
  const [shlokas, setShlokas] = useState<Shloka[]>([]);
  const { t } = useTranslation();
  const fs = translations.featuredShlokas;

  useEffect(() => {
    getShlokas(true)
      .then((data) => setShlokas(data.slice(0, 3)))
      .catch(() => setShlokas([]));
  }, []);

  if (shlokas.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-bhagwa-light text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">{t(fs.heading)}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {shlokas.map((shloka) => (
            <div
              key={shloka._id}
              className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 text-gray-600"
            >
              <blockquote className="text-lg italic mb-4" style={{ whiteSpace: "pre-line" }}>
                &quot;{shloka.text}&quot;
              </blockquote>
              {shloka.meaning && <p className="text-sm mb-2">{shloka.meaning}</p>}
              {shloka.source && <p className="text-right text-amber-200">- {shloka.source}</p>}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shlokas"
            className="inline-block bg-white text-bhagwa-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            {t(fs.viewAll)}
          </Link>
        </div>
      </div>
    </section>
  );
}
