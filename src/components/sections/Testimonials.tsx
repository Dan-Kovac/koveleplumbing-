import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Testimonial {
  quote: string
  name: string
  role?: string
  avatar?: string
  initials: string
  rating?: number
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
  variant?: 'grid' | 'featured' | 'with-rating'
  className?: string
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200',
          )}
        />
      ))}
    </div>
  )
}

export function Testimonials({
  title,
  subtitle,
  testimonials,
  variant = 'grid',
  className,
}: TestimonialsProps) {
  if (variant === 'featured' && testimonials.length > 0) {
    const t = testimonials[0]
    return (
      <section className={cn('py-16 md:py-24 lg:py-32', className)}>
        <Container className="max-w-3xl text-center">
          <ScrollReveal>
            <RevealItem>
              {t.rating && <Stars count={t.rating} />}
              <blockquote className="mt-6 font-heading text-2xl font-medium text-text-heading md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Avatar>
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-medium">{t.name}</p>
                  {t.role && <p className="text-sm text-text-muted">{t.role}</p>}
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container>
        <ScrollReveal>
          <RevealItem className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <Card className="flex h-full flex-col bg-white">
                <CardContent className="flex flex-1 flex-col pt-6">
                  {t.rating && <Stars count={t.rating} />}
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text-DEFAULT line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback className="bg-brand-muted text-xs font-bold text-brand-primary">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-text-heading">{t.name}</p>
                      {t.role && <p className="text-xs text-text-muted">{t.role}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  )
}
