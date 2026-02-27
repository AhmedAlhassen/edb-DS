'use client'

import * as React from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>('light')

  // On mount: read saved preference
  React.useEffect(() => {
    const saved = localStorage.getItem('edb-theme') as Theme | null
    if (saved) setThemeState(saved)
  }, [])

  // Apply the class whenever theme changes
  React.useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    function apply(t: Theme) {
      const resolved = t === 'system' ? (mq.matches ? 'dark' : 'light') : t
      root.classList.toggle('dark', resolved === 'dark')
      setResolvedTheme(resolved)
    }

    apply(theme)

    // If system, update when OS preference changes
    if (theme === 'system') {
      const handler = () => apply('system')
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [theme])

  function setTheme(t: Theme) {
    setThemeState(t)
    localStorage.setItem('edb-theme', t)
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
