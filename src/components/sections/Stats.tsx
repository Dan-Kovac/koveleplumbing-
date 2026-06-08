import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'

interface StatsProps {
  stats: { value: string; label: string }[]
  variant?: 'inline' | 'card' | 'background'
  className?: string
}

export function Stats({ stats, variant = 'inline', className }: StatsProps) {
  if (variant === 'background') {
    return (
      <section className={cn('bg-brand-primary py-8 md:py-12', className)}>
        <Container>
          <ScrollReveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                  {stat.label}
                </p>
              </RevealItem>
            ))}
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn('border-y bg-surface-alt py-8 md:py-12', className)}>
      <Container>
        <ScrollReveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-brand-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  )
}
