"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getContent, type Lang, type SiteContent } from "@/data/content";

type LanguageContextValue = {
  lang: Lang;
  t: SiteContent;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "en" ? "ur" : "en")),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: getContent(lang),
      toggleLang,
      setLang,
      dir: lang === "ur" ? "rtl" : "ltr",
    }),
    [lang, toggleLang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
