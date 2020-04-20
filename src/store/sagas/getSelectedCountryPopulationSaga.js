import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST,
  GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS,
  GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR
} from '../actions/actionTypes';

function* getSelectedCountryPopulationData(action) {
  try {
    const data = yield fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${action.selectedCountryCode}`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(e => console.log(e));

    yield put({ type: GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS, data: data.locations[0] });
  } catch (e) {
    console.log('getApiData saga Error: ', e);
    yield put({ type: GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR, error: 'Something went wrong while retrieving API data.' });
  }
}

export function* getSelectedCountryPopulationDataWatcher() {
  yield takeLatest(GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST, getSelectedCountryPopulationData);
}
