import { combineReducers } from 'redux';

import getApiDataReducer from './getApiDataReducer';
import selectedCountryReducer from './selectedCountryReducer';
import getSelectedCountryPopulationReducer from './getSelectedCountryPopulationReducer';

export default combineReducers({
  apiData: getApiDataReducer,
  selectedCountry: selectedCountryReducer,
  countryPopulation: getSelectedCountryPopulationReducer
});
