import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, CONTACT } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 animate-bounce-soft"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border p-3 flex gap-3 md:hidden">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-bold text-sm shadow-lg"
      >
        <FaWhatsapp className="w-5 h-5" />
        WhatsApp
      </a>
      <a
        href={`tel:${CONTACT.PHONE_LINK}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold text-sm shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Ligar
      </a>
    </div>
  );
}
