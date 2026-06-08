import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'

interface LinkGroup {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  businessName: string
  description?: string
  logo?: React.ReactNode
  linkGroups?: LinkGroup[]
  socials?: { icon: React.ReactNode; href: string; label: string }[]
  className?: string
}

export function Footer({
  businessName,
  description,
  logo,
  linkGroups = [],
  socials,
  className,
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('relative bg-surface-dark text-text-inverse', className)}>
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-gradient-from), var(--color-gradient-to), transparent)',
        }}
      />
      {/* Subtle grid pattern */}
      <div className="bg-grid-pattern-light pointer-events-none absolute inset-0 opacity-[0.03]" />
      <Container className="relative z-10 py-12 md:py-16">
        <div
          className={cn(
            'grid gap-8',
            linkGroups.length > 0 ? 'sm:grid-cols-2 lg:grid-cols-4' : '',
          )}
        >
          <div className={linkGroups.length === 0 ? 'text-center' : ''}>
            {logo ?? (
              <p className="font-heading text-xl font-bold text-white">{businessName}</p>
            )}
            {description && (
              <p className="mt-4 text-sm text-text-inverse/70">{description}</p>
            )}
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-medium uppercase tracking-wider text-white">
                {group.title}
              </p>
              <ul className="mt-4 space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="inline-block py-1 text-sm text-text-inverse/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-text-inverse/70">
            &copy; {year} {businessName}. All rights reserved.
          </p>
          {socials && (
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center text-text-inverse/70 transition hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </Container>
      </div>
    </footer>
  )
}
