import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { GradientOrb } from '@/components/ui/gradient-orb'
import { ArrowRight, Phone, Star } from 'lucide-react'

interface HeroProps {
  variant?: 'centered' | 'split' | 'minimal'
  title: string
  subtitle?: string
  badge?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  overlayOpacity?: number
  splitImage?: string
  splitImageAlt?: string
  trustLine?: string
  highlightWord?: string
  className?: string
}

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease },
  }),
}

function renderTitle(title: string, highlightWord?: string) {
  if (!highlightWord) return title
  const idx = title.toLowerCase().indexOf(highlightWord.toLowerCase())
  if (idx === -1) return title
  const before = title.slice(0, idx)
  const match = title.slice(idx, idx + highlightWord.length)
  const after = title.slice(idx + highlightWord.length)
  return (
    <>
      {before}
      <span className="text-brand-primary">{match}</span>
      {after}
    </>
  )
}

export function Hero({
  variant = 'centered',
  title,
  subtitle,
  badge,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlayOpacity = 60,
  splitImage,
  splitImageAlt = '',
  trustLine,
  highlightWord,
  className,
}: HeroProps) {
  if (variant === 'split') {
    return (
      <section className={cn('relative overflow-hidden bg-mesh', className)}>
        {/* Dot pattern overlay */}
        <div className="bg-dot-pattern-light pointer-events-none absolute inset-0" />

        {/* Gradient orbs at opposing corners */}
        <GradientOrb color="primary" size="xl" className="-left-40 -top-40" />
        <GradientOrb color="accent" size="lg" className="-bottom-32 -right-32" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text column */}
            <motion.div initial="hidden" animate="visible" className="py-16 md:py-20 lg:py-24">
              {badge && (
                <motion.div custom={0} variants={fadeUp} className="mb-4">
                  <span className="glass-dark inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
                    {badge}
                  </span>
                </motion.div>
              )}
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                {renderTitle(title, highlightWord)}
              </motion.h1>
              {subtitle && (
                <motion.p custom={2} variants={fadeUp} className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                  {subtitle}
                </motion.p>
              )}
              {(primaryCta || secondaryCta) && (
                <motion.div custom={3} variants={fadeUp} className="mt-8 flex items-center gap-3">
                  {primaryCta && (
                    <Button size="lg" className="glow-accent flex-1 rounded-lg bg-brand-accent px-5 text-white hover:bg-brand-accent-hover sm:flex-none sm:px-7" asChild>
                      <a href={primaryCta.href}>
                        {primaryCta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button size="lg" variant="outline" className="flex-1 rounded-lg border-white/20 text-white backdrop-blur-sm hover:bg-white/10 sm:flex-none" asChild>
                      <a href={secondaryCta.href}>
                        <Phone className="mr-2 h-4 w-4" />
                        {secondaryCta.label}
                      </a>
                    </Button>
                  )}
                </motion.div>
              )}
              {trustLine && (
                <motion.div custom={4} variants={fadeUp} className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-2.5">
                  <div className="flex shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold sm:h-3.5 sm:w-3.5" />
                    ))}
                  </div>
                  <span className="text-xs leading-tight text-white/75 sm:text-sm">{trustLine}</span>
                </motion.div>
              )}
            </motion.div>

            {/* Photo column — vertically centred, matching text height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="relative hidden lg:flex lg:items-center"
            >
              {/* Orb behind the image */}
              <GradientOrb color="accent" size="lg" className="-right-16 -top-16 opacity-20" />
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                {splitImage ? (
                  <img
                    src={splitImage}
                    alt={splitImageAlt}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-secondary/10">
                    <div className="bg-dot-pattern-light absolute inset-0 opacity-30" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Mobile: photo below on small screens */}
        {splitImage && (
          <div className="relative h-64 overflow-hidden lg:hidden">
            <img src={splitImage} alt={splitImageAlt} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface-dark to-transparent" />
          </div>
        )}
      </section>
    )
  }

  if (variant === 'minimal') {
    return (
      <section className={cn('bg-surface-dark py-16 md:py-20', className)}>
        <Container className="max-w-3xl text-center">
          <motion.h1 custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-heading text-3xl font-bold text-white md:text-4xl"
          >
            {renderTitle(title, highlightWord)}
          </motion.h1>
          {subtitle && (
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-4 text-lg text-white/80">
              {subtitle}
            </motion.p>
          )}
        </Container>
      </section>
    )
  }

  // centered with background image
  return (
    <section className={cn('relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-surface-dark md:min-h-[70vh]', className)}>
      {backgroundImage && (
        <>
          <img src={backgroundImage} alt="" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-surface-dark" style={{ opacity: overlayOpacity / 100 }} />
        </>
      )}
      <Container className="relative z-10 py-20 text-center">
        <motion.h1 custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="mx-auto max-w-3xl font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          {renderTitle(title, highlightWord)}
        </motion.h1>
        {subtitle && (
          <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {subtitle}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primaryCta && (
              <Button size="lg" className="glow-accent rounded-lg bg-brand-accent px-7 text-white hover:bg-brand-accent-hover" asChild>
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" className="rounded-lg border-white/25 text-white hover:bg-white/10" asChild>
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </motion.div>
        )}
      </Container>
    </section>
  )
}
