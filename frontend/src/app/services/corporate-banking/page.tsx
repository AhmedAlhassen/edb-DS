import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Card, CardContent } from '@/components/molecules/Card'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Banking',
  description:
    'EDB Corporate Banking — working capital, term loans, project finance, and complete financial solutions for businesses.',
}

const products = [
  {
    title: 'Working Capital Finance',
    description: 'Short-term financing solutions to manage day-to-day business operations and cash flow needs.',
    features: ['Overdraft Facilities', 'Short-term Loans', 'Invoice Discounting', 'Revolving Credit'],
  },
  {
    title: 'Term Loans',
    description: 'Medium to long-term financing for business expansion, equipment acquisition, and capital expenditure.',
    features: ['Business Expansion', 'Asset Finance', 'Equipment Loans', 'Flexible Repayment'],
  },
  {
    title: 'Project Finance',
    description: 'Structured finance solutions for large infrastructure and development projects across Sudan.',
    features: ['Infrastructure Projects', 'Energy Finance', 'Real Estate Finance', 'Syndicated Loans'],
  },
  {
    title: 'Cash Management',
    description: 'Comprehensive treasury and cash management services for optimizing liquidity and working capital.',
    features: ['Payroll Solutions', 'Collections Management', 'Electronic Payments', 'Liquidity Management'],
  },
]

export default function CorporateBankingPage() {
  return (
    <MainLayout>
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Corporate Banking' },
            ]}
            className="mb-4"
          />
          <Badge variant="primary" className="mb-3">Corporate Banking</Badge>
          <Heading level="h1" className="mb-2">Corporate Banking Solutions</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            Comprehensive financial solutions tailored for businesses of all sizes.
          </Text>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="edb-container">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">Your Business Banking Partner</h2>
            <p className="mb-6 text-lg text-primary-100 leading-relaxed">
              EDB provides end-to-end corporate banking solutions designed to meet the evolving
              financial needs of Sudanese businesses — from startups to large corporates.
            </p>
            <div className="flex gap-3">
              <Button variant="filled" className="bg-white text-primary-700 hover:bg-primary-50" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outlined" className="border-primary-400 text-white" asChild>
                <Link href="/contact#appointment">Book Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <Heading level="h2" className="mb-8 text-center">Corporate Banking Products</Heading>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <Card key={p.title}>
                <CardContent>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{p.title}</h3>
                  <p className="mb-4 text-sm text-neutral-500 leading-relaxed">{p.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="edb-section bg-white">
        <div className="edb-container text-center">
          <Heading level="h2" className="mb-4">Ready to Grow Your Business?</Heading>
          <Text size="lg" color="muted" className="mx-auto mb-8 max-w-xl">
            Speak with our corporate banking specialists to find the right solution for your business.
          </Text>
          <Button variant="filled" size="lg" asChild>
            <Link href="/contact">
              Contact Corporate Banking Team <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
