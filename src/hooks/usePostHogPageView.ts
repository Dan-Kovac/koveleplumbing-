import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import posthog from '@/lib/posthog'
import { getPageContext } from '@/lib/page-context'

export function usePostHogPageView() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (posthog.__loaded) {
      const { page_type, service, location } = getPageContext(pathname)
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        $pathname: pathname,
        $search: search,
        page_type,
        service,
        location,
      })
    }
  }, [pathname, search])
}
