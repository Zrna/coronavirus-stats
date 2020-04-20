import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../../styles/_style.scss';
import './style.scss';

import searchIcon from '../../assets/search.svg';

import Header from '../../components/SidebarHeader';
import CountryList from '../../components/CountryList';

const Sidebar = ({ countryConfirmedDataSum }) => {
  const [countryList, setCountryList] = useState(countryConfirmedDataSum);

  const handleInputSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filterList = countryConfirmedDataSum.filter(country => (
      country.country.toLowerCase().includes(inputValue)
    ));
    setCountryList(filterList);
  };

  return (
    <div className='col sidebar'>
      <Header />
      <div className='input-search'>
        <img src={searchIcon} alt='Search icon' />
        <input type='search' placeholder='Search country by name' onChange={handleInputSearch} />
      </div>
      <CountryList countryList={countryList} />
    </div>
  );
};

const mapStateToProps = ({ apiData: { countryConfirmedDataSum } }) => {
  return {
    countryConfirmedDataSum
  };
};


export default connect(mapStateToProps)(Sidebar);
