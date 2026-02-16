import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Button, Heading } from './atoms';
import { Breadcrumbs } from './molecules';
import { useDirection } from '../providers/direction-provider';
import { cn } from '../utils/cn';

export const TopBar = ({ logo, actions }: { logo: React.ReactNode; actions?: React.ReactNode }) => <header className="flex items-center justify-between border-b border-[var(--edb-color-border)] p-3">{logo}<div className="flex items-center gap-2">{actions}</div></header>;

const drawerContent = 'fixed top-0 h-full w-[320px] bg-[var(--edb-color-surface)] p-4 shadow-lg';
export const NavDrawer = ({ open, onOpenChange, children }: React.PropsWithChildren<{ open: boolean; onOpenChange: (o: boolean) => void }>) => {
  const { dir } = useDirection();
  return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}><DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 bg-[var(--edb-color-overlay)]"/><DialogPrimitive.Content className={cn(drawerContent, dir === 'rtl' ? 'left-0' : 'right-0')}>{children}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
};

export const PageHeader = ({ title, breadcrumbs, actions }: { title: string; breadcrumbs?: { label: string; href?: string }[]; actions?: React.ReactNode }) => <div className="mb-4 grid gap-2"><div className="flex items-center justify-between"><Heading as="h1">{title}</Heading><div>{actions}</div></div>{breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}</div>;

export const Card = ({ interactive, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) => <div className={cn('edb-card', interactive && 'cursor-pointer transition hover:shadow-md', className)} {...props} />;

export const ModalDialog = ({ trigger, title, children }: React.PropsWithChildren<{ trigger: React.ReactNode; title: string }>) => <DialogPrimitive.Root><DialogPrimitive.Trigger asChild>{trigger as React.ReactElement}</DialogPrimitive.Trigger><DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 bg-[var(--edb-color-overlay)]"/><DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--edb-color-surface)] p-4"><DialogPrimitive.Title className="mb-2 font-medium">{title}</DialogPrimitive.Title>{children}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;

export const BottomSheet = ({ trigger, children }: React.PropsWithChildren<{ trigger: React.ReactNode }>) => <DialogPrimitive.Root><DialogPrimitive.Trigger asChild>{trigger as React.ReactElement}</DialogPrimitive.Trigger><DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 bg-[var(--edb-color-overlay)]"/><DialogPrimitive.Content className="fixed inset-x-0 bottom-0 rounded-t-2xl bg-[var(--edb-color-surface)] p-4">{children}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionTrigger = AccordionPrimitive.Trigger;
export const AccordionContent = AccordionPrimitive.Content;

export const DataTable = <T extends object>({ columns, data }: { columns: { key: keyof T; header: string }[]; data: T[] }) => <table className="w-full border-collapse text-sm"><thead><tr>{columns.map(c => <th key={String(c.key)} className="border-b border-[var(--edb-color-border)] px-2 py-2 text-start">{c.header}</th>)}</tr></thead><tbody>{data.map((row, idx) => <tr key={idx}>{columns.map(c => <td key={String(c.key)} className="border-b border-[var(--edb-color-border)] px-2 py-2">{String(row[c.key])}</td>)}</tr>)}</tbody></table>;

export const NotificationPanel = ({ title = 'Notifications', items }: { title?: string; items: { id: string; message: string }[] }) => <aside className="edb-card"><Heading as="h3" className="mb-2">{title}</Heading><ul className="grid gap-2">{items.map(i => <li key={i.id} className="rounded border border-[var(--edb-color-border)] p-2">{i.message}</li>)}</ul></aside>;

export const MultiSectionFormLayout = ({ sections }: { sections: { title: string; content: React.ReactNode }[] }) => <div className="grid gap-4">{sections.map(s => <Card key={s.title}><Heading as="h3" className="mb-2">{s.title}</Heading>{s.content}</Card>)}</div>;

export const ReviewSummary = ({ items, onSubmit }: { items: { label: string; value: string }[]; onSubmit: () => void }) => <Card><Heading as="h3" className="mb-3">Review summary</Heading><dl className="grid gap-2">{items.map(i => <div key={i.label} className="flex justify-between"><dt>{i.label}</dt><dd>{i.value}</dd></div>)}</dl><Button className="mt-4" onClick={onSubmit}>Submit</Button></Card>;
