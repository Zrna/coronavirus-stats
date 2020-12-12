import { put, takeLatest } from 'redux-saga/effects';

import {
  GET_API_DATA_REQUEST,
  GET_API_DATA_SUCCESS,
  GET_API_DATA_ERROR,
} from '../actions/actionTypes';

function getSumData(res, propertyName) {
  const data = res[propertyName].locations;

  const combineDataSum = data.reduce((countries, province) => {
    const existing = countries.find(
      country => country.country === province.country
    );

    if (existing) {
      existing.latest += province.latest;
      existing.province = '';
      Object.keys(existing.history).map(date => {
        return (existing.history[date] += province.history[date]);
      });
    } else {
      countries.push(province);
    }

    return countries;
  }, []);

  const sortCombinedData = combineDataSum.sort(
    (a, b) => parseFloat(b.latest) - parseFloat(a.latest)
  );

  return sortCombinedData;
}

function* getApiData() {
  try {
    const data = yield fetch(
      'https://coronavirus-tracker-api.herokuapp.com/all'
    )
      .then(res => res.json())
      .then(res => {
        const countryConfirmedDataSum = getSumData(res, 'confirmed');
        const countryDeathsDataSum = getSumData(res, 'deaths');
        const countryRecoveredDataSum = getSumData(res, 'recovered');

        const sumData = [
          {
            countryConfirmedDataSum,
            countryDeathsDataSum,
            countryRecoveredDataSum,
          },
        ];

        return [res, sumData];
      })
      .catch(e => console.log(e));

    yield put({ type: GET_API_DATA_SUCCESS, data });
  } catch (e) {
    yield put({
      type: GET_API_DATA_ERROR,
      error: 'Something went wrong while retrieving API data. Try again.',
    });
  }
}

export function* getApiDataWatcher() {
  yield takeLatest(GET_API_DATA_REQUEST, getApiData);
}
