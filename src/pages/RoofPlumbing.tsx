import { Seo } from '@/components/seo/Seo'
import {
  JsonLd,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

const ROOF_PLUMBING_FAQS = [
  {
    question: "How do I know if I have a roof leak?",
    answer:
      "Water stains on ceilings, peeling paint, damp patches on walls, or dripping during rain are all signs. Sometimes it's not a roof leak but a plumbing leak above. We can tell the difference.",
  },
  {
    question: "How much do gutter repairs cost?",
    answer:
      "Minor gutter repairs typically cost $200-$500. Full gutter replacement runs $1,500-$4,000 depending on the length and material. We always quote upfront.",
  },
  {
    question: "Do you install gutter guards?",
    answer:
      "Yes. Gutter guards reduce maintenance and prevent blockages from leaves and debris. We install quality guards that actually work.",
  },
  {
    question: "Can you fix roof leaks in the rain?",
    answer:
      "We can do emergency temporary repairs in the rain to stop water entering your home. Permanent repairs are best done in dry conditions for a proper seal.",
  },
  {
    question: "What causes gutters to overflow?",
    answer:
      "Leaf buildup, sagging gutters, incorrectly sized downpipes, or damaged fall (slope). We'll diagnose the cause and fix it, not just clear it.",
  },
  {
    question: "How often should gutters be cleaned?",
    answer:
      "At minimum twice a year. Once in late autumn after the leaves drop and once in late spring. If you have large trees overhanging your roof, you may need quarterly cleans. Gutter guards reduce this significantly.",
  },
  {
    question: "What is the difference between a roof plumber and a roofer?",
    answer:
      "A roof plumber handles everything water-related on your roof, including gutters, downpipes, flashings, valleys, and stormwater connections. A roofer handles the tiles or metal sheeting itself. For leaks, you usually need a roof plumber first to diagnose whether it's a plumbing issue or a roofing issue.",
  },
  {
    question: "Do you replace box gutters on older Melbourne homes?",
    answer:
      "Yes. Box gutters are common on period homes and they are one of the most failure-prone parts of a roof. We repair, reline, or fully replace box gutters depending on their condition. Getting this right is critical. A failed box gutter causes major internal water damage.",
  },
]

export default function RoofPlumbing() {
  return (
    <PageLayout>
      <Seo
        title="Roof Plumber Melbourne | Gutters & Leaks | Kovele"
        description="Melbourne roof plumbing and gutter repairs. Leak detection, downpipe replacement, gutter guards, and roof flashing. Call Steve on 0418 340 501."
        canonical="/roof-plumbing"
        image="/images/roof-plumber-steve-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Roof Plumbing and Gutter Repairs",
            "Melbourne roof plumbing and gutter repairs. Leak detection, downpipe replacement, gutter guards, and roof flashing.",
            "https://koveleplumbing.com.au/roof-plumbing",
          ),
          faqSchema(ROOF_PLUMBING_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Roof Plumbing", url: "https://koveleplumbing.com.au/roof-plumbing" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Melbourne roof plumbing and gutter repairs."
        subtitle="Leaking roof? Blocked gutters? Damaged downpipes? We find the problem and fix it properly, before it damages your home."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-kovac-arms-crossed.webp"
        splitImageAlt="Steve Kovac, Kovele Plumbing Melbourne"
        highlightWord="repairs"
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <Stats
        stats={[
          { value: '1,000+', label: 'Roofs Repaired' },
          { value: '40+', label: 'Years on Melbourne Roofs' },
          { value: 'Same Day', label: 'Emergency Leak Repairs' },
          { value: '100%', label: 'Leak Detection Rate' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="Roof plumbing services"
        description="Melbourne weather is hard on roofs. After 40 years of climbing up and fixing what the storms break, Steve knows exactly where to look and what to do."
        image="/images/roof-plumber-nick-melbourne.webp"
        imageAlt="Young plumber repairing roof flashing on Melbourne home"
        imagePosition="right"
        items={[
          'Roof leak detection and repair',
          'Gutter repairs and replacement',
          'Downpipe replacement and rerouting',
          'Roof flashing repairs',
          'Gutter guard installation',
          'Stormwater drainage connections',
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <FeatureSplit
        title="Why Melbourne homes need regular roof plumbing maintenance"
        description="Melbourne's weather cycle of hot summers, heavy autumn rain, and cold winters takes a real toll on your roof plumbing. Most of the damage we see could have been caught early with a simple inspection."
        image="/images/roof-plumber-steve-melbourne.webp"
        imageAlt="Experienced roof plumber repairing flashing on Melbourne metal roof"
        imagePosition="left"
        items={[
          "Rusted or cracked gutters. Melbourne's temperature swings expand and contract metal, causing splits and rust holes over time.",
          'Failed roof flashing. The lead or metal strips where your roof meets walls, chimneys, or vents dry out and lift, letting water in.',
          "Blocked downpipes from leaves, tennis balls, and bird nests. If the water can't get down, it backs up into your roof cavity.",
          'Sagging gutters. Brackets corrode or pull away from fascia boards, changing the fall and causing overflow.',
          'Valley gutter corrosion. The valleys where two roof sections meet cop the most water and wear out first.',
          'Damaged box gutters, common on older Melbourne homes. When these fail, water goes straight into the ceiling.',
        ]}
        cta={{ label: 'Book a Roof Inspection', href: '/contact' }}
      />

      <Process
        title="How it works"
        subtitle="From leak to sealed in four steps."
        steps={[
          {
            title: 'Call Steve',
            description:
              "Describe what you're seeing. Water stains, dripping, overflowing gutters. We'll schedule an inspection.",
          },
          {
            title: 'Roof inspection',
            description:
              "We get up there, inspect the roof, gutters, and downpipes, and identify exactly where the problem is.",
          },
          {
            title: 'Repair and restore',
            description:
              'Fix the leak, replace damaged sections, clear blockages. We use quality materials that last.',
          },
          {
            title: 'Clean up',
            description:
              "We clean up after ourselves and make sure everything's draining properly before we leave.",
          },
        ]}
        variant="numbered"
        dark
      />

      <Testimonials
        title="What our customers say"
        subtitle="Real reviews from real Melbourne homeowners"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Frequently asked questions" faqs={ROOF_PLUMBING_FAQS} />

      <ServiceArea
        title="Roof plumbing service across Melbourne"
        subtitle="Based in Bundoora, we handle roof plumbing and gutter repairs across Melbourne's north and inner east."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Gutter replacement' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Roof leak repairs' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Downpipe replacement' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Period home gutters' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Box gutter repairs' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Gutter guard installation' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Roof flashing' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Terrace roof plumbing' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Valley gutter repairs' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Stormwater connections' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Gutter repairs' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Period home roof plumbing' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Gutter replacement' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Leaf guard installs' },
        ]}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />

      <CTABanner
        variant="personal"
        title="Roof leak? Talk to Steve."
        subtitle="If I can't pick up, leave your details and what the job's about. I'll call you back within two hours."
        avatar={{
          src: '/images/steve-portrait.webp',
          alt: 'Steve Kovac, Kovele Plumbing',
        }}
        availabilityText="Steve is available now"
        responseText="Average callback time: under 2 hours during business hours"
        cta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
      />
    </PageLayout>
  )
}
