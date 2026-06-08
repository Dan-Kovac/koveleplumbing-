import { readFileSync } from "fs";

const config = JSON.parse(
  readFileSync("/Users/danielkovac/.config/sanity/config.json", "utf-8")
);
const TOKEN = config.authToken;
const PROJECT_ID = "m1ex2a5k";
const DATASET = "production";
const API_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${DATASET}`;

let keyCounter = 0;
function key() {
  return `b2k${(++keyCounter).toString(36).padStart(6, "0")}`;
}

function p(text) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  };
}

function h2(text) {
  return {
    _type: "block",
    _key: key(),
    style: "h2",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  };
}

function pWithLink(before, linkText, href, after) {
  const linkKey = key();
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [{ _key: linkKey, _type: "link", href }],
    children: [
      { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: linkText, marks: [linkKey] },
      { _type: "span", _key: key(), text: after, marks: [] },
    ],
  };
}

const posts = [
  // ── Post 5: What is a boundary trap? ──
  {
    _type: "post",
    title: "What is a boundary trap?",
    slug: { _type: "slug", current: "what-is-boundary-trap" },
    excerpt:
      "That little concrete box in your front yard does a big job. Steve explains what a boundary trap is, how it works, and what to do when it causes problems.",
    category: "Education",
    publishedAt: new Date().toISOString(),
    body: [
      p(
        "If you've ever wondered \"what is a boundary trap in plumbing?\" — you're not alone. I get asked about it at least once a week. It's one of those things most homeowners walk past every day without knowing what it does. But when it goes wrong, you'll know about it pretty quickly."
      ),

      h2("So what actually is it?"),
      p(
        "A boundary trap is a small pit — usually concrete, sometimes PVC — buried in your front yard near the property boundary. You'll spot it by its round or square lid sitting flush with the ground, often near the front fence or nature strip."
      ),
      p(
        "Its job is simple but important. It's the last stop for all the wastewater leaving your house before it enters the council sewer main under the street. Every drain in your home — kitchen, bathroom, laundry, toilet — all flows through your pipes and out through the boundary trap."
      ),

      h2("How does it work?"),
      p(
        "Inside the boundary trap there's a water seal — a U-shaped bend that holds water, just like the trap under your kitchen sink. That water seal stops sewer gases from travelling back up through your pipes and into your home. Without it, you'd smell raw sewage every time you walked past your front yard."
      ),
      p(
        "The wastewater flows in from your house drains, passes through the trap, and continues out to the council sewer. It's gravity-fed, so it relies on proper fall in the pipes to keep everything moving."
      ),

      h2("Why it matters"),
      p(
        "When the boundary trap is working properly, you never think about it. But when it blocks up, things get unpleasant fast. Sewage can back up into your lowest fixtures — usually the shower or laundry floor waste. I've seen it flood entire bathrooms."
      ),
      p(
        "The most common cause of boundary trap blockages? Tree roots. Older clay pipes are especially vulnerable. Roots find the tiniest crack, get in, and grow until the pipe is completely choked. I've pulled root masses the size of a football out of boundary traps."
      ),

      h2("Common problems I see"),
      p(
        "After 40 years of plumbing in Melbourne, I've cleared thousands of boundary traps. Here's what causes most of the grief:"
      ),
      p(
        "Tree roots — by far the number one issue. Certain trees are worse than others. Willows, liquid ambers, and fig trees are notorious."
      ),
      p(
        "Grease build-up — cooking fats and oils solidify in the trap over time, narrowing the pipe until it blocks completely."
      ),
      p(
        "Foreign objects — wet wipes, sanitary items, kids' toys. If it shouldn't go down the drain, it usually ends up caught at the boundary trap."
      ),
      p(
        "Collapsed pipes — in older Melbourne homes with original clay pipes, age and ground movement can crack or collapse sections."
      ),

      h2("Inspection and maintenance"),
      p(
        "You can lift the lid yourself to do a visual check. If you see standing water sitting well above the outlet pipe, there's likely a blockage downstream. If the trap is dry, the water seal has broken — that means sewer gases can come back up."
      ),
      p(
        "I recommend getting your boundary trap inspected every couple of years, especially if you've got large trees nearby. A CCTV drain camera can show exactly what's going on inside the pipe without any digging."
      ),

      h2("Who's responsible — you or the council?"),
      p(
        "This catches a lot of people out. You're responsible for everything from your house to the boundary trap, including the trap itself. The council (or your water authority — Melbourne Water in most cases) is responsible for the sewer main from your boundary trap to the street."
      ),
      p(
        "If the blockage is in your section, it's on you to get it fixed. If it's in the council main, they'll sort it out — but you need to call them and report it."
      ),

      h2("When to call a plumber"),
      p(
        "If drains are slow throughout the house, or you notice a sewage smell near the front yard, it's worth getting it looked at sooner rather than later. A simple jet blast to clear the boundary trap takes about 30 minutes and saves you from a much bigger mess."
      ),
      pWithLink(
        "Have a look at our ",
        "blocked drains service",
        "/blocked-drains",
        " page for more detail on how we sort these out."
      ),
      p(
        "If you reckon your boundary trap might be playing up, give me a call on 0418 340 501. I'll come out, have a look, and give you an honest answer."
      ),
    ],
  },

  // ── Post 6: Roof leak vs plumbing leak ──
  {
    _type: "post",
    title: "Roof leak vs plumbing leak: how to tell the difference",
    slug: { _type: "slug", current: "roof-leak-vs-plumbing-leak" },
    excerpt:
      "Water stain on the ceiling? It could be a roof leak or a plumbing leak — and the fix is completely different. Here's how Steve tells them apart.",
    category: "Advice",
    publishedAt: new Date().toISOString(),
    body: [
      p(
        "You spot a water stain on the ceiling and your first thought is \"roof leak.\" But here's the thing — a roof leak vs plumbing leak can look almost identical from below. I've been called out to fix \"roof leaks\" hundreds of times, only to find a leaking pipe hiding in the ceiling. And the other way round. Getting it right matters because the fix — and who you call — is completely different."
      ),

      h2("The rain test"),
      p(
        "This is the first thing I ask homeowners: does the stain get worse when it rains?"
      ),
      p(
        "If the water only appears during or right after heavy rain, it's almost certainly a roof leak. Water is getting in through damaged tiles, cracked flashing, or deteriorated pointing."
      ),
      p(
        "If the stain is there all the time — or gets worse when you run the shower, flush the toilet, or use the washing machine — you're looking at a plumbing leak. The rain has nothing to do with it."
      ),

      h2("Check your hot water system"),
      p(
        "Here's one most people don't think about. If your hot water system is mounted on the roof or has pipes running through the ceiling space, a slow leak from the unit or its pipes can drip onto the plasterboard and create a stain that looks exactly like a roof leak."
      ),
      p(
        "Run a hot tap and see if you hear any hissing or dripping in the ceiling. If the stain is warm to the touch, that's a dead giveaway — it's a hot water pipe."
      ),

      h2("Follow the pipes"),
      p(
        "If you're comfortable getting into the roof space (carefully — walk on the joists, not the plaster), take a torch and have a look. Follow the pipe routes and see if you can spot any moisture, green corrosion on copper pipes, or dripping."
      ),
      p(
        "Plumbing leaks tend to drip consistently from one spot. Roof leaks often leave a trail — water runs along a rafter or batten before dripping off, so the stain on the ceiling might be metres from where the water is actually getting in."
      ),

      h2("Other clues to look for"),
      p(
        "A sudden spike in your water bill often points to a plumbing leak. Your water meter can confirm it — turn off every tap and appliance in the house, then check if the meter is still ticking over. If it is, you've got a leak somewhere in your plumbing."
      ),
      p(
        "Mould or musty smells in the ceiling space usually mean the leak has been going on for a while, regardless of whether it's roof or plumbing. Either way, don't ignore it — ongoing moisture can damage timber framing and create health issues."
      ),

      h2("When you need a plumber vs a roofer"),
      p(
        "If it's clearly a roof issue — broken tiles, storm damage, deteriorated flashing — a roofer is your first call. But here's something a lot of people don't realise: roof plumbing is a separate trade. Gutters, downpipes, box gutters, roof flashings around pipes — that's all roof plumbing, and that's what I do."
      ),
      p(
        "If you've got a leak where a pipe penetrates the roof, or your box gutter is overflowing, or flashings have lifted — that's a plumber's job, not a roofer's."
      ),
      pWithLink(
        "We handle all kinds of roof plumbing work — check out our ",
        "roof plumbing services",
        "/roof-plumbing",
        " for the full rundown."
      ),

      h2("My honest advice"),
      p(
        "If you're not sure whether it's a roof leak or a plumbing leak, start with a plumber. We can get into the ceiling space, run diagnostics, check the pipes, and inspect the roof penetrations all in one visit. If it turns out to be a tiling issue, I'll tell you straight and point you to a good roofer."
      ),
      p(
        "The worst thing you can do is ignore it. A small drip today turns into a damaged ceiling, ruined insulation, and potentially rotten framing if you leave it. I've seen repair bills triple because someone put it off for six months."
      ),
      p(
        "Give me a call on 0418 340 501 and I'll come out and get to the bottom of it for you."
      ),
    ],
  },

  // ── Post 7: Bathroom renovation cost Melbourne ──
  {
    _type: "post",
    title: "How much does a bathroom renovation cost in Melbourne?",
    slug: { _type: "slug", current: "bathroom-renovation-cost-melbourne" },
    excerpt:
      "Steve breaks down real bathroom renovation costs in Melbourne — from budget to luxury — so you know what to expect before you start.",
    category: "Renovations",
    publishedAt: new Date().toISOString(),
    body: [
      p(
        "\"How much does a bathroom renovation cost in Melbourne?\" — it's the first question everyone asks, and the honest answer is: it depends. But after doing over 150 bathroom renovations across Melbourne's suburbs, I can give you real numbers, not vague guesses."
      ),

      h2("Budget ranges — what to realistically expect"),
      p(
        "For a standard bathroom renovation in Melbourne in 2026, here's what I'm seeing:"
      ),
      p(
        "Standard renovation ($15,000–$25,000): This covers a full strip-out of your existing bathroom, new waterproofing, new plumbing where needed, tiling, a new toilet, vanity, shower screen, and tapware. You're using good quality fixtures from mainstream brands. This is where most of our jobs sit."
      ),
      p(
        "Premium renovation ($25,000–$40,000): Same scope, but with higher-end fittings, floor-to-ceiling feature tiles, a frameless shower screen, wall-hung vanity, heated towel rail, and possibly a freestanding bath. More design detail, better materials."
      ),
      p(
        "Luxury renovation ($40,000+): Custom joinery, natural stone, underfloor heating, smart toilets, niche lighting, the works. These are the bathrooms you see in magazines. There's really no upper limit — I've done bathrooms north of $70K."
      ),

      h2("What's included in the plumbing cost?"),
      p(
        "Plumbing is one of the bigger line items in any bathroom reno, and for good reason. Here's what's typically involved:"
      ),
      p(
        "Disconnecting and removing all existing fixtures. Relocating or replacing water supply pipes (hot and cold). Moving or replacing drainage — this is the expensive bit if you're changing the layout. Installing new fixtures: toilet, basin, shower, bath. Gas work if you're adding a heated towel rail on a gas system. Connecting to the hot water system."
      ),
      p(
        "If you're keeping the same layout — toilet in the same spot, shower in the same spot — the plumbing cost is significantly lower than if you're moving things around. Moving a toilet, for example, means cutting concrete, re-routing drainage, and re-pouring. It adds thousands."
      ),

      h2("Hidden costs people miss"),
      p(
        "This is where budgets blow out, and I always make sure my clients know about these upfront:"
      ),
      p(
        "Waterproofing: It's a legal requirement in Melbourne, and it's not cheap to do properly. Expect $1,500–$3,000 depending on the size of the wet area. Don't let anyone cut corners here — failed waterproofing will cost you ten times as much to fix later."
      ),
      p(
        "Compliance certificates: Your plumber and waterproofer need to provide compliance certificates. Your council may also require a building permit for structural changes. Budget a few hundred for these."
      ),
      p(
        "Asbestos testing: If your home was built before 1990, there's a real chance the old bathroom has asbestos in the wall sheeting, floor tiles, or even the adhesive. Testing costs around $200–$400, and removal by a licensed removalist can add $2,000–$5,000 to your job."
      ),
      p(
        "Electrical work: Most bathroom renos need an electrician for new lighting, exhaust fans, heated towel rails, and sometimes a new circuit. Budget $1,000–$2,500."
      ),

      h2("How to save money without cutting corners"),
      p(
        "After 40-odd years in the trade, here's my honest advice on keeping costs down:"
      ),
      p(
        "Keep the same layout. The moment you move the toilet or shower position, the plumbing cost jumps. If you can work with the existing drain locations, you'll save thousands."
      ),
      p(
        "Choose your tiles wisely. The tiles themselves might cost $40/sqm vs $120/sqm — but the labour to lay them is the same either way. Don't go cheap on tiles; go smart. Large format tiles mean fewer grout lines and faster installation."
      ),
      p(
        "Don't move walls. Keeping the same footprint avoids structural work, plastering, and potential permit requirements."
      ),
      p(
        "Buy your own fixtures if you want to. Some clients find great deals on vanities and tapware online. I'm happy to install what you've bought — just check with me on specs first so we don't end up with compatibility issues."
      ),

      h2("Get a proper quote — not a guess"),
      pWithLink(
        "We specialise in bathroom renovations across Melbourne — take a look at our ",
        "bathroom renovations",
        "/bathroom-renovations",
        " page to see the kind of work we do."
      ),
      p(
        "I'll come out, measure up, talk through what you want, and give you a written quote that covers everything — no surprises halfway through the job. That's how I've always worked, and it's why our clients come back."
      ),
      p(
        "Call me on 0418 340 501 and let's talk about your bathroom."
      ),
    ],
  },

  // ── Post 8: Repair vs replace hot water system ──
  {
    _type: "post",
    title: "When to repair vs replace your hot water system",
    slug: { _type: "slug", current: "repair-vs-replace-hot-water" },
    excerpt:
      "Is your hot water system worth fixing, or is it time for a new one? Steve shares his honest rule of thumb after 40 years of servicing hot water systems across Melbourne.",
    category: "Hot Water",
    publishedAt: new Date().toISOString(),
    body: [
      p(
        "Should you repair or replace your hot water system? It's a question I answer almost every day. And look, I'm not in the business of selling you something you don't need. If your system can be fixed affordably, I'll fix it. But sometimes throwing money at an old unit is like putting new tyres on a car with a blown engine."
      ),

      h2("How long do hot water systems last?"),
      p(
        "Most hot water systems have a lifespan of 10 to 15 years. Some last longer with good maintenance, some fail earlier — especially in areas with hard water or if they've never been serviced."
      ),
      p(
        "Gas storage systems typically last 10–12 years. Electric storage systems can push 12–15 years. Continuous flow (instantaneous) gas units often last 15–20 years because they don't store water and cop less internal corrosion."
      ),
      p(
        "If your unit is in that 10–15 year range and having problems, the age alone is a big factor in the repair vs replace decision."
      ),

      h2("Signs your hot water system is dying"),
      p(
        "Here's what I look for when a client calls me out:"
      ),
      p(
        "Rust-coloured water: If the hot water coming out of your taps is brown or rusty, the tank is corroding from the inside. That's usually terminal — once the tank starts rusting through, it's only a matter of time before it leaks."
      ),
      p(
        "Water pooling around the base: A small amount of water from the pressure relief valve is normal. But if you're seeing a steady drip or a puddle around the base, the tank is likely cracked or the internal lining has failed."
      ),
      p(
        "Inconsistent temperature: If the water goes from hot to lukewarm to hot again, or you're running out of hot water faster than you used to, the heating element (electric) or burner (gas) could be failing — or sediment has built up in the tank, reducing capacity."
      ),
      p(
        "Strange noises: Rumbling, popping, or banging sounds from the tank usually mean sediment has hardened on the bottom. The unit is working harder to heat through the build-up."
      ),
      p(
        "Frequent repairs: If I've been out twice in the last year to fix different issues, that's a pattern. The unit is telling you it's done."
      ),

      h2("The 50% rule"),
      p(
        "Here's my rule of thumb, and it's served my clients well for decades: if the repair cost is more than 50% of the price of a new system, replace it."
      ),
      p(
        "For example, if a new gas storage system costs $2,000 installed, and the repair bill for your current unit is going to be $1,200, you're better off putting that money towards a new system with a full warranty and another 10–12 years of life."
      ),
      p(
        "On the other hand, if it's a $300 thermocouple replacement on a 6-year-old system, that's an easy repair. The system's got years of life left."
      ),

      h2("What about efficiency?"),
      p(
        "Older hot water systems are significantly less efficient than modern ones. A system from 2010 might have a 3-star energy rating, while a new equivalent could be 5 or 6 stars. That difference shows up on your gas or electricity bill every quarter."
      ),
      p(
        "If your system is working but costing you a fortune to run, it might be worth replacing even before it fails. I've had clients save $200–$400 a year on energy bills after upgrading."
      ),

      h2("Repair scenarios that make sense"),
      p(
        "Not every problem means replacement. Here are repairs I commonly do that are well worth it:"
      ),
      p(
        "Replacing a thermocouple or pilot assembly on a gas system — usually under $350."
      ),
      p(
        "Replacing a heating element on an electric system — around $250–$400."
      ),
      p(
        "Replacing the pressure and temperature relief valve — $150–$250."
      ),
      p(
        "Replacing the sacrificial anode — $200–$350. This is actually preventive maintenance that extends the tank's life. If you've never had it done and your system is 5+ years old, it's worth checking."
      ),

      h2("My honest take"),
      p(
        "I've been doing this for over 40 years, and I don't need to sell you a new hot water system to make a living. If yours can be repaired sensibly, I'll tell you. If it's on its last legs, I'll tell you that too — and explain your options without any pressure."
      ),
      pWithLink(
        "We work with all types of systems — have a look at our ",
        "gas hot water services",
        "/gas-hot-water",
        " page for more detail."
      ),
      p(
        "If your hot water is playing up, give me a call on 0418 340 501. I'll come out, assess the situation, and give you a straight answer."
      ),
    ],
  },
];

// ── Publish ──
const mutations = posts.map((doc) => ({
  create: doc,
}));

console.log(`Publishing ${mutations.length} blog posts to Sanity…`);

const res = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
});

const data = await res.json();

if (res.ok) {
  console.log("Success! Created document IDs:");
  data.results?.forEach((r, i) => {
    console.log(`  ${i + 1}. ${posts[i].title} → ${r.id}`);
  });
} else {
  console.error("Error:", JSON.stringify(data, null, 2));
  process.exit(1);
}
