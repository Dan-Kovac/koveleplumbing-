# Kovele Plumbing — Conversion + SEO Master Plan (July 2026)

**Date:** 2026-07-11 · **Sources:** PostHog project 459272 (last 30 days), full codebase audit, Vercel deploy state, Sanity content audit.
**Goal:** highest-converting, highest-ranking plumbing site in its Melbourne service area.

---

## Part 1 — The brutal read

### 1.1 The single most important finding

**The site does not have a conversion problem. It has a traffic problem.**

Last 30 days (PostHog, 2026-06-11 → 2026-07-11):

| Metric | Value |
|---|---|
| Unique visitors | 75 |
| Pageviews / sessions | 188 / 83 |
| Avg session / bounce | 5m 08s / 33.7% |
| Call clicks | 20 (≈10 unique callers) |
| Callback form submits | 6 |
| **Visitor → lead (call OR form)** | **~17% overall** |
| — Mobile | **42.1%** (8 of 19 visitors) |
| — Desktop | 8.9% (5 of 56 visitors) |

A 17% visitor-to-lead rate is elite for a trade site (typical is 2–5%). Mobile at 42% is
about as good as it gets. But 75 visitors/month — of which only **29 came from organic
search** — means the funnel is starving. Doubling conversion gains ~13 leads/month at
best; **10×-ing qualified traffic at current conversion gains ~100+**. SEO is the lever.

Other data points:

- **Channels:** Direct 44 visitors / Organic Search 29 / Referral 4. Organic visitors are
  the most engaged (29 visitors generated 101 of 188 pageviews).
- **CTA attribution (new schema):** `hero_primary` 7 clicks, `contact_form_call` 2,
  `floating_button` 1. The homepage hero carries the conversion load — validated again.
- **The callback form works now:** 6 submits in 30 days vs 1 in the launch fortnight.
  The Formspree pipeline is producing leads.
- **Core Web Vitals (real users, p75):** LCP 1.6–2.4s, INP 64–84ms, CLS ≈ 0. All green.
  **Performance is solved — stop investing here.**
- **/zh still receives traffic** (5 visitors in 30d). The current fix is a client-side
  `<Navigate>`, not a server 301 — crawlers still see a 200 page at `/zh`.
- **/services bounces 100%** (12 visitors), `/about` 50%. The services index page is a
  dead end.
- `/Blog` (capital B) is NOT a 404 — React Router matches case-insensitively and the page
  self-canonicalises to `/blog`. Non-issue; ignore it.

### 1.2 The structural SEO problem (biggest fix in this plan)

The site is a **pure client-rendered SPA**. `vercel.json` rewrites every route to
`index.html`; `main.tsx` does a plain `createRoot().render()`. Consequences:

- Every URL serves the **homepage's static `<title>`, meta description, and og:image**
  until JavaScript executes. All per-page titles, descriptions, canonicals, and **all
  JSON-LD** are injected by `react-helmet-async` at runtime.
- Googlebot renders JS (eventually, via the render queue), but: rendering is delayed and
  budget-limited for small sites; **social preview scrapers, many secondary crawlers, and
  most LLM/AI-search crawlers do not execute JS** — they see the same homepage tags on
  all 38 URLs. For a site whose entire strategy is 14 suburb pages + 7 service pages
  ranking individually, serving empty HTML shells is a handicap we don't need.
- There is no `Article` schema on blog posts, no schema at all on `/services` (priority
  0.9 in the sitemap!), no per-page `og:image`, no `twitter:*` per page.

### 1.3 The location-page problem (duplicate content)

All 14 suburb pages render from one template with 5 interpolated variables. Realistically
**only ~15–20 words differ between any two location pages** — same 8 FAQs, same stats,
same sections, with `${suburb}` swapped in. Google's helpful-content systems specifically
target this "doorway page" pattern. The pages have unique titles/H1s/canonicals (good
bones) but near-zero unique substance. Ironically, `data.ts` contains a unique
`testimonial` per suburb **that the template never renders** (`LocationPage.tsx:196-200`
renders shared `PAGE_REVIEWS` instead).

### 1.4 The content-engine problem

- Blog = **8 posts, all dated 2026-03-20, zero since.** A stale blog is a negative
  freshness signal and a wasted keyword engine.
