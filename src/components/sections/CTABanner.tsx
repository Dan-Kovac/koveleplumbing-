import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Button } from '@/components/ui/button'
import { GradientOrb } from '@/components/ui/gradient-orb'
import { Phone, MessageSquare, ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  subtitle?: string
  cta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'simple' | 'floating' | 'personal'
  avatar?: { src: string; alt: string }
  availabilityText?: string
  responseText?: string
  className?: string
}

const isTel = (href: string) => href.startsWith('tel:')

export function CTABanner({
  title,
  subtitle,
  cta,
  secondaryCta,
  variant = 'simple',
  avatar,
  availabilityText,
  responseText,
  className,
}: CTABannerProps) {

  if (variant === 'personal') {
    return (
      <section className={cn('bg-white py-16 md:py-20', className)}>
        <Container>
          <ScrollReveal>
            <RevealItem>
              <div className="relative overflow-hidden rounded-3xl bg-mesh px-8 py-12 md:px-16 md:py-16">
                {/* Background effects contained within card */}
                <div className="bg-dot-pattern-light pointer-events-none absolute inset-0" />
                <GradientOrb color="primary" size="xl" className="-left-40 -top-40" />
                <GradientOrb color="accent" size="lg" className="-bottom-32 -right-32" />

                <div className="relative z-10 mx-auto max-w-xl text-center">
                  {avatar && (
                    <div className="mb-5 flex justify-center">
                      <div className="relative">
                        <img
                          src={avatar.src}
                          alt={avatar.alt}
                          className="h-20 w-20 rounded-full border-2 border-white/15 object-cover"
                        />
                        {availabilityText && (
                          <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-surface-dark bg-emerald-400" />
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {availabilityText && (
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-emerald-400">
                      {availabilityText}
                    </p>
                  )}

                  <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/75">{subtitle}</p>
                  )}

                  {responseText && (
                    <p className="mt-3 text-xs text-white/50">{responseText}</p>
                  )}

                  <div className="mt-7 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
                    <Button
                      size="lg"
                      className="glow-accent w-full rounded-lg bg-brand-accent px-7 text-white hover:bg-brand-accent-hover sm:w-auto"
                      asChild
                    >
                      <a href={cta.href} data-cta="cta_banner_primary">
                        {isTel(cta.href) ? <Phone className="mr-2 h-4 w-4" /> : <MessageSquare className="mr-2 h-4 w-4" />}
                        {cta.label}
                      </a>
                    </Button>
                    {secondaryCta && (
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full rounded-lg border-white/30 text-white hover:bg-white/10 sm:w-auto"
                        asChild
                      >
                        <a href={secondaryCta.href} data-cta="cta_banner_secondary">
                          {isTel(secondaryCta.href) ? <Phone className="mr-2 h-4 w-4" /> : <MessageSquare className="mr-2 h-4 w-4" />}
                          {secondaryCta.label}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  if (variant === 'floating') {
    return (
      <section className={cn('py-16 md:py-20', className)}>
        <Container>
          <ScrollReveal>
            <RevealItem>
              {/* Gradient border technique: parent with gradient bg + p-px, child with bg-mesh */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--color-gradient-from)] via-[var(--color-gradient-via)] to-[var(--color-gradient-to)] p-px">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-mesh px-8 py-14 text-center md:px-16">
                  {/* Subtle orbs inside */}
                  <GradientOrb color="primary" size="md" className="-left-16 -top-16 opacity-15" />
                  <GradientOrb color="accent" size="sm" className="-bottom-8 -right-8 opacity-15" />

                  <div className="relative z-10">
                    <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{title}</h2>
                    {subtitle && <p className="mx-auto mt-3 max-w-lg text-base text-white/75">{subtitle}</p>}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <Button size="lg" className="glow-accent rounded-lg bg-brand-accent px-7 text-white hover:bg-brand-accent-hover" asChild>
                        <a href={cta.href} data-cta="cta_banner_primary">
                          <Phone className="mr-2 h-4 w-4" />
                          {cta.label}
                        </a>
                      </Button>
                      {secondaryCta && (
                        <Button size="lg" variant="outline" className="rounded-lg border-white/30 text-white hover:bg-white/10" asChild>
                          <a href={secondaryCta.href} data-cta="cta_banner_secondary">
                            {secondaryCta.label}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  // simple (default)
  return (
    <section className={cn('relative overflow-hidden bg-mesh py-16 md:py-20', className)}>
      {/* Background effects */}
      <div className="bg-dot-pattern-light pointer-events-none absolute inset-0" />
      <GradientOrb color="primary" size="xl" className="-left-48 -top-48" />
      <GradientOrb color="accent" size="lg" className="-bottom-40 -right-40" />

      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <RevealItem>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">{title}</h2>
            {subtitle && <p className="mx-auto mt-3 max-w-lg text-base text-white/75">{subtitle}</p>}
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button size="lg" className="glow-accent flex-1 rounded-lg bg-brand-accent px-5 text-white hover:bg-brand-accent-hover sm:flex-none sm:px-7" asChild>
                <a href={cta.href} data-cta="cta_banner_primary">
                  <Phone className="mr-2 h-4 w-4" />
                  {cta.label}
                </a>
              </Button>
              {secondaryCta && (
                <Button size="lg" variant="outline" className="flex-1 rounded-lg border-white/30 text-white hover:bg-white/10 sm:flex-none" asChild>
                  <a href={secondaryCta.href} data-cta="cta_banner_secondary">
                    {secondaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </RevealItem>
        </ScrollReveal>
      </Container>
    </section>
  )
}
