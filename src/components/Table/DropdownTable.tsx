import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DropdownTableProps, EnhancedDropdownTableProps } from '../../interfaces/table';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

function EnhancedTableHead<T>(props: EnhancedDropdownTableProps<T>) {
  const { headCells, dropdownList, onSelectionChange } = props;
  const [selection, setSelection] = useState<string>(dropdownList[0].key);

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
    onSelectionChange(event.target.value);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            align={headCell.align || 'left'}
            key={headCell.id as string}
            sx={{ py: 4, fontSize: '1rem' }}
          >
            {headCell.main ? (
              <span className="text-gray-600 text-center">{headCell.label}</span>
            ) : (
              <FormControl>
                <Select value={selection} displayEmpty size="small" onChange={handleChange}>
                  {dropdownList.map((item) => (
                    <MenuItem key={item.key} value={item.key}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function DropdownTable<T>(props: DropdownTableProps<T>) {
  const { headCells, tableData, dropdownList, onSelectionChange } = props;

  const defaultRender = (value: any) => <span>{value}</span>;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer sx={{ maxHeight: '85vh' }}>
          <Table stickyHeader aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              headCells={headCells}
              dropdownList={dropdownList}
              onSelectionChange={onSelectionChange}
            />
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  {headCells.map((column) => (
                    <TableCell
                      key={column.id as string}
                      sx={{ py: 3, fontSize: '1rem', width: column.width }}
                      align={column.align || 'left'}
                    >
                      {column.render
                        ? column.render(row[column.id], row)
                        : defaultRender(row[column.id])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default DropdownTable;
