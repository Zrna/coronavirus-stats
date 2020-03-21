import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {

  const lineData = {
    labels: props.labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 3,
        pointBorderWidth: 4,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: props.borderColor,
        data: props.data
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
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          precision: 0
        }
      }]
    }
  };

  return (
    <Line
      data={lineData}
      width={40}
      height={10}
      options={options}
    />
  );
};

export default LineChart;
