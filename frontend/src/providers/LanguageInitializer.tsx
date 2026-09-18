"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "@/lib/useTranslation";
import { RootState } from "@/lib/store";
import { Lang } from "@/lib/languageSlice";

const STORAGE_KEY = "lang";

export default function LanguageInitializer() {
  const { setLanguage } = useTranslation();
  const lang = useSelector((state: RootState) => state.language.lang);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "hi" || stored === "en") {
        setLanguage(stored);
      }
    } catch {
      // localStorage unavailable, ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable, ignore
    }
  }, [lang]);

  return null;
}
