import React from 'react';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { Chart, Tooltip, Legend } from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';

// Register necessary elements
Chart.register(MatrixController, MatrixElement, Tooltip, Legend);

const BoxHeatMap = () => {
  const data = {
    datasets: [
      {
        label: 'Heatmap',
        data: [
          { x: 0, y: 0, v: 5 },
          { x: 1, y: 0, v: 10 },
          { x: 2, y: 0, v: 15 },
          { x: 0, y: 1, v: 20 },
          { x: 1, y: 1, v: 25 },
          { x: 2, y: 1, v: 30 },
          { x: 0, y: 2, v: 35 },
          { x: 1, y: 2, v: 40 },
          { x: 2, y: 2, v: 45 },
        ],
        backgroundColor(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex].v;
          const alpha = (value - 5) / 40;
          return `rgba(255, 99, 132, ${alpha})`;
        },
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        width: () => 50,
        height: () => 50,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: () => '',
          label: (ctx) => `Value: ${ctx.raw.v}`,
        },
      },
    },
  };

  return <ReactChart type="matrix" data={data} options={options} />;
};

export default BoxHeatMap;
