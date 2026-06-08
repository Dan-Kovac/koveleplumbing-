# Design Brief: Kovele Plumbing — Emergency Plumber

> Inherits from: `plan/design-language.md`
> URL: /emergency-plumber
> Primary keyword: "plumbing emergency near me" (4,400/mo)
> Conversion goal: IMMEDIATE phone call. Nothing else matters.

---

## Design Override: Maximum Urgency

This page deviates from the standard design language. The person landing here has water
pouring into their house RIGHT NOW. Every design decision serves one goal: get them to
call 0418 340 501 within 5 seconds of landing.

**Overrides from global design language:**
- **Animation:** 1/5 (near-zero). Content appears instantly. No delays.
- **Spacing:** Ultra-tight. py-10 baseline. Remove all breathing room between sections.
- **Phone number:** Appears 4+ times on the page. Each time in orange, large, clickable.
- **Mobile:** The floating call button has a pulsing ring animation. More aggressive than other pages.
- **Page length:** Short. 4-5 sections maximum. No FAQ wall, no gallery, no about section.

---

## Visual Rhythm Map

```
[Navbar:with-topbar — phone # extra prominent in topbar]
  ↓
[Hero:split — DARK, urgent headline, immediate phone number]
  ↓ py-8
[Stats:inline — LIGHT, response time + availability + rating]
  ↓ py-10
[FeaturesGrid:icon-grid — ACCENT, emergency types we handle]
  ↓ py-10
[Process:numbered — LIGHT, 3 steps only — ultra short]
  ↓ py-10
[Testimonials:featured — DARK, one fast-response review]
  ↓ py-12
[CTA:simple — DARK gradient, massive phone number]
  ↓
[Footer:standard — DARK, minimal]
```

**5 content sections. That's it.** No service area, no FAQ, no certifications. The person
in an emergency doesn't care about your suburb list. They care about one thing: can you
come right now?

---

## Section Plan

### 1. Navbar:with-topbar
- **Override:** Topbar background changes to bg-orange (#E8722A) instead of bg-brand-primary. Phone number in white text, bold, larger than other pages. The topbar itself is the emergency signal.
- **Topbar text:** "24/7 EMERGENCY PLUMBER — Call 0418 340 501"
- **Main nav:** Same as other pages but the topbar grabs more attention here.

### 2. Hero:split — URGENCY VARIANT
- **Component:** hero, split variant
- **Background:** Left: linear-gradient #1A1E4A → #282F7A. Right: image of plumber arriving at a house at night or in rain.
- **Spacing:** py-12 md:py-16. Tighter than standard hero.
- **Animation:** NO cascade delay. Everything appears at once. 0.3s fade-in, that's it. Don't make someone with a burst pipe wait for your headline animation.
- **Typography:**
  - H1: text-3xl md:text-5xl font-bold text-white. Direct and urgent.
  - Phone number below H1: text-2xl md:text-4xl font-bold text-orange. This is almost as prominent as the headline.
  - Subtitle: text-lg text-white/80. One sentence max.
- **Imagery:** AI-generated: a plumber arriving at a Melbourne home in the evening, porch light on, homeowner at the door looking relieved. Orange hi-vis visible. Urgency but also reassurance — help has arrived.
- **Customisation:**
  - H1: "Emergency plumber Melbourne. Call now."
  - Giant phone number: "0418 340 501" — text-2xl md:text-4xl, text-orange, tel: link
  - Subtitle: "Steve answers 24/7. We'll be there fast."
  - ONE CTA only: "Call Steve Now" bg-orange, full-width on mobile. No secondary button. No "get a quote" — emergencies don't fill out forms.
  - Trust badges: "Available 24/7" | "60 min average response" | "4.85★ from 247 reviews"

### 3. Stats:inline
- **Background:** bg-white
- **Spacing:** py-8 md:py-10. Ultra-tight.
- **Animation:** Counter animation — but faster. 0.8s duration, not 1.5s. Match the urgency.
- **Customisation:**
  - "24/7" / "Always Available"
  - "60 min" / "Average Response"
  - "4.85★" / "From 247 Reviews"
  - "40+" / "Years Experience"

### 4. FeaturesGrid:icon-grid
- **Component:** features-grid, icon-grid variant
- **Why icon-grid:** Quick scan of "we handle this type of emergency." Reassures the visitor their specific problem is covered. Agent guide: "Best for universal feature lists (4-6 items). Clean and scannable."
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-10 md:py-12
- **Animation:** None. Content appears instantly.
- **Customisation:**
  - Heading: "We handle every plumbing emergency"
  - 6 emergency types with icons:
    - Burst pipes (water drop icon)
    - Flooding (waves icon)
    - Gas leaks (flame icon)
    - Blocked drains (drain icon)
    - No hot water (thermometer icon)
    - Sewer backup (warning icon)
  - Each links to the relevant service detail page
  - Grid: 2-col mobile, 3-col desktop. Cards: bg-white rounded-lg p-4. Minimal, functional.

### 5. Process:numbered
- **Component:** process, numbered variant
- **Background:** bg-white
- **Spacing:** py-10 md:py-12
- **Customisation:**
  - Heading: "Three steps. That's it."
  - **3 steps only** (not 4 like homepage — emergencies need fewer steps):
    1. "Call Steve" / "Ring 0418 340 501. He picks up, day or night."
    2. "We're on our way" / "Average response time: 60 minutes to your door."
    3. "Problem fixed" / "We diagnose, quote, and fix. Same visit."
  - Tight layout. No connecting lines on mobile — just stacked cards.

### 6. Testimonials:featured
- **Component:** testimonials, featured variant
- **Background:** bg-brand-dark (#1A1E4A)
- **Spacing:** py-10 md:py-12
- **Customisation:**
  - Pick the review that most emphasises SPEED and RESPONSE TIME
  - "Steve came within the hour on a Saturday night..." type review
  - Same visual treatment as service detail pages

### 7. CTA:simple
- **Background:** linear-gradient #1A1E4A → #282F7A
- **Spacing:** py-12 md:py-16
- **Customisation:**
  - Heading: "Don't wait. Call Steve now."
  - Phone: "0418 340 501" — text-3xl md:text-5xl font-bold text-orange. THE PHONE NUMBER IS THE SECTION.
  - ONE button: "Call Now" bg-orange, extra large.
  - Subtitle: "Available 24/7 for Melbourne plumbing emergencies."

### 8. Footer:standard
- Same as all pages. Truncated on emergency page — consider footer:minimal instead to keep the page short. Decision: use standard for consistency, but the CTA above it is the real endpoint.

---

## Engineer Notes

1. **Page speed is critical.** This page must load in < 2 seconds on 3G. Minimal images, no lazy loading (everything is above-fold or nearly). Consider inlining critical CSS.
2. **Phone number semantics:** Every phone number instance: `<a href="tel:0418340501" class="emergency-call-link">`. Track clicks as conversion events in GA4.
3. **Mobile floating call button:** Larger than other pages. w-16 h-16 instead of standard size. Pulsing ring animation: `animate-ping` on outer ring, 2s infinite. Background: bg-orange.
4. **No form on this page.** Emergencies call, they don't fill out forms. The /contact page handles forms.
5. **Redirect:** If the old site had /emergency or similar, 301 redirect to /emergency-plumber.
6. **Meta description:** Include "24/7", "emergency", "Melbourne", and the phone number in the meta description. This shows in the SERP.
7. **Structured data:** Add EmergencyService type to the Service schema.
