import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Smartphone, Shield, Zap, BarChart3, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Banking',
  description: 'EDB Digital Banking — online banking portal, mobile app, payments, and API integration.',
}

export default function DigitalBankingPage() {
  return (
    <MainLayout>
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Digital Banking' },
            ]}
            className="mb-4"
          />
          <Badge variant="primary" className="mb-3">Digital Banking</Badge>
          <Heading level="h1" className="mb-2">Digital Banking</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            Modern banking at your fingertips — secure, fast, and available 24/7.
          </Text>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-20 text-white">
        <div className="edb-container text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-600 text-white">
            <Smartphone className="h-10 w-10" />
          </div>
          <h2 className="mb-4 text-4xl font-bold">Banking Made Simple</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-100">
            Access all your banking needs anytime, anywhere with EDB&apos;s digital banking platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="filled" className="bg-white text-primary-700 hover:bg-primary-50" asChild>
              <Link href="/login">Access Online Banking</Link>
            </Button>
            <Button variant="outlined" className="border-primary-400 text-white" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <Heading level="h2" className="mb-10 text-center">Digital Features</Heading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Shield className="h-7 w-7" />, title: 'Secure Banking', desc: 'Bank-grade encryption and multi-factor authentication.' },
              { icon: <Zap className="h-7 w-7" />, title: 'Instant Transfers', desc: 'Real-time payment processing and fund transfers.' },
              { icon: <BarChart3 className="h-7 w-7" />, title: 'Analytics', desc: 'Detailed spending insights and financial reports.' },
              { icon: <Smartphone className="h-7 w-7" />, title: 'Mobile App', desc: 'iOS and Android apps with full banking capabilities.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-semibold text-neutral-900">{f.title}</h3>
                <p className="text-sm text-neutral-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="edb-section bg-white text-center">
        <div className="edb-container">
          <Heading level="h2" className="mb-4">Get Started with Digital Banking</Heading>
          <Text size="lg" color="muted" className="mx-auto mb-8 max-w-xl">
            Open an account today and get immediate access to our digital banking platform.
          </Text>
          <Button variant="filled" size="lg" asChild>
            <Link href="/contact">Open Digital Account <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
