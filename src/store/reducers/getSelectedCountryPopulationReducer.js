import { GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS, GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR } from '../actions/actionTypes';

const getSelectedCountryPopulationReducer = (state = {}, action) => {
  const newState = { ...state };
  if (action.type === GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS) {
    return {
      ...newState,
      selectedCountryPopulation: action.data.country_population
    };
  } else if (action.type === GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR) {
    return {
      ...newState,
      error: action.error
    };
  } else {
    return newState;
  }
};

export default getSelectedCountryPopulationReducer;
