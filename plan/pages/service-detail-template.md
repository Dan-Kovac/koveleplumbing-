# Design Brief: Kovele Plumbing — Service Detail Template

> Inherits from: `plan/design-language.md`
> Applies to: /blocked-drains, /gas-hot-water, /roof-plumbing, /general-plumbing, /toilet-repairs, /bathroom-renovations
> Conversion goal: Phone call or quote request for this specific service

---

## Visual Rhythm Map

```
[Navbar:with-topbar — white bg, phone # in topbar]
  ↓
[Hero:split — DARK gradient, service-specific headline + image]
  ↓ py-10
[Stats:inline — LIGHT (white), service-relevant stats]
  ↓ py-14
[FeatureSplit:with-list — ACCENT (blue wash), what this service includes]
  ↓ py-14
[Process:numbered — LIGHT (white), how we handle this service]
  ↓ py-14
[Testimonials:featured — DARK (#1A1E4A), one strong service-specific review]
  ↓ py-14
[FAQ:two-column — LIGHT (white), 6-8 service-specific FAQs]
  ↓ py-14
[ServiceArea:grid — ACCENT (blue wash), suburbs served for this service]
  ↓ py-16
[CTA:simple — DARK gradient, service-specific CTA]
  ↓
[Footer:standard — DARK]
```

**Rhythm check:** dark → light → accent → light → dark → light → accent → dark → dark. Clean alternation with the testimonial as a dark visual break mid-page.

---

## Section Plan

### 1. Navbar:with-topbar
- Same as homepage. No changes per service page.

### 2. Hero:split
- **Component:** hero, split variant
- **Why split:** Each service page shows a relevant work image on the right. The split hero makes the service tangible — "this is what we fix" rather than an abstract headline.
- **Background:** Left: linear-gradient #1A1E4A → #282F7A. Right: service-specific image, no overlay.
- **Spacing:** py-14 md:py-18
- **Animation:** Same as homepage hero (headline cascade 0.1-0.3s delay)
- **Typography:** Same as homepage hero. H1 is service-specific.
- **Imagery per page:**
  - /blocked-drains: CCTV drain camera in action, underground pipe view, Melbourne backyard
  - /gas-hot-water: Plumber working on a hot water system mounted on exterior wall
  - /roof-plumbing: Plumber on a terrace house roof, gutters visible, Melbourne skyline
  - /general-plumbing: Plumber under a kitchen sink, neat tools laid out
  - /toilet-repairs: Close-up of modern bathroom, new toilet installation
  - /bathroom-renovations: Stunning finished bathroom, tiles gleaming, modern fixtures
- **Customisation:**
  - Badge above H1: service category (e.g., "Drain services", "Gas & hot water")
  - H1: Service-specific, keyword-targeted, 6-8 words
  - Subtitle: 1-2 sentences about the service + key differentiator
  - Same dual CTA pattern: "Call 0418 340 501" + "Get a Free Quote"
  - Trust badges: service-relevant (e.g., "CCTV equipped" for drains, "Licensed gas fitter" for gas)
  - Breadcrumb above badge: Home > Services > [Service Name] — text-xs text-white/50

### 3. Stats:inline
- **Component:** stats, inline variant
- **Background:** bg-white
- **Spacing:** py-10 md:py-12
- **Customisation:** Service-relevant stats. Examples:
  - Blocked drains: "Same-Day Service" | "CCTV Equipped" | "4.85★ Rating" | "40+ Years"
  - Gas/hot water: "All Brands" | "Licensed Gas Fitter" | "Same-Day Repairs" | "4.85★ Rating"
  - Bathroom reno: "150+ Bathrooms" | "Full Project Management" | "Licensed & Insured" | "40+ Years"

### 4. FeatureSplit:with-list
- **Component:** feature-split, with-list variant
- **Why with-list:** Service inclusions as a scannable checklist. Builds confidence that this isn't a generic "we do plumbing" page.
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-14 md:py-16
- **Imagery:** Service-specific work photo on right side. Medium shot of Steve or Nick mid-task.
- **Customisation:**
  - Heading: "What's included in our [service] service"
  - 5-6 checklist items specific to the service
  - Blue check icons, same style as homepage
  - Image: rounded-xl shadow-lg

