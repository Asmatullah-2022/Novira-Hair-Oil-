import { siteConfig, products } from "./siteConfig";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function getOrderMessage(): string {
  const product = products[0];
  return `Hello ${siteConfig.brandName}, I would like to order Novira Hair Oil (${product.size}).\nProduct Price: Rs. ${product.price.toLocaleString()}\nDelivery Charges: Rs. ${product.deliveryCharges.toLocaleString()}\nTotal: Rs. ${product.total.toLocaleString()}\nPlease confirm my order and delivery details.`;
}

export function getContactMessage(): string {
  return `Hello ${siteConfig.brandName}, I have a question about Novira Hair Oil.`;
}
