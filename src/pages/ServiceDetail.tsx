import { Helmet } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

interface ServiceDetailProps {
  seo: {
    title: string
    description: string
    canonical: string
  }
  hero: {
    title: string
    subtitle: string
    image: string
    imageAlt: string
    highlightWord?: string
  }
  features: {
    title: string
    description: string
    items: string[]
    image: string
    imageAlt: string
    imagePosition?: 'left' | 'right'
  }
  process: {
    title: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  faqs: { question: string; answer: string }[]
  ctaTitle: string
}

export function ServiceDetail({
  seo,
  hero,
  features,
  process,
  faqs,
  ctaTitle,
}: ServiceDetailProps) {
  return (
    <PageLayout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <Hero
        variant="split"
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage={hero.image}
        splitImageAlt={hero.imageAlt}
        highlightWord={hero.highlightWord}
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <FeatureSplit
        title={features.title}
        description={features.description}
        image={features.image}
        imageAlt={features.imageAlt}
        imagePosition={features.imagePosition ?? 'right'}
        items={features.items}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <Process
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
        variant="numbered"
        dark
      />

      <Testimonials
        title="What our customers say"
        subtitle="Real reviews from real Melbourne homeowners"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Frequently asked questions" faqs={faqs} />

      <CTABanner
        variant="personal"
        title={ctaTitle}
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
