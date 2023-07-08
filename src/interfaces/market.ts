export type SupportedCurrenciesRes = {
  color: string;
  currencyGroup: string;
  currencySymbol: string;
  decimal_point: number;
  listingDate: string;
  logo: string;
  name: string;
  wallets: CurrencyWallet[];
};

export type PriceChangesRes = {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

export type CurrencyWallet = {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
};

export interface TokenList {
  crypto: Crypto;
  price: TokenPrice;
  day: string;
  week: string;
  month: string;
  year: string;
}

export type Crypto = {
  logo: string;
  name: string;
  symbol: string;
};

export type TokenPrice = {
  currentPrice: string;
  prevPrice: string;
};

// export type
// {
//     "pair": "storj/idr",
//     "latestPrice": "5419",
//     "day": "-5.48",
//     "week": "25.50",
//     "month": "34.33",
//     "year": "-48.53"
// }
