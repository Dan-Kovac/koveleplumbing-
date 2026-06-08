import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { cn } from '@/lib/utils'

interface CertBadge {
  label: string
  icon?: React.ReactNode
}

interface CertificationsProps {
  badges: CertBadge[]
  className?: string
}

export function Certifications({ badges, className }: CertificationsProps) {
  return (
    <section className={cn('bg-brand-muted py-10 md:py-12', className)}>
      <Container>
        <ScrollReveal>
          <RevealItem>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-brand-primary shadow-sm"
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </Container>
    </section>
  )
}
