import React, { useEffect, useState } from 'react';

interface Props {
  price: string;
  initialColor: string;
}

const PriceChange = (props: Props) => {
  const { price, initialColor } = props;
  const [textColor, setTextColor] = useState(initialColor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextColor('black');
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [price, initialColor]);

  return (
    <span className={`text-${textColor}-600 transition-color duration-1000 font-bold`}>
      {price}
    </span>
  );
};

export default PriceChange;
