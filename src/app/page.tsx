import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServicesSection from "@/components/ServicesSection";
import Presence from "@/components/Presence";
import Focus from "@/components/Focus";
import WhyEnvision from "@/components/WhyEnvision";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesSection />
      <Presence />
      <Focus />
      <WhyEnvision />
      <ContactCta />
    </>
  );
}