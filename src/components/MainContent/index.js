import React from 'react';
import { connect } from 'react-redux';

import {
  roundNumber,
  sortDataByDate
} from '../../common';

import CountryInfoCard from './CountryInfoCard';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

import '../../styles/_style.scss';
import './style.scss';

const MainContent = (props) => {

  let confirmed,
    deaths,
    recovered,
    currentlySick,
    sortedConfirmedHistoryDates,
    sortedConfirmedHistoryNumbers,
    sortedDeathsHistoryDates,
    sortedDeathsHistoryNumbers,
    sortedRecoveredHistoryDates,
    sortedRecoveredHistoryNumbers,
    inTheLast24h;

  if (props.country) {
    confirmed = props.data.confirmed.locations.find(country => country.country === props.country);
    deaths = props.data.deaths.locations.find(country => country.country === props.country);
    recovered = props.data.recovered.locations.find(country => country.country === props.country);

    const sortedConfirmedData = sortDataByDate(confirmed);
    sortedConfirmedHistoryDates = sortedConfirmedData[1];
    sortedConfirmedHistoryNumbers = sortedConfirmedData[2];

    const sortedDeathsData = sortDataByDate(deaths);
    sortedDeathsHistoryDates = sortedDeathsData[1];
    sortedDeathsHistoryNumbers = sortedDeathsData[2];

    if (recovered === undefined) {
      recovered = 0;
      sortedRecoveredHistoryDates = ['00/00/00'];
      sortedRecoveredHistoryNumbers = [0];
      currentlySick = confirmed.latest - deaths.latest - 0;
    } else {
      const sortedRecoveredData = sortDataByDate(recovered);
      sortedRecoveredHistoryDates = sortedRecoveredData[1];
      sortedRecoveredHistoryNumbers = sortedRecoveredData[2];
      currentlySick = confirmed.latest - deaths.latest - recovered.latest;
    }
    
    inTheLast24h = sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 1] - sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 2];
  }

  const DefaultMessages = () => {
    if (props.selectedCountry.latest === 0) {
      return <p className='text-in-center'>No data available</p>;
    }
    
    if (!props.selectedCountry.country) {
      return <p className='text-in-center'>Select country from the country list</p>;
    }
  };

  return (
    <div className='col main-content' name='main-content'>
      {props.country ?  
        <>
          {props.selectedCountry.country_code ? 
            <img
              style={{ verticalAlign: 'sub', marginRight: '20px' }}
              src={`https://www.countryflags.io/${props.selectedCountry.country_code}/flat/32.png`}
              alt={props.selectedCountry.country_code}
            />
            : null
          }
          <h1 style={{ display: 'inline-block' }}>{props.country}</h1>
        </>
        : null
      }
      {props.selectedCountry && props.country && props.selectedCountry.latest !== 0 ? 
        <div className='info'>
          <CountryInfoCard
            cardNumber={confirmed.latest}
            cardText='Total cases'
          />
          <CountryInfoCard
            cardName='confirmed'
            cardNumber={inTheLast24h}
            cardText='in the last 24h'
            totalNumber={confirmed.latest}
          />
          <CountryInfoCard
            cardName='deaths'
            cardNumber={deaths.latest}
            cardText='Deaths'
            totalNumber={confirmed.latest}
          />
          <CountryInfoCard
            cardName='recovered'
            cardNumber={recovered.latest}
            cardText='Recovered'
            totalNumber={confirmed.latest}
          />
          <CountryInfoCard
            cardName='currently-sick'
            cardNumber={currentlySick}
            cardText='Currently sick'
            totalNumber={confirmed.latest}
          />
        </div>
        :
        <DefaultMessages />
      }

      {confirmed && deaths && props.selectedCountry.latest !== 0 ?
        <>
          <PieChart
            labels={['Currently sick', 'Deaths', 'Recovered']}
            data={{currentlySick, deaths, recovered}}
            title='Total data'
          />

          <LineChart
            labels={sortedConfirmedHistoryDates}
            data={sortedConfirmedHistoryNumbers}
            title='Total cases per day'
            borderColor='#e60036'
            backgroundColor='rgba(230, 0, 54, 0.4)'
          />

          <LineChart
            labels={sortedDeathsHistoryDates}
            data={sortedDeathsHistoryNumbers}
            title='Total deaths per day'
            borderColor='#571aab'
            backgroundColor='rgb(87, 26, 171, 0.4)'
          />

          <LineChart
            labels={sortedRecoveredHistoryDates}
            data={sortedRecoveredHistoryNumbers}
            title='Total recovered per day'
            borderColor='#4fc974'
            backgroundColor='rgb(79, 201, 116, 0.4)'
          />
        </> : null }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.apiData.data,
    selectedCountry: state.selectedCountry,
    country: state.selectedCountry.country,
    latest: roundNumber(state.selectedCountry.latest)
  };
};

export default connect(mapStateToProps, null)(MainContent);
