import * as React from 'react'
import { cn } from '@/lib/utils'

// ─── Input ───────────────────────────────────────────────────────────────────

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  wrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftAddon, rightAddon, wrapperClassName, id, ...props }, ref) => {
    const inputId = id ?? React.useId()
    const errorId = `${inputId}-error`
    const hintId = `${inputId}-hint`

    return (
      <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && (
              <span className="ms-0.5 text-error" aria-hidden="true">*</span>
            )}
          </label>
        )}

        <div className="relative flex items-center">
          {leftAddon && (
            <div className="pointer-events-none absolute start-3 flex items-center text-neutral-400">
              {leftAddon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-md border bg-white px-3 py-2.5 text-sm text-neutral-900',
              'placeholder:text-neutral-400',
              'transition-colors duration-fast',
              'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50',
              error
                ? 'border-error bg-red-50/30 focus:ring-error focus:border-error'
                : 'border-neutral-300 hover:border-neutral-400',
              leftAddon && 'ps-10',
              rightAddon && 'pe-10',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={
              [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined
            }
            {...props}
          />

          {rightAddon && (
            <div className="absolute end-3 flex items-center text-neutral-400">
              {rightAddon}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="flex items-center gap-1 text-xs text-error">
            <span aria-hidden="true">⚠</span>
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// ─── Textarea ────────────────────────────────────────────────────────────────

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  wrapperClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, wrapperClassName, id, ...props }, ref) => {
    const textareaId = id ?? React.useId()
    const errorId = `${textareaId}-error`
    const hintId = `${textareaId}-hint`

    return (
      <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && (
              <span className="ms-0.5 text-error" aria-hidden="true">*</span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full resize-y rounded-md border bg-white px-3 py-2.5 text-sm text-neutral-900',
            'placeholder:text-neutral-400',
            'transition-colors duration-fast',
            'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50',
            error
              ? 'border-error bg-red-50/30'
              : 'border-neutral-300 hover:border-neutral-400',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={
            [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined
          }
          {...props}
        />

        {error && (
          <p id={errorId} className="flex items-center gap-1 text-xs text-error">
            <span aria-hidden="true">⚠</span>
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Input, Textarea }
