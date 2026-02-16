# HXR Materials Site

Minimal, technical, trust-focused website framework for HXR Materials built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production verification:

```bash
npm run build
npm run start
```

## Content Editing

All page copy is stored in `src/content`.

- Brand and shared site info: `src/content/brand.ts`
- Home page copy: `src/content/home.ts`
- Product data: `src/content/products/sogut.ts`
- Downloads list: `src/content/downloads.ts`
- Manufacturer page: `src/content/manufacturer.ts`
- Contact page: `src/content/contact.ts`

## PDF Placement

Place downloadable PDFs in `public/downloads`.

Expected files:

- `public/downloads/HXR_SOGUT_Technical_Overview.pdf`
- `public/downloads/SOGUT_SDS_Component_A.pdf`
- `public/downloads/SOGUT_SDS_Component_B.pdf`

Update labels/paths in `src/content/downloads.ts` if filenames change.

## Vercel Deployment

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep defaults for Next.js framework detection.
4. Build command: `npm run build`.
5. Output setting: default Next.js output.
6. Deploy and verify routes:
   - `/`
   - `/products/sogut-socketing-resin`
   - `/downloads`
   - `/manufacturer`
   - `/contact`
7. Add custom domain in Vercel project settings if needed.
