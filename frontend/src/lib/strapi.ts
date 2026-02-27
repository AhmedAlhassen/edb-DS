const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

// ─── Generic fetch wrapper ────────────────────────────────────────────────────

interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiAttributes {
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

async function strapiGet<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>
): Promise<StrapiResponse<T>> {
  const url = new URL(`${STRAPI_URL}/api/${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })
  }

  const res = await fetch(url.toString(), {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`)
  }

  return res.json()
}

// ─── Type Definitions ─────────────────────────────────────────────────────────

export interface NewsArticle extends StrapiAttributes {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  featuredImage?: { url: string; alternativeText: string }
  author?: string
}

export interface Service extends StrapiAttributes {
  title: string
  slug: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  isHighlighted: boolean
}

export interface ExchangeRate extends StrapiAttributes {
  currency: string
  code: string
  buyRate: number
  sellRate: number
  date: string
}

export interface BranchInfo extends StrapiAttributes {
  name: string
  address: string
  city: string
  phone: string
  hours: string
  coordinates?: { lat: number; lng: number }
}

// ─── API Functions ────────────────────────────────────────────────────────────

export async function getNewsArticles(
  page = 1,
  pageSize = 9
): Promise<StrapiResponse<{ id: number; attributes: NewsArticle }[]>> {
  try {
    return await strapiGet<{ id: number; attributes: NewsArticle }[]>('news-articles', {
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
      'populate': 'featuredImage',
      'sort': 'publishedAt:desc',
    })
  } catch {
    // Return empty data when Strapi is not available
    return { data: [], meta: {} }
  }
}

export async function getNewsArticle(
  slug: string
): Promise<{ id: number; attributes: NewsArticle } | null> {
  try {
    const res = await strapiGet<{ id: number; attributes: NewsArticle }[]>('news-articles', {
      'filters[slug][$eq]': slug,
      'populate': 'featuredImage',
    })
    return res.data[0] ?? null
  } catch {
    return null
  }
}

export async function getServices(): Promise<{ id: number; attributes: Service }[]> {
  try {
    const res = await strapiGet<{ id: number; attributes: Service }[]>('services', {
      'sort': 'isHighlighted:desc,title:asc',
    })
    return res.data
  } catch {
    return []
  }
}

export async function getExchangeRates(): Promise<{ id: number; attributes: ExchangeRate }[]> {
  try {
    const res = await strapiGet<{ id: number; attributes: ExchangeRate }[]>('exchange-rates', {
      'sort': 'currency:asc',
    })
    return res.data
  } catch {
    return []
  }
}

export async function getBranches(): Promise<{ id: number; attributes: BranchInfo }[]> {
  try {
    const res = await strapiGet<{ id: number; attributes: BranchInfo }[]>('branches', {
      'sort': 'city:asc',
    })
    return res.data
  } catch {
    return []
  }
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    if (!res.ok) throw new Error('Submission failed')
    return { success: true, message: 'Your message has been sent successfully.' }
  } catch {
    return {
      success: false,
      message: 'Failed to send message. Please try again or call us directly.',
    }
  }
}

export { STRAPI_URL }
