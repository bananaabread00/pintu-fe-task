import React from 'react';
import { render, screen } from '@testing-library/react';
import SortableTable from '../../../components/Table/SortableTable';
import { headCells, tableData } from './data/tableData';

describe('SortableTable component test', () => {
  it('should render the table', () => {
    const { container } = render(<SortableTable headCells={headCells} tableData={tableData} />);
    expect(container).toMatchSnapshot();
  });
});
