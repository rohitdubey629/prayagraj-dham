"use client";

import { Heart } from "lucide-react";
import { useYatra } from "@/lib/yatra/useYatra";
import { useTranslation } from "@/lib/useTranslation";

export default function WishlistButton({ placeId, className = "" }) {
  const { wishlist, toggleWishlist, isAuthenticated } = useYatra();
  const { t } = useTranslation();
  const active = wishlist.includes(placeId);

  if (!isAuthenticated) return null;

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(placeId)}
      aria-pressed={active}
      aria-label={t({ hi: "मेरी यात्रा सूची में जोड़ें", en: "Add to My Yatra List" })}
      title={t({ hi: "मेरी यात्रा सूची में जोड़ें", en: "Add to My Yatra List" })}
      className={`inline-flex items-center gap-1.5 text-sm font-medium transition ${
        active ? "text-red-500" : "text-gray-400 hover:text-red-400"
      } ${className}`}
    >
      <Heart size={16} fill={active ? "currentColor" : "none"} />
      {active ? t({ hi: "सूची में", en: "In Wishlist" }) : t({ hi: "यात्रा सूची", en: "Wishlist" })}
    </button>
  );
}
