# Midhula Farm Hut — Official Website Development Competition Entry

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Swiper.js](https://img.shields.io/badge/Swiper-Touch_Carousels-6332F6?style=for-the-badge&logo=swiper)](https://swiperjs.com/)
[![WhatsApp Order](https://img.shields.io/badge/WhatsApp-Live_Order_Ready-25D366?style=for-the-badge&logo=whatsapp)](https://wa.me/918129120437)

---

## 🏆 Competition & Project Overview

- **Client / Brand:** **Midhula Farm Hut** (Founded by Sajith — `@s_a_j_i_t_h_b_o_y`)
- **Location:** Nedupuzha, Thrissur, Kerala, India — 680007
- **Official Socials:**
  - Instagram: [@midhula_farm_hut](https://www.instagram.com/midhula_farm_hut/?hl=en) (**28.7K+ Followers**, **1,968+ Posts**)
  - YouTube: [@midhula_farm_hut](https://www.youtube.com/@midhula_farm_hut) (**75,000+ Subscribers**)
- **Organized by:** `tech_by_richard`
- **Scope:** Creative Homepage development showcasing brand assets, Instagram video/photo integration, standardized design system, and seamless WhatsApp ordering.
- **Full Project Value:** **₹35,000** (Winner develops the full platform: dynamic catalog, admin CRUD panel, category management, and booking workflow).

---

## 🎨 Clean UI Design System & Brand Palette

The user experience has been designed with a **clean, high-contrast, modern aquatic theme** (White, Black, Ocean Blue, and Ruby Red):

| Token Name | Hex Code | Purpose & Brand Role |
| :--- | :--- | :--- |
| **Clean White** | `#FFFFFF` | Primary background canvas; maximum breathing room & crisp readability |
| **Ocean Royal Blue** | `#2563EB` | Primary brand accent; represents clean spring water & Electric Blue Crayfish |
| **Radiant Ruby Red** | `#DC2626` | Albino Full Red guppy highlight, urgency tags, and featured badges |
| **Deep Obsidian Black** | `#09090B` | High-contrast headings, header bar, and razor-sharp typography |
| **WhatsApp Direct Green** | `#25D366` | Official instant 1-click booking and order confirmation CTAs |

### Typography Hierarchy & Sizing Standard
- **Display Font:** `Outfit` / `Plus Jakarta Sans` with tight tracking and high contrast weights (600, 700, 800) for headlines.
- **Body Font:** Standard `Plus Jakarta Sans` (14px–16px, line-height 1.6) ensuring readability across mobile viewports.
- **Micro-Badges & Meta:** Monospace & bold uppercase pills (10px–12px) with clean borders.

---

## 📱 Interactive Homepage Features

### 1. High-Impact Hero with Live Kerala Hatchery Stats
- Live counter metrics: **28.7K+** Instagram Community, **75K+** YouTube, **15,000+** Safe Parcels Dispatched, **99.8%** Live Arrival Rate.
- Active Thrissur Farm Weather & Spring Water Condition indicator.
- Featured Strain Spotlight card with real-time pair booking.

### 2. Touch-Native Instagram Reels Carousel (`Swiper.js`)
Integrates the **real Instagram reels** provided in the competition brief:
1. `https://www.instagram.com/p/DfZzTJ5xxIG/` — Baby Electric Blue Crayfish Clutch & Feeding
2. `https://www.instagram.com/p/DfKslgZxvrh/` — Albino Full Red Dumbo Ear Guppy High Fin Trio
3. `https://www.instagram.com/p/Dewd87uRrWd/` — Nedupuzha Farm Walkthrough & 60+ Outdoor Bio-Tanks
4. `https://www.instagram.com/p/DeUTLPMxsay/` — 72-Hour Pure Medical Oxygen & Thermocol Live Delivery Process
5. `https://www.instagram.com/p/DZ2kOBBRlcT/` — Giant Cherax Quadricarinatus (Australian Redclaw)
- Each reel features a **Reel Modal** with simulated video playback, audio toggle, view/like counters, and 1-click WhatsApp inquiry.

### 3. Live Stock & Breed Catalog with Instant Filtering
- Category tabs: **All Stock**, **Champion Guppies**, **Crayfish & Lobsters**, **Exotic Cichlids**, **Aquatic Flora**, and **Care & Feed**.
- Live search input for instant filtering by breed name or water parameter.
- **Quick View Modal** with comprehensive water parameters (pH, Temp, Hardness), dietary recommendations, pair quantity selector, and instant WhatsApp booking.

### 4. 4-Stage 100% Live Delivery Guarantee Protocol
- Step 1: 24-Hour Pre-Fasting & Water Conditioning (ammonia-free transport)
- Step 2: 70% Pure Medical-Grade Oxygen with Double Leakproof Polybags
- Step 3: High-Density EPS Insulated Thermocol Vault
- Step 4: Express Air & Rail Dispatch with **100% Dead-on-Arrival (DOA) replacement warranty** (30-second continuous unboxing video policy).

### 5. Interactive WhatsApp Order & Shipping Estimator
- Allows customers to select any strain, adjust pairs/units, pick their delivery zone (**Kerala Overnight**, **South India**, or **Pan-India Express**), and view a transparent breakdown including courier and thermocol box fees.
- Generates a cleanly formatted WhatsApp message ready to send to Sajith (`+91 8129120437`).

### 6. The Midhula Farm Story & Heritage
- Highlights Sajith's selective breeding in Nedupuzha, Thrissur, Kerala.
- Reared with green water, natural live culture (moina, daphnia, artemia), and fresh spring water under Kerala's tropical sunshine.
- Explains the origin: Named affectionately after Midhula.

### 7. Real Customer Love & WhatsApp Proof Wall
- Verified reviews and unboxing testimonials from hobbyists across Mumbai, Kolkata, Bangalore, Kochi, and Coimbatore.
- Verification badges linked to real WhatsApp deliveries.

### 8. Hatchery Instagram Photo Grid
- Features the requested image post: `https://www.instagram.com/p/Da8ltD6E0h6/?hl=en&img_index=1` (Championship Albino Full Red Pure Line Female with fry) alongside authentic farm captures.

---

## 🛠️ Project Structure & Component Architecture

```
midula-farm-hut-2026/
├── notes/
│   └── Midhula_Farm_Hut_Client_Proposal.pdf  # Generated client proposal PDF
├── public/                                   # Static assets & icons
├── scripts/
│   └── generate-pdf.mjs                      # PDF generation script using jsPDF
├── src/
│   ├── app/
│   │   ├── globals.css                       # Theme tokens, scrollbar & styles
│   │   ├── layout.tsx                        # Root layout, fonts & metadata
│   │   └── page.tsx                          # Full feature-rich Homepage
│   ├── components/
│   │   ├── farm/                             # Farm domain components
│   │   │   ├── CustomerProofWall.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeritageStorySection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── InstagramFeedGrid.tsx
│   │   │   ├── LiveDeliveryGuarantee.tsx
│   │   │   ├── LiveStockSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── QuickViewModal.tsx
│   │   │   ├── ReelModal.tsx
│   │   │   ├── VideoReelsSection.tsx
│   │   │   └── WhatsAppOrderCalculator.tsx
│   │   ├── icons.tsx                         # Custom SVG icons (Instagram, YouTube, WhatsApp)
│   │   └── ui/                               # Atomic reusable UI components
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── modal.tsx
│   │       └── tabs.tsx
│   ├── data/
│   │   └── farmData.ts                       # Typed datasets for breeds, reels, FAQs, stats
│   └── lib/
│       └── utils.ts                          # cn helper, INR formatting & WhatsApp generator
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js `v20+`
- npm `v10+`

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the homepage.

### Production Build
```bash
npm run build
npm run start
```

### Regenerate Customer Proposal PDF
```bash
node scripts/generate-pdf.mjs
```
The output PDF is saved to `notes/Midhula_Farm_Hut_Client_Proposal.pdf`.

---

## 🎯 Roadmap for the Full ₹35,000 Project Phase

1. **Dynamic Product Detail Routes (`/breeds/[slug]`):** Multi-angle photo sliders, broodstock pedigree tree, water parameter meters, and compatible tank-mate recommendations.
2. **Admin Panel with Full CRUD Operations:** Secure dashboard for Sajith to add new strains, adjust pair prices, toggle stock ("In Stock / Limited / Sold Out"), and upload photos directly.
3. **WhatsApp Automated Notification Engine:** Automated order status updates, air cargo AWB tracking numbers, and live unboxing video verification system.
4. **Interactive Farm Visit Scheduler:** Online booking for walk-in visits to the Nedupuzha Thrissur facility with automated Google Maps directions.

---

**Developed with precision for Midhula Farm Hut & tech_by_richard Competition.**
