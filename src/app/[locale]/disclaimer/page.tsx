import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const copy = {
  "en": {
    "title": "Disclaimer",
    "sections": [
      {
        "heading": "Using the information on this site",
        "body": "ENVT Consulting publishes these pages to explain its services. If you are planning a project, ask our team to confirm the scope and terms that apply to your situation."
      },
      {
        "heading": "Corrections and accessibility",
        "body": "If a detail is outdated or a page is difficult to use, send us its address and a short description through the contact form. Include only the personal information needed for us to respond."
      },
      {
        "heading": "External websites and reuse",
        "body": "Other publishers manage the websites we link to and set the terms for their services. To reproduce material published by ENVT Consulting, contact us for written permission unless the law or a licence already permits your use."
      }
    ]
  },
  "fr": {
    "title": "Avertissement",
    "sections": [
      {
        "heading": "Utilisation des informations du site",
        "body": "ENVT Consulting présente ses services sur ce site. Si vous envisagez un projet, contactez notre équipe pour confirmer les prestations et les conditions applicables à votre situation."
      },
      {
        "heading": "Corrections et accessibilité",
        "body": "Si une information est périmée ou si une page est difficile à utiliser, indiquez son adresse et décrivez le problème via le formulaire de contact. Communiquez uniquement les données personnelles nécessaires à notre réponse."
      },
      {
        "heading": "Sites externes et réutilisation",
        "body": "Les éditeurs des sites vers lesquels nous proposons des liens gèrent leurs contenus et fixent leurs propres conditions. Pour reproduire un contenu publié par ENVT Consulting, demandez notre autorisation écrite, sauf si la loi ou une licence permet déjà cet usage."
      }
    ]
  }
};

async function language() {
  return (await getLocale()) === "fr" ? "fr" : "en";
}

export async function generateMetadata() {
  return { title: copy[await language()].title };
}

export default async function Page() {
  const locale = await language();
  const { title, sections } = copy[locale];

  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8">
      <h1 className="mb-10 text-4xl font-semibold tracking-tight">{title}</h1>
      {sections.map(({ heading, body }) => (
        <section key={heading} className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">{heading}</h2>
          <p className="leading-7">{body}</p>
        </section>
      ))}
      <Link className="underline underline-offset-4" href="/contact-us">
        {locale === "fr" ? "Contacter ENVT Consulting" : "Contact ENVT Consulting"}
      </Link>
    </article>
  );
}
