import React from 'react';

import './styles.scss';

import Country from './Country';

const CountryList = ({ countryList }) => {
  return (
    <div className='country-list'>
      {
        countryList && countryList.map((country, i) => (
          <Country key={i} country={country} />
        ))
      }
    </div>
  );
};

export default CountryList;
