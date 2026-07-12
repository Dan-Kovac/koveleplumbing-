import { PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Emergency', href: '/emergency-plumber' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Blocked Drains', href: '/blocked-drains' },
      { label: 'Gas & Hot Water', href: '/gas-hot-water' },
      { label: 'Roof Plumbing', href: '/roof-plumbing' },
      { label: 'General Plumbing', href: '/general-plumbing' },
      { label: 'Toilet Repairs', href: '/toilet-repairs' },
      { label: 'Bathroom Renovations', href: '/bathroom-renovations' },
      { label: 'Emergency Plumber', href: '/emergency-plumber' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'Bundoora', href: '/plumber-bundoora' },
      { label: 'Brunswick', href: '/plumber-brunswick' },
      { label: 'Thornbury', href: '/plumber-thornbury' },
      { label: 'Northcote', href: '/plumber-northcote' },
      { label: 'Heidelberg', href: '/plumber-heidelberg' },
      { label: 'Doncaster', href: '/plumber-doncaster' },
      { label: 'Balwyn', href: '/plumber-balwyn' },
      { label: 'Reservoir', href: '/plumber-reservoir' },
      { label: 'Fairfield', href: '/plumber-fairfield' },
      { label: 'Templestowe', href: '/plumber-templestowe' },
      { label: 'Coburg', href: '/plumber-coburg' },
      { label: 'Kew', href: '/plumber-kew' },
      { label: 'Fitzroy North', href: '/plumber-fitzroy-north' },
      { label: 'Bulleen', href: '/plumber-bulleen' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar
        logo={
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/kovele-logo.png"
              alt="Kovele Plumbing"
              className="h-12 w-auto md:h-14"
            />
          </Link>
        }
        links={NAV_LINKS}
        cta={{ label: 'Call Steve', href: 'tel:0418340501' }}
        topbar={{
          text: 'Bundoora, Melbourne | Mon-Fri 6am-6pm, Sat 7am-5pm',
          phone: '0418 340 501',
        }}
      />

      {children}

      <Footer
        businessName="Kovele Plumbing"
        logo={
          <img
            src="/images/kovele-logo.png"
            alt="Kovele Plumbing"
            className="h-14 w-auto"
          />
        }
        description="Melbourne plumbers you can trust. Family business since 1985."
        linkGroups={FOOTER_LINKS}
        socials={[
          {
            icon: <PhoneCall className="h-5 w-5" />,
            href: 'tel:0418340501',
            label: '0418 340 501',
          },
        ]}
      />
    </>
  )
}
