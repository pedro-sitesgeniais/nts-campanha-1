import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, CONTACT } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo-linha.png"
              alt="NTS - Núcleo Tecnológico de Serviços"
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Contact Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={`tel:${CONTACT.PHONE_LINK}`}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT.PHONE}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="hidden md:inline">Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
