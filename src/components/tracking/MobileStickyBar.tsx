import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageSquare } from 'lucide-react'
import { capture } from '@/lib/posthog'
import { cn } from '@/lib/utils'

export function MobileStickyBar() {
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)

  // Hide bar when user scrolls to bottom (footer covers it)
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
      setHidden(nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCall = () => {
    capture('sticky_bar_call_clicked', { page_path: pathname, device: 'mobile' })
  }

  const handleCallback = () => {
    capture('sticky_bar_callback_clicked', { page_path: pathname, device: 'mobile' })
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 md:hidden',
        'transform transition-transform duration-300 ease-in-out',
        hidden ? 'translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="flex items-center gap-0 bg-surface-dark px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {/* Call Steve */}
        <a
          href="tel:0418340501"
          onClick={handleCall}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-lg',
            'bg-brand-accent py-3 text-sm font-semibold text-white',
            'hover:bg-brand-accent-hover active:scale-[0.98] transition-colors'
          )}
        >
          <Phone className="h-4 w-4" />
          Call Steve
        </a>

        {/* Divider */}
        <div className="mx-3 h-8 w-px bg-white/15" />

        {/* Request Callback */}
        <Link
          to="/contact"
          onClick={handleCallback}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-lg',
            'border border-white/25 bg-white/10 py-3 text-sm font-semibold text-white',
            'hover:bg-white/15 active:scale-[0.98] transition-colors'
          )}
        >
          <MessageSquare className="h-4 w-4" />
          Callback
        </Link>
      </div>

      {/* Safe area padding for iOS home indicator */}
      <div className="bg-surface-dark" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  )
}
