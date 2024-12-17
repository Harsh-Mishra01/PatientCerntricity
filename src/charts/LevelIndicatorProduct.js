import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const ProductChart = () => {
  const data = {
    labels : [
      'Ozempic', 'Saxenda', 'Wegovy', 'Jardiance', 'Mounjaro', 'Janumet', 'Glucophage', 
      'Humalog', 'Novolog', 'Fiasp', 'Januvia', 'Invokana', 'Aspart', 'Evogliptin', 
      'Apidra', 'Victoza', 'Omarigliptin', 'Trulicity', 'Onglyza', 'Farxiga', 'Jentadueto', 
      'Levemir', 'Byetta', 'Steglatro', 'Fortamet', 'Nesina', 'Basaglar'
    ],
    datasets: [
      {
        label: '',
        data: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4],
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
    indexAxis: 'y', // Change index axis to 'y' for horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false  // Remove grid lines on x-axis
        },
        title: {
          display: true,  // Show title on x-axis
          text: '',
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
          stepSize: 5,
          callback: function(value) {
            if (value === 12) return 'High';
            if (value === 8) return 'Medium';
            if (value === 4) return 'Low';
          }
        }
      },
      y: {
        grid: {
          display: false  // Remove grid lines on y-axis
        },
        title: {
          display: true,  // Show title on y-axis
          text: '',
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
        ticks: {
          autoSkip: false,  // Ensure no labels are skipped
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
          if (value === 12) return 'High';
          if (value === 8) return 'Medium';
          if (value === 4) return 'Low';
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
          if (dataValue === 12) label = '';
          if (dataValue === 8) label = '';
          if (dataValue === 4) label = '';

          ctx.save(); // Save the current context state
          ctx.translate(bar.x + 10, bar.y); // Translate to bar position with additional padding
          ctx.rotate(Math.PI + Math.PI); // Rotate by 180 degrees (horizontal flip)

          ctx.font = 'bold 14px Arial';
          ctx.fillStyle = '#000';
          ctx.textAlign = 'left';
          ctx.fillText(label, 0, 0); // Draw the rotated text

          ctx.restore(); // Restore the context to its original state
        });
      });
    }
  };

  return (
    <Container fluid className="p-0 mt-4">
      <Card className="w-100">
        <Card.Body className="p-0">
          <h3 className="chart-title mb-3 mt-3 ml-2">{`Patient Centricity (Product)- High, Medium, Low`}</h3>
          <div className="chart-container" style={{ width: '100%', height: 'calc(100vh - 80px)' }}>
            <Bar data={data} options={options} plugins={[ratingPlugin]} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductChart;
