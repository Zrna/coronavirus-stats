import React from 'react';
import { connect } from 'react-redux';

import {
  roundNumber,
  sortDataByDate,
  substractNumberWithPreviousNumberInArray,
  calculatePercentage
} from '../../common';

import CountryInfoCard from './CountryInfoCard';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import Credits from './Credits';

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
    newTotalCasesLast24h,
    deathsLast24h,
    recoveredLast24h,
    dailyCases;

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
    
    dailyCases = substractNumberWithPreviousNumberInArray(sortedConfirmedHistoryNumbers);
    newTotalCasesLast24h = sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 1] - sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 2];
    deathsLast24h = sortedDeathsHistoryNumbers[sortedDeathsHistoryNumbers.length - 1] - sortedDeathsHistoryNumbers[sortedDeathsHistoryNumbers.length - 2];
    recoveredLast24h = sortedRecoveredHistoryNumbers[sortedRecoveredHistoryNumbers.length - 1] - sortedRecoveredHistoryNumbers[sortedRecoveredHistoryNumbers.length - 2];
  }

  const DefaultMessages = () => {
    if (props.selectedCountry.latest <= 0) {
      return <p className='text-in-center'>No data available</p>;
    }
    
    if (!props.selectedCountry.country) {
      return <p className='text-in-center'>Select country from the country list</p>;
    }

    if (!props.selectedCountryPopulation) {
      // TODO: some weird error occurs if this isn't here...
      return null;
    }
  };

  return (
    <div className='col main-content' name='main-content'>
      <Credits />
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
      {props.selectedCountryPopulation && props.selectedCountry && props.country && props.selectedCountry.latest > 0 ?
        <div className='info'>
          <div className='country-cards'>
            <CountryInfoCard
              cardNumber={confirmed.latest}
              cardText='Total cases'
            />
            <div className='arrow-separator'></div>
            <CountryInfoCard
              cardName='confirmed'
              cardNumber={newTotalCasesLast24h}
              cardText='last 24h'
              totalNumber={confirmed.latest}
              percentageDescription={true}
            />
          </div>
          <div className='country-cards'>
            <CountryInfoCard
              cardName='deaths'
              cardNumber={deaths.latest}
              cardText='Deaths'
              totalNumber={confirmed.latest}
              percentageDescription={true}
            />
            <div className='arrow-separator'></div>
            <CountryInfoCard
              cardName='deaths'
              cardNumber={deathsLast24h}
              cardText='last 24h'
              totalNumber={confirmed.latest}
            />
          </div>
          <div className='country-cards'>
            <CountryInfoCard
              cardName='recovered'
              cardNumber={recovered.latest}
              cardText='Recovered'
              totalNumber={confirmed.latest}
              percentageDescription={true}
            />
            <div className='arrow-separator'></div>
            <CountryInfoCard
              cardName='recovered'
              cardNumber={recoveredLast24h}
              cardText='last 24h'
              totalNumber={confirmed.latest}
            />
          </div>
          <div className='country-cards'>
            <CountryInfoCard
              cardName='currently-sick'
              cardNumber={currentlySick}
              cardText='Currently sick'
              totalNumber={confirmed.latest}
              percentageDescription={true}
            />
          </div>
          <div className='country-cards'>
            <CountryInfoCard
              cardName='country-population'
              cardNumber={props.selectedCountryPopulation}
              cardText='Country population'
            />
            <div className='arrow-separator'></div>
            <CountryInfoCard
              cardName='country-population-percentage'
              cardNumber={calculatePercentage(props.selectedCountryPopulation, confirmed.latest, 3)}
              cardText='population infected'
              smallText='(all cases)'
            />
          </div>
        </div>
        :
        <DefaultMessages />
      }

      {confirmed && deaths && props.selectedCountry.latest > 0 ?
        <>
          <div>
            <PieChart
              labels={['Currently sick', 'Deaths', 'Recovered']}
              data={{currentlySick, deaths, recovered}}
              title='Total data'
            />
          </div>

          <div className='row'>
            <div className='col-2'>
              <LineChart
                labels={sortedConfirmedHistoryDates}
                data={sortedConfirmedHistoryNumbers}
                title='Total cases'
                borderColor='#e60036'
                backgroundColor='rgba(230, 0, 54, 0.4)'
              />
            </div>

            <div className='col-2'>
              <BarChart
                labels={sortedConfirmedHistoryDates}
                data={dailyCases}
                title='New cases per day'
                borderColor='#e60036'
                backgroundColor='rgba(230, 0, 54, 0.4)'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-2'>
              <LineChart
                labels={sortedDeathsHistoryDates}
                data={sortedDeathsHistoryNumbers}
                title='Total deaths'
                borderColor='#571aab'
                backgroundColor='rgb(87, 26, 171, 0.4)'
              />
            </div>

            <div className='col-2'>
              <LineChart
                labels={sortedRecoveredHistoryDates}
                data={sortedRecoveredHistoryNumbers}
                title='Total recovered'
                borderColor='#4fc974'
                backgroundColor='rgb(79, 201, 116, 0.4)'
              />
            </div>
          </div>
        </> : null }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.apiData.data,
    selectedCountry: state.selectedCountry,
    selectedCountryPopulation: state.countryPopulation.selectedCountryPopulation,
    country: state.selectedCountry.country,
    latest: roundNumber(state.selectedCountry.latest)
  };
};

export default connect(mapStateToProps, null)(MainContent);
