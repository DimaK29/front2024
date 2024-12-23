import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ShoppingListDetail({ shoppingList }) {
  const solvedCount = shoppingList.items.filter((item) => item.resolved).length;
  const unsolvedCount = shoppingList.items.length - solvedCount;

  const data = [
    { name: "Solved", value: solvedCount },
    { name: "Unsolved", value: unsolvedCount },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div>
      <h2>{shoppingList.name}</h2>
      <h3>Statistics</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ShoppingListDetail;
