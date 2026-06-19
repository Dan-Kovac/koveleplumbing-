# Kovele Plumbing — PostHog Analysis (June 2026, week ~1–2 post-launch)

**Window:** 2026-06-01 → 2026-06-19 (project tz UTC). Effectively since the first
events on ~June 8.
**PostHog project:** `Kovele Plumbing` (id **459272**), org "Dan Kovac", us.posthog.com.
*(Note: the MCP's default active project is "Compass Agency" id 453951 — a different
site. Switch to 459272 before querying.)*

**Data caveat:** everything below is the **old tracking schema** (the only data that
existed in this window): `$pageview` (`$pathname`, `$current_url`, `$device_type`),
`click_to_call` (`page_path`, `device_type`, `link_text`), `floating_call_clicked`,
`form_submitted_callback` (`source_page`, `referrer_page`). The enriched props
(`cta_location`, `page_type`, `service`, `location`) only start flowing **after** the
PR #1 deploy, so use them for data going forward, not for this window.

⚠️ **Sample is tiny (25 visitors).** Treat device-level rates as directional, not
significant. Internal/owner visits were **not** filtered out, so some "direct" traffic
may be the team.

---

## Headline (all since launch)

| Metric | Value |
|---|---|
| Pageviews | 44 |
| Unique visitors | 25 |
| Call clicks (`click_to_call`) | 15 |
| Unique callers | 4 |
| Floating-button taps | 2 |
| Callback form submits | 1 |
| Overall call rate (callers / visitors) | 16% |

## 1. Desktop vs mobile

| Metric | Desktop | Mobile | Total |
|---|---|---|---|
| Unique visitors | 21 (84%) | 4 (16%) | 25 |
| Pageviews | 29 (66%) | 15 (34%) | 44 |
| Pages / visitor | 1.4 | **3.75** | 1.8 |
| Call clicks | 10 | 5 | 15 |
| Unique callers | 2 | 2 | 4 |
| **Call rate** (callers/visitors) | **9.5%** | **50%** | 16% |
| Clicks per caller | **5.0** | 2.5 | 3.75 |

- Mobile is low **volume** but high **intent** — browses ~3.75 pages/visit and converts
  far better. "Odd mobile behaviour" = small N, not poor UX.
- Desktop callers click the call button **5× each** → classic sign a desktop `tel:` link
  feels dead. **Fixed in this branch** (desktop now copies the number + shows a toast).

## 2. Homepage → call funnel

| Funnel | Step 1 | → Call | Conv. | Median time |
|---|---|---|---|---|
| Home → call (all) | 18 | 4 | **22.2%** | **7s** |
| — Desktop | 15 | 2 | 13.3% | 6s |
| — Mobile | 3 | 2 | **66.7%** | 6m 9s |
| Home → /contact → call | 18 | 3 → **1** | 5.6% | — |

- 100% of call clicks fire with `page_path = /`; median time-to-call **7s**. Visitors
  land and call almost immediately → validates the "Call Steve Now" homepage-first bet.
- The `/contact` page is a minor path (3 of 18 reach it, 1 calls) → demoting the form was
  the right call.

## 3. Pages, rage clicks, recordings

- **Pageviews by path:** `/` 28, **`/zh` 4 (≈9%, no route → 404)**, `/bathroom-renovations`
  3, `/contact` 3, `/about` 2, `/faq` 2, `/services` 2. **`/zh` redirect → home added in
  this branch.**
- **Rage clicks:** 2 total, **both Desktop** (`/` and `/faq`) — none on mobile.
- **Mobile session recordings:** only **1 of 4** mobile visitors recorded (35s, ~100%
  active, 6 clicks, 0 console errors, **14 console warnings**). Replay coverage is thin —
  check the replay sample rate, and look into those console warnings.
- **Call CTA labels clicked:** "Call Now" 10, "Call Steve Now" 2, "Call Steve" 1,
  none/icon 2 — the new "Call Steve Now" label is live and already getting clicks.

---

## Actioned in branch `claude/gifted-fermi-yqvm07`
- ✅ `/zh` (and `/zh/*`) now redirect to `/` instead of 404 (`src/App.tsx`).
- ✅ Desktop `tel:` taps copy the number + show a confirmation toast instead of dead-ending
  (`src/components/tracking/ClickToCallTracker.tsx`).
- ✅ Saved PostHog dashboard "Kovele — Conversion & Device" in project 459272.

## Still open / recommended
- Push more **mobile** traffic (GBP, local SEO) — it's the higher-intent segment.
- Investigate the **14 console warnings** on the mobile session; confirm replay sampling so
  more mobile sessions record.
- Re-run this analysis in ~2–4 weeks once the **new schema** (`cta_location`, `page_type`,
  `service`, `location`) has accumulated, for per-CTA attribution.
