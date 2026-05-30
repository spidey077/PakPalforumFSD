# Pak Palestine Forum — Faisalabad Chapter

A Next.js site for **PPF Faisalabad**, styled like [pakpalforum.com](https://www.pakpalforum.com/) with bilingual (English / Urdu) support. Links to the **national main site** and separates **Faisalabad vs national** social channels.

## Run locally

```bash
cd pakpalforum-clone
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's included

- Hero image carousel with three slides
- **Seven main domains** (primary sections):
  1. Awareness and Narrative Building
  2. Protests and Public Engagements
  3. Relief Work in Gaza
  4. Virtual Adoption Program
  5. Social Media Campaigns
  6. Students Activation in Unis, Masajid and Madaris (90% youth team)
  7. Boycott Movement
- Contact, volunteer form link, donate info, and social links
- Floating contact / march event bar
- PPF Assistant chat widget
- EN ↔ Urdu language toggle (RTL for Urdu)

Assets are served from `public/images/` (from the national PPF site).

## Links

| Purpose | URL |
|--------|-----|
| National main site | https://www.pakpalforum.com/ |
| Faisalabad Instagram | https://www.instagram.com/pakpalforum_fsd/ |

Edit chapter phone/social in `src/data/site.ts`.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- lucide-react icons

## Note

Admin (`/admin`) and tracker (`/tracker`) routes from the original SPA are not included; this clone focuses on the public marketing site.
