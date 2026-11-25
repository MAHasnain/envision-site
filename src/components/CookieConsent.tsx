"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const COOKIE_NAME = "envision_consent_v1";
const MAX_AGE = 180 * 24 * 60 * 60;

export default function CookieConsent() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const t = useTranslations("CookieConsent");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        function openDialog() {
            if (dialog && !dialog.open) dialog.showModal();
        }

        const hasDecision = document.cookie.split("; ").some(
            (entry) =>
                entry === `${COOKIE_NAME}=accepted` ||
                entry === `${COOKIE_NAME}=denied`,
        );

        if (!hasDecision) openDialog();

        window.addEventListener("envision:manage-cookies", openDialog);
        return () => {
            window.removeEventListener("envision:manage-cookies", openDialog);
        };
    }, []);

    function saveChoice(choice: "accepted" | "denied") {
        const secure = location.protocol === "https:" ? "; Secure" : "";
        document.cookie =
            `${COOKIE_NAME}=${choice}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;

        window.dispatchEvent(
            new CustomEvent("envision:consent-changed", { detail: choice }),
        );
        dialogRef.current?.close();
    }

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="consent-title"
            aria-describedby="consent-description"
            onCancel={(event) => event.preventDefault()}
            className="fixed inset-auto right-4 bottom-4 m-0 max-h-[85dvh]
                 w-[min(32rem,calc(100%-2rem))] overflow-y-auto rounded-2xl
                 bg-white p-6 text-slate-900 shadow-2xl backdrop:bg-black/40"
        >
            <h2 id="consent-title" className="text-center text-lg font-semibold">
                {t("title")}
            </h2>

            <p id="consent-description" className="my-5 text-sm leading-6">
                {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    className="rounded-lg bg-blue-700 px-3 py-3 font-semibold text-white"
                    onClick={() => saveChoice("accepted")}
                >
                    {t("accept")}
                </button>
                <button
                    type="button"
                    className="rounded-lg bg-blue-700 px-3 py-3 font-semibold text-white"
                    onClick={() => saveChoice("denied")}
                >
                    {t("deny")}
                </button>
            </div>
        </dialog>
    );
}