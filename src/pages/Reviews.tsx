import { Helmet } from 'react-helmet-async'
import {
  JsonLd,
  localBusinessSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { ReviewsAggregate } from '@/components/sections/ReviewsAggregate'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  FEATURED_REVIEWS,
  REVIEW_PLATFORMS,
  AGGREGATE_RATING,
  TOTAL_REVIEWS,
} from '@/data/reviews'

export default function Reviews() {
  return (
    <PageLayout>
      <Helmet>
        <title>Customer Reviews | 246 Five-Star Reviews | Kovele Plumbing Melbourne</title>
        <meta
          name="description"
          content="246 verified reviews from real Melbourne homeowners on Google and Service Seeking. Read what customers say about Steve and Nick Kovac."
        />
        <link rel="canonical" href="https://koveleplumbing.com.au/reviews" />
        <meta property="og:title" content="Customer Reviews | 246 Five-Star Reviews | Kovele Plumbing Melbourne" />
        <meta property="og:description" content="246 verified reviews from real Melbourne homeowners on Google and Service Seeking. Read what customers say about Steve and Nick Kovac." />
        <meta property="og:url" content="https://koveleplumbing.com.au/reviews" />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Reviews", url: "https://koveleplumbing.com.au/reviews" },
          ]),
        ]}
      />

      <Hero
        variant="minimal"
        title="246 verified reviews and counting."
        subtitle="Real reviews from real Melbourne homeowners on Google and Service Seeking. Click through to verify any of them."
        highlightWord="246"
      />

      <ReviewsAggregate
        variant="summary-cards"
        heading="What our customers say"
        aggregate={AGGREGATE_RATING}
        total={TOTAL_REVIEWS}
        platforms={REVIEW_PLATFORMS}
        reviews={FEATURED_REVIEWS}
      />

      <FeatureSplit
        title="Why our customers keep coming back"
        description="Most of our work comes from repeat customers and referrals. That is the best compliment a tradesperson can get. People trusting you enough to recommend you to their family and friends."
        image="/images/trusted-plumber-melbourne-reviews.webp"
        imageAlt="Steve Kovac talking with homeowner at front door"
        items={[
          "We answer the phone. You talk to Steve, not a call centre",
          "We show up on time and do what we said we would do",
          "We charge a fair price and never add hidden extras",
          "We clean up after ourselves. Every time",
          "We stand behind our work with a full workmanship guarantee",
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <CTABanner
        variant="personal"
        title="Join 246 happy customers. Talk to Steve."
        subtitle="If I cannot pick up, leave your details and what the job is about. I will call you back within two hours."
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
