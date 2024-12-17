import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ValuesChart = ({ data }) => {
  const { title, subtitle, chartData, comment } = data;

  // Calculate remaining value dynamically based on a maximum value
  const max = 10;
  const processedData = chartData.map(item => ({
    ...item,
    // remaining: max - item.value
    remaining: max - item.value
  }));

  return (
    <div className="container" style={{ borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <p style={{ fontSize: '13px', color: 'grey' }}>{title}</p>
      <p style={{ color: "#7A3E96", fontSize: "15px" }}>{subtitle}</p>
      <p style={{ border: '2px solid #e1e3e6', margin: '10px 0' }}></p>

      {/* Horizontal Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={processedData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          {/* Background gray bar representing remaining value */}
          <Bar dataKey="value" fill="#7A3E96" barSize={8} radius={[10, 10, 10, 10]} stackId={1}/>
          <Bar dataKey="remaining" fill="#e1e3e6" barSize={8} radius={[10, 10, 10, 10]} stackId={1}/>
          {/* Foreground purple bar representing actual value */}
        </BarChart>
      </ResponsiveContainer>

      {/* Text box at the bottom */}
      <div className="p-3 mt-3" style={{ backgroundColor: '#e1e3e6', borderRadius: '8px' }}>
        <p className="m-0" style={{ color: '#7A3E96' }}>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ValuesChart;
