import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import * as MarketInterface from '../../interfaces/market';
import { HeadCell } from '../../interfaces/table';
import getSupportedCurrencies from '../../services/getSupportedCurrencies';
import { ApiResponse } from '../../interfaces/api';
import getPriceChanges from '../../services/getPriceChanges';
import formatPrice from '../../utils/formatPrice';
import PriceChange from './components/PriceChange';
import TokenLogo from './components/TokenLogo';

const renderPricePercentage = (percentage: string | number) => {
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

const mapPriceColor = (prevPrice: number, curPrice: number) => {
  const margin = curPrice - prevPrice;
  if (margin < 0) return 'red';
  else if (margin > 0) return 'green';
  else return 'black';
};

const headCells: HeadCell<MarketInterface.TokenList>[] = [
  {
    id: 'logo',
    label: '',
    render: (value: MarketInterface.TokenLogo) => (
      <TokenLogo logoUrl={value.url.replace(/^https?:\/\//, '')} color={value.color} />
    ),
    width: 60
  },
  {
    id: 'crypto',
    label: 'CRYPTO',
    render: (value: MarketInterface.Crypto) => (
      <div className="flex flex-col lg:flex-row ">
        <div className="basis-3/4 font-bold"> {value.name} </div>
        <div className="text-slate-400">{value.symbol}</div>
      </div>
    )
  },
  {
    id: 'price',
    label: 'HARGA',
    sortable: true,
    render: (value: number, row: MarketInterface.TokenList) => {
      return (
        <PriceChange
          key={row.crypto.name + '-' + value}
          price={formatPrice(value)}
          initialColor={mapPriceColor(Number(row.prevPrice), Number(value))}
        />
      );
    },
    width: 250
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

const useMarket = () => {
  const [tokenList, setTokenList] = useState<MarketInterface.TokenList[]>([]);
  const [refresh, setRefresh] = useState(Date.now());
  const [selection, setSelection] = useState<Partial<keyof MarketInterface.TokenList>>('day');
  const prevPriceDataRef = useRef<MarketInterface.PriceChangesRes[]>([]);

  const { data: getSupportedCurrenciesData } = useQuery<
    ApiResponse<MarketInterface.SupportedCurrenciesRes[]>
  >('supportedCurrencies', getSupportedCurrencies, {
    onError: (err) => console.error('error fetch getSupportedCurrencies', err)
  });

  const { data: getPriceChangesData } = useQuery<ApiResponse<MarketInterface.PriceChangesRes[]>>(
    'priceChanges',
    getPriceChanges,
    {
      refetchInterval: 2000,
      onSuccess: () => setRefresh(Date.now()),
      onError: (err) => console.error('error fetch getPriceChanges', err)
    }
  );

  const headCellsDropdown: HeadCell<MarketInterface.TokenList>[] = [
    {
      id: 'crypto',
      label: 'CRYPTO',
      render: (value: MarketInterface.Crypto, row: MarketInterface.TokenList) => (
        <div className="flex items-center gap-4">
          <TokenLogo logoUrl={row.logo.url.replace(/^https?:\/\//, '')} color={row.logo.color} />
          <div className="flex flex-col">
            <div className="basis-3/4 font-bold"> {value.name} </div>
            <div className="text-slate-400">{value.symbol}</div>
          </div>
        </div>
      ),
      main: true
    },
    {
      id: 'price',
      label: 'HARGA',
      sortable: true,
      align: 'right',
      render: (value: number, row: MarketInterface.TokenList) => {
        return (
          <div className="flex flex-col items-end">
            <PriceChange
              key={row.crypto.name + '-' + value}
              price={formatPrice(value)}
              initialColor={mapPriceColor(Number(row.prevPrice), Number(value))}
            />
            {renderPricePercentage(row[selection] as number)}
          </div>
        );
      }
    }
  ];

  const handleSelectionChange = (selection: keyof MarketInterface.TokenList) => {
    setSelection(selection);
  };

  const handleTokenData = useCallback(() => {
    const transformData = (
      supportedCurrencies: MarketInterface.SupportedCurrenciesRes[],
      priceChanges: MarketInterface.PriceChangesRes[]
    ): MarketInterface.TokenList[] => {
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
              logo: { url: currency.logo, color: currency.color },
              crypto: {
                name: currency.name,
                symbol: currency.currencySymbol
              },
              price: Number(priceInfo.latestPrice),
              prevPrice: Number(prevPriceInfo?.latestPrice),
              day: Number(priceInfo.day),
              week: Number(priceInfo.week),
              month: Number(priceInfo.month),
              year: Number(priceInfo.year)
            };
          else return {} as MarketInterface.TokenList;
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

  return {
    headCells,
    tokenList,
    headCellsDropdown,
    handleSelectionChange
  };
};

export default useMarket;
