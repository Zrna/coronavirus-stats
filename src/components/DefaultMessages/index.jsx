import React from 'react';
import { connect } from 'react-redux';

const DefaultMessages = ({ selectedCountryPopulation, selectedCountry: { latest, country } }) => {
  if (latest <= 0) {
    return <p className='text-in-center'>No data available</p>;
  }
  
  if (!country) {
    return <p className='text-in-center'>Select country from the country list</p>;
  }

  if (!selectedCountryPopulation) {
    return 'No Data';
  }
};

const mapStateToProps = ({selectedCountry, countryPopulation: { selectedCountryPopulation } }) => ({
  selectedCountry,
  selectedCountryPopulation
});

export default connect(mapStateToProps)(DefaultMessages);
