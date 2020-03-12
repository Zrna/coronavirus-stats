import { put, takeLatest } from 'redux-saga/effects';
import { GET_API_DATA_REQUEST, GET_API_DATA_SUCCESS, GET_API_DATA_ERROR } from '../actions/actionTypes';

function* getApiData() {
  try {
    const data = yield fetch('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(res => res.json())
      .then(res => {
        console.log('data', res);
        return res;
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
