export type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  deliveryCharges: number;
  total: number;
  description: string;
  image: string;
  alt: string;
};

export const siteConfig = {
  brandName: "Novira Hair Oil",
  brandShort: "Novira",
  tagline: "Stronger. Thicker. Healthier.",
  domain: "https://novira-hair-oil.vercel.app",
  whatsapp: "923432646758",
  displayWhatsapp: "0343 2646758",
  intlWhatsapp: "+92 343 2646758",
  title: "Novira Hair Oil | Premium 120ml Hair Care",
  description:
    "Novira Hair Oil 120ml — a premium, natural-inspired hair oil for all hair types. Order directly through WhatsApp with fast, easy checkout.",
  keywords: [
    "Novira Hair Oil",
    "Novira",
    "premium hair oil",
    "natural hair oil",
    "hair oil Pakistan",
    "120ml hair oil",
    "hair care for all hair types",
    "order hair oil on WhatsApp",
  ],
};

export const products: Product[] = [
  {
    id: "120ml",
    name: "Novira Hair Oil",
    size: "120 ml",
    price: 800,
    deliveryCharges: 200,
    total: 1000,
    description:
      "Pure & organic hair oil for daily care, suitable for all hair types.",
    image: "/images/products/novira-120ml.jpg",
    alt: "Novira Hair Oil 120ml bottle",
  },
];

export const heroImage = {
  src: "/images/products/novira-120ml.jpg",
  alt: "Novira Hair Oil 120ml bottle — premium hair care",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];
