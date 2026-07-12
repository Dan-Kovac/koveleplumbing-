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

const GENERAL_PLUMBING_FAQS = [
  {
    question: "How much does a plumber cost in Melbourne?",
    answer:
      "Rates vary by job complexity. Simple repairs like fixing a dripping tap typically cost $150-$300. We always provide a fixed quote before starting any work.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "For most general plumbing issues, yes. Call us in the morning and we'll often be there the same day.",
  },
  {
    question: "Can you fix low water pressure?",
    answer:
      "Yes. Low water pressure can be caused by corroded pipes, faulty pressure regulators, or water authority issues. We diagnose the cause and fix it.",
  },
  {
    question: "Do you do backflow testing?",
    answer:
      "Yes. We're licensed to test, install, and maintain backflow prevention devices as required by Melbourne Water.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Fully licensed (VBA registered) and insured. Steve is also a licensed gas fitter. We carry all required certifications.",
  },
  {
    question: "Should I repipe my old house?",
    answer:
      "If your home was built before the 1970s and still has the original galvanised pipes, repiping is worth considering. Signs you need it: brown water when you first turn on taps, low pressure that's getting worse over time, or pinhole leaks appearing in multiple spots. We can inspect and give you an honest assessment.",
  },
  {
    question: "How do you find hidden leaks?",
    answer:
      "We use a combination of acoustic listening equipment and thermal imaging to locate leaks behind walls, under floors, and in concrete slabs without cutting holes to search. Once found, we repair with minimal disruption.",
  },
  {
    question: "Do you work on new homes and renovations?",
    answer:
      "Yes. We do full plumbing rough-ins for new builds and renovations, including bathroom and kitchen plumbing, gas connections, and stormwater. We work alongside builders and coordinate with other trades.",
  },
]

export default function GeneralPlumbing() {
  return (
    <PageLayout>
      <Seo
        title="General Plumber Melbourne | Leak Repairs & Pipe Fixes | Kovele Plumbing"
        description="General plumbing services across Melbourne. Tap repairs, pipe fixes, leak detection, water pressure issues. 40+ years experience. Call Steve on 0418 340 501."
        canonical="/general-plumbing"
        image="/images/general-plumber-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "General Plumbing",
            "General plumbing services across Melbourne. Tap repairs, pipe fixes, leak detection, water pressure issues. 40+ years experience.",
            "https://koveleplumbing.com.au/general-plumbing",
          ),
          faqSchema(GENERAL_PLUMBING_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "General Plumbing", url: "https://koveleplumbing.com.au/general-plumbing" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="General plumbing for every Melbourne home."
        subtitle="After 40 years, there's no plumbing job we haven't seen. Taps, pipes, leaks, water pressure. We fix it all, properly."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-nick-kovele-fleet.webp"
        splitImageAlt="Steve and Nick Kovac, Kovele Plumbing Melbourne"
        highlightWord="every"
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <Stats
        stats={[
          { value: '6,000+', label: 'Jobs Completed' },
          { value: '40+', label: 'Years in the Trade' },
          { value: '246', label: 'Five-Star Reviews' },
          { value: '$0', label: 'Hidden Fees' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="What we fix"
        description="The everyday plumbing that keeps your home running. Dripping taps, burst pipes, slow drains, low water pressure. Whatever it is, we've fixed thousands of them."
        image="/images/bathroom-plumbing-melbourne.webp"
        imageAlt="General plumbing repairs"
        imagePosition="right"
        items={[
          'Tap repairs and replacements',
          'Pipe repairs and repiping',
          'Leak detection and repair',
          'Water pressure issues',
          'Stormwater drainage',
          'Backflow prevention testing and installation',
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <FeatureSplit
        title="Common plumbing issues in Melbourne homes"
        description="Melbourne's housing stock ranges from 100-year-old weatherboards to brand-new townhouses. Each era of home comes with its own plumbing quirks. Here's what we see most often."
        image="/images/general-plumber-melbourne.webp"
        imageAlt="Plumbing repairs in a Melbourne home"
        imagePosition="left"
        items={[
          'Old galvanised pipes. Homes built before the 1970s often have galvanised steel pipes that corrode from the inside, reducing water flow and turning water brown. The fix is repiping with modern copper or PEX.',
          "Leaking taps. A dripping tap wastes over 20,000 litres a year. Usually it's a worn washer or cartridge, a 15-minute fix that saves real money on your water bill.",
          'Low water pressure. Can be caused by corroded pipes, a faulty pressure limiting valve, or shared supply lines in older streets. We diagnose the actual cause, not just the symptom.',
          'Hidden leaks. Water under floors, inside walls, or in the slab. These cause structural damage if left. We use acoustic and thermal detection to find them without ripping things apart.',
          'Backflow issues. Required by Melbourne Water for certain properties. We test, install, and certify backflow prevention devices.',
          'Burst pipes in winter. Melbourne frosts can crack exposed pipes. We repair the burst and insulate exposed pipework to prevent it happening again.',
        ]}
        cta={{ label: 'Get a Quote', href: '/contact' }}
      />

      <Process
        title="How it works"
        subtitle="From problem to fixed in four steps."
        steps={[
          {
            title: 'Call Steve',
            description:
              "Tell us what's going on. Dripping tap? Burst pipe? Low pressure? We'll schedule a visit, often same-day.",
          },
          {
            title: 'Inspect and quote',
            description:
              "We look at the problem, explain what's causing it, and give you a fixed-price quote before we start.",
          },
          {
            title: 'Fix it right',
            description:
              "Quality parts, proper workmanship, and clean as we go. The job is done when it's done right.",
          },
          {
            title: 'Guarantee our work',
            description:
              "We stand behind everything we do. If there's an issue, we come back and make it right.",
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

      <FAQ title="Frequently asked questions" faqs={GENERAL_PLUMBING_FAQS} />

      <ServiceArea
        title="General plumbing across Melbourne"
        subtitle="Based in Bundoora, Steve and Nick service homes across Melbourne's north and inner east. Same-day service for most general plumbing jobs."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Tap repairs' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Leak detection' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Pipe repairs' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Old home repiping' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Victorian home plumbing' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Water pressure fixes' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Pipe replacement' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Terrace house plumbing' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Galvanised pipe replacement' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Backflow testing' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'General repairs' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Period home plumbing' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Leak repairs' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Burst pipe repairs' },
        ]}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />

      <CTABanner
        variant="personal"
        title="Need a plumber? Talk to Steve."
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
