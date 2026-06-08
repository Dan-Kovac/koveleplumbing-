import { readFileSync } from "fs";
import { randomBytes } from "crypto";

const PROJECT_ID = "m1ex2a5k";
const DATASET = "production";
const API_VERSION = "2024-01-01";

const config = JSON.parse(
  readFileSync(
    `${process.env.HOME}/.config/sanity/config.json`,
    "utf-8"
  )
);
const TOKEN = config.authToken;

function key() {
  return randomBytes(4).toString("hex");
}

function span(text, marks) {
  const s = { _type: "span", _key: key(), text };
  if (marks && marks.length) s.marks = marks;
  return s;
}

function block(style, children, markDefs) {
  const b = {
    _type: "block",
    _key: key(),
    style: style || "normal",
    children: Array.isArray(children) ? children : [span(children)],
  };
  if (markDefs && markDefs.length) b.markDefs = markDefs;
  return b;
}

function h2(text) {
  return block("h2", text);
}

function p(text) {
  return block("normal", text);
}

function pWithLink(before, linkText, after, href) {
  const linkKey = key();
  return block(
    "normal",
    [
      span(before),
      span(linkText, [linkKey]),
      span(after),
    ],
    [{ _key: linkKey, _type: "link", href }]
  );
}

// ─── POST 1 ─────────────────────────────────────────────────
const post1Body = [
  p("If you've got water pouring through the ceiling or a burst pipe flooding your laundry, the last thing you need is to panic. A plumbing emergency in Melbourne can happen at any time — middle of the night, Christmas Day, you name it. In my 40-odd years as a plumber, I've seen just about every disaster you can imagine. The good news is, there are a few simple things you can do right now to limit the damage before a plumber gets to you."),

  h2("Step 1: Turn off the water at the mains"),
  p("This is the single most important thing you can do. Every home has a main water shut-off valve — usually near your water meter at the front of the property, or sometimes under the kitchen sink in units and apartments. Turn it clockwise until it stops. No more water flowing means no more flooding."),
  p("If you don't know where your mains tap is, go find it right now — before you need it. I tell every customer the same thing. Five minutes now saves you thousands later."),

  h2("Step 2: Turn off your hot water system"),
  p("If the leak involves hot water, or you're not sure, switch off your hot water system. For electric systems, flick the circuit breaker at the switchboard. For gas, turn the gas valve on the unit to the off position. Running a hot water system without water flowing through it can damage the element or overheat the unit, and that's a second problem you don't need."),

  h2("Step 3: Contain the water"),
  p("Grab towels, buckets, mops — whatever you've got. If water is coming through the ceiling, poke a small hole in the plasterboard to let it drain into a bucket rather than pooling and bringing the whole ceiling down. I know it sounds wrong to make a hole in your ceiling, but trust me, it's better than a ceiling collapse."),
  p("Move any electronics, rugs, or valuables away from the water. Take photos for your insurance — your phone's right there, use it."),

  h2("What actually counts as a plumbing emergency?"),
  p("Not everything needs a midnight call-out. Here's what I'd class as a genuine emergency:"),
  p("A burst pipe or major leak you can't stop. A completely blocked toilet with no second bathroom. A gas leak (call your gas provider first, then a plumber). A sewage overflow inside the house. No hot water in the middle of winter with young kids or elderly people at home."),
  p("What can usually wait until morning? A slow-dripping tap. A toilet that runs a bit. A dripping shower head. These are annoying, but they won't cause serious damage overnight. You'll also save money by booking a standard appointment rather than paying after-hours rates."),

  h2("When to call a plumber"),
  pWithLink(
    "Once you've turned off the water and contained the mess, call a licensed plumber. If it's after hours, you need someone who actually answers the phone — not a call centre that dispatches whoever's closest. I offer ",
    "24/7 emergency plumbing across Melbourne",
    " because I know how stressful these situations are. When you call me, you get me — not a recording.",
    "/emergency-plumber"
  ),

  h2("A few things NOT to do"),
  p("Don't try to fix a burst pipe yourself with tape or glue. It won't hold and you'll waste time. Don't ignore a gas smell — open windows, don't flick any light switches, get out and call 000 if it's strong. Don't pour chemicals down a badly blocked drain — if the blockage doesn't clear, you've now got caustic chemicals sitting in the pipe, which makes my job harder and more expensive."),

  h2("Be prepared before it happens"),
  p("Here's what I tell everyone: know where your mains tap is, know where your switchboard is, and keep a plumber's number in your phone. Emergencies don't send a calendar invite. When it happens, you want to act fast and stay calm."),
  p("If you've got a plumbing emergency right now, give me a call on 0450 800 382. I'll talk you through what to do on the phone while I'm on my way. That's what 40 years of experience is for — Steve Kovac, Kovele Plumbing."),
];

