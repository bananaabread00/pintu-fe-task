import React from 'react';

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

export default renderPricePercentage;
