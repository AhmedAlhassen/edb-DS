import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react'

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Corporate Banking', href: '/services/corporate-banking' },
      { label: 'Trade Finance', href: '/services/trade-finance' },
      { label: 'Export Finance', href: '/services/export-finance' },
      { label: 'Digital Banking', href: '/services/digital-banking' },
      { label: 'Treasury', href: '/services/treasury' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'News & Media', href: '/news' },
      { label: 'Investor Relations', href: '/investor-relations' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Branch Locator', href: '/branches' },
      { label: 'Complaints', href: '/contact#complaints' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
}

const Footer = ({ className }: { className?: string }) => (
  <footer className={cn('bg-neutral-900 text-neutral-300', className)}>
    {/* Main footer */}
    <div className="edb-container py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-sm font-bold text-white">EDB</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Export Development Bank</p>
              <p className="text-xs text-neutral-400 leading-tight">Sudan</p>
            </div>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Sudan&apos;s premier development bank, dedicated to financing trade, export, and economic growth
            since our establishment.
          </p>

          {/* Contact info */}
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2.5 text-neutral-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>Export Development Bank Building, Khartoum, Sudan</span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-400">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" />
              <a href="tel:+2490183000000" className="hover:text-white transition-colors">
                +249 (0) 183-XXX-XXX
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-400">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" />
              <a href="mailto:info@edb.sd" className="hover:text-white transition-colors">
                info@edb.sd
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-400">
              <Globe className="h-4 w-4 shrink-0 text-primary-400" />
              <span>Working Hours: Sun–Thu, 8AM–4PM</span>
            </div>
          </div>

          {/* Language toggle */}
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-1.5 text-xs text-neutral-400 hover:border-neutral-500 hover:text-white transition-colors">
              <Globe className="h-3.5 w-3.5" />
              العربية
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Link columns */}
        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-semibold text-white">{section.title}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Compliance bar */}
    <div className="border-t border-neutral-800 bg-neutral-950">
      <div className="edb-container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded border border-neutral-700 px-2 py-1 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            CBOS Regulated
          </span>
          <span className="inline-flex items-center gap-1.5 rounded border border-neutral-700 px-2 py-1 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            Deposits Insured
          </span>
          <span className="inline-flex items-center gap-1.5 rounded border border-neutral-700 px-2 py-1 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            Shariah Compliant
          </span>
        </div>

        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Export Development Bank. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

Footer.displayName = 'Footer'

export { Footer }
