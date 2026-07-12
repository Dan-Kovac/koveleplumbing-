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

const BLOCKED_DRAINS_FAQS = [
  {
    question: "How much does it cost to unblock a drain?",
    answer:
      "Most blocked drains cost between $150 and $400 to clear, depending on the severity and method required. We always quote before we start. No surprises.",
  },
  {
    question: "How long does it take to unblock a drain?",
    answer:
      "Most blockages are cleared within 1-2 hours. Complex issues like tree roots or collapsed pipes may take longer, but we'll explain everything upfront.",
  },
  {
    question: "What are the signs of a blocked drain?",
    answer:
      "Slow-draining sinks, gurgling sounds, bad smells from drains, water pooling in the yard, or toilet water rising when you flush. If you notice any of these, call us.",
  },
  {
    question: "Do you offer CCTV drain inspection?",
    answer:
      "Yes. We use CCTV cameras on every drain job. It lets us see the exact problem and means we only do the work that's actually needed.",
  },
  {
    question: "Can you fix blocked drains on weekends?",
    answer:
      "Yes. We offer same-day emergency service including weekends. Call 0418 340 501 and we'll get to you as fast as possible.",
  },
  {
    question: "What causes blocked drains in Melbourne?",
    answer:
      "Tree roots are the number one cause in Melbourne, especially in older suburbs with established gardens. Grease buildup, foreign objects, and broken pipes are also common.",
  },
  {
    question: "What is pipe relining and when do I need it?",
    answer:
      "Pipe relining is a no-dig repair method. We insert a resin-coated liner into the damaged pipe, inflate it, and it hardens to form a new pipe inside the old one. It's ideal for cracked or root-damaged pipes where digging up the yard would be expensive or disruptive.",
  },
  {
    question: "How can I prevent blocked drains?",
    answer:
      "Do not pour cooking grease down the sink. Let it solidify and bin it. Use drain strainers to catch hair and food scraps. Get your drains CCTV-inspected every few years, especially if you have large trees near your sewer line. Prevention is always cheaper than emergency clearing.",
  },
]

export default function BlockedDrains() {
  return (
    <PageLayout>
      <Seo
        title="Blocked Drain Repair Melbourne | Kovele Plumbing"
        description="Same-day blocked drain repair in Melbourne. CCTV inspection, jet blasting, pipe relining, and tree root removal. Call Steve on 0418 340 501."
        canonical="/blocked-drains"
        image="/images/blocked-drain-repair-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Blocked Drain Repair",
            "Same-day blocked drain repair in Melbourne. CCTV inspection, jet blasting, pipe relining, and tree root removal.",
            "https://koveleplumbing.com.au/blocked-drains",
          ),
          faqSchema(BLOCKED_DRAINS_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Blocked Drains", url: "https://koveleplumbing.com.au/blocked-drains" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Blocked drain? We'll find it and fix it today."
        subtitle="CCTV drain cameras, high-pressure jet blasting, and 40 years of knowing exactly where to look. Same-day service across Melbourne."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-nick-kovele-fleet.webp"
        splitImageAlt="Steve and Nick Kovac, Kovele Plumbing Melbourne"
        highlightWord="today"
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <Stats
        stats={[
          { value: '2,000+', label: 'Drains Unblocked' },
          { value: '40+', label: 'Years Experience' },
          { value: 'Same Day', label: 'Emergency Service' },
          { value: '100%', label: 'CCTV Diagnosed' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="How we fix blocked drains"
        description="We don't guess. We look. Our CCTV drain camera shows us exactly what's causing the blockage, so we fix the problem, not the symptom."
        image="/images/cctv-drain-inspection-melbourne.webp"
        imageAlt="Drain repair work by Kovele Plumbing"
        imagePosition="right"
        items={[
          'CCTV drain inspection to see the problem on screen',
          'High-pressure jet blasting to clear stubborn blockages',
          'Pipe relining to fix cracked pipes without digging',
          'Tree root removal, the most common cause in Melbourne',
          'Stormwater drain clearing',
          'Same-day emergency service available',
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <FeatureSplit
        title="CCTV drain inspection. See exactly what's going on"
        description="Our CCTV drain camera is a small waterproof camera on a flexible cable that feeds live footage to a monitor. We insert it into your drain and can see exactly what's causing the problem, whether it's tree roots, a grease buildup, a collapsed section, or a foreign object."
        image="/images/blocked-drain-repair-melbourne.webp"
        imageAlt="CCTV drain camera inspection footage"
        imagePosition="left"
        items={[
          'Real-time video footage of your drain condition',
          'Pinpoints the exact location and depth of the blockage',
          'Identifies tree root intrusion before it becomes a major issue',
          'Detects cracked, broken, or misaligned pipes',
          'Records footage so you can see exactly what we found',
          'Eliminates unnecessary digging and guesswork',
        ]}
        cta={{ label: 'Book a CCTV Inspection', href: '/contact' }}
      />

      <Process
        title="How it works"
        subtitle="From blocked to flowing in four steps."
        steps={[
          {
            title: 'Call Steve',
            description:
              "Ring 0418 340 501. Tell us what's happening. Slow drains, gurgling, overflow. We'll schedule a same-day visit.",
          },
          {
            title: 'We diagnose with CCTV',
            description:
              "Our camera goes in and we see exactly what's blocking the drain. No guesswork, no unnecessary work.",
          },
          {
            title: 'Clear the blockage',
            description:
              'Jet blasting, mechanical clearing, or root cutting. Whatever the drain needs. We show you the footage.',
          },
          {
            title: 'Preventive advice',
            description:
              "We explain what caused it and how to avoid it happening again. Honest advice, not an upsell.",
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

      <FAQ title="Frequently asked questions" faqs={BLOCKED_DRAINS_FAQS} />

      <ServiceArea
        title="Blocked drain service across Melbourne"
        subtitle="Based in Bundoora, we clear blocked drains across Melbourne's north and inner east. Same-day service to all these suburbs."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Tree root removal' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Sewer blockages' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Stormwater drains' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Kitchen drain blockages' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Old clay pipe issues' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Jet blasting' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'CCTV inspection' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Terrace house drains' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Pipe relining' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Stormwater blockages' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Garden drain clearing' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Tree root intrusion' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Sewer line clearing' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Stormwater systems' },
        ]}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />

      <CTABanner
        variant="personal"
        title="Blocked drain? Talk to Steve."
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
