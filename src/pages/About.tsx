import { Seo } from '@/components/seo/Seo'
import {
  JsonLd,
  localBusinessSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Stats } from '@/components/sections/Stats'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

export default function About() {
  return (
    <PageLayout>
      <Seo
        title="About Us | Melbourne's Father-Son Plumbers | Kovele"
        description="Meet Steve and Nick Kovac, Melbourne's father-son plumbing team. 40+ years experience, 246 five-star reviews. Based in Bundoora."
        canonical="/about"
        image="/images/steve-kovac-van-portrait.webp"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "About", url: "https://koveleplumbing.com.au/about" },
          ]),
        ]}
      />

      <Hero
        variant="split"
        badge="Melbourne's father-son plumbers since 1985"
        title="Forty years of fixing Melbourne's plumbing."
        subtitle="The Kovele story: a father who built a reputation on doing things right, and a son who's carrying it forward."
        highlightWord="Forty"
        splitImage="/images/steve-kovac-van-portrait.webp"
        splitImageAlt="Steve Kovac standing next to the Kovele Plumbing van"
        primaryCta={{ label: 'Request a Callback', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:0418340501' }}
        trustLine="246 five-star reviews from Melbourne homeowners"
      />

      <FeatureSplit
        title="Steve Kovac. 40 years on the tools"
        description="Steve started Kovele Plumbing in 1985 with a ute, a toolbag, and a simple idea: do the job right, charge a fair price, and treat every home like it's your own. Forty years later, that's still exactly how he operates. He's seen every plumbing problem Melbourne homes can produce, from Victorian terrace pipework to modern apartment plumbing. There's no textbook for the things Steve knows."
        image="/images/steve-kovac-arms-crossed.webp"
        imageAlt="Steve Kovac standing proudly next to the Kovele Plumbing van"
        imagePosition="right"
      />

      <FeatureSplit
        title="Nick Kovac, the next generation"
        description="Nick grew up watching his dad work and knew early that this was what he wanted to do. He brings fresh energy, modern techniques, and the same dedication to quality that Steve built the business on. Together, they're a team that combines deep experience with the drive to keep getting better. Customers describe them as a new breed of plumber. Skilled tradespeople who are also genuinely good people."
        image="/images/nick-kovac-plumber.webp"
        imageAlt="Nick Kovac with the Kovele Plumbing fleet"
        imagePosition="left"
        items={[
          'Trained by Steve from day one',
          'Licensed plumber and gas fitter',
          'Specialises in bathroom renovations and modern installations',
          'Same commitment to quality and honesty',
        ]}
      />

      <Stats
        stats={[
          { value: '40+', label: 'Years Experience' },
          { value: '246', label: 'Five-Star Reviews' },
          { value: '150+', label: 'Bathrooms Installed' },
          { value: '24/7', label: 'Emergency Service' },
        ]}
        variant="background"
      />

      <Process
        title="How we work"
        subtitle="Simple, honest, and straightforward. Every time."
        steps={[
          {
            title: 'You call Steve',
            description:
              "Tell Steve what is going on. He will give you honest advice on the phone. Sometimes that means telling you it is not worth calling a plumber.",
          },
          {
            title: 'We show up on time',
            description:
              "We arrive when we say we will, in a clean vehicle, with the right tools. No chasing, no waiting around all day.",
          },
          {
            title: 'Upfront quote before we start',
            description:
              "We look at the job, explain what needs doing, and give you a fixed price. No surprises, no hidden extras. You approve before any work begins.",
          },
          {
            title: 'Quality work, clean finish',
            description:
              "We do the job right the first time, clean up after ourselves, and leave your home the way we found it. Compliance certificates provided for all regulated work.",
          },
        ]}
        variant="numbered"
        dark
      />

      <Testimonials
        title="What Melbourne says about Steve and Nick"
        subtitle="Reviews that mention us by name"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ
        title="About Kovele Plumbing"
        faqs={[
          {
            question: 'How long has Kovele Plumbing been operating?',
            answer:
              "Steve started Kovele Plumbing in 1985. That's over 40 years of plumbing experience across Melbourne, from the inner north to the eastern suburbs.",
          },
          {
            question: 'Who are Steve and Nick?',
            answer:
              'Steve Kovac is the founder, a master plumber and licensed gas fitter with 40+ years on the tools. Nick is his son, a licensed plumber and gas fitter who joined the business full-time. Together they handle everything from emergency repairs to full bathroom renovations.',
          },
          {
            question: 'Are you licensed and insured?',
            answer:
              'Yes. Kovele Plumbing is fully registered with the Victorian Building Authority (VBA). Both Steve and Nick are licensed plumbers and gas fitters. We carry public liability insurance and provide compliance certificates for all regulated work.',
          },
          {
            question: 'What areas do you cover?',
            answer:
              "We're based in Bundoora and service all of Melbourne, particularly the inner north and eastern suburbs. Our core areas include Brunswick, Thornbury, Northcote, Heidelberg, Doncaster, Balwyn, Kew, Reservoir, Coburg, and surrounding suburbs.",
          },
          {
            question: 'Do you do commercial work?',
            answer:
              "We focus on residential plumbing. That's where our experience lies and where we do our best work. For commercial jobs, we can recommend trusted trades.",
          },
          {
            question: 'Why should I choose Kovele over a bigger company?',
            answer:
              'When you call Kovele, you get Steve or Nick, not a call centre. The person who answers is the person who does the work. We know your home, we remember your plumbing, and we genuinely care about doing it right.',
          },
        ]}
      />

      <CTABanner
        variant="personal"
        title="Ready to meet Melbourne's most trusted plumbing team?"
        subtitle="Give Steve a call. Whether it's a dripping tap or a full renovation, we'd love to help."
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
