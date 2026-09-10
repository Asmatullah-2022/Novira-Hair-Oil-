import { siteConfig } from "./siteConfig";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function getGeneralOrderMessage(): string {
  return `Hello ${siteConfig.brandName}, I would like to order Novira Hair Oil. Please share the available sizes, price and delivery details.`;
}

export function getProductOrderMessage(size: string): string {
  return `Hello ${siteConfig.brandName}, I would like to order the ${size} Novira Hair Oil. Please confirm availability, price and delivery details.`;
}

export function getContactMessage(): string {
  return `Hello ${siteConfig.brandName}, I have a question about Novira Hair Oil.`;
}
