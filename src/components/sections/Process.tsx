import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'

interface Step {
  title: string
  description: string
  icon?: LucideIcon
}

interface ProcessProps {
  title: string
  subtitle?: string
  steps: Step[]
  variant?: 'numbered' | 'icon-steps'
  dark?: boolean
  className?: string
}

export function Process({
  title,
  subtitle,
  steps,
  variant = 'numbered',
  dark = false,
  className,
}: ProcessProps) {
  return (
    <section className={cn('relative overflow-hidden py-20 md:py-28', dark ? 'bg-surface-dark' : '', className)}>
      <Container className="relative z-10">
        <ScrollReveal>
          <RevealItem className="mx-auto max-w-2xl text-center">
            <h2 className={cn('font-heading text-2xl font-bold md:text-3xl', dark ? 'text-white' : 'text-text-heading')}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn('mt-3 text-base', dark ? 'text-white/75' : 'text-text-muted')}>
                {subtitle}
              </p>
            )}
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className={cn(
          'mt-12 grid gap-8',
          steps.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4',
        )}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <RevealItem key={step.title} className="text-center">
                <div className={cn(
                  'mx-auto flex h-12 w-12 items-center justify-center rounded-full font-heading text-base font-semibold',
                  dark
                    ? 'border border-brand-gold/45 text-brand-gold'
                    : 'border border-brand-primary/35 text-brand-primary',
                )}>
                  {variant === 'icon-steps' && Icon ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <h3 className={cn('mt-4 font-heading text-base font-semibold', dark ? 'text-white' : 'text-text-heading')}>
                  {step.title}
                </h3>
                <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-white/75' : 'text-text-muted')}>
                  {step.description}
                </p>
              </RevealItem>
            )
          })}
        </ScrollReveal>
      </Container>
    </section>
  )
}
