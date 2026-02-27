import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { ServiceCard } from '@/components/molecules/Card'
import {
  Building2,
  Anchor,
  Globe,
  Smartphone,
  Landmark,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore EDB\'s comprehensive banking services including trade finance, corporate banking, export finance, and digital banking.',
}

const services = [
  {
    slug: 'corporate-banking',
    icon: <Building2 className="h-7 w-7" />,
    title: 'Corporate Banking',
    description:
      'End-to-end financial solutions for businesses — from working capital facilities and term loans to project finance and syndications.',
    features: ['Working Capital Finance', 'Term Loans', 'Project Finance', 'Overdraft Facilities'],
    href: '/services/corporate-banking',
  },
  {
    slug: 'trade-finance',
    icon: <Anchor className="h-7 w-7" />,
    title: 'Trade Finance',
    description:
      'Comprehensive import and export financing including letters of credit, documentary collections, bank guarantees, and trade credit insurance.',
    features: ['Letters of Credit', 'Bank Guarantees', 'Documentary Collections', 'Trade Credit Insurance'],
    href: '/services/trade-finance',
  },
  {
    slug: 'export-finance',
    icon: <Globe className="h-7 w-7" />,
    title: 'Export Finance',
    description:
      'Specialized export development programs supporting Sudanese businesses in accessing international markets and expanding their global reach.',
    features: ['Pre-shipment Finance', 'Post-shipment Finance', 'Export Credit', 'Market Entry Support'],
    href: '/services/export-finance',
  },
  {
    slug: 'digital-banking',
    icon: <Smartphone className="h-7 w-7" />,
    title: 'Digital Banking',
    description:
      'Modern online and mobile banking platform with real-time transaction management, payment processing, and account services.',
    features: ['Online Banking Portal', 'Mobile Banking App', 'Payment Gateway', 'API Integration'],
    href: '/services/digital-banking',
  },
  {
    slug: 'treasury',
    icon: <BarChart3 className="h-7 w-7" />,
    title: 'Treasury Services',
    description:
      'Sophisticated treasury solutions including foreign exchange, money market instruments, and investment products.',
    features: ['Foreign Exchange', 'Money Market', 'Fixed Deposits', 'Investment Products'],
    href: '/services/treasury',
  },
  {
    slug: 'sme-banking',
    icon: <Landmark className="h-7 w-7" />,
    title: 'SME Banking',
    description:
      'Tailored banking solutions for small and medium enterprises, designed to support growth at every stage of the business lifecycle.',
    features: ['SME Loans', 'Business Accounts', 'Cash Management', 'Advisory Services'],
    href: '/services/sme-banking',
  },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Page header */}
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services' },
            ]}
            className="mb-4"
          />
          <Heading level="h1" className="mb-2">Our Banking Services</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            Comprehensive financial solutions designed to support Sudan&apos;s trade, export,
            and economic development goals.
          </Text>
        </div>
      </div>

      {/* Services grid */}
      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-100">
                  {service.icon}
                </div>
                <h2 className="mb-2 text-lg font-semibold text-neutral-900">{service.title}</h2>
                <p className="mb-4 text-sm text-neutral-500 leading-relaxed">{service.description}</p>

                <ul className="mb-5 flex flex-col gap-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800 focus-visible:outline-none focus-visible:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="edb-section bg-white">
        <div className="edb-container">
          <div className="rounded-2xl bg-primary-700 px-8 py-12 text-center text-white md:px-16">
            <Heading level="h2" color="white" className="mb-4">
              Need a Tailored Solution?
            </Heading>
            <Text size="lg" color="white" className="mx-auto mb-8 max-w-xl opacity-90">
              Our relationship managers are ready to design a customized banking solution
              that meets your specific business requirements.
            </Text>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="filled"
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50"
                asChild
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
              <Button
                variant="outlined"
                size="lg"
                className="border-primary-300 text-white hover:bg-primary-600"
                asChild
              >
                <Link href="/contact#appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
