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
- `products` — sizes, descriptions, images, and **prices** (currently blank — add a string like `"Rs. 1,500"` once you have pricing)
- `galleryImages`, `heroImage` — which product photos appear where
- `navLinks` — header/footer navigation

WhatsApp message templates live in `lib/whatsapp.ts`.

## Product images

Real product photos are in `public/images/products/`:

- `novira-150ml.jpg`
- `novira-200ml.jpg`
- `novira-combined.jpg` (both bottles together)

To swap in new photos later, replace these files (keep the same names) or update the paths in `lib/siteConfig.ts`.

## Build

```bash
npm run build
npm run start
```
