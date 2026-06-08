import { Helmet } from 'react-helmet-async'
import {
  JsonLd,
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import {
  Droplets,
  Flame,
  Home as HomeIcon,
  Wrench,
  Bath,
} from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

interface NearbySuburb {
  name: string
  slug: string
  distance: string
}

interface LocationData {
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

const SERVICES = [
  {
    title: 'Blocked Drains',
    excerpt: 'CCTV inspection and jet blasting. Same-day service.',
    href: '/blocked-drains',
    icon: <Droplets className="h-8 w-8" />,
  },
  {
    title: 'Gas & Hot Water',
    excerpt: 'Licensed gas fitters. All brands serviced.',
    href: '/gas-hot-water',
    icon: <Flame className="h-8 w-8" />,
  },
  {
    title: 'Roof Plumbing',
    excerpt: 'Leak detection and gutter repairs.',
    href: '/roof-plumbing',
    icon: <HomeIcon className="h-8 w-8" />,
  },
  {
    title: 'General Plumbing',
    excerpt: 'Taps, pipes, leaks, and pressure sorted.',
    href: '/general-plumbing',
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    title: 'Toilet Repairs',
    excerpt: 'Cisterns, blockages, and new installs.',
    href: '/toilet-repairs',
    icon: <Droplets className="h-8 w-8" />,
  },
  {
    title: 'Bathroom Renovations',
    excerpt: 'Full plumbing for your renovation.',
    href: '/bathroom-renovations',
    icon: <Bath className="h-8 w-8" />,
  },
]

export function LocationPage({ data }: { data: LocationData }) {
  const locationFaqs = [
    {
      question: `How quickly can you get to ${data.suburb}?`,
      answer: `We're based in Bundoora, about ${data.driveTime} from ${data.suburb}. For emergencies, we respond within 60 minutes on average. For scheduled work, we arrive on time. Always.`,
    },
    {
      question: `Do you service ${data.suburb} regularly?`,
      answer: `${data.suburb} is one of our core service areas. We've completed ${data.jobCount} jobs in the area and know the local housing stock well.`,
    },
    {
      question: "Do you charge for travel time?",
      answer: "No. Our quotes include everything: travel, labour, and parts. The price we quote is the price you pay.",
    },
    {
      question: "Are you available for emergencies?",
      answer: "Yes. Steve answers 24/7 on 0418 340 501. Average emergency response time is 60 minutes across Melbourne.",
    },
    {
      question: `What plumbing issues are common in ${data.suburb}?`,
      answer: `${data.suburb} is known for its ${data.housingType}. These homes often have specific plumbing challenges related to their age and construction, from old galvanised pipes to ageing hot water systems. After ${data.jobCount} jobs in the area, Steve knows exactly what to look for.`,
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes. For most jobs, Steve can give you a cost estimate over the phone. For larger jobs like bathroom renovations, we visit your home for a free, no-obligation quote.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Fully licensed with the Victorian Building Authority (VBA) and insured. Steve and Nick are both licensed plumbers and gas fitters.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "Cash, card (Visa, Mastercard), and bank transfer. We process card payments on-site with our mobile terminal.",
    },
  ]

  return (
    <PageLayout>
      <Helmet>
        <title>Plumber {data.suburb} | Trusted Local Plumber | Kovele Plumbing</title>
        <meta
          name="description"
          content={`Your trusted plumber in ${data.suburb}. Based in Bundoora, ${data.driveTime} from ${data.suburb}. ${data.jobCount} jobs completed. Call Steve on 0418 340 501.`}
        />
        <link
          rel="canonical"
          href={`https://koveleplumbing.com.au/${data.slug}`}
        />
        <meta property="og:title" content={`Plumber ${data.suburb} | Trusted Local Plumber | Kovele Plumbing`} />
        <meta property="og:description" content={`Your trusted plumber in ${data.suburb}. Based in Bundoora, ${data.driveTime} from ${data.suburb}. ${data.jobCount} jobs completed. Call Steve on 0418 340 501.`} />
        <meta property="og:url" content={`https://koveleplumbing.com.au/${data.slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          faqSchema(locationFaqs),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: data.suburb, url: `https://koveleplumbing.com.au/${data.slug}` },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title={`Your trusted plumber in ${data.suburb}.`}
        subtitle={`Based in Bundoora, just ${data.driveTime} from ${data.suburb}. Steve and Nick have been looking after ${data.suburb} homes for over 40 years.`}
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage={data.image}
        splitImageAlt={`Plumber in ${data.suburb}, Kovele Plumbing`}
        highlightWord={data.suburb}
        trustLine={`${data.jobCount} jobs completed in ${data.suburb}`}
      />

      <Stats
        stats={[
          { value: data.jobCount, label: `Jobs in ${data.suburb}` },
          { value: '4.9★', label: 'Average Rating' },
          { value: data.driveTime, label: 'From Our Base' },
          { value: '40+', label: 'Years Experience' },
        ]}
        variant="inline"
      />

      <ServiceCards
        variant="minimal"
        title={`Plumbing services in ${data.suburb}`}
        subtitle={`Every plumbing service your ${data.suburb} home needs.`}
        services={SERVICES}
      />

      <FeatureSplit
        title={`Why ${data.suburb} homeowners choose Kovele`}
        description={`We know ${data.suburb}'s ${data.housingType}. After 40 years servicing the area, Steve understands the common plumbing issues these homes face and how to fix them properly.`}
        image="/images/kovele-plumbing-team-melbourne.webp"
        imageAlt="Steve and Nick Kovac, Kovele Plumbing"
        items={[
          `Fast response, just ${data.driveTime} from our Bundoora base`,
          `Deep knowledge of ${data.suburb}'s ${data.housingType}`,
          'Upfront pricing. You know the cost before we start',
          'Same-day service for most jobs',
          'Licensed, insured, and gas-certified',
        ]}
        cta={{ label: 'About Steve & Nick', href: '/about' }}
      />

      <Testimonials
        title={`What ${data.suburb} customers say`}
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <Process
        title={`How we work in ${data.suburb}`}
        subtitle="Simple, honest, and straightforward."
        steps={[
          {
            title: 'Call Steve',
            description:
              `Tell Steve what is going on. He knows ${data.suburb} homes well and can usually give you a rough idea of cost and timing over the phone.`,
          },
          {
            title: 'We show up on time',
            description:
              `Just ${data.driveTime} from our Bundoora base. We arrive when we say we will, with the right tools for the job.`,
          },
          {
            title: 'Fixed price before we start',
            description:
              'We inspect the problem, explain what needs doing, and give you a fixed quote. You approve before any work begins.',
          },
          {
            title: 'Job done, cleaned up',
            description:
              'Quality work, completed on time. We clean up after ourselves and provide compliance certificates for all regulated work.',
          },
        ]}
        variant="numbered"
        dark
      />

      <FAQ title={`Plumber ${data.suburb}: FAQs`} faqs={locationFaqs} />

      {data.nearbySuburbs && data.nearbySuburbs.length > 0 && (
        <ServiceArea
          title={`Also servicing near ${data.suburb}`}
          subtitle={`Based in Bundoora, we service all suburbs around ${data.suburb}.`}
          areas={data.nearbySuburbs.map((s) => ({
            name: s.name,
            href: `/${s.slug}`,
            distance: s.distance,
          }))}
          viewAllHref="/contact"
          viewAllLabel="View all 14 service areas"
        />
      )}

      <CTABanner
        variant="personal"
        title={`Need a plumber in ${data.suburb}? Talk to Steve.`}
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
