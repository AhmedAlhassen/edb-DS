import * as React from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
  withHero?: boolean
}

const MainLayout = ({ children, className, withHero }: MainLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main
      id="main-content"
      className={cn('flex-1', !withHero && 'bg-neutral-50', className)}
      tabIndex={-1}
    >
      {children}
    </main>
    <Footer />
  </div>
)

MainLayout.displayName = 'MainLayout'

export { MainLayout }
