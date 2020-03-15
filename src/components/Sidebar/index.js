import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getApiDataAction } from '../../store/actions';
import { roundNumber } from '../../common';

import '../../styles/_style.scss';
import './style.scss';

const Sidebar = (props) => {
  const { getApiData } = props;

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <div className='col sidebar'>
      <div className='sum-data'>
        <h1>Corona Virus Statistics</h1>
        {props.error ? <p style={{ color: '#e60036' }}>{props.error}</p> : null}
        <div className='cards-row'>
          <p className='card confirmed'>
            <span>{props.numberOfConfirmed}</span> confirmed
          </p>
          <p className='card deaths'>
            <span>{props.numberOfDeaths}</span> deaths
          </p>
        </div>
        <div className='cards-row'>
          <p className='card recovered'>
            <span>{props.numberOfRecovered}</span> recovered
          </p>
          <p className='card currently-sick'>
            <span>{props.numberOfCurrentlySick}</span> currently sick
          </p>
        </div>
        <p>Last update <span>{props.lastUpdated}</span></p>
      </div>
      <div className='country-list'>
        {props.countryConfirmedDataSum && props.countryConfirmedDataSum.map((country, i) => {
          return (
            <div key={i} style={{ borderBottom: '1px solid #ccc'}}>
              <p><strong>{country.country}</strong> | <span className='numbers'>{roundNumber(country.latest)}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.apiData.error,
    data: state.apiData.data,
    numberOfConfirmed: roundNumber(state.apiData.numberOfConfirmed),
    numberOfDeaths: roundNumber(state.apiData.numberOfDeaths),
    numberOfRecovered: roundNumber(state.apiData.numberOfRecovered),
    numberOfCurrentlySick: roundNumber(state.apiData.numberOfCurrentlySick),
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
