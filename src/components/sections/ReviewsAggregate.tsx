import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ReviewItem {
  name: string
  date: string
  rating: number
  text: string
  platform: string
}

export interface ReviewsPlatform {
  name: string
  count: number
  url?: string
}

export interface ReviewsAggregateProps {
  variant?: 'summary-cards' | 'testimonial-wall'
  heading?: string
  subtitle?: string
  aggregate: number
  total: number
  platforms?: ReviewsPlatform[]
  reviews: ReviewItem[]
  className?: string
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'h-6 w-6' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${i < rating ? 'fill-[#DAA520] text-[#DAA520]' : 'text-border'}`}
        />
      ))}
    </div>
  )
}

export function ReviewsAggregate({
  variant = 'summary-cards',
  heading = 'What Our Customers Say',
  subtitle,
  aggregate,
  total,
  platforms,
  reviews,
  className,
}: ReviewsAggregateProps) {
  if (variant === 'testimonial-wall') {
    return (
      <ReviewsTestimonialWall
        heading={heading}
        subtitle={subtitle}
        aggregate={aggregate}
        total={total}
        reviews={reviews}
        className={className}
      />
    )
  }
  return (
    <ReviewsSummaryCards
      heading={heading}
      subtitle={subtitle}
      aggregate={aggregate}
      total={total}
      platforms={platforms}
      reviews={reviews}
      className={className}
    />
  )
}

function ReviewsSummaryCards({
  heading,
  aggregate,
  total,
  platforms,
  reviews,
  className,
}: Omit<ReviewsAggregateProps, 'variant'>) {
  return (
    <section className={cn('relative overflow-hidden py-14 md:py-16', className)}>
      <Container className="relative">
        <ScrollReveal>
          <RevealItem>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-text-heading md:text-3xl">
                {heading}
              </h2>
              <div className="mt-6 flex flex-col items-center gap-3">
                <span className="font-heading text-5xl font-extrabold text-text-heading md:text-6xl">
                  {aggregate}
                </span>
                <StarRating rating={Math.round(aggregate)} size="lg" />
                <p className="text-lg text-text-muted">
                  Based on <span className="font-semibold text-text-heading">{total.toLocaleString()}</span> reviews
                </p>
              </div>
              {platforms && platforms.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  {platforms.map((p) =>
                    p.url ? (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-brand-muted px-4 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                      >
                        {p.name} ({p.count.toLocaleString()})
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span
                        key={p.name}
                        className="rounded-full border border-border bg-brand-muted px-4 py-1.5 text-xs font-medium text-text-muted"
                      >
                        {p.name} ({p.count.toLocaleString()})
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </RevealItem>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <RevealItem key={i}>
                <motion.div
                  className="h-full rounded-xl border border-border/50 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <StarRating rating={review.rating} />
                    <span className="rounded-full bg-brand-muted px-2.5 py-0.5 text-[10px] font-medium text-text-muted">
                      {review.platform}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                    <span className="text-sm font-semibold text-text-heading">{review.name}</span>
                    <span className="text-xs text-text-muted">{review.date}</span>
                  </div>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

function ReviewsTestimonialWall({
  heading,
  subtitle,
  aggregate,
  total,
  reviews,
  className,
}: Omit<ReviewsAggregateProps, 'variant' | 'platforms'>) {
  return (
    <section className={cn('relative overflow-hidden py-14 md:py-16', className)}>
      <Container className="relative">
        <ScrollReveal>
          <RevealItem>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-text-heading md:text-3xl">
                {heading || <><span className="text-brand-primary">{aggregate}</span> Stars from {total.toLocaleString()}+ Reviews</>}
              </h2>
              {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
            </div>
          </RevealItem>

          <RevealItem>
            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {reviews.map((review, i) => (
                <motion.div
                  key={`${review.name}-${i}`}
                  className="mb-4 break-inside-avoid"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <div className="rounded-xl border border-border/50 bg-white p-4 shadow-sm transition-all duration-300 hover:border-brand-primary/20 hover:shadow-md">
                    <StarRating rating={review.rating} />
                    <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                      &quot;{review.text}&quot;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-heading">{review.name}</p>
                        <p className="text-[10px] text-text-muted">{review.platform} · {review.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </Container>
    </section>
  )
}
