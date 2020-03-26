import React from 'react';

import {
  roundNumber,
  calculatePercentage
} from '../../../common';


const CountryInfoCard = (props) => {
  const last24Hours = props.cardText.includes('24h');

  return (
    <p className='country-card'>
      {props.cardNumber !== undefined ?
        <span className='country-card-number'>
          {last24Hours ? '+' : null}{roundNumber(props.cardNumber)}
          {props.totalNumber ? 
            <span className='percentage'>
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
        </span>
        :
        <span className='country-card-number'>no data</span>
      }
      {props.cardText}
    </p>
  );
};

export default CountryInfoCard;
