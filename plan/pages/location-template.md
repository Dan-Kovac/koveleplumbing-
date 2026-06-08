# Design Brief: Kovele Plumbing — Location Landing Page Template

> Inherits from: `plan/design-language.md`
> Applies to: 14 location pages (/plumber-bundoora through /plumber-bulleen)
> Conversion goal: Phone call or quote request from someone in that suburb

---

## Visual Rhythm Map

```
[Navbar:with-topbar — same as all pages]
  ↓
[Hero:split — DARK gradient, suburb-specific headline + streetscape image]
  ↓ py-10
[Stats:inline — LIGHT (white), suburb-relevant stats]
  ↓ py-14
[ServiceCards:minimal — ACCENT (blue wash), 6 services available here]
  ↓ py-14
[FeatureSplit:with-list — LIGHT (white), why [Suburb] homeowners choose us]
  ↓ py-14
[Testimonials:featured — DARK (#1A1E4A), one review from/near this suburb]
  ↓ py-14
[FAQ:centered — ACCENT (blue wash), 4 suburb-specific FAQs]
  ↓ py-16
[CTA:simple — DARK gradient, suburb-specific CTA]
  ↓
[Footer:standard — DARK]
```

**Rhythm:** dark → light → accent → light → dark → accent → dark → dark. Shorter page than homepage or service detail — these are landing pages, not essays. Get to the CTA fast.

---

## Section Plan

### 1. Navbar:with-topbar
- Same as all pages.

### 2. Hero:split
- **Component:** hero, split variant
- **Background:** Left: linear-gradient #1A1E4A → #282F7A. Right: suburb streetscape photo.
- **Spacing:** py-14 md:py-18
- **Imagery:** AI-generated Melbourne terrace streetscape for each suburb. The image should feel like that specific suburb — leafy streets, Victorian terraces for inner north suburbs; more modern for eastern suburbs. No people needed in location hero images — the street is the subject.
- **Customisation:**
  - Badge: "Your local [Suburb] plumber"
  - H1: "Trusted plumber in [Suburb]." — keep it simple, keyword-targeted
  - Subtitle: "Based in Bundoora, [X] minutes from [Suburb]. Steve and Nick Kovac — 40 years of experience, 247 five-star reviews."
  - Same dual CTA: "Call 0418 340 501" + "Get a Free Quote"
  - Trust badges: "40+ Years" | "[X] min response" | "4.85★ Rating"
  - Breadcrumb: Home > Service Areas > [Suburb]

### 3. Stats:inline
- **Component:** stats, inline variant
- **Background:** bg-white
- **Spacing:** py-10 md:py-12
- **Customisation:**
  - "[X]+ Jobs in [Suburb]" | "4.85★ Average Rating" | "[X] min From Base" | "24/7 Emergency"
  - Response time should be realistic — calculate from Bundoora to each suburb

