import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react'

const alertVariants = cva(
  'relative flex gap-3 rounded-lg border p-4 text-sm',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-amber-50 border-amber-200 text-amber-800',
        error: 'bg-red-50 border-red-200 text-red-800',
      },
    },
    defaultVariants: { variant: 'info' },
  }
)

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  onClose?: () => void
  icon?: React.ReactNode
}

const Alert = ({
  className,
  variant = 'info',
  title,
  children,
  onClose,
  icon,
  ...props
}: AlertProps) => {
  const Icon = icons[variant ?? 'info']

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <span className="mt-0.5 shrink-0" aria-hidden="true">
        {icon ?? <Icon className="h-4 w-4" />}
      </span>
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        {children && <div className="opacity-90">{children}</div>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 rounded p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
Alert.displayName = 'Alert'

export { Alert, alertVariants }
