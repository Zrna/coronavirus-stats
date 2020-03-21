import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {

  const pieData = {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: ['#3333ff', '#571aab', '#4fc974'],
        hoverBackgroundColor: ['#0000cc', '#2d0d59', '#2a8946'],
        data: [
          props.data.currentlySick ? props.data.currentlySick : null,
          props.data.deaths ? props.data.deaths.latest : null,
          props.data.recovered ? props.data.recovered.latest : null
        ]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: props.title,
      fontSize: 20,
      fontColor: '#ccc',
      fontStyle: 'normal'
    },
    legend: {
      display: true,
      position: 'top'
    }
  };

  return (
    <Pie
      data={pieData}
      width={40}
      height={10}
      options={options}
    />
  );
};

export default PieChart;
