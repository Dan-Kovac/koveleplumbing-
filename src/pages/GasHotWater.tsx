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

const GAS_HOT_WATER_FAQS = [
  {
    question: "How long does a hot water system last?",
    answer:
      "Storage tank systems typically last 10-15 years. Continuous flow (instantaneous) systems can last 15-20 years with regular servicing. We'll tell you honestly whether repair or replacement makes more sense.",
  },
  {
    question: "Should I repair or replace my hot water system?",
    answer:
      "If your system is under 10 years old and the repair is straightforward, we'll repair it. If it's older or the repair cost is more than half a new unit, replacement usually makes more sense.",
  },
  {
    question: "What brands do you service?",
    answer:
      "All major brands, including Rinnai, Rheem, Bosch, Dux, Stiebel Eltron, Thermann, AquaMAX, and more. If it heats water, we can fix it.",
  },
  {
    question: "Do you install gas hot water systems?",
    answer:
      "Yes. Steve is a licensed gas fitter. We install, connect, and certify all gas hot water systems to Australian standards.",
  },
  {
    question: "How much does hot water system replacement cost?",
    answer:
      "Replacement costs typically range from $1,200 to $3,500 depending on the type and size of system. We always provide a fixed quote before starting.",
  },
  {
    question: "Can you help with gas leaks?",
    answer:
      "Yes. Gas leaks are an emergency. Call us immediately on 0418 340 501. If you smell gas, also call your gas distributor emergency line.",
  },
  {
    question: "What are the government rebates for hot water upgrades?",
    answer:
      "The Victorian Energy Upgrades program offers rebates for switching from electric or gas storage to heat pump systems. Federal Small-scale Technology Certificates (STCs) can also reduce the upfront cost. We'll help you understand what you're eligible for.",
  },
  {
    question: "How long does a hot water system installation take?",
    answer:
      "A straightforward like-for-like replacement usually takes 2-4 hours. If we're changing the system type, say from electric storage to gas continuous flow, it may take a full day as we need to run new gas and water lines.",
  },
]

export default function GasHotWater() {
  return (
    <PageLayout>
      <Seo
        title="Gas & Hot Water Systems Melbourne | Kovele Plumbing"
        description="Licensed gas fitters in Melbourne. Hot water repairs, installations, gas heater servicing. All brands. Rinnai, Rheem, Bosch, Dux. Call Steve on 0418 340 501."
        canonical="/gas-hot-water"
        image="/images/hot-water-system-repair-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Gas and Hot Water Services",
            "Licensed gas fitters in Melbourne. Hot water repairs, installations, gas heater servicing. All brands. Rinnai, Rheem, Bosch, Dux.",
            "https://koveleplumbing.com.au/gas-hot-water",
          ),
          faqSchema(GAS_HOT_WATER_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Gas & Hot Water", url: "https://koveleplumbing.com.au/gas-hot-water" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Hot water out? We'll have it running today."
        subtitle="Licensed gas fitters servicing all brands. Repairs, replacements, and new installations across Melbourne."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-kovac-van-portrait.webp"
        splitImageAlt="Steve Kovac next to the Kovele Plumbing van"
        highlightWord="today"
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <Stats
        stats={[
          { value: '1,500+', label: 'Hot Water Jobs' },
          { value: '40+', label: 'Years Licensed' },
          { value: 'All Brands', label: 'Serviced & Installed' },
          { value: 'Same Day', label: 'Emergency Repairs' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="Gas and hot water services"
        description="Steve is a licensed gas fitter with four decades of experience. Whether your hot water system needs a repair or a full replacement, we service every brand and every type."
        image="/images/bathroom-plumbing-melbourne.webp"
        imageAlt="Hot water system installation"
        imagePosition="right"
        items={[
          'Hot water system repairs, all brands, all types',
          'New hot water installations, including electric, gas, solar, and heat pump',
          'Gas heater servicing and repairs',
          'Gas cooktop and oven connections',
          'Gas leak detection and repair',
          'Brands: Rinnai, Rheem, Bosch, Dux, Stiebel Eltron, Thermann',
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <FeatureSplit
        title="Which hot water system is right for your home?"
        description="There are four main types of hot water system, and the right one depends on your household size, gas availability, roof space, and budget. Here's a straight-talking breakdown."
        image="/images/hot-water-system-repair-melbourne.webp"
        imageAlt="Different hot water system types compared"
        imagePosition="left"
        items={[
          'Gas continuous flow (instantaneous). Heats water on demand, never runs out, compact wall-mounted units. Ideal for most Melbourne homes with a gas connection.',
          'Gas storage tank. Heats and stores 135 to 360 litres. Good for large households that use a lot of hot water at once. Needs outdoor space for the tank.',
          'Electric heat pump. Pulls heat from the air to warm water. Runs on electricity but uses 60 to 70% less than a standard electric tank. Eligible for government rebates.',
          'Solar hot water. Roof panels heat the water, with gas or electric boost for cloudy days. Lowest running costs long-term, but higher upfront investment.',
        ]}
        cta={{ label: 'Get Advice on the Right System', href: '/contact' }}
      />

      <Process
        title="How it works"
        subtitle="From cold water to hot in four steps."
        steps={[
          {
            title: 'Call Steve',
            description:
              "Tell us what's happening. No hot water, leaking tank, pilot light out. We'll often diagnose over the phone.",
          },
          {
            title: 'Diagnosis and quote',
            description:
              "We inspect the system, explain what's wrong, and give you a clear quote. Repair vs replace. We'll be honest about which makes sense.",
          },
          {
            title: 'Repair or replace',
            description:
              'Same-day repairs for most issues. If replacement is needed, we source the right unit and install it properly.',
          },
          {
            title: 'Test and certify',
            description:
              'We test everything, issue compliance certificates for gas work, and make sure your hot water is running perfectly.',
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

      <FAQ title="Frequently asked questions" faqs={GAS_HOT_WATER_FAQS} />

      <ServiceArea
        title="Gas and hot water service across Melbourne"
        subtitle="Licensed gas fitters based in Bundoora, servicing all of Melbourne's north and inner east. Same-day hot water repairs available."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Hot water repairs' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Gas heater servicing' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Hot water replacement' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Gas cooktop installs' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Continuous flow installs' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Gas leak detection' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Hot water system upgrades' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Gas compliance certs' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Heat pump installs' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Gas oven connections' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Gas hot water repairs' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Hot water replacements' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Gas heater repairs' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Solar hot water' },
        ]}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />

      <CTABanner
        variant="personal"
        title="No hot water? Talk to Steve."
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
