"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLanguage } = useTranslation();

  return (
    <div className={`inline-flex rounded-full border border-gold/50 overflow-hidden text-sm ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        className={`px-2 py-1 transition ${lang === "hi" ? "bg-gold text-bhagwa-dark font-semibold" : "hover:text-gold"}`}
      >
        हिं
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition ${lang === "en" ? "bg-gold text-bhagwa-dark font-semibold" : "hover:text-gold"}`}
      >
        EN
      </button>
    </div>
  );
}
