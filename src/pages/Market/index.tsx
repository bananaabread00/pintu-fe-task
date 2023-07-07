import React from 'react';
import SortableTable from '../../components/SortableTable';
import { SupportedCurrenciesData } from '../../interfaces/market';
import { HeadCell } from '../../interfaces/sortableTable';

const headCells: HeadCell<SupportedCurrenciesData>[] = [
  {
    id: 'name',
    label: 'Dessert (100g serving)',
    render: (row: SupportedCurrenciesData) => <strong> {row.name} </strong>
  },
  {
    id: 'calories',
    label: 'Calories',
    sortable: true
  },
  {
    id: 'fat',
    label: 'Fat (g)',
    sortable: true
  },
  {
    id: 'carbs',
    label: 'Carbs (g)'
  },
  {
    id: 'protein',
    label: 'Protein (g)'
  }
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): SupportedCurrenciesData {
  return {
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
];

function Market() {
  return (
    <div className="App">
      <div className="container mx-auto my-8 px-8">
        <h1 className="text-3xl font-bold text-black-500 my-8">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
        <SortableTable headCells={headCells} tableData={rows} />
      </div>
    </div>
  );
}

export default Market;
