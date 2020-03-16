import { combineReducers } from 'redux';

import getApiDataReducer from './getApiDataReducer';
import selectedCountryReducer from './selectedCountryReducer';

export default combineReducers({
  apiData: getApiDataReducer,
  selectedCountry: selectedCountryReducer
});
