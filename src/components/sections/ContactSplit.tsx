import { useState } from 'react'
import { Phone, Mail, MapPin, Star, Clock, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface MiniReview {
  name: string
  text: string
  rating: number
}

interface ContactSplitProps {
  title: string
  subtitle?: string
  phone?: string
  email?: string
  address?: string
  ctaLabel?: string
  avatarSrc?: string
  availabilityText?: string
  responseTime?: string
  miniReviews?: MiniReview[]
  className?: string
}

export function ContactSplit({
  title,
  subtitle,
  phone,
  email,
  address,
  ctaLabel = 'Send message',
  avatarSrc,
  availabilityText,
  responseTime,
  miniReviews,
  className,
}: ContactSplitProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    // Capture referrer page for attribution
    const pagePath = window.location.pathname
    const referrerPath = document.referrer
      ? new URL(document.referrer).pathname
      : '(direct)'
    data.append('_source_page', pagePath)
    data.append('_referrer_page', referrerPath)

    try {
      const res = await fetch('https://formspree.io/f/maqprvdq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Form submission failed')
      setSubmitted(true)
      // Track form submission in GA4 with page attribution
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submit', {
          event_category: 'conversion',
          event_label: 'callback_request',
          page_path: pagePath,
          referrer_page: referrerPath,
          value: 1,
        })
      }
    } catch {
      // Fallback: open mailto
      const name = data.get('name') || ''
      const msg = data.get('message') || ''
      const ph = data.get('phone') || ''
      window.location.href = `mailto:koveleplumbing5@bigpond.com?subject=Callback request from ${name}&body=${msg}%0A%0APhone: ${ph}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container>
        <ScrollReveal className="grid gap-12 lg:grid-cols-2">
          <RevealItem>
            {/* Steve availability header */}
            {avatarSrc && (
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <img
                    src={avatarSrc}
                    alt="Steve Kovac, Kovele Plumbing"
                    className="h-16 w-16 rounded-full border-2 border-brand-muted object-cover"
                  />
                  {availabilityText && (
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
                    </span>
                  )}
                </div>
                <div>
                  {availabilityText && (
                    <p className="text-sm font-semibold text-emerald-600">{availabilityText}</p>
                  )}
                  {responseTime && (
                    <p className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="h-3 w-3" />
                      {responseTime}
                    </p>
                  )}
                </div>
              </div>
            )}

            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}

            <div className="mt-8 space-y-6">
              {phone && (
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-text-DEFAULT transition hover:text-brand-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted">
                    <Phone className="h-5 w-5 text-brand-primary" />
                  </div>
                  <span className="font-medium">{phone}</span>
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-4 text-text-DEFAULT transition hover:text-brand-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                  <span className="font-medium">{email}</span>
                </a>
              )}
              {address && (
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                  </div>
                  <span className="font-medium">{address}</span>
                </div>
              )}
            </div>

          </RevealItem>

          <RevealItem>
            <Card>
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-500" />
                    <h3 className="mt-4 font-heading text-xl font-bold text-text-heading">
                      Message sent
                    </h3>
                    <p className="mt-2 text-text-muted">
                      Steve will call you back within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="0400 000 000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" rows={4} placeholder="What do you need help with?" />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-brand-accent text-white hover:bg-brand-accent-hover"
                    >
                      {submitting ? 'Sending...' : ctaLabel}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </RevealItem>
        </ScrollReveal>

        {/* Scrolling review ticker - full width below the split */}
        {miniReviews && miniReviews.length > 0 && (
          <div className="mt-12">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-text-muted">
              What people say after calling Steve
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

              <div className="flex animate-[ticker_30s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
                {/* Double the reviews for seamless loop */}
                {[...miniReviews, ...miniReviews].map((review, i) => (
                  <div
                    key={i}
                    className="flex w-[280px] shrink-0 items-start gap-3 rounded-lg border border-border/50 bg-surface-alt p-4 sm:w-[320px]"
                  >
                    <div className="shrink-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-muted font-heading text-sm font-bold text-brand-primary">
                        {review.name.charAt(0)}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-text-heading">{review.name}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1 text-sm leading-snug text-text-muted line-clamp-2">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
