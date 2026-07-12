import { Seo } from '@/components/seo/Seo'
import {
  JsonLd,
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/JsonLd'
import { PageLayout } from '@/components/layout/PageLayout'
import { Stats } from '@/components/sections/Stats'
import { ContactSplit } from '@/components/sections/ContactSplit'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { CTABanner } from '@/components/sections/CTABanner'
import { PAGE_REVIEWS, toTestimonials } from '@/data/reviews'

const CONTACT_FAQS = [
  {
    question: "How quickly will Steve get back to me?",
    answer:
      "During business hours (Mon-Fri 6am-6pm, Sat 7am-5pm), Steve typically calls back within 2 hours. For emergencies, call directly. Steve answers 24/7.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes. For most jobs, Steve can give you a rough idea over the phone. For larger jobs like bathroom renovations, we'll visit your home for a free, no-obligation quote.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We're based in Bundoora and service all of Melbourne, particularly the inner north and eastern suburbs including Brunswick, Thornbury, Northcote, Heidelberg, Doncaster, Balwyn, Kew, and more.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, card (Visa, Mastercard), and bank transfer. We can process card payments on-site with our mobile terminal.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Standard hours are Monday to Friday 6am-6pm, Saturday 7am-5pm. For plumbing emergencies, Steve is available 24/7, 365 days a year.",
  },
  {
    question: "How do I get an exact quote?",
    answer:
      "Call Steve and describe the job. For straightforward work like tap repairs, unblocking drains, or hot water servicing, he can usually give you a fixed price over the phone. For larger jobs, he will come to your home for a free inspection and quote.",
  },
  {
    question: "Do you charge a callout fee?",
    answer:
      "For standard appointments during business hours, no. Our quotes include travel, labour, and materials. After-hours emergency callouts do carry a callout fee, which Steve will tell you before he heads out.",
  },
  {
    question: "Can I book online?",
    answer:
      "You can submit a callback request using the form above and Steve will call you back. For the fastest response, call Steve directly on 0418 340 501.",
  },
]

export default function Contact() {
  return (
    <PageLayout>
      <Seo
        title="Contact Kovele Plumbing | Get a Quote | Call 0418 340 501"
        description="Contact Kovele Plumbing for a free quote. Call Steve on 0418 340 501 or fill in the form. Based in Bundoora, servicing all of Melbourne."
        canonical="/contact"
      />
      <JsonLd
        schemas={[
          localBusinessSchema(),
          faqSchema(CONTACT_FAQS),
          breadcrumbSchema([
            { name: "Home", url: "https://koveleplumbing.com.au" },
            { name: "Contact", url: "https://koveleplumbing.com.au/contact" },
          ]),
        ]}
      />

      <ContactSplit
        title="Get in touch with Steve"
        subtitle="Call, email, or fill in the form. Steve will get back to you within two hours during business hours."
        phone="0418 340 501"
        email="koveleplumbing5@bigpond.com"
        address="Bundoora, VIC 3083"
        ctaLabel="Request a Callback"
        avatarSrc="/images/steve-portrait.webp"
        availabilityText="Steve is available now"
        responseTime="Average callback: under 2 hours"
        miniReviews={[
          {
            name: 'YC C.',
            rating: 5,
            text: "What a wonderful duo, father and son! Extremely competent and kind! He kindly replaced a shower head for me at no extra cost.",
          },
          {
            name: 'Ryan C.',
            rating: 5,
            text: 'Steve and Nick were on time, very professional, and did an excellent job. The problem was solved quickly and neatly.',
          },
          {
            name: 'Andrea R.',
            rating: 5,
            text: 'I have been using Steve for about 8 to 10 years now. He has always gone above and beyond. I will continue to call on Steve for all my plumbing needs.',
          },
          {
            name: 'Anbin',
            rating: 5,
            text: 'Quick response, came same day, quality work. Communication was transparent.',
          },
          {
            name: 'Paul H.',
            rating: 5,
            text: 'Called Steve in the morning, he was at our house by lunch. Fixed the hot water system same day. Fair price, no fuss.',
          },
        ]}
      />

      <Stats
        stats={[
          { value: '< 2 hrs', label: 'Average Callback Time' },
          { value: '24/7', label: 'Emergency Availability' },
          { value: '246', label: 'Five-Star Reviews' },
          { value: 'Free', label: 'Quotes & Advice' },
        ]}
        variant="inline"
      />

      <FeatureSplit
        title="What happens when you call Steve"
        description="You won't get a call centre or an answering service. When you call Kovele, you talk to Steve, the plumber who'll actually do the work. He'll listen, give you honest advice, and tell you roughly what it'll cost before he even comes out."
        image="/images/call-steve-kovac-plumber.webp"
        imageAlt="Steve Kovac on the phone with a customer"
        items={[
          "Phone answered personally by Steve or Nick",
          "Honest advice, sometimes that means saving you a callout",
          "Rough cost estimate over the phone for most jobs",
          "Same-day appointments available for urgent work",
          "Free in-home quotes for larger projects",
        ]}
      />

      <Testimonials
        title="People trust Steve"
        subtitle="Real reviews from Melbourne homeowners who called Steve"
        testimonials={toTestimonials(PAGE_REVIEWS)}
        variant="with-rating"
      />

      <FAQ title="Booking questions" faqs={CONTACT_FAQS} />

      <ServiceArea
        title="Service areas"
        subtitle="Based in Bundoora, servicing all of Melbourne."
        areas={[
          { name: 'Bundoora', href: '/plumber-bundoora', distance: '5 min' },
          { name: 'Heidelberg', href: '/plumber-heidelberg', distance: '10 min' },
          { name: 'Reservoir', href: '/plumber-reservoir', distance: '10 min' },
          { name: 'Thornbury', href: '/plumber-thornbury', distance: '15 min' },
          { name: 'Northcote', href: '/plumber-northcote', distance: '15 min' },
          { name: 'Fairfield', href: '/plumber-fairfield', distance: '15 min' },
          { name: 'Coburg', href: '/plumber-coburg', distance: '15 min' },
          { name: 'Brunswick', href: '/plumber-brunswick', distance: '20 min' },
          { name: 'Fitzroy North', href: '/plumber-fitzroy-north', distance: '20 min' },
          { name: 'Doncaster', href: '/plumber-doncaster', distance: '20 min' },
          { name: 'Bulleen', href: '/plumber-bulleen', distance: '20 min' },
          { name: 'Kew', href: '/plumber-kew', distance: '25 min' },
          { name: 'Balwyn', href: '/plumber-balwyn', distance: '25 min' },
          { name: 'Templestowe', href: '/plumber-templestowe', distance: '25 min' },
        ]}
      />

      <CTABanner
        variant="simple"
        title="Still thinking about it? Just call."
        subtitle="No obligation. Steve will give you a straight answer."
        cta={{ label: 'Call 0418 340 501', href: 'tel:0418340501' }}
        secondaryCta={{ label: 'Back to top', href: '#' }}
      />
    </PageLayout>
  )
}
