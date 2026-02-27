'use client'

import * as React from 'react'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Badge, Heading, Text } from '@/components/atoms'
import { Input, Textarea } from '@/components/atoms/Input'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Alert } from '@/components/molecules/Alert'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { submitContactForm } from '@/lib/strapi'

const offices = [
  {
    name: 'Head Office — Khartoum',
    address: 'Export Development Bank Building, Nile Street, Khartoum, Sudan',
    phone: '+249 (0) 183-XXX-XXX',
    email: 'hq@edb.sd',
    hours: 'Sunday–Thursday, 8:00 AM – 4:00 PM',
  },
  {
    name: 'North Khartoum Branch',
    address: 'Al-Amarat District, North Khartoum, Sudan',
    phone: '+249 (0) 183-XXX-XXX',
    email: 'northkhartoum@edb.sd',
    hours: 'Sunday–Thursday, 8:00 AM – 3:30 PM',
  },
]

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = React.useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const result = await submitContactForm(data)
    setStatus(result.success ? 'success' : 'error')
    setMessage(result.message)

    if (result.success) form.reset()
  }

  return (
    <MainLayout>
      {/* Page header */}
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact Us' },
            ]}
            className="mb-4"
          />
          <Heading level="h1" className="mb-2">Contact Us</Heading>
          <Text size="lg" color="muted">
            We&apos;re here to help. Get in touch with our team or visit one of our branches.
          </Text>
        </div>
      </div>

      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-neutral-900">Send us a Message</h2>
                    <p className="text-sm text-neutral-500">We&apos;ll respond within 1 business day</p>
                  </div>
                </div>

                {status === 'success' && (
                  <Alert variant="success" title="Message Sent!" className="mb-6">
                    {message}
                  </Alert>
                )}

                {status === 'error' && (
                  <Alert variant="error" title="Submission Failed" className="mb-6">
                    {message}
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Ahmed Hassan"
                      required
                      autoComplete="name"
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="ahmed@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Phone Number"
                      name="phone"
                      id="phone"
                      type="tel"
                      placeholder="+249 (0) 9X-XXX-XXXX"
                      autoComplete="tel"
                    />
                    <Input
                      label="Subject"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Trade Finance Inquiry"
                      required
                    />
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    id="message"
                    placeholder="Please describe how we can help you..."
                    rows={5}
                    required
                  />

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      variant="filled"
                      size="lg"
                      loading={status === 'loading'}
                    >
                      Send Message
                    </Button>
                    <p className="text-xs text-neutral-500">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="text-primary-700 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="flex flex-col gap-6">
              {/* Quick contact */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 font-semibold text-neutral-900">Quick Contact</h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: <Phone className="h-4 w-4 text-primary-600" />,
                      label: 'Customer Service',
                      value: '+249 (0) 183-XXX-XXX',
                      href: 'tel:+2490183000000',
                    },
                    {
                      icon: <Mail className="h-4 w-4 text-primary-600" />,
                      label: 'General Inquiries',
                      value: 'info@edb.sd',
                      href: 'mailto:info@edb.sd',
                    },
                    {
                      icon: <Mail className="h-4 w-4 text-primary-600" />,
                      label: 'Trade Finance',
                      value: 'trade@edb.sd',
                      href: 'mailto:trade@edb.sd',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-50">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-neutral-500">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-sm font-medium text-neutral-800 hover:text-primary-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working hours */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary-600" />
                  <h2 className="font-semibold text-neutral-900">Working Hours</h2>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday – Thursday</span>
                    <span className="font-medium text-neutral-900">8:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Friday</span>
                    <span className="font-medium text-neutral-900">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium text-neutral-900">Closed</span>
                  </div>
                  <div className="mt-2 rounded-md bg-green-50 px-3 py-2 text-xs text-green-700">
                    <span className="font-medium">Online banking</span> available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div className="mt-12">
            <div className="mb-6">
              <Badge variant="primary" className="mb-3">Branch Network</Badge>
              <Heading level="h2">Our Offices</Heading>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-4 font-semibold text-neutral-900">{office.name}</h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-start gap-2.5 text-neutral-600">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-2.5 text-neutral-600">
                      <Phone className="h-4 w-4 shrink-0 text-primary-600" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary-700 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-neutral-600">
                      <Mail className="h-4 w-4 shrink-0 text-primary-600" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary-700 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5 text-neutral-600">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      {office.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
