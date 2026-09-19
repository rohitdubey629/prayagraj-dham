"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function LearningPath({ path }) {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {path.map((level) => (
        <div key={level.level.en} className="bg-white border border-gold/20 rounded-xl p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-bhagwa-dark mb-1">{t(level.level)}</p>
          <h3 className="font-serif-display text-xl font-bold text-navy mb-4">{t(level.title)}</h3>
          <ol className="space-y-2">
            {level.steps.map((step, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-gold/15 text-bhagwa-dark text-xs font-semibold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                {t(step)}
                {index < level.steps.length - 1 && (
                  <ArrowRight size={12} className="text-gray-300 ml-auto shrink-0" />
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
