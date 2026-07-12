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
  AlertTriangle,
  ShowerHead,
  Waves,
  Wrench,
} from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

const EMERGENCY_FAQS = [
  {
    question: "What does an after-hours callout cost?",
    answer:
      "After-hours rates apply for callouts outside business hours, but we always tell you the cost before we start. No surprises. The callout fee is typically $150-$250, plus the cost of the repair.",
  },
  {
    question: "How fast can you get here?",
    answer:
      "Our average response time is 60 minutes across Melbourne. Depending on your location and traffic, it may be faster or slightly longer. We'll give you an ETA when you call.",
  },
  {
    question: "What should I do while waiting for the plumber?",
    answer:
      "For burst pipes: turn off the main water valve (usually at the front of your property). For gas leaks: open windows, do not use electrical switches, and call your gas distributor emergency line. For flooding: try to contain the water with towels.",
  },
  {
    question: "Do you accept card payment for emergencies?",
    answer:
      "Yes. We accept card, cash, and bank transfer. We can process payment on the spot with our mobile terminal.",
  },
  {
    question: "Will you fix the problem on the first visit?",
    answer:
      "In most cases, yes. We carry common parts on the truck, including pipe fittings, valves, washers, and cistern components. For hot water replacements, we can often source and install a new unit same-day.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer:
      "Anything that is causing damage or poses a safety risk: burst pipes, flooding, gas leaks, sewer backups, no hot water in winter, or a completely blocked toilet in a single-bathroom home. If you are unsure, call Steve and he will tell you honestly.",
  },
  {
    question: "Do you work on weekends and public holidays?",
    answer:
      "Yes. Steve is available 24/7, 365 days a year. Weekend and public holiday rates apply, but we always confirm the cost before starting.",
  },
  {
    question: "Where is your main water shut-off valve?",
    answer:
      "Most Melbourne homes have the main shut-off valve near the front boundary, close to the water meter. It's usually a brass or plastic tap. Turn it clockwise to shut off all water to your home. If you cannot find it, Steve can talk you through it on the phone.",
  },
]

export default function EmergencyPlumber() {
  return (
    <PageLayout>
      <Seo
        title="Emergency Plumber Melbourne 24/7 | Kovele Plumbing"
        description="Emergency plumber Melbourne. Steve answers 24/7. Burst pipes, flooding, gas leaks, blocked drains. Average response: 60 minutes. Call 0418 340 501 now."
        canonical="/emergency-plumber"
        image="/images/emergency-plumber-melbourne-24-7.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Emergency Plumber Melbourne",
            "Emergency plumber Melbourne. 24/7 same-day service. Burst pipes, flooding, gas leaks, blocked drains. Average response: 60 minutes.",
            "https://koveleplumbing.com.au/emergency-plumber",
          ),
          faqSchema(EMERGENCY_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Emergency Plumber", url: "https://koveleplumbing.com.au/emergency-plumber" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Emergency plumber Melbourne. Call now."
        subtitle="Steve answers 24/7. Burst pipe, flooding, gas leak. Whatever the emergency, we're on our way."
        primaryCta={{ label: 'Call 0418 340 501', href: 'tel:0418340501' }}
        secondaryCta={{ label: 'Request a Callback', href: '/contact' }}
        splitImage="/images/steve-kovac-van-portrait.webp"
        splitImageAlt="Steve Kovac ready to respond to your plumbing emergency"
        highlightWord="now"
        trustLine="Average response time: 60 minutes"
      />

      <Stats
        stats={[
          { value: '24/7', label: 'Available' },
          { value: '60 min', label: 'Average Response' },
          { value: '4.9★', label: 'From 246 Reviews' },
          { value: '40+', label: 'Years Experience' },
        ]}
        variant="inline"
      />

      <FeaturesGrid
        title="Emergency types we handle"
        subtitle="Whatever the plumbing emergency, call Steve."
        features={[
          {
            icon: Waves,
            title: 'Burst Pipes',
            description: 'Turn off your main water valve and call us immediately. We carry pipe repair materials on the truck.',
          },
          {
            icon: Droplets,
            title: 'Flooding',
            description: 'Active flooding from a burst, leak, or overflow. We stop the water and fix the source.',
          },
          {
            icon: Flame,
            title: 'Gas Leaks',
            description: 'If you smell gas, open windows and call your gas distributor first, then call us. Steve is a licensed gas fitter.',
          },
          {
            icon: AlertTriangle,
            title: 'Blocked Drains',
            description: 'Overflowing drains, sewer backups, and blocked toilets. Same-day clearing.',
          },
          {
            icon: ShowerHead,
            title: 'No Hot Water',
            description: 'Hot water system failure. We diagnose and repair all brands, or source a replacement fast.',
          },
          {
            icon: Wrench,
            title: 'Sewer Backup',
            description: 'Sewage backing up into your home is a health hazard. We respond fast with the right equipment.',
          },
        ]}
        columns={3}
      />

      <Process
        title="How emergency callouts work"
        subtitle="Three steps. We keep it simple when it matters."
        steps={[
          {
            title: 'Call Steve on 0418 340 501',
            description:
              "Steve or Nick answers. Tell us what's happening and where you are. We'll be on our way.",
          },
          {
            title: "We're on our way",
            description:
              'Average response time: 60 minutes across Melbourne. We bring everything we need on the truck.',
          },
          {
            title: 'Problem fixed',
            description:
              'We stop the emergency, fix the cause, and make sure your home is safe. Fair pricing, even after hours.',
          },
        ]}
        variant="numbered"
        dark
      />

      <FeatureSplit
        title="What to do before we arrive"
        description="The first five minutes of a plumbing emergency matter. Here is what you can do to minimise damage while Steve is on his way."
        image="/images/plumbing-emergency-what-to-do.webp"
        imageAlt="Water shut-off valve at Melbourne home"
        items={[
          "Burst pipe: turn off your main water valve (usually near the front meter)",
          "Gas leak: open windows, do not use electrical switches, leave the house",
          "Flooding: turn off water at the mains, move valuables to higher ground",
          "Blocked sewer: stop using water in the house until we arrive",
          "No hot water: check the pilot light (gas) or circuit breaker (electric) first",
          "Leaking roof: place buckets under drips and move furniture away from the area",
        ]}
        cta={{ label: 'Call Steve Now', href: 'tel:0418340501' }}
      />

      <Testimonials
        title="Emergency response reviews"
        subtitle="Real experiences from Melbourne homeowners"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Emergency plumbing FAQs" faqs={EMERGENCY_FAQS} />

      <ServiceArea
        title="Emergency plumber coverage"
        subtitle="Based in Bundoora. Fast emergency response across all of Melbourne."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Burst pipes' },
          { name: 'Preston', href: '/plumber-preston', distance: '10 min', popularService: 'Burst pipes' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Gas leaks' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Flooding' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Burst pipes' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Blocked drains' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Burst pipes' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Gas leaks' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Sewer backup' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Burst pipes' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Hot water failure' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Gas leaks' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Flooding' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Burst pipes' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Blocked drains' },
        ]}
      />

      <CTABanner
        variant="simple"
        title="Don't wait. Call Steve now on 0418 340 501"
        subtitle="Available 24/7 for plumbing emergencies across Melbourne."
        cta={{ label: 'Call Now', href: 'tel:0418340501' }}
        secondaryCta={{ label: 'Request a Callback', href: '/contact' }}
      />
    </PageLayout>
  )
}