- The blog is **not actually Sanity-driven**: `Blog.tsx`/`BlogPost.tsx` read only from
  static fallbacks (`blog-fallback.ts`, `blog-bodies.ts` — "Last synced: 2026-03-20").
  New Studio posts will never appear. Meanwhile the unused `vendor-sanity` chunk
  (`@sanity/client` etc.) still ships to every browser.
- Blog posts contain **zero internal links** (in either direction) and no Article schema.
  They are an SEO dead-end in a site whose internal linking is otherwise strong.

### 1.5 Trust & consistency problems (conversion killers for the visitors we DO get)

| Issue | Where |
|---|---|
| "24/7 Emergency Service" vs opening hours "Mon–Fri 6am–6pm, Sat 7am–5pm" (no Sunday, closes 6pm) | Home/Emergency pages vs `PageLayout.tsx:80` topbar + `JsonLd.tsx:34-47` schema |
| Public email is `koveleplumbing5@bigpond.com` (schema, contact page, form fallback) — not the branded `steve@koveleplumbing.com.au` | `JsonLd.tsx:16`, `Contact.tsx:91`, `ContactSplit.tsx:91` |
| Experience claims: "40+ years" (Home) vs "since 1985" (About) vs "47 years" (llms.txt) | `Home.tsx:31`, `About.tsx:44`, `public/llms.txt` |
| Job counts don't reconcile: 6,000+ jobs, 2,000+ drains, 150+ bathrooms, suburb jobCounts summing ~2,350 | `Services.tsx:101`, `BlockedDrains.tsx:108`, `data.ts` |
| AI-generated "Steve & Nick" photos with alt text asserting real people; many images byte-identical duplicates | `public/images/`, `image-prompts.md` |
| Schema phone `"0418340501"` not E.164 (`+61418340501`) | `JsonLd.tsx:15`, `:92` |
| Session replay records form input values (`maskAllInputs: false`) — customer names + phone numbers captured in recordings | `src/lib/posthog.ts:24` — privacy exposure |

### 1.6 What's already working (don't touch)

- Homepage → call funnel: hero "Call Steve Now" is the workhorse. Median time-to-convert
  on mobile: **26 seconds**.
- Service pages are genuinely well-authored, unique-content pages with strong internal
  linking (each links all 14 suburbs + services + contact).
- The lean 3-field callback form (name/phone/message, no email) is converting.
- Legacy WordPress URLs are 301'd in `vercel.json`. Sitemap covers all 38 routes.
- Real, linked reviews (Google 48 @ 4.8, Service Seeking 198 @ 4.9).
- Web vitals green; images WebP; routes lazy-loaded.

### 1.7 Tooling gaps hit during this audit

- **SE Ranking MCP: every endpoint returns 403 "No access"** — the connected account has
  no API access. No keyword volumes / rank tracking / competitor data were available for
  this plan. Fix the subscription or connect another data source.
- **Google Search Console is still not set up** (open item since launch). We are flying
  blind on impressions, queries, and index coverage — the single most important free SEO
  feedback loop.

---

## Part 2 — The step-by-step plan

Ordered by dependency and ROI. Phases 0–1 are code (shippable immediately); Phase 2 is
code+content; Phases 3–5 are ongoing operations.

### Phase 0 — Hygiene & integrity fixes (½ day of code, ship this week)

1. **Server-side 301 for `/zh`** — add `{ "source": "/zh", "destination": "/", "statusCode": 301 }`
   (+ `/zh/:path*`) to `vercel.json` redirects; keep the client `<Navigate>` as fallback.
2. **Stop recording PII in session replays** — set `maskAllInputs: true` (or add
   `tel`/name selectors to the mask list) in `src/lib/posthog.ts`.
