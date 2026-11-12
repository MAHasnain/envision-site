// SAMPLE CONTENT: ye articles placeholder hain (structure dikhane ke liye).
// Company se asli articles lekar yahin replace karo; baaqi sab (pages, filters, related) apne aap chalega.
//
// Locale support: har post ke `text` mein { en, fr } hota hai. Agar kisi locale ka text na ho to
// English fallback use hota hai. Naya locale add karna ho to bas `text.<locale>` add karo.
// Category labels / UI text messages/*.json mein hain (Insights.*).

export type CategoryId = "cybersecurity" | "cloud" | "infrastructure" | "ai";

export const categoryIds: CategoryId[] = [
 "cybersecurity",
 "cloud",
 "infrastructure",
 "ai",
];

export type Block =
 | { type: "p"; text: string }
 | { type: "h2"; text: string }
 | { type: "ul"; items: string[] }
 | { type: "callout"; text: string };

export type PostText = {
 title: string;
 excerpt: string;
 body: Block[];
};

type PostBase = {
 slug: string;
 category: CategoryId;
 date: string; // ISO
 readTime: number; // minutes
 cover: string; // public/ ke andar ka path
 featured?: boolean;
};

type PostSource = PostBase & {
 text: { en: PostText } & Partial<Record<string, PostText>>;
};

// Localized post: same shape as before (slug, title, excerpt, body, ...)
export type Post = PostBase & PostText;

