export type IconName =
 | "send"
 | "chart"
 | "shield"
 | "bulb"
 | "server"
 | "layers"
 | "lock"
 | "leaf"
 | "eye"
 | "refresh"
 | "clipboard"
 | "zap"
 | "brain"
 | "trending";

export type ServiceBandData = {
 partnersLabel: string;
 partnersText: string;
 missionLabel: string;
 missionText: string;
};

export type ServicePage = {
 slug: string;
 image: string;
 benefitIcons: IconName[];
 hasBand?: boolean;
 band?: ServiceBandData;
};

export const servicePages: ServicePage[] = [
 {
  slug: "cloud-services",
  image: "/images/services/cloud.png",
  benefitIcons: ["send", "chart", "shield", "bulb"],
  hasBand: true,
 },
 {
  slug: "data-center-infrastructure",
  image: "/images/services/data-center.png",
  benefitIcons: ["server", "layers", "lock", "leaf"],
 },
 {
  slug: "cybersecurity-nis2-compliance",
  image: "/images/services/cybersecurity.png",
  benefitIcons: ["eye", "refresh", "clipboard", "lock"],
 },
 {
  slug: "ai-automation",
  image: "/images/services/ai-automation.png",
  benefitIcons: ["zap", "brain", "trending", "shield"],
 },
];

export const getServicePage = (slug: string) =>
 servicePages.find((p) => p.slug === slug);
