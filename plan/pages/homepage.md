# Design Brief: Kovele Plumbing — Homepage

> Inherits from: `plan/design-language.md`
> URL: /
> Primary keyword: "plumber melbourne" (6,600/mo)
> Conversion goal: Phone call to Steve or quote form submission

---

## Visual Rhythm Map

```
[Navbar:with-topbar — white bg, phone # in orange topbar, sticky main nav]
  ↓
[Hero:split — DARK bg (brand-dark gradient), full impact, team photo right]
  ↓ py-10
[Stats:inline — LIGHT (white), tight credibility strip, animated counters]
  ↓ py-14
[ServiceCards:with-image — ACCENT (blue wash #ECEEFF), 6 cards, 3-col grid]
  ↓ py-14
[FeatureSplit:with-list — LIGHT (white), why choose us, image left]
  ↓ py-14
[Process:numbered — DARK (#1A1E4A), 4 steps, numbered badges]
  ↓ py-14
[Testimonials:with-rating — LIGHT (white), aggregate + 3 featured reviews]
  ↓ py-14
[Certifications:badge-row — ACCENT (blue wash), trust strip]
  ↓ py-10
[ServiceArea:grid — LIGHT (white), suburb cards linking to location pages]
  ↓ py-14
[FAQ:centered — ACCENT (blue wash #ECEEFF), 5 items]
  ↓ py-16
[CTA:simple — DARK (brand-dark gradient), final push]
  ↓
[Footer:standard — DARK (brand-dark), utility]
```

**Rhythm check:** dark → light → accent → light → dark → light → accent → light → accent → dark → dark. The dark-to-dark at the end (CTA → footer) is intentional — the CTA IS the emotional endpoint. The footer is just utility below it.

---

## Section Plan

### 1. Navbar:with-topbar

