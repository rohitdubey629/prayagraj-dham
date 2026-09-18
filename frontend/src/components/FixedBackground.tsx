"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { getHeroSlides, HeroSlide } from "@/lib/api";

const FALLBACK_SLIDE: HeroSlide = {
  _id: "fallback",
  mediaUrl: "/images/triveni_sangam.jpeg",
  mediaType: "image",
  createdAt: "",
};

const SLIDE_DURATION_MS = 3000;

/**
 * Fixed, viewport-pinned rotating background (images/videos from the admin
 * hero slideshow) used behind every page except forms/admin, where focus
 * matters more than atmosphere. Rendered once in Layout.tsx.
 */
export default function FixedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [slides, setSlides] = useState<HeroSlide[]>([FALLBACK_SLIDE]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getHeroSlides()
      .then((data) => {
        if (data.length > 0) setSlides(data);
      })
      .catch(() => {
        // keep fallback slide
      });
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [slides.length, prefersReducedMotion]);

  return (
    <>
      <div className="fixed inset-0 -z-20">
        {slides.map((slide, index) => (
          <div
            key={slide._id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: index === activeIndex ? 1 : 0 }}
          >
            {slide.mediaType === "video" ? (
              <video
                src={slide.mediaUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image src={slide.mediaUrl} alt="Prayagraj" fill priority className="object-cover" />
            )}
          </div>
        ))}
      </div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-bhagwa-dark/70 via-bhagwa-dark/50 to-bhagwa-dark/80" />
    </>
  );
}
