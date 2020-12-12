import React from 'react';
import { connect } from 'react-redux';

import {
  sortDataByDate,
  substractNumberWithPreviousNumberInArray,
  calculateLast24HoursData,
} from '../../common';
import Charts from '../Charts';
import CountryInfoCards from '../CountryInfoCards';
import CountryInfoHeader from '../CountryInfoHeader';
import Credits from '../Credits';

const MainContent = ({
  selectedCountryName,
  selectedCountryCode,
  selectedCountryConfirmed,
  selectedCountryDeaths,
  selectedCountryRecovered,
}) => {
  const sortedConfirmedData = sortDataByDate(selectedCountryConfirmed);
  const sortedDeathsData = sortDataByDate(selectedCountryDeaths);
  const sortedRecoveredData = sortDataByDate(selectedCountryRecovered);

  const currentlySick =
    selectedCountryConfirmed.latest -
    selectedCountryDeaths.latest -
    selectedCountryRecovered.latest;
  const dailyCases = substractNumberWithPreviousNumberInArray(
    sortedConfirmedData[2]
  );

  const newCasesLast24h = calculateLast24HoursData(sortedConfirmedData[2]);
  const deathsLast24h = calculateLast24HoursData(sortedDeathsData[2]);
  const recoveredLast24h = calculateLast24HoursData(sortedRecoveredData[2]);

  return (
    <>
      <Credits />
      <CountryInfoHeader
        countryCode={selectedCountryCode}
        countryName={selectedCountryName}
      />
      <CountryInfoCards
        newCasesLast24h={newCasesLast24h}
        deathsLast24h={deathsLast24h}
        recoveredLast24h={recoveredLast24h}
        currentlySick={currentlySick}
      />
      <Charts
        currentlySick={currentlySick}
        dailyCases={dailyCases}
        sortedConfirmedData={sortedConfirmedData}
        sortedDeathsData={sortedDeathsData}
        sortedRecoveredData={sortedRecoveredData}
      />
    </>
  );
};

const mapStateToProps = ({
  selectedCountry: { country, confirmed, deaths, recovered },
}) => ({
  selectedCountryName: country.country,
  selectedCountryCode: country.country_code,
  selectedCountryConfirmed: confirmed,
  selectedCountryDeaths: deaths,
  selectedCountryRecovered: recovered,
});

export default connect(mapStateToProps)(MainContent);