### 5. Process:numbered
- **Component:** process, numbered variant
- **Background:** bg-white
- **Spacing:** py-14 md:py-16
- **Customisation:**
  - Heading: "How we handle your [service type]"
  - 4-5 steps specific to the service (e.g., drain: inspect → diagnose → clear → test → advise)
  - Same visual treatment as homepage (orange number badges, connecting line)
  - For bathroom renovations ONLY: use process:timeline variant instead (more detail per step for a renovation journey)

### 6. Testimonials:featured
- **Component:** testimonials, featured variant
- **Why featured:** Service detail pages get ONE powerful quote, not a grid. The featured variant gives it maximum visual weight. Agent guide: "Best for a single powerful quote. High visual impact."
- **Background:** bg-brand-dark (#1A1E4A) — dark section creates visual break
- **Spacing:** py-14 md:py-16
- **Typography:** Quote: text-xl md:text-2xl italic text-white/90 leading-relaxed. Name: text-base font-semibold text-white. Suburb: text-sm text-white/60.
- **Customisation:**
  - Pick the review that most specifically mentions THIS service
  - Large quote marks in orange/20 opacity as decorative element
  - 5 gold stars above the quote
  - Reviewer name + suburb underneath
  - Centered layout, max-w-3xl

### 7. FAQ:two-column
- **Component:** faq, two-column variant
- **Why two-column:** Service pages have 6-8 specific FAQs. Two columns reduce scroll depth. Agent guide: "Best for pages with many FAQs (8+). Two columns reduce scroll depth."
- **Background:** bg-white
- **Spacing:** py-14 md:py-16
- **Customisation:**
  - Heading: "Common questions about [service]"
  - 6-8 FAQs specific to the service (cost, timeline, emergency, brands, warranty)
  - Split 50/50 across two columns on desktop. Single column on mobile.
  - FAQ schema markup for rich snippets

### 8. ServiceArea:grid
- **Component:** service-area, grid variant
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-14 md:py-16
- **Customisation:**
  - Heading: "[Service] across Melbourne"
  - Show 8 suburbs most relevant to this service
  - Each card links to /plumber-[suburb]
  - Subtitle: "Based in Bundoora, we service all these areas and more."

### 9. CTA:simple
- **Component:** cta, simple variant
- **Background:** linear-gradient #1A1E4A → #282F7A
- **Spacing:** py-16 md:py-20
- **Customisation:**
  - Service-specific headline: "Need your [problem] fixed? Call Steve."
  - Phone number in orange, large
  - Same dual CTA as homepage

### 10. Footer:standard
- Same as homepage.

---

## Per-Page Overrides

### /bathroom-renovations (special)
- **Process variant:** timeline instead of numbered — renovation journey needs more detail per step
- **Add section:** Gallery:grid after the feature-split section
  - Background: bg-white
  - 6-8 before/after images with category filter (bathroom types)
  - Masonry was tempting but grid is cleaner for before/after pairs
- **Add section:** Testimonials:grid instead of featured — show 3 renovation reviews (bigger investment = more social proof needed)

### /emergency-plumber
- This page has its own dedicated brief (see emergency.md) — it deviates significantly from this template.

---

## Engineer Notes

1. **Template-based:** Build one service detail page (blocked-drains recommended — it's the most standard). Once approved, clone to the other 5 with content/image swaps.
2. **Breadcrumbs:** Every service page has Home > Services > [Service Name] breadcrumb in the hero.
3. **Service schema:** Add Service JSON-LD with serviceType, provider (LocalBusiness), areaServed.
4. **FAQ schema:** Add FAQPage JSON-LD for the service-specific FAQs.
5. **Internal linking:** Each service page sidebar (or inline) links to related services. "Also need [related service]? →"
6. **Canonical URL:** Self-referencing canonical on each service page.
