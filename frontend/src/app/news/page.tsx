import type { Metadata } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Badge, Heading, Text } from '@/components/atoms'
import { Breadcrumbs } from '@/components/molecules/NavItem'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'Stay updated with the latest news, announcements, and insights from Export Development Bank Sudan.',
}

const newsArticles = [
  {
    slug: 'export-financing-agricultural',
    category: 'Trade Finance',
    date: '2024-12-15',
    title: 'EDB Launches New Export Financing Facility for Agricultural Sector',
    excerpt:
      'The Export Development Bank has introduced a specialized financing package to support Sudanese agricultural exporters with competitive rates and flexible terms.',
    readTime: '3 min read',
  },
  {
    slug: 'mobile-banking-corporate',
    category: 'Digital Banking',
    date: '2024-11-28',
    title: 'Mobile Banking App Now Available for Corporate Clients',
    excerpt:
      'EDB unveils its upgraded mobile banking application featuring enhanced security, real-time transactions, and improved user experience for corporate clients.',
    readTime: '2 min read',
  },
  {
    slug: 'mou-african-development-bank',
    category: 'Corporate',
    date: '2024-10-10',
    title: 'EDB Signs MOU with African Development Bank for Trade Support',
    excerpt:
      'Strategic partnership agreement signed to enhance trade finance capabilities and support SME exporters across Sudan, with joint financing programs.',
    readTime: '4 min read',
  },
  {
    slug: 'q3-2024-financial-results',
    category: 'Financial Results',
    date: '2024-10-01',
    title: 'EDB Reports Strong Q3 2024 Financial Results',
    excerpt:
      'Export Development Bank reports a 15% increase in trade finance volumes and strong asset quality metrics in the third quarter of 2024.',
    readTime: '5 min read',
  },
  {
    slug: 'shariah-certification-renewal',
    category: 'Compliance',
    date: '2024-09-15',
    title: 'EDB Renews Shariah Compliance Certification',
    excerpt:
      'The bank\'s full product suite has been reviewed and certified by the Shariah Supervisory Board, affirming compliance with Islamic finance principles.',
    readTime: '2 min read',
  },
  {
    slug: 'new-khartoum-branch',
    category: 'Operations',
    date: '2024-08-22',
    title: 'New Branch Opens in Greater Khartoum Business District',
    excerpt:
      'EDB expands its branch network with a new full-service branch in the Khartoum commercial district, bringing our total to 26 branches nationwide.',
    readTime: '2 min read',
  },
]

const categories = ['All', 'Trade Finance', 'Digital Banking', 'Corporate', 'Financial Results', 'Compliance', 'Operations']

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPage() {
  return (
    <MainLayout>
      {/* Page header */}
      <div className="border-b border-neutral-200 bg-white py-8">
        <div className="edb-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'News' },
            ]}
            className="mb-4"
          />
          <Heading level="h1" className="mb-2">News & Updates</Heading>
          <Text size="lg" color="muted">
            Latest news, announcements, and insights from Export Development Bank.
          </Text>
        </div>
      </div>

      {/* Featured article */}
      <section className="bg-white border-b border-neutral-200">
        <div className="edb-container py-10">
          <div className="rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 p-8 text-white md:p-10">
            <Badge variant="primary" className="mb-3 border-primary-500 bg-primary-800 text-primary-100">Featured</Badge>
            <h2 className="mb-3 max-w-2xl text-2xl font-bold md:text-3xl">
              {newsArticles[0].title}
            </h2>
            <p className="mb-4 max-w-xl text-primary-100">{newsArticles[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-primary-200">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(newsArticles[0].date)}
              </div>
              <span>{newsArticles[0].readTime}</span>
            </div>
            <Link
              href={`/news/${newsArticles[0].slug}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Read Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-20 border-b border-neutral-200 bg-white">
        <div className="edb-container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 data-[active]:bg-primary-100 data-[active]:text-primary-700"
                data-active={cat === 'All' ? '' : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="edb-section bg-neutral-50">
        <div className="edb-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.slice(1).map((article) => (
              <article
                key={article.slug}
                className="group rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Placeholder image */}
                <div className="h-44 rounded-t-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-200">
                    <span className="text-xl font-bold text-primary-700">
                      {article.category[0]}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="primary" className="text-xs">{article.category}</Badge>
                  </div>
                  <h2 className="mb-2 font-semibold text-neutral-900 leading-snug group-hover:text-primary-700 transition-colors">
                    <Link href={`/news/${article.slug}`} className="focus-visible:outline-none focus-visible:underline">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mb-4 text-sm text-neutral-500 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(article.date)}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
