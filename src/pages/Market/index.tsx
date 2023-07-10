import React from 'react';
import SortableTable from '../../components/Table/SortableTable';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DropdownTable from '../../components/Table/DropdownTable';
import { tokenDropdownList } from './marketConstants';
import TopMoversCard from './components/TopMoversCard';
import useMarket from './useMarket';

function Market() {
  const { headCells, tokenList, topMovers, headCellsDropdown, handleSelectionChange } = useMarket();

  return (
    <div className="App">
      <div className="container max-w-screen-xl mx-auto my-10 lg:px-10 px-4">
        <h1 className="text-3xl font-bold text-black-500 my-8">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
        {tokenList.length ? (
          <>
            <strong className="text-lg">🔥 Top Movers (24 Jam)</strong>
            <div className="flex overflow-x-auto gap-4">
              {topMovers.map((item) => (
                <TopMoversCard
                  key={item.crypto.name}
                  price={item.price}
                  crypto={item.crypto}
                  day={item.day}
                  logo={item.logo}
                />
              ))}
            </div>
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
