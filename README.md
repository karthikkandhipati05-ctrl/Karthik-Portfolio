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

## If `npm install` fails with `403 Forbidden`
This is usually an environment policy/proxy issue rather than a project code issue.

Try:
```bash
unset HTTP_PROXY HTTPS_PROXY http_proxy https_proxy
npm config set registry https://registry.npmjs.org/
npm install
```

If your company network blocks npm, run the install/build in GitHub Actions or a local network that allows `registry.npmjs.org`.

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
The project reads `NEXT_PUBLIC_BASE_PATH` for GitHub Pages compatibility.

- Local dev: leave it empty.
- GitHub Pages: set to `/Karthik-Portfolio`.
