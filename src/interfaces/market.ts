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
  logo: string;
  crypto: Crypto;
  price: TokenPrice;
  day: string;
  week: string;
  month: string;
  year: string;
}

export type Crypto = {
  name: string;
  symbol: string;
};

export type TokenPrice = {
  currentPrice: string;
  prevPrice: string;
};
