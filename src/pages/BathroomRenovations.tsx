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
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { Stats } from '@/components/sections/Stats'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

const BATHROOM_RENO_FAQS = [
  {
    question: "How long does a bathroom renovation take?",
    answer:
      "The plumbing component typically takes 2-3 days for rough-in and 1-2 days for fit-off. The total renovation including tiling and waterproofing usually runs 3-6 weeks.",
  },
  {
    question: "How much does a bathroom renovation cost?",
    answer:
      "Plumbing costs for a standard bathroom renovation range from $5,000 to $12,000 depending on complexity. A full renovation including tiling, waterproofing, and fixtures typically runs $15,000-$35,000.",
  },
  {
    question: "Do you work with builders?",
    answer:
      "Yes. We work alongside builders, tilers, and waterproofers regularly. We coordinate schedules so the project runs smoothly. Happy to work with your team or recommend trusted trades.",
  },
  {
    question: "Can you help with the design?",
    answer:
      "We are plumbers, not interior designers. But after 150+ bathroom renovations, we know what works and what does not. We will advise on layout, fixture placement, and practical considerations.",
  },
  {
    question: "What if I cannot use my bathroom during the renovation?",
    answer:
      "We plan the work to minimise disruption. If you have a second bathroom, we will keep that running. If not, we can often stage the work to give you toilet access throughout.",
  },
  {
    question: "Do you provide compliance certificates?",
    answer:
      "Yes. All plumbing and gas work comes with the required compliance certificates as per Victorian regulations.",
  },
]

export default function BathroomRenovations() {
  return (
    <PageLayout>
      <Seo
        title="Bathroom Renovations Melbourne | Plumbing Specialists | Kovele Plumbing"
        description="150+ bathroom renovations completed across Melbourne. Full plumbing rough-in, fixture installation, waterproofing, and compliance certificates. Call Steve on 0418 340 501."
        canonical="/bathroom-renovations"
        image="/images/bathroom-renovation-plumber-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Bathroom Renovation Plumbing",
            "150+ bathroom renovations completed across Melbourne. Full plumbing rough-in, fixture installation, waterproofing, and compliance certificates.",
            "https://koveleplumbing.com.au/bathroom-renovations",
          ),
          faqSchema(BATHROOM_RENO_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Bathroom Renovations", url: "https://koveleplumbing.com.au/bathroom-renovations" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Your dream bathroom, built by Melbourne's most trusted plumbers."
        subtitle="From full gut renovations to fixture upgrades. We handle all the plumbing so your bathroom renovation goes smoothly."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/nick-kovac-plumber.webp"
        splitImageAlt="Nick Kovac with the Kovele Plumbing fleet"
        highlightWord="trusted"
        trustLine="150+ bathrooms completed across Melbourne"
      />

      <Stats
        stats={[
          { value: '150+', label: 'Bathrooms Completed' },
          { value: '40+', label: 'Years Experience' },
          { value: '246', label: 'Five-Star Reviews' },
          { value: '100%', label: 'Compliance Certified' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="What's included in our bathroom plumbing"
        description="We're the plumbing specialists in your renovation team. Whether you're working with a builder or managing the project yourself, we handle everything water and gas."
        image="/images/bathroom-plumbing-melbourne.webp"
        imageAlt="Bathroom renovation plumbing work"
        items={[
          'Design consultation. We advise on layout and fixture placement',
          'Full plumbing rough-in, including water, waste, and gas lines',
          'Fixture installation, including taps, basins, showers, baths, toilets',
          'Hot water relocation if needed',
          'Waterproofing coordination',
          'Compliance certificates for all work',
        ]}
        cta={{ label: 'Start Your Renovation', href: '/contact' }}
      />

      <Process
        title="The renovation process"
        subtitle="From first consultation to your finished bathroom."
        steps={[
          {
            title: 'Free consultation',
            description:
              "We visit your home, look at the existing bathroom, discuss what you want, and advise on what's possible. No charge, no obligation.",
          },
          {
            title: 'Plan and quote',
            description:
              "We work with your builder or directly with you to plan the plumbing layout. You get a detailed, fixed-price quote.",
          },
          {
            title: 'Rough-in plumbing',
            description:
              "We do all the behind-the-wall plumbing. Water supply, waste lines, gas if needed. Done right first time.",
          },
          {
            title: 'Fixture fit-off',
            description:
              "Once tiling and waterproofing are done, we come back to install all your fixtures. Everything connected, tested, and certified.",
          },
        ]}
        variant="numbered"
        dark
      />

      <Testimonials
        title="What our renovation customers say"
        subtitle="Real reviews from real Melbourne homeowners"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Bathroom renovation FAQs" faqs={BATHROOM_RENO_FAQS} />

      <ServiceArea
        title="Bathroom renovations across Melbourne"
        subtitle="Based in Bundoora, renovating bathrooms across all of Melbourne."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Full renovations' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Ensuite renovations' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Full renovations' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Period home bathrooms' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Heritage bathrooms' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Ensuite renovations' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Terrace bathrooms' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Full renovations' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Heritage bathrooms' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Full renovations' },
        ]}
      />

      <CTABanner
        variant="personal"
        title="Ready to start your bathroom renovation?"
        subtitle="Call Steve for a free consultation. We'll visit your home, discuss what you want, and give you a clear quote."
        avatar={{
          src: '/images/steve-portrait.webp',
          alt: 'Steve Kovac, Kovele Plumbing',
        }}
        availabilityText="Steve is available now"
        responseText="Free in-home consultations for bathroom renovations"
        cta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
      />
    </PageLayout>
  )
}
