import { GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST } from './actionTypes';

export const getSelectedCountryPopulationAction = country_code => ({
  type: GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST,
  selectedCountryCode: country_code,
});
