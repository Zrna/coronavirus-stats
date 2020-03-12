import React from 'react';
import { connect } from 'react-redux';

import { getApiDataAction } from './store/actions';

function App(props) {
  return (
    <div className='App'>
      <button onClick={props.getApiData}>Get data</button>
      {JSON.stringify(props.data)}
      <p style={{ color: 'red' }}>{props.error}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.apiData.data,
    error: state.apiData.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: () => dispatch(getApiDataAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
