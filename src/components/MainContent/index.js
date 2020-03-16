import React from 'react';
import { connect } from 'react-redux';

import { roundNumber } from '../../common';

import '../../styles/_style.scss';
import './style.scss';

const MainContent = (props) => {
  return (
    <div className='col main-content'>
      {props.country ? <h1>{props.country}</h1> : null }
      {props.selectedCountry && props.country ? 
        <>
          <p>Selected country: <strong>{props.country}</strong></p>
          <p>Last number of infected: <strong>{props.latest}</strong></p>
        </>
        :
        <p className='select-country-msg'>Select country from the country list</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.selectedCountry,
    country: state.selectedCountry.country,
    latest: roundNumber(state.selectedCountry.latest)
  };
};

export default connect(mapStateToProps, null)(MainContent);
