import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({
  backgroundColor,
  borderColor,
  labels,
  data: initialData,
  title,
}) => {
  const data = {
    labels,
    datasets: [
      {
        backgroundColor,
        borderColor,
        borderWidth: 1,
        hoverBackgroundColor: borderColor,
        hoverBorderColor: borderColor,
        data: initialData,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 20,
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

  return <Bar data={data} width={40} height={20} options={options} />;
};

export default BarChart;
