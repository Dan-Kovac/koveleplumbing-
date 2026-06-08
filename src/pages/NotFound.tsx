import { Helmet } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <PageLayout>
      <Helmet>
        <title>Page Not Found | Kovele Plumbing Melbourne</title>
      </Helmet>

      <section className="py-24 md:py-40">
        <Container className="max-w-2xl text-center">
          <p className="text-7xl font-bold text-brand-primary/20 md:text-9xl">404</p>
          <h1 className="mt-6 font-heading text-3xl font-bold text-text-heading md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href="/">
                Back to Homepage
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:0418340501">
                <Phone className="mr-2 h-4 w-4" />
                Call 0418 340 501
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
