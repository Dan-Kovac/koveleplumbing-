# Kovele Plumbing — "Local Legend" Design Direction (July 2026)

**Date:** 2026-07-11 · **Status:** PARTIALLY APPROVED (Dan, 2026-07-11): the cut-out
photography technique is approved; the "Local Legend" copy/persona concept is
REJECTED as too wanky. Rework as a design-led direction — look and feel carries it,
copy stays in the site's existing honest voice. Dan wants Steve + Nick brought
together as a duo composition; blocked on a proper portrait photo of Nick (his only
real photo is a wide fleet scene that defeats clean auto-matting — see shot list §6,
item 1).
**Live prototype:** Claude artifact "Kovele — Local Legend design concept" (hero built
with the real processed cut-out + real brand tokens).
**Companion plan:** `plan/conversion-seo-plan-2026-07.md` (this direction slots into its
Phase 3/4 work; nothing here blocks the SEO phases).

---

## 1. The insight

Every competitor plumbing site is the same template: stock hero, fake smiling tradie,
"quality you can trust." Kovele's unfair advantage is that **Steve is real** — a
father-son team, four decades on the tools, and a hand-drawn cartoon mascot that has
been on the vans since the '80s. The AI-generated imagery currently on the site
actively buries that advantage.

The PostHog data backs the people-first bet: 42% of mobile visitors become a lead,
median time-to-call 26 seconds. Visitors don't read — they look for a trustworthy
face and a number. The design's one job is to make that decision instant.

## 2. Real vs AI image inventory (audited visually)

**Real photos (cut-out candidates):**
- `steve-kovac-arms-crossed.webp` — Steve, green polo, van behind. ✅ Cut-out DONE:
  `public/images/cutouts/steve-arms-crossed-cutout.webp`
- `steve-kovac-van-portrait.webp` — Steve waving/reaching, van behind. Matte usable but
  keeps some van lettering between the arm and body; needs a re-shoot or manual touch-up.
- `steve-portrait.webp` — tighter crop of the arms-crossed setup.
- `nick-kovac-plumber.webp` — Nick with the fleet (wide scene; auto-matte fails —
  needs a proper waist-up portrait, see shot list).
- `steve-nick-kovele-fleet.webp` — three vans + both of them. Keep as-is (scene shot).
- The van mascot panel — cropped to `public/images/cutouts/kovele-mascot-van.webp`.

**AI-generated (byte-duplicate clusters, watermark tells, fictional "Steve & Nick"):**
everything else — the navy-uniform workshop/roof/walking shots, all `location-*.webp`,
most service/blog covers. These phase out as real photos arrive (SEO plan step 25).

## 3. The direction: "Local Legend"

Sports-poster composition × heritage-badge revival, on the locked brand tokens.

- **Cut-out photography as the visual system.** Backgrounds removed from real photos;
  the person composed on graphic grounds. Three reusable treatments:
  1. **The ring** — gold halo circle + blue glow behind the figure (hero, location pages)
  2. **The poster** — giant outlined display word (`-webkit-text-stroke`) layered behind
     the figure, AFL-poster energy (homepage hero, campaigns)
  3. **The sticker** — white die-cut card, slight rotation, drop shadow (cards, review
     blocks, GBP posts, social)
- **The heritage mascot as a feature.** The hand-drawn running plumber from the van
  becomes a "sticker" element: *"The van mascot, est. 1985."* No competitor can buy
  provenance. Photographed-from-the-van (not redrawn) keeps it honest.
- **Copy with certainty.** "The plumber your neighbours actually call." / "24 Hrs — it
  says so on the van." / "Read it, dial it — no forms required." Confident, warm, local;
  never snarky.
- **Conversion machine untouched.** Gold = call action only. Visible phone number as
  text (desktop fix from the SEO plan, step 16). Two-field callback. Suburb marquee
  doubles as internal-link bar to the 14 location pages when built for real.

**Cross-industry references:** AFL/NBA player posters (layered type + cut-out),
Nike editorial cut-outs, vintage service-station badge revivals, Liquid Death-style
copy confidence, DTC checkout-grade lead capture.

**Alternates considered** (in the prototype, kept for the record):
- *The Service Manual* — industrial spec-sheet aesthetic (monospace labels, schematic
  linework, safety yellow). Strong urgency, risks reading cold.
- *The Neighbourhood* — illustrated suburb map hero, Steve as a board-game piece.
  Deeply local, weaker for emergencies.

## 4. Deltas vs the locked design language (need approval)

`plan/design-language.md` locks two rules this direction deliberately evolves:

| Locked rule | Proposed evolution | Where |
|---|---|---|
| "No uppercase anywhere. Sentence case always." | Uppercase allowed for the poster display word + marquee/label micro-type only. Headlines/body stay sentence case. | Hero mega-word, suburb marquee, chips |
| Gold for CTAs only (no decorative gold) | One decorative exception: the halo ring + star glyphs. Gold buttons remain exclusively call actions. | Hero figure, sticker stars |

Everything else conforms: palette (#0c1f36/#3d9be9/#C8961E/#DAA520), DM Sans + Inter,
call-first hierarchy, animation restraint (marquee is the only ambient motion and it
respects `prefers-reduced-motion`).

## 5. The cut-out pipeline (reproducible)

`scripts/remove-background.py` — MODNet portrait matting via onnxruntime. Model comes
chunked in the `@rmbg/model-modnet` npm package (works where GitHub/HF downloads are
blocked). Already produced:

- `public/images/cutouts/steve-arms-crossed-cutout.webp` (transparent, 502×582)
- `public/images/cutouts/kovele-mascot-van.webp` (mascot crop from the van panel)

Rules of thumb: shoot waist-up on a plain ground (white van door is perfect); crop
tight before matting; small crops are auto-upscaled 3× for face detail.

## 6. The 30-minute phone shot list (unblocks everything)

Shot against the white van door, soft daylight, phone camera is fine:

1. **Nick — arms crossed, waist-up** (team cards, About, "next generation" block)
2. **Steve + Nick together, same framing** (father & son hero variant, GBP cover)
3. **Steve pointing / waving / phone-to-ear — 3-4 poses** (CTA banners, 404, callback
   confirmation)
4. **Hands-on-tools close-ups** — wrench on copper, torch on flare (service/blog covers,
   replaces AI shots)
5. **Mascot panel straight-on, no glare** (full-quality heritage sticker)
6. ✅ Fleet wide shot — already exists

## 7. Rollout (after approval, sequenced with the SEO plan)

1. **Hero swap first** (highest traffic, lowest risk): implement the poster hero on `/`
   with the existing Steve cut-out. Ship behind the existing PostHog tracking — watch
   `hero_primary` CTA rate + visitor→lead weekly vs the current 17% baseline.
2. **Treatment components** (`CutoutRing`, `CutoutSticker`, poster word) into the
   component palette; roll into CTA banners and the /reviews page.
3. **Location pages get the ring treatment** as their unique-content rewrite lands
   (SEO plan step 13) — one real photo per suburb from job visits over time.
4. **Mascot micro-brand**: heritage sticker in the footer + About timeline + GBP posts.
5. AI-image retirement tracks the photo shoot, page-by-page — hero first, locations
   second, blog covers last.

**Decision needed from Dan:** approve the two design-language deltas (§4) and the
hero-swap experiment (§7.1), or pick an alternate direction from §3.
