'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md font-medium',
    'transition-all duration-normal',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        filled: [
          'bg-primary-700 text-white',
          'hover:bg-primary-800',
          'active:bg-primary-900 active:scale-[0.98]',
        ].join(' '),
        tonal: [
          'bg-primary-50 text-primary-700',
          'hover:bg-primary-100',
          'active:bg-primary-200',
        ].join(' '),
        outlined: [
          'border border-neutral-300 bg-transparent text-neutral-700',
          'hover:bg-primary-50 hover:border-primary-300',
          'active:bg-primary-100',
        ].join(' '),
        ghost: [
          'bg-transparent text-primary-700',
          'hover:bg-primary-50',
          'active:bg-primary-100',
        ].join(' '),
        destructive: [
          'bg-error text-white',
          'hover:bg-red-600',
          'active:bg-red-700',
        ].join(' '),
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        md: 'h-10 px-4 text-sm rounded-md',
        lg: 'h-12 px-6 text-base rounded-lg',
        icon: 'h-10 w-10 p-0 rounded-md',
        'icon-sm': 'h-8 w-8 p-0 rounded-md',
        'icon-lg': 'h-12 w-12 p-0 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={loading || disabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : leftIcon ? (
          <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
        ) : null}
        {children}
        {!loading && rightIcon ? (
          <span className="shrink-0" aria-hidden="true">{rightIcon}</span>
        ) : null}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
