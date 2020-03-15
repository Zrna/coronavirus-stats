import { GET_API_DATA_SUCCESS, GET_API_DATA_ERROR } from '../actions/actionTypes';

const getApiDataReducer = (state = {}, action) => {
  const newState = { ...state };
  console.log('get api data reducer - action', action);

  if (action.type === GET_API_DATA_SUCCESS) {
    return {
      ...newState,
      data: action.data[0],
      numberOfConfirmed: action.data[0].latest.confirmed,
      numberOfDeaths: action.data[0].latest.deaths,
      numberOfRecovered: action.data[0].latest.recovered,
      numberOfCurrentlySick: (action.data[0].latest.confirmed - action.data[0].latest.recovered),
      lastUpdated: action.data[0].confirmed.last_updated,
      countryConfirmedDataSum: action.data[1][0].countryConfirmedDataSum,
      countryDeathsDataSum: action.data[1][0].countryDeathsDataSum,
      countryRecoveredDataSum: action.data[1][0].countryRecoveredDataSum
    };
  } else if (action.type === GET_API_DATA_ERROR) {
    console.log('error', action.error);
    return {
      ...newState,
      error: action.error
    };
  } else {
    return newState;
  }
};

export default getApiDataReducer;
