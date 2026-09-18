"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function ComparisonTable({ shruti, smriti, note }) {
  const { t } = useTranslation();
  const rows = Math.max(shruti.examples.length, smriti.examples.length);

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-gold/20">
        <table className="w-full text-sm bg-white">
          <thead>
            <tr className="bg-bhagwa-dark text-white">
              <th className="text-left px-5 py-3 font-serif-display text-base">{t(shruti.label)}</th>
              <th className="text-left px-5 py-3 font-serif-display text-base">{t(smriti.label)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gold/10">
              <td className="px-5 py-3 text-gray-600 align-top">{t(shruti.meaning)}</td>
              <td className="px-5 py-3 text-gray-600 align-top">{t(smriti.meaning)}</td>
            </tr>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-b border-gold/10 last:border-0">
                <td className="px-5 py-2.5 text-navy/80">{shruti.examples[i] ? t(shruti.examples[i]) : ""}</td>
                <td className="px-5 py-2.5 text-navy/80">{smriti.examples[i] ? t(smriti.examples[i]) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-sm text-gray-500 mt-4">{t(note)}</p>}
    </div>
  );
}
