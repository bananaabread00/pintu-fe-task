export const getSupportedCurrenciesData = {
  code: 'success',
  payload: [
    {
      currencyGroup: 'BTC',
      color: '#F78B1A',
      currencySymbol: 'BTC',
      name: 'Bitcoin',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
      decimal_point: 8,
      listingDate: '2020-09-15T09:43:45Z',
      wallets: [
        {
          currencyGroup: 'BTC',
          tokenSymbol: 'BTC',
          decimal_point: 8,
          tokenType: 'Bitcoin',
          blockchain: 'Bitcoin',
          explorer: 'https://explorer.bitcoin.com/btc/tx/',
          listingDate: '2020-09-15T09:43:45Z',
          blockchainName: 'Bitcoin',
          logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg'
        }
      ]
    },
    {
      currencyGroup: 'ETH',
      color: '#9011FE',
      currencySymbol: 'ETH',
      name: 'Ethereum',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg',
      decimal_point: 18,
      listingDate: '2020-09-15T09:43:46Z',
      wallets: [
        {
          currencyGroup: 'ETH',
          tokenSymbol: 'ETH',
          decimal_point: 18,
          tokenType: 'ERC-20',
          blockchain: 'Ethereum',
          explorer: 'https://etherscan.io/tx/',
          listingDate: '2020-09-15T09:43:46Z',
          blockchainName: 'Ethereum',
          logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg'
        }
      ]
    },
    {
      currencyGroup: 'USDT',
      color: '#15A57C',
      currencySymbol: 'USDT',
      name: 'Tether',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_USDT.svg',
      decimal_point: 6,
      listingDate: '2020-09-15T09:43:47Z',
      wallets: [
        {
          currencyGroup: 'USDT',
          tokenSymbol: 'USDT',
          decimal_point: 6,
          tokenType: 'ERC-20',
          blockchain: 'Ethereum',
          explorer: 'https://etherscan.io/tx/',
          listingDate: '2020-09-15T09:43:47Z',
          blockchainName: 'Ethereum',
          logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg'
        }
      ]
    },
    {
      currencyGroup: 'BNB',
      color: '#FEBF11',
      currencySymbol: 'BNB',
      name: 'Binance Coin',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BNB.svg',
      decimal_point: 8,
      listingDate: '2020-09-15T09:43:48Z',
      wallets: [
        {
          currencyGroup: 'BNB',
          tokenSymbol: 'BNB',
          decimal_point: 8,
          tokenType: 'BEP-2',
          blockchain: 'Binance',
          explorer: 'https://explorer.binance.org/tx/',
          listingDate: '2020-09-15T09:43:48Z',
          blockchainName: 'BNB Beacon Chain',
          logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-2.svg'
        }
      ]
    }
  ],
  message: ''
};

export const getPriceChangesData = {
  code: 'success',
  payload: [
    {
      pair: 'btc/idr',
      latestPrice: '10268',
      day: '-4.84',
      week: '-7.39',
      month: '-7.64',
      year: '-24.52'
    },
    {
      pair: 'eth/idr',
      latestPrice: '21904',
      day: '-0.89',
      week: '-8.15',
      month: '-5.24',
      year: '-54.20'
    },
    {
      pair: 'usdt/idr',
      latestPrice: '28825405',
      day: '0.09',
      week: '1.32',
      month: '0.95',
      year: '11.00'
    },
    {
      pair: 'bnb/idr',
      latestPrice: '104711228',
      day: '-3.15',
      week: '-4.57',
      month: '18.85',
      year: '7.83'
    }
  ],
  message: ''
};
