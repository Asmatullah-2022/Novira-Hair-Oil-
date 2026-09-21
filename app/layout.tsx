import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, products, heroImage } from "@/lib/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: siteConfig.domain,
    type: "website",
    locale: "en_PK",
    siteName: siteConfig.brandName,
    images: [
      {
        url: heroImage.src,
        width: 1200,
        height: 1600,
        alt: heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    images: [heroImage.src],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const product = products[0];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brandName,
  url: siteConfig.domain,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.intlWhatsapp,
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["en", "ur"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: `${siteConfig.domain}${product.image}`,
  size: product.size,
  brand: {
    "@type": "Brand",
    name: siteConfig.brandShort,
  },
  offers: {
    "@type": "Offer",
    url: `${siteConfig.domain}/#products`,
    priceCurrency: "PKR",
    price: product.price,
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="font-body bg-novira-cream text-novira-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
