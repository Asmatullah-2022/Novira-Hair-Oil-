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

export type OrderFormDetails = {
  name: string;
  phone: string;
  quantity: number;
  subtotal: number;
  total: number;
  address: string;
  city: string;
};

export function getFormOrderMessage(details: OrderFormDetails): string {
  const product = products[0];
  return `Hello ${siteConfig.brandName},

I would like to place an order.

Customer Name: ${details.name}
Mobile Number: ${details.phone}
Product: ${product.name}
Size: ${product.size}
Quantity: ${details.quantity}

Product Subtotal: Rs. ${details.subtotal.toLocaleString()}
Delivery Charges: Rs. ${product.deliveryCharges.toLocaleString()}
Total Amount: Rs. ${details.total.toLocaleString()}

Delivery Address:
${details.address}

City:
${details.city}

Please confirm my order.

Thank you.`;
}
