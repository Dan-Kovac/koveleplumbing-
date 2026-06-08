import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import posthog from '@/lib/posthog'

export function usePostHogPageView() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (posthog.__loaded) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        $pathname: pathname,
        $search: search,
      })
    }
  }, [pathname, search])
}
