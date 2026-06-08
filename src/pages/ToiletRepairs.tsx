import { Helmet } from 'react-helmet-async'
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

const TOILET_REPAIRS_FAQS = [
  {
    question: "Why is my toilet constantly running?",
    answer:
      "Usually a faulty fill valve, flush valve, or worn flapper. These are simple, affordable repairs that we can usually fix on the spot.",
  },
  {
    question: "How much does a toilet repair cost?",
    answer:
      "Most cistern repairs cost $150-$300 including parts. A full toilet replacement including supply and installation typically runs $500-$1,200.",
  },
  {
    question: "Can you install a new toilet?",
    answer:
      "Yes. We install all types including wall-hung, back-to-wall, close-coupled, and smart toilets. We'll help you choose the right one for your bathroom.",
  },
  {
    question: "What should I do if my toilet is blocked?",
    answer:
      "Do not keep flushing. You'll risk an overflow. Try a plunger first. If that doesn't work, call us. We've got the tools to clear any blockage.",
  },
  {
    question: "Do you repair concealed cisterns?",
    answer:
      "Yes. Concealed (in-wall) cisterns require specific expertise. We service all major brands including Geberit and Caroma.",
  },
  {
    question: "How much water does a running toilet waste?",
    answer:
      "A constantly running toilet can waste 30,000 to 60,000 litres per year. That's $150 to $300 added to your annual water bill for absolutely nothing. The repair usually costs less than the water you would waste in a few months.",
  },
  {
    question: "Should I upgrade to a dual flush toilet?",
    answer:
      "If you still have an old single-flush toilet, absolutely. A dual-flush uses 3 litres for a half flush and 4.5 litres for a full flush, compared to 11+ litres for older models. For a family of four, that saves roughly 35,000 litres a year. The upgrade usually pays for itself within two years.",
  },
  {
    question: "Can you move a toilet to a different position in the bathroom?",
    answer:
      "Yes, but it depends on the existing waste pipe layout. Moving a toilet involves rerouting the waste line and sometimes adjusting the floor. We'll assess your bathroom and let you know what's involved and what it'll cost before any work starts.",
  },
]

