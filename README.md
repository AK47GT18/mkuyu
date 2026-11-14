# Mkuyu Game Lodge

[![Deployment Status](https://img.shields.io/badge/Deployment-Live%20on%20Vercel-success?style=flat-square&logo=vercel)](https://mkuyu-game-lodge.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16%20(Turbopack)-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

Official web portal and booking reservation platform for **Mkuyu Game Lodge**, an intimate 332.15-hectare protected wildlife sanctuary and 100% solar off-grid boutique eco-retreat situated in Salima, Malawi.

🌐 **Live URL**: [https://mkuyu-game-lodge.vercel.app](https://mkuyu-game-lodge.vercel.app/)

---

## 🌿 About Mkuyu Game Lodge

Mkuyu Game Lodge is a boutique Malawian bush destination combining wildlife conservation with luxury eco-hospitality:

- **332.15 ha Protected Reserve**: Indigenous central Malawian savanna, marula groves, and acacia woodlands.
- **Resident Wildlife Sanctuary**: Home to plains zebras, nyalas, waterbucks, ostriches, impalas, and over 180 recorded avian species.
- **100% Off-Grid Solar Energy**: Standalone solar arrays, battery storage, and solar hot water heating with zero carbon footprint.
- **Intimate Capacity**: 5 boutique eco-sanctuaries accommodating up to 12 overnight guests for exclusive, uncrowded wilderness immersion.
- **Safari Experiences**: Certified open 4×4 game drives (dawn *Buck Pursuit* and sunset *Dusk Expeditions*), guided bush tracking, watchtower sunsets, and stargazing.

---

## 🚀 Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack, Partial Prerendering)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with bespoke safari color themes (`forest-green`, `forest-deep`, `light-sage`)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font/google`
- **Iconography**: [React Icons](https://react-icons.github.io/react-icons/) (Feather Icons, Game Icons, Remix Icons)
- **Hosting & CI/CD**: [Vercel](https://vercel.com) with automatic Git deployments

---

## 📁 Project Structure

```text
mkuyu/
├── app/
│   ├── (pages)/
│   │   ├── accommodation/      # Boutique sanctuaries & eco-suites
│   │   ├── activities/         # Safari game drives, walks & day visits
│   │   ├── blog/               # Field stories, wildlife census & tracking guides
│   │   ├── contact/            # Inquiry booking engine & contact details
│   │   ├── dining/             # Thatched dining pavilion & bush cuisine
│   │   ├── gallery/            # High-resolution media showcase
│   │   ├── privacy/            # Privacy policy
│   │   ├── reserve/            # Conservation, biodiversity & history
│   │   └── terms/              # Terms of service & booking conditions
│   ├── components/
│   │   ├── home/               # HeroSlider, ReviewsSection (Google verified)
│   │   ├── layout/             # Navbar, Footer, PageShell
│   │   └── ui/                 # AnimatedCounter, CtaSection, buttons, modals
│   ├── lib/
│   │   └── content.ts          # Centralized lodge data, wildlife facts & rates
│   ├── globals.css             # Theme definitions & global styles
│   ├── layout.tsx              # Root HTML wrapper, metadata & font setup
│   └── page.tsx                # Homepage featuring hero, stats, and teasers
├── public/
│   ├── images/                 # Optimized lodge photography & reserve assets
│   ├── logos/                  # Horizontal and vertical brand logos
│   └── favicons/               # Touch icons and web favicons
├── vercel.json                 # Vercel deployment and framework configuration
├── next.config.ts              # Next.js compiler & experimental config
├── package.json                # Project dependencies and run scripts
└── tsconfig.json               # TypeScript compiler rules
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AK47GT18/mkuyu.git
   cd mkuyu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js dev server with Turbopack |
| `npm run build` | Compiles optimized production static & server routes |
| `npm run start` | Boots the compiled Next.js production server |
| `npm run lint` | Runs ESLint validation across all project files |

---

## 🌍 Key Platform Features

- **Adaptive Header & Navigation**:
  - Transparent hero mode with clean edge-aligned controls.
  - Instant transition into solid white nav on scroll or mobile menu activation.
  - Native floating mobile menu without heavy backdrop dimming.
- **Cinematic Responsive Hero Slider**:
  - Automated crossfade transitions showcasing high-resolution reserve photography.
  - Perfectly balanced mobile layout keeping thumb zones and reserve stats clearly accessible.
- **Verified Reviews Carousel**:
  - Responsive multi-card sliding carousel presenting genuine Google Maps guest reviews (5.0 rating).
- **Interactive Day-Visit & Safari Drive Bookings**:
  - Integrated inquiry forms with direct category routing (`day-visit`, `safari-drive`, `accommodation`).

---

## 📄 License

This repository is proprietary and private to **Mkuyu Game Lodge**. All photography, branding, and reserve imagery are protected by copyright.
