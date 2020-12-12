import React from 'react';

import './styles.scss';

const CountryInfoHeader = ({ countryCode, countryName }) => {
  return (
    <div className='country-info-header'>
      {countryCode && (
        <img
          src={`https://www.countryflags.io/${countryCode}/flat/32.png`}
          alt={countryCode}
        />
      )}
      <h1>{countryName}</h1>
    </div>
  );
};

export default CountryInfoHeader;