export default function ToiletRepairs() {
  return (
    <PageLayout>
      <Helmet>
        <title>Toilet Repairs Melbourne | Cistern & Blockage Fixes | Kovele Plumbing</title>
        <meta
          name="description"
          content="Toilet repairs and installations in Melbourne. Running cisterns, blocked toilets, new installations, dual flush upgrades. Call Steve on 0418 340 501."
        />
        <link rel="canonical" href="https://koveleplumbing.com.au/toilet-repairs" />
        <meta property="og:title" content="Toilet Repairs Melbourne | Cistern & Blockage Fixes | Kovele Plumbing" />
        <meta property="og:description" content="Toilet repairs and installations in Melbourne. Running cisterns, blocked toilets, new installations, dual flush upgrades. Call Steve on 0418 340 501." />
        <meta property="og:url" content="https://koveleplumbing.com.au/toilet-repairs" />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          serviceSchema(
            "Toilet Repairs and Installations",
            "Toilet repairs and installations in Melbourne. Running cisterns, blocked toilets, new installations, dual flush upgrades.",
            "https://koveleplumbing.com.au/toilet-repairs",
          ),
          faqSchema(TOILET_REPAIRS_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Toilet Repairs", url: "https://koveleplumbing.com.au/toilet-repairs" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        title="Toilet repairs and installations done right."
        subtitle="From running cisterns to complete replacements. We fix every toilet problem quickly, cleanly, and at a fair price."
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        splitImage="/images/steve-kovac-van-portrait.webp"
        splitImageAlt="Steve Kovac next to the Kovele Plumbing van"
        highlightWord="right"
        trustLine="4.9★ from 246 reviews on Google & Service Seeking"
      />

      <Stats
        stats={[
          { value: '3,000+', label: 'Toilets Repaired' },
          { value: '40+', label: 'Years Experience' },
          { value: '1 Hour', label: 'Most Repairs Done In' },
          { value: 'Same Day', label: 'Service Available' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="Toilet services"
        description="A running toilet wastes thousands of litres a year. A blocked one is an emergency. Either way, we'll have it sorted quickly."
        image="/images/bathroom-plumbing-melbourne.webp"
        imageAlt="Toilet repair and installation"
        imagePosition="right"
        items={[
          'Running cistern repairs',
          'Blocked toilet clearing',
          'New toilet installations',
          'Dual flush upgrades. Save water, save money',
          'Smart toilet installations',
          'Concealed cistern repairs',
        ]}
        cta={{ label: 'Request a Callback', href: '/contact' }}
      />

      <FeatureSplit
        title="Understanding your toilet, what goes wrong and why"
        description="Most toilet problems come down to a handful of common issues. Knowing what's happening helps you understand the repair, and whether it's urgent or can wait a day."
        image="/images/toilet-repair-plumber-melbourne.webp"
        imageAlt="Inside a toilet cistern showing common repair areas"
        imagePosition="left"
        items={[
          'Running cistern. Usually a faulty inlet valve or flush valve seal. The toilet constantly trickles water into the bowl, wasting up to 60,000 litres a year. Quick fix, big water bill savings.',
          "Blocked toilet. Caused by too much paper, foreign objects (kids' toys are a classic), or a partial blockage further down the sewer line. We clear it and check the line.",
          'Leaking at the base. The wax ring seal between the toilet and the floor flange has failed. Needs re-seating with a new seal. Left alone, it damages your flooring.',
          "Weak flush. Often a blocked rim jet or a cistern that's not filling properly. We clean or replace the internal components to restore full flush power.",
          'Concealed cistern issues. The cistern is hidden in the wall, so repairs need specific access panels and knowledge of the brand. We service Geberit, Caroma, and all major in-wall systems.',
          'Old single-flush toilets. Still common in older Melbourne homes. Upgrading to a dual-flush saves a family of four roughly 35,000 litres per year.',
        ]}
        cta={{ label: 'Book a Toilet Repair', href: '/contact' }}
      />

      <Process
        title="How it works"
        subtitle="From problem to flushing properly."
        steps={[
          {
            title: 'Call Steve',
            description:
              "Describe the issue. Running, blocked, leaking. We'll schedule a visit, often same-day.",
          },
          {
            title: 'Diagnose the problem',
            description:
              "We inspect the toilet, cistern, and connections. Most issues are straightforward. We'll explain what needs doing.",
          },
          {
            title: 'Fix or replace',
            description:
              "We carry common parts on the truck. Most repairs are done within an hour. If replacement is needed, we'll source the right toilet.",
          },
          {
            title: 'Test and clean',
            description:
              "We test everything, make sure it's flushing properly, and leave the bathroom cleaner than we found it.",
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

      <FAQ title="Frequently asked questions" faqs={TOILET_REPAIRS_FAQS} />

      <ServiceArea
        title="Toilet repairs across Melbourne"
        subtitle="Based in Bundoora, we fix and install toilets across Melbourne's north and inner east. Most repairs done same-day."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min', popularService: 'Cistern repairs' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min', popularService: 'Blocked toilet clearing' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min', popularService: 'Toilet replacements' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min', popularService: 'Running toilet fixes' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min', popularService: 'Dual flush upgrades' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min', popularService: 'Concealed cistern repairs' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min', popularService: 'Toilet installations' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min', popularService: 'Cistern repairs' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min', popularService: 'Period home toilet upgrades' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min', popularService: 'Smart toilet installs' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min', popularService: 'Toilet repairs' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min', popularService: 'Wall-hung toilet installs' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min', popularService: 'Toilet replacements' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min', popularService: 'Blocked toilet clearing' },
        ]}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />

      <CTABanner
        variant="personal"
        title="Toilet trouble? Talk to Steve."
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
