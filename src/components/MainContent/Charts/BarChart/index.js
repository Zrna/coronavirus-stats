import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {

  const data = {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 1,
        hoverBackgroundColor: props.borderColor,
        hoverBorderColor: props.borderColor,
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

  const noData = props.data.length === 1 && props.data[0] === 0;

  return (
    <>
      {!noData ?
        <Bar
          data={data}
          width={40}
          height={20}
          options={options}
        />
        : null
      }
    </>
  );
};

export default BarChart;
