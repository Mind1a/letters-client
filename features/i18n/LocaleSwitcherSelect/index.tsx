"use client";

import {
  Locale,
  routing,
  usePathname,
  useRouter,
} from "@/features/i18n/routing";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  defaultValue: string;
  label: string;
};

const localeLabels: Record<string, string> = {
  en: "ENG",
  ka: "GEO",
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [active, setActive] = useState(defaultValue);
  const [isSwitching, setIsSwitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setActive(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const nextLocale = routing.locales.find((l) => l !== active) ?? active;

  function changeLocale(locale: string) {
    if (isSwitching) return;

    setIsSwitching(true);
    setActive(locale);

    timeoutRef.current = setTimeout(() => {
      router.replace(
        { pathname, query: params as Record<string, string> },
        { locale: locale as Locale },
      );
    }, 150);
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => changeLocale(nextLocale)}
      disabled={isSwitching}
      className="cursor-pointer text-[16px] uppercase tracking-wide text-foreground"
    >
      {localeLabels[nextLocale] ?? nextLocale.toUpperCase()}
    </button>
  );
}
