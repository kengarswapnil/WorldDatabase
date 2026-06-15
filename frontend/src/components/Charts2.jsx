import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#00E396"
];

const Charts2 = ({ data }) => {
  return (
    <div style={{
      width: "500px",
      height: "350px",
      background: "#fff",
      padding: "20px",
      borderRadius: "10px"
    }}>
      
      <PieChart className="mt-4" width={400} height={300}>
        <Pie
          data={data}
          dataKey="totalPopulation"
          nameKey="continent"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]} 
              stroke="#fff" 
              strokeWidth={2}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

    </div>
  );
};

export default Charts2;