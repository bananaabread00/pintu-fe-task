import React from 'react';
import { Crypto, TokenLogo as TokenLogoType } from '../../../interfaces/market';
import formatPrice from '../../../utils/formatPrice';
import renderPricePercentage from '../utils/renderPricePercentage';
import TokenLogo from './TokenLogo';

interface Props {
  crypto: Crypto;
  price: number;
  logo: TokenLogoType;
  day: number;
}

const TopMoversCard = (props: Props) => {
  const { crypto, price, logo, day } = props;

  return (
    <div className="flex flex-col gap-2 p-4 w-full">
      <div className="flex gap-2 items-center">
        <TokenLogo logoUrl={logo.url.replace(/^https?:\/\//, '')} color={logo.color} />
        <strong className="text-lg">{crypto.name}</strong>
      </div>
      <p className="text-slate-400 text-sm">{formatPrice(price)}</p>
      <p className="text-lg">{renderPricePercentage(day)}</p>
    </div>
  );
};

export default TopMoversCard;
