import { SELECTED_COUNTRY } from '../actions/actionTypes';

const selectedCountryReducer = (state = {}, action) => {
  const newState = { ...state };
  if (action.type === SELECTED_COUNTRY) {
    return {
      ...newState,
      country: action.selectedCountry.country,
      latest: action.selectedCountry.latest
    };
  } else {
    return newState;
  }
};

export default selectedCountryReducer;
