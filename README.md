# Karthik Portfolio (Next.js)

Production-ready personal portfolio for a Data Scientist / Product Analytics professional.

## Tech Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Static export compatible

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build static output:
   ```bash
   npm run build
   ```

## Resume Upload Instructions
Place your latest PDF at:
- `public/Karthik_Kandhipati_Resume.pdf`

The `/resume` page automatically embeds and serves this file for download.

## Content Model
All website content is generated from:
- `data/resumeData.ts`

Update this file to refresh profile details, case studies, metrics, skills, and education.

## GitHub Deployment
This repo uses static export and GitHub Pages deployment.

1. Push to `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. Static site is published from the generated `out/` directory.

## Base Path
`next.config.mjs` automatically enables basePath and assetPrefix for GitHub Actions so links and assets resolve correctly on GitHub Pages.
