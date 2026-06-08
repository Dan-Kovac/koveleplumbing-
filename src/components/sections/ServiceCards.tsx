import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ServiceItem {
  title: string
  excerpt: string
  href?: string
  icon?: React.ReactNode
  image?: string
  imageAlt?: string
}

interface ServiceCardsProps {
  variant?: 'with-image' | 'minimal'
  title: string
  subtitle?: string
  services: ServiceItem[]
  className?: string
}

/** Render title with the last word highlighted */
function renderTitleWithHighlightLastWord(title: string) {
  const words = title.split(' ')
  if (words.length <= 1) return <span className="text-brand-primary">{title}</span>
  const lastWord = words.pop()!
  return (
    <>
      {words.join(' ')}{' '}
      <span className="text-brand-primary">{lastWord}</span>
    </>
  )
}

export function ServiceCards({
  variant = 'with-image',
  title,
  subtitle,
  services,
  className,
}: ServiceCardsProps) {
  if (variant === 'minimal') {
    return (
      <section className={cn('bg-brand-muted py-14 md:py-16', className)}>
        <Container>
          <ScrollReveal>
            <RevealItem>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-2xl font-bold text-text-heading md:text-3xl">
                  {renderTitleWithHighlightLastWord(title)}
                </h2>
                {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
              </div>
            </RevealItem>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <RevealItem key={service.title}>
                  <a
                    href={service.href || '#'}
                    className="group flex items-center gap-4 rounded-lg border border-border bg-white p-5 transition-all duration-200 hover:border-brand-primary/30 hover:shadow-md"
                  >
                    {service.icon && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                        {service.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-base font-semibold text-text-heading">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted line-clamp-1">{service.excerpt}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-primary" />
                  </a>
                </RevealItem>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn('bg-brand-muted py-14 md:py-16', className)}>
      <Container>
        <ScrollReveal>
          <RevealItem>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-text-heading md:text-3xl">
                {renderTitleWithHighlightLastWord(title)}
              </h2>
              {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
            </div>
          </RevealItem>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <a href={service.href || '#'} className="group block h-full">
                  <div className="h-full overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10">
                    {/* Image area — flush to card edges, no gap */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-primary/15 via-brand-accent/15 to-brand-primary/8">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.imageAlt || service.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <>
                          <div className="shimmer absolute inset-0" />
                          <div className="relative flex h-full items-center justify-center">
                            {service.icon && (
                              <div className="rounded-xl bg-white/80 p-4 text-brand-primary shadow-sm transition-transform duration-500 group-hover:scale-110">
                                {service.icon}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-text-heading">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted">{service.excerpt}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium text-brand-primary">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
