import { Seo } from '@/components/seo/Seo'
import {
  JsonLd,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ServicesList } from '@/components/sections/ServicesList'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { ReviewsAggregate } from '@/components/sections/ReviewsAggregate'
import { SuburbTicker } from '@/components/sections/SuburbTicker'
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
    description: 'Ring 0418 340 501. Steve or Nick answers and asks what\'s going on.',
  },
  {
    title: 'Get a clear, fixed quote',
    description: 'We explain what needs doing and tell you exactly what it\'ll cost. No surprises.',
  },
  {
    title: 'We fix it right',
    description: 'We turn up on time, do the work properly, clean up after — and you pay exactly what we quoted.',
  },
]


export default function Home() {
  return (
    <PageLayout>
      <Seo
        title="Kovele Plumbing | Melbourne Plumbers You Can Trust | 0418 340 501"
        description="Steve and Nick Kovac, father-son plumbers with 40+ years experience. Blocked drains, hot water, roof plumbing, bathroom renovations. Call 0418 340 501."
        canonical="/"
        image="/images/steve-nick-kovele-fleet.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
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
        primaryCta={{ label: 'Call Steve Now', href: 'tel:0418340501' }}
        secondaryCta={{ label: 'Request a Callback', href: '/contact' }}
        splitImage="/images/steve-nick-kovele-fleet.webp"
        splitImageAlt="Steve and Nick Kovac, Kovele Plumbing"
        trustLine="4.9★ from 246 verified reviews on Google & Service Seeking"
        highlightWord="right"
      />

      <Stats stats={STATS} variant="inline" />

      <ServicesList />

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
        subtitle="Three simple steps from problem to fixed."
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

      <SuburbTicker />

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
        cta={{ label: 'Call Steve Now', href: 'tel:0418340501' }}
        secondaryCta={{ label: 'Request a Callback', href: '/contact' }}
      />
    </PageLayout>
  )
}
