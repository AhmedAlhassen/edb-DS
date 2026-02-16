import type { Meta, StoryObj } from '@storybook/react';
import * as UI from '@edb/ui';

const meta = { title: 'EDB/All Components' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => (
    <div className="grid gap-4">
      <UI.Button>Button</UI.Button>
      <UI.IconButton aria-label="icon">★</UI.IconButton>
      <UI.Link href="#">Link</UI.Link>
      <UI.Badge>Badge</UI.Badge>
      <UI.Divider />
      <UI.Spinner />
      <UI.Progress value={60} />
      <UI.Text>Text</UI.Text>
      <UI.Heading>Heading</UI.Heading>
      <UI.TextInput placeholder="Text input" />
      <UI.Textarea placeholder="Textarea" />
      <UI.Select options={[{label:'One',value:'1'}]} />
      <UI.Checkbox />
      <UI.RadioGroup defaultValue="a"><UI.RadioItem value="a" /></UI.RadioGroup>
      <UI.Switch />
      <UI.FormField label="Field"><UI.TextInput /></UI.FormField>
      <UI.SearchField />
      <UI.Breadcrumbs items={[{label:'Home'},{label:'Page'}]} />
      <UI.Pagination page={1} total={5} onPrev={() => undefined} onNext={() => undefined} />
      <UI.Card>Card</UI.Card>
      <UI.DataTable columns={[{key:'name',header:'Name'}]} data={[{name:'EDB'}]} />
      <UI.NotificationPanel items={[{id:'1',message:'Message'}]} />
    </div>
  ),
};
