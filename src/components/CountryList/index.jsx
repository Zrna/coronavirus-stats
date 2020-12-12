import React from 'react';

import Country from './Country';
import './styles.scss';

const CountryList = ({ countryList }) => {
  return (
    <div className='country-list'>
      {countryList &&
        countryList.map((country, i) => <Country key={i} country={country} />)}
    </div>
  );
};

export default CountryList;
