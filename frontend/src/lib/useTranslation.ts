"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { toggleLanguage as toggleLanguageAction, setLanguage as setLanguageAction, Lang } from "./languageSlice";
import { Bilingual } from "./translations";

export function useTranslation() {
  const lang = useSelector((state: RootState) => state.language.lang);
  const dispatch = useDispatch();

  function t(entry: Bilingual): string {
    return entry[lang] || entry.hi;
  }

  function toggleLanguage() {
    dispatch(toggleLanguageAction());
  }

  function setLanguage(next: Lang) {
    dispatch(setLanguageAction(next));
  }

  return { lang, t, toggleLanguage, setLanguage };
}
