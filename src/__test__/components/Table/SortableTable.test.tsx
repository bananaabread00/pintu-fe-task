import React from 'react';
import { render, screen } from '@testing-library/react';
import SortableTable from '../../../components/Table/SortableTable';
import { sortableHeadCells, tableData } from './data/tableData';
import userEvent from '@testing-library/user-event';

describe('SortableTable component test', () => {
  it('should render the table', async () => {
    const { container } = render(
      <SortableTable headCells={sortableHeadCells} tableData={tableData} />
    );
    expect(await screen.findByText('Fat (g)')).toBeInTheDocument();
    expect(container.getElementsByClassName('MuiTableRow-root').length).toBe(4);
    expect(container).toMatchSnapshot();
  });
  it('should sort the table data', async () => {
    const { container, getAllByRole } = render(
      <SortableTable headCells={sortableHeadCells} tableData={tableData} />
    );
    const [sortButton] = getAllByRole('button');
    await userEvent.click(sortButton);
    await userEvent.click(sortButton);
    expect(container.getElementsByClassName('MuiTableRow-root').length).toBe(4);
    expect(container).toMatchSnapshot();
  });
});
