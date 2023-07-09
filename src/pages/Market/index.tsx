import React from 'react';
import SortableTable from '../../components/Table/SortableTable';
import useMarket from './useMarket';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DropdownTable from '../../components/Table/DropdownTable';
import { tokenDropdownList } from './marketConstants';

function Market() {
  const { headCells, tokenList, headCellsDropdown, handleSelectionChange } = useMarket();

  return (
    <div className="App">
      <div className="container max-w-screen-xl mx-auto my-10 lg:px-10 px-4">
        <h1 className="text-3xl font-bold text-black-500 my-8">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
        {tokenList.length ? (
          <>
            <div className="hidden md:block">
              <SortableTable headCells={headCells} tableData={tokenList} />
            </div>
            <div className="md:hidden">
              <DropdownTable
                headCells={headCellsDropdown}
                tableData={tokenList}
                dropdownList={tokenDropdownList}
                onSelectionChange={handleSelectionChange}
              />
            </div>
          </>
        ) : (
          <Box height="80vh" className="flex flex-col items-center justify-center">
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
}

export default Market;
