import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StackedBarChart = () => {
  const labels = ['Label 1', 'Label 2', 'Label 3'];

  // Your data percentages for each label
  const dataSets = [
    [20, 40, 90], // Dataset 1
    [60, 20, 50], // Dataset 2
    [30, 80, 70], // Dataset 3
  ];

  // Function to dynamically assign colors with slight variations
  const getColor = (percentage, index) => {
    const baseColors = [
      'rgba(255, 99, 132, 0.8)', // red
      'rgba(255, 159, 64, 0.8)', // orange
      'rgba(75, 192, 192, 0.8)', // green
    ];
    
    if (percentage < 30) {
      return `rgba(255, 99, 132, ${0.8 - index * 0.1})`; // red with variation
    } else if (percentage < 70) {
      return `rgba(255, 159, 64, ${0.8 - index * 0.1})`; // orange with variation
    } else {
      return `rgba(75, 192, 192, ${0.8 - index * 0.1})`; // green with variation
    }
  };

  const datasets = dataSets.map((dataset, datasetIndex) => ({
    label: `Dataset ${datasetIndex + 1}`,
    data: dataset,
    backgroundColor: dataset.map((value, index) => getColor(value, index)),
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <div>
      <h3>Horizontal Stacked Bar Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
