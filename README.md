# BadutZY Studio Website

A one-page site for BadutZY Studio, a solo indie game development studio.

This project was converted from a **TanStack Start** app into a **plain Vite + React SPA**
(standard `index.html` entry point, client-side rendering only), ready to deploy on **Vercel**.

## What changed in the migration

- Removed `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`,
  `@tanstack/react-query`, `nitro`, and the `@lovable.dev/vite-tanstack-config` preset.
- Removed the server-only files (`src/server.ts`, `src/start.ts`, the SSR error-page/error-capture
  helpers, `src/routes/**`, `src/router.tsx`, `src/routeTree.gen.ts`) since there's no server
  runtime anymore — this is a static SPA.
- Added a standard `index.html` at the project root (Vite's default entry point) with the page's
  `<title>`, meta tags, Open Graph tags, and font links moved in from the old root route.
- Added `src/main.tsx` as the React entry point (`createRoot(...).render(<App />)`), and
  `src/App.tsx`, which is the old `src/routes/index.tsx` page turned into the single top-level
  component.
- Kept all UI: `src/components/site/*`, `src/components/ui/*` (shadcn/radix components),
  `src/data/games.ts`, `src/hooks/use-mobile.tsx`, `src/lib/utils.ts`, and `src/styles.css`
  (Tailwind v4) unchanged.
- Switched `vite.config.ts` to a plain `defineConfig` with `@vitejs/plugin-react`,
  `@tailwindcss/vite`, and `vite-tsconfig-paths` (previously handled implicitly by the Lovable
  TanStack preset).
- Added a `vercel.json` with a SPA rewrite (`/(.*) -> /index.html`) so client-side anchor
  navigation / any future routing works correctly on Vercel.
- Added `tsconfig.app.json` / `tsconfig.node.json` (standard Vite split config) alongside a
  slimmed-down root `tsconfig.json`.

### About the logo

The original project referenced the logo through
`src/assets/badutzy-logo.png.asset.json`, a small JSON file pointing at an image hosted on
Lovable's asset CDN — the actual PNG bytes were **not** included in the exported project. All
logo references now point to `/badutzy-logo.png` in `public/`. As a placeholder, that file is
currently a copy of `public/favicon.png`. **Replace `public/badutzy-logo.png` with your real,
full-resolution logo file** before deploying.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Build

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to `dist/`.

## Deploying to Vercel

1. Push this project to a Git repository.
2. Import it in Vercel — the defaults (Framework: Vite, Build Command: `npm run build`,
   Output Directory: `dist`) work out of the box.
3. Or deploy from the CLI:

   ```bash
   npm i -g vercel
   vercel
   ```
