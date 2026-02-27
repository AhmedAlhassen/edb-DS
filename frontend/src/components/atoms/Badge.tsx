import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
        primary: 'bg-primary-50 text-primary-700 border border-primary-200',
        success: 'bg-green-50 text-green-700 border border-green-200',
        warning: 'bg-amber-50 text-amber-700 border border-amber-200',
        error: 'bg-red-50 text-red-700 border border-red-200',
        outline: 'border border-current bg-transparent',
        filled: 'bg-primary-700 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

const Badge = ({ className, variant, dot, children, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props}>
    {dot && (
      <span
        className={cn('h-1.5 w-1.5 rounded-full', {
          'bg-neutral-500': variant === 'default',
          'bg-primary-600': variant === 'primary',
          'bg-green-600': variant === 'success',
          'bg-amber-600': variant === 'warning',
          'bg-red-600': variant === 'error',
          'bg-current': variant === 'outline',
          'bg-white': variant === 'filled',
        })}
        aria-hidden="true"
      />
    )}
    {children}
  </span>
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