// ─── POST 2 ─────────────────────────────────────────────────
const post2Body = [
  p("Choosing a plumber in Melbourne shouldn't feel like a gamble, but for a lot of people it does. You search online, you get a dozen options, and you've got no idea who's going to do a proper job and who's going to leave you with a bigger mess than you started with. I've been a licensed plumber for over 40 years, so I know exactly how to choose a plumber in Melbourne — because I know what separates the good ones from the cowboys."),
  p("Here's what I'd tell my own family."),

  h2("Check their licence — no excuses"),
  p("Every plumber in Victoria must hold a current licence issued by the Victorian Building Authority (VBA). This isn't optional. If someone can't give you their licence number, walk away. You can check it yourself on the VBA website in about 30 seconds. An unlicensed plumber means no compliance certificates, no insurance, and no comeback if something goes wrong."),
  p("A registered plumber will also issue a compliance certificate for certain work — things like hot water installations, gas work, and backflow prevention. If they don't mention it, ask. If they dodge the question, that tells you everything."),

  h2("Make sure they're insured"),
  p("Public liability insurance is a must. If a plumber damages your property — cracks a tile, floods a room, whatever — their insurance covers it. Without insurance, you're left arguing over who pays. Ask to see proof of insurance. Any decent plumber will have it ready because they get asked regularly."),

  h2("Read reviews, but read them properly"),
  p("Google reviews are useful, but don't just look at the star rating. Read the actual comments. Look for specifics: did they show up on time, did they explain what they were doing, did they clean up? A plumber with 50 genuine reviews averaging 4.7 stars is worth more than one with five perfect reviews that read like they were written by their mum."),
  p("Also check how they respond to negative reviews. Everyone gets the odd bad one — it's how they handle it that matters."),

  h2("Get quotes in writing"),
  p("A verbal quote isn't worth the air it's carried on. Get it in writing — even a text message or email is better than nothing. A written quote should include what work will be done, what materials are included, and the total cost. If they can't give you a fixed price, they should at least give you a clear hourly rate and an estimate of how long the job will take."),
  p("Be wary of anyone who quotes over the phone without seeing the job. Some things can be estimated remotely, but anything underground, in walls, or involving old pipework needs eyes on it first."),

  h2("Watch out for \"too cheap\" quotes"),
  p("I've lost count of how many times I've been called in to fix work done by the cheapest quote. If one plumber quotes $800 and another quotes $300 for the same job, ask yourself what's being left out. Cheap quotes usually mean cheap materials, shortcuts, or no compliance certificate. You end up paying twice."),
  p("Fair pricing means fair for both sides. I charge what the job is worth, I use quality materials, and I stand behind my work. That's the deal."),

  h2("Ask about call-out fees"),
  p("Some plumbers charge a call-out fee just to show up, before any work is done. Others roll it into the job cost. Neither is wrong, but you should know upfront. Ask: \"Is there a call-out fee? Is it waived if I go ahead with the work?\" No surprises on the invoice is what you want."),

  h2("Experience matters — especially with older homes"),
  p("Melbourne is full of older homes with galvanised pipes, clay drains, and plumbing that's been patched by three different tradies over 60 years. Experience with these systems matters. A plumber who's only worked on new builds might not know how to deal with what's hiding in your walls."),
  pWithLink(
    "I've been doing this since 1986 — there's not much I haven't seen. You can read more ",
    "about my background and approach here",
    ".",
    "/about"
  ),

  h2("The bottom line"),
  p("A good plumber is licensed, insured, transparent with pricing, and experienced enough to solve your problem properly the first time. Don't just go with the first name that pops up on Google. Spend ten minutes checking, and you'll save yourself a lot of headaches."),
  p("If you need a plumber you can trust in Melbourne, give me a call on 0450 800 382. I'll give you a straight answer and a fair quote — Steve Kovac, Kovele Plumbing."),
];

