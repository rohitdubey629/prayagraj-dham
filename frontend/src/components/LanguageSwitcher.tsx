"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLanguage } = useTranslation();

  return (
    <div className={`inline-flex rounded-full border border-white/50 overflow-hidden text-sm ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        className={`px-2 py-1 transition ${lang === "hi" ? "bg-white text-bhagwa-dark font-semibold" : "hover:text-amber-200"}`}
      >
        हिं
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition ${lang === "en" ? "bg-white text-bhagwa-dark font-semibold" : "hover:text-amber-200"}`}
      >
        EN
      </button>
    </div>
  );
}
