import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Check, ChevronRight } from '@edb/icons';
import { cn } from '../utils/cn';

const inputBase = 'h-10 w-full rounded-md border border-[var(--edb-color-border)] bg-[var(--edb-color-bg)] px-3 text-sm';

export const TextInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cn(inputBase, className)} {...props} />);
TextInput.displayName = 'TextInput';
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => <textarea ref={ref} className={cn('min-h-20 py-2', inputBase, className)} {...props} />);
Textarea.displayName = 'Textarea';

export const Select = ({ options, placeholder = 'Select', ...props }: { options: { label: string; value: string }[]; placeholder?: string } & Omit<SelectPrimitive.SelectProps, 'children'>) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger className={cn(inputBase, 'justify-between inline-flex items-center')}>
      <SelectPrimitive.Value placeholder={placeholder} />
      <SelectPrimitive.Icon><ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} /></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="rounded-md border border-[var(--edb-color-border)] bg-[var(--edb-color-surface)] p-1 shadow-md">
        <SelectPrimitive.Viewport>
          {options.map((o) => <SelectPrimitive.Item key={o.value} value={o.value} className="relative flex cursor-default items-center rounded px-8 py-2 text-sm data-[highlighted]:bg-[var(--edb-color-border)]"><SelectPrimitive.ItemText>{o.label}</SelectPrimitive.ItemText><SelectPrimitive.ItemIndicator className="absolute left-2"><Check size={14} /></SelectPrimitive.ItemIndicator></SelectPrimitive.Item>)}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn('h-5 w-5 rounded border border-[var(--edb-color-border)] data-[state=checked]:bg-[var(--edb-color-primary)]', className)} {...props}><CheckboxPrimitive.Indicator className="text-white"><Check size={14} /></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>
));
Checkbox.displayName = 'Checkbox';

export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({ className, ...props }, ref) => <RadioGroupPrimitive.Item ref={ref} className={cn('h-5 w-5 rounded-full border border-[var(--edb-color-border)] data-[state=checked]:border-4 data-[state=checked]:border-[var(--edb-color-primary)]', className)} {...props} />);
RadioItem.displayName = 'RadioItem';

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => <SwitchPrimitive.Root ref={ref} className={cn('relative h-6 w-11 rounded-full bg-[var(--edb-color-border)] data-[state=checked]:bg-[var(--edb-color-primary)]', className)} {...props}><SwitchPrimitive.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition data-[state=checked]:translate-x-[22px]"/></SwitchPrimitive.Root>);
Switch.displayName = 'Switch';
