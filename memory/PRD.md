# Brandmefy Landing Page — PRD

## Original Problem Statement
Recreate the Agenius Framer template (https://optimistic-methodologies-359017.framer.app/) for the agency "brandmefy". Replace pricing with a "Speak to us" contact section. Stack: FastAPI + React + MongoDB + Resend.

## Final Design (iter 3)
- All-black layered theme: #050505 / #0a0a0a / #0f0f0f / #141414
- White text, emerald green #10B981 accents
- Fonts: Boldonse (giant hero word), Anton (all section headings), Inter (body), Caveat (handwritten accents)
- Single MENU button → full-screen overlay nav (matches template)
- Logo: lowercase "brandmefy" + green B icon + "Beyond Marketing" tagline

## Sections (15)
Hero (giant BRANDMEFY + stickers) → ValueProps → LogoMarquee → Stats → Services (interactive tabs) → Benefits (bento grid) → Portfolio → Process → BuiltDifferent (comparison) → Testimonials (marquee + video) → About → Team (+ hiring card) → FAQs → SpeakToUs (contact form) → Footer

## Backend
- POST /api/contact: stores submission in MongoDB and sends email via Resend to brandmefymedia@gmail.com
- GET /api/contact: lists submissions
- Resend API key + sender email in /app/backend/.env

## Files
- /app/frontend/src/index.css — design tokens, Boldonse/Anton, marquee/grain/sticker utilities
- /app/frontend/src/App.js — Toaster imported directly from sonner
- /app/frontend/src/pages/Landing.jsx — composes all 15 sections
- /app/frontend/src/components/landing/* — 15 section components + Navbar + Footer
- /app/backend/server.py — /api/contact endpoint
- /app/backend/.env — RESEND_API_KEY, SENDER_EMAIL, RECIPIENT_EMAIL

## Status
- iter 1 (Dec 2025): initial build, fonts Fraunces+Outfit, tomato red accents — passed 8/8 backend, 100% frontend
- iter 2 (Dec 2025): redesign to Oswald + green from logo, cream/dark mix — passed redesign checks
- iter 3 (Dec 2025): full Agenius template match — Boldonse + Anton + emerald #10B981 + all-black layered theme + MENU overlay nav. 17/17 checks passed.

## Backlog
- Replace placeholder portfolio imagery + brand marquee names with real client work
- Verify a custom domain in Resend so emails send from @brandmefy
- Add real video testimonials (currently thumbnails only)
- Case study sub-pages
- SEO meta + OG cards
