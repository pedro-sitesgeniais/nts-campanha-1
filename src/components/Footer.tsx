import { MapPin, Clock, Phone, Mail, Award, Shield, Handshake } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const certificates = [
  { name: "rbc", label: "RBC Inmetro", value: "CAL 0493", icon: Award },
  { name: "iso", label: "Norma", value: "ISO/IEC 17025", icon: Shield },
  { name: "anfarmag", label: "Parceiro", value: "ANFARMAG", icon: Handshake },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom p-5 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company Info with Logo */}
          <div>
            <div className="mb-4">
              <img
                src="/logo-linha.png"
                alt="NTS - Núcleo Tecnológico de Serviços"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Especialistas em qualificação térmica e mapeamento de equipamentos desde 2011.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CNPJ: 07.283.547/0001-83
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 opacity-70" />
                <span className="text-primary-foreground/80">Guarulhos - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0 opacity-70" />
                <span className="text-primary-foreground/80">Seg-Sex 08:00–17:30</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 opacity-70" />
                <a href={`tel:${CONTACT.PHONE_LINK}`} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {CONTACT.PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 opacity-70" />
                <a href={`mailto:${CONTACT.EMAIL_SECONDARY}`} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {CONTACT.EMAIL_SECONDARY}
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-bold text-lg mb-4">Certificações</h4>
            <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
              {certificates.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3"
                >
                  <cert.icon className="w-6 h-6 text-cta" />
                  <div className="text-left">
                    <span className="text-xs text-white/70 block">{cert.label}</span>
                    <span className="text-sm font-semibold text-white">{cert.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} NTS – Núcleo Tecnológico de Serviços. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
