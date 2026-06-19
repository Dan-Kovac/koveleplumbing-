// Maps a URL pathname to a coarse page type (+ service / location name) so
// PostHog events can be broken down by the kind of page they fired on.
// Used by both pageview tracking and click-to-call tracking.

const SERVICE_PAGES: Record<string, string> = {
  '/blocked-drains': 'Blocked Drains',
  '/gas-hot-water': 'Gas & Hot Water',
  '/roof-plumbing': 'Roof Plumbing',
  '/general-plumbing': 'General Plumbing',
  '/toilet-repairs': 'Toilet Repairs',
  '/bathroom-renovations': 'Bathroom Renovations',
  '/emergency-plumber': 'Emergency Plumber',
}

export type PageType =
  | 'home'
  | 'service'
  | 'services_index'
  | 'location'
  | 'contact'
  | 'reviews'
  | 'about'
  | 'faq'
  | 'blog'
  | 'other'

export interface PageContext {
  page_type: PageType
  /** Present on service detail pages, e.g. "Blocked Drains" */
  service?: string
  /** Present on /plumber-* location pages, e.g. "Bundoora" */
  location?: string
}

export function getPageContext(pathname: string): PageContext {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') return { page_type: 'home' }
  if (path === '/services') return { page_type: 'services_index' }
  if (path === '/contact') return { page_type: 'contact' }
  if (path === '/reviews') return { page_type: 'reviews' }
  if (path === '/about') return { page_type: 'about' }
  if (path === '/faq') return { page_type: 'faq' }
  if (path === '/blog' || path.startsWith('/blog/')) return { page_type: 'blog' }

  const service = SERVICE_PAGES[path]
  if (service) return { page_type: 'service', service }

  if (path.startsWith('/plumber-')) {
    const location = path
      .replace('/plumber-', '')
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
    return { page_type: 'location', location }
  }

  return { page_type: 'other' }
}
