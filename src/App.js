import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getApiDataAction } from './store/actions';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './styles/_style.scss';

function App(props) {
  const { getApiData } = props;

  useEffect(() => {
    getApiData();
  }, [getApiData]);


  const Content = () => {
    if (props.error) {
      return <p className='text-in-center'>{props.error}</p>;
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
      {props.loading ?
        <div className='loader-center'>
          <Loader
            type='MutatingDots'
            color='#4fc974'
            height={100}
            width={100}
          />
        </div>
        :
        <Content />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.apiData.loading,
    error: state.apiData.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: () => dispatch(getApiDataAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
