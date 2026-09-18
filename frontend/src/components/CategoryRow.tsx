"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Place } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";
import { Bilingual } from "@/lib/translations";
import PlaceCard from "./PlaceCard";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CategoryRow({
  categoryLabel,
  categoryValue,
  places,
}: {
  categoryLabel: Bilingual;
  categoryValue: string;
  places: Place[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const cs = translations.categorySliders;

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.div variants={item} className="flex items-center justify-between mb-5">
        <h3 className="font-serif-display text-2xl md:text-3xl font-bold text-bhagwa-dark">
          {t(categoryLabel)}
        </h3>
        <Link
          href={`/temples?category=${categoryValue}`}
          className="text-bhagwa-dark font-medium hover:underline whitespace-nowrap"
        >
          {t(cs.viewAll)}
        </Link>
      </motion.div>

      <div className="relative group">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md text-bhagwa-dark hover:bg-gold hover:text-white transition"
          aria-label="scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {places.map((place) => (
            <PlaceCard key={place._id} place={place} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md text-bhagwa-dark hover:bg-gold hover:text-white transition"
          aria-label="scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}
