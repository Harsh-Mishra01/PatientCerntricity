import { Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MostFrequentTopicsChart(){
    const data2 = [
        { name: "Medication Adherence and Side Effects", value: 74779 },
        { name: "Efficacy of Different Medications", value: 56635 },
        { name: "Medication Adherence Challenges", value: 43887 },
        { name: "Comparing Oral Medications and Insulin", value: 19027 },
        { name: "New and Emerging Treatments", value: 8142 },
        { name: "Cost and Accessibility of Medications", value: 4918 },
      ];
    return<><Card className="mt-4 mb-4">
    <div>
      {/* <span className="chart-title mt-5">
        Most frequent topics
      </span> */}
      <h3 className="chart-title rt">Most frequent topics</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data2} layout="vertical">
            <XAxis type="number" 
            axisLine={{ stroke: "#ccc", strokeWidth: 0.5 }}
            tick={false}/>
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "#666", fontSize: 13 }}
              width={200}
            />
            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat("en").format(value)
              }
            />
            <Bar dataKey="value" fill="#bc7ac4" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </Card></>
}