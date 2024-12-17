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
  { name: "Humalog", value: 12, value2: 15 },
  { name: "Ozempic", value: 10, value2: 12 },
  { name: "Novolog", value: 8, value2: 10 },
  { name: "Byetta", value: 7, value2: 9 },
  { name: "Victoza", value: 6, value2: 7 },
  { name: "Trulicity", value: 4, value2: 6 },
  { name: "Diabeta", value: 3, value2: 4 },
  { name: "Apidra", value: 3, value2: 4 },
  { name: "Asparat", value: 3, value2: 3 },
  { name: "Fiasp", value: 3, value2: 3 },
];

const DoubleBarChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
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

