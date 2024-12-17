// -------------------//Actual Code//------------------------//
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Humalog", value: 1157 },
  { name: "Novolog", value: 789 },
  { name: "Ozempic", value: 727 },
  { name: "Diabeta", value: 512 },
  { name: "Victoza", value: 396 },
  { name: "Apidra", value: 297 },
  { name: "Byetta", value: 265 },
  { name: "Trulicity", value: 234 },
  { name: "Asparat", value: 91 },
  { name: "Fiasp", value: 73 },
];
const data2 = [
  { name: "Glucophage", value: 5838 },
  { name: "Levemir", value: 618 },
  { name: "Glimepride", value: 445 },
  { name: "Actos", value: 437 },
  { name: "Jardiance", value: 239 },
  { name: "Invokana", value: 202 },
  { name: "Basalgar", value: 121 },
  { name: "Glyburide", value: 109 },
  { name: "Glimpepiride", value: 101 },
  { name: "Amaryl", value: 80 },
];
const data3 = [
  { name: "Januvia", value: 357 },
  { name: "Janumet", value: 67 },
  { name: "Oseni", value: 52 },
  { name: "Pioglitazone", value: 49 },
  { name: "Nesina", value: 47 },
  { name: "Jentadueto", value: 27 },
  { name: "Tradjenta", value: 22 },
  { name: "Onglyza", value: 20 },
  { name: "Evogliptin", value: 17 },
  { name: "Omarigliptin", value: 12 },
];

const DiabetesDrugsChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis
            type="number"
            tick={false}
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

export const DiabetesDrugsChart1 = () => (
  <DiabetesDrugsChart data={data} title="Diabetes with Weightloss" />
);
export const DiabetesDrugsChart2 = () => (
  <DiabetesDrugsChart data={data2} title="Diabetes" />
);
export const DiabetesDrugsChart3 = () => (
  <DiabetesDrugsChart data={data3} title="Gliptins" />
);
