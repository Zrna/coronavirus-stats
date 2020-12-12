import { getMainDataForSelectedCountry } from '../../common';
import { SELECTED_COUNTRY } from '../actions/actionTypes';

const selectedCountryReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SELECTED_COUNTRY:
      return {
        ...newState,
        country: action.selectedCountry.country,
        confirmed: getMainDataForSelectedCountry(
          action.selectedCountry.allData,
          'confirmed',
          action.selectedCountry.country.country
        ),
        deaths: getMainDataForSelectedCountry(
          action.selectedCountry.allData,
          'deaths',
          action.selectedCountry.country.country
        ),
        recovered: getMainDataForSelectedCountry(
          action.selectedCountry.allData,
          'recovered',
          action.selectedCountry.country.country
        ),
      };
    default:
      return newState;
  }
};

export default selectedCountryReducer;
