// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary Chart.js components
// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const TrialStackChart = ({ details }) => {
//   const { title, subtitle, comment } = details;

//   const data = {
//     labels: ["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Glucophage", "Janumet"],
//     datasets: [
//       {
//         label: "Positive",
//         data: [61.9, 41.5, 55.2, 46.3, 27.7, 46.4, 57.3],
//         borderWidth: 0,
//         backgroundColor: "#7a3e96",
//         borderRadius: 10,
//         barThickness: 10,
//         maxBarThickness: 15,
//       },
//       {
//         label: "Neutral",
//         data: [26.7, 33.8, 27.6, 10.9, 42.6, 28.6, 18.4],
//         borderWidth: 0,
//         backgroundColor: "#e1e3e6",
//         borderRadius: 10,
//         barThickness: 10,
//         maxBarThickness: 15,
//       },
//       {
//         label: "Negative",
//         data: [11.4, 24.6, 17.2, 42.9, 29.7, 25.0, 24.3],
//         borderWidth: 0,
//         backgroundColor: "#c9b0de",
//         borderRadius: 10,
//         barThickness: 10,
//         maxBarThickness: 15,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     indexAxis: "y", // Change the chart orientation to horizontal
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: false,
//       },
//       tooltip: {
//         enabled: false, // Disable tooltips
//     },
//     },
//     scales: {
//       x: {
//         stacked: true,
//         grid: {
//           drawBorder: false,
//           display: false,
//         },
//         ticks: {
//           display: false, // Hide x-axis labels
//       },
//       },
//       y: {
//         stacked: true,
//         ticks: {
//           autoSkip: false,
//         },
//         grid: {
//           drawBorder: false,
//           display: false,
//         },
        
//       },
//     },
//   };

//   return (
//     <div className="container" style={{ borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
//       <p style={{ fontSize: '13px', color: 'grey' }}>{title}</p>
//       <p style={{ color: "#7A3E96", fontSize: "15px" }}>{subtitle}</p>
//       <div style={{ width: '100%' }}>
//         <Bar data={data} options={options} height={300} width={null} />
//       </div>
//       <div className="p-3 mt-3" style={{ backgroundColor: '#e1e3e6', borderRadius: '8px' }}>
//         <p className="m-0" style={{ color: '#7A3E96' }}>
//           {comment}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TrialStackChart;
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const TrialStackChart = ({ details }) => {
  const { title, subtitle, comment, chartData, dataSets } = details;

  // Extract labels from chartData
  const labels = chartData.map((item) => item.name);

  // Build the data object dynamically using props
  const data = {
    labels,
    datasets: dataSets.map((dataset) => ({
      ...dataset, // Spread existing properties
    })),
  };

  const options = {
    responsive: true,
    indexAxis: "y", // Change the chart orientation to horizontal
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        stacked: true,
        ticks: {
          autoSkip: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  return (
    <div className="container" style={{ borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <p style={{ fontSize: '13px', color: 'grey' }}>{title}</p>
      <p style={{ color: "#7A3E96", fontSize: "15px" }}>{subtitle}</p>
      <div style={{ width: '100%' }}>
        <Bar data={data} options={options} height={300} width={null} />
      </div>
      <div className="p-3 mt-3" style={{ backgroundColor: '#e1e3e6', borderRadius: '8px' }}>
        <p className="m-0" style={{ color: '#7A3E96' }}>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TrialStackChart;