// ─── POST 3 ─────────────────────────────────────────────────
const post3Body = [
  p("Blocked drains are one of the most common call-outs I get across Melbourne, and the frustrating thing is that most people don't notice the warning signs until it's too late. By the time the shower won't drain or the toilet's overflowing, the blockage has usually been building for weeks or months. Knowing the early blocked drain signs can save you a lot of mess, stress, and money."),
  p("Here's what to watch for."),

  h2("Slow drainage"),
  p("This is the earliest and most obvious sign. If your sink, shower, or bath is draining slower than it used to, something is narrowing the pipe. It might be hair, soap scum, grease, or tree roots working their way in. It won't fix itself — it'll only get worse."),
  p("A lot of people reach for the chemical drain cleaner at this point. I'd say be careful with that. Those chemicals can damage older clay and PVC pipes if used regularly, and they rarely clear anything more than a surface-level blockage. They're a bandaid, not a fix."),

  h2("Gurgling noises"),
  p("If you hear gurgling or bubbling sounds coming from your drains — especially when you flush the toilet or run the washing machine — that's air being trapped and pushed through water in the pipe. It means something is blocking the normal flow and forcing air backwards."),
  p("Gurgling from multiple fixtures at once is a sign the blockage is in your main sewer line, not just one drain. That's a bigger job, but catching it early makes it a lot easier to clear."),

  h2("Bad smells"),
  p("A properly functioning drain shouldn't smell. If you're getting a rotten egg or sewage smell from your drains, waste is sitting in the pipe instead of flowing through. It could be a partial blockage, a broken pipe, or a dry trap (the U-shaped bend that holds water to block sewer gas)."),
  p("If the smell is coming from an outside drain or gully trap, check if there's standing water or debris. Sometimes a simple clean-out of leaves and muck fixes it. If the smell persists after cleaning, the problem is further down the line."),

  h2("Water backing up"),
  p("When water comes up through a drain — in the shower, laundry floor waste, or outside gully trap — you've got a blockage that's serious enough to cause a backup. This is the point where most people call me. Sewage backing up into your home is not just unpleasant, it's a health risk."),
  p("If this happens, stop using water in the house until the blockage is cleared. Every flush and every tap makes it worse."),

  h2("Soggy patches in the yard"),
  p("If you've got a patch of lawn that's always green and soggy — especially when everything else is dry — you might have a broken or blocked underground drain leaking into the soil. Tree roots are the usual culprit in Melbourne. They find the tiniest crack in a clay pipe and force their way in, eventually filling the pipe completely."),
  p("This is one of those signs people overlook for years because it's outside and out of sight. But a broken sewer pipe in your yard can contaminate soil and cause subsidence over time."),

  h2("When to try a DIY fix"),
  p("If it's a single slow drain — say a bathroom sink — and you can see hair or gunk near the opening, by all means pull it out. A plunger can also shift minor blockages in toilets and sinks. These are fair game for a DIY fix."),
  p("But if the problem is in multiple drains, keeps coming back, or involves sewage, call a plumber. You can't fix a tree root intrusion with a plunger."),

  h2("CCTV drain inspections — worth every cent"),
  pWithLink(
    "One of the best tools in modern plumbing is the CCTV drain camera. I push a small camera through your pipes and see exactly what's going on — blockages, cracks, tree roots, collapsed sections. No guessing, no digging up the yard to find the problem. I use CCTV on most ",
    "blocked drain jobs",
    " because it means I can show you the problem on screen and fix it properly the first time.",
    "/blocked-drains"
  ),
  p("It's also smart to get a CCTV inspection before buying an older property. A pre-purchase drain inspection can save you from inheriting someone else's plumbing problems."),

  h2("Don't ignore the signs"),
  p("Blocked drains don't fix themselves. The longer you leave it, the worse it gets and the more it costs. If you've noticed any of these signs — slow drains, gurgling, smells, wet patches — give me a call on 0450 800 382. I'll find the problem and sort it out. That's what I do — Steve Kovac, Kovele Plumbing."),
];

