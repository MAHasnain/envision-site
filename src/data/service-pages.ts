export type IconName =
  | "send" | "chart" | "shield" | "bulb" | "server" | "layers" | "lock" | "leaf"
  | "eye" | "refresh" | "clipboard" | "zap" | "brain" | "trending";

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  hero: { title: string; accent: string; text: string };
  overview: {
    heading: string;
    text: string;
    benefits: { icon: IconName; title: string; text: string }[];
  };
  features: {
    heading: string;
    image: string;
    imageAlt: string;
    items: { title: string; text: string }[];
  };
  band?: {
    partnersLabel: string;
    partnersText: string;
    missionLabel: string;
    missionText: string;
  };
};

export const servicePages: ServicePage[] = [
  {
    slug: "cloud-services",
    title: "Cloud Services",
    metaDescription:
      "Secure and scalable cloud solutions designed to modernise infrastructure, improve agility and support long-term business growth.",
    hero: {
      title: "Cloud Built",
      accent: "With Purpose",
      text: "Secure and scalable cloud solutions designed to modernise infrastructure, improve agility and support long-term business growth.",
    },
    overview: {
      heading: "Cloud as foundation for lasting value",
      text: "We help organizations leverage the power of the cloud to increase agility, improve efficiency, and enable sustainable growth. From strategy and migration to management and optimization, our cloud services are designed to deliver secure, high-performance environments tailored to your business needs.",
      benefits: [
        { icon: "send", title: "Greater agility", text: "Adapt quickly to changing business needs." },
        { icon: "chart", title: "Optimised Performance", text: "Modern, scalable infrastructure for what\u2019s next." },
        { icon: "shield", title: "Built in Security", text: "Best practices and compliance from day one." },
        { icon: "bulb", title: "Measurable Value", text: "Lower costs, higher efficiency and more innovation." },
      ],
    },
    features: {
      heading: "Modernise, migrate and optimise your cloud.",
      image: "/images/services/cloud.png",
      imageAlt: "Cloud services",
      items: [
        { title: "Cloud Strategy & Advisory", text: "Assess, plan and design the right cloud roadmap for your business." },
        { title: "Cloud Migration", text: "Seamless and secure migration with minimal disruption." },
        { title: "Cloud Infrastructure & Operations", text: "Design, implement and manage scalable cloud environments." },
        { title: "Cloud Security & Compliance", text: "Built-in security, governance and regulatory alignment (including NIS2)." },
        { title: "Cloud Optimisation", text: "Improve performance, cost-efficiency and sustainability." },
      ],
    },
    band: {
      partnersLabel: "Technology partners",
      partnersText: "Working with leading cloud platforms.",
      missionLabel: "Our mission",
      missionText:
        "Our mission is to help organisations build secure, intelligent and resilient digital environments that support long-term growth.",
    },
  },
  {
    slug: "data-center-infrastructure",
    title: "Data Center & Infrastructure",
    metaDescription:
      "Reliable, secure and scalable infrastructure solutions spanning data centers, networks, modernisation and managed operations.",
    hero: {
      title: "Data Infrastructure Built",
      accent: "For Resilience",
      text: "Reliable, secure and scalable infrastructure solutions spanning data centers, networks, modernisation and managed operations.",
    },
    overview: {
      heading: "A robust foundation for your business.",
      text: "We help organisations build and modernise their data infrastructure with a focus on reliability, scalability and security \u2013 from data center design to end-to-end management.",
      benefits: [
        { icon: "server", title: "High availability", text: "Minimise downtime and ensure business continuity." },
        { icon: "layers", title: "Scalability", text: "Infrastructure that grows with your needs." },
        { icon: "lock", title: "Security by design", text: "Built-in physical and operational security." },
        { icon: "leaf", title: "Sustainable operations", text: "Efficient, future-ready infrastructure." },
      ],
    },
    features: {
      heading: "Build data infrastructure your business can rely on.",
      image: "/images/services/data-center.png",
      imageAlt: "Data center infrastructure",
      items: [
        { title: "Data Center Design & Build", text: "Plan and deliver modern, resilient data center facilities tailored to your requirements." },
        { title: "Infrastructure Modernisation", text: "Upgrade legacy infrastructure to improve performance, efficiency and reliability." },
        { title: "Network & Connectivity", text: "Design and implement secure, high-performance networks across locations." },
        { title: "Monitoring & Managed Services", text: "Proactive monitoring, maintenance and support to ensure optimal performance." },
        { title: "Disaster Recovery & Business Continuity", text: "Build resilience with robust backup and recovery solutions." },
        { title: "European Data Residency Options", text: "Keep your data within Europe with secure, compliant hosting and storage options." },
      ],
    },
  },
  {
    slug: "cybersecurity-nis2-compliance",
    title: "Cybersecurity & NIS2 Compliance",
    metaDescription:
      "Cybersecurity and NIS2 readiness solutions that strengthen resilience, reduce risk and help organisations meet evolving regulatory requirements.",
    hero: {
      title: "Cyber Security Built",
      accent: "Into Your Business",
      text: "Cybersecurity and NIS2 readiness solutions that strengthen resilience, reduce risk and help organisations meet evolving regulatory requirements.",
    },
    overview: {
      heading: "Security and compliance for a more resilient organisation.",
      text: "We take a proactive and practical approach to cybersecurity, combining technical expertise with regulatory understanding to help you reduce risk, strengthen governance and prepare for NIS2 and beyond.",
      benefits: [
        { icon: "eye", title: "Risk visibility", text: "Gain clarity on your risk exposure and priorities." },
        { icon: "refresh", title: "Operational resilience", text: "Strengthen continuity and minimise disruption." },
        { icon: "clipboard", title: "NIS2 Regulatory readiness", text: "Prepare for NIS2 and related requirements." },
        { icon: "lock", title: "Security by design", text: "Embed security into your people, processes and technology." },
      ],
    },
    features: {
      heading: "Strengthen security. Build regulatory readiness.",
      image: "/images/services/cybersecurity.png",
      imageAlt: "Cybersecurity and NIS2",
      items: [
        { title: "NIS2 Gap Analysis & Readiness", text: "Assess obligations, identify gaps and define the right roadmap." },
        { title: "Security Governance & ISMS", text: "Build governance frameworks and structured security management." },
        { title: "Threat Detection & Incident Response", text: "Improve visibility, preparedness and response capabilities." },
        { title: "Security Architecture & Controls", text: "Strengthen infrastructure, access, data and operational controls." },
        { title: "Compliance, Reporting & Awareness", text: "Support reporting processes, supply-chain considerations and internal readiness." },
      ],
    },
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    metaDescription:
      "Practical AI and automation solutions that streamline operations, improve decisions and turn business challenges into measurable outcomes.",
    hero: {
      title: "AI That Works",
      accent: "For Your Business",
      text: "Practical AI and automation solutions that streamline operations, improve decisions and turn business challenges into measurable outcomes.",
    },
    overview: {
      heading: "Intelligent solutions for real-world impact.",
      text: "From strategy to implementation, we deliver practical AI and automation solutions that solve real business challenges and help you operate smarter, faster and more efficiently.",
      benefits: [
        { icon: "zap", title: "Higher efficiency", text: "Automate repetitive tasks and streamline operations." },
        { icon: "brain", title: "Better decisions", text: "Unlock insights from your data with AI." },
        { icon: "trending", title: "Scalable solutions", text: "Built to grow with your business." },
        { icon: "shield", title: "Responsible AI", text: "Secure, ethical and compliant by design." },
      ],
    },
    features: {
      heading: "Turn AI potential into practical solutions.",
      image: "/images/services/ai-automation.png",
      imageAlt: "AI and automation",
      items: [
        { title: "AI Strategy & Advisory", text: "Identify opportunities, define use cases and build a roadmap for measurable impact." },
        { title: "Process Automation", text: "Automate workflows across functions to reduce manual effort and increase efficiency." },
        { title: "Data & AI Solutions", text: "Design and implement data platforms and AI models tailored to your business needs." },
        { title: "System Integration", text: "Seamlessly integrate AI and automation into your existing technology stack." },
        { title: "Governance & Responsible AI", text: "Ensure security, compliance and ethical use of AI across your organisation." },
      ],
    },
  },
];

export const getServicePage = (slug: string) => servicePages.find((p) => p.slug === slug);
