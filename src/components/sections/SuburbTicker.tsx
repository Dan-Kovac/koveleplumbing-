import { Link } from 'react-router-dom'
import { LOCATIONS } from '@/pages/locations/data'

/**
 * Infinite marquee of the suburbs we service, each linking to its location page.
 * Reuses the shared `ticker` keyframe (0 → -50%) with the content duplicated once
 * for a seamless loop; pauses on hover so links are clickable. Stills for
 * prefers-reduced-motion (overflow clips the off-screen remainder).
 */
export function SuburbTicker() {
  const items = LOCATIONS
  const loop = [...items, ...items]
  return (
    <section aria-label="Suburbs we service" className="overflow-hidden border-y border-border bg-surface-alt py-4">
      <div className="flex w-max items-center animate-[ticker_60s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((loc, i) => {
          const dupe = i >= items.length
          return (
            <Link
              key={i}
              to={`/${loc.slug}`}
              aria-hidden={dupe || undefined}
              tabIndex={dupe ? -1 : undefined}
              className="flex items-center whitespace-nowrap font-heading text-sm font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-brand-secondary"
            >
              <span className="px-6">{loc.suburb}</span>
              <span className="text-brand-accent" aria-hidden="true">·</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
