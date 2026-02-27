import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Export Development Bank | EDB Sudan',
    template: '%s | EDB Sudan',
  },
  description:
    'Export Development Bank (EDB) of Sudan - Your trusted partner for corporate banking, trade finance, and export development solutions.',
  keywords: ['EDB', 'Export Development Bank', 'Sudan', 'Banking', 'Trade Finance', 'Corporate Banking'],
  authors: [{ name: 'Export Development Bank Sudan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SD',
    siteName: 'Export Development Bank Sudan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
