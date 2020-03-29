import React from 'react';

import {
  roundNumber,
  calculatePercentage
} from '../../../common';


const CountryInfoCard = (props) => {
  const last24Hours = props.cardText.includes('24h');

  return (
    <div className='card'>
      {props.cardNumber !== undefined ?
        <p className='country-card-number'>
          {last24Hours ? '+' : null}{roundNumber(props.cardNumber)}
          {props.totalNumber ? 
            <span
              className='percentage'
              title={ props.percentageDescription ? `${calculatePercentage(props.totalNumber, props.cardNumber)} of total cases` : null}
            >
              (
              <span className={`${props.cardName}-color`} style={{ margin: '0 2px' }}>
                {last24Hours ? '+' : null}
                {calculatePercentage(props.totalNumber, props.cardNumber)}
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
      {props.cardText}
    </div>
  );
};

export default CountryInfoCard;
