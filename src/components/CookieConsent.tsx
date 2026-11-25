"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const consentStyles = `
dialog.envt-consent-card {
  position: fixed;
  inset: auto max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) auto;
  margin: 0;
  width: min(526px, calc(100vw - 24px));
  max-width: none;
  max-height: calc(100dvh - 24px);
  overflow-y: auto;
  overscroll-behavior: contain;
  box-sizing: border-box;
  padding: 18px 20px 20px;
  border: 0;
  border-radius: 13px;
  background: #fff;
  color: #282828;
  color-scheme: light;
  box-shadow: 0 8px 26px #0004, 0 2px 6px #0002;
  font: inherit;
}
.envt-consent-card::backdrop { background: rgb(0 0 0 / 6%); }
.envt-consent-heading { position: relative; display: grid; place-items: center; min-height: 25px; padding-inline: 32px; }
.envt-consent-heading h2 { margin: 0; font-family: inherit; font-size: 16px; line-height: 1.4; font-weight: 600; text-align: center; }
.envt-consent-close { position: absolute; inset: -5px -6px auto auto; width: 34px; height: 34px; border: 0; background: transparent; color: #222; font: 700 26px/1 sans-serif; cursor: pointer; }
.envt-consent-intro, .envt-consent-section p { font-size: 13px; line-height: 1.6; }
.envt-consent-intro { margin: 18px 0 0; }
.envt-consent-options { display: grid; gap: 8px; margin-top: 8px; }
.envt-consent-section { position: relative; background: #f6f6f6; }
.envt-consent-section summary { display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 8px 12px; list-style: none; font-size: 14px; font-weight: 600; cursor: pointer; }
.envt-consent-section summary::-webkit-details-marker { display: none; }
.envt-consent-section summary::after { content: ""; width: 10px; height: 10px; border: solid currentColor; border-width: 0 2px 2px 0; transform: rotate(45deg); margin-inline-start: auto; }
.envt-consent-section[open] > summary::after, .envt-consent-section details[open] > summary::after { transform: rotate(225deg); }
.envt-consent-active { margin-inline-start: auto; font-size: 12px; color: #167021; }
.envt-consent-section summary:has(.envt-consent-active)::after { margin-inline-start: 0; }
.envt-consent-section p { margin: 0; padding: 5px 12px 14px; }
.envt-consent-marketingSummary { padding-right: 12px; }
.envt-consent-switch { position: absolute; top: 0; right: 34px; display: grid; place-items: center; width: 44px; height: 44px; }
.envt-consent-switch input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
.envt-consent-switch span { pointer-events: none; width: 29px; height: 16px; padding: 2px; border-radius: 99px; background: #737782; }
.envt-consent-switch span::after { content: ""; display: block; width: 12px; height: 12px; border-radius: 50%; background: #fff; }
.envt-consent-switch input:checked + span { background: #315df7; }
.envt-consent-switch input:checked + span::after { transform: translateX(13px); }
.envt-consent-actions { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 23px; }
.envt-consent-actions button { min-height: 45px; padding: 8px 5px; border-radius: 6px; border: 1px solid #e2e2e2; color: #222; background: #f8f8f8; font-family: inherit; font-size: 14px; font-weight: 600; line-height: 1.3; cursor: pointer; }
.envt-consent-actions .envt-consent-primary { color: white; background: #2853eb; border-color: #2853eb; }
.envt-consent-links { display: flex; flex-wrap: wrap; gap: 4px 12px; justify-content: center; margin-top: 14px; }
.envt-consent-links a { color: #1859ae; text-decoration: underline; font-size: 12px; }
.envt-consent-card :is(button, summary, a):focus-visible, .envt-consent-switch input:focus-visible + span { outline: 2px solid #17469d; outline-offset: 2px; }
@media (max-width: 390px) {
  .envt-consent-card { padding: 15px; }
  .envt-consent-actions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .envt-consent-actions button:last-child { grid-column: 1 / -1; }
}
`;

const cookieName = "envision_consent_v1";
const lifetime = 180 * 24 * 60 * 60;
const policyLinks = [
  { href: "/cookie-policy-eu", key: "cookies" },
  { href: "/privacy-statement-eu", key: "privacy" },
  { href: "/imprint", key: "imprint" },
] as const;

function savedMarketing(): boolean | null {
  const entries = document.cookie.split(/;\s*/);
  if (entries.includes(cookieName + "=marketing-accepted")) return true;
  if (entries.includes(cookieName + "=denied")) return false;
  // The previous "accepted" notice did not identify marketing.
  return null;
}

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const footer = useTranslations("Footer");
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const card = dialog.current;
    if (!card) return;
    function show(settings: boolean) {
      setMarketing(savedMarketing() === true);
      setExpanded(settings);
      if (card && !card.open) card.showModal();
    }
    // Only the policy tab opened from this dialog may bypass the prompt.
    const readingPolicy = policyLinks.some(link => link.href === pathname)
      && new URLSearchParams(location.search).get("consent-info") === "1";
    if (savedMarketing() === null && !readingPolicy) show(false);
    const manage = () => show(true);
    window.addEventListener("envision:manage-cookies", manage);
    return () => {
      window.removeEventListener("envision:manage-cookies", manage);
      if (card.open) card.close();
    };
  }, [pathname]);

  function save(allow: boolean) {
    const value = allow ? "marketing-accepted" : "denied";
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = cookieName + "=" + value + "; Path=/; Max-Age=" + lifetime + "; SameSite=Lax" + secure;
    window.dispatchEvent(new CustomEvent("envision:consent-changed", {
      detail: allow ? "accepted" : "denied",
    }));
    dialog.current?.close();
  }

  return (
    <dialog ref={dialog} className="envt-consent-card" aria-labelledby="consent-title"
      aria-describedby="consent-intro" onCancel={event => event.preventDefault()}>
      <style>{consentStyles}</style>
      <header className="envt-consent-heading">
        <h2 id="consent-title">{t("title")}</h2>
        <button type="button" className="envt-consent-close" aria-label={t("close")} title={t("close")}
          onClick={() => save(false)}>×</button>
      </header>
      <p id="consent-intro" className="envt-consent-intro">{t("description")}</p>
      {expanded && (
        <div id="consent-options" className="envt-consent-options">
          <details open className="envt-consent-section">
            <summary>{t("functional")}<span className="envt-consent-active">{t("always")}</span></summary>
            <p>{t("functionalText")}</p>
          </details>
          <div className="envt-consent-section">
            <details open>
              <summary className="envt-consent-marketingSummary">{t("marketing")}</summary>
              <p>{t("marketingText")}</p>
            </details>
            <label className="envt-consent-switch">
              <input type="checkbox" role="switch" aria-label={t("marketing")}
                checked={marketing} onChange={event => setMarketing(event.target.checked)} />
              <span aria-hidden="true" />
            </label>
          </div>
        </div>
      )}
      <div className="envt-consent-actions">
        <button type="button" className="envt-consent-primary" onClick={() => save(true)}>{t("accept")}</button>
        <button type="button" onClick={() => save(false)}>{t("deny")}</button>
        {expanded
          ? <button type="button" onClick={() => save(marketing)}>{t("save")}</button>
          : <button type="button" aria-expanded={false} onClick={() => setExpanded(true)}>{t("view")}</button>}
      </div>
      <div className="envt-consent-links">
        {policyLinks.map(link => (
          <Link key={link.key} href={{pathname: link.href, query: {"consent-info": "1"}}}
            target="_blank" rel="noopener noreferrer">{footer(link.key)}</Link>
        ))}
      </div>
    </dialog>
  );
}
