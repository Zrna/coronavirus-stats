import React from 'react';
import { connect } from 'react-redux';

import { roundNumber, sortDataByDate } from '../../common';

import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

import '../../styles/_style.scss';
import './style.scss';

const MainContent = (props) => {

  let confirmed,
    deaths,
    recovered,
    sortedConfirmedHistoryDates,
    sortedConfirmedHistoryValues,
    sortedDeathsHistoryDates,
    sortedDeathsHistoryValues,
    sortedRecoveredHistoryDates,
    sortedRecoveredHistoryValues;

  if (props.country) {
    confirmed = props.data.confirmed.locations.find(country => country.country === props.country);
    deaths = props.data.deaths.locations.find(country => country.country === props.country);
    recovered = props.data.recovered.locations.find(country => country.country === props.country);

    const sortedConfirmedData = sortDataByDate(confirmed);
    sortedConfirmedHistoryDates = sortedConfirmedData[1];
    sortedConfirmedHistoryValues = sortedConfirmedData[2];

    const sortedDeathsData = sortDataByDate(deaths);
    sortedDeathsHistoryDates = sortedDeathsData[1];
    sortedDeathsHistoryValues = sortedDeathsData[2];

    const sortedRecoveredData = sortDataByDate(recovered);
    sortedRecoveredHistoryDates = sortedRecoveredData[1];
    sortedRecoveredHistoryValues = sortedRecoveredData[2];
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
    <div className='col main-content'>
      {props.country ? <h1>{props.country}</h1> : null }
      {props.selectedCountry && props.country && props.selectedCountry.latest !== 0 ? 
        <>
          <p>Total cases: <strong>{props.latest}</strong></p>
        </>
        :
        <DefaultMessages />
      }

      {confirmed && deaths && recovered && props.selectedCountry.latest !== 0 ?
        <>
          <PieChart
            labels={['Confirmed', 'Deaths', 'Recovered']}
            data={{confirmed, deaths, recovered}}
            title='Total data'
          />

          <LineChart
            labels={sortedConfirmedHistoryDates}
            data={sortedConfirmedHistoryValues}
            title='Total cases per day'
            borderColor='#e60036'
            backgroundColor='rgba(230, 0, 54, 0.4)'
          />

          <LineChart
            labels={sortedDeathsHistoryDates}
            data={sortedDeathsHistoryValues}
            title='Total deaths per day'
            borderColor='#571aab'
            backgroundColor='rgb(87, 26, 171, 0.4)'
          />

          <LineChart
            labels={sortedRecoveredHistoryDates}
            data={sortedRecoveredHistoryValues}
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
