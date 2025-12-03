import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CredibilityBar } from "@/components/CredibilityBar";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { EquipmentTypesSection } from "@/components/EquipmentTypesSection";
import { SegmentsSection } from "@/components/SegmentsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp, MobileContactBar } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 pb-20 md:pb-0">
        <HeroSection />
        <CredibilityBar />
        <ProblemSection />
        <ServicesSection />
        <DifferentialsSection />
        <EquipmentTypesSection />
        <SegmentsSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
        <MobileContactBar />
      </main>
    </>
  );
};

export default Index;
