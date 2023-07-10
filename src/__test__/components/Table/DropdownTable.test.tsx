import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DropdownTable from '../../../components/Table/DropdownTable';
import { dropdownList, dropdownHeadCells, tableData } from './data/tableData';
import userEvent from '@testing-library/user-event';

describe('SortableTable component test', () => {
  it('should render the table', async () => {
    const { container } = render(
      <DropdownTable
        headCells={dropdownHeadCells}
        tableData={tableData}
        dropdownList={dropdownList}
        onSelectionChange={() => null}
      />
    );
    expect(await screen.findByText('Calories')).toBeInTheDocument();
    expect(container.getElementsByClassName('MuiTableRow-root').length).toBe(4);
    expect(container).toMatchSnapshot();
  });
  it('should sort the table data', async () => {
    const logSpy = jest.spyOn(console, 'log');
    const { container, getAllByRole } = render(
      <DropdownTable
        headCells={dropdownHeadCells}
        tableData={tableData}
        dropdownList={dropdownList}
        onSelectionChange={(value) => console.log('selected value:', value)}
      />
    );
    const [dropdown] = getAllByRole('button');
    await userEvent.click(dropdown);
    const [, option2] = getAllByRole('option');
    await userEvent.click(option2);
    expect(await screen.findByText('Fat (g)')).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalledWith('selected value:', 'fat');

    expect(container).toMatchSnapshot();
  });
});
