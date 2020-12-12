import {
  GET_API_DATA_SUCCESS,
  GET_API_DATA_ERROR,
} from '../actions/actionTypes';

const getApiDataReducer = (state = { loading: true }, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_API_DATA_SUCCESS:
      return {
        ...newState,
        loading: false,
        data: action.data[0],
        numberOfConfirmed: action.data[0].latest.confirmed,
        numberOfDeaths: action.data[0].latest.deaths,
        numberOfRecovered: action.data[0].latest.recovered,
        numberOfCurrentlySick:
          action.data[0].latest.confirmed -
          action.data[0].latest.recovered -
          action.data[0].latest.deaths,
        lastUpdated: action.data[0].confirmed.last_updated,
        countryConfirmedDataSum: action.data[1][0].countryConfirmedDataSum,
        countryDeathsDataSum: action.data[1][0].countryDeathsDataSum,
        countryRecoveredDataSum: action.data[1][0].countryRecoveredDataSum,
      };
    case GET_API_DATA_ERROR:
      return {
        ...newState,
        loading: false,
        error: action.error,
      };
    default:
      return newState;
  }
};

export default getApiDataReducer;
