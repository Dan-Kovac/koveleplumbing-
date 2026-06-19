import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Persistent mobile-only floating call button.
 * Tracking is handled globally by ClickToCallTracker via the `data-cta`
 * attribute, so there's no per-click handler here (avoids double-counting).
 */
export function MobileCallButton() {
  return (
    <a
      href="tel:0418340501"
      data-cta="floating_button"
      aria-label="Call Steve"
      className={cn(
        'fixed bottom-5 right-5 z-50 md:hidden',
        'flex h-14 w-14 items-center justify-center rounded-full',
        'bg-brand-accent text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)]',
        'hover:bg-brand-accent-hover active:scale-95 transition-all'
      )}
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
