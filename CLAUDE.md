# Kovele Plumbing — Project State

## Pipeline Stage
- **Current:** LAUNCHED — all 8 stages complete
- **Live URL:** https://kovele-plumbing.vercel.app
- **Custom domain:** koveleplumbing.com.au (Vercel configured, awaiting DNS)
- **Sanity Studio:** https://kovele-plumbing.sanity.studio (project m1ex2a5k)
- **Lighthouse:** Performance 65→est.85+ (WebP images, font preloads, chunk splitting) | Accessibility 100 | Best Practices 100 | SEO 100
- **Performance fixes (2026-04-07):** All images converted to WebP (23MB→7.9MB), font preloads, preconnect hints, hero fetchpriority, Vite manual chunks (main bundle 491KB→260KB)
- **Remaining:** Search Console setup, real images (replace AI-generated), blog content

## Decisions Made
- 2026-03-18: Brand approved (CP1) — kovele-brand skill locked
- 2026-03-19: Homepage approved (CP3) — design language locks
- 2026-03-20: True blue confirmed as #3d9be9 (NOT #333D9B from auto-generated design language)
- 2026-03-20: Gold accent #C8961E for CTAs only
- 2026-03-20: Reviews must be REAL (Google + Service Seeking), linked to profiles
- 2026-03-20: ReviewsAggregate component required for reviews display
- 2026-03-20: Sanity CMS required for blog

## Locked Artifacts
- Brand skill: `~/.claude/skills/kovele-brand/SKILL.md`
- Design language: `plan/design-language.md`
- Homepage brief: `plan/pages/homepage.md`
- Service template: `plan/pages/services/_template.md` (to be created after alignment)
- Location template: `plan/pages/locations/_template.md` (to be created after alignment)

## Agent Outputs
- Research: `/Users/danielkovac/Desktop/Roadmap Digital/scrape-pipeline/output/koveleplumbing-com-au/`
- Brand skill: `~/.claude/skills/kovele-brand/SKILL.md`
- Website plan: `plan/website-plan.md`
- Design language: `plan/design-language.md`
- Client photos: `/Users/danielkovac/Desktop/Client Files/Kovele Plumbing/`

## Tech Stack
- Vite + React 19 + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion
- Sanity v3 for blog CMS (project: m1ex2a5k, dataset: production)
- Vercel for deployment

## Dev Commands
```bash
npm run dev          # Vite dev server
npm run build        # TypeScript check + Vite build
npm run lint         # ESLint
npm run preview      # Preview production build
cd sanity && npx sanity dev   # Sanity Studio local
```

## Key URLs
- Google Business: search "Kovele Plumbing Bundoora" on Google Maps
- Service Seeking: https://www.serviceseeking.com.au/profile/54252-kovele-plumbing-pty-ltd
- Phone: 0418 340 501
- Email: steve@koveleplumbing.com.au
- Address: 8 Greenstone Pl, Bundoora VIC 3083

## Brand Colours
- Primary blue: #3d9be9
- Gold accent (CTAs only): #C8961E
- Surface dark: #0c1f36
- Star rating gold: #DAA520

## Review Platforms
- Google: 48 reviews, 4.8 stars
- Service Seeking: 198 reviews, 4.9 stars
- Combined: 246 reviews
