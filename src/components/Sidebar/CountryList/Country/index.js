import React from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';

import {
  selectedCountryAction,
  getSelectedCountryPopulationAction
} from '../../../../store/actions';
import { roundNumber } from '../../../../common';

const Country = ({ country, ...props }) => {

  const handleSelectCountry = (selectedCountry) => () => {
    console.log('selected country', selectedCountry);
    props.getSelectedCountryPopulation(selectedCountry.country_code);
    props.selectedCountryDispatchToStore(selectedCountry);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      scroller.scrollTo('main-content', {
        duration: 1000,
        smooth: true,
        offset: 50
      });
    }
  };

  return (
    <div
      className='country-row'
      onClick={handleSelectCountry(country)}
      title={`${roundNumber(country.latest)} confirmed cases in ${country.country}`}
    >
      <img
        src={`https://www.countryflags.io/${country.country_code}/flat/32.png`}
        alt={country.country_code}
      />
      <p>
        <strong>{country.country}</strong>
        <span className='numbers'>{roundNumber(country.latest)}</span>
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectedCountryDispatchToStore: (country) => dispatch(selectedCountryAction(country)),
  getSelectedCountryPopulation: (country_code) => dispatch(getSelectedCountryPopulationAction(country_code))
});

export default connect(null, mapDispatchToProps)(Country);
