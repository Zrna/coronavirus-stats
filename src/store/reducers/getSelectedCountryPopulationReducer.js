import {
  GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS,
  GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR,
} from '../actions/actionTypes';

const getSelectedCountryPopulationReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS:
      return {
        ...newState,
        selectedCountryPopulation: action.data.country_population,
      };
    case GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR:
      return {
        ...newState,
        error: action.error,
      };
    default:
      return newState;
  }
};

export default getSelectedCountryPopulationReducer;
