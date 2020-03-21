import React from 'react';

import {
  roundNumber,
  calculatePercentage
} from '../../../common';

const CountryInfoCard = (props) => {
  return (
    <p className='country-card'>
      <span className='country-card-number'>
        {props.cardText.includes('24h') ? '+' : null}{roundNumber(props.cardNumber)}
        {props.totalNumber ? 
          <span className={`percentage ${props.cardName}-color`}>
            (
            {props.cardText.includes('24h') ? '+' : null}
            {calculatePercentage(props.totalNumber, props.cardNumber)}
            )
          </span>
          :
          null
        }
      </span>
      {props.cardText}
    </p>
  );
};

export default CountryInfoCard;
