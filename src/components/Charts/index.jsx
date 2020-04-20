import React from 'react';
import { connect } from 'react-redux';

import PieChart from './PieChart';
import LineChart from './LineChart';
import BarChart from './BarChart';

const Charts = ({ currentlySick, dailyCases, sortedConfirmedData, sortedDeathsData, sortedRecoveredData, deaths, recovered }) => {
  return (
    <>
      {
        currentlySick && deaths && recovered ?
          <div>
            <PieChart
              labels={['Currently sick', 'Deaths', 'Recovered']}
              data={{currentlySick, deaths, recovered}}
              title='Total data'
            />
          </div>
          :
          null
      }

      <div className='row'>
        {
          sortedConfirmedData ?
            <div className='col-2'>
              <LineChart
                labels={sortedConfirmedData[1]}
                data={sortedConfirmedData[2]}
                title='Total cases'
                borderColor='#e60036'
                backgroundColor='rgba(230, 0, 54, 0.4)'
              />
            </div>
            :
            null
        }
        {
          sortedConfirmedData && dailyCases ?
            <div className='col-2'>
              <BarChart
                labels={sortedConfirmedData[1]}
                data={dailyCases}
                title='New cases per day'
                borderColor='#e60036'
                backgroundColor='rgba(230, 0, 54, 0.4)'
              />
            </div>
            :
            null
        }
      </div>

      <div className='row'>
        {
          sortedDeathsData ?
            <div className='col-2'>
              <LineChart
                labels={sortedDeathsData[1]}
                data={sortedDeathsData[2]}
                title='Total deaths'
                borderColor='#571aab'
                backgroundColor='rgb(87, 26, 171, 0.4)'
              />
            </div>
            :
            null
        }

        {
          sortedRecoveredData ?
            <div className='col-2'>
              <LineChart
                labels={sortedRecoveredData[1]}
                data={sortedRecoveredData[2]}
                title='Total recovered'
                borderColor='#4fc974'
                backgroundColor='rgb(79, 201, 116, 0.4)'
              />
            </div>
            :
            null
        }
      </div>
    </>
  );
};

const mapStateToProps = ({ selectedCountry: { deaths, recovered } }) => ({
  deaths,
  recovered
});

export default connect(mapStateToProps)(Charts);
