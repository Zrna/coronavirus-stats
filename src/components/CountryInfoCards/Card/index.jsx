import React from 'react';

import {
  roundNumber,
  calculatePercentage
} from '../../../common';

const Card = ({ cardText, cardNumber, cardName, totalNumber, percentageDescription, smallText }) => {
  const last24Hours = cardText.includes('24h');

  const CardNumberWithSymbol = () => {
    if (cardText === 'population infected') return `${roundNumber(cardNumber)}%`; // '%' at the end of the string
    if (last24Hours) return `+${roundNumber(cardNumber)}`; // '+' at the beginning of the string

    return roundNumber(cardNumber);
  };

  return (
    <div className='card'>
      {cardNumber >= 0 ?
        <p className='country-card-number'>
          <CardNumberWithSymbol />
          {totalNumber ? 
            <span
              className='percentage'
              title={ percentageDescription ? `${calculatePercentage(totalNumber, cardNumber)}% of total cases` : null}
            >
              (
              <span className={`${cardName}-color`} style={{ margin: '0 2px' }}>
                {last24Hours ? '+' : null}
                {calculatePercentage(totalNumber, cardNumber)}%
              </span>
              )
            </span>
            :
            null
          }
        </p>
        :
        <p className='country-card-number'>no data</p>
      }
      <span>{cardText}</span>
      {smallText ? 
        <>
          <br />
          <small>{smallText}</small>
        </>
        :
        null
      }
    </div>
  );
};

export default Card;
