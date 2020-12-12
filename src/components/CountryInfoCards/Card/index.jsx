import React from 'react';

import { roundNumber, calculatePercentage } from '../../../common';

const Card = ({
  cardText,
  cardNumber,
  cardName,
  totalNumber,
  percentageDescription,
  smallText,
}) => {
  const last24Hours = cardText.includes('24h');

  const CardNumberWithSymbol = () => {
    const roundedNumber = roundNumber(cardNumber);

    if (cardText === 'population infected') return `${roundedNumber}%`;
    if (last24Hours) return `+${roundedNumber}`;

    return roundedNumber;
  };

  const cardPercentage =
    totalNumber && `${calculatePercentage(totalNumber, cardNumber)}%`;

  return (
    <div className='card'>
      {cardNumber >= 0 ? (
        <p className='country-card-number'>
          <CardNumberWithSymbol />
          {totalNumber && (
            <span
              className='percentage'
              title={
                percentageDescription && `${cardPercentage} of total cases`
              }
            >
              (
              <span className={`${cardName}-color`} style={{ margin: '0 2px' }}>
                {last24Hours && '+'} {cardPercentage}
              </span>
              )
            </span>
          )}
        </p>
      ) : (
        <p className='country-card-number'>no data</p>
      )}
      <span>{cardText}</span>
      {smallText && <small>{smallText}</small>}
    </div>
  );
};

export default Card;