3. **One source of truth for availability** — decide: is Steve genuinely 24/7?
   - If yes → topbar shows "24/7 — call anytime", schema gets `openingHours` 00:00–23:59.
   - If no → kill "24/7" everywhere, sell "same-day + after-hours emergency call-out".
   Either is fine; saying both is what kills trust. *(Needs Steve's answer.)*
4. **One source of truth for numbers** — pick the real values for years-in-trade and job
   counts; make Home/About/Services/llms.txt/location data agree. *(Needs Steve.)*
5. **Branded email everywhere** — replace `koveleplumbing5@bigpond.com` with
   `steve@koveleplumbing.com.au` in schema, contact page, form fallback, llms.txt
   (confirm the mailbox exists and forwards first).
6. **Schema phone → E.164** (`+61418340501`) in `JsonLd.tsx` (both factories).
7. **Google Search Console + Bing Webmaster Tools** — verify domain, submit sitemap.
   *(Manual, ~20 min, unblocks all future SEO measurement.)*

### Phase 1 — Structural SEO: put real HTML on every URL (1–2 days of code)

8. **Prerender all 38 routes at build time.** Keep the Vite+React stack — add static
   prerendering (e.g. `vite-react-ssg`, or a post-build render pass over the route list)
   so every route ships its own complete HTML: title, meta description, canonical,
   og/twitter tags, JSON-LD, H1, and body copy — before any JS runs. Blog slugs and
   location slugs are all known at build time; there is no dynamic data. Acceptance test:
   `curl https://koveleplumbing.com.au/plumber-bundoora | grep '<h1>'` returns the
   suburb H1, and every page's JSON-LD is present in raw HTML.
9. **Per-page social tags** — `og:image`, `og:title/description/url` + `twitter:card`
   per page (service pages get their hero image, blog posts their cover image).
10. **Fill the schema gaps:**
    - `/services`: `FAQPage` (it already renders an FAQ section) + `Service` list or
      `ItemList`.
    - Blog posts: `BlogPosting` + `BreadcrumbList` (headline, datePublished, author,
      image).
    - Home: add `WebSite` schema; keep `Plumber`/LocalBusiness.
    - Reviews page: individual `Review` markup for a handful of real, attributed reviews.
11. **Generate `sitemap.xml` at build** with real per-route `lastmod` (git or content
    dates) instead of the frozen 2026-03-20 file.
12. **Drop dead weight while in there:** delete unused `ServiceDetail.tsx`; remove the
    runtime Sanity imports so `vendor-sanity` leaves the client bundle (see step 17);
    remove the 14 orphaned duplicate `location-*.webp` files or actually use them.

### Phase 2 — Location pages that deserve to rank (the growth engine; 1–2 suburbs/day of content work)

13. **Make each of the 14 suburb pages substantively unique** (target ≥300 words of
    suburb-specific copy each):
    - Housing-stock specifics → plumbing implications (e.g. Brunswick's Victorian
      terraces → original galvanised pipes, heritage roof plumbing; Doncaster's 60s–70s
      brick veneers → aging sewers, tree-root intrusion).
    - 3–4 suburb-specific FAQs replacing the identical 8 (e.g. "Do you service the shops
      on Sydney Rd?", parking/access notes, common local job types).
    - Render the per-suburb `testimonial` that already exists in `data.ts` but is
      currently ignored.
    - Real local references: nearby suburbs actually serviced, drive time from Bundoora,
      recent job examples (get 2–3 lines from Steve per suburb — one voice memo covers it).
14. **Tier and expand coverage:** current 14 suburbs skew inner-north/east. Once GSC data
    arrives, add tier-2 pages for adjacent high-volume suburbs (Mill Park, Greensborough,
    Preston, Ivanhoe, Eltham, Macleod, Watsonia…) — but **only** with the unique-content
    treatment. No new thin pages.
15. **Emergency × suburb internal links:** the `/emergency-plumber` page should link to
    location pages ("Emergency plumber in Bundoora / Reservoir / …") and each location
    page's emergency FAQ should link back. Do not create separate
    emergency-plumber-{suburb} pages yet — that's doorway-page territory until the base
    pages have unique content and rankings to justify it.

### Phase 3 — Desktop conversion (75% of traffic converting at 8.9% vs mobile's 42%)

16. **Show the number, don't hide it behind a click.** On desktop, render
    `0418 340 501` as visible text next to the hero CTA and in the sticky header — a
    desktop user with a phone in hand just needs to read it. Keep the click-to-copy
    behaviour as backup.
17. **Give desktop users a native path: make the callback form the desktop hero
    secondary action.** Two fields (name + phone), inline in the hero or one click away,
    "Steve calls you back within 30 minutes, 7 days" (subject to #3's availability
    truth). Desktop's 3h52m *average* conversion delay (vs 20s median) says desktop
    visitors research, leave, and come back — a callback capture beats hoping they return.
18. **Fix the `/services` 100% bounce:** add a CTA band and per-service "from $X /
    call-out fee" anchors (price transparency is the #1 plumbing-site trust factor), and
    link each card straight to the service page's FAQ. Add `/emergency-plumber` and
    `/faq` to the primary nav (currently footer-only).
19. **QR / SMS bridge (optional test):** "on your phone? scan to call" QR on desktop hero
    — cheap to add, measurable via a `cta_location=qr` event.

### Phase 4 — Content engine + off-site local SEO (ongoing, the compounding lever)

20. **Re-wire the blog pipeline so publishing works:** either (a) fetch from Sanity at
    build time and prerender (preferred — Studio stays the authoring tool, site stays
    static), or (b) formalise the current snapshot with a `sync-blog` script run before
    build. Either way the runtime Sanity client goes away.
21. **Publish 2–4 posts/month targeting money keywords**, each with internal links to a
    service page + 2–3 location pages + a CTA block. Priority topics (high commercial
    intent, from the service catalogue): hot water system replacement cost Melbourne;
    blocked drain cost / who pays (tenant vs landlord); gas compliance certificates VIC;
    burst pipe emergency steps; roof leak insurance claims; toilet keeps running.
    Backfill internal links from the 8 existing posts to services/locations.
22. **Google Business Profile is half the local battle:** weekly photo/post cadence
    (real job photos), services + service-area list matching the site's 14 suburbs, Q&A
    seeded from the FAQ pages, UTM-tagged website link (`?utm_source=gbp`) so GBP traffic
    stops hiding inside "Direct" (44 of 75 visitors are Direct — much of that is likely
    GBP).
23. **Close the Google review gap:** 48 Google vs 198 Service Seeking. Google reviews are
    a top-3 local ranking factor; Service Seeking reviews are nearly invisible to Google.
    Post-job SMS with the direct review link (goal: +5–10/month). Respond to every review.
24. **Citations + links:** consistent NAP (name/address/phone — the E.164 + branded email
    from Phase 0) across Yellow Pages, True Local, hipages, Oneflare, Yelp AU, local
    chamber/community directories; supplier/manufacturer "find an installer" listings
    (Rheem, Rinnai, etc. if accredited); sponsor a Bundoora-area club for a local link.
25. **Replace AI imagery with real photos** (already on the roadmap): van, team, real
    jobs. Also fixes the misleading alt-text problem and feeds GBP posts. Kill the
    byte-identical duplicate images.

### Phase 5 — Measure, iterate, defend

26. **Weekly PostHog dashboard review** (the "Kovele — Conversion & Device" dashboard
    exists): visitor→lead by device + channel, CTA breakdown, form submits. Add a
    lead-by-channel funnel once GBP UTMs land.
27. **GSC monthly:** query/impression growth per suburb page; pages stuck on page 2 get
    content top-ups; confirm prerendered pages index cleanly after Phase 1.
28. **Fix SE Ranking API access** (or swap tool) and set up rank tracking:
    ~30 keywords = {plumber, emergency plumber, blocked drains, hot water} × {Bundoora,
    Reservoir, Heidelberg, Doncaster, top suburbs}.
29. **Traffic threshold for experiments:** at <100 visitors/month, A/B tests are noise.
    Ship best practice, watch trends. Revisit PostHog experiments when organic passes
    ~1,000 visits/month.

---

## Part 3 — Priority order if only three things get done

1. **Phase 1 prerendering + schema gaps** — structural, permanent, makes every other SEO
   effort actually visible to crawlers.
2. **Phase 2 location-page uniqueness** — the difference between 14 pages that rank and
   14 pages Google ignores as doorways.
3. **GSC + GBP + Google-review cadence (steps 7, 22, 23)** — free, compounding, and where
   "plumber near me" is actually won.

## Inputs needed from Steve (10-minute phone call)

- 24/7 or not? (drives #3, #17, schema hours)
- Real years-in-trade + honest job-count figures (#4)
- Does `steve@koveleplumbing.com.au` mailbox exist? (#5)
- 2–3 sentences per suburb: memorable local jobs, common problems (#13)
- OK to send post-job review SMS? (#23)
