import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Card, CardContent } from '@/components/molecules/Card'
import { Globe, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Export Finance',
  description:
    'EDB Export Finance — pre-shipment finance, post-shipment finance, export credit, and market entry support for Sudanese exporters.',
}

export default function ExportFinancePage() {
  return (
    <MainLayout>
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Export Finance' },
            ]}
            className="mb-4"
          />
          <Badge variant="primary" className="mb-3">Export Finance</Badge>
          <Heading level="h1" className="mb-2">Export Finance</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            Dedicated export development programs supporting Sudanese businesses in accessing international markets.
          </Text>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="edb-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Empowering Sudanese Exporters</h2>
            <p className="mb-6 text-primary-100 leading-relaxed">
              EDB&apos;s export finance programs provide end-to-end support for Sudanese businesses —
              from pre-shipment preparation to post-shipment collections — ensuring you can compete
              confidently in global markets.
            </p>
            <Button variant="filled" className="bg-white text-primary-700 hover:bg-primary-50" asChild>
              <Link href="/contact">Get Export Finance</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Globe className="h-5 w-5" />, label: 'Global Markets' },
              { icon: <TrendingUp className="h-5 w-5" />, label: 'Growth Support' },
              { icon: <CheckCircle2 className="h-5 w-5" />, label: 'Risk Mitigation' },
              { icon: <CheckCircle2 className="h-5 w-5" />, label: 'Advisory Services' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl border border-primary-600/50 bg-primary-800/40 p-5 text-center">
                <div className="text-primary-300">{item.icon}</div>
                <p className="text-sm font-medium text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <Heading level="h2" className="mb-8 text-center">Export Finance Products</Heading>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Pre-Shipment Finance',
                desc: 'Working capital financing for exporters to produce and prepare goods for export.',
                features: ['Production Finance', 'Raw Material Procurement', 'Packing Credit', 'Order-based Financing'],
              },
              {
                title: 'Post-Shipment Finance',
                desc: 'Financing against export documents after shipment has been completed.',
                features: ['Export Bill Discounting', 'Invoice Factoring', 'Forfeiting', 'Collection Advances'],
              },
              {
                title: 'Export Credit Guarantee',
                desc: 'Government-backed credit guarantees to reduce risk for export transactions.',
                features: ['Commercial Risk Cover', 'Political Risk Cover', 'Buyer Default Protection', 'Country Risk Cover'],
              },
              {
                title: 'Market Entry Support',
                desc: 'Advisory and financial support for Sudanese businesses entering new international markets.',
                features: ['Market Research', 'Buyer Identification', 'Trade Delegation Support', 'Export Advisory'],
              },
            ].map((p) => (
              <Card key={p.title}>
                <CardContent>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{p.title}</h3>
                  <p className="mb-4 text-sm text-neutral-500">{p.desc}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">{f}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="edb-section bg-white text-center">
        <div className="edb-container">
          <Heading level="h2" className="mb-4">Start Exporting with Confidence</Heading>
          <Text size="lg" color="muted" className="mx-auto mb-8 max-w-xl">
            Contact our export finance team to learn how EDB can support your international trade ambitions.
          </Text>
          <Button variant="filled" size="lg" asChild>
            <Link href="/contact">Contact Export Finance Team <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
