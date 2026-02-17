# HXR Materials Deployment Guide (Vercel + Namecheap)

This project is a **Next.js 16** app (`App Router`), so the simplest reliable path is **Vercel**.

## 1) Pre-deployment checklist

1. Push this folder to GitHub:
   - Repository root for Vercel should be `hxr-materials-site/`.
2. Confirm required env vars in Vercel:
   - `NEXT_PUBLIC_SITE_URL=https://hxrmaterials.com`
3. Build settings (Vercel auto-detects these from Next.js):
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: leave blank/default for Next.js

## 2) Deploy on Vercel (exact clicks)

1. Go to `https://vercel.com/dashboard`.
2. Click **Add New...** -> **Project**.
3. Click **Import Git Repository** and select your repo.
4. If prompted for root directory, set it to `hxr-materials-site`.
5. In **Environment Variables**:
   - Add key `NEXT_PUBLIC_SITE_URL`
   - Set value `https://hxrmaterials.com`
   - Select environments: Production (and Preview if you want).
6. Click **Deploy**.
7. Wait for first deployment to finish.

## 3) Add domains in Vercel

1. Open your project in Vercel.
2. Click **Settings** -> **Domains**.
3. Add `hxrmaterials.com`.
4. Add `www.hxrmaterials.com`.
5. Set `hxrmaterials.com` as **Primary** domain.

Note: app-level redirect is already configured so `www.hxrmaterials.com/*` permanently redirects to `https://hxrmaterials.com/*`.

## 4) Configure DNS in Namecheap

Open Namecheap -> **Domain List** -> `hxrmaterials.com` -> **Manage** -> **Advanced DNS**.

Create/update these records:

1. `A Record`
   - Host: `@`
   - Value: `76.76.21.21`
   - TTL: `Automatic`
2. `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `Automatic`

Remove conflicting `@` or `www` records that point somewhere else.

## 5) Domain verification

1. Return to Vercel -> **Settings** -> **Domains**.
2. Vercel will show DNS verification state per domain.
3. When DNS propagates, status changes to active/valid.
4. If Vercel asks for a TXT verification record, copy it exactly into Namecheap Advanced DNS, wait, then click **Refresh** in Vercel.

## 6) HTTPS / SSL confirmation

1. In Vercel Domains, verify both domains show certificate/HTTPS enabled.
2. Browser checks:
   - `http://hxrmaterials.com` should become `https://hxrmaterials.com`
   - `http://www.hxrmaterials.com` should become `https://hxrmaterials.com`
3. Optional CLI checks:
   - `curl -I http://www.hxrmaterials.com` (expect `301/308` to apex HTTPS)
   - `curl -I https://hxrmaterials.com` (expect `200`)

## 7) Live smoke tests

After DNS and SSL are active, verify:

1. `https://hxrmaterials.com/`
2. `https://hxrmaterials.com/products/sogut-socketing-resin`
3. `https://hxrmaterials.com/downloads`
4. `https://hxrmaterials.com/manufacturer`
5. `https://hxrmaterials.com/contact`
6. `https://hxrmaterials.com/sitemap.xml`
7. `https://hxrmaterials.com/robots.txt`

## 8) Troubleshooting

1. DNS not resolving yet:
   - Wait up to 5-30 minutes (sometimes longer depending on resolver cache).
2. Wrong page or parked domain:
   - Re-check Namecheap records for conflicting `@`/`www`.
3. Redirect not happening:
   - Ensure latest deployment includes `next.config.ts` redirect rule.
