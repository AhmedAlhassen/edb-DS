import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded-lg border bg-white transition-shadow duration-normal',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 shadow-sm',
        elevated: 'border-neutral-100 shadow-md',
        flat: 'border-neutral-200',
        ghost: 'border-transparent bg-transparent',
      },
      interactive: {
        true: 'cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]',
        false: '',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      interactive: false,
      padding: 'md',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, padding, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, interactive, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Card.displayName = 'Card'

// ─── Sub-components ──────────────────────────────────────────────────────────

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4 flex items-start justify-between', className)} {...props} />
)
CardHeader.displayName = 'CardHeader'

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-lg font-semibold text-neutral-900', className)} {...props} />
)
CardTitle.displayName = 'CardTitle'

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-neutral-500', className)} {...props} />
)
CardDescription.displayName = 'CardDescription'

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props} />
)
CardContent.displayName = 'CardContent'

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-4 flex items-center gap-3', className)} {...props} />
)
CardFooter.displayName = 'CardFooter'

// ─── Service Card ─────────────────────────────────────────────────────────────

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  className?: string
}

const ServiceCard = ({ icon, title, description, href, className }: ServiceCardProps) => {
  const content = (
    <div
      className={cn(
        'group flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm',
        'transition-all duration-normal',
        'hover:border-primary-300 hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-100">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-xl">
        {content}
      </a>
    )
  }

  return content
}
ServiceCard.displayName = 'ServiceCard'

// ─── Stat Card ────────────────────────────────────────────────────────────────

export interface StatCardProps {
  label: string
  value: string
  change?: string
  positive?: boolean
  icon?: React.ReactNode
  className?: string
}

const StatCard = ({ label, value, change, positive = true, icon, className }: StatCardProps) => (
  <div className={cn('rounded-xl border border-neutral-200 bg-white p-6 shadow-sm', className)}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-neutral-500">{label}</p>
        <p className="mt-1 text-3xl font-bold text-neutral-900">{value}</p>
        {change && (
          <p className={cn('mt-1 text-sm font-medium', positive ? 'text-green-600' : 'text-red-600')}>
            {positive ? '↑' : '↓'} {change}
          </p>
        )}
      </div>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
          {icon}
        </div>
      )}
    </div>
  </div>
)
StatCard.displayName = 'StatCard'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ServiceCard,
  StatCard,
  cardVariants,
}
