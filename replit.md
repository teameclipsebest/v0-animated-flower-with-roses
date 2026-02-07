# Happy Rose Day - Next.js Application

## Overview
A romantic "Happy Rose Day" web application built with Next.js, React, Tailwind CSS, and shadcn/ui components. Features a rose garden theme with interactive elements, 3D roses, falling petals, confetti, and personalized messages.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 with tailwindcss-animate
- **UI Components**: shadcn/ui (Radix UI primitives)
- **3D**: React Three Fiber / Three.js
- **Package Manager**: npm (with --legacy-peer-deps due to date-fns peer conflict)

## Project Structure
```
app/              - Next.js App Router pages
  layout.tsx      - Root layout
  page.tsx        - Home page
  globals.css     - Global styles
  rose-buttons/   - Rose buttons page
  roses.tsx       - Roses data/component
components/       - React components
  ui/             - shadcn/ui components
  hero-section.tsx
  rose-garden.tsx
  rose-3d.tsx
  falling-petals.tsx
  confetti.tsx
  love-calculator.tsx
  gallery-preview.tsx
  share-button.tsx
  theme-provider.tsx
```

## Development
- Dev server: `npx next dev -p 5000 -H 0.0.0.0`
- Build: `npm run build`
- Start: `npm run start`

## Configuration Notes
- `next.config.mjs` has `allowedDevOrigins: ['*']` for Replit proxy compatibility
- TypeScript build errors are ignored (`ignoreBuildErrors: true`)
- Images are unoptimized for static hosting compatibility
- Uses `--legacy-peer-deps` for npm install due to react-day-picker/date-fns version conflict
