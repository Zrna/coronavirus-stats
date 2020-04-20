import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getApiDataAction } from './store/actions';
import Sidebar from './containers/Sidebar';
import MainContent from './containers/MainContent';

import './styles/_style.scss';

function App({ getApiData, error, loading }) {

  useEffect(() => {
    getApiData();
  }, [getApiData]);


  const Content = () => {
    if (error) {
      return <p className='text-in-center' style={{ fontSize: '20px' }}>{error}</p>;
    } else {
      return (
        <>
          <Sidebar />
          <MainContent />
        </>
      );
    }
  };

  return (
    <div className='flex-grid'>
      {
        loading ?
          <Loader
            className='loader-center'
            type='Oval'
            color='#eee'
            height={100}
            width={100}
          />
          :
          <Content />
      }
    </div>
  );
}

const mapStateToProps = ({ apiData: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = (dispatch) => ({
  getApiData: () => dispatch(getApiDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
