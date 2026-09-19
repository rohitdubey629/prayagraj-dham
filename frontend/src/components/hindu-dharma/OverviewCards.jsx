"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function OverviewCards({ items }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {items.map((cat) => {
        const Icon = Icons[cat.icon] || Icons.Sparkles;
        return (
          <motion.button
            key={cat.id}
            variants={item}
            onClick={() => scrollToId(cat.sectionId)}
            className="group text-left bg-white border border-gold/20 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="w-11 h-11 rounded-lg bg-gold/15 text-bhagwa-dark flex items-center justify-center mb-3">
              <Icon size={22} />
            </div>
            <h3 className="font-semibold text-navy mb-1">{t(cat.title)}</h3>
            <p className="text-sm text-gray-500 mb-3">{t(cat.description)}</p>
            <span className="text-sm font-medium text-bhagwa-dark group-hover:underline">
              {t({ hi: "जानें →", en: "Explore →" })}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
