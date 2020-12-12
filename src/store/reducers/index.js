import { combineReducers } from 'redux';

import getApiDataReducer from './getApiDataReducer';
import getSelectedCountryPopulationReducer from './getSelectedCountryPopulationReducer';
import selectedCountryReducer from './selectedCountryReducer';

export default combineReducers({
  apiData: getApiDataReducer,
  selectedCountry: selectedCountryReducer,
  countryPopulation: getSelectedCountryPopulationReducer,
});
