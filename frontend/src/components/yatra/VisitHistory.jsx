"use client";

import { Trash2 } from "lucide-react";
import { useYatra } from "@/lib/yatra/useYatra";
import { findOption, companionOptions, travelMethodOptions } from "@/lib/yatra/options";
import { useTranslation } from "@/lib/useTranslation";

function formatDate(iso, lang) {
  try {
    return new Date(iso).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

const ordinal = (n, lang) => {
  if (lang === "hi") return `${n}${n === 1 ? "ली" : "वीं"} विज़िट`;
  const suffix = n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  return `${n}${suffix} Visit`;
};

export default function VisitHistory({ visits }) {
  const { t, lang } = useTranslation();
  const { deleteVisit } = useYatra();

  if (visits.length === 0) return null;

  return (
    <ul className="space-y-3 mt-3">
      {visits.map((visit) => {
        const companion = visit.companions ? findOption(companionOptions, visit.companions) : null;
        const travel = visit.travelMethod ? findOption(travelMethodOptions, visit.travelMethod) : null;
        return (
          <li key={visit.id} className="border border-gold/20 rounded-lg p-3 bg-white">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-navy">
                  {formatDate(visit.visitedAt, lang)} — {ordinal(visit.visitNumber, lang)}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {companion && <>{companion.icon} {t(companion.label)}</>}
                  {companion && travel && " • "}
                  {travel && t(travel.label)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => deleteVisit(visit.id)}
                aria-label={t({ hi: "यह विज़िट हटाएँ", en: "Delete this visit" })}
                className="text-gray-300 hover:text-red-500 transition shrink-0"
              >
                <Trash2 size={16} />
              </button>
            </div>
            {visit.memory && <p className="text-sm text-gray-700 mt-2 italic">“{visit.memory}”</p>}
            {visit.notes && <p className="text-xs text-gray-500 mt-1">{visit.notes}</p>}
          </li>
        );
      })}
    </ul>
  );
}
