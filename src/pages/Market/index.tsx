import React from 'react';
import SortableTable from '../../components/SortableTable';
import useMarket from './useMarket';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Market() {
  const { headCells, tokenList } = useMarket();

  return (
    <div className="App">
      <div className="container max-w-screen-xl mx-auto my-10 lg:px-10 px-4">
        <h1 className="text-3xl font-bold text-black-500 my-8">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
        {tokenList.length ? (
          <SortableTable headCells={headCells} tableData={tokenList} />
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
