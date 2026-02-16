import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const buttonVariants = cva('inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition disabled:opacity-50 focus-visible:outline-none', {
  variants: {
    variant: {
      filled: 'bg-[var(--edb-color-primary)] text-white hover:brightness-110',
      tonal: 'bg-[color-mix(in_srbg,var(--edb-color-primary),transparent_75%)] text-[var(--edb-color-primary)]',
      outlined: 'border border-[var(--edb-color-border)] bg-transparent',
      text: 'bg-transparent',
    },
    size: {
      sm: 'h-8 px-3',
      md: 'h-10 px-4',
      lg: 'h-12 px-5',
      icon: 'h-10 w-10 p-0',
    },
  },
  defaultVariants: { variant: 'filled', size: 'md' },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { loading?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, loading, children, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} disabled={loading || props.disabled} {...props}>
    {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden /> : null}
    {children}
  </button>
));
Button.displayName = 'Button';

export const IconButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>((props, ref) => <Button ref={ref} size="icon" {...props} />);
IconButton.displayName = 'IconButton';

export const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(({ className, ...props }, ref) => (
  <a ref={ref} className={cn('text-[var(--edb-color-link)] underline-offset-2 hover:underline', className)} {...props} />
));
Link.displayName = 'Link';

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span className={cn('inline-flex rounded-full bg-[var(--edb-color-surface)] px-2 py-1 text-xs border border-[var(--edb-color-border)]', className)} {...props} />;
export const Divider = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => <hr className={cn('border-[var(--edb-color-border)]', className)} {...props} />;
export const Spinner = ({ className }: { className?: string }) => <span className={cn('inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent', className)} aria-label="loading" />;

export const Progress = ({ value = 0 }: { value?: number }) => <div className="h-2 w-full rounded bg-[var(--edb-color-border)]"><div className="h-full rounded bg-[var(--edb-color-primary)]" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} /></div>;

export const CircularProgress = ({ value = 0 }: { value?: number }) => <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} className="relative h-10 w-10 rounded-full border-4 border-[var(--edb-color-border)]"><div className="absolute inset-0 rounded-full border-4 border-[var(--edb-color-primary)] [clip-path:inset(0_0_50%_0)]" style={{ transform: `rotate(${(value / 100) * 360}deg)` }} /></div>;

export const Text = ({ as: Comp = 'p', className, ...props }: React.HTMLAttributes<HTMLElement> & { as?: 'p' | 'span' | 'div'; size?: 'sm' | 'md' | 'lg' }) => <Comp className={cn('text-sm', className)} {...props} />;
export const Heading = ({ as: Comp = 'h2', className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' }) => <Comp className={cn('font-semibold tracking-tight', className)} {...props} />;
