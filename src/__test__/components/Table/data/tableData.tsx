import React from 'react';
import { HeadCell } from '../../../../interfaces/table';

interface DessertList {
  name: string;
  calories: number;
  fat: number;
}

export const sortableHeadCells: HeadCell<DessertList>[] = [
  {
    id: 'name',
    label: 'Dessert',
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
    sortable: true,
    width: 250
  }
];

export const dropdownHeadCells: HeadCell<DessertList>[] = [
  {
    id: 'name',
    label: 'Dessert',
    main: true
  },
  {
    id: 'calories',
    label: 'Calories'
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

export const dropdownList = [
  { key: 'calories', label: 'Calories' },
  { key: 'fat', label: 'Fat (g)' }
];
