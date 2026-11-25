"use client";

import { useTranslations } from "next-intl";

export default function ManageCookiesButton() {
  const t = useTranslations("CookieConsent");

  return (
    <button
      type="button"
      className="cursor-pointer transition-colors hover:text-white"
      onClick={() => window.dispatchEvent(new Event("envision:manage-cookies"))}
    >
      {t("manage")}
    </button>
  );
}