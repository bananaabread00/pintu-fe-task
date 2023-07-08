import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import SortableTable from '../../components/SortableTable';
import {
  Crypto,
  PriceChangesRes,
  SupportedCurrenciesRes,
  TokenList,
  TokenPrice
} from '../../interfaces/market';
import { HeadCell } from '../../interfaces/sortableTable';
import getSupportedCurrencies from '../../services/getSupportedCurrencies';
import { ApiResponse } from '../../interfaces/api';
import getPriceChanges from '../../services/getPriceChanges';
import formatPrice from '../../shared/functions/formatPrice';
import PriceChange from './components/PriceChange';

const renderPricePercentage = (percentage: string) => {
  const numPercentage = Number(percentage);
  if (numPercentage < 0) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-red-600" />
        <span className="font-semibold text-red-600">{Math.abs(numPercentage)}%</span>
      </div>
    );
  } else if (numPercentage > 0) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-green-600" />
        <span className="font-semibold text-green-600">{Math.abs(numPercentage)}%</span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="font-semibold">{Math.abs(numPercentage)}%</span>
      </div>
    );
  }
};

const headCells: HeadCell<TokenList>[] = [
  {
    id: 'logo',
    label: '',
    render: (value: string) => (
      <div className="svg-container" style={{ color: 'red' }}>
        <img src={value} className="svg-image" />
      </div>
    )
  },
  {
    id: 'crypto',
    label: 'CRYPTO',
    render: (value: Crypto, row: TokenList) => (
      <div className="flex flex-col md:flex-row ">
        <div className="basis-3/4 font-bold"> {value.name} </div>
        <div className="text-slate-400">{value.symbol}</div>
      </div>
    )
  },
  {
    id: 'price',
    label: 'HARGA',
    sortable: true,
    render: (value: TokenPrice, row: TokenList) => {
      // todo: fix this
      return Number(value.prevPrice) < Number(value.currentPrice) ? (
        <PriceChange
          key={value.currentPrice}
          price={formatPrice(value.currentPrice)}
          initialColor={'green'}
        />
      ) : (
        <PriceChange
          key={value.currentPrice}
          price={formatPrice(value.currentPrice)}
          initialColor={'red'}
        />
      );
    }
  },
  {
    id: 'day',
    label: '24 JAM',
    sortable: true,
    render: (value: string) => renderPricePercentage(value)
  },
  {
    id: 'week',
    label: '1 MGG',
    sortable: true,
    render: (value: string) => renderPricePercentage(value)
  },
  {
    id: 'month',
    label: '1 BLN',
    sortable: true,
    render: (value: string) => renderPricePercentage(value)
  },
  {
    id: 'year',
    label: '1 THN',
    sortable: true,
    render: (value: string) => renderPricePercentage(value)
  }
];

function Market() {
  const [tokenList, setTokenList] = useState<TokenList[]>([]);
  const [refresh, setRefresh] = useState(Date.now());
  const prevPriceDataRef = useRef<PriceChangesRes[]>([]);

  const {
    data: getSupportedCurrenciesData,
    isLoading,
    isError: isErrorGetSupportedCurrencies,
    error: errorGetSupportedCurrencies
  } = useQuery<ApiResponse<SupportedCurrenciesRes[]>>(
    'supportedCurrencies',
    getSupportedCurrencies
  );

  const {
    data: getPriceChangesData,
    isError: isErrorGetPriceChanges,
    error: errorGetPriceChanges
  } = useQuery<ApiResponse<PriceChangesRes[]>>('priceChanges', getPriceChanges, {
    refetchInterval: 2000,
    onSuccess: () => setRefresh(Date.now())
  });

  const handleTokenData = useCallback(() => {
    const transformData = (
      supportedCurrencies: SupportedCurrenciesRes[],
      priceChanges: PriceChangesRes[]
    ): TokenList[] => {
      return (
        supportedCurrencies.map((currency) => {
          const priceInfo = priceChanges.find(
            (price) => price.pair.split('/')[0] === currency.currencyGroup.toLowerCase()
          );
          const prevPriceInfo = prevPriceDataRef.current.find(
            (price) => price.pair.split('/')[0] === currency.currencyGroup.toLowerCase()
          );
          if (priceInfo && priceInfo.day !== '0.00')
            return {
              logo: currency.logo,
              crypto: {
                name: currency.name,
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
    if (getSupportedCurrenciesData?.code === 'success' && getPriceChangesData?.code === 'success') {
      const transformedData = transformData(
        getSupportedCurrenciesData.payload,
        getPriceChangesData.payload
      );
      setTokenList(transformedData.filter((item) => item.crypto));
    }
  }, [getPriceChangesData, getSupportedCurrenciesData]);

  useEffect(() => {
    handleTokenData();
    prevPriceDataRef.current = getPriceChangesData?.payload || [];
  }, [getPriceChangesData, getSupportedCurrenciesData, handleTokenData, refresh]);

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
