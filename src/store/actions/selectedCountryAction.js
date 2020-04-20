import { SELECTED_COUNTRY } from './actionTypes';

export const selectedCountryAction = (allData, country) => ({
  type: SELECTED_COUNTRY,
  selectedCountry: {allData, country}
});
