"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Place, getLocalizedPlace } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const MotionLink = motion.create(Link);

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PlaceCard({ place }: { place: Place }) {
  const { t, lang } = useTranslation();
  const localized = getLocalizedPlace(place, lang);
  const cs = translations.categorySliders;

  const images = useMemo(() => {
    const all = [place.imageUrl, ...(place.images || [])].filter(Boolean) as string[];
    return Array.from(new Set(all));
  }, [place.imageUrl, place.images]);

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <MotionLink
      href={`/temples/${place._id}`}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-gold/20 block"
    >
      <div className="h-80 w-full relative bg-amber-50">
        {images.length > 0 ? (
          <Image src={images[activeImage]} alt={localized.name} fill className="object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">🛕</span>
          </div>
        )}

        {place.featured && (
          <span className="absolute top-2 left-2 bg-gold text-bhagwa-dark text-xs font-semibold px-2 py-0.5 rounded-full">
            {t(cs.featuredBadge)}
          </span>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImage(index);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === activeImage ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-serif-display font-bold text-lg text-bhagwa-dark mb-1 line-clamp-1">{localized.name}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{localized.description}</p>
      </div>
    </MotionLink>
  );
}
