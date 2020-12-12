import React from 'react';
import { connect } from 'react-redux';

import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Charts = ({
  currentlySick,
  dailyCases,
  sortedConfirmedData,
  sortedDeathsData,
  sortedRecoveredData,
  deaths,
  recovered,
}) => {
  return (
    <>
      {currentlySick && deaths && recovered && (
        <div>
          <PieChart
            labels={['Currently sick', 'Deaths', 'Recovered']}
            data={{ currentlySick, deaths, recovered }}
            title='Total data'
          />
        </div>
      )}

      <div className='row'>
        {sortedConfirmedData && (
          <div className='col-2'>
            <LineChart
              labels={sortedConfirmedData[1]}
              data={sortedConfirmedData[2]}
              title='Total cases'
              borderColor='#e60036'
              backgroundColor='rgba(230, 0, 54, 0.4)'
            />
          </div>
        )}
        {sortedConfirmedData && dailyCases && (
          <div className='col-2'>
            <BarChart
              labels={sortedConfirmedData[1]}
              data={dailyCases}
              title='New cases per day'
              borderColor='#e60036'
              backgroundColor='rgba(230, 0, 54, 0.4)'
            />
          </div>
        )}
      </div>

      <div className='row'>
        {sortedDeathsData && (
          <div className='col-2'>
            <LineChart
              labels={sortedDeathsData[1]}
              data={sortedDeathsData[2]}
              title='Total deaths'
              borderColor='#571aab'
              backgroundColor='rgb(87, 26, 171, 0.4)'
            />
          </div>
        )}

        {sortedRecoveredData && (
          <div className='col-2'>
            <LineChart
              labels={sortedRecoveredData[1]}
              data={sortedRecoveredData[2]}
              title='Total recovered'
              borderColor='#4fc974'
              backgroundColor='rgb(79, 201, 116, 0.4)'
            />
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ selectedCountry: { deaths, recovered } }) => ({
  deaths,
  recovered,
});

export default connect(mapStateToProps)(Charts);
