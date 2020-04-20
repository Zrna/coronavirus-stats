import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { calculatePercentage } from '../../common';

import Card from './Card';

const CountryInfoCards = (props) => {
  return (
    <div className='info'>
      <div className='country-cards'>
        <Card
          cardNumber={props.selectedCountryConfirmed.latest}
          cardText='Total cases'
        />
        <div className='arrow-separator'></div>
        <Card
          cardName='confirmed'
          cardNumber={props.newCasesLast24h}
          cardText='last 24h'
          totalNumber={props.selectedCountryConfirmed.latest}
          percentageDescription={true}
        />
      </div>
      <div className='country-cards'>
        <Card
          cardName='deaths'
          cardNumber={props.selectedCountryDeaths.latest}
          cardText='Deaths'
          totalNumber={props.selectedCountryConfirmed.latest}
          percentageDescription={true}
        />
        <div className='arrow-separator'></div>
        <Card
          cardName='deaths'
          cardNumber={props.deathsLast24h}
          cardText='last 24h'
          totalNumber={props.selectedCountryConfirmed.latest}
        />
      </div>
      <div className='country-cards'>
        <Card
          cardName='recovered'
          cardNumber={props.selectedCountryRecovered.latest}
          cardText='Recovered'
          totalNumber={props.selectedCountryConfirmed.latest}
          percentageDescription={true}
        />
        <div className='arrow-separator'></div>
        <Card
          cardName='recovered'
          cardNumber={props.recoveredLast24h}
          cardText='last 24h'
          totalNumber={props.selectedCountryConfirmed.latest}
        />
      </div>
      <div className='country-cards'>
        <Card
          cardName='currently-sick'
          cardNumber={props.currentlySick}
          cardText='Currently sick'
          totalNumber={props.selectedCountryConfirmed.latest}
          percentageDescription={true}
        />
      </div>
      <div className='country-cards'>
        <Card
          cardName='country-population'
          cardNumber={props.selectedCountryPopulation}
          cardText='Country population'
        />
        <div className='arrow-separator'></div>
        <Card
          cardName='country-population-percentage'
          cardNumber={calculatePercentage(props.selectedCountryPopulation, props.selectedCountryConfirmed.latest, 3)}
          cardText='population infected'
          smallText='(all cases)'
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedCountry, countryPopulation: { selectedCountryPopulation }}) => ({
  selectedCountryConfirmed: selectedCountry.confirmed,
  selectedCountryDeaths: selectedCountry.deaths,
  selectedCountryRecovered: selectedCountry.recovered,
  selectedCountryPopulation
});

export default connect(mapStateToProps)(CountryInfoCards);
