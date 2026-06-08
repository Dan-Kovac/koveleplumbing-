import { Helmet } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'

export default function Terms() {
  return (
    <PageLayout>
      <Helmet>
        <title>Terms of Service | Kovele Plumbing Melbourne</title>
        <meta name="description" content="Kovele Plumbing terms of service. Terms and conditions for plumbing services in Melbourne." />
        <link rel="canonical" href="https://koveleplumbing.com.au/terms" />
        <meta property="og:title" content="Terms of Service | Kovele Plumbing Melbourne" />
        <meta property="og:description" content="Kovele Plumbing terms of service. Terms and conditions for plumbing services in Melbourne." />
        <meta property="og:url" content="https://koveleplumbing.com.au/terms" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-24 md:py-32">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-text-muted">Last updated: March 2026</p>

          <div className="mt-12 space-y-8 text-text-DEFAULT leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Services
              </h2>
              <p className="mt-3">
                Kovele Plumbing provides residential plumbing services across Melbourne, including
                but not limited to drain clearing, gas fitting, hot water services, roof plumbing,
                general plumbing, toilet repairs, and bathroom renovation plumbing.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Quotes and Pricing
              </h2>
              <p className="mt-3">
                All quotes are provided in writing before work commences. Quoted prices include
                labour, materials, and travel unless otherwise stated. Quotes are valid for 30 days.
                Additional work discovered during a job will be quoted separately and requires your
                approval before proceeding.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Payment
              </h2>
              <p className="mt-3">
                Payment is due upon completion of work unless otherwise agreed in writing. We accept
                cash, card (Visa, Mastercard), and bank transfer. For larger projects, progress
                payments may be arranged.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Warranty
              </h2>
              <p className="mt-3">
                All workmanship is guaranteed. If you experience an issue with work we've
                performed, contact us and we'll come back and fix it at no additional cost.
                Manufacturer warranties apply to parts and fixtures as per the manufacturer's
                terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Licensing
              </h2>
              <p className="mt-3">
                Kovele Plumbing is fully licensed with the Victorian Building Authority (VBA) and
                carries all required insurance. Steve Kovac is a licensed gas fitter. Compliance
                certificates are provided for all regulated plumbing and gas work.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Cancellation
              </h2>
              <p className="mt-3">
                You may cancel a booking at any time before work commences at no charge. For
                same-day cancellations where we have already dispatched to your property, a callout
                fee may apply.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms? Contact Steve Kovac at koveleplumbing5@bigpond.com or
                call 0418 340 501.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
