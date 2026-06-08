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
  nearbySuburbs: NearbySuburb[]
  testimonial: {
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
    nearbySuburbs: [
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
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
    nearbySuburbs: [
      { name: 'Northcote', slug: 'plumber-northcote', distance: '15 min' },
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Coburg', slug: 'plumber-coburg', distance: '15 min' },
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
    nearbySuburbs: [
      { name: 'Bundoora', slug: 'plumber-bundoora', distance: '5 min' },
      { name: 'Heidelberg', slug: 'plumber-heidelberg', distance: '10 min' },
      { name: 'Coburg', slug: 'plumber-coburg', distance: '15 min' },
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
    nearbySuburbs: [
      { name: 'Reservoir', slug: 'plumber-reservoir', distance: '10 min' },
      { name: 'Brunswick', slug: 'plumber-brunswick', distance: '20 min' },
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
]
