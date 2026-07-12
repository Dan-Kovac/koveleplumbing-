import { Seo } from '@/components/seo/Seo'
import {
  JsonLd,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import {
  Droplets,
  Flame,
  Home as HomeIcon,
  Wrench,
  Bath,
  Siren,
} from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

const SERVICES = [
  {
    title: 'Blocked Drains',
    excerpt: 'CCTV inspection and jet blasting. Same-day service across Melbourne.',
    href: '/blocked-drains',
    icon: <Droplets className="h-8 w-8" />,
    image: '/images/blocked-drain-repair-melbourne.webp',
    imageAlt: 'Blocked drain inspection with CCTV camera in Melbourne',
  },
  {
    title: 'Gas & Hot Water',
    excerpt: 'Licensed gas fitters. All brands serviced, repaired, and installed.',
    href: '/gas-hot-water',
    icon: <Flame className="h-8 w-8" />,
    image: '/images/hot-water-system-repair-melbourne.webp',
    imageAlt: 'Steve and Nick testing gas fittings in Melbourne',
  },
  {
    title: 'Roof Plumbing',
    excerpt: 'Leak detection, gutter repairs, downpipes, and roof flashing.',
    href: '/roof-plumbing',
    icon: <HomeIcon className="h-8 w-8" />,
    image: '/images/gutter-repair-melbourne-plumber.webp',
    imageAlt: 'Gutter and drain repair by Kovele Plumbing Melbourne',
  },
  {
    title: 'General Plumbing',
    excerpt: 'Taps, pipes, leaks, water pressure, and backflow prevention.',
    href: '/general-plumbing',
    icon: <Wrench className="h-8 w-8" />,
    image: '/images/general-plumber-melbourne.webp',
    imageAlt: 'Steve and Nick fixing kitchen plumbing in Melbourne home',
  },
  {
    title: 'Toilet Repairs',
    excerpt: 'Cisterns, blockages, new installations, and dual flush upgrades.',
    href: '/toilet-repairs',
    icon: <Droplets className="h-8 w-8" />,
    image: '/images/toilet-repair-plumber-melbourne.webp',
    imageAlt: 'Nick Kovac repairing a toilet in Melbourne',
  },
  {
    title: 'Bathroom Renovations',
    excerpt: 'Full plumbing for your renovation. Design to fit-off, done right.',
    href: '/bathroom-renovations',
    icon: <Bath className="h-8 w-8" />,
    image: '/images/bathroom-renovation-plumber-melbourne.webp',
    imageAlt: 'Bathroom renovation plumbing rough-in by Kovele Plumbing',
  },
  {
    title: 'Emergency Plumber',
    excerpt: 'Burst pipes, flooding, gas leaks. Steve answers 24/7, 60-min response.',
    href: '/emergency-plumber',
    icon: <Siren className="h-8 w-8" />,
    image: '/images/emergency-plumber-melbourne-24-7.webp',
    imageAlt: 'Emergency plumber Melbourne, available 24/7',
  },
]

const SERVICES_FAQS = [
  {
    question: 'How do I know which service I need?',
    answer:
      "Call Steve and describe the problem. He will tell you exactly what is needed and give you a rough cost estimate over the phone. No obligation.",
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      "For most plumbing jobs, yes. Call in the morning and we will often be there the same day. Emergencies are responded to 24/7.",
  },
  {
    question: 'Are your prices fixed or hourly?',
    answer:
      "We provide fixed-price quotes for all work before we start. The price we quote is the price you pay. No hidden extras for travel, materials, or clean-up.",
  },
  {
    question: 'Do you provide compliance certificates?',
    answer:
      "Yes. All plumbing and gas work comes with the required compliance certificates as per Victorian regulations.",
  },
  {
    question: 'Can you work with my builder or renovator?',
    answer:
      "Absolutely. We coordinate with builders, tilers, and other trades regularly. Happy to work with your team or recommend trusted trades we know.",
  },
  {
    question: 'What brands do you work with?',
    answer:
      "All major brands for hot water systems, tapware, and fixtures. Rinnai, Rheem, Bosch, Caroma, Grohe, and more. We recommend what works best for your situation, not what earns us the biggest margin.",
  },
]

export default function Services() {
  return (
    <PageLayout>
      <Seo
        title="Plumbing Services Melbourne | Kovele Plumbing | 0418 340 501"
        description="Every plumbing service your home needs. Blocked drains, gas & hot water, roof plumbing, general plumbing, toilet repairs, and bathroom renovations across Melbourne."
        canonical="/services"
        image="/images/plumbing-services-melbourne.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Plumbing Services Melbourne",
            "Blocked drains, gas & hot water, roof plumbing, general plumbing, toilet repairs, and bathroom renovations across Melbourne.",
            "https://koveleplumbing.com.au/services",
          ),
          faqSchema(SERVICES_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Services", url: "https://koveleplumbing.com.au/services" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        badge="Licensed plumbers and gas fitters"
        title="Every plumbing service your home needs."
        subtitle="From blocked drains to bathroom renovations. Whatever the job, Steve and Nick will do it right."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-kovac-arms-crossed.webp"
        splitImageAlt="Steve Kovac, founder of Kovele Plumbing Melbourne"
        trustLine="246 five-star reviews from Melbourne homeowners"
      />

      <Stats
        stats={[
          { value: '6,000+', label: 'Jobs Completed' },
          { value: '40+', label: 'Years Experience' },
          { value: '246', label: 'Five-Star Reviews' },
          { value: '24/7', label: 'Emergency Service' },
        ]}
        variant="inline"
      />

      <ServiceCards
        variant="with-image"
        title="Our services"
        subtitle="Tap a service to learn more about how we can help."
        services={SERVICES}
      />

      <FeatureSplit
        title="Why choose Kovele for your plumbing"
        description="After forty years on the tools, Steve has seen every plumbing problem Melbourne homes can throw at him. Nick brings fresh energy and the same dedication to doing things properly."
        image="/images/plumbing-services-melbourne.webp"
        imageAlt="Steve and Nick walking to a Melbourne home"
        items={[
          'Licensed and insured, gas fitting included',
          'Upfront pricing. You know the cost before we start',
          "Same-day service. We know it can't wait",
          '40+ years of experience across Melbourne',
          "Clean up when we're done. Your home, respected",
        ]}
        cta={{ label: 'About Steve & Nick', href: '/about' }}
      />

      <Testimonials
        title="What our customers say"
        subtitle="Real reviews from real Melbourne homeowners"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Plumbing services FAQs" faqs={SERVICES_FAQS} />

      <ServiceArea
        title="Where we work"
        subtitle="Based in Bundoora, servicing all of Melbourne."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'General plumbing' },
          { name: 'Preston', href: '/plumber-preston', distance: '10 min', popularService: 'Blocked drains' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Roof plumbing' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Blocked drains' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Gas fitting' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Hot water' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Repiping' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Renovations' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Blocked drains' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Repiping' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Gas fitting' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Hot water' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Renovations' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Renovations' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'General plumbing' },
        ]}
      />

      <CTABanner
        variant="personal"
        title="Not sure what service you need? Talk to Steve."
        subtitle="Describe what's going on and Steve will point you in the right direction. No charge for the call, no obligation."
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
