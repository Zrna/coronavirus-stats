import { GET_API_DATA_SUCCESS, GET_API_DATA_ERROR } from '../actions/actionTypes';

const getApiDataReducer = (state = {}, action) => {
  const newState = { ...state };
  console.log('get api data reducer - action', action);

  if (action.type === GET_API_DATA_SUCCESS) {
    return {
      ...newState,
      data: action.data
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