- **Component:** navbar, with-topbar variant
- **Why this variant:** Trades visitors need the phone number above the fold before they even scroll. The topbar puts it right at the top. The agent guide confirms: "Best for trades with phone number or promo."
- **Background:** Topbar: bg-brand-primary (#333D9B). Main nav: bg-white.
- **Spacing:** Topbar: py-2. Main nav: py-3. Sticky from top-0 (main nav only, topbar scrolls away).
- **Animation:** Shadow-sm appears on main nav when scrolled > 20px. 0.2s ease transition.
- **Typography:** Topbar: text-sm text-white font-medium. Phone number: text-sm font-bold text-orange. Nav links: text-sm font-medium text-brand-text. CTA button: text-sm font-semibold.
- **Customisation:**
  - Topbar left: "Bundoora, Melbourne | Mon-Fri 6am-6pm, Sat 7am-5pm"
  - Topbar right: phone icon + "0418 340 501" in orange (#E8722A), clickable tel: link
  - Main nav: Logo left (cartoon plumber + "Kovele Plumbing" text). Links: Services (dropdown), About, Reviews, Blog, Contact. CTA button: "Call Steve" bg-brand-primary text-white.
  - Services dropdown: 6 services + "Emergency Plumber" highlighted with orange dot.
  - Mobile: Hamburger + persistent floating call button (separate from navbar).

### 2. Hero:split

- **Component:** hero, split variant
- **Why split:** The father-son story IS the brand. A centered hero wastes the opportunity to show Steve and Nick immediately. The split variant puts the value proposition left and the team photo right. The agent guide: "Best for trades and product pages. Image/mockup on right adds visual proof."
- **Background:** Left: linear-gradient from #1A1E4A to #282F7A. Right: team photo, no overlay.
- **Spacing:** py-16 md:py-20. Internal gap: gap-12 between text and image columns.
- **Animation:** Headline fade-in 0.4s delay 0.1s. Subtitle 0.4s delay 0.2s. Trust badges 0.4s delay 0.25s. CTAs 0.4s delay 0.3s. Photo: fade-in 0.6s delay 0s (loads first, feels solid).
- **Typography:**
  - Badge above H1: text-sm font-medium text-orange uppercase tracking-wide. "Melbourne's trusted father-son plumbers"
  - H1: text-3xl md:text-5xl font-bold tracking-tight text-white. Max 8 words.
  - Subtitle: text-lg md:text-xl text-white/80 font-normal leading-relaxed. 1-2 sentences.
  - Trust badges: text-sm text-white/70 — "40+ years" | "247 five-star reviews" | "Licensed & insured"
- **Imagery:** AI-generated: Steve and Nick walking toward camera on a Melbourne terrace house street. Orange hi-vis hoodies, tool bags, morning light, slightly overcast Melbourne sky. Documentary style. Medium-wide framing showing the street context, not portrait-close. No vehicles.
- **Customisation:**
  - Headline suggestion: "Melbourne plumbers you can trust to do the job right."
  - Subtitle suggestion: "Steve and Nick Kovac. Forty years of fixing Melbourne's plumbing. Fair prices, quality work, real people."
  - Primary CTA: "Call 0418 340 501" — bg-orange, large, with phone icon. tel: link.
  - Secondary CTA: "Get a Free Quote" — outline white, links to /contact.
  - Trust badge row below CTAs: three inline items with subtle dividers.
  - On mobile: text stacks above photo. Photo takes 60% viewport height with gradient fade at bottom.
  - The photo should bleed to the right edge on desktop — no padding, no container constraint on the image side.

### 3. Stats:inline

- **Component:** stats, inline variant
- **Why inline:** Quick credibility strip right after the hero. The visitor just read the headline — now give them four numbers that back it up before they have to think. The agent guide: "Best right after hero. Quick credibility hit."
- **Background:** bg-white
- **Spacing:** py-10 md:py-12. This is a transitional section, not a destination. Tighter than standard.
- **Animation:** Counter count-up on scroll-enter. 1.5s, ease-out. This is the one animation worth having on the page — numbers ticking up is satisfying and earned.
- **Typography:** Numbers: text-3xl md:text-4xl font-bold text-brand-heading tabular-nums. Labels: text-sm font-medium text-brand-muted-text.
- **Imagery:** Small icons above each number. Blue (#333D9B) icon on white. Wrench, star, clock, map-pin.
- **Customisation:**
  - "40+" / "Years Experience"
  - "247" / "Five-Star Reviews"
  - "24/7" / "Emergency Service"
  - "150+" / "Bathrooms Installed"
  - Desktop: horizontal row with vertical dividers between items.
  - Mobile: 2x2 grid with hairline dividers.

### 4. ServiceCards:with-image

- **Component:** service-cards, with-image variant
- **Why with-image:** The website plan specified 6 services. Image cards give each service visual identity and encourage clicking through. With-image over minimal because we'll generate imagery per service. Agent guide: "Best for trades with photos of work."
- **Background:** bg-brand-muted (#ECEEFF) — the pale blue wash. This is the first accent section, breaking up the white.
- **Spacing:** py-14 md:py-16. Cards: gap-6. Grid: 1-col mobile, 2-col md, 3-col lg.
- **Animation:** Cards fade-in on scroll-enter, stagger 0.08s per card. Subtle — 0.4s duration.
- **Typography:** Card title: text-lg font-semibold text-brand-heading. Card excerpt: text-sm text-brand-text. Link: text-sm font-medium text-brand-primary with arrow icon.
- **Imagery:** One image per card. AI-generated per service: drain camera for blocked drains, hot water system for gas/HW, roofline for roof plumbing, wrench for general, toilet for toilet repairs, renovated bathroom for renovations. All same treatment: rounded-t-xl, object-cover, 16:10 aspect ratio.
- **Customisation:**
  - Section heading above grid: "Every plumbing service your home needs" — H2, centered.
  - Subtitle: "From blocked drains to bathroom renovations. Whatever the job, we'll do it right."
  - 6 cards linking to: /blocked-drains, /gas-hot-water, /roof-plumbing, /general-plumbing, /toilet-repairs, /bathroom-renovations
  - Cards: bg-white rounded-xl shadow-sm. Hover: shadow-md, translate-y(-2px).
  - Each card links to its service detail page. Entire card is clickable.

### 5. FeatureSplit:with-list

- **Component:** feature-split, with-list variant
- **Why with-list:** This is the "why choose Kovele" section. The checklist format makes differentiators scannable. Each item answers an objection. Agent guide: "Best when the feature has multiple sub-points. Checkmark list builds comprehension."
- **Background:** bg-white
- **Spacing:** py-14 md:py-16. Gap between image and text: gap-12.
- **Animation:** Fade-in on scroll-enter. 0.4s. Single animation, no stagger.
- **Typography:** H2: text-2xl md:text-3xl font-bold text-brand-heading. List items: text-base font-medium text-brand-text with blue check icon.
- **Imagery:** LEFT side (image-left, not default image-right — flip the layout). AI-generated: Steve explaining something to a homeowner at a Melbourne terrace house front door. Natural, documentary feel. Homeowner looking reassured.
- **Customisation:**
  - Heading: "Why Melbourne homeowners choose Kovele"
  - Checklist items (5-6):
    - "Upfront pricing — you know the cost before we start"
    - "Licensed and insured — gas fitting included"
    - "Same-day service — we know it can't wait"
    - "40 years of experience — we've seen every problem"
    - "Clean up when we're done — your home, respected"
    - "Real people, not a call centre — Steve or Nick answers"
  - Image: rounded-xl, contained. Shadow-lg for depth.
  - Blue check icons — bg-brand-primary/10 rounded-full with brand-primary check.

### 6. Process:numbered

- **Component:** process, numbered variant
- **Why numbered:** Clear 1-2-3-4 steps reduce anxiety about what happens next. This is the "how it works" section. Numbered badges are scannable and feel reliable. Agent guide: "Best for trades. Clear 1-2-3 steps reduce anxiety."
- **Background:** bg-brand-dark (#1A1E4A) — dark section creates visual drama after light sections.
- **Spacing:** py-14 md:py-16. Steps: gap-8 desktop, gap-6 mobile.
- **Animation:** Steps fade-in on scroll-enter, stagger 0.1s each. 0.4s duration.
- **Typography:** Section H2: text-2xl md:text-3xl font-bold text-white. Step number: text-xl font-bold text-orange. Step title: text-lg font-semibold text-white. Step description: text-sm text-white/70.
- **Imagery:** None — numbered badges with orange numbers are the visual.
- **Customisation:**
  - Heading: "How it works"
  - Subtitle: "Four simple steps from problem to fixed."
  - Step 1: "Call Steve" / "Ring 0418 340 501. Steve or Nick will answer and ask what's going on."
  - Step 2: "Get a clear quote" / "We'll explain what needs doing and tell you exactly what it'll cost. No surprises."
  - Step 3: "We fix it right" / "We turn up on time, do the work properly, and clean up after ourselves."
  - Step 4: "Pay a fair price" / "You pay what we quoted. That's it. No hidden charges."
  - Number badges: bg-orange/20 rounded-full w-12 h-12, number in orange, centered.
  - On desktop: 4-col grid with connecting line between steps.
  - On mobile: vertical stack with connecting line left.

### 7. Testimonials:with-rating

- **Component:** testimonials, with-rating variant
- **Why with-rating:** The 4.85 stars from 247 reviews is Kovele's single biggest trust asset. The with-rating variant shows the aggregate prominently alongside individual reviews. Agent guide: "Best for trades and apps where star ratings matter."
- **Background:** bg-white
- **Spacing:** py-14 md:py-16. Gap between aggregate and individual cards: gap-8.
- **Animation:** Fade-in on scroll-enter. Cards stagger 0.1s.
- **Typography:** Aggregate score: text-5xl font-bold text-brand-heading. "out of 5" text-lg text-brand-muted-text. Review count: text-sm text-brand-muted-text. Quote text: text-base italic text-brand-text. Reviewer name: text-sm font-semibold.
- **Imagery:** Star icons in gold (#FFD700) — this is the ONE place gold is used. Reviewer initials in blue rounded-full avatars.
- **Customisation:**
  - Heading: "247 five-star reviews and counting"
  - Aggregate display: Large "4.85" with 5 gold stars, "from 247 reviews on Google & Service Seeking"
  - 3 review cards. Pick the most specific, outcome-focused reviews. Not generic "great service" reviews — reviews that name what was fixed, mention Steve or Nick, describe the experience.
  - Review card: bg-brand-bg-alt rounded-xl p-6. Star row, quote text, reviewer name + suburb.
  - Link to /reviews: "Read all 247 reviews →" in brand-primary below the cards.

### 8. Certifications:badge-row

- **Component:** certifications, badge-row variant
- **Why badge-row:** Compact trust strip. Takes little vertical space. Reinforces credentials near the bottom of the page before the CTA. Agent guide: "Best as a compact trust strip. Horizontal pills take little space."
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-10 md:py-12. Tight strip, not a full section.
- **Animation:** None. This is utility.
- **Typography:** Badge text: text-sm font-medium text-brand-primary.
- **Imagery:** Small icons per badge — shield, certificate, clock, wrench.
- **Customisation:**
  - Badges: "Fully Licensed", "Gas Fitting Certified", "Insured", "24/7 Emergency", "40+ Years Experience"
  - Layout: horizontal scroll on mobile, flex-wrap centered on desktop.
  - Badge style: bg-white rounded-full px-4 py-2 shadow-sm border border-brand-border.

### 9. ServiceArea:grid

- **Component:** service-area, grid variant
- **Why grid:** Shows the breadth of Kovele's coverage across Melbourne. Each card links to a location landing page. Agent guide: "Best for showing multiple suburbs/regions with stats."
- **Background:** bg-white
- **Spacing:** py-14 md:py-16. Grid: gap-4. 2-col mobile, 3-col md, 4-col lg.
- **Animation:** Fade-in on scroll-enter. Cards stagger 0.05s (fast, many cards).
- **Typography:** Suburb name: text-base font-semibold text-brand-heading. Stats: text-sm text-brand-muted-text.
- **Imagery:** None — clean text cards with subtle icon.
- **Customisation:**
  - Heading: "Trusted across Melbourne"
  - Subtitle: "Based in Bundoora, serving all of Melbourne's inner north and beyond."
  - Show top 8 suburbs on desktop (Bundoora, Brunswick, Doncaster, Heidelberg, Balwyn, Thornbury, Northcote, Reservoir). Mobile: show 4, with "View all suburbs" link.
  - Each card: suburb name, "X min from base", popular service tag. Links to /plumber-[suburb].
  - Card style: bg-brand-bg-alt rounded-lg p-4. Hover: border-brand-primary.
  - "View all service areas →" link below grid.

### 10. FAQ:centered

- **Component:** faq, centered variant
- **Why centered:** Homepage FAQ is light (5 items) — doesn't need two columns. Centered is cleaner for fewer items. Agent guide: "Best default. Single column, clean accordion."
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-14 md:py-16. Max-w-2xl centered.
- **Animation:** Accordion expand: 0.2s height transition. No entrance animation — the section is near the bottom.
- **Typography:** H2: text-2xl md:text-3xl font-bold text-brand-heading centered. Question: text-base font-medium text-brand-heading. Answer: text-base text-brand-text.
- **Imagery:** None.
- **Customisation:**
  - Heading: "Common questions"
  - 5 FAQs: pricing transparency, emergency availability, service area, licencing, warranty/guarantee.
  - Expand icon: ChevronDown in brand-primary. Rotates on expand.
  - Only one item open at a time.

### 11. CTA:simple

- **Component:** cta, simple variant
- **Why simple:** The homepage has done its job by this point. The CTA is the final nudge. Simple = focused = effective. No form, no distractions. Agent guide: "Best default. Gradient background, centered text, dual buttons."
- **Background:** linear-gradient from #1A1E4A to #282F7A (brand-dark).
- **Spacing:** py-16 md:py-20. Generous — this is the emotional endpoint.
- **Animation:** Fade-in on scroll-enter. 0.4s. Single animation.
- **Typography:** H2: text-2xl md:text-4xl font-bold text-white centered. Subtitle: text-lg text-white/80 centered.
- **Imagery:** None. Copy does the work.
- **Customisation:**
  - Heading: "Need a plumber? Call Steve."
  - Subtitle: "0418 340 501 — available 24/7 for emergencies."
  - Primary CTA: "Call Now" bg-orange, large. tel: link.
  - Secondary CTA: "Get a Free Quote" outline white, links to /contact.
  - Phone number is the hero of this section. Make it text-3xl font-bold text-orange.

### 12. Footer:standard

- **Component:** footer, standard variant
- **Background:** bg-brand-dark (#1A1E4A)
- **Spacing:** py-12 md:py-16.
- **Animation:** None.
- **Typography:** Headings: text-sm font-semibold text-white uppercase tracking-wide. Links: text-sm text-white/70 hover:text-white. Copyright: text-xs text-white/50.
- **Customisation:**
  - Column 1: Logo + "Melbourne plumbers you can trust. Family business since 1985." + social icons (Facebook, Instagram).
  - Column 2: "Services" — 6 service links + Emergency Plumber.
  - Column 3: "Service Areas" — Top 8 suburb links.
  - Column 4: "Contact" — Phone (tel: link), email, address (Bundoora VIC), working hours.
  - Bottom bar: "© 2026 Kovele Plumbing. All rights reserved." + Privacy Policy + Terms links.
  - Phone number in footer: text-lg font-bold text-orange. Clickable.

---

## Engineer Notes

1. **Phone number appears 5 times on homepage:** Topbar, hero CTA, CTA section heading, CTA section button, footer. All wrapped in `<a href="tel:0418340501">`.
2. **Hero image preload:** Add `<link rel="preload" as="image">` for the hero team photo. This is the LCP element.
3. **Service card links:** Entire card is clickable (`<a>` wrapping the card), not just the text link.
4. **Stats intersection observer:** Use a single IntersectionObserver for the stats section. Trigger count-up animation once when section enters viewport. Don't re-trigger.
5. **FAQ schema markup:** Add FAQPage JSON-LD for the 5 FAQ items. Rich snippet opportunity.
6. **Service area cards:** Only render 8 on homepage. Full list lives on location pages. "View all" links to /plumber-bundoora (home base) as the anchor location page.
7. **Mobile floating call button:** Separate from navbar. z-50 fixed bottom-4 right-4. bg-orange-500 text-white rounded-full p-4 shadow-lg. Phone icon. Pulsing ring animation (subtle, 2s infinite).