### 4. ServiceCards:minimal
- **Component:** service-cards, minimal variant
- **Why minimal:** Location pages don't need image-heavy service cards. The visitor already knows what service they want — they searched "[suburb] plumber." Minimal cards guide them to the right service page. Agent guide: "Best when images aren't available. Icon + title + arrow link."
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-14 md:py-16. Grid: 2-col mobile, 3-col md.
- **Customisation:**
  - Heading: "Plumbing services in [Suburb]"
  - 6 service cards with icon + title + one-line description + arrow link
  - Each links to the service detail page (not a suburb-specific service page — we don't have those)
  - Card style: bg-white rounded-lg p-5. Simple, functional.

### 5. FeatureSplit:with-list
- **Component:** feature-split, with-list variant
- **Background:** bg-white
- **Spacing:** py-14 md:py-16
- **Imagery:** AI-generated: Steve and Nick at a house in a suburb that matches the area. Inner north = terrace house. Eastern = brick veneer with garden.
- **Customisation:**
  - Heading: "Why [Suburb] homeowners choose Kovele"
  - Checklist items — mix of universal (pricing, experience) and suburb-specific:
    - "[X] minutes from our Bundoora base to [Suburb]"
    - "We know [Suburb]'s [housing type] homes and their plumbing"
    - "Transparent pricing — you know the cost before we start"
    - "Licensed and insured for gas, drains, and renovations"
    - "Same-day service when you need it"
  - The suburb-specific items are key — they're what make this a real local page, not a template with find-replace

### 6. Testimonials:featured
- **Component:** testimonials, featured variant
- **Background:** bg-brand-dark (#1A1E4A)
- **Spacing:** py-14 md:py-16
- **Customisation:**
  - Pick a review from a customer in or near this suburb
  - If no suburb-specific review exists, use a review from the nearest suburb
  - Same visual treatment as service detail template: large quote, gold stars, white text

### 7. FAQ:centered
- **Component:** faq, centered variant
- **Background:** bg-brand-muted (#ECEEFF)
- **Spacing:** py-14 md:py-16
- **Customisation:**
  - 4 FAQs — keep it short for landing pages:
    1. "How quickly can you get to [Suburb]?"
    2. "Do you service all of [Suburb]?"
    3. "What's your pricing for plumbing in [Suburb]?"
    4. "Are you available for emergencies in [Suburb]?"
  - Answers reference the suburb by name and include the distance from Bundoora

### 8. CTA:simple
- **Background:** linear-gradient #1A1E4A → #282F7A
- **Spacing:** py-16 md:py-20
- **Customisation:**
  - Heading: "Need a plumber in [Suburb]? Call Steve."
  - Phone number in orange, large
  - Same dual CTA

### 9. Footer:standard
- Same as all pages.

---

## Suburb-Specific Image Direction

| Suburb | Streetscape Character | Housing Stock |
|--------|----------------------|---------------|
| Bundoora | Suburban, leafy, wider streets | Brick veneer, some newer townhouses |
| Heidelberg | Hilly, artistic, near Yarra | Mix of period homes and modern |
| Thornbury | Gentrified inner north, café strips | Victorian terraces, converted warehouses |
| Northcote | Hipster inner north, High Street | Victorian terraces, Edwardian cottages |
| Brunswick | Dense inner north, multicultural | Victorian terraces, flats, new apartments |
| Doncaster | Eastern suburbs, spacious | Brick veneer, larger blocks, some period |
| Balwyn | Premium eastern, tree-lined | Large brick homes, federation style |
| Fairfield | Quiet inner north, Yarra views | Edwardian cottages, California bungalows |
| Reservoir | Northern suburbs, family | Post-war brick, newer developments |
| Templestowe | Eastern hills, bushy | Large blocks, modern builds, some period |
| Coburg | Inner north, diverse | Victorian terraces, brick cottages |
| Kew | Premium eastern, leafy | Federation homes, large gardens |
| Fitzroy North | Inner city, heritage | Victorian terraces, classic iron lacework |
| Bulleen | Eastern, near river | Brick veneer, leafy, quiet streets |

---

## Engineer Notes

1. **Template-first:** Build /plumber-bundoora as the master template. Once approved, generate the other 13 by swapping content variables.
2. **Content variables per page:** suburb name, response time from Bundoora, housing stock description, suburb-specific FAQ answers, nearest-suburb review, streetscape image.
3. **SEO:** Each page has unique H1, meta title ("Plumber in [Suburb] | Kovele Plumbing"), meta description (unique per suburb), and canonical URL.
4. **Internal cross-linking:** Each location page links to 3-4 nearby suburb pages in a "Also serving nearby" row below the service area section.
5. **Schema:** LocalBusiness with areaServed for the specific suburb.
6. **Avoid thin content:** Every location page must have at least 400 words of unique content. The suburb-specific FAQ answers, feature-split checklist items, and housing stock references provide this.
