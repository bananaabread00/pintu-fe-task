import type { Meta, StoryObj } from '@storybook/react';
import SortableTable from '../components/Table/SortableTable';

const meta: Meta<typeof SortableTable> = {
  title: 'Table/SortableTable',
  component: SortableTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
interface DessertList {
  name: string;
  calories: number;
  fat: number;
}

export default meta;
type Story = StoryObj<typeof SortableTable<DessertList>>;

export const Basic: Story = {
  args: {
    headCells: [
      {
        id: 'name',
        label: 'Dessert',
        // eslint-disable-next-line react/react-in-jsx-scope
        render: (value) => <strong>{value}</strong>
      },
      {
        id: 'calories',
        label: 'Calories',
        sortable: true
      },
      {
        id: 'fat',
        label: 'Fat (g)',
        sortable: true
      }
    ],
    tableData: [
      {
        name: 'Frozen yoghurt',
        calories: 100,
        fat: 80
      },
      {
        name: 'Ice cream',
        calories: 180,
        fat: 97
      },
      {
        name: 'Eclair',
        calories: 235,
        fat: 98
      }
    ]
  }
};
