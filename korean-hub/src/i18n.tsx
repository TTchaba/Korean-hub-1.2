"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "@/locales/en";
import { ka } from "@/locales/ka";
import { siteContent } from "@/siteContent";

export type Locale = "en" | "ka";

type Dictionary = {
  content: typeof siteContent;
  ui: Record<string, unknown>;
};

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: typeof siteContent;
  l: (key: string) => string;
};

const dictionaries: Record<Locale, Dictionary> = { en, ka };
const I18nContext = createContext<I18nValue | null>(null);

function getTranslation(dictionary: Dictionary, key: string): string {
  const value = key.split(".").reduce<unknown>((current, segment) => {
    if (typeof current !== "object" || current === null || !(segment in current)) {
      return undefined;
    }
    return (current as Record<string, unknown>)[segment];
  }, dictionary.ui);

  if (typeof value !== "string") {
    throw new Error(`Missing translation "${key}".`);
  }
  return value;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ka");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nValue>(() => {
    const dictionary = dictionaries[locale];
    return {
      locale,
      setLocale,
      content: dictionary.content,
      l: (key) => getTranslation(dictionary, key),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside LanguageProvider.");
  return value;
}

export function SkipToContent() {
  const { l } = useI18n();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-porcelain"
    >
      {l("shared.skipToContent")}
    </a>
  );
}
