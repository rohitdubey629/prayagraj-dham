"use client";

import { useTranslation } from "@/lib/useTranslation";

const TAG_LABELS = {
  "jyotirlinga": { hi: "🔱 ज्योतिर्लिंग यात्रा", en: "🔱 Jyotirlinga Yatra" },
  "char-dham": { hi: "🕉️ चार धाम", en: "🕉️ Char Dham" },
  "chota-char-dham": { hi: "🏔️ छोटा चार धाम", en: "🏔️ Chota Char Dham" },
  "shakti-peetha": { hi: "🌺 शक्ति पीठ", en: "🌺 Shakti Peetha" },
};

export default function PilgrimageProgress({ progress }) {
  const { t } = useTranslation();

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {progress.map((p) => {
        const pct = p.total ? Math.min(100, Math.round((p.visited / p.total) * 100)) : 0;
        return (
          <div key={p.tag} className="bg-white border border-gold/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-navy">{t(TAG_LABELS[p.tag] || { hi: p.tag, en: p.tag })}</p>
              <p className="text-sm font-semibold text-bhagwa-dark whitespace-nowrap">
                {p.visited} / {t(p.totalLabel)}
              </p>
            </div>
            <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full bg-bhagwa-dark rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
