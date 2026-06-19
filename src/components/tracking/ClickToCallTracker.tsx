import { useEffect } from 'react'
import { capture } from '@/lib/posthog'
import { getPageContext } from '@/lib/page-context'

/**
 * Captures every click-to-call (tel:) tap as a single canonical `click_to_call`
 * event. Attribution comes from the nearest `data-cta` ancestor (e.g. "hero",
 * "floating_button", "cta_banner_primary") plus the page type/service, so leads
 * can be broken down by which CTA and which page drove the call.
 */
export function ClickToCallTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!anchor) return

      const phone = anchor.getAttribute('href')?.replace('tel:', '')
      const ctaEl = anchor.closest('[data-cta]') as HTMLElement | null
      const pagePath = window.location.pathname
      const { page_type, service, location } = getPageContext(pagePath)

      capture('click_to_call', {
        phone_number: phone,
        link_text: anchor.textContent?.trim(),
        cta_location: ctaEl?.getAttribute('data-cta') ?? 'unspecified',
        page_path: pagePath,
        page_type,
        service,
        location,
        device_type: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
