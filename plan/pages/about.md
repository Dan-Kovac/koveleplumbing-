# Design Brief: Kovele Plumbing — About Page

> Inherits from: `plan/design-language.md`
> URL: /about
> Conversion goal: Build trust → drive to contact or service pages

---

## Visual Rhythm Map

```
[Navbar:with-topbar]
  ↓
[Hero:minimal — DARK gradient, story headline]
  ↓ py-14
[FeatureSplit:image-right — LIGHT (white), Steve's story, photo right]
  ↓ py-14
[FeatureSplit:with-list — ACCENT (blue wash), Nick's story, photo left (flipped)]
  ↓ py-10
[Stats:card — LIGHT (white), key numbers in glass cards]
  ↓ py-14
[Team:circle — ACCENT (blue wash), Steve + Nick profiles]
  ↓ py-14
[Gallery:grid — LIGHT (white), work portfolio]
  ↓ py-14
[Testimonials:grid — DARK (#1A1E4A), 4 personal reviews]
  ↓ py-16
[CTA:simple — DARK gradient]
  ↓
[Footer:standard]
```

---

## Section Plan

### Hero:minimal
- **Background:** linear-gradient #1A1E4A → #282F7A
- **H1:** "Forty years of fixing Melbourne's plumbing."
- **Subtitle:** "Steve started with a van and a toolbox. Nick joined with fresh energy and the same dedication. Together they're the plumbing team Melbourne trusts."
- **No CTA buttons.** This is a story page — the hero is an opening line, not a sales pitch.

### FeatureSplit:image-right — Steve's Story
- **Background:** bg-white
- **Heading:** "The old hand"
- **Body:** 2-3 paragraphs about Steve's 40-year journey. How he started, what he's learned, why he's still on the tools. Warm, specific, human.
- **Image:** AI-generated Steve (50s, stocky, short dark hair, green polo) at a worksite, arms crossed, confident and friendly. Melbourne terrace in background.
- **Image position:** Right

### FeatureSplit:with-list — Nick's Story
- **Background:** bg-brand-muted (#ECEEFF)
- **Heading:** "The next generation"
- **Body:** 1-2 paragraphs + checklist of what Nick brings: energy, modern techniques, dedication to quality.
- **Image:** AI-generated Nick (early 20s, athletic, curly dark hair, orange hi-vis) working on pipework, focused. Realistic worksite.
- **Image position:** Left (flipped from standard)

### Stats:card
- **Background:** bg-white
- **Why card variant:** More visual weight than inline. About page stats deserve prominence — these are the proof points for the story. Agent guide: "Glass cards feel premium."
- **Stats:** "40+" / "Years Experience" | "247" / "Five-Star Reviews" | "150+" / "Bathrooms Installed" | "Melbourne-wide" / "Coverage"

### Team:circle
- **Background:** bg-brand-muted (#ECEEFF)
- **Why circle:** Only 2 team members — circular avatars feel personal and warm. Agent guide: "Best for small teams. Circular avatars feel personal."
- **Two profiles:** Steve (founder, 40+ years on the tools) and Nick (next generation, carrying on the standard)
- **Avatar style:** rounded-full, 120px, border-4 border-white shadow-lg. Gradient initials as fallback until real/AI photos are placed.

### Gallery:grid
- **Background:** bg-white
- **6-8 images** with category filter tabs: Bathrooms, Drains, Roof Work, General
- **Image treatment:** rounded-lg, object-cover. Hover: scale(1.02), shadow-md.
- **Source:** Mix of real work photos (if Steve provides) and AI-generated completed work images.

### Testimonials:grid
- **Background:** bg-brand-dark (#1A1E4A)
- **4 reviews** that mention Steve or Nick by name. Personal, specific reviews.
- **Card style:** bg-white/10 rounded-xl p-6. Quote in white/90, name in white, suburb in white/60.

### CTA:simple
- **Heading:** "Ready to meet Melbourne's most trusted father-son plumbing team?"
- Same treatment as homepage CTA.

---

## Engineer Notes
1. This is the most content-heavy page. Ensure copy is finalised before building.
2. Gallery images can be placeholders initially — swap when real or AI-generated images are ready.
3. Team section should pull from a shared data structure (future-proof if team grows).
