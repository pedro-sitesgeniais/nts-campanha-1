import { Button } from "@/components/ui/button";
import { Phone, Award, Shield, FileCheck, Handshake, Thermometer } from "lucide-react";
import { WHATSAPP_LINK, CONTACT } from "@/lib/constants";
import heroImage from "@/assets/hero-balance.jpg";

const badges = [
  { icon: Award, text: "RBC Inmetro" },
  { icon: FileCheck, text: "ISO/IEC 17025" },
  { icon: Shield, text: "Conformidade ANVISA" },
  { icon: Handshake, text: "Parceiro ANFARMAG" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Equipamento térmico em laboratório"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/85 to-[hsl(var(--primary))]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-up">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                <badge.icon className="w-4 h-4" />
                {badge.text}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
            Qualificação Térmica<br />
            <span className="text-[hsl(var(--accent))]">com Laudo Certificado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-up delay-200">
            Mapeamento térmico e qualificação de estufas, geladeiras, freezers,
            câmaras frias e autoclaves. Conformidade com ANVISA, GMP e BPF.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Thermometer className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`tel:${CONTACT.PHONE_LINK}`}>
                <Phone className="w-5 h-5 mr-2" />
                Ou ligue: {CONTACT.PHONE}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
