import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Card, CardContent } from '@/components/ui/card'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

interface FeaturesGridProps {
  title: string
  subtitle?: string
  features: Feature[]
  variant?: 'icon-grid' | 'card-grid'
  columns?: 2 | 3 | 4
  className?: string
}

export function FeaturesGrid({
  title,
  subtitle,
  features,
  variant = 'icon-grid',
  columns = 3,
  className,
}: FeaturesGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container>
        <ScrollReveal>
          <RevealItem className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
            )}
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className={cn('mt-12 grid gap-8 md:mt-16', gridCols[columns])}>
          {features.map((feature) => {
            const Icon = feature.icon
            const content = (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand-primary md:mx-0">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-text-heading">
                  {feature.title}
                </h3>
                <p className="mt-2 text-text-muted">{feature.description}</p>
              </>
            )

            if (variant === 'card-grid') {
              return (
                <RevealItem key={feature.title}>
                  <Card className="h-full transition hover:shadow-md">
                    <CardContent className="pt-6 text-center md:text-left">
                      {content}
                    </CardContent>
                  </Card>
                </RevealItem>
              )
            }

            return (
              <RevealItem key={feature.title} className="text-center md:text-left">
                {content}
              </RevealItem>
            )
          })}
        </ScrollReveal>
      </Container>
    </section>
  )
}
