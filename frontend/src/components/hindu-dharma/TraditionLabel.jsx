"use client";

import { useTranslation } from "@/lib/useTranslation";

// Subtle inline badge used to flag how a statement should be read —
// see section 37 of the content brief ("Fact / Tradition / Interpretation Labels").
const LABELS = {
  historical: { hi: "ऐतिहासिक संदर्भ", en: "Historical Context" },
  scriptural: { hi: "शास्त्रीय परंपरा", en: "Scriptural Tradition" },
  traditional: { hi: "पारंपरिक मान्यता", en: "Traditional Belief" },
  philosophical: { hi: "दार्शनिक व्याख्या", en: "Philosophical Interpretation" },
  regional: { hi: "क्षेत्रीय परंपरा", en: "Regional Tradition" },
  modern: { hi: "आधुनिक व्याख्या", en: "Modern Interpretation" },
};

const STYLES = {
  historical: "bg-slate-100 text-slate-700 border-slate-300",
  scriptural: "bg-gold/15 text-bhagwa-dark border-gold/40",
  traditional: "bg-gold/15 text-bhagwa-dark border-gold/40",
  philosophical: "bg-dharmic-blue/10 text-dharmic-blue border-dharmic-blue/30",
  regional: "bg-dharmic-green/10 text-dharmic-green border-dharmic-green/30",
  modern: "bg-slate-100 text-slate-700 border-slate-300",
};

export default function TraditionLabel({ label = "traditional" }) {
  const { t } = useTranslation();
  const style = STYLES[label] || STYLES.traditional;
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${style}`}>
      {t(LABELS[label] || LABELS.traditional)}
    </span>
  );
}
