export const CONTACT = {
  WHATSAPP_NUMBER: "5511919798964",
  WHATSAPP_DISPLAY: "(11) 91979-8964",
  PHONE: "(11) 3428-4442",
  PHONE_LINK: "+551134284442",
  EMAIL: "comercial@ntscalibracao.com.br",
  EMAIL_SECONDARY: "contato@ntscalibracao.com.br",
} as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para qualificação térmica."
);

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const PAGE_TITLE = "Qualificação Térmica com Relatório Técnico | NTS";
