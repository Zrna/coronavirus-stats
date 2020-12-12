import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({
  backgroundColor,
  borderColor,
  data: initialData,
  labels,
  title,
}) => {
  const lineData = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor,
        borderColor,
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: borderColor,
        data: initialData,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 25,
      fontColor: '#ccc',
      fontStyle: 'normal',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
        },
      ],
    },
  };

  return <Line data={lineData} width={40} height={20} options={options} />;
};

export default LineChart;
