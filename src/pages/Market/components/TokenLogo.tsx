import React from 'react';
import getSvgFile from '../../../services/getSvgFile';
import { useQuery } from 'react-query';

interface Props {
  logoUrl: string;
  color: string;
}

const TokenLogo = (props: Props) => {
  const { logoUrl, color } = props;
  const { data: getSvgFileData } = useQuery<string>(['url', logoUrl], () => getSvgFile(logoUrl));

  return (
    <div
      style={{ color: color }}
      className="w-8 h-8"
      dangerouslySetInnerHTML={{ __html: getSvgFileData?.toString() || '' }}
    />
  );
};

export default TokenLogo;
