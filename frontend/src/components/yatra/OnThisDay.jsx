"use client";

import { useTranslation } from "@/lib/useTranslation";

const ordinal = (n, lang) => {
  if (lang === "hi") return `${n}${n === 1 ? "ली" : "वीं"} विज़िट`;
  const suffix = n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  return `${n}${suffix} visit`;
};

// Renders nothing when there is no matching memory — this is intentionally
// silent rather than showing an empty-state card.
export default function OnThisDay({ entries }) {
  const { t, lang } = useTranslation();

  if (!entries || entries.length === 0) return null;

  return (
    <div className="bg-gold/10 border border-gold/40 rounded-xl p-5 mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-bhagwa-dark mb-3">
        {t({ hi: "आज ही के दिन", en: "On This Day" })}
      </p>
      <div className="space-y-2">
        {entries.map((entry) => {
          const year = new Date(entry.visitedAt).getFullYear();
          const placeName = t(entry.place.name);
          const visitLabel = ordinal(entry.visitNumber, lang);
          return (
            <p key={entry.id} className="text-sm text-navy">
              🛕{" "}
              {lang === "hi"
                ? `${year} में आज ही के दिन आपने ${placeName} के दर्शन किए थे — यह आपकी ${visitLabel} थी।`
                : `On this day in ${year}, you visited ${placeName}. This was your ${visitLabel}.`}
            </p>
          );
        })}
      </div>
    </div>
  );
}
