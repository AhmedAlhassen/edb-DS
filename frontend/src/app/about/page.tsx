import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Card, CardContent } from '@/components/molecules/Card'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { CheckCircle2, Target, Eye, Heart, Award, Users, Globe, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Export Development Bank (EDB) Sudan — our history, mission, values, and leadership.',
}

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Mission',
    desc: 'To foster Sudan\'s economic growth by providing innovative financial solutions that support export development and trade finance.',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Vision',
    desc: 'To be the leading development bank in Sudan and across East Africa, recognized for excellence, integrity, and sustainable impact.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Values',
    desc: 'Integrity, excellence, innovation, customer focus, and commitment to sustainable economic development guide all our decisions.',
  },
]

const leadership = [
  {
    name: 'Dr. Ahmed Hassan',
    role: 'Chairman of the Board',
    bio: 'Over 30 years of experience in banking and finance across Sudan and the wider African continent.',
  },
  {
    name: 'Eng. Fatima Al-Nour',
    role: 'Chief Executive Officer',
    bio: 'A seasoned banker with expertise in development finance and trade facilitation, leading EDB\'s strategic growth.',
  },
  {
    name: 'Mr. Khalid Ibrahim',
    role: 'Chief Financial Officer',
    bio: 'Chartered accountant and finance expert with 20 years in corporate and development banking.',
  },
  {
    name: 'Dr. Amira Osman',
    role: 'Chief Risk Officer',
    bio: 'Specialist in risk management, compliance, and regulatory affairs in the banking sector.',
  },
]

const milestones = [
  { year: '1994', event: 'EDB established by government decree to support export development' },
  { year: '2000', event: 'First international correspondent banking relationship established' },
  { year: '2008', event: 'Expanded to 10 branches across major Sudanese cities' },
  { year: '2015', event: 'Launched digital banking platform and mobile app' },
  { year: '2020', event: 'Strategic partnership with African Development Bank' },
  { year: '2024', event: 'Reached $2B+ in cumulative trade financed' },
]

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Page header */}
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About Us' },
            ]}
            className="mb-4"
          />
          <Heading level="h1" className="mb-2">About EDB</Heading>
          <Text size="lg" color="muted">
            Sudan&apos;s premier development bank, driving economic growth since 1994.
          </Text>
        </div>
      </div>

      {/* Story section */}
      <section className="edb-section bg-white" id="story">
        <div className="edb-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="primary" className="mb-4">Our Story</Badge>
              <Heading level="h2" className="mb-4">
                Three Decades of Financial Leadership
              </Heading>
              <div className="flex flex-col gap-4 text-neutral-600 leading-relaxed">
                <p>
                  The Export Development Bank (EDB) was established in 1994 as a specialized development
                  financial institution under a government mandate to support Sudan&apos;s economic development
                  through trade finance and export promotion.
                </p>
                <p>
                  Since our founding, we have grown to become one of Sudan&apos;s most trusted banking
                  institutions, serving thousands of corporate clients and SMEs across the country.
                  Our comprehensive suite of financial products is designed to meet the diverse needs
                  of businesses operating in today&apos;s complex global marketplace.
                </p>
                <p>
                  As a Shariah-compliant institution regulated by the Central Bank of Sudan, EDB
                  maintains the highest standards of financial integrity, transparency, and ethical
                  banking practices.
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                <Button variant="filled" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button variant="outlined" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-neutral-900">Key Milestones</h3>
              <div className="relative flex flex-col gap-0">
                <div className="absolute start-5 top-0 h-full w-px bg-neutral-200" aria-hidden="true" />
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex gap-4 pb-6 last:pb-0">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 bg-white">
                      <span className="text-xs font-bold text-primary-700">{m.year.slice(2)}</span>
                    </div>
                    <div className="pb-2 pt-1.5">
                      <p className="text-xs font-bold text-primary-700 uppercase tracking-wide">{m.year}</p>
                      <p className="mt-0.5 text-sm text-neutral-600">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="mb-12 text-center">
            <Badge variant="primary" className="mb-4">Purpose</Badge>
            <Heading level="h2" className="mb-4">Mission, Vision & Values</Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} variant="default" className="flex flex-col gap-4">
                <CardContent>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    {v.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{v.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="edb-section bg-primary-700 text-white">
        <div className="edb-container">
          <div className="mb-12 text-center">
            <Badge variant="primary" className="mb-4 border-primary-400 text-primary-100">Track Record</Badge>
            <Heading level="h2" color="white" className="mb-4">Our Achievements</Heading>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <TrendingUp className="h-8 w-8" />, label: 'Total Trade Financed', value: '$2B+' },
              { icon: <Users className="h-8 w-8" />, label: 'Corporate Clients', value: '10,000+' },
              { icon: <Globe className="h-8 w-8" />, label: 'Countries Connected', value: '40+' },
              { icon: <Award className="h-8 w-8" />, label: 'Industry Awards', value: '15+' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-primary-600/50 bg-primary-800/40 p-6 text-center backdrop-blur-sm">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600/50 text-white">
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-primary-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="edb-section bg-white" id="leadership">
        <div className="edb-container">
          <div className="mb-12 text-center">
            <Badge variant="primary" className="mb-4">Our People</Badge>
            <Heading level="h2" className="mb-4">Executive Leadership</Heading>
            <Text size="lg" color="muted" className="mx-auto max-w-2xl">
              Our experienced leadership team drives EDB&apos;s mission with expertise, integrity, and
              a commitment to Sudan&apos;s economic development.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-700">
                  {person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{person.name}</p>
                  <p className="mt-0.5 text-sm font-medium text-primary-700">{person.role}</p>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="edb-section bg-neutral-50" id="governance">
        <div className="edb-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="primary" className="mb-4">Governance</Badge>
              <Heading level="h2" className="mb-4">Corporate Governance</Heading>
              <Text color="muted" className="mb-6">
                EDB maintains the highest standards of corporate governance, ensuring transparency,
                accountability, and ethical banking practices across all operations.
              </Text>
              <div className="flex flex-col gap-3">
                {[
                  'Board of Directors oversight and strategic guidance',
                  'Independent audit and risk committees',
                  'Full CBOS regulatory compliance',
                  'Shariah Supervisory Board oversight',
                  'Annual external audits by Big 4 firms',
                  'Transparent public financial reporting',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <p className="text-sm text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Board of Directors', count: '9 members' },
                { title: 'Executive Committee', count: '5 members' },
                { title: 'Audit Committee', count: '3 independent members' },
                { title: 'Shariah Board', count: '3 scholars' },
                { title: 'Risk Committee', count: '4 members' },
              ].map((body) => (
                <div
                  key={body.title}
                  className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3"
                >
                  <span className="font-medium text-neutral-800">{body.title}</span>
                  <Badge variant="primary">{body.count}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
