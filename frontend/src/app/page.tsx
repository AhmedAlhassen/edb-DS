import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { HeroSection, ExchangeRateTicker } from '@/components/organisms/Hero'
import { ServiceCard, StatCard } from '@/components/molecules/Card'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import {
  Building2,
  Anchor,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Export Development Bank - Sudan',
  description:
    'EDB is Sudan\'s leading development bank for trade finance, corporate banking, and export development.',
}

// ─── Static service data (until Strapi is connected) ─────────────────────────

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Corporate Banking',
    description:
      'Comprehensive financial solutions tailored for businesses of all sizes, from working capital to term loans.',
    href: '/services/corporate-banking',
  },
  {
    icon: <Anchor className="h-6 w-6" />,
    title: 'Trade Finance',
    description:
      'Facilitate imports and exports with letters of credit, guarantees, and trade financing instruments.',
    href: '/services/trade-finance',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Export Finance',
    description:
      'Dedicated export development programs supporting Sudanese businesses in accessing international markets.',
    href: '/services/export-finance',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Digital Banking',
    description:
      'Modern online and mobile banking platform providing secure 24/7 access to all your banking needs.',
    href: '/services/digital-banking',
  },
]

const newsItems = [
  {
    category: 'Trade Finance',
    date: 'December 2024',
    title: 'EDB Launches New Export Financing Facility for Agricultural Sector',
    excerpt:
      'The Export Development Bank has introduced a specialized financing package to support Sudanese agricultural exporters.',
    href: '/news/export-financing-agricultural',
  },
  {
    category: 'Digital Banking',
    date: 'November 2024',
    title: 'Mobile Banking App Now Available for Corporate Clients',
    excerpt:
      'EDB unveils its upgraded mobile banking application with enhanced security features and improved user experience.',
    href: '/news/mobile-banking-corporate',
  },
  {
    category: 'Corporate',
    date: 'October 2024',
    title: 'EDB Signs MOU with African Development Bank for Trade Support',
    excerpt:
      'Strategic partnership to enhance trade finance capabilities and support SME exporters across Sudan.',
    href: '/news/mou-african-development-bank',
  },
]

export default function HomePage() {
  return (
    <MainLayout withHero>
      {/* Hero */}
      <HeroSection />

      {/* Exchange rate ticker */}
      <ExchangeRateTicker />

      {/* Services section */}
      <section className="edb-section bg-neutral-50" id="services">
        <div className="edb-container">
          <div className="mb-12 text-center">
            <Badge variant="primary" className="mb-4">Our Services</Badge>
            <Heading level="h2" className="mb-4">
              Complete Banking Solutions
            </Heading>
            <Text size="lg" color="muted" className="mx-auto max-w-2xl">
              From trade finance to digital banking, EDB offers comprehensive financial services
              designed to support Sudan&apos;s economic growth and export development.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outlined" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why EDB section */}
      <section className="edb-section bg-white">
        <div className="edb-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div>
              <Badge variant="primary" className="mb-4">Why EDB</Badge>
              <Heading level="h2" className="mb-4">
                Your Trusted Partner for Growth
              </Heading>
              <Text size="lg" color="muted" className="mb-8">
                For decades, EDB has been at the forefront of Sudan&apos;s financial development,
                providing reliable and innovative banking solutions.
              </Text>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
                    title: 'CBOS Regulated & Compliant',
                    desc: 'Fully regulated by the Central Bank of Sudan with rigorous compliance standards.',
                  },
                  {
                    icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
                    title: 'Shariah-Compliant Products',
                    desc: 'All banking products are structured in accordance with Islamic finance principles.',
                  },
                  {
                    icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
                    title: 'Dedicated Relationship Managers',
                    desc: 'Personal banking experts who understand your business and growth objectives.',
                  },
                  {
                    icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
                    title: 'International Network',
                    desc: 'Strong correspondent banking relationships across Africa, Middle East, and beyond.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-neutral-900">{item.title}</p>
                      <p className="mt-0.5 text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button variant="filled" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outlined" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="h-6 w-6" />, label: 'Total Assets', value: 'SDG 5B+' },
                { icon: <Users className="h-6 w-6" />, label: 'Active Clients', value: '10,000+' },
                { icon: <Globe className="h-6 w-6" />, label: 'Countries Served', value: '40+' },
                { icon: <Clock className="h-6 w-6" />, label: 'Years of Experience', value: '30+' },
              ].map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="edb-container text-center">
          <Heading level="h2" color="white" className="mb-4">
            Ready to Start Banking with EDB?
          </Heading>
          <Text size="lg" color="white" className="mx-auto mb-8 max-w-2xl opacity-90">
            Join thousands of businesses and individuals who trust EDB for their banking needs.
            Open an account today and experience world-class banking.
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="filled"
              size="lg"
              className="bg-white text-primary-700 hover:bg-primary-50"
              asChild
            >
              <Link href="/contact">Open an Account</Link>
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="border-primary-300 text-white hover:bg-primary-600"
              asChild
            >
              <Link href="/contact#appointment">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <Badge variant="primary" className="mb-4">Latest News</Badge>
              <Heading level="h2">News & Updates</Heading>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/news">
                View All News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.href}
                className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="primary">{item.category}</Badge>
                  <span className="text-xs text-neutral-400">{item.date}</span>
                </div>
                <h3 className="mb-2 font-semibold text-neutral-900 leading-snug group-hover:text-primary-700 transition-colors">
                  <Link href={item.href} className="focus-visible:outline-none focus-visible:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.excerpt}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800 focus-visible:outline-none focus-visible:underline"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outlined" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
