import React from 'react';
import { connect } from 'react-redux';

import { getApiDataAction } from './store/actions';
import { roundNumber } from './common';

function App(props) {
  return (
    <div className='App'>
      <h1>Corona Virus Statistics</h1>
      <p style={{ color: 'red' }}>{props.error}</p>
      <button onClick={props.getApiData}>Get data</button>
      <p>Confirmed: {props.numberOfConfirmed}</p>
      <p>Deaths: {props.numberOfDeaths}</p>
      <p>Recovered: {props.numberOfRecovered}</p>
      <p>Last update: {props.lastUpdated}</p>
      <p>Country data sum</p>
      {props.countryConfirmedDataSum && props.countryConfirmedDataSum.map((country, i) => {
        return (
          <div key={i} style={{ borderBottom: '1px solid #ccc', width: '30%'}}>
            <p>Country: <strong>{country.country}</strong> | Latest confirmed: <strong>{roundNumber(country.latest)}</strong></p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.apiData.error,
    data: state.apiData.data,
    numberOfConfirmed: roundNumber(state.apiData.numberOfConfirmed),
    numberOfDeaths: roundNumber(state.apiData.numberOfDeaths),
    numberOfRecovered: roundNumber(state.apiData.numberOfRecovered),
    lastUpdated: state.apiData.lastUpdated,
    countryConfirmedDataSum: state.apiData.countryConfirmedDataSum,
    countryDeathsDataSum: state.apiData.countryDeathsDataSum,
    countryRecoveredDataSum: state.apiData.countryRecoveredDataSum
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: () => dispatch(getApiDataAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
