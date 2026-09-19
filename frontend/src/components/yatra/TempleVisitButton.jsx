"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Plus, ChevronDown, LogIn } from "lucide-react";
import { useYatra } from "@/lib/yatra/useYatra";
import { useTranslation } from "@/lib/useTranslation";
import VisitModal from "./VisitModal";
import VisitHistory from "./VisitHistory";
import WishlistButton from "./WishlistButton";

/**
 * Drop-in "My Yatra" widget for any place card: visited status, visit count,
 * an Add Visit button, an expandable visit history, and a wishlist toggle.
 * `placeId` must match an id in src/data/hindu-dharma/yatraPlaces.js.
 */
export default function TempleVisitButton({ placeId, placeName }) {
  const { visits, addVisit, isAuthenticated } = useYatra();
  const { t } = useTranslation();
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [saveError, setSaveError] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="mt-3 pt-3 border-t border-gold/15">
        <Link
          href={`/login?next=${encodeURIComponent(pathname)}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-bhagwa-dark hover:underline"
        >
          <LogIn size={14} /> {t({ hi: "विज़िट दर्ज करने के लिए लॉगिन करें", en: "Log in to track your visits" })}
        </Link>
      </div>
    );
  }

  const placeVisits = visits.filter((v) => v.placeId === placeId);
  const visitCount = placeVisits.length;
  const isVisited = visitCount > 0;

  const handleSave = async (data) => {
    setSaveError("");
    try {
      await addVisit(placeId, data);
      setModalOpen(false);
      setHistoryOpen(true);
    } catch {
      setSaveError(t({ hi: "विज़िट सेव नहीं हो पाई। कृपया पुनः प्रयास करें।", en: "Could not save this visit. Please try again." }));
    }
  };

  return (
    <div className="mt-3 pt-3 border-t border-gold/15">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          {isVisited ? (
            <button
              type="button"
              onClick={() => setHistoryOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dharmic-green"
            >
              <CheckCircle2 size={16} />
              {t({ hi: "देखा गया", en: "Visited" })} · {visitCount}{" "}
              {visitCount === 1 ? t({ hi: "विज़िट", en: "visit" }) : t({ hi: "विज़िट्स", en: "visits" })}
              <ChevronDown size={14} className={`transition-transform ${historyOpen ? "rotate-180" : ""}`} />
            </button>
          ) : (
            <span className="text-sm text-gray-400">{t({ hi: "अभी तक नहीं गए", en: "Not Visited" })}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <WishlistButton placeId={placeId} />
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-bhagwa-dark hover:underline"
          >
            <Plus size={14} /> {t({ hi: "विज़िट जोड़ें", en: "Add Visit" })}
          </button>
        </div>
      </div>

      {historyOpen && isVisited && <VisitHistory visits={placeVisits} />}

      {modalOpen && (
        <VisitModal
          placeName={placeName}
          error={saveError}
          onClose={() => {
            setModalOpen(false);
            setSaveError("");
          }}
          onSaved={handleSave}
        />
      )}
    </div>
  );
}
