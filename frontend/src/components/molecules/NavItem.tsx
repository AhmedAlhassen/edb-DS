'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItemDef {
  label: string
  href: string
  icon?: React.ReactNode
  children?: NavItemDef[]
  badge?: string
}

// ─── NavLink ─────────────────────────────────────────────────────────────────

export interface NavLinkProps extends NavItemDef {
  className?: string
  onClick?: () => void
}

const NavLink = ({ label, href, icon, badge, className, onClick }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
        'transition-colors duration-fast',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
        isActive
          ? 'bg-primary-50 text-primary-700 [&_svg]:text-primary-600'
          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon && (
        <span className={cn('shrink-0', isActive ? 'text-primary-600' : 'text-neutral-400 group-hover:text-neutral-600')}>
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{label}</span>
      {badge && (
        <span className="ms-auto inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-100 px-1.5 text-[10px] font-semibold text-primary-700">
          {badge}
        </span>
      )}
    </Link>
  )
}
NavLink.displayName = 'NavLink'

// ─── NavGroup ────────────────────────────────────────────────────────────────

export interface NavGroupProps {
  label: string
  icon?: React.ReactNode
  items: NavItemDef[]
  defaultOpen?: boolean
  className?: string
}

const NavGroup = ({ label, icon, items, defaultOpen, className }: NavGroupProps) => {
  const pathname = usePathname()
  const isAnyActive = items.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  )
  const [isOpen, setIsOpen] = React.useState(defaultOpen ?? isAnyActive)

  return (
    <div className={cn('', className)}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
          'transition-colors duration-fast',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
          isAnyActive ? 'text-primary-700' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
        )}
        aria-expanded={isOpen}
      >
        {icon && (
          <span className={cn('shrink-0', isAnyActive ? 'text-primary-600' : 'text-neutral-400')}>
            {icon}
          </span>
        )}
        <span className="flex-1 text-start truncate">{label}</span>
        <ChevronDown
          className={cn('h-4 w-4 shrink-0 transition-transform duration-normal', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="ms-4 mt-1 flex flex-col gap-0.5 border-s-2 border-neutral-200 ps-3">
          {items.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}
NavGroup.displayName = 'NavGroup'

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 text-sm', className)}>
    <ol className="flex items-center gap-1.5">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-neutral-400 rtl:rotate-180" aria-hidden="true">/</span>
            )}
            {isLast || !item.href ? (
              <span className={cn('font-medium', isLast ? 'text-neutral-700' : 'text-neutral-500')} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-neutral-500 hover:text-primary-700 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)
Breadcrumbs.displayName = 'Breadcrumbs'

export { NavLink, NavGroup, Breadcrumbs }
