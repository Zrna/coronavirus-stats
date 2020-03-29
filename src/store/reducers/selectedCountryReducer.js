import { SELECTED_COUNTRY } from '../actions/actionTypes';

const selectedCountryReducer = (state = {}, action) => {
  const newState = { ...state };
  if (action.type === SELECTED_COUNTRY) {
    return {
      ...newState,
      country: action.selectedCountry.country,
      country_code: action.selectedCountry.country_code,
      latest: action.selectedCountry.latest
    };
  } else {
    return newState;
  }
};

export default selectedCountryReducer;