// ─── POST 4 ─────────────────────────────────────────────────
const post4Body = [
  p("Buying a new hot water system is one of those things most people only do once or twice in their life, and there's a lot of confusing information out there. Electric, gas, heat pump, solar — each one has its pros and cons, and what works for your neighbour might not work for you. This hot water system buying guide is my honest take as a Melbourne plumber with over 40 years in the trade. No sales pitch, just straight facts."),

  h2("Electric storage hot water"),
  p("Electric storage systems heat water in a tank using an electric element — same idea as a kettle, just bigger. They're the cheapest to buy and install, which is why a lot of people end up with them. A decent unit runs about $800 to $1,500 installed."),
  p("The catch? They're the most expensive to run. In Melbourne, electric hot water can cost $600 to $900 a year, depending on your household size and tariff. They also lose heat through the tank walls (called standing losses), so you're paying to keep water hot even when you're not using it."),
  p("If you're on a controlled load tariff (off-peak electricity), costs come down a bit. But overall, electric storage is being phased out in many states for new builds because it's the least efficient option. I wouldn't recommend one unless budget is extremely tight and you need a quick replacement."),

  h2("Gas instantaneous (continuous flow)"),
  p("Gas instantaneous systems heat water on demand — no tank, no standing losses. You turn on the hot tap and the unit fires up. They're compact, they hang on the wall, and they never run out of hot water because they're heating it as you use it."),
  p("Installed cost is typically $1,500 to $2,500 depending on the brand and whether you need a new gas line run. Running costs sit around $350 to $500 a year in Melbourne — significantly less than electric storage."),
  p("The main downside is you need a gas connection. If you're in an area without natural gas, you're looking at LPG bottles, which changes the running cost equation. Gas systems also produce emissions, and with Victoria pushing towards electrification, gas may become less attractive long-term. But right now, for a reliable and efficient system, gas continuous flow is hard to beat."),

  h2("Heat pump hot water"),
  p("Heat pumps are the system I'm recommending most these days. They work like a reverse-cycle air conditioner — they pull heat from the air and use it to heat water. They use about a third of the electricity of a traditional electric system, which means running costs of roughly $200 to $350 a year."),
  p("The installed cost is higher — typically $3,000 to $4,500 — but here's the good news: the Victorian Government and federal government both offer rebates. Depending on your eligibility, you can knock $1,000 to $2,000 off the price. That brings the effective cost close to a gas system, with lower running costs."),
  p("Heat pumps work well in Melbourne's climate. They're less efficient in very cold weather (below about 5 degrees), but Melbourne rarely stays that cold for long. They do make a noise similar to an air conditioning unit, so placement matters — don't stick one right outside a bedroom window."),
  p("For most Melbourne homes, a heat pump is the best long-term investment right now. That's my honest opinion."),

  h2("Solar hot water"),
  p("Solar systems use roof-mounted panels (either flat plate or evacuated tube collectors) to heat water using the sun. They typically have an electric or gas booster for cloudy days and winter. Running costs are the lowest of any system — often under $150 a year."),
  p("But they're the most expensive to install ($4,000 to $7,000), they need good roof space facing north or north-west, and installation is more involved. If your roof is shaded by trees or neighbouring buildings, solar panels won't perform well. They also require more maintenance than other systems — the roof components need periodic checking."),
  p("Solar is a great option if you've got the right roof and you're planning to stay in the home long-term. For rental properties or homes with poor solar access, I'd steer towards a heat pump instead."),

  h2("Running costs comparison for Melbourne"),
  p("Here's a rough annual running cost comparison for a family of four in Melbourne. Electric storage: $700 to $900. Gas continuous flow: $350 to $500. Heat pump: $200 to $350. Solar with booster: $100 to $200. These figures vary based on usage, tariffs, and gas prices, but they give you a fair picture of the difference."),

  h2("Steve's honest recommendation"),
  pWithLink(
    "If your current system has died and you need a replacement fast, gas continuous flow is reliable and efficient — I can usually have one in within a day. If you've got a bit more time and budget, go with a heat pump and take advantage of the government rebates. Solar is brilliant if your roof suits it. And electric storage? Only if there's genuinely no other option. Whatever you choose, make sure it's installed by a licensed plumber who issues a compliance certificate. You can read more about the ",
    "hot water systems I install here",
    ".",
    "/gas-hot-water"
  ),
  p("Need help choosing the right hot water system for your home? Call me on 0450 800 382 and I'll come out, look at your setup, and give you a straight recommendation — no pressure, no upsell. That's how I work — Steve Kovac, Kovele Plumbing."),
];

