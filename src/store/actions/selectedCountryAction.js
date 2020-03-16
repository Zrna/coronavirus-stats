import { SELECTED_COUNTRY } from './actionTypes';

export const selectedCountryAction = (country) => ({
  type: SELECTED_COUNTRY,
  selectedCountry: country
});
