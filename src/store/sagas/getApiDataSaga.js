import { put, takeLatest } from 'redux-saga/effects';
import { GET_API_DATA_REQUEST, GET_API_DATA_SUCCESS, GET_API_DATA_ERROR } from '../actions/actionTypes';

function getSumData(res, propertyName) {
  let data;
  if (propertyName === 'confirmed') data = res.confirmed.locations;
  if (propertyName === 'deaths') data = res.deaths.locations;
  if (propertyName === 'recovered') data = res.recovered.locations;

  const combineData = data.reduce((prev, curr) => {
    const count = prev.get(curr.country) || 0;
    prev.set(`${curr.country} ${curr.country_code}`, curr.latest + count, curr.country_code);
    return prev;
  }, new Map());

  const combineDataSum = [...combineData].map(([country, latest]) => {
    return {
      country: country.slice(0, -3),
      latest,
      country_code: country.slice(-2)};
  });

  const sortCombinedData = combineDataSum.sort((a, b) => parseFloat(b.latest) - parseFloat(a.latest));

  return sortCombinedData;
}

function* getApiData() {
  try {
    const data = yield fetch('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(res => res.json())
      .then(res => {
        console.log('data', res);

        const countryConfirmedDataSum = getSumData(res, 'confirmed');
        const countryDeathsDataSum = getSumData(res, 'deaths');
        const countryRecoveredDataSum = getSumData(res, 'recovered');

        const sumData = [{
          countryConfirmedDataSum,
          countryDeathsDataSum,
          countryRecoveredDataSum
        }];

        return [res, sumData];
      })
      .catch(e => console.log(e));

    yield put({ type: GET_API_DATA_SUCCESS, data });
  } catch (e) {
    console.log('getApiData saga Error: ', e);
    yield put({ type: GET_API_DATA_ERROR, error: 'Something went wrong while retrieving API data.' });
  }
}

export function* getApiDataWatcher() {
  yield takeLatest(GET_API_DATA_REQUEST, getApiData);
}
