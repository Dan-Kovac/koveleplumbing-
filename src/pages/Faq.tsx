import { Helmet } from 'react-helmet-async'
import {
  JsonLd,
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'

const FAQS = [
  {
    question: 'How much does a plumber cost in Melbourne?',
    answer:
      'Rates depend on the job. Simple repairs like fixing a dripping tap typically cost $150 to $300. Hot water replacements run $1,200 to $3,500. Bathroom renovation plumbing ranges from $5,000 to $12,000. We always provide a fixed quote before starting.',
  },
  {
    question: 'Do you offer free quotes?',
    answer:
      "Yes. For most jobs, Steve can give you a rough idea over the phone. For larger jobs like bathroom renovations, we'll visit your home for a free, no-obligation quote.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Fully licensed (VBA registered) and insured. Steve is also a licensed gas fitter. We carry all required certifications for plumbing and gas work in Victoria.',
  },
  {
    question: 'What areas do you service?',
    answer:
      "We're based in Bundoora and service all of Melbourne, particularly the inner north and eastern suburbs. Bundoora, Brunswick, Thornbury, Northcote, Heidelberg, Doncaster, Balwyn, Kew, Reservoir, Fairfield, Templestowe, Coburg, Fitzroy North, Bulleen, and everywhere in between.",
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      "For most plumbing issues, yes. Call us in the morning and we'll often be there the same day. For emergencies, we respond 24/7 with an average response time of 60 minutes.",
  },
  {
    question: 'What should I do in a plumbing emergency?',
    answer:
      "For burst pipes: turn off your main water valve (usually at the front of your property near the meter). For gas leaks: open windows, don't use electrical switches, and call your gas distributor's emergency line. Then call Steve on 0418 340 501.",
  },
  {
    question: 'Do you charge extra for after-hours callouts?',
    answer:
      'After-hours rates apply outside business hours, but we always tell you the cost before we start. The callout fee is typically $150 to $250, plus the cost of the repair. No surprises.',
  },
  {
    question: 'How long does a hot water system last?',
    answer:
      "Storage tank systems typically last 10 to 15 years. Continuous flow (instantaneous) systems can last 15 to 20 years with regular servicing. We'll tell you honestly whether repair or replacement makes more sense.",
  },
  {
    question: 'What brands of hot water systems do you service?',
    answer:
      'All major brands including Rinnai, Rheem, Bosch, Dux, Stiebel Eltron, Thermann, AquaMAX, and more. If it heats water, we can fix it.',
  },
  {
    question: 'Can you do CCTV drain inspections?',
    answer:
      "Yes. We use CCTV cameras on every drain job. It lets us see exactly what's causing the blockage and means we only do the work that's actually needed.",
  },
  {
    question: 'How long does a bathroom renovation take?',
    answer:
      'The plumbing component typically takes 2 to 3 days for rough-in and 1 to 2 days for fit-off. The total renovation including tiling and waterproofing usually runs 3 to 6 weeks.',
  },
  {
    question: 'Do you provide compliance certificates?',
    answer:
      'Yes. All plumbing and gas work comes with the required compliance certificates as per Victorian regulations.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Cash, card (Visa, Mastercard), and bank transfer. We can process card payments on-site with our mobile terminal.',
  },
  {
    question: 'Do you guarantee your work?',
    answer:
      "Yes. We stand behind everything we do. If there's an issue with our workmanship, we come back and make it right at no extra cost.",
  },
  {
    question: 'Can you help with insurance claims for plumbing damage?',
    answer:
      'We can provide documentation, photos, and reports to support your insurance claim. Steve has helped many customers navigate the claims process over the years.',
  },
]

export default function Faq() {
  return (
    <PageLayout>
      <Helmet>
        <title>Frequently Asked Questions | Kovele Plumbing Melbourne</title>
        <meta
          name="description"
          content="Answers to common plumbing questions. Pricing, emergency service, hot water systems, bathroom renovations, and more. Kovele Plumbing Melbourne."
        />
        <link rel="canonical" href="https://koveleplumbing.com.au/faq" />
        <meta property="og:title" content="Frequently Asked Questions | Kovele Plumbing Melbourne" />
        <meta property="og:description" content="Answers to common plumbing questions. Pricing, emergency service, hot water systems, bathroom renovations, and more. Kovele Plumbing Melbourne." />
        <meta property="og:url" content="https://koveleplumbing.com.au/faq" />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "FAQ", url: "https://koveleplumbing.com.au/faq" },
          ]),
        ]}
      />

      <Hero
        variant="minimal"
        title="Frequently asked questions"
        subtitle="Answers to the questions Melbourne homeowners ask us most."
      />

      <FAQ title="General" faqs={FAQS} />

      <CTABanner
        variant="personal"
        title="Still have questions? Talk to Steve."
        subtitle="No question is too small. Call Steve and he'll give you a straight answer."
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
