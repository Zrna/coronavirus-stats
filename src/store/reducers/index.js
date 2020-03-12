import { combineReducers } from 'redux';

import getApiDataReducer from './getApiDataReducer';

export default combineReducers({
  apiData: getApiDataReducer
});
