"use client";

import { useEffect, useState } from "react";
import { getTodayShlokas, Shloka } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function ShlokaPopup() {
  const [shlokas, setShlokas] = useState<Shloka[]>([]);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const s = translations.shlokas;

  useEffect(() => {
    getTodayShlokas()
      .then((data) => {
        if (data.length > 0) {
          setShlokas(data);
          setVisible(true);
        }
      })
      .catch(() => {
        // silently ignore - popup is a nice-to-have, not critical
      });
  }, []);

  if (!visible || shlokas.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl leading-none"
          aria-label={t(s.popupClose)}
        >
          ×
        </button>
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {shlokas.map((shloka) => (
            <div key={shloka._id}>
              <blockquote
                className="text-lg italic text-bhagwa-dark mb-2"
                style={{ whiteSpace: "pre-line" }}
              >
                &quot;{shloka.text}&quot;
              </blockquote>
              {shloka.meaning && <p className="text-sm text-gray-700 mb-1">{shloka.meaning}</p>}
              {shloka.source && <p className="text-right text-amber-700 text-sm">- {shloka.source}</p>}
            </div>
          ))}
        </div>
        <button
          onClick={() => setVisible(false)}
          className="mt-4 w-full bg-bhagwa-dark text-white py-2 rounded font-medium hover:opacity-90 transition"
        >
          {t(s.popupClose)}
        </button>
      </div>
    </div>
  );
}