/** Locale-independent data; hr post ka text `text.<locale>` mein */
const sources: PostSource[] = [
 {
  slug: "nis2-readiness-first-90-days",
  category: "cybersecurity",
  date: "2026-11-05",
  readTime: 6,
  cover: "/images/services/cybersecurity.png",
  featured: true,
  text: {
   en: {
    title: "NIS2 readiness: where to start in the first 90 days",
    excerpt:
     "A practical starting point for organisations preparing for NIS2: scope, governance, gap analysis and a roadmap you can actually execute.",
    body: [
     {
      type: "p",
      text:
       "NIS2 raises the bar for cybersecurity across many sectors in Europe. For most organisations, the hardest part is not the technology but knowing where to begin. A focused first 90 days can turn a large regulatory topic into a clear, manageable programme.",
     },
     { type: "h2", text: "1. Confirm whether and how NIS2 applies" },
     {
      type: "p",
      text:
       "Start by establishing whether your organisation, or parts of it, falls within scope, and whether it is classed as an essential or an important entity. Also map the services and suppliers your scope depends on, since supply-chain security is part of the picture.",
     },
     { type: "h2", text: "2. Put governance in place" },
     {
      type: "p",
      text:
       "NIS2 places responsibility on management bodies, who are expected to approve and oversee cybersecurity risk-management measures. Early on, agree:",
     },
     {
      type: "ul",
      items: [
       "Who owns cybersecurity risk at board and executive level",
       "A named programme lead and a cross-functional working group",
       "How progress and risks will be reported to management",
      ],
     },
     { type: "h2", text: "3. Run a gap analysis and prioritise" },
     {
      type: "p",
      text:
       "Compare your current controls, policies and processes with the requirements, then rank gaps by risk and effort. The output should be a short, prioritised roadmap rather than a long list of findings.",
     },
     {
      type: "callout",
      text:
       "Compliance is easier to sustain when it is the by-product of good security management, not a separate exercise.",
     },
    ],
   },
   fr: {
    title: "Préparation à NIS2 : par où commencer dans les 90 premiers jours",
    excerpt:
     "Un point de départ pratique pour les organisations qui se préparent à NIS2 : périmètre, gouvernance, analyse des écarts et feuille de route réellement exécutable.",
    body: [
     {
      type: "p",
      text:
       "NIS2 relève le niveau d'exigence en matière de cybersécurité dans de nombreux secteurs en Europe. Pour la plupart des organisations, le plus difficile n'est pas la technologie, mais de savoir par où commencer. Des 90 premiers jours bien ciblés peuvent transformer un vaste sujet réglementaire en un programme clair et gérable.",
     },
     { type: "h2", text: "1. Confirmer si et comment NIS2 s'applique" },
     {
      type: "p",
      text:
       "Commencez par établir si votre organisation, ou certaines de ses entités, entre dans le périmètre, et si elle est qualifiée d’entité essentielle ou d'entité importante. Cartographiez également les services et les fournisseurs dont dépend votre périmètre, car la sécurité de la chaîne d'approvisionnement fait partie du tableau.",
     },
     { type: "h2", text: "2. Mettre en place la gouvernance" },
     {
      type: "p",
      text:
       "NIS2 fait peser la responsabilité sur les organes de direction, qui doivent approuver et superviser les mesures de gestion des risques de cybersécurité. Dès le départ, définissez :",
     },
     {
      type: "ul",
      items: [
       "Qui est responsable du risque cyber au niveau du conseil d'administration et de la direction",
       "Un responsable de programme désigné et un groupe de travail transverse",
       "La manière dont l'avancement et les risques seront rapportés à la direction",
      ],
     },
     { type: "h2", text: "3. Réaliser une analyse des écarts et prioriser" },
     {
      type: "p",
      text:
       "Comparez vos contrôles, politiques et processus actuels aux exigences, puis classez les écarts selon le risque et l’effort. Le résultat doit être une feuille de route courte et priorisée, plutôt qu’une longue liste de constats.",
     },
     {
      type: "callout",
      text:
       "La conformité est plus facile à maintenir lorsqu’elle découle d’une bonne gestion de la sécurité, et non d'un exercice séparé.",
     },
    ],
   },
  },
 },
 {
  slug: "incident-reporting-under-nis2",
  category: "cybersecurity",
  date: "2026-10-22",
  readTime: 4,
  cover: "/images/focus.jpg",
  text: {
   en: {
    title: "Incident reporting under NIS2: the timeline to plan for",
    excerpt:
     "Reporting deadlines are tight. Here is how to prepare detection, escalation and communication so you can meet them under pressure.",
    body: [
     {
      type: "p",
      text:
       "NIS2 introduces a staged approach to reporting significant incidents. In outline, organisations are expected to send an early warning within 24 hours, an incident notification within 72 hours, and a final report within one month.",
     },
     { type: "h2", text: "What makes the deadlines achievable" },
     {
      type: "ul",
      items: [
       "Clear criteria for what counts as a significant incident",
       "A defined escalation path, with decision-makers who are reachable out of hours",
       "Pre-approved communication templates",
       "Regular exercises that test the process end to end",
      ],
     },
     {
      type: "p",
      text:
       "The organisations that cope best are those that have rehearsed. A tabletop exercise once or twice a year exposes gaps in ownership and tooling long before a real incident does.",
     },
    ],
   },
   fr: {
    title: "Notification des incidents sous NIS2 : le calendrier à anticiper",
    excerpt:
     "Les délais de notification sont serrés. Voici comment préparer la détection, l’escalade et la communication pour les respecter sous pression.",
    body: [
     {
      type: "p",
      text:
       "NIS2 introduit une approche par étapes pour la notification des incidents importants. En résumé, les organisations doivent envoyer une alerte précoce sous 24 heures, une notification d’incident sous 72 heures et un rapport final sous un mois.",
     },
     { type: "h2", text: "Ce qui rend les délais tenables" },
     {
      type: "ul",
      items: [
       "Des critères clairs pour définir ce qu’est un incident important",
       "Un circuit d’escalade défini, avec des décideurs joignables en dehors des heures ouvrées",
       "Des modèles de communication pré-approuvés",
       "Des exercices réguliers qui testent le processus de bout en bout",
      ],
     },
     {
      type: "p",
      text:
       "Les organisations qui s’en sortent le mieux sont celles qui se sont entraînées. Un exercice sur table une ou deux fois par an met en évidence les lacunes en matière de responsabilités et d’outillage bien avant qu’un véritable incident ne le fasse.",
     },
    ],
   },
  },
 },
 {
  slug: "cloud-migration-without-disruption",
  category: "cloud",
  date: "2026-10-14",
  readTime: 5,
  cover: "/images/services/cloud.png",
  text: {
   en: {
    title: "Cloud migration without disruption: a practical approach",
    excerpt:
     "How to move workloads to the cloud in controlled steps, with minimal downtime and a clear view of cost and risk.",
    body: [
     {
      type: "p",
      text:
       "Successful migrations are rarely a single big move. They are a sequence of small, reversible steps that build confidence and keep the business running.",
     },
     { type: "h2", text: "Assess before you move" },
     {
      type: "p",
      text:
       "Inventory applications and dependencies, classify them by criticality and data sensitivity, and decide for each whether to rehost, modernise, replace or retire it.",
     },
     { type: "h2", text: "Migrate in waves" },
     {
      type: "ul",
      items: [
       "Start with lower-risk workloads to validate the landing zone",
       "Automate repeatable steps and test cutover plans in advance",
       "Keep a rollback option until the new environment is proven",
      ],
     },
     { type: "h2", text: "Optimise once you are live" },
     {
      type: "p",
      text:
       "Migration is the start, not the finish. Right-size resources, review costs regularly and revisit security and governance settings as the environment evolves.",
     },
    ],
   },
   fr: {
    title: "Migration vers le cloud sans interruption : une approche pratique",
    excerpt:
     "Comment migrer des charges de travail vers le cloud par étapes maîtrisées, avec un minimum d’indisponibilité et une vision claire des coûts et des risques.",
    body: [
     {
      type: "p",
      text:
       "Les migrations réussies sont rarement un grand basculement unique. Ce sont des séries de petites étapes réversibles qui renforcent la confiance et maintiennent l’activité.",
     },
     { type: "h2", text: "Évaluer avant de migrer" },
     {
      type: "p",
      text:
       "Inventoriez les applications et leurs dépendances, classez-les selon leur criticité et la sensibilité des données, puis décidez pour chacune s’il faut la migrer à l’identique, la moderniser, la remplacer ou l’arrêter.",
     },
     { type: "h2", text: "Migrer par vagues" },
     {
      type: "ul",
      items: [
       "Commencer par les charges de travail à moindre risque pour valider la zone d’atterrissage",
       "Automatiser les étapes répétables et tester les plans de bascule à l’avance",
       "Conserver une option de retour arrière jusqu’à ce que le nouvel environnement ait fait ses preuves",
      ],
     },
     { type: "h2", text: "Optimiser une fois en production" },
     {
      type: "p",
      text:
       "La migration est un début, pas une fin. Ajustez la taille des ressources, examinez régulièrement les coûts et revoyez les paramètres de sécurité et de gouvernance à mesure que l’environnement évolue.",
     },
    ],
   },
  },
 },
 {
  slug: "choosing-the-right-infrastructure-model",
  category: "infrastructure",
  date: "2026-09-30",
  readTime: 5,
  cover: "/images/services/data-center.png",
  text: {
   en: {
    title: "On-premises, colocation, cloud or hybrid? Choosing the right model",
    excerpt:
     "There is no single best answer. A look at the trade-offs that matter: resilience, control, cost and European data residency.",
    body: [
     {
      type: "p",
      text:
       "Infrastructure decisions are rarely either-or. Most organisations end up with a mix, and the goal is to make that mix deliberate rather than accidental.",
     },
     { type: "h2", text: "Questions worth answering first" },
     {
      type: "ul",
      items: [
       "Which workloads need low latency or tight control, and which need elasticity?",
       "Where must data reside to meet regulatory and customer requirements?",
       "What availability and recovery targets does the business actually need?",
       "What skills and operating model do you have to run it?",
      ],
     },
     {
      type: "p",
      text:
       "Once these are clear, the options usually sort themselves out. Colocation and private environments suit stable, control-sensitive workloads, while public cloud suits variable demand and fast experimentation.",
     },
    ],
   },
   fr: {
    title: "Sur site, colocation, cloud ou hybride ? Choisir le bon modèle",
    excerpt:
     "Il n’existe pas de meilleure réponse unique. Un tour d’horizon des compromis qui comptent : résilience, maîtrise, coûts et résidence des données en Europe.",
    body: [
     {
      type: "p",
      text:
       "Les choix d’infrastructure sont rarement binaires. La plupart des organisations finissent par adopter un mélange, et l’objectif est de rendre ce mélange délibéré plutôt qu’accidentel.",
     },
     { type: "h2", text: "Les questions à se poser d’abord" },
     {
      type: "ul",
      items: [
       "Quelles charges de travail exigent une faible latence ou un contrôle strict, et lesquelles ont besoin d’élasticité ?",
       "Où les données doivent-elles résider pour répondre aux exigences réglementaires et à celles des clients ?",
       "Quels objectifs de disponibilité et de reprise l’activité exige-t-elle réellement ?",
       "De quelles compétences et de quel modèle d’exploitation disposez-vous pour l’assurer ?",
      ],
     },
     {
      type: "p",
      text:
       "Une fois ces points clarifiés, les options se départagent généralement d’elles-mêmes. La colocation et les environnements privés conviennent aux charges stables et sensibles au contrôle, tandis que le cloud public convient à une demande variable et à l’expérimentation rapide.",
     },
    ],
   },
  },
 },
 {
  slug: "ai-use-cases-that-deliver",
  category: "ai",
  date: "2026-09-18",
  readTime: 5,
  cover: "/images/services/ai-automation.png",
  text: {
   en: {
    title: "AI use cases that deliver: start with the process, not the model",
    excerpt:
     "Why the most successful AI and automation projects begin with a business problem, good data and clear ownership.",
    body: [
     {
      type: "p",
      text:
       "It is easy to be drawn to the latest model. In practice, value comes from choosing the right problem and making sure the surrounding process, data and people are ready.",
     },
     { type: "h2", text: "A simple filter for use cases" },
     {
      type: "ul",
      items: [
       "The task is frequent, rule-heavy or time-consuming today",
       "Good-quality data is available and can be accessed securely",
       "Success can be measured in time saved, errors avoided or revenue gained",
       "There is a named owner on the business side",
      ],
     },
     { type: "h2", text: "Build in governance from day one" },
     {
      type: "p",
      text:
       "Clear guidance on data use, human oversight and monitoring protects both the organisation and its customers, and makes it easier to scale what works.",
     },
    ],
   },
   fr: {
    title:
     "Des cas d’usage de l’IA qui livrent : partir du processus, pas du modèle",
    excerpt:
     "Pourquoi les projets d’IA et d’automatisation les plus réussis commencent par un problème métier, des données de qualité et une responsabilité clairement établie.",
    body: [
     {
      type: "p",
      text:
       "Il est facile de se laisser séduire par le tout dernier modèle. En pratique, la valeur vient du choix du bon problème et de la préparation du processus, des données et des équipes qui l’entourent.",
     },
     { type: "h2", text: "Un filtre simple pour les cas d’usage" },
     {
      type: "ul",
      items: [
       "La tâche est aujourd’hui fréquente, fondée sur des règles ou chronophage",
       "Des données de bonne qualité sont disponibles et accessibles en toute sécurité",
       "Le succès peut se mesurer en temps gagné, en erreurs évitées ou en revenus générés",
       "Un responsable est clairement désigné côté métier",
      ],
     },
     { type: "h2", text: "Intégrer la gouvernance dès le premier jour" },
     {
      type: "p",
      text:
       "Des règles claires sur l’usage des données, la supervision humaine et le suivi protègent à la fois l’organisation et ses clients, et facilitent le passage à l’échelle de ce qui fonctionne.",
     },
    ],
   },
  },
 },
 {
  slug: "cloud-security-shared-responsibility",
  category: "cloud",
  date: "2026-09-04",
  readTime: 4,
  cover: "/images/presence/france.jpg",
  text: {
   en: {
    title: "Cloud security and the shared responsibility model",
    excerpt:
     "Moving to the cloud does not move accountability. What your provider secures, what remains yours, and how to close the gap.",
    body: [
     {
      type: "p",
      text:
       "Cloud providers secure the underlying platform, but configuration, identities, data and access remain the customer's responsibility. Misunderstanding that boundary is behind many avoidable incidents.",
     },
     { type: "h2", text: "Where customers most often need to focus" },
     {
      type: "ul",
      items: [
       "Identity and access management, including multi-factor authentication",
       "Configuration baselines and continuous posture monitoring",
       "Encryption and key management for sensitive data",
       "Logging, detection and a tested response plan",
      ],
     },
     {
      type: "callout",
      text:
       "Treat the provider's security documentation as the start of your own controls, not a substitute for them.",
     },
    ],
   },
   fr: {
    title: "Sécurité du cloud et modèle de responsabilité partagée",
    excerpt:
     "Passer au cloud ne déplace pas la responsabilité. Ce que votre fournisseur sécurise, ce qui reste à votre charge, et comment combler l’écart.",
    body: [
     {
      type: "p",
      text:
       "Les fournisseurs cloud sécurisent la plateforme sous-jacente, mais la configuration, les identités, les données et les accès restent de la responsabilité du client. Mal comprendre cette frontière est à l’origine de nombreux incidents évitables.",
     },
     {
      type: "h2",
      text:
       "Les points sur lesquels les clients doivent le plus souvent se concentrer",
     },
     {
      type: "ul",
      items: [
       "La gestion des identités et des accès, y compris l’authentification multifacteur",
       "Les référentiels de configuration et la surveillance continue de la posture de sécurité",
       "Le chiffrement et la gestion des clés pour les données sensibles",
       "La journalisation, la détection et un plan de réponse testé",
      ],
     },
     {
      type: "callout",
      text:
       "Considérez la documentation de sécurité du fournisseur comme le point de départ de vos propres contrôles, et non comme un substitut.",
     },
    ],
   },
  },
 },
];

