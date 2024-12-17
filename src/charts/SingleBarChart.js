// -------------------//Actual Code//------------------------//
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


export const SingleBarChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis
            type="number"
            tick={false}
            axisLine={{ stroke: "#ccc", strokeWidth: 0.5 }}
            tickFormatter={(value) => `value: ${value}`}
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#000", fontSize: "12px" }}
            width={80} // Adjust width as needed for label visibility
          />
          {/* Tooltip removed */}
          <Bar
            dataKey="value"
            fill="#bc7ac4"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

