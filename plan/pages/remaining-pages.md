# Design Briefs: Kovele Plumbing — Remaining Core Pages

> Inherits from: `plan/design-language.md`
> These pages are simpler and share many patterns. Briefed together for efficiency.

---

## Reviews Page (/reviews)

### Rhythm
```
[Navbar:with-topbar]
[Hero:minimal — DARK, "247 five-star reviews and counting"]
[ReviewsAggregate:summary-cards — LIGHT, aggregate score + platform breakdown]
[Testimonials:grid — ACCENT, paginated reviews, 12 per page]
[CTA:simple — DARK]
[Footer:standard]
```

### Key Decisions
- **Hero:minimal** — functional header, not persuasive. The reviews ARE the content.
- **ReviewsAggregate:summary-cards** — agent guide: "Best for trades. Aggregate score bar + platform breakdowns + individual reviews." Show Google rating + Service Seeking rating side by side.
- **Testimonials:grid** — show 12 reviews per page with "Load more" or pagination. Mix Google and Service Seeking reviews.
- **Review cards:** bg-white rounded-xl p-6 shadow-sm. 5 gold stars, quote, name, suburb, platform badge (Google/SS icon).
- **No filtering/sorting** in Phase 1. Just a clean chronological display.
- **Schema:** AggregateRating + individual Review structured data.

---

## Contact Page (/contact)

### Rhythm
```
[Navbar:with-topbar]
[Contact:split — LIGHT, info left + form right]
[FAQ:centered — ACCENT, 4 booking FAQs]
[Footer:standard]
```

### Key Decisions
- **Contact:split** — agent guide: "Best for dedicated contact pages. Phone/email/address left, form right."
- **Left column:**
  - Phone: 0418 340 501 (large, orange, tel: link)
  - Email: koveleplumbing5@bigpond.com
  - Address: Bundoora, Melbourne VIC
  - Working hours: Mon-Fri 6am-6pm, Sat 7am-5pm, Sun by appointment
  - No embedded map in Phase 1 (adds weight, low value for a mobile plumber)
- **Right column — form fields:**
  - Name (required)
  - Phone (required)
  - Email (required)
  - Service type (dropdown: Blocked Drains, Gas & Hot Water, Roof Plumbing, General, Toilet Repair, Bathroom Renovation, Emergency, Other)
  - Suburb (text input)
  - Message (textarea, optional)
  - Submit: "Send Quote Request" bg-orange
- **Form backend:** Formspree or Basin. No custom backend.
- **Success state:** Replace form with "Thanks! Steve will call you back within 2 hours during business hours."
- **FAQ:** 4 items about booking process, response time, free quotes, payment methods.
- **This is the shortest core page.** No extra sections. The form IS the page.

---

## FAQ Page (/faq)

### Rhythm
```
[Navbar:with-topbar]
[Hero:minimal — DARK, "Frequently asked questions"]
[FAQ:two-column — LIGHT, 15-20 FAQs organised by category]
[CTA:simple — DARK]
[Footer:standard]
```

### Key Decisions
- **FAQ:two-column** — 15-20 FAQs need two columns to reduce scroll. Agent guide: "Best for pages with many FAQs."
- **Categories** (rendered as H3 headings within the FAQ section):
  - **General:** What areas do you serve? How long have you been in business? Is it just Steve and Nick?
  - **Pricing:** How much does a plumber cost? Do you charge a call-out fee? Do you give free quotes?
  - **Emergency:** Do you do after-hours work? What's the emergency call-out fee? What should I do while waiting?
  - **Services:** Do you do bathroom renovations? Can you fix gas appliances? Do you do CCTV drain inspections?
  - **Booking:** How do I book? How quickly can you come? What payment methods do you accept?
- **Schema:** FAQPage JSON-LD for all items. High rich snippet potential.
- **Background:** bg-white for the FAQ section. Clean and readable.

---

## Services Hub (/services)

### Rhythm
```
[Navbar:with-topbar]
[Hero:minimal — DARK, "Every plumbing service your home needs"]
[ServiceCards:with-image — LIGHT, all 6 services]
[FeatureSplit:with-stats — ACCENT, why choose Kovele + stats]
[Testimonials:featured — LIGHT, one strong general review]
[CTA:simple — DARK]
[Footer:standard]
```

### Key Decisions
- **ServiceCards:with-image** — full image cards here (unlike minimal on location pages). This is the visual browsing page for all services.
- **FeatureSplit:with-stats** — agent guide: "Best when you can quantify the feature's impact." Show years + reviews + bathrooms as inline counters within the split section.
- **This page is a routing hub.** Its job is to get visitors to the right service detail page quickly. Don't over-design it.
- **Emergency plumber** gets a highlight card in the service grid — orange border, "24/7" badge. Stands out from the regular blue cards.

---

## Blog Listing (/blog)

### Rhythm
```
[Navbar:with-topbar]
[Hero:minimal — DARK, "The Kovele Plumbing blog"]
[BlogPreview:grid — LIGHT, post cards]
[CTA:simple — DARK]
[Footer:standard]
```

### Key Decisions
- **BlogPreview:grid** — agent guide: "Best for blog listing pages. Three-column card grid."
- **Post cards:** Image thumbnail (16:10), title, excerpt (2 lines), date, read time. Hover: shadow-md.
- **Grid:** 1-col mobile, 2-col md, 3-col lg.
- **Pagination:** "Load more" button below grid. 9 posts per page.
- **Empty state (Phase 1):** If launching with no blog posts, this page can be hidden from nav and added when content is ready.
- **Blog post template:** Not briefed here — standard content page with navbar, article body (max-w-prose), related services sidebar, CTA, footer. Use markdown rendering.

---

## Utility Pages (/privacy-policy, /terms)

### Rhythm
```
[Navbar:with-topbar]
[Content — LIGHT, max-w-prose, legal text]
[Footer:standard]
```

### Key Decisions
- Plain content pages. No hero, no CTA, no design components.
- Standard legal content, prose-formatted, max-w-prose (65ch), py-16.
- H1 at top, last-updated date below.
- No schema, no fancy treatment.

---

## Engineer Notes (All Remaining Pages)

1. **Build order:** Contact → Services Hub → Reviews → FAQ → About → Blog → Utility. Contact is simplest and most critical. About is most content-dependent.
2. **Shared layout:** All pages share Navbar + Footer. Build these as layout components first.
3. **Blog system:** Static markdown files in Phase 1. Each post is a .md file with frontmatter (title, date, excerpt, image, category). Rendered at build time.
4. **Reviews data:** Create a reviews.json data file with all 247 reviews. The reviews page, homepage testimonials, service page testimonials, and location page testimonials all pull from this single source.
5. **Form tracking:** Set up GA4 conversion event for form submission on contact page.
