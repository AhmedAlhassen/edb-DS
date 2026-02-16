import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as ToastPrimitive from '@radix-ui/react-toast';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, DirectionalIcon } from '@edb/icons';
import { Button, TextInput } from './atoms';
import { useDirection } from '../providers/direction-provider';
import { cn } from '../utils/cn';

export const FormField = ({ label, hint, error, required, children }: React.PropsWithChildren<{ label: string; hint?: string; error?: string; required?: boolean }>) => <label className="grid gap-1 text-sm"><span>{label} {required ? '*' : null}</span>{children}{error ? <span className="text-[var(--edb-color-error)]">{error}</span> : hint ? <span className="text-xs opacity-80">{hint}</span> : null}</label>;
export const InputGroup = ({ prefix, suffix, children }: React.PropsWithChildren<{ prefix?: React.ReactNode; suffix?: React.ReactNode }>) => <div className="flex items-center gap-2 rounded-md border border-[var(--edb-color-border)] px-2">{prefix}{children}{suffix}</div>;
export const SearchField = (props: React.InputHTMLAttributes<HTMLInputElement>) => <InputGroup prefix={'🔍'}><TextInput type="search" className="border-none px-0" placeholder="Search" {...props} /></InputGroup>;

export const Breadcrumbs = ({ items }: { items: { label: string; href?: string }[] }) => {
  const { dir } = useDirection();
  return <nav aria-label="Breadcrumb"><ol className="flex items-center gap-2 text-sm">{items.map((item, idx) => <li key={item.label} className="flex items-center gap-2">{idx > 0 ? <DirectionalIcon dir={dir}>{<ChevronRight />}</DirectionalIcon> : null}{item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}</li>)}</ol></nav>;
};

export const Pagination = ({ page, total, onPrev, onNext }: { page: number; total: number; onPrev: () => void; onNext: () => void }) => {
  const { dir } = useDirection();
  return <div className="flex items-center gap-2"><Button variant="outlined" onClick={onPrev} aria-label="Previous page"><DirectionalIcon dir={dir}>{<ArrowLeft />}</DirectionalIcon></Button><span>{page}/{total}</span><Button variant="outlined" onClick={onNext} aria-label="Next page"><DirectionalIcon dir={dir}>{<ArrowRight />}</DirectionalIcon></Button></div>;
};

export const Tabs = TabsPrimitive.Root;
export const TabsList = TabsPrimitive.List;
export const TabsTrigger = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => <TabsPrimitive.Trigger className={cn('rounded-md px-3 py-2 text-sm data-[state=active]:bg-[var(--edb-color-primary)] data-[state=active]:text-white', className)} {...props} />;
export const TabsContent = TabsPrimitive.Content;
export const SegmentedControl = Tabs;

const ToastCtx = React.createContext<{ push: (title: string, description?: string) => void } | undefined>(undefined);
export const ToastProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState<{ title: string; description?: string }>({ title: '' });
  const push = (title: string, description?: string) => { setMessage({ title, description }); setOpen(true); };
  return <ToastCtx.Provider value={{ push }}><ToastPrimitive.Provider swipeDirection="right">{children}<ToastPrimitive.Root open={open} onOpenChange={setOpen} className="fixed bottom-4 right-4 rounded-md border border-[var(--edb-color-border)] bg-[var(--edb-color-surface)] p-4"><ToastPrimitive.Title>{message.title}</ToastPrimitive.Title><ToastPrimitive.Description>{message.description}</ToastPrimitive.Description></ToastPrimitive.Root><ToastPrimitive.Viewport /></ToastPrimitive.Provider></ToastCtx.Provider>;
};
export const useToast = () => { const ctx = React.useContext(ToastCtx); if (!ctx) throw new Error('useToast within ToastProvider'); return ctx; };

export const Tooltip = ({ content, children }: { content: React.ReactNode; children: React.ReactNode }) => <TooltipPrimitive.Provider><TooltipPrimitive.Root><TooltipPrimitive.Trigger asChild>{children as React.ReactElement}</TooltipPrimitive.Trigger><TooltipPrimitive.Content className="rounded bg-[var(--edb-color-text)] px-2 py-1 text-xs text-[var(--edb-color-bg)]">{content}</TooltipPrimitive.Content></TooltipPrimitive.Root></TooltipPrimitive.Provider>;

export const DropdownMenu = ({ trigger, items }: { trigger: React.ReactNode; items: { label: string; onSelect: () => void }[] }) => <DropdownMenuPrimitive.Root><DropdownMenuPrimitive.Trigger asChild>{trigger as React.ReactElement}</DropdownMenuPrimitive.Trigger><DropdownMenuPrimitive.Portal><DropdownMenuPrimitive.Content className="rounded-md border border-[var(--edb-color-border)] bg-[var(--edb-color-surface)] p-1">{items.map(i => <DropdownMenuPrimitive.Item key={i.label} onSelect={i.onSelect} className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-[var(--edb-color-border)]">{i.label}</DropdownMenuPrimitive.Item>)}</DropdownMenuPrimitive.Content></DropdownMenuPrimitive.Portal></DropdownMenuPrimitive.Root>;

export const OTPInput = ({ length = 6, value, onChange }: { length?: number; value: string; onChange: (v: string) => void }) => <div className="flex gap-2">{Array.from({ length }).map((_, i) => <input key={i} inputMode="numeric" maxLength={1} value={value[i] ?? ''} onChange={(e) => { const chars = value.split(''); chars[i] = e.target.value; onChange(chars.join('').slice(0, length)); }} className="h-10 w-10 rounded border border-[var(--edb-color-border)] text-center" />)}</div>;
