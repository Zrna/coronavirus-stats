import React from 'react';
import { connect } from 'react-redux';

import { roundNumber, formatDate, formatTime } from '../../common';

import Card from './Card';
import './styles.scss';

const Header = ({
  error,
  numberOfConfirmed,
  numberOfDeaths,
  numberOfRecovered,
  numberOfCurrentlySick,
  lastUpdatedDate,
  lastUpdatedTime,
}) => {
  return (
    <div className='sum-data'>
      <h2>Corona Virus Statistics</h2>
      {error && <p style={{ color: '#e60036' }}>{error}</p>}
      <div className='cards-row'>
        <Card name='confirmed' number={numberOfConfirmed} />
        <Card name='deaths' number={numberOfDeaths} />
      </div>
      <div className='cards-row'>
        <Card name='recovered' number={numberOfRecovered} />
        <Card name='currently-sick' number={numberOfCurrentlySick} />
      </div>
      {lastUpdatedDate && lastUpdatedTime && (
        <p>
          Last update <span title='DD/MM/YYYY'>{lastUpdatedDate}</span> in{' '}
          <span title='HH/MM/SS'>{lastUpdatedTime}</span>.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = ({ apiData }) => ({
  error: apiData.error,
  numberOfConfirmed: roundNumber(apiData.numberOfConfirmed),
  numberOfDeaths: roundNumber(apiData.numberOfDeaths),
  numberOfRecovered: roundNumber(apiData.numberOfRecovered),
  numberOfCurrentlySick: roundNumber(apiData.numberOfCurrentlySick),
  lastUpdatedDate: formatDate(apiData.lastUpdated),
  lastUpdatedTime: formatTime(apiData.lastUpdated),
});

export default connect(mapStateToProps)(Header);
