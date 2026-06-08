import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { MapPin, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AreaItem {
  name: string
  href?: string
  distance?: string
  popularService?: string
}

interface ServiceAreaProps {
  title: string
  subtitle?: string
  areas: AreaItem[]
  viewAllHref?: string
  viewAllLabel?: string
  className?: string
}

export function ServiceArea({
  title,
  subtitle,
  areas,
  viewAllHref,
  viewAllLabel = 'View all service areas',
  className,
}: ServiceAreaProps) {
  return (
    <section className={cn('py-14 md:py-16', className)}>
      <Container>
        <ScrollReveal>
          <RevealItem>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-text-heading md:text-3xl">
                {title}
              </h2>
              {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
            </div>
          </RevealItem>
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <RevealItem key={area.name}>
                <a
                  href={area.href || '#'}
                  className="group flex flex-col rounded-lg bg-surface-alt p-4 transition-all duration-200 hover:border-brand-primary hover:shadow-md border border-transparent"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-brand-primary" />
                    <span className="font-heading text-sm font-semibold text-text-heading md:text-base">
                      {area.name}
                    </span>
                  </div>
                  {area.distance && (
                    <span className="mt-1 text-xs text-text-muted">{area.distance}</span>
                  )}
                  {area.popularService && (
                    <span className="mt-2 inline-block rounded-full bg-brand-muted px-2 py-0.5 text-xs font-medium text-brand-primary">
                      {area.popularService}
                    </span>
                  )}
                </a>
              </RevealItem>
            ))}
          </div>
          {viewAllHref && (
            <RevealItem>
              <div className="mt-8 text-center">
                <a
                  href={viewAllHref}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
                >
                  {viewAllLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </RevealItem>
          )}
        </ScrollReveal>
      </Container>
    </section>
  )
}
