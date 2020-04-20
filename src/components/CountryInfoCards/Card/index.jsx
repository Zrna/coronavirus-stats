import React from 'react';

import {
  roundNumber,
  calculatePercentage
} from '../../../common';

const Card = ({ cardText, cardNumber, cardName, totalNumber, percentageDescription, smallText }) => {
  const last24Hours = cardText.includes('24h');

  return (
    <div className='card'>
      {cardNumber ?
        <p className='country-card-number'>
          {last24Hours ? '+' : null}{roundNumber(cardNumber)}
          {totalNumber ? 
            <span
              className='percentage'
              title={ percentageDescription ? `${calculatePercentage(totalNumber, cardNumber, 2)} of total cases` : null}
            >
              (
              <span className={`${cardName}-color`} style={{ margin: '0 2px' }}>
                {last24Hours ? '+' : null}
                {calculatePercentage(totalNumber, cardNumber, 2)}
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
