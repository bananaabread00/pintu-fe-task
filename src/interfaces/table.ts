export interface HeadCell<T> {
  id: keyof T;
  label: string;
  main?: boolean;
  align?: 'center' | 'right' | 'left' | 'inherit' | 'justify';
  render?: (value: any, row: T) => React.ReactElement;
  sortable?: boolean;
  width?: number;
}

export type Order = 'asc' | 'desc';

export interface EnhancedSortableTableProps<T> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  order: Order;
  orderBy?: keyof T;
  headCells: HeadCell<T>[];
}

export interface EnhancedDropdownTableProps<T> {
  headCells: HeadCell<T>[];
  dropdownList: Record<string | number, string>[];
  onSelectionChange: (obj: any) => void;
}

export interface SortableTableProps<T> {
  headCells: HeadCell<T>[];
  tableData: T[];
}

export interface DropdownTableProps<T> {
  headCells: HeadCell<T>[];
  tableData: T[];
  dropdownList: Record<string | number, string>[];
  onSelectionChange: (obj: any) => void;
}
