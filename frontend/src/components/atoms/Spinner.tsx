import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6 border-[3px]',
        lg: 'h-8 w-8 border-[3px]',
        xl: 'h-12 w-12 border-4',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = ({ className, size, label = 'Loading…', ...props }: SpinnerProps) => (
  <span role="status" className="inline-flex items-center gap-2" {...props}>
    <span className={cn(spinnerVariants({ size }), className)} aria-hidden="true" />
    <span className="sr-only">{label}</span>
  </span>
)

Spinner.displayName = 'Spinner'

// ─── Progress Bar ─────────────────────────────────────────────────────────────

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  color?: 'primary' | 'success' | 'warning' | 'error'
}

const Progress = ({
  className,
  value,
  max = 100,
  label,
  showValue,
  color = 'primary',
  ...props
}: ProgressProps) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const colorClasses = {
    primary: 'bg-primary-700',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      {(label || showValue) && (
        <div className="mb-1 flex items-center justify-between">
          {label && <span className="text-xs text-neutral-600">{label}</span>}
          {showValue && <span className="text-xs font-medium text-neutral-700">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className={cn('h-full rounded-full transition-all duration-slow ease-out', colorClasses[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

Progress.displayName = 'Progress'

// ─── Skeleton ─────────────────────────────────────────────────────────────────

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('animate-pulse rounded bg-neutral-200', className)}
    aria-hidden="true"
    {...props}
  />
)
Skeleton.displayName = 'Skeleton'

export { Spinner, Progress, Skeleton, spinnerVariants }
