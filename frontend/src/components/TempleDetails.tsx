// components/TempleDetails.tsx
"use client";

import { Place, getLocalizedPlace } from "@/lib/api";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function TempleDetails({ temple }: { temple: Place }) {
  const { t, lang } = useTranslation();
  const localized = getLocalizedPlace(temple, lang);
  const td = translations.templeDetails;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bhagwa-dark mb-1">
          {temple.name}
        </h1>
        <h2 className="text-2xl font-serif text-bhagwa-dark">
          {temple.nameHindi}
        </h2>
        <div className="w-16 h-1 bg-bhagwa-dark my-3"></div>
      </div>

      <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6 bg-amber-50">
        {temple.imageUrl ? (
          <Image
            src={temple.imageUrl}
            alt={localized.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">🛕</span>
          </div>
        )}
      </div>

      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-bhagwa-dark mb-3 font-serif">
          {t(td.aboutHeading)}
        </h3>
        <p className="text-white">{localized.description}</p>

        <h3 className="text-xl font-bold text-bhagwa-dark mt-6 mb-3 font-serif">
          {t(td.importanceHeading)}
        </h3>
        <p className="text-white">{localized.importance}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
              {t(td.timingHeading)}
            </h4>
            <p className="text-white">{localized.visitingHours}</p>

            <h4 className="text-lg font-bold text-bhagwa-dark mt-4 mb-2 font-serif">
              {t(td.locationHeading)}
            </h4>
            <p className="text-white">{localized.location}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
              {t(td.featuresHeading)}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-white">
              {localized.specialFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="text-lg font-bold text-bhagwa-dark mb-3 font-serif">
            {t(td.infoHeading)}
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {td.infoTips.map((tip, index) => (
              <li key={index}>{t(tip)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
