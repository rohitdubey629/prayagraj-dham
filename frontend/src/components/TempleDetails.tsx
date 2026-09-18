// components/TempleDetails.tsx
"use client";

import { useMemo, useState } from "react";
import { Place, getLocalizedPlace } from "@/lib/api";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function TempleDetails({ temple }: { temple: Place }) {
  const { t, lang } = useTranslation();
  const localized = getLocalizedPlace(temple, lang);
  const td = translations.templeDetails;

  const galleryImages = useMemo(() => {
    const all = [temple.imageUrl, ...(temple.images || [])].filter(Boolean) as string[];
    return Array.from(new Set(all));
  }, [temple.imageUrl, temple.images]);

  const [activeImage, setActiveImage] = useState(0);
  const heroImage = galleryImages[activeImage];

  return (
    <div>
      {/* Hero: background image related to this place, with the title overlaid */}
      <div className="relative h-96 md:h-[32rem] w-full overflow-hidden bg-bhagwa-DEFAULT">
        {heroImage ? (
          <>
            {/* Blurred cover fills the box so there's no empty letterbox bars */}
            <Image
              src={heroImage}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover scale-110 blur-2xl opacity-70"
            />
            {/* Full, un-cropped image on top */}
            <Image
              src={heroImage}
              alt={localized.name}
              fill
              className="object-contain"
              priority
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-8xl">🛕</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow">
            {temple.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-amber-100 drop-shadow">
            {temple.nameHindi}
          </h2>
        </div>
      </div>

      {/* Thumbnail strip, when there are multiple images */}
      {galleryImages.length > 1 && (
        <div className="max-w-4xl mx-auto px-4 mt-4 flex gap-3 overflow-x-auto pb-1">
          {galleryImages.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`relative flex-shrink-0 h-16 w-20 rounded-md overflow-hidden border-2 transition ${
                index === activeImage ? "border-bhagwa-dark" : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`${localized.name} ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose max-w-none bg-cream/92 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-10">
          <h3 className="text-xl font-bold text-bhagwa-dark mb-3 font-serif">
            {t(td.aboutHeading)}
          </h3>
          <p>{localized.description}</p>

          <h3 className="text-xl font-bold text-bhagwa-dark mt-6 mb-3 font-serif">
            {t(td.importanceHeading)}
          </h3>
          <p>{localized.importance}</p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
                {t(td.timingHeading)}
              </h4>
              <p>{localized.visitingHours}</p>

              <h4 className="text-lg font-bold text-bhagwa-dark mt-4 mb-2 font-serif">
                {t(td.locationHeading)}
              </h4>
              <p>{localized.location}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
                {t(td.featuresHeading)}
              </h4>
              <ul className="list-disc pl-5 space-y-1">
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
    </div>
  );
}
