import React from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './styles/_style.scss';

function App() {
  return (
    <div className='flex-grid'>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
