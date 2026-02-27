import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/atoms'
import { ArrowRight, Shield, TrendingUp, Globe } from 'lucide-react'

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10" aria-hidden="true">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="edb-container relative py-20 md:py-28 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Content */}
        <div>
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-600 bg-primary-800/50 px-3 py-1.5 text-xs font-medium text-primary-200 backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Sudan&apos;s Premier Development Bank
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Financing Sudan&apos;s{' '}
            <span className="text-primary-300">Export Growth</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-primary-100 leading-relaxed">
            Export Development Bank (EDB) provides comprehensive financial solutions for trade
            finance, corporate banking, and export development — empowering businesses to grow
            and expand globally.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="filled"
              size="lg"
              className="bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800"
              asChild
            >
              <Link href="/contact">
                Open an Account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="border-primary-400 text-white hover:bg-primary-700"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'CBOS Regulated' },
              { icon: Globe, label: 'International Standards' },
              { icon: TrendingUp, label: 'Growth Focused' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-primary-200">
                <Icon className="h-4 w-4" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Stats panel */}
        <div className="hidden lg:flex lg:justify-end">
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {[
              { label: 'Years of Service', value: '30+' },
              { label: 'Active Clients', value: '10,000+' },
              { label: 'Trade Financed', value: '$2B+' },
              { label: 'Branch Network', value: '25+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-primary-600/50 bg-primary-800/40 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stats */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
        {[
          { label: 'Years', value: '30+' },
          { label: 'Clients', value: '10K+' },
          { label: 'Trade', value: '$2B+' },
          { label: 'Branches', value: '25+' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-primary-600/50 bg-primary-800/40 p-4 text-center backdrop-blur-sm"
          >
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-0.5 text-xs text-primary-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Wave divider */}
    <div className="relative h-16 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,64L80,53.3C160,43,320,21,480,21.3C640,21,800,43,960,48C1120,53,1280,43,1360,37.3L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z"
          fill="#F6F6F8"
        />
      </svg>
    </div>
  </section>
)

HeroSection.displayName = 'HeroSection'

// ─── Exchange Rate Ticker ─────────────────────────────────────────────────────

const rates = [
  { currency: 'USD/SDG', rate: '600.50', change: '+0.25%', up: true },
  { currency: 'EUR/SDG', rate: '650.30', change: '-0.12%', up: false },
  { currency: 'GBP/SDG', rate: '755.80', change: '+0.45%', up: true },
  { currency: 'SAR/SDG', rate: '160.10', change: '+0.10%', up: true },
  { currency: 'AED/SDG', rate: '163.50', change: '-0.08%', up: false },
]

const ExchangeRateTicker = () => (
  <div className="border-b border-neutral-200 bg-white shadow-sm">
    <div className="edb-container flex items-center gap-4 py-2">
      <span className="shrink-0 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
        Exchange Rates
      </span>
      <div className="flex overflow-hidden">
        <div className="flex animate-[slide-left_30s_linear_infinite] items-center gap-6 whitespace-nowrap">
          {[...rates, ...rates].map((rate, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs">
              <span className="font-semibold text-neutral-700">{rate.currency}</span>
              <span className="text-neutral-900 font-mono">{rate.rate}</span>
              <span className={cn('font-medium', rate.up ? 'text-green-600' : 'text-red-600')}>
                {rate.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

ExchangeRateTicker.displayName = 'ExchangeRateTicker'

export { HeroSection, ExchangeRateTicker }
