import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { capture } from '@/lib/posthog'
import { getPageContext } from '@/lib/page-context'

const isMobileDevice = () =>
  typeof navigator !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent)

/** Formats raw tel: digits like "0418340501" as "0418 340 501" for display. */
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (/^04\d{8}$/.test(digits)) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`
  }
  return raw
}

/**
 * Captures every click-to-call (tel:) tap as a single canonical `click_to_call`
 * event. Attribution comes from the nearest `data-cta` ancestor (e.g. "hero_primary",
 * "floating_button", "cta_banner_primary") plus the page type/service, so leads
 * can be broken down by which CTA and which page drove the call.
 *
 * On desktop a `tel:` link can't place a call, so the tap looks dead and visitors
 * re-click (PostHog showed ~5 clicks per desktop caller vs ~2.5 on mobile). There we
 * copy the number to the clipboard and confirm it on screen instead of navigating.
 */
export function ClickToCallTracker() {
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!anchor) return

      const phone = anchor.getAttribute('href')?.replace('tel:', '') ?? ''
      const ctaEl = anchor.closest('[data-cta]') as HTMLElement | null
      const pagePath = window.location.pathname
      const { page_type, service, location } = getPageContext(pagePath)
      const mobile = isMobileDevice()

      capture('click_to_call', {
        phone_number: phone,
        link_text: anchor.textContent?.trim(),
        cta_location: ctaEl?.getAttribute('data-cta') ?? 'unspecified',
        page_path: pagePath,
        page_type,
        service,
        location,
        device_type: mobile ? 'mobile' : 'desktop',
      })

      // Desktop can't open a dialer from tel:, so copy the number and confirm it
      // on screen instead of leaving the tap feeling dead.
      if (!mobile) {
        e.preventDefault()
        const friendly = formatPhone(phone)
        void navigator.clipboard?.writeText(friendly).catch(() => {})
        setCopied(friendly)
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(null), 4000)
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  if (!copied) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4"
    >
      <div className="flex items-center gap-2 rounded-full bg-surface-dark px-5 py-3 text-sm text-text-inverse shadow-xl ring-1 ring-white/10">
        <Check className="h-4 w-4 shrink-0 text-brand-gold" />
        <span>
          Copied <span className="font-semibold tracking-wide">{copied}</span> — call Steve to book
        </span>
      </div>
    </div>
  )
}
