# Build Order: Kovele Plumbing

## Stage 1: Prospect Research — COMPLETE
- [x] prospect-data.json generated
- [x] summary.md generated
- [x] Digital Growth Blueprint PDF generated
- Completed: 2026-03-14

## Stage 2: Brand Build — COMPLETE
- [x] Brand skill created (kovele-brand)
- [x] CP1: Dan approved brand
- Completed: 2026-03-18

## Stage 3: Website Plan — COMPLETE (retroactive)
- [x] website-plan.md created (from research output)
- [x] plan/ directory populated
- [x] Page briefs for all 31 pages
- Completed: 2026-03-19 (generated), 2026-03-20 (brought into project)

## Stage 4: Design Discovery — PARTIAL
- [ ] Dan provided reference URLs — SKIPPED (Dan's decision)
- [x] Design language document created (auto-generated, then corrected)
- [x] Imagery brief created
- [ ] Image library built with real/approved images — PENDING (Nano Banana generation)
- [ ] CP2: Dan approves design direction — needs review
- Note: Design language corrected 2026-03-20 (blue #3d9be9, not #333D9B)

## Stage 4.5: Design Direction — COMPLETE (retroactive)
- [x] Design briefs per page generated (from research output)
- [x] Component:variant selections documented
- Brought into project: 2026-03-20

## Stage 5: Homepage Build — COMPLETE
- [x] Conversion architecture
- [x] Homepage copy
- [x] Homepage engineering
- [x] CP3: Dan approved homepage
- Completed: 2026-03-19

## Stage 6: Template Pages — COMPLETE
- [x] All 30 pages built (code exists)
- [x] Real reviews integrated (Google 48 reviews 4.8★ + Service Seeking 198 reviews 4.9★)
- [x] ReviewsAggregate component implemented (summary-cards variant with platform links)
- [x] All pages using real ReviewsAggregate (Homepage, Reviews, Services, About, all service + location pages)
- [x] Sanity CMS client configured (@sanity/client + @portabletext/react)
- [x] Blog post detail page created (/blog/:slug route)
- [x] Blog schema created (sanity/schemas/post.ts)
- [x] Fallback data system (works without Sanity connected)
- [x] Sanity project created (m1ex2a5k, dataset: production)
- [x] Sanity Studio deployed (https://kovele-plumbing.sanity.studio)
- [x] JSON-LD structured data on all pages (LocalBusiness, Service, FAQ, Breadcrumb)
- [ ] Image library generated — PENDING (prompts delivered, Dan generating via Nano Banana)
- [ ] Blog content published to Sanity — IN PROGRESS
- Completed: 2026-03-20

## Stage 7: Polish — COMPLETE
- [x] SEO layer: meta tags, JSON-LD, sitemap.xml, robots.txt
- [x] OG tags + Twitter card meta
- [x] Accessibility: 100/100 Lighthouse (contrast fixed, heading order fixed)
- [x] Best Practices: 100/100 Lighthouse
- [x] SEO: 100/100 Lighthouse
- [x] Performance: 65/100 (images compressed from 225MB to 11MB, will improve with real WebP photos)
- [x] Image optimization: all images resized to 1200px max, JPEG quality 75
- [x] CTA contrast ratio fixed (5.06:1, passes WCAG AA)
- [x] Footer heading semantics fixed (h4 → p)
- Completed: 2026-03-20

## Stage 8: Launch — COMPLETE
- [x] Vercel deployment (https://kovele-plumbing.vercel.app)
- [x] Custom domain configured (koveleplumbing.com.au + www — awaiting DNS)
- [x] Sanity env vars set on Vercel
- [x] GA4 placeholder added (needs real measurement ID)
- [x] vercel.json SPA routing + cache headers
- [ ] DNS A records pointed (76.76.21.21) — REQUIRES DAN
- [ ] GA4 measurement ID — REQUIRES DAN
- [ ] Google Search Console verification — REQUIRES DAN (after DNS)
- Completed: 2026-03-20

## Remaining Human Tasks
- [ ] Point DNS A records to 76.76.21.21 (registrar)
- [ ] Replace G-XXXXXXXXXX with real GA4 measurement ID
- [ ] Verify domain in Google Search Console, submit sitemap
- [ ] Upload real images from Nano Banana (prompts delivered)
- [ ] Review and approve blog content
