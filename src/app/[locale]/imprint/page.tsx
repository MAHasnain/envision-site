import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const copy = {
  "en": {
    "title": "Imprint",
    "sections": [
      {
        "heading": "ENVT Consulting",
        "body": "For enquiries about this website, use the contact details below. When reporting an issue with a publication, please include the address of the page concerned."
      },
      {
        "heading": "Contact in France",
        "body": "43 boulevard Auguste Blanqui, 75013 Paris, France"
      }
    ]
  },
  "fr": {
    "title": "Mentions légales",
    "sections": [
      {
        "heading": "ENVT Consulting",
        "body": "Pour toute question concernant ce site, utilisez les coordonnées ci-dessous. Si votre demande concerne une publication, précisez l’adresse de la page concernée."
      },
      {
        "heading": "Contact en France",
        "body": "43 boulevard Auguste Blanqui, 75013 Paris, France"
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
      <p className="mb-4"><a href="tel:+33632239229">+33 6 32 23 92 29</a></p>
      <Link className="underline underline-offset-4" href="/contact-us">
        {locale === "fr" ? "Contacter ENVT Consulting" : "Contact ENVT Consulting"}
      </Link>
    </article>
  );
}
