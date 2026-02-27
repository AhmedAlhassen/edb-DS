'use client'

import * as React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  // Close on outside click
  React.useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const options: { value: 'light' | 'dark' | 'system'; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun className="h-3.5 w-3.5" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-3.5 w-3.5" /> },
    { value: 'system', label: 'System', icon: <Monitor className="h-3.5 w-3.5" /> },
  ]

  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen((p) => !p)}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md',
          'text-neutral-500 dark:text-neutral-400',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          'transition-colors duration-fast',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'
        )}
        aria-label="Toggle theme"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <CurrentIcon className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            'absolute end-0 top-full z-50 mt-1 min-w-[120px] rounded-lg border p-1',
            'bg-white dark:bg-neutral-800',
            'border-neutral-200 dark:border-neutral-700',
            'shadow-md animate-fade-in'
          )}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              role="menuitem"
              onClick={() => { setTheme(opt.value); setOpen(false) }}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium',
                'transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
                theme === opt.value
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                  : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700'
              )}
              aria-checked={theme === opt.value}
            >
              {opt.icon}
              {opt.label}
              {theme === opt.value && (
                <span className="ms-auto h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
