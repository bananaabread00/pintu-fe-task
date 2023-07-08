import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import SortableTable from '../../components/SortableTable';
import { PriceChangesRes, SupportedCurrenciesRes, TokenList } from '../../interfaces/market';
import { HeadCell } from '../../interfaces/sortableTable';
import getSupportedCurrencies from '../../services/getSupportedCurrencies';
import { ApiResponse } from '../../interfaces/api';
import getPriceChanges from '../../services/getPriceChanges';

const headCells: HeadCell<TokenList>[] = [
  {
    id: 'crypto',
    label: 'Crypto',
    render: (row: TokenList) => <strong> {row.crypto?.name} </strong>
  },
  {
    id: 'price',
    label: 'Harga',
    sortable: true,
    render: (row: TokenList) => {
      return row.price.prevPrice <= row.price.currentPrice ? (
        <strong> {row.price?.currentPrice} </strong>
      ) : (
        <i>{row.price.currentPrice}</i>
      );
    }
  },
  {
    id: 'day',
    label: '24 JAM',
    sortable: true
  },
  {
    id: 'week',
    label: '1 MGG',
    sortable: true
  },
  {
    id: 'month',
    label: '1 BLN',
    sortable: true
  },
  {
    id: 'year',
    label: '1 THN',
    sortable: true
  }
];

function Market() {
  const [tokenList, setTokenList] = useState<TokenList[]>([]);
  const [prevPriceData, setPrevPriceData] = useState<PriceChangesRes[]>([]);
  const {
    data: getSupportedCurrenciesData,
    isLoading,
    isSuccess: isSuccessSupportedCurrenciesData,
    isError: isErrorGetSupportedCurrencies,
    error: errorGetSupportedCurrencies
  } = useQuery<ApiResponse<SupportedCurrenciesRes[]>>(
    'supportedCurrencies',
    getSupportedCurrencies
  );

  const {
    data: getPriceChangesData,
    isSuccess: isSuccessPriceChangesData,
    isError: isErrorGetPriceChanges,
    error: errorGetPriceChanges
  } = useQuery<ApiResponse<PriceChangesRes[]>>('priceChanges', getPriceChanges, {
    refetchInterval: 2000,
    onSuccess: () => handleTokenData()
  });

  const handleTokenData = () => {
    if (getSupportedCurrenciesData?.code === 'success' && getPriceChangesData?.code === 'success') {
      const transformedData = transformData(
        getSupportedCurrenciesData.payload,
        getPriceChangesData.payload
      );
      setTokenList(transformedData.filter((item) => item.crypto));
      setPrevPriceData(getPriceChangesData.payload);
    }
  };

  const transformData = (
    supportedCurrencies: SupportedCurrenciesRes[],
    priceChanges: PriceChangesRes[]
    // prevPriceData: PriceChangesRes[]
  ): TokenList[] => {
    return (
      supportedCurrencies.map((currency) => {
        const priceInfo = priceChanges.find(
          (price) => price.pair.split('/')[0] === currency.currencyGroup.toLowerCase()
        );
        const prevPriceInfo = prevPriceData.find(
          (price) => price.pair.split('/')[0] === currency.currencyGroup.toLowerCase()
        );
        if (priceInfo)
          return {
            crypto: {
              name: currency.name,
              logo: currency.logo,
              symbol: currency.currencySymbol
            },
            price: {
              currentPrice: priceInfo.latestPrice,
              prevPrice: prevPriceInfo?.latestPrice || ''
            },
            day: priceInfo.day,
            week: priceInfo.week,
            month: priceInfo.month,
            year: priceInfo.year
          };
        else return {} as TokenList;
      }) || []
    );
  };

  // const arraysAreEqual = (arrayA, arrayB) => {
  //   if (arrayA.length !== arrayB.length) {
  //     return false;
  //   }

  //   for (let i = 0; i < arrayA.length; i++) {
  //     if (arrayA[i] !== arrayB[i]) {
  //       return false;
  //     }
  //   }

  // useEffect(() => {
  //   console.log('heyoo123');
  //   if (getSupportedCurrenciesData?.code === 'success' && getPriceChangesData?.code === 'success') {
  //     const transformedData = transformData(
  //       getSupportedCurrenciesData.payload,
  //       getPriceChangesData.payload
  //     );
  //     console.log('heyoo', transformedData);
  //     setTokenList(transformedData.filter((item) => item.crypto));
  //   }
  // }, [getPriceChangesData, isSuccessSupportedCurrenciesData]);

  return (
    <div className="App">
      <div className="container mx-auto my-8 px-8">
        <h1 className="text-3xl font-bold text-black-500 my-8">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
        <SortableTable headCells={headCells} tableData={tokenList} />
      </div>
    </div>
  );
}

export default Market;
