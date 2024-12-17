import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  // Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [

];

const ColorIndicator = ({ color, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
    <div style={{ width: 10, height: 10, backgroundColor: color, marginRight: 5 }}></div>
    <span>{label}</span>
  </div>
);

export const DoubleBarChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
      <div style={{ display: 'flex', marginBottom: '3px', fontSize:"10px", marginLeft:"22px"}}>
        <ColorIndicator color="#bc7ac4" label="Negative" />
        <ColorIndicator color="#b431c4" label="Positive" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis 
            type="number" 
            axisLine={{ stroke: "#ccc", strokeWidth: 0.5 }} // Thinner gray line
            tick={false} // Hide tick values
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#000", fontSize: "12px" }}
            width={80} // Adjust width as needed for label visibility
          />
           {/* <Tooltip content={<CustomTooltip />} /> */}
          <Bar dataKey="value" fill="#bc7ac4" barSize={20} />
          <Bar dataKey="value2" fill="#b431c4" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const DoubleBarChart1 = () => (
  <DoubleBarChart data={data} title="Diabetes with Weightloss" />
);
export const DoubleBarChart2 = () => (
  <DoubleBarChart data={data} title="Diabetes" />
);
export const DoubleBarChart3 = () => (
  <DoubleBarChart data={data} title="Gliptins" />
);

