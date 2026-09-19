"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { companionOptions, travelMethodOptions } from "@/lib/yatra/options";
import { useTranslation } from "@/lib/useTranslation";

const todayIso = () => new Date().toISOString().split("T")[0];

export default function VisitModal({ placeName, error, onClose, onSaved }) {
  const { t } = useTranslation();
  const [visitedAt, setVisitedAt] = useState(todayIso());
  const [companions, setCompanions] = useState("");
  const [travelMethod, setTravelMethod] = useState("");
  const [memory, setMemory] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSaved({ visitedAt, companions: companions || null, travelMethod: travelMethod || null, memory, notes });
    setSaving(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 px-0 sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
    >
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white">
          <h2 id="visit-modal-title" className="font-serif-display font-bold text-lg text-navy">
            {t({ hi: "विज़िट दर्ज करें", en: "Add Visit" })} — {placeName}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t({ hi: "बंद करें", en: "Close" })}
            className="text-gray-400 hover:text-navy"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label htmlFor="visit-date" className="block text-sm font-medium text-navy mb-1">
              {t({ hi: "विज़िट की तारीख", en: "Visit Date" })}
            </label>
            <input
              id="visit-date"
              type="date"
              value={visitedAt}
              max={todayIso()}
              onChange={(e) => setVisitedAt(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-navy mb-2">
              {t({ hi: "आप किसके साथ गए थे?", en: "Who Were You With?" })}
            </span>
            <div className="flex flex-wrap gap-2">
              {companionOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCompanions(companions === opt.id ? "" : opt.id)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    companions === opt.id
                      ? "bg-bhagwa-dark text-white border-bhagwa-dark"
                      : "bg-white text-navy border-gray-200 hover:border-gold"
                  }`}
                >
                  {opt.icon} {t(opt.label)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="travel-method" className="block text-sm font-medium text-navy mb-1">
              {t({ hi: "यात्रा का साधन (वैकल्पिक)", en: "Travel Method (optional)" })}
            </label>
            <select
              id="travel-method"
              value={travelMethod}
              onChange={(e) => setTravelMethod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-white"
            >
              <option value="">{t({ hi: "चुनें", en: "Select" })}</option>
              {travelMethodOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {t(opt.label)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="memory" className="block text-sm font-medium text-navy mb-1">
              {t({ hi: "इस विज़िट के बारे में आपको क्या याद है?", en: "What do you remember about this visit?" })}
            </label>
            <textarea
              id="memory"
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-navy mb-1">
              {t({ hi: "अतिरिक्त नोट्स (वैकल्पिक)", en: "Additional Notes (optional)" })}
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>

          <p className="text-xs text-gray-400">
            {t({
              hi: "📸 फ़ोटो अपलोड जल्द आ रहा है — इसके लिए बैकएंड स्टोरेज जोड़ी जानी बाकी है।",
              en: "📸 Photo upload is coming soon — it needs backend storage to be added first.",
            })}
          </p>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-bhagwa-dark text-white px-4 py-2.5 rounded-lg font-semibold hover:brightness-110 transition disabled:opacity-60"
            >
              {saving ? t({ hi: "सेव हो रहा है…", en: "Saving…" }) : t({ hi: "विज़िट सेव करें", en: "Save Visit" })}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg font-semibold border border-gray-200 text-navy hover:bg-gray-50 transition"
            >
              {t({ hi: "रद्द करें", en: "Cancel" })}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
