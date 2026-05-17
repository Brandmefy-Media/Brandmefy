# Brandmefy Landing Page — PRD

## Original Problem Statement
Build a landing page replicating https://optimistic-methodologies-359017.framer.app/ (Agenius Framer template) for an agency called "Brandmefy" (capital B). Remove the Pricing section; replace with a professional "Speak to us" contact section. Black-dominant theme with warm cream + tomato red accents. No em dashes. Same typography vibe (serif display + clean sans).

## Stack
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + sonner + axios
- Backend: FastAPI + Motor (MongoDB) + Resend SDK
- Fonts: Fraunces (display serif) + Outfit (body)

## User Personas
- Founders / marketing leads looking for a creative agency
- Potential agency hires (Team section CTA)

## Core Requirements (static)
- Faithful section-for-section recreation of the Agenius template with all motion
- Pricing section replaced by "Speak to us" contact form (Name, Email, Company, Message)
- Contact form posts to /api/contact, stores in MongoDB, emails Resend → brandmefymedia@gmail.com
- Black majority + Warm Cream + Tomato Red + Charcoal palette
- No em dashes anywhere in copy
- Every interactive element has data-testid

## Implemented (Dec 2025)
- 16 sections: Navbar, Hero (with animated headline + word marquee), Value Props (3 cards), Brand Marquee, Stats with animated counters, Services (interactive tab/accordion with detail panel), Benefits (bento grid 7 cards), Portfolio (4-card grid), Process (4 steps), Built Different (comparison), Testimonials (infinite marquee), About (oversized narrative), Team (3 members + Hiring card), FAQs (shadcn accordion), Speak to us (contact form), Footer (with oversized brand text)
- /api/contact endpoint: validates payload, stores submission in MongoDB, sends transactional email via Resend, returns status='sent' or 'stored'
- /api/contact GET returns list (no _id leak)
- Smooth scroll navigation, sticky glass navbar, mobile menu
- 100% test pass (8/8 backend pytest, all critical frontend flows)

## Prioritized Backlog
- P1: Wire portfolio cards to real case-study pages (when client logos/cases arrive)
- P1: Add JSON-LD schema + Open Graph meta tags for SEO/social previews
- P2: CMS or markdown-backed blog section for content marketing
- P2: Cookie consent banner (GDPR)
- P2: Light analytics (Plausible / GA4) hookup
- P3: Verify a custom domain in Resend so emails come from @brandmefy.com instead of onboarding@resend.dev

## Files
- /app/backend/server.py — API routes (/api/, /api/contact, /api/status)
- /app/backend/.env — MONGO_URL, DB_NAME, RESEND_API_KEY, SENDER_EMAIL, RECIPIENT_EMAIL
- /app/frontend/src/pages/Landing.jsx — single page composition
- /app/frontend/src/components/landing/*.jsx — 16 section components
- /app/frontend/src/index.css — design tokens, fonts, marquee/grain utilities

## Next Tasks
- Replace placeholder portfolio imagery with real case studies when client provides
- Add verified domain in Resend dashboard so emails send from brandmefy.com
- Consider adding case study sub-pages
