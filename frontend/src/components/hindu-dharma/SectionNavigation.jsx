"use client";

import { useEffect, useRef, useState } from "react";
import { sectionNavItems } from "@/data/hindu-dharma/overview";
import { useTranslation } from "@/lib/useTranslation";

export default function SectionNavigation() {
  const [active, setActive] = useState(sectionNavItems[0].id);
  const scrollerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const sections = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-[64px] z-40 bg-cream/95 backdrop-blur-sm border-b border-gold/30">
      <div
        ref={scrollerRef}
        className="container mx-auto px-4 flex gap-1 overflow-x-auto no-scrollbar py-2"
      >
        {sectionNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition ${
              active === item.id ? "bg-bhagwa-dark text-white" : "text-navy/70 hover:bg-bhagwa/10"
            }`}
          >
            {t(item.label)}
          </button>
        ))}
      </div>
    </div>
  );
}
