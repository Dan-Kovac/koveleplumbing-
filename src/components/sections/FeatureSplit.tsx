import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface FeatureSplitProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  badge?: string
  items?: string[]
  cta?: { label: string; href: string }
  className?: string
}

export function FeatureSplit({
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'right',
  badge,
  items,
  cta,
  className,
}: FeatureSplitProps) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container>
        <ScrollReveal
          className={cn(
            'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
            imagePosition === 'left' && 'lg:[&>*:first-child]:order-2',
          )}
        >
          <RevealItem>
            {badge && <Badge variant="secondary" className="mb-4">{badge}</Badge>}
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-text-muted">{description}</p>
            {items && items.length > 0 && (
              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <Button className="mt-8 bg-brand-accent text-white hover:bg-brand-accent-hover" size="lg" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
          </RevealItem>
          <RevealItem>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </RevealItem>
        </ScrollReveal>
      </Container>
    </section>
  )
}