const localize = (p: PostSource, locale: string): Post => {
 const { text, ...base } = p;
 return { ...base, ...(text[locale] ?? text.en) };
};

export const formatDate = (iso: string, locale = "en") =>
 new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
 }).format(new Date(iso));

export const getPosts = (locale = "en"): Post[] =>
 sources.map((p) => localize(p, locale));

export const getPost = (slug: string, locale = "en"): Post | undefined => {
 const p = sources.find((s) => s.slug === slug);
 return p ? localize(p, locale) : undefined;
};

export const getFeaturedPost = (locale = "en"): Post | undefined => {
 const list = getPosts(locale);
 return list.find((p) => p.featured) ?? list[0];
};

const englishCategoryLabels: Record<CategoryId, string> = {
 cybersecurity: "Cybersecurity & NIS2",
 cloud: "Cloud",
 infrastructure: "Data & Infrastructure",
 ai: "AI & Automation",
};
/** @deprecated use t(`categories.${id}`) from Insights messages */
export const categories = categoryIds.map((id) => ({
 id,
 label: englishCategoryLabels[id],
}));
/** @deprecated use t(`categories.${id}`) from Insights messages */
export const categoryLabel = (id: CategoryId) =>
 englishCategoryLabels[id] ?? id;
/** @deprecated use getPosts(locale) */
export const posts = getPosts("en");
/** @deprecated use getFeaturedPost(locale) */
export const featuredPost = getFeaturedPost("en") as Post;
