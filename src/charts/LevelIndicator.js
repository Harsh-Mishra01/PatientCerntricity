import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const LevelIndicatorChart = () => {
  const data = {
    labels: [
      'Ozempic', 'Saxenda', 'Wegovy', 'Jardiance', 'Mounjaro', 'Janumet', 'Glucophage', 
      'Humalog', 'Novolog', 'Fiasp', 'Januvia', 'Invokana', 'Aspart', 'Evogliptin', 
      'Apidra', 'Victoza', 'Omarigliptin', 'Trulicity', 'Onglyza', 'Farxiga', 'Jentadueto', 
      'Levemir', 'Byetta', 'Steglatro', 'Fortamet', 'Nesina', 'Basaglar'
    ],
    datasets: [
      {
        label: 'Rating',
        data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5],
        backgroundColor: [
          'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple',
          'purple', 'purple', 'mediumorchid', 'mediumorchid', 'mediumorchid', 'mediumorchid',
          'mediumorchid', 'mediumorchid', 'mediumorchid', 'mediumorchid', 'mediumorchid',
          'mediumorchid', 'mediumorchid', 'mediumorchid', 'mediumorchid', 'mediumorchid', 
          'mediumorchid', 'gray', 'gray'
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: 'x',
    scales: {
      x: {
        grid: {
          display: false  // Remove grid lines on x-axis
        },
        title: {
          display: true,  // Show title on x-axis
          text: 'Brand Name',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 0
          }
        },
        ticks: {
          maxRotation: 45,  // Tilt the x-axis labels 45 degrees
          minRotation: 45,  // Ensure rotation is 45 degrees
          autoSkip: false,  // Ensure no labels are skipped
        }
      },
      y: {
        grid: {
          display: false  // Remove grid lines on y-axis
        },
        title: {
          display: true,  // Show title on y-axis
          text: 'Rating',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 0,
            bottom: 10
          }
        },
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 5,
          callback: function(value) {
            if (value === 15) return 'High';
            if (value === 10) return 'Medium';
            if (value === 5) return 'Low';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'end',
        formatter: (value) => {
          if (value === 15) return 'High';
          if (value === 10) return 'Medium';
          if (value === 5) return 'Low';
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
        }
      }
    }
  };

  // Custom Plugin to Draw Labels on Bars with 45-degree Rotation
  const ratingPlugin = {
    id: 'ratingPlugin',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
          const dataValue = dataset.data[index];
          let label = '';
          if (dataValue === 15) label = 'High';
          if (dataValue === 10) label = 'Medium';
          if (dataValue === 5) label = 'Low';
  
          ctx.save(); // Save the current context state
          ctx.translate(bar.x, bar.y - 10); // Translate to bar position with additional padding
          ctx.rotate(-Math.PI / 4); // Rotate by 45 degrees (clockwise)
  
          ctx.font = 'bold 14px Arial';
          ctx.fillStyle = '#000';
          ctx.textAlign = 'center';
          ctx.fillText(label, 0, 0); // Draw the rotated text
  
          ctx.restore(); // Restore the context to its original state
        });
      });
    }
  };
  

  return (
<><Card className="mt-4 mb-4">
<div>
  {/* <span className="chart-title mt-5">
    Most frequent topics
  </span> */}
  <h3 className="chart-title rt">Patient Centricity Score</h3>
  <div className="chart-container" style={{height:"90vh"}}>
      <Bar data={data} options={options} plugins={[ratingPlugin]} />
  </div>
</div>
</Card></>
    
  );
};

export default LevelIndicatorChart;

