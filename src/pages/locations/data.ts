export interface NearbySuburb {
  name: string
  slug: string
  distance: string
}

export interface LocationData {
  suburb: string
  slug: string
  image: string
  driveTime: string
  jobCount: string
  housingType: string
  /** 2-3 sentences on the suburb's housing stock and its plumbing implications. */
  intro: string
  /** Plumbing problems specific to this suburb's homes. */
  localIssues: string[]
  /** Suburb-specific FAQs, rendered before the generic ones and fed to schema. */
  localFaqs: { question: string; answer: string }[]
  nearbySuburbs: NearbySuburb[]
  /** Optional local testimonial. Omitted where we don't have a real one to quote. */
  testimonial?: {
    quote: string
    name: string
    role: string
    initials: string
  }
}

export const LOCATIONS: LocationData[] = [
  {
    suburb: 'Bundoora',
    slug: 'plumber-bundoora',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '5 minutes',
    jobCount: '500+',
    housingType: 'post-war brick homes and modern townhouses',
    intro:
      "Bundoora is our home base — we're on Greenstone Place, so we're usually at your door faster here than anywhere else. The suburb is a mix of 1950s-70s brick veneers and the newer townhouse developments around La Trobe. The older homes are hitting the age where galvanised pipes corrode and original hot water systems give out; the townhouses bring their own connection and metering jobs.",
    localIssues: [
      'Corroded galvanised water pipes in post-war homes causing low pressure and rusty water',
      'Original hot water systems from the 80s and 90s reaching the end of their life',
      'New water and gas connections for townhouse and unit developments',
      'Blocked drains from tree roots in the older, established streets',
    ],
    localFaqs: [
      {
        question: 'How fast can you really get to my Bundoora home?',
        answer:
          "We're based right here in Bundoora on Greenstone Place, so for most of the suburb we're 5-10 minutes away. For emergencies it's often faster than that. You're calling the closest licensed plumber you have.",
      },
      {
        question: 'My Bundoora home still has galvanised pipes. Should I replace them?',
        answer:
          "If you've got rusty or discoloured water, low pressure, or pinhole leaks, the galvanised pipe is corroding from the inside and it's worth replacing. We repipe in copper or PEX and can usually do a standard home in a day or two. Steve will tell you honestly whether it's urgent or something you can plan for.",
      },
    ],
    nearbySuburbs: [
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
      { name: 'Preston', slug: 'plumber-preston', distance: '10 min' },
      { name: 'Templestowe', slug: 'plumber-templestowe', distance: '25 min' },
    ],
    testimonial: {
      quote:
        "Called Steve at 6am with a burst pipe. He was at our door within 40 minutes. Fixed it, cleaned up, and was gone by 8. Didn't even charge extra for the early morning call.",
      name: 'Tom B.',
      role: 'Bundoora',
      initials: 'TB',
    },
  },
  {
    suburb: 'Heidelberg',
    slug: 'plumber-heidelberg',
    image: '/images/steve-kovac-van-portrait.webp',
    driveTime: '10 minutes',
    jobCount: '200+',
    housingType: 'weatherboard cottages and modern townhouses',
    intro:
      "Heidelberg runs from Californian bungalows and weatherboard cottages up near the old village down to newer homes along the Yarra flats. The period homes often still have their original drainage and roof plumbing, and being close to the river, we see a lot of tree-root intrusion and stormwater work. Steve knows the area's roofs particularly well.",
    localIssues: [
      'Ageing clay sewer and stormwater drains blocked by tree roots near the river',
      'Roof leaks and failing flashings on older weatherboard and tile-roof homes',
      'Original drainage in period cottages that needs relining or replacement',
      'Stormwater and drainage problems on the lower, river-flat blocks',
    ],
    localFaqs: [
      {
        question: 'Can you find a roof leak in an older Heidelberg home?',
        answer:
          "Yes — roof plumbing is one of Steve's strengths. Older Heidelberg homes leak at the flashings, valleys, and around penetrations, and it often shows up as a stain metres from the actual source. We track down where the water is really getting in and fix it, rather than guessing.",
      },
      {
        question: 'Why does my Heidelberg drain keep blocking?',
        answer:
          "Near the river, mature trees send roots into the joints of old clay pipes and they re-block every year or two. We CCTV the drain to find the intrusion, clear it, and can reline the pipe so the roots can't get back in — which fixes it for good rather than just this time.",
      },
    ],
    nearbySuburbs: [
      { name: 'Bundoora', slug: 'plumber-bundoora', distance: '5 min' },
      { name: 'Fairfield', slug: 'plumber-fairfield', distance: '15 min' },
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Kew', slug: 'plumber-kew', distance: '25 min' },
    ],
    testimonial: {
      quote:
        "Had a persistent roof leak that two other plumbers couldn't find. Steve found it in twenty minutes and fixed it on the spot. The man knows roofs.",
      name: 'David H.',
      role: 'Heidelberg',
      initials: 'DH',
    },
  },
  {
    suburb: 'Thornbury',
    slug: 'plumber-thornbury',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '15 minutes',
    jobCount: '180+',
    housingType: 'Edwardian weatherboards and period homes',
    intro:
      "Thornbury is Edwardian weatherboards and interwar homes, a lot of them mid-renovation as the area has gentrified. Under the fresh paint, most still run their original clay sewers and galvanised water pipes. We do a lot of repipes and reno rough-ins here, plus the drain and roof work these older homes need.",
    localIssues: [
      'Original clay sewer lines with root intrusion along the older streets',
      'Galvanised water pipes past their life, causing low pressure and leaks',
      'Rough-in plumbing for the kitchen and bathroom renovations the area is full of',
      'Roof and gutter repairs on ageing weatherboard and period homes',
    ],
    localFaqs: [
      {
        question: 'We’re renovating our Thornbury home. Can you handle the plumbing?',
        answer:
          "That's a lot of what we do in Thornbury. We handle the full rough-in and fit-off for kitchen and bathroom renos, coordinate with your builder and tiler, and provide the compliance certificates. Steve's happy to look at your plans and flag anything that'll cause trouble before it's in the walls.",
      },
      {
        question: 'Can you reline our old clay sewer without digging up the garden?',
        answer:
          "In most cases, yes. Pipe relining cures a new pipe inside the old clay one through existing access points, so there's no trenching across your yard. We CCTV the line first to confirm it's a candidate and show you what we're dealing with.",
      },
    ],
    nearbySuburbs: [
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
      { name: 'Preston', slug: 'plumber-preston', distance: '10 min' },
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Fitzroy North', slug: 'plumber-fitzroy-north', distance: '20 min' },
    ],
    testimonial: {
      quote:
        'Steve came within the hour on a Saturday evening. Fixed our burst pipe quickly and charged exactly what he quoted. A genuine professional.',
      name: 'Sarah M.',
      role: 'Thornbury',
      initials: 'SM',
    },
  },
  {
    suburb: 'Northcote',
    slug: 'plumber-northcote',
    image: '/images/steve-kovac-arms-crossed.webp',
    driveTime: '15 minutes',
    jobCount: '160+',
    housingType: 'Victorian terraces and Edwardian homes',
    intro:
      "Northcote is Victorian terraces and Edwardian homes, heavily renovated over the years and often more than once. The plumbing underneath tells the story — a patchwork of original clay and galvanised, later copper, and whatever the last renovation added. We spend our time here on repipes, drain root intrusion, and rough-ins for the next round of renovations.",
    localIssues: [
      'Root intrusion in original clay sewers along the terrace streets',
      'Mixed old pipework from multiple past renovations, prone to leaks',
      'Bathroom and kitchen renovation rough-ins in heritage homes',
      'Heritage-sensitive roof and box-gutter repairs on Victorian terraces',
    ],
    localFaqs: [
      {
        question: 'Our Northcote terrace has been renovated a few times. Can you sort out the mismatched pipes?',
        answer:
          "Yes — it's common in Northcote. Decades of partial renovations leave a mix of clay, galvanised, and copper that leaks at the joins. We can map what you've actually got, replace the failing sections, and bring it up to a consistent, reliable standard rather than patching the same leaks forever.",
      },
      {
        question: 'Do you do heritage box-gutter work on Victorian terraces?',
        answer:
          "Yes. Terrace box gutters and parapet flashings are a common cause of leaks in Northcote, and they need doing properly to stay watertight and in keeping with the home. Steve's done plenty of them and knows how these roofs behave.",
      },
    ],
    nearbySuburbs: [
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '15 min' },
      { name: 'Fitzroy North', slug: 'plumber-fitzroy-north', distance: '20 min' },
      { name: 'Fairfield', slug: 'plumber-fairfield', distance: '15 min' },
      { name: 'Brunswick', slug: 'plumber-brunswick', distance: '20 min' },
    ],
    testimonial: {
      quote:
        "Nick replaced our old hot water system in a morning. Professional, clean, and the price was fair. We've used Kovele three times now.",
      name: 'James K.',
      role: 'Northcote',
      initials: 'JK',
    },
  },
  {
    suburb: 'Brunswick',
    slug: 'plumber-brunswick',
    image: '/images/nick-kovac-plumber.webp',
    driveTime: '20 minutes',
    jobCount: '220+',
    housingType: 'Victorian terraces and Art Deco apartments',
    intro:
      "Brunswick is Victorian and Edwardian terraces, workers' cottages, and a growing number of apartment conversions off Sydney Road. Most of these homes still run their original clay sewer pipes and galvanised water lines — 100-plus years old and well past their use-by. We spend a lot of time in Brunswick on tree-root blockages, low pressure from corroded pipes, and heritage-overlay roof and gutter work that has to be done sympathetically.",
    localIssues: [
      'Clay sewer relining to stop recurring tree-root blockages',
      'Galvanised-to-copper repipes to fix low pressure and rusty water',
      'Roof and box-gutter repairs on heritage terraces and cottages',
      'Rough-in plumbing for the kitchen and bathroom renovations the area is full of',
    ],
    localFaqs: [
      {
        question: 'My Brunswick drain blocks every year. Can you actually fix it?',
        answer:
          "Yes. In Brunswick that recurring block is almost always tree roots getting into old clay pipe joints. Clearing it buys you a year; relining the pipe seals the joints so the roots can't get back in. We CCTV the drain, show you the problem, and give you both options with honest pricing.",
      },
      {
        question: 'Do you do heritage-compliant roof work in Brunswick?',
        answer:
          "Yes. A lot of Brunswick is under heritage overlay, so roof, gutter, and downpipe work needs to be done in keeping with the home and the local rules. Steve's worked on these terraces for years and knows how to do it right.",
      },
    ],
    nearbySuburbs: [
      { name: 'Coburg', slug: 'plumber-coburg', distance: '15 min' },
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '15 min' },
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
      { name: 'Fitzroy North', slug: 'plumber-fitzroy-north', distance: '20 min' },
    ],
    testimonial: {
      quote:
        "Called about a blocked drain and Steve had it sorted the same day. He showed us the CCTV footage and explained exactly what caused the problem.",
      name: 'Linda T.',
      role: 'Brunswick',
      initials: 'LT',
    },
  },
  {
    suburb: 'Doncaster',
    slug: 'plumber-doncaster',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '20 minutes',
    jobCount: '120+',
    housingType: '1970s brick homes and modern rebuilds',
    intro:
      "Doncaster is 1960s-70s brick-veneer family homes across the hill, with a steady stream of knock-down rebuilds mixed in. The original homes are at the age where sewers get root-bound and hot water systems fail, and the sloping blocks bring their own drainage and pressure quirks. The rebuilds need full new plumbing done to current standards.",
    localIssues: [
      'Root-bound sewer lines in the established 1970s streets',
      'Hot water system replacements as original units reach end of life',
      'Drainage and water-pressure issues on the sloping, elevated blocks',
      'Full plumbing rough-ins for knock-down rebuilds and large extensions',
    ],
    localFaqs: [
      {
        question: 'We’re doing a knock-down rebuild in Doncaster. Can you do the plumbing?',
        answer:
          "Yes — we do full new-home plumbing: underground drainage, water and gas rough-in, hot water, and fit-off, all to current Victorian standards with compliance certificates. Steve can work in with your builder's program so the plumbing stages land on time.",
      },
      {
        question: 'Our Doncaster home has low water pressure up the hill. Can you help?',
        answer:
          "Often, yes. On the higher Doncaster blocks, low pressure can come from corroded old pipes, a partially closed valve, or a pressure-limiting issue rather than the mains itself. We'll diagnose the real cause before recommending anything, so you're not paying for a pump you don't need.",
      },
    ],
    nearbySuburbs: [
      { name: 'Bulleen', slug: 'plumber-bulleen', distance: '20 min' },
      { name: 'Templestowe', slug: 'plumber-templestowe', distance: '25 min' },
      { name: 'Balwyn', slug: 'plumber-balwyn', distance: '25 min' },
    ],
    testimonial: {
      quote:
        'Nick installed our new gas cooktop and hot water system. Explained everything clearly, left the kitchen spotless, and the price was exactly what he quoted.',
      name: 'Peter C.',
      role: 'Doncaster',
      initials: 'PC',
    },
  },
  {
    suburb: 'Balwyn',
    slug: 'plumber-balwyn',
    image: '/images/steve-kovac-van-portrait.webp',
    driveTime: '25 minutes',
    jobCount: '100+',
    housingType: 'California bungalows and interwar homes',
    intro:
      "Balwyn is Californian bungalows and interwar period homes on established, leafy blocks — and those mature gardens are exactly why we get called. Big old trees send roots into original clay drains, and the period homes tend to have their first-generation drainage and tapware still in place. There's also a lot of high-end bathroom renovation work in the area.",
    localIssues: [
      'Blocked drains from mature garden trees getting into old clay pipes',
      'Original interwar drainage and tapware due for replacement',
      'High-end bathroom and ensuite renovation plumbing',
      'Roof and gutter maintenance on tiled period rooflines',
    ],
    localFaqs: [
      {
        question: 'The big trees in our Balwyn garden keep blocking the drains. What can you do?',
        answer:
          "This is the classic Balwyn job. We CCTV the drain to find where the roots are getting in, clear the blockage, and then either reline the affected section or plan a longer-term fix so you're not calling us every autumn. We'll tell you honestly which is worth doing.",
      },
      {
        question: 'Do you do high-end bathroom renovation plumbing in Balwyn?',
        answer:
          "Yes. We do the full plumbing side of premium bathroom and ensuite renovations — rough-in, wall-hung and in-wall fixtures, floor wastes, and fit-off — and coordinate with your builder and tiler so it's watertight and exactly where it needs to be.",
      },
    ],
    nearbySuburbs: [
      { name: 'Kew', slug: 'plumber-kew', distance: '25 min' },
      { name: 'Doncaster', slug: 'plumber-doncaster', distance: '20 min' },
      { name: 'Bulleen', slug: 'plumber-bulleen', distance: '20 min' },
    ],
    testimonial: {
      quote:
        "We've had three bathrooms done by Kovele over the years. Steve's advice on layout saved us money and the fixtures are still perfect years later.",
      name: 'Michael R.',
      role: 'Balwyn',
      initials: 'MR',
    },
  },
  {
    suburb: 'Fairfield',
    slug: 'plumber-fairfield',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '15 minutes',
    jobCount: '90+',
    housingType: 'weatherboard homes and 1920s bungalows',
    intro:
      "Fairfield is weatherboard homes and 1920s bungalows around the village and down toward the Yarra. Most still have their original galvanised water pipes and clay drainage, so repipes and root-related drain work are our bread and butter here. Being close to the river, stormwater and drainage jobs come up a lot too.",
    localIssues: [
      'Galvanised pipe replacement to restore water pressure and clear water',
      'Root intrusion in old clay drains near the river',
      'Stormwater and surface-drainage work on lower blocks',
      'Roof plumbing on ageing weatherboard and bungalow rooflines',
    ],
    localFaqs: [
      {
        question: 'Our Fairfield weatherboard has terrible water pressure. Why?',
        answer:
          "In these older Fairfield homes it's usually the original galvanised pipe corroding shut from the inside — the internal diameter narrows over decades until the pressure drops right off. Replacing it in copper or PEX restores the flow properly. Steve can confirm that's the cause before you commit to anything.",
      },
      {
        question: 'Can you help with stormwater flooding on our block?',
        answer:
          "Yes. On the lower Fairfield blocks near the river, surface flooding usually comes down to blocked or undersized stormwater drains and poor fall. We'll find where the water's actually going, clear or upgrade the drainage, and get it running away from your home.",
      },
    ],
    nearbySuburbs: [
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
      { name: 'Kew', slug: 'plumber-kew', distance: '25 min' },
    ],
    testimonial: {
      quote:
        "Steve replaced all the old pipes in our weatherboard. The water pressure is better than it's ever been. Quality work at a fair price.",
      name: 'Andrew S.',
      role: 'Fairfield',
      initials: 'AS',
    },
  },
  {
    suburb: 'Reservoir',
    slug: 'plumber-reservoir',
    image: '/images/steve-kovac-arms-crossed.webp',
    driveTime: '10 minutes',
    jobCount: '250+',
    housingType: 'post-war cream brick homes',
    intro:
      "Reservoir is one of Melbourne's biggest suburbs and it's full of post-war cream-brick homes on decent blocks — which is exactly the stock we work on most. These homes are at the age where sewers root up, hot water systems fail, and original pipework starts leaking. There's also a lot of subdivision and townhouse work going on across the suburb.",
    localIssues: [
      'Root intrusion and blockages in ageing post-war sewer lines',
      'Hot water system replacements across the older housing stock',
      'Leaking and corroded original water pipes',
      'New connections and drainage for subdivisions and townhouse builds',
    ],
    localFaqs: [
      {
        question: 'How quickly can you get to Reservoir?',
        answer:
          "We're in neighbouring Bundoora, so Reservoir is about 10 minutes for us — one of our closest and most-serviced suburbs. For emergencies we're often there faster. We've done 250-plus jobs across Reservoir and know the cream-brick homes well.",
      },
      {
        question: 'We’re subdividing our Reservoir block. Can you handle the plumbing?',
        answer:
          "Yes — we do the drainage, water, and gas connections for subdivisions and townhouse builds, coordinated with the build program and signed off with compliance certificates. Steve can talk you through what's involved before you start.",
      },
    ],
    nearbySuburbs: [
      { name: 'Bundoora', slug: 'plumber-bundoora', distance: '5 min' },
      { name: 'Preston', slug: 'plumber-preston', distance: '10 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '15 min' },
    ],
    testimonial: {
      quote:
        'Steve fixed a leak under our bathroom that another plumber said would need the whole floor ripped up. He found another way and saved us thousands.',
      name: 'Maria V.',
      role: 'Reservoir',
      initials: 'MV',
    },
  },
  {
    suburb: 'Templestowe',
    slug: 'plumber-templestowe',
    image: '/images/nick-kovac-plumber.webp',
    driveTime: '25 minutes',
    jobCount: '80+',
    housingType: 'large homes on bushland-fringe blocks',
    intro:
      "Templestowe is larger family homes on big, often bushland-fringe blocks, mostly from the 1970s onward. The size of the blocks means long drainage runs, plenty of outdoor and irrigation plumbing, and stormwater that has to be managed properly. Some pockets still run older systems that are due for an upgrade.",
    localIssues: [
      'Long underground drainage runs on large blocks, prone to root intrusion',
      'Stormwater management and surface drainage on bushland-fringe properties',
      'Outdoor taps, irrigation, and tank plumbing',
      'Hot water and gas system upgrades on older homes',
    ],
    localFaqs: [
      {
        question: 'We’ve got a blocked drain somewhere on a big Templestowe block. Can you find it?',
        answer:
          "Yes. On large Templestowe blocks the blockage can be a long way from the house, so we CCTV the line to locate exactly where it is before we dig or clear anything — no guesswork and no unnecessary trenching across your garden.",
      },
      {
        question: 'Do you do outdoor and irrigation plumbing?',
        answer:
          "Yes. On the bigger Templestowe properties we handle outdoor taps, tank and pump connections, irrigation supply, and stormwater — the outdoor plumbing that larger blocks need.",
      },
    ],
    nearbySuburbs: [
      { name: 'Doncaster', slug: 'plumber-doncaster', distance: '20 min' },
      { name: 'Bulleen', slug: 'plumber-bulleen', distance: '20 min' },
      { name: 'Bundoora', slug: 'plumber-bundoora', distance: '5 min' },
    ],
    testimonial: {
      quote:
        'Steve cleared our blocked stormwater drain and explained how to prevent it happening again. Honest advice, not an upsell. Rare to find.',
      name: 'Chris D.',
      role: 'Templestowe',
      initials: 'CD',
    },
  },
  {
    suburb: 'Coburg',
    slug: 'plumber-coburg',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '15 minutes',
    jobCount: '140+',
    housingType: 'interwar bungalows and renovated weatherboards',
    intro:
      "Coburg is a mix of Victorian cottages, interwar bungalows, and post-war brick along and around Sydney Road, with plenty of homes being renovated. The older stock still runs original clay drains and galvanised pipes, so repipes, drain clearing, and reno rough-ins keep us busy across the suburb.",
    localIssues: [
      'Clay drain root intrusion in the older cottage streets',
      'Galvanised pipe replacement for pressure and water-quality issues',
      'Renovation rough-ins for kitchens and bathrooms',
      'Ageing hot water systems due for replacement',
    ],
    localFaqs: [
      {
        question: 'Do you service all of Coburg, including Coburg North?',
        answer:
          "Yes — we cover Coburg and Coburg North, and we're only about 15 minutes away in Bundoora. We've done 140-plus jobs across the area, from Sydney Road cottages to the post-war homes further out.",
      },
      {
        question: 'Can you replace our hot water system same day in Coburg?',
        answer:
          "Usually, yes. We carry common parts and can often source and install a replacement unit the same day, so you're not left without hot water — especially important in winter. Steve will give you the honest repair-versus-replace call first.",
      },
    ],
    nearbySuburbs: [
      { name: 'Brunswick', slug: 'plumber-brunswick', distance: '20 min' },
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Preston', slug: 'plumber-preston', distance: '10 min' },
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '15 min' },
    ],
    testimonial: {
      quote:
        'Nick did a fantastic job on our bathroom renovation plumbing. On time, tidy, and his attention to detail was impressive.',
      name: 'Helen K.',
      role: 'Coburg',
      initials: 'HK',
    },
  },
  {
    suburb: 'Kew',
    slug: 'plumber-kew',
    image: '/images/steve-kovac-van-portrait.webp',
    driveTime: '25 minutes',
    jobCount: '110+',
    housingType: 'grand Edwardian and Federation homes',
    intro:
      "Kew is grand Edwardian and Federation homes on established, tree-lined streets — beautiful properties, but with first-generation drainage and pipework that's now well over a century old in places. Between the mature trees and the age of the plumbing, we do a lot of drain work, lead and galvanised pipe replacement, and careful renovation plumbing here.",
    localIssues: [
      'Old clay drainage prone to root intrusion from mature street trees',
      'Lead and galvanised pipe replacement in century-old homes',
      'Heritage-sensitive roof and gutter plumbing on grand rooflines',
      'Renovation and extension plumbing for period homes',
    ],
    localFaqs: [
      {
        question: 'Our Kew home is over 100 years old. Can you work on the old plumbing?',
        answer:
          "Yes — that's exactly the kind of home we're used to. Old Kew properties often still have lead or galvanised supply pipes and original clay drains. We replace the ageing pipework carefully and sympathetically to the home, and can stage it so it's not disruptive.",
      },
      {
        question: 'Do you handle plumbing for period-home renovations in Kew?',
        answer:
          "Yes. We do the plumbing for extensions and renovations on grand period homes — rough-in, drainage, gas, and fit-off — working in with your builder and respecting the character of the property. Steve's happy to review your plans early.",
      },
    ],
    nearbySuburbs: [
      { name: 'Balwyn', slug: 'plumber-balwyn', distance: '25 min' },
      { name: 'Fairfield', slug: 'plumber-fairfield', distance: '15 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
    ],
    testimonial: {
      quote:
        'Steve and Nick handled all the plumbing for our full bathroom renovation. Professional, clean, and their work is flawless.',
      name: 'Karen W.',
      role: 'Kew',
      initials: 'KW',
    },
  },
  {
    suburb: 'Fitzroy North',
    slug: 'plumber-fitzroy-north',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '20 minutes',
    jobCount: '130+',
    housingType: 'Victorian terrace houses',
    intro:
      "Fitzroy North is dense Victorian terraces and workers' cottages, most under heritage overlay and most still on their original clay sewers and galvanised water pipes. The tight blocks and shared boundaries make drain and repipe work here a specialist job, and the box gutters and parapets on these terraces are a common source of leaks.",
    localIssues: [
      'Root intrusion in shared and original clay sewer lines',
      'Galvanised pipe replacement in terraces with low pressure',
      'Heritage box-gutter and parapet-flashing leaks',
      'Renovation rough-ins in tight, boundary-to-boundary terraces',
    ],
    localFaqs: [
      {
        question: 'Our Fitzroy North terrace shares a drain with next door. Can you sort a blockage?',
        answer:
          "Yes — shared and boundary drains are common in Fitzroy North terraces. We CCTV the line to find exactly where the blockage or root intrusion is, work out whose section it's in, and clear or reline it. We'll explain clearly what's shared and what's yours.",
      },
      {
        question: 'The box gutter on our terrace leaks. Can you fix it?',
        answer:
          "Yes. Box gutters and parapet flashings on these Victorian terraces are a frequent cause of internal leaks, and they need doing properly to stay watertight in keeping with the heritage of the home. Steve's done plenty across the inner north.",
      },
    ],
    nearbySuburbs: [
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '15 min' },
      { name: 'Brunswick', slug: 'plumber-brunswick', distance: '20 min' },
    ],
    testimonial: {
      quote:
        'Steve replaced all the old galvanised pipes in our 1920s terrace. Massive job, done in two days, and the quality is outstanding.',
      name: 'Rachel G.',
      role: 'Fitzroy North',
      initials: 'RG',
    },
  },
  {
    suburb: 'Bulleen',
    slug: 'plumber-bulleen',
    image: '/images/steve-kovac-arms-crossed.webp',
    driveTime: '20 minutes',
    jobCount: '70+',
    housingType: '1960s-70s brick homes with large gardens',
    intro:
      "Bulleen is 1960s-70s brick homes on generous, well-established gardens near the Yarra. Those mature gardens and the age of the homes mean we see a lot of root-blocked drains, original hot water and gas systems at end of life, and the odd gas safety issue worth catching early. Being close to the river, drainage work comes up regularly too.",
    localIssues: [
      'Root-blocked drains from established garden trees',
      'Original hot water and gas systems reaching end of life',
      'Gas appliance servicing and safety checks',
      'Drainage and stormwater work on river-side blocks',
    ],
    localFaqs: [
      {
        question: 'Can you service our gas heater and check it’s safe in Bulleen?',
        answer:
          "Yes. Steve's a licensed gas fitter, so we service gas heaters, cooktops, and hot water units and carry out safety and carbon-monoxide checks. On older Bulleen homes it's worth doing — we've caught leaks and unsafe appliances that owners had no idea about.",
      },
      {
        question: 'The trees in our Bulleen garden keep blocking the drains. Can you fix it for good?',
        answer:
          "Often, yes. We CCTV the drain to find where roots are getting into the pipe, clear it, and can reline the affected section so the roots can't return. That turns a yearly problem into a one-time fix.",
      },
    ],
    nearbySuburbs: [
      { name: 'Doncaster', slug: 'plumber-doncaster', distance: '20 min' },
      { name: 'Templestowe', slug: 'plumber-templestowe', distance: '25 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
      { name: 'Kew', slug: 'plumber-kew', distance: '25 min' },
    ],
    testimonial: {
      quote:
        "Steve serviced our hot water system and found a small gas leak we didn't know about. Fixed both on the spot. Could have been dangerous. Grateful he spotted it.",
      name: 'Jenny L.',
      role: 'Bulleen',
      initials: 'JL',
    },
  },
  {
    suburb: 'Preston',
    slug: 'plumber-preston',
    image: '/images/steve-nick-kovele-fleet.webp',
    driveTime: '10 minutes',
    jobCount: '150+',
    housingType: 'Victorian cottages and post-war brick homes',
    intro:
      "Preston is a mix of Victorian and Edwardian cottages, post-war brick veneers, and newer townhouses, and it's gentrifying fast around High Street and the market. That means two kinds of work for us: the older homes need repipes and drain work as their original clay and galvanised gives out, while the renovations and townhouse builds need rough-ins and new connections. We're only about 10 minutes away in Bundoora.",
    localIssues: [
      'Root intrusion in original clay sewers in the older cottage streets',
      'Galvanised water pipe replacement for pressure and water quality',
      'Renovation and extension rough-ins as the area gentrifies',
      'New water and gas connections for townhouse developments',
    ],
    localFaqs: [
      {
        question: 'Do you service all of Preston, including Preston West and around the market?',
        answer:
          "Yes — we cover all of Preston and we're only about 10 minutes away in Bundoora, so response times are quick. We work on everything from the older cottages near High Street to the newer townhouses further out.",
      },
      {
        question: 'We’re renovating an old Preston cottage. Can you handle the plumbing?',
        answer:
          "That's a lot of what we do in Preston. Under the renovation, most of these cottages still have original clay drains and galvanised water pipes worth replacing while the walls are open. We do the full rough-in and fit-off, coordinate with your builder, and provide compliance certificates.",
      },
    ],
    nearbySuburbs: [
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Thornbury', slug: 'plumber-thornbury', distance: '10 min' },
      { name: 'Coburg', slug: 'plumber-coburg', distance: '10 min' },
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
    ],
  },
]
