import { useEffect } from 'react'
import { capture } from '@/lib/posthog'

/**
 * Captures click-to-call events globally.
 * Attach to any component tree that contains tel: links (or wrap the whole app)
 */
export function ClickToCallTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!anchor) return

      const phone = anchor.getAttribute('href')?.replace('tel:', '')
      const locationText = anchor.textContent?.trim()
      const pagePath = window.location.pathname

      capture('click_to_call', {
        phone_number: phone,
        link_text: locationText,
        page_path: pagePath,
        device_type: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
