import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServicesSection from "@/components/ServicesSection";
import Presence from "@/components/Presence";
import Focus from "@/components/Focus";
import WhyEnvision from "@/components/WhyEnvision";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative isolate">
        <PageBackground />
        <Hero />
        <Intro />
        <ServicesSection />
        <Presence />
        <Focus />
        <WhyEnvision />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}