import type { Meta, StoryObj } from '@storybook/react';
import DropdwonTable from '../components/Table/DropdownTable';

const meta: Meta<typeof DropdwonTable> = {
  title: 'Table/DropdownTable',
  component: DropdwonTable,
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
type Story = StoryObj<typeof DropdwonTable<DessertList>>;

export const Basic: Story = {
  args: {
    headCells: [
      {
        id: 'name',
        label: 'Dessert',
        // eslint-disable-next-line react/react-in-jsx-scope
        render: (value) => <strong>{value}</strong>,
        main: true
      },
      {
        id: 'calories',
        label: '',
        align: 'right'
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
    ],
    dropdownList: [
      { key: 'calories', label: 'Calories' },
      { key: 'fat', label: 'Fat (g)' }
    ],
    onSelectionChange: (value) => console.log('selection:', value)
  }
};
