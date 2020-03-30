import { all, fork } from 'redux-saga/effects';

import { getApiDataWatcher } from './getApiDataSaga';
import { getSelectedCountryPopulationDataWatcher } from './getSelectedCountryPopulationSaga';

export default function* rootSaga() {
  yield all([
    fork(getApiDataWatcher),
    fork(getSelectedCountryPopulationDataWatcher)
  ]);
}
