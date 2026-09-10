export type Product = {
  id: string;
  name: string;
  size: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

export const siteConfig = {
  brandName: "Novira Hair Oil",
  brandShort: "Novira",
  tagline: "Stronger. Thicker. Healthier.",
  domain: "",
  whatsapp: "923432646758",
  displayWhatsapp: "0343 2646758",
  intlWhatsapp: "+92 343 2646758",
  title: "Novira Hair Oil | Premium Hair Care",
  description:
    "Discover Novira Hair Oil — premium hair care for all hair types. Order Novira Hair Oil directly through WhatsApp.",
};

export const products: Product[] = [
  {
    id: "150ml",
    name: "Novira Hair Oil",
    size: "150ml",
    price: "",
    description:
      "Pure & organic hair oil for daily care, suitable for all hair types.",
    image: "/images/products/novira-150ml.jpg",
    alt: "Novira Hair Oil 150ml bottle",
  },
  {
    id: "200ml",
    name: "Novira Hair Oil",
    size: "200ml",
    price: "",
    description:
      "Our larger size for regular use — pure, natural-inspired hair care.",
    image: "/images/products/novira-200ml.jpg",
    alt: "Novira Hair Oil 200ml bottle",
  },
];

export const galleryImages = [
  {
    src: "/images/products/novira-200ml.jpg",
    alt: "Novira Hair Oil 200ml bottle",
  },
  {
    src: "/images/products/novira-150ml.jpg",
    alt: "Novira Hair Oil 150ml bottle",
  },
  {
    src: "/images/products/novira-combined.jpg",
    alt: "Novira Hair Oil 150ml and 200ml bottles",
  },
];

export const heroImage = {
  src: "/images/products/novira-200ml.jpg",
  alt: "Novira Hair Oil premium hair care bottle",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Contact", href: "#contact" },
];
