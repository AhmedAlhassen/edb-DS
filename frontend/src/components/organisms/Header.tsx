'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/atoms'
import { Menu, X, Globe, ChevronDown, Phone } from 'lucide-react'
import Image from 'next/image'

// ─── Nav items definition ─────────────────────────────────────────────────────

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#story', description: 'Our history and mission' },
      { label: 'Leadership', href: '/about#leadership', description: 'Meet our executive team' },
      { label: 'Governance', href: '/about#governance', description: 'Board & governance' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Corporate Banking', href: '/services/corporate-banking', description: 'Business banking solutions' },
      { label: 'Trade Finance', href: '/services/trade-finance', description: 'Import & export financing' },
      { label: 'Export Finance', href: '/services/export-finance', description: 'Export development support' },
      { label: 'Digital Banking', href: '/services/digital-banking', description: 'Online banking platform' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
  const [isOpen, setIsOpen] = React.useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
          isActive
            ? 'text-primary-700 bg-primary-50'
            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
          isActive
            ? 'text-primary-700 bg-primary-50'
            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute start-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-neutral-200',
            'bg-white p-2 shadow-lg animate-fade-in'
          )}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 hover:bg-primary-50 transition-colors"
            >
              <span className="text-sm font-medium text-neutral-800">{child.label}</span>
              {child.description && (
                <span className="text-xs text-neutral-500">{child.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const pathname = usePathname()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-neutral-900/50 transition-opacity duration-normal',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed end-0 top-0 z-50 h-full w-[300px] bg-white shadow-xl',
          'transition-transform duration-slow',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="font-semibold text-neutral-900">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ms-4 mt-1 flex flex-col gap-0.5 border-s-2 border-neutral-200 ps-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="border-t border-neutral-200 p-4">
          <Button variant="filled" className="w-full" asChild>
            <Link href="/contact">Open an Account</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

// ─── Top Bar ─────────────────────────────────────────────────────────────────

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary-900 py-2 text-center text-xs text-primary-100">
        <div className="edb-container flex items-center justify-center gap-4">
          <Phone className="h-3 w-3" />
          <span>Customer Service: +249 (0) 183-XXX-XXX</span>
          <span className="mx-2 h-3 w-px bg-primary-700" aria-hidden="true" />
          <Globe className="h-3 w-3" />
          <button className="hover:text-white transition-colors">العربية</button>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-30 w-full border-b bg-white/95 backdrop-blur-sm transition-shadow duration-normal',
          scrolled ? 'shadow-sm border-neutral-200' : 'border-transparent'
        )}
      >
        <div className="edb-container flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded"
            aria-label="EDB - Export Development Bank"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-700">
              <span className="text-sm font-bold text-white">EDB</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-neutral-900 leading-tight">Export Development Bank</p>
              <p className="text-xs text-neutral-500 leading-tight">Sudan</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              variant="filled"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="/contact">Open Account</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden rounded-md p-2 text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

Header.displayName = 'Header'

export { Header }
