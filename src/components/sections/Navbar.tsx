import { useState, useEffect } from 'react'
import { Menu, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logo: React.ReactNode
  links: NavLink[]
  cta?: { label: string; href: string }
  variant?: 'solid' | 'transparent'
  topbar?: { text: string; phone?: string }
  className?: string
}

export function Navbar({
  logo,
  links,
  cta,
  variant = 'solid',
  topbar,
  className,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = variant === 'transparent' && !scrolled

  return (
    <>
      {topbar && (
        <div className="hidden bg-surface-dark text-white/70 sm:block">
          <Container className="flex items-center justify-between py-1.5">
            <p className="hidden text-xs text-white/70 sm:block">
              {topbar.text}
            </p>
            {topbar.phone && (
              <a
                href={`tel:${topbar.phone.replace(/\s/g, '')}`}
                data-cta="nav_topbar"
                className="flex items-center gap-1.5 py-2 text-xs font-medium text-white/90 transition-colors hover:text-white"
              >
                <Phone className="h-3 w-3" />
                {topbar.phone}
              </a>
            )}
          </Container>
        </div>
      )}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'border-b border-border/50 bg-white/95 shadow-sm backdrop-blur-md',
          className,
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <div className="shrink-0">
            {logo}
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-text-DEFAULT hover:text-brand-primary',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Visible, readable number in the sticky bar. The topbar phone
                scrolls away; desktop callers need to *read* the number (their
                tel: click can't open a dialer). */}
            {topbar?.phone && (
              <a
                href={`tel:${topbar.phone.replace(/\s/g, '')}`}
                data-cta="nav_bar_phone"
                className="hidden items-center gap-1.5 font-heading text-lg font-bold text-brand-primary transition-colors hover:text-brand-secondary lg:inline-flex"
              >
                <Phone className="h-4 w-4" />
                {topbar.phone}
              </a>
            )}
            {cta && (
              <Button
                className="hidden bg-brand-accent text-white shadow-sm hover:bg-brand-accent/90 sm:inline-flex"
                asChild
              >
                <a href={cta.href} data-cta="nav_cta">
                  <Phone className="mr-1.5 h-4 w-4" />
                  {cta.label}
                </a>
              </Button>
            )}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px] md:hidden">
                  <Menu className={cn('h-6 w-6', isTransparent && 'text-white')} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-6">
                <div className="mb-6 mt-2">
                  {logo}
                </div>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="min-h-[48px] flex items-center rounded-lg px-3 text-base font-semibold text-surface-dark transition hover:bg-gray-50 hover:text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">
                  {cta && (
                    <Button className="w-full bg-brand-accent text-white hover:bg-brand-accent/90" size="lg" asChild>
                      <a href={cta.href} data-cta="nav_mobile_cta">
                        <Phone className="mr-1.5 h-4 w-4" />
                        {cta.label}
                      </a>
                    </Button>
                  )}
                  <a
                    href="tel:0418340501"
                    data-cta="nav_mobile"
                    className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-semibold text-surface-dark transition hover:bg-gray-50"
                  >
                    <Phone className="h-4 w-4" />
                    0418 340 501
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </header>
    </>
  )
}
