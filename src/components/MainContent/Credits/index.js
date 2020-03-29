import React from 'react';
import ReactTooltip from 'react-tooltip';

const Credits = () => {
  return (
    <div id='credits'>
      <a data-tip='custom show' data-event='click focus'>Credits</a>
      <ReactTooltip globalEventOff='click' place='left' type='light' effect='solid' clickable={true}>
        <p>Application made by <a href='https://www.lukazrnic.com' target='_blank' rel='noopener noreferrer'>Luka Zrnic</a></p>
        <p>Source code: <a href='https://github.com/Zrna/coronavirus-stats' target='_blank' rel='noopener noreferrer'>coronavirus-stats</a></p>
        <p>Data source: <a href='https://github.com/ExpDev07/coronavirus-tracker-api' target='_blank' rel='noopener noreferrer'>coronavirus-tracker-api</a></p>
      </ReactTooltip>
    </div>
  );
};

export default Credits;
