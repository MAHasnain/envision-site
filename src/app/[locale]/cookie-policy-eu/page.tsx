import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const copy = {
  "en": {
    "title": "Cookie Policy",
    "sections": [
      {
        "heading": "Cookies and browser storage",
        "body": "This policy describes how the ENVT Consulting website remembers settings on your device. Cookies can accompany requests to a website. Local storage lets a page retrieve a saved setting on a later visit."
      },
      {
        "heading": "Display preferences",
        "body": "When you choose a light or dark theme, the site reads the value named theme from your browser’s local storage to apply your preference. Local storage has no preset expiry. You can remove the saved value by clearing this site’s data."
      },
      {
        "heading": "Managing your settings",
        "body": "Your browser’s privacy settings let you review or delete cookies and local storage for this site. Clearing a saved preference means you may need to select it again. Contact ENVT Consulting if you have questions about a storage entry."
      }
    ]
  },
  "fr": {
    "title": "Politique relative aux cookies",
    "sections": [
      {
        "heading": "Cookies et stockage du navigateur",
        "body": "Cette politique décrit comment le site d’ENVT Consulting mémorise certains réglages sur votre appareil. Un cookie peut accompagner les requêtes adressées au site. Le stockage local permet à une page de retrouver un réglage lors d’une visite ultérieure."
      },
      {
        "heading": "Préférences d’affichage",
        "body": "Lorsque vous choisissez un thème clair ou sombre, le site lit la valeur nommée theme dans le stockage local de votre navigateur pour appliquer votre choix. Cette valeur n’a pas de date d’expiration prédéfinie. Vous pouvez la supprimer en effaçant les données de ce site."
      },
      {
        "heading": "Gestion de vos réglages",
        "body": "Les paramètres de confidentialité de votre navigateur permettent de consulter ou d’effacer les cookies et les données locales de ce site. Après leur suppression, vous devrez peut-être sélectionner de nouveau votre préférence. Pour toute question, contactez ENVT Consulting."
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
