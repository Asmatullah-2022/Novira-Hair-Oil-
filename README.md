# Novira Hair Oil — Website

Premium, mobile-first marketing site for Novira Hair Oil, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. WhatsApp is the sole ordering channel.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing site content

Almost everything you'd want to change lives in `lib/siteConfig.ts`:

- `siteConfig` — brand name, WhatsApp number, page title/description
- `products` — size, description, image, and pricing (`price`, `deliveryCharges`, `total` in PKR)
- `galleryImages`, `heroImage` — which product photo appears where
- `navLinks` — header/footer navigation

WhatsApp message templates live in `lib/whatsapp.ts`.

## Product images

The real product photo is in `public/images/products/`:

- `novira-120ml.jpg`

To swap in a new photo later, replace this file (keep the same name) or update the path in `lib/siteConfig.ts`.

## Build

```bash
npm run build
npm run start
```
