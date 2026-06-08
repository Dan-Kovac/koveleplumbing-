import { Helmet } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'

export default function Privacy() {
  return (
    <PageLayout>
      <Helmet>
        <title>Privacy Policy | Kovele Plumbing Melbourne</title>
        <meta name="description" content="Kovele Plumbing privacy policy. How we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://koveleplumbing.com.au/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Kovele Plumbing Melbourne" />
        <meta property="og:description" content="Kovele Plumbing privacy policy. How we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://koveleplumbing.com.au/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-24 md:py-32">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-text-muted">Last updated: March 2026</p>

          <div className="mt-12 space-y-8 text-text-DEFAULT leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you contact Kovele Plumbing, we may collect your name, phone number, email
                address, property address, and details about your plumbing enquiry. This information
                is used solely to respond to your enquiry and provide our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use your personal information to respond to enquiries, provide quotes, schedule
                and perform plumbing services, send invoices, and follow up on completed work. We do
                not sell, rent, or share your personal information with third parties for marketing
                purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Data Security
              </h2>
              <p className="mt-3">
                We take reasonable steps to protect your personal information from misuse,
                interference, and loss, as well as unauthorised access, modification, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Cookies
              </h2>
              <p className="mt-3">
                Our website may use cookies to improve your browsing experience and analyse website
                traffic. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Your Rights
              </h2>
              <p className="mt-3">
                Under the Australian Privacy Act 1988, you have the right to access, correct, or
                delete your personal information. Contact us at koveleplumbing5@bigpond.com to make
                a request.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-heading">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy, contact Steve Kovac at
                koveleplumbing5@bigpond.com or call 0418 340 501.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
