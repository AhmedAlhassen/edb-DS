import type { Meta, StoryObj } from '@storybook/react';
import {
  Button, TextInput, FormField, SearchField, Breadcrumbs, Pagination, Tabs, TabsList, TabsTrigger, TabsContent,
  Card, ModalDialog, Tooltip, DropdownMenu, OTPInput, ThemeToggle
} from '@edb/ui';

const meta = { title: 'EDB/Overview' } satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => <div className="grid gap-4"><Button>Filled</Button><Button variant="outlined">Outlined</Button><ThemeToggle /></div>,
};

export const FormsStateMatrix: Story = {
  render: () => <div className="grid gap-4 max-w-sm"><FormField label="Name" hint="Enter full name"><TextInput /></FormField><FormField label="Email" error="Invalid email"><TextInput aria-invalid /></FormField><SearchField /></div>,
};

export const NavigationRTL: Story = {
  render: () => <div className="grid gap-4"><Breadcrumbs items={[{ label: 'Home' }, { label: 'Dashboard' }]} /><Pagination page={1} total={9} onPrev={() => undefined} onNext={() => undefined} /></div>,
};

export const Overlays: Story = {
  render: () => <div className="flex gap-3"><ModalDialog title="Confirm" trigger={<Button>Open</Button>}>Body</ModalDialog><Tooltip content="Info"><Button variant="outlined">Hover</Button></Tooltip><DropdownMenu trigger={<Button variant="outlined">Actions</Button>} items={[{ label: 'Edit', onSelect: () => undefined }]} /></div>,
};

export const Composition: Story = {
  render: () => <Card><Tabs defaultValue="one"><TabsList><TabsTrigger value="one">One</TabsTrigger><TabsTrigger value="two">Two</TabsTrigger></TabsList><TabsContent value="one">Panel 1</TabsContent><TabsContent value="two">Panel 2</TabsContent></Tabs><OTPInput value="123" onChange={() => undefined} /></Card>,
};