// ─── DOCUMENTS ──────────────────────────────────────────────
const now = new Date().toISOString();

const posts = [
  {
    _id: `post-plumbing-emergency-tips`,
    _type: "post",
    title: "What to Do in a Plumbing Emergency",
    slug: { _type: "slug", current: "plumbing-emergency-tips" },
    excerpt:
      "Water pouring through the ceiling? Burst pipe? Here's exactly what to do in a plumbing emergency — from a Melbourne plumber with 40 years experience.",
    category: "Emergency",
    publishedAt: "2026-03-20T08:00:00.000Z",
    body: post1Body,
  },
  {
    _id: `post-how-to-choose-plumber-melbourne`,
    _type: "post",
    title: "How to Choose a Plumber in Melbourne",
    slug: { _type: "slug", current: "how-to-choose-plumber-melbourne" },
    excerpt:
      "Not sure who to trust? Here's how to choose a plumber in Melbourne — check their licence, watch for red flags, and avoid the cheapest quote.",
    category: "Advice",
    publishedAt: "2026-03-20T08:00:00.000Z",
    body: post2Body,
  },
  {
    _id: `post-signs-blocked-drain`,
    _type: "post",
    title: "Signs You Have a Blocked Drain",
    slug: { _type: "slug", current: "signs-blocked-drain" },
    excerpt:
      "Slow drains, gurgling noises, bad smells? These are the early blocked drain signs most people miss — and what to do about them.",
    category: "Drains",
    publishedAt: "2026-03-20T08:00:00.000Z",
    body: post3Body,
  },
  {
    _id: `post-hot-water-system-buying-guide`,
    _type: "post",
    title: "Hot Water System Buying Guide: Electric vs Gas vs Heat Pump vs Solar",
    slug: { _type: "slug", current: "hot-water-system-buying-guide" },
    excerpt:
      "Electric, gas, heat pump, or solar? A Melbourne plumber's honest hot water system buying guide — costs, running costs, and what I actually recommend.",
    category: "Hot Water",
    publishedAt: "2026-03-20T08:00:00.000Z",
    body: post4Body,
  },
];

// ─── PUBLISH ────────────────────────────────────────────────
const mutations = posts.map((doc) => ({
  createOrReplace: doc,
}));

async function publish() {
  console.log(`Publishing ${posts.length} blog posts to Sanity...`);

  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("Failed to publish:", JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log("Published successfully!");
  console.log(JSON.stringify(data, null, 2));
}

publish();
