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
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: props.borderColor,
        data: props.data
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: props.title,
      fontSize: 25,
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

  const noData = props.data.length === 1 && props.data[0] === 0;

  return (
    <>
      {!noData ?
        <Line
          data={lineData}
          width={40}
          height={20}
          options={options}
        /> :
        null
      }
    </>
  );
};

export default LineChart;
