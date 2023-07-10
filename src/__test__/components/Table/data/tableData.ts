import { HeadCell } from '../../../../interfaces/table';

interface DessertList {
  name: string;
  calories: number;
  fat: number;
}

export const headCells: HeadCell<DessertList>[] = [
  {
    id: 'name',
    label: 'Dessert'
  },
  {
    id: 'calories',
    label: 'Calories',
    sortable: true
  },
  {
    id: 'fat',
    label: 'Fat (g)',
    sortable: true,
    width: 250
  }
];

export const tableData = [
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
];
