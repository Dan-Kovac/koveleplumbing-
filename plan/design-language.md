# Kovele Plumbing — Global Design Language

> Design Director output | Stage 4 | 2026-03-20
> Brand archetype: **Reliable Expert** (trades, father-son team)
> All page briefs inherit from this document unless overridden.

---

## Brand Classification

- **Archetype:** Reliable Expert — a father-son trades team that wins on trust, experience, and genuine care. Not flashy, not cheap. The kind of plumber your neighbour recommends.
- **Animation Intensity:** 2/5 — subtle reveals only. Don't get between the visitor and the phone number. The site should feel solid and trustworthy, not theatrical.
- **Spacing Profile:** Tight & Urgent — py-12 to py-16 baseline. These visitors have a broken pipe or a leaking toilet. Respect their urgency. Don't make them scroll through lifestyle photography to find the phone number.
- **Colour Strategy:** Blue-dominant, white breathing room, Kovele Gold (#C8961E) for action. Matches the logo's gold. Bright gold (#DAA520) for star ratings only.
- **Typography Scale:** Compact — strong bold headings to scan, clean readable body. Not expansive or premium-feeling. Professional trades.

---

## Colour Application Strategy

### Surface Pattern (section backgrounds)

The site alternates between three surface types. Never place two of the same type adjacent:

```
LIGHT  →  white (#FFFFFF) or cool-gray (#F7F7FA)
DARK   →  brand-dark (#0c1f36)
ACCENT →  brand-muted (#ECEEFF) — the pale blue wash
```

**Page rhythm:** dark hero → light section → accent section → light section → dark CTA → dark footer

### Accent Usage: Sparing

Kovele Gold (#C8961E) appears in exactly these places:
- Primary CTA buttons (filled, rounded-lg)
- Phone number text in the navbar topbar
- Phone number text in the hero
- Floating mobile call button
- Star rating icons use brighter #DAA520 (goldenrod)

Kovele Gold does NOT appear on:
- Section backgrounds
- Borders or dividers
- Secondary buttons (use outline-blue instead)
- Decorative elements

### Blue Application

Kovele Blue (#3d9be9) is used for:
- Headings on light backgrounds
- Link text
- Secondary button fills
- Icon backgrounds (with white icon)
- Navbar CTA button on desktop
- Badge backgrounds (e.g., "Licensed", "Insured")

Deep Blue (#2d7bc4) for:
- Hover states on blue elements
- Gradient endpoint (with #3d9be9)

### Dark Sections

Dark sections use #0c1f36 (brand-dark), never pure black. Text on dark sections:
- Headings: white (#F9FAFB)
- Body: white/80 opacity
- CTAs: gold button on dark = high contrast

---

## Typography System

### Font Stack
- **Headings:** DM Sans 700 (H1-H2), DM Sans 600 (H3-H4)
- **Body:** Inter 400, Inter 500 for labels/emphasis

### Scale (mobile → desktop)

| Element | Mobile | Desktop | Weight | Colour |
|---------|--------|---------|--------|--------|
| Hero H1 | text-3xl (30px) | text-5xl (48px) | 700 | white on dark, brand-heading on light |
| Section H2 | text-2xl (24px) | text-3xl (30px) | 700 | brand-heading |
| Card H3 | text-lg (18px) | text-xl (20px) | 600 | brand-heading |
| Body | text-base (16px) | text-lg (18px) | 400 | brand-text (#374151) |
| Small/meta | text-sm (14px) | text-sm (14px) | 400 | brand-muted-text (#6B7280) |
| Stats number | text-3xl (30px) | text-4xl (36px) | 700 | brand-heading, tabular-nums |
| CTA button | text-base (16px) | text-lg (18px) | 600 | white on gold, white on blue |

### Rules
- tracking-tight on H1 only
- leading-snug (1.2) on headings, leading-relaxed (1.6) on body
- No uppercase anywhere. Sentence case always.
- Max prose width on body text: max-w-2xl (672px)

---

## Spacing System

### Section Padding

| Section Type | Vertical Padding | Notes |
|-------------|-----------------|-------|
| Hero | py-16 md:py-20 | First impression, needs breathing room |
| Trust strip (stats, certs) | py-10 md:py-12 | Quick hit, not a destination |
| Content section (features, process, services) | py-14 md:py-16 | Standard rhythm |
| Testimonials / social proof | py-14 md:py-16 | Standard rhythm |
| Service area | py-14 md:py-16 | Standard rhythm |
| FAQ | py-14 md:py-16 | Standard rhythm |
| CTA banner | py-16 md:py-20 | Give it room — this is the destination |
| Footer | py-12 md:py-16 | Utility, not feature |

### Internal Spacing

- Card gaps: gap-6 (24px) — tight enough to feel connected, open enough to breathe
- Grid columns: 1-col mobile, 2-col md, 3-col lg for service/feature cards
- Location grid: 2-col mobile, 3-col md, 4-col lg
- Max content width: max-w-7xl (1280px) with px-4 md:px-8

---

## Animation Specification (Level 2/5)

### Global Rules
- All animations respect `prefers-reduced-motion: reduce`
- No parallax, no scroll-jacking, no complex sequences
- Duration: 0.4s-0.6s for reveals, 1.5s for counter animations
- Easing: ease-out for entrances, ease-in-out for transitions

### Per-Element

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero headline | fade-in + translate-y(8px) | Page load | 0.4s, delay 0.1s |
| Hero subtitle | fade-in + translate-y(8px) | Page load | 0.4s, delay 0.2s |
| Hero CTAs | fade-in + translate-y(8px) | Page load | 0.4s, delay 0.3s |
| Hero image | fade-in | Page load | 0.6s, delay 0s |
| Stats counters | count-up animation | Scroll-enter | 1.5s, ease-out |
| Service cards | fade-in | Scroll-enter | 0.4s, stagger 0.08s |
| Process steps | fade-in | Scroll-enter | 0.4s, stagger 0.1s |
| Testimonial cards | fade-in | Scroll-enter | 0.4s, stagger 0.1s |
| FAQ accordion | instant expand/collapse | Click | 0.2s height transition |
| CTA section | fade-in | Scroll-enter | 0.4s |
| Navbar shadow | shadow appears | Scroll > 20px | 0.2s ease |
| Everything else | No animation | — | — |

### What Does NOT Animate
- Footer — utility, not theatre
- Navbar links — they're functional
- FAQ items after first expand — don't make people wait
- Contact form — let them type immediately
- Images — they load, that's enough

---

## Responsive Breakpoints

| Breakpoint | Name | Key Changes |
|-----------|------|-------------|
| < 640px | Mobile | 1-col everything, hamburger nav, floating call button |
| 640-768px | Tablet | 2-col grids, side nav still hamburger |
| 768-1024px | Tablet landscape | Full nav appears, 2-3 col grids |
| 1024-1280px | Desktop | Full layout, 3-col grids |
| > 1280px | Wide | Max-w-7xl container, content centered |

### Mobile-Specific Rules
- **Floating call button:** Fixed bottom-4 right-4, rounded-full, bg-gold, phone icon + "Call Steve". z-50. Always visible on every page.
- **Navbar:** Hamburger menu. Phone number visible in topbar even on mobile.
- **Hero image:** Below text on mobile (stacked), beside text on desktop (split).
- **Service cards:** Full-width stack on mobile, no horizontal scroll.
- **Stats:** 2x2 grid on mobile, inline row on desktop.

---

## Component Palette (Project-Wide)

These are the components used across the Kovele site. We commit to this palette and don't
introduce new components without justification.

| Component | Variant(s) | Where Used |
|-----------|-----------|------------|
| **Navbar** | with-topbar | Every page |
| **Hero** | split (home, service, location, emergency), minimal (about, blog, FAQ, reviews) | Every page |
| **Stats** | inline (home, emergency, location), card (about) | 4 page types |
| **Service Cards** | with-image (home, services hub), minimal (location pages) | 3 page types |
| **Feature Split** | with-list (home, about, service detail, location), image-right (about), with-stats (services hub) | 4 page types |
| **Features Grid** | icon-grid (gas/hot water, emergency) | 2 pages |
| **Process** | numbered (home, service detail, location), timeline (bathroom reno) | Most pages |
| **Testimonials** | with-rating (home, reviews), featured (service detail, location, emergency), grid (about, reviews, bathroom reno) | Most pages |
| **Service Area** | grid (home, service detail) | 2 page types |
| **FAQ** | centered (home, emergency, contact, FAQ page), two-column (service detail, FAQ page) | Most pages |
| **CTA** | simple (all pages) | Every page |
| **Footer** | standard | Every page |
| **Gallery** | grid (about, bathroom reno) | 2 pages |
| **Contact** | split | Contact page |
| **Team** | circle (about) | 1 page |
| **Blog Preview** | grid (blog listing) | 1 page |
| **Certifications** | badge-row (home) | 1 page |
| **Reviews Aggregate** | summary-cards (reviews page) | 1 page |

---

## Image Treatment

All images across the site follow these rules:

- **Format:** WebP, lazy-loaded (except hero which is eager)
- **Hero images:** Full-bleed on right side of split hero. No overlay. No colour filter.
- **Service images:** Contained within card bounds. rounded-lg. Object-cover.
- **Gallery images:** rounded-lg. Hover: subtle scale(1.02) transition 0.3s.
- **Testimonial avatars:** rounded-full, 48px, border-2 border-white shadow-sm.
- **All images:** Natural colour grading. No heavy filters. Melbourne's natural light.

---

## Global UI Patterns

### Buttons

| Type | Style | Usage |
|------|-------|-------|
| Primary CTA | bg-gold text-white rounded-lg px-6 py-3 font-semibold shadow-sm hover:bg-gold-600 | "Call Steve", "Get a Quote", main page CTA |
| Secondary | bg-blue text-white rounded-lg px-6 py-3 font-semibold hover:bg-deep-blue | "View Services", "See Reviews" |
| Outline | border-2 border-white text-white rounded-lg px-6 py-3 font-semibold hover:bg-white/10 | Hero secondary on dark bg |
| Ghost | text-blue underline hover:text-deep-blue | Inline text links |

### Cards
- bg-white rounded-xl shadow-sm border border-brand-border
- Hover: shadow-md transition-shadow duration-200
- Padding: p-6
- No glass-morphism. No gradient borders. Clean, trustworthy, simple.

### Badges / Trust Signals
- Inline badges: bg-brand-muted text-brand-primary rounded-full px-3 py-1 text-sm font-medium
- Examples: "Licensed", "Insured", "40+ Years", "4.85★"
- Placed inline in hero below headline, or as a row below stats

### Dividers
- Subtle: border-t border-brand-border (between sections when backgrounds are the same)
- None when backgrounds already alternate (the colour change IS the divider)

---

## Engineer Notes

1. **Phone number as a link:** Every instance of 0418 340 501 wraps in `<a href="tel:0418340501">`. No exceptions.
2. **Sticky navbar:** top-0 z-40 with shadow-sm appearing on scroll. Topbar is NOT sticky — only the main nav bar.
3. **Floating call button:** z-50, only visible below md breakpoint. Disappears on desktop where the topbar phone number is sufficient.
4. **Schema markup:** LocalBusiness on every page. Service on service pages. FAQ on FAQ sections. Review aggregate on reviews page.
5. **Preload hero image:** The hero image for each page should be preloaded in the `<head>`. It's the largest contentful paint element.
6. **Font loading:** DM Sans 600+700, Inter 400+500. Use `font-display: swap`. Preload the two most critical weights.
7. **Container:** max-w-7xl mx-auto px-4 md:px-8 on all content sections. Hero background bleeds full-width but content is contained.
8. **Dark mode:** Not supported. This is a trades site. Ship light mode only.
