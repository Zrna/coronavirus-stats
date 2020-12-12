import React from 'react';
import BackToTop from 'react-back-to-top-button';
import { connect } from 'react-redux';

import CountryInfo from '../../components/CountryInfo';
import DefaultMessages from '../../components/DefaultMessages';
import '../../styles/_style.scss';

import './styles.scss';

const MainContent = ({ country }) => {
  return (
    <div className='col main-content' name='main-content'>
      {country ? <CountryInfo /> : <DefaultMessages />}

      <BackToTop
        className='back-to-top'
        showAt={200}
        speed={1500}
        easing='easeOutSine'
      >
        <span>↑ go to top</span>
      </BackToTop>
    </div>
  );
};

const mapStateToProps = ({ selectedCountry: { country } }) => ({
  country,
});

export default connect(mapStateToProps)(MainContent);
