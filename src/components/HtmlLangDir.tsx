"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageProvider";

export function HtmlLangDir() {
  const { lang, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return null;
}
