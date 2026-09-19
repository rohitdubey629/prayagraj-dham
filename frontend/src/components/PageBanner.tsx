"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageBanner({
  images,
  title,
  subtitle,
}: {
  images: string[];
  title: string;
  subtitle?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        >
          <Image src={src} alt={title} fill priority={index === 0} className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-bhagwa-dark/85 via-bhagwa-dark/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center"
      >
        <h1 className="font-serif-display text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-cream/90 text-lg drop-shadow">{subtitle}</p>}
        <div className="w-20 h-1 bg-gold mx-auto mt-4" />
      </motion.div>

      {images.length > 1 && (
        <div className="absolute bottom-3 right-4 z-10 flex gap-1.5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === activeIndex ? "bg-gold" : "bg-white/50"
              }`}
              aria-label={`image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
