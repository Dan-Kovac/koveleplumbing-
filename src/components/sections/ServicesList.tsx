import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'

interface ServiceRow {
  title: string
  excerpt: string
  href: string
  hint: string
}

const SERVICES: ServiceRow[] = [
  { title: 'Blocked drains', excerpt: 'CCTV inspection, jet blasting, and pipe relining that stops the roots coming back.', href: '/blocked-drains', hint: 'Same-day' },
  { title: 'Gas & hot water', excerpt: 'Licensed gas fitting, same-day hot water replacement, and safety checks. All brands.', href: '/gas-hot-water', hint: 'Licensed gas fitter' },
  { title: 'Roof plumbing', excerpt: "Leak detection, flashings, gutters and downpipes — Steve's specialty.", href: '/roof-plumbing', hint: 'Leaks & gutters' },
  { title: 'General plumbing', excerpt: 'Taps, pipes, leaks, and water pressure sorted properly the first time.', href: '/general-plumbing', hint: 'Taps to repipes' },
  { title: 'Toilet repairs', excerpt: 'Cisterns, blockages, new installs, and dual-flush upgrades.', href: '/toilet-repairs', hint: 'Fixed fast' },
  { title: 'Bathroom renovations', excerpt: 'Full renovation plumbing, start to fit-off, coordinated with your builder.', href: '/bathroom-renovations', hint: 'Start to finish' },
  { title: 'Emergency plumber', excerpt: 'Burst pipes, flooding, gas leaks — Steve answers 24/7, 60-minute average response.', href: '/emergency-plumber', hint: '24/7' },
]

/**
 * "What we do" — a clean, text-forward service list. Each row links to its
 * service page, with a gold underline wipe and the name sliding on hover.
 * Replaces the image-card grid on the homepage for a calmer, more premium read.
 */
export function ServicesList() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <Container>
        <ScrollReveal>
          <RevealItem className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">What we do</div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text-heading md:text-4xl">
              Every plumbing job, done properly.
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              One licensed team, upfront pricing, and a real person on the phone — from a 6am blocked drain to a full bathroom fit-off.
            </p>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className="mt-12 border-t border-border">
          {SERVICES.map((s, i) => (
            <RevealItem key={s.href}>
              <Link
                to={s.href}
                data-cta="services_list"
                className="group relative grid grid-cols-[2rem_1fr] items-center gap-4 border-b border-border py-6 md:grid-cols-[2.5rem_1fr_auto] md:gap-6 md:py-7"
              >
                <span className="font-heading text-sm font-semibold tabular-nums text-text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="block font-heading text-2xl font-bold text-text-heading transition-transform duration-300 group-hover:translate-x-2 group-hover:text-brand-secondary motion-reduce:transform-none md:text-3xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-[56ch] text-sm text-text-muted md:text-[15px]">
                    {s.excerpt}
                  </span>
                </div>
                <span className="col-span-2 hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-brand-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:opacity-100 md:col-span-1 md:flex md:-translate-x-2">
                  {s.hint} <ArrowRight className="h-4 w-4" />
                </span>
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-0.5 w-0 bg-brand-accent transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:hidden" />
              </Link>
            </RevealItem>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  )
}
