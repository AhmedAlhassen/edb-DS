import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// ─── Heading ────────────────────────────────────────────────────────────────

const headingVariants = cva('font-semibold tracking-tight text-balance', {
  variants: {
    level: {
      display: 'text-5xl font-bold leading-tight md:text-6xl',
      h1: 'text-4xl font-bold leading-tight',
      h2: 'text-3xl leading-snug',
      h3: 'text-2xl leading-snug',
      h4: 'text-xl leading-snug',
      h5: 'text-lg leading-normal',
      h6: 'text-base leading-normal',
    },
    color: {
      default: 'text-neutral-900',
      muted: 'text-neutral-600',
      primary: 'text-primary-700',
      white: 'text-white',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    level: 'h2',
    color: 'default',
  },
})

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElement
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, as, children, ...props }, ref) => {
    const Tag = (as ?? (level === 'display' ? 'h1' : level) ?? 'h2') as HeadingElement
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, color }), className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)
Heading.displayName = 'Heading'

// ─── Text ────────────────────────────────────────────────────────────────────

const textVariants = cva('', {
  variants: {
    size: {
      lg: 'text-lg leading-relaxed',
      md: 'text-base leading-relaxed',
      sm: 'text-sm leading-normal',
      xs: 'text-xs leading-normal',
    },
    color: {
      default: 'text-neutral-700',
      muted: 'text-neutral-500',
      primary: 'text-primary-700',
      success: 'text-green-700',
      error: 'text-red-700',
      warning: 'text-amber-700',
      white: 'text-white',
      inherit: 'text-inherit',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    weight: 'regular',
  },
})

type TextElement = 'p' | 'span' | 'div' | 'label' | 'caption' | 'small' | 'strong'

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: TextElement
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, color, weight, as: Tag = 'p', children, ...props }, ref) => {
    return React.createElement(
      Tag,
      {
        ref,
        className: cn(textVariants({ size, color, weight }), className),
        ...props,
      },
      children
    )
  }
)
Text.displayName = 'Text'

// ─── Caption ─────────────────────────────────────────────────────────────────

const Caption = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn('text-xs text-neutral-500 leading-normal', className)} {...props} />
)
Caption.displayName = 'Caption'

// ─── Divider ─────────────────────────────────────────────────────────────────

const Divider = ({
  className,
  label,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { label?: string }) => (
  <div className={cn('relative', className)} {...props}>
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-neutral-200" />
    </div>
    {label && (
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-xs text-neutral-500">{label}</span>
      </div>
    )}
  </div>
)
Divider.displayName = 'Divider'

export { Heading, headingVariants, Text, textVariants, Caption, Divider }
