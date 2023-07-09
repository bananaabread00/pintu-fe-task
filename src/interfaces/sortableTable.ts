export interface HeadCell<T> {
  id: keyof T;
  label: string;
  align?: 'center' | 'right' | 'left' | 'inherit' | 'justify';
  render?: (value: any, row: T) => React.ReactElement;
  sortable?: boolean;
  width?: number;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps<T> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  order: Order;
  orderBy?: keyof T;
  headCells: HeadCell<T>[];
}

export interface SortableTableProps<T> {
  headCells: HeadCell<T>[];
  tableData: T[];
}
