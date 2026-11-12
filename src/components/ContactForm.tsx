"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";
type ErrorKey = "validation" | "rate" | "server";
type Field = "firstName" | "lastName" | "email" | "message" | "consent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-picton focus:ring-2 focus:ring-picton/30 ${
    invalid ? "border-red-400/70" : "border-white/15"
  }`;

export default function ContactForm() {
  const t = useTranslations("Contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<ErrorKey | null>(null);
  const [invalid, setInvalid] = useState<Partial<Record<Field, boolean>>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""), 
    };

    const problems: Partial<Record<Field, boolean>> = {};
    if (!payload.firstName) problems.firstName = true;
    if (!payload.lastName) problems.lastName = true;
    if (!EMAIL_RE.test(payload.email)) problems.email = true;
    if (!payload.message) problems.message = true;
    if (!payload.consent) problems.consent = true;

    if (Object.keys(problems).length) {
      setInvalid(problems);
      setErrorKey("validation");
      setStatus("error");
      return;
    }

    setInvalid({});
    setErrorKey(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      const json = await res.json().catch(() => null);
      setErrorKey(json?.error === "rate" ? "rate" : json?.error === "validation" ? "validation" : "server");
    } catch {
      setErrorKey("server");
    }
    setStatus("error");
  }

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-90 flex-col items-center justify-center text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-picton/40 bg-picton/10 text-picton-200">
          <CheckCircle2 size={28} aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-semibold">{t("successTitle")}</h3>
        <p className="mt-2 max-w-sm text-white/65">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/80">{t("firstName")} <span aria-hidden className="text-picton-200">*</span></span>
          <input
            name="firstName"
            autoComplete="given-name"
            required
            aria-invalid={invalid.firstName || undefined}
            className={inputClass(!!invalid.firstName)}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/80">{t("lastName")} <span aria-hidden className="text-picton-200">*</span></span>
          <input
            name="lastName"
            autoComplete="family-name"
            required
            aria-invalid={invalid.lastName || undefined}
            className={inputClass(!!invalid.lastName)}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-white/80">{t("email")} <span aria-hidden className="text-picton-200">*</span></span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-invalid={invalid.email || undefined}
          className={inputClass(!!invalid.email)}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-white/80">{t("message")} <span aria-hidden className="text-picton-200">*</span></span>
        <textarea
          name="message"
          rows={5}
          required
          aria-invalid={invalid.message || undefined}
          className={inputClass(!!invalid.message)}
        />
      </label>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          aria-invalid={invalid.consent || undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-picton"
        />
        <span className={`text-sm leading-relaxed ${invalid.consent ? "text-red-300" : "text-white/65"}`}>
          {t("consent")} <span aria-hidden className="text-picton-200">*</span>
        </span>
      </label>

      <div aria-live="polite" className="min-h-5 text-sm text-red-300">
        {status === "error" && errorKey ? t(`errors.${errorKey}`) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-picton px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-picton-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
