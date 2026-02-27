import Link from 'next/link'
import { MainLayout } from '@/components/templates/MainLayout'
import { Button, Heading, Text } from '@/components/atoms'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="edb-section flex flex-col items-center justify-center text-center">
        <div className="mx-auto max-w-md">
          <p className="mb-2 text-8xl font-bold text-primary-600">404</p>
          <Heading level="h1" className="mb-4">Page Not Found</Heading>
          <Text size="lg" color="muted" className="mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Text>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="filled" asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outlined" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
