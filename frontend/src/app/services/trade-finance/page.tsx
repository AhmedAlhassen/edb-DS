import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Card, CardContent } from '@/components/molecules/Card'
import { CheckCircle2, FileText, Shield, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trade Finance',
  description:
    'EDB Trade Finance — letters of credit, bank guarantees, documentary collections, and trade credit insurance for import/export businesses.',
}

const products = [
  {
    title: 'Letters of Credit (LC)',
    description:
      'Documentary Letters of Credit providing payment security for both importers and exporters in international trade transactions.',
    features: ['Sight LCs', 'Usance/Deferred LCs', 'Revolving LCs', 'Back-to-Back LCs', 'Transferable LCs'],
  },
  {
    title: 'Bank Guarantees',
    description:
      'Performance, advance payment, and bid bond guarantees to secure trade obligations and contracts.',
    features: ['Performance Bonds', 'Advance Payment Guarantees', 'Bid Bonds', 'Standby LCs', 'Retention Bonds'],
  },
  {
    title: 'Documentary Collections',
    description:
      'Efficient documentary collection services handling Documents against Payment (D/P) and Documents against Acceptance (D/A).',
    features: ['D/P Collections', 'D/A Collections', 'Clean Collections', 'Swift Processing', 'Global Correspondent Network'],
  },
  {
    title: 'Trade Credit Insurance',
    description:
      'Protect your trade receivables against non-payment risk from buyers, political risks, and commercial risks.',
    features: ['Buyer Default Protection', 'Political Risk Cover', 'Short-term Cover', 'Comprehensive Policies'],
  },
]

export default function TradeFinancePage() {
  return (
    <MainLayout>
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Trade Finance' },
            ]}
            className="mb-4"
          />
          <Badge variant="primary" className="mb-3">Trade Finance</Badge>
          <Heading level="h1" className="mb-2">Trade Finance Solutions</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            Comprehensive import and export financing to facilitate smooth international trade transactions.
          </Text>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="edb-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">
                Enabling Global Trade for Sudanese Businesses
              </h2>
              <p className="mb-6 text-primary-100 leading-relaxed">
                EDB&apos;s trade finance solutions provide the security and financing needed to conduct
                international trade with confidence. From letters of credit to guarantees, we support
                every stage of your trade transaction.
              </p>
              <div className="flex gap-3">
                <Button variant="filled" className="bg-white text-primary-700 hover:bg-primary-50" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outlined" className="border-primary-400 text-white" asChild>
                  <Link href="/contact#appointment">Speak to an Expert</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield className="h-5 w-5" />, label: 'Payment Security' },
                { icon: <FileText className="h-5 w-5" />, label: 'Documentation' },
                { icon: <Zap className="h-5 w-5" />, label: 'Fast Processing' },
                { icon: <CheckCircle2 className="h-5 w-5" />, label: 'Global Network' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl border border-primary-600/50 bg-primary-800/40 p-5 text-center">
                  <div className="text-primary-300">{item.icon}</div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="mb-12 text-center">
            <Heading level="h2" className="mb-4">Trade Finance Products</Heading>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Card key={product.title}>
                <CardContent>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{product.title}</h3>
                  <p className="mb-4 text-sm text-neutral-500 leading-relaxed">{product.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <li key={f} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
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

      {/* CTA */}
      <section className="edb-section bg-white">
        <div className="edb-container text-center">
          <Heading level="h2" className="mb-4">Ready to Finance Your Trade?</Heading>
          <Text size="lg" color="muted" className="mx-auto mb-8 max-w-xl">
            Contact our trade finance specialists today to discuss how we can support your
            import and export activities.
          </Text>
          <Button variant="filled" size="lg" asChild>
            <Link href="/contact">
              Contact Trade Finance Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
