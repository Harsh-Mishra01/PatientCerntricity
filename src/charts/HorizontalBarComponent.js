import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChartComponent = ({dataa}) => {


  // Transform sentiment data into chart data
  const labels = dataa.map(item => item.name);
  const positiveData = dataa.map(item => item.positive);
  const negativeData = dataa.map(item => item.negative);
  const neutralData = dataa.map(item => item.neutral);

  const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: positiveData,
        
        backgroundColor: '#7C3784',
        borderWidth: 1,
      },
      {
        label: 'Neutral',
        data: neutralData,
        backgroundColor: '#B7B7B7',
        // borderWidth: 1,
      },
      {
        label: 'Negative',
        data: negativeData,
        backgroundColor: '#bc7ac4',
        // borderWidth: 1,
      }
      
    ]
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // This makes the chart horizontal
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const datasetLabel = context.dataset.label || '';
            const value = context.raw;
            return `${datasetLabel}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
    <Bar
      data={data}
      options={options}
      />
    </>
  );
}

export default HorizontalBarChartComponent;
