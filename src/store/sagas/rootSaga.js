import { all, fork } from 'redux-saga/effects';

import { getApiDataWatcher } from './getApiDataSaga';

export default function* rootSaga() {
  yield all([
    fork(getApiDataWatcher)
  ]);
}
