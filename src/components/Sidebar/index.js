import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getApiDataAction, selectedCountryAction } from '../../store/actions';
import { roundNumber, formatDate, formatTime } from '../../common';

import '../../styles/_style.scss';
import './style.scss';

const Sidebar = (props) => {
  const [countryList, setCountryList] = useState();
  const { getApiData } = props;

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  // setting initial country list - resolved redux saga and useEffect infinite loop
  if (props.countryConfirmedDataSum && countryList === undefined) {
    setCountryList(props.countryConfirmedDataSum);
  }

  const handleInputOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filterList = props.countryConfirmedDataSum.filter(country => 
      country.country.toLowerCase().includes(inputValue)
    );
    setCountryList(filterList);
  };

  const handleSelectCountry = (selectedCountry) => () => {
    console.log('selected country', selectedCountry);
    props.selectedCountryDispatchToStore(selectedCountry);
  };

  return (
    <div className='col sidebar'>
      <div className='sum-data'>
        <h2>Corona Virus Statistics</h2>
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
        {props.lastUpdatedDate && props.lastUpdatedTime ?
          <p>Last update <span id='last-updated-date' title='DD/MM/YYYY'>{props.lastUpdatedDate}</span> in <span id='last-updated-time' title='HH/MM/SS'>{props.lastUpdatedTime}</span>
          .</p>
          :
          null
        }
      </div>
      <div className='input-search'>
        <input placeholder='Type country name...' autoFocus onChange={handleInputOnChange} />
      </div>
      <div className='country-list'>
        {countryList && countryList.map((country, i) => {
          return (
            <div key={i} className='country-row'>
              <p onClick={handleSelectCountry(country)}>
                <strong>{country.country}</strong> | <span className='numbers'>{roundNumber(country.latest)}</span>
              </p>
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
    lastUpdatedDate: formatDate(state.apiData.lastUpdated),
    lastUpdatedTime: formatTime(state.apiData.lastUpdated),
    countryConfirmedDataSum: state.apiData.countryConfirmedDataSum,
    countryDeathsDataSum: state.apiData.countryDeathsDataSum,
    countryRecoveredDataSum: state.apiData.countryRecoveredDataSum
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: () => dispatch(getApiDataAction()),
    selectedCountryDispatchToStore: (country) => dispatch(selectedCountryAction(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
