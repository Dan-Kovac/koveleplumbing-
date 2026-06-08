import { Helmet } from 'react-helmet-async'
import {
  JsonLd,
  localBusinessSchema,
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
import { ReviewsAggregate } from '@/components/sections/ReviewsAggregate'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  HOMEPAGE_REVIEWS,
  REVIEW_PLATFORMS,
  AGGREGATE_RATING,
  TOTAL_REVIEWS,
} from '@/data/reviews'

const STATS = [
  { value: '40+', label: 'Years Experience' },
  { value: '246', label: 'Verified Reviews' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '150+', label: 'Bathrooms Installed' },
]

const SERVICES = [
  {
    title: 'Blocked Drains',
    excerpt: 'CCTV inspection and jet blasting. Same-day service.',
    href: '/blocked-drains',
    icon: <Droplets className="h-8 w-8" />,
    image: '/images/blocked-drain-repair-melbourne.webp',
    imageAlt: 'Blocked drain inspection with CCTV camera in Melbourne',
  },
  {
    title: 'Gas & Hot Water',
    excerpt: 'Licensed gas fitters. All brands serviced and installed.',
    href: '/gas-hot-water',
    icon: <Flame className="h-8 w-8" />,
    image: '/images/hot-water-system-repair-melbourne.webp',
    imageAlt: 'Steve and Nick testing gas fittings in Melbourne',
  },
  {
    title: 'Roof Plumbing',
    excerpt: 'Leak detection, gutter repairs, and roof flashing.',
    href: '/roof-plumbing',
    icon: <HomeIcon className="h-8 w-8" />,
    image: '/images/roof-plumber-steve-melbourne.webp',
    imageAlt: 'Roof plumber repairing flashing on Melbourne metal roof',
  },
  {
    title: 'General Plumbing',
    excerpt: 'Taps, pipes, leaks, and water pressure sorted.',
    href: '/general-plumbing',
    icon: <Wrench className="h-8 w-8" />,
    image: '/images/general-plumber-melbourne.webp',
    imageAlt: 'Steve and Nick fixing kitchen plumbing in Melbourne home',
  },
  {
    title: 'Toilet Repairs',
    excerpt: 'Cisterns, blockages, new installs, and upgrades.',
    href: '/toilet-repairs',
    icon: <Droplets className="h-8 w-8" />,
    image: '/images/toilet-repair-plumber-melbourne.webp',
    imageAlt: 'Nick Kovac repairing a toilet in Melbourne',
  },
  {
    title: 'Bathroom Renovations',
    excerpt: 'Full plumbing for your renovation. Start to finish.',
    href: '/bathroom-renovations',
    icon: <Bath className="h-8 w-8" />,
    image: '/images/bathroom-renovation-plumber-melbourne.webp',
    imageAlt: 'Bathroom renovation plumbing rough-in by Kovele Plumbing',
  },
]

const WHY_CHOOSE_ITEMS = [
  'Upfront pricing. You know the cost before we start',
  'Licensed and insured, including gas fitting',
  'Same-day service. We know it can\'t wait',
  '40 years of experience. We\'ve seen every problem',
  'Clean up when we\'re done. Your home, respected',
  'Real people, not a call centre. Steve or Nick answers',
]

const PROCESS_STEPS = [
  {
    title: 'Call Steve',
    description: 'Ring 0418 340 501. Steve or Nick will answer and ask what\'s going on.',
  },
  {
    title: 'Get a clear quote',
    description: 'We explain what needs doing and tell you exactly what it\'ll cost.',
  },
  {
    title: 'We fix it right',
    description: 'We turn up on time, do the work properly, and clean up after.',
  },
  {
    title: 'Pay a fair price',
    description: 'You pay what we quoted. No hidden charges. That\'s it.',
  },
]


export default function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title>Kovele Plumbing | Melbourne Plumbers You Can Trust | 0418 340 501</title>
        <meta
          name="description"
          content="Steve and Nick Kovac, father-son plumbers with 40+ years experience. Blocked drains, hot water, roof plumbing, bathroom renovations. Call 0418 340 501."
        />
        <link rel="canonical" href="https://koveleplumbing.com.au" />
        <meta property="og:title" content="Kovele Plumbing | Melbourne Plumbers You Can Trust | 0418 340 501" />
        <meta property="og:description" content="Steve and Nick Kovac, father-son plumbers with 40+ years experience. Blocked drains, hot water, roof plumbing, bathroom renovations. Call 0418 340 501." />
        <meta property="og:url" content="https://koveleplumbing.com.au" />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        badge="Melbourne's trusted father-son plumbers"
        title="Melbourne plumbers you can trust to do the job right."
        subtitle="Steve and Nick Kovac. Forty years of fixing Melbourne's plumbing. Fair prices, quality work, real people."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-nick-kovele-fleet.webp"
        splitImageAlt="Steve and Nick Kovac, Kovele Plumbing"
        trustLine="4.9★ from 246 verified reviews on Google & Service Seeking"
        highlightWord="right"
      />

      <Stats stats={STATS} variant="inline" />

      <ServiceCards
        variant="with-image"
        title="Every plumbing service your home needs"
        subtitle="From blocked drains to bathroom renovations. Whatever the job, we'll do it right."
        services={SERVICES}
      />

      <FeatureSplit
        title="Why Melbourne homeowners choose Kovele"
        description="After forty years on the tools, Steve has seen every plumbing problem Melbourne homes can throw at him. Nick brings fresh energy and the same dedication to doing things properly."
        image="/images/bathroom-plumbing-melbourne.webp"
        imageAlt="Steve and Nick Kovac at a Melbourne terrace house"
        imagePosition="left"
        items={WHY_CHOOSE_ITEMS}
        cta={{ label: 'About Steve & Nick', href: '/about' }}
      />

      <Process
        title="How it works"
        subtitle="Four simple steps from problem to fixed."
        steps={PROCESS_STEPS}
        variant="numbered"
        dark
      />

      <ReviewsAggregate
        variant="summary-cards"
        heading="246 verified reviews and counting"
        aggregate={AGGREGATE_RATING}
        total={TOTAL_REVIEWS}
        platforms={REVIEW_PLATFORMS}
        reviews={HOMEPAGE_REVIEWS}
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
