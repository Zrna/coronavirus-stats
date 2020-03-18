import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {

  const pieData = {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: ['#e60036', '#571aab', '#4fc974'],
        hoverBackgroundColor: ['#80001e', '#2d0d59', '#2a8946'],
        data: [
          props.data.confirmed ? props.data.confirmed.latest : null,
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
      fontSize: 20
    },
    legend: {
      display: false
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
