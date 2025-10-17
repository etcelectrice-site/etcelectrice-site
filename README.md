# etcelectrice.net — Next.js 14 (App Router) kétnyelvű alap

**HU/RO** lokalizált, ipari stílusú vállalati oldal **Vercel**-re optimalizálva.

## Fő funkciók
- Két nyelv: `hu` és `ro` (i18n)
- Időpontfoglalás beágyazva (Cal.com iframe – cseréld a szervezet/slug-ot)
- Kapcsolati űrlap → **/api/contact** (Resend e-mail küldés)
- TailwindCSS, reszponzív felépítés
- SEO: canonical + hreflang, OG meta

## Telepítés
1. `npm i`
2. `.env.local` létrehozása a `RESEND_API_KEY`-jel
3. `npm run dev`

## Deploy Vercel-re
- Importáld a repót Vercelbe, állítsd be az **Environment Variables**-t:
  - `RESEND_API_KEY`
- Custom domain: **www.etcelectrice.net**
- Ajánlott: `mail.etcelectrice.net` aldomain a küldő (Resend) DNS rekordjaihoz (DKIM/SPF).

## Foglalás / automatizálás
- Cseréld az iframe URL-t a saját **Cal.com** (vagy Calendly) linkre.
- Webhookokkal (Cal.com → Vercel Functions) automatizálható:
  - naptárbejegyzés + .ics csatolmány,
  - emlékeztető e-mail,
  - jegyzőkönyv-generálás és számlázás (külső API-k).

## Megjegyzés
- A villámvédelem és földelés szövegek **SR EN** hivatkozásokat használnak (Románia).
- Dátum: 2025-10-17
