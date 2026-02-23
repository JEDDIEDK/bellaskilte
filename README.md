# Bellaskilte Next.js Redesign

Moderne, farverig og responsiv version af Bellaskilte med App Router, TypeScript og Tailwind.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-stil komponenter (`components/ui/*`)
- Framer Motion (klar til mikroanimationer)

## Kom i gang
```bash
npm install
npm run dev
```

Åbn: `http://localhost:3000`

## SEO
- Side-specifik metadata
- OpenGraph i root layout
- `app/sitemap.ts`
- `app/robots.ts`
- LocalBusiness schema på forsiden

## Migrering (status)
Migreret fra sitemap:
- `/`
- `/om-bella-skilte-print-a-s.aspx`
- `/kontakt.aspx`
- Alle `/skilte/*.aspx`
- Alle `/reklame/*.aspx`

Ny struktur bruger rene URL’er, med 301 redirects i `next.config.ts`.

## Funktioner
- Mobil først + sticky kontaktknapper
- Kontaktformular med validering + success/error states
- Click-to-call + mailto
- Google Maps integration
- FAQ accordion
- Tracking hooks til GA4 + Meta Pixel via env vars:
  - `NEXT_PUBLIC_GA4_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`

## TODO
- Kobl kontaktformular til backend/mail-service
- Migrér flere originale galleri-billeder (en del ligger i legacy ViewState)
- Tilføj flere dokumenterede alt-tekster fra originalt billedmateriale
- Kør Lighthouse og justér efter miljø/deploy

## Deploy
Kan deployes på Vercel direkte.
