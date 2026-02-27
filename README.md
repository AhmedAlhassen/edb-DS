# EDB Sudan — Export Development Bank Website

A full-stack banking website for Sudan's Export Development Bank (EDB), built with **Next.js 14**, **Tailwind CSS** (atomic design), and **Strapi CMS** backend.

---

## Architecture

```
edb-DS/
├── frontend/          ← Next.js 14 website (App Router)
├── backend/           ← Strapi 4 headless CMS
└── packages/          ← Original EDB design system packages
    ├── edb-tokens/    ← Design tokens
    ├── edb-ui/        ← Component library
    ├── edb-icons/     ← Icon library
    ├── docs/          ← Docusaurus documentation
    └── storybook/     ← Component development
```

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router, Server Components)
- **Styling:** Tailwind CSS 3.x with custom EDB design tokens
- **Components:** Atomic Design (Atoms → Molecules → Organisms → Templates → Pages)
- **UI Primitives:** Radix UI
- **Icons:** Lucide React
- **Utilities:** class-variance-authority (CVA), clsx, tailwind-merge
- **Language:** TypeScript

### Backend
- **CMS:** Strapi 4 (headless CMS)
- **Database:** SQLite (dev) / PostgreSQL (production)
- **API:** REST API
- **Plugins:** Users & Permissions, i18n (Arabic/English)

---

## Quick Start

### 1. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: **http://localhost:3000**

### 2. Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

Strapi admin panel: **http://localhost:1337/admin**

> On first run, you'll be prompted to create an admin account.
> Demo data (news articles, exchange rates, branches) will be seeded automatically.

---

## Frontend Structure

```
frontend/src/
├── app/                    ← Next.js App Router pages
│   ├── page.tsx            ← Home page
│   ├── about/page.tsx      ← About Us page
│   ├── services/
│   │   ├── page.tsx        ← Services overview
│   │   ├── corporate-banking/page.tsx
│   │   ├── trade-finance/page.tsx
│   │   ├── export-finance/page.tsx
│   │   └── digital-banking/page.tsx
│   ├── news/page.tsx       ← News & updates
│   ├── contact/page.tsx    ← Contact us form
│   └── not-found.tsx       ← 404 page
│
├── components/             ← Atomic design components
│   ├── atoms/              ← Smallest, most reusable units
│   │   ├── Button.tsx      ← Button (filled, tonal, outlined, ghost)
│   │   ├── Badge.tsx       ← Status/category badges
│   │   ├── Typography.tsx  ← Heading, Text, Caption, Divider
│   │   ├── Input.tsx       ← Input, Textarea with validation
│   │   ├── Spinner.tsx     ← Spinner, Progress, Skeleton
│   │   └── index.ts
│   ├── molecules/          ← Compound components
│   │   ├── Card.tsx        ← Card, ServiceCard, StatCard
│   │   ├── NavItem.tsx     ← NavLink, NavGroup, Breadcrumbs
│   │   ├── Alert.tsx       ← Alert notifications
│   │   └── index.ts
│   ├── organisms/          ← Complex page sections
│   │   ├── Header.tsx      ← Sticky header with mobile nav
│   │   ├── Footer.tsx      ← Footer with links and compliance
│   │   ├── Hero.tsx        ← Hero section + exchange rate ticker
│   │   └── index.ts
│   └── templates/
│       └── MainLayout.tsx  ← Main page layout wrapper
│
└── lib/
    ├── utils.ts            ← Utility functions (cn, formatDate, etc.)
    └── strapi.ts           ← Strapi API client with TypeScript types
```

---

## Backend Content Types

| Collection | Description |
|------------|-------------|
| `news-articles` | News and press releases (bilingual EN/AR) |
| `services` | Banking service descriptions (bilingual) |
| `exchange-rates` | Daily currency exchange rates |
| `branches` | Branch locations and contact details |
| `contact-submissions` | Website contact form submissions |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, why EDB, news |
| `/about` | Company history, leadership, governance |
| `/services` | Services overview |
| `/services/corporate-banking` | Corporate banking products |
| `/services/trade-finance` | Trade finance (LC, guarantees, collections) |
| `/services/export-finance` | Export financing programs |
| `/services/digital-banking` | Digital banking platform |
| `/news` | News articles list |
| `/contact` | Contact form and office locations |

---

## Design System

The website implements the **EDB Design System** with:

- **Color Palette:** Primary blue (#1D4FD7) with semantic colors for success/warning/error
- **Typography:** Inter (English) + Noto Sans Arabic (Arabic/RTL)
- **Dark Mode:** Full dark mode support via CSS custom properties
- **RTL Support:** Full Arabic language and right-to-left text direction
- **Accessibility:** WCAG AA compliant, keyboard navigation, ARIA labels

---

## Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Backend (`.env`)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

---

## Design System Packages

```bash
# Install
pnpm i

# Build all packages
pnpm -r build

# Storybook
pnpm --filter storybook dev

# Documentation
pnpm --filter docs start
```

---

## License

© Export Development Bank Sudan. All rights reserved.
