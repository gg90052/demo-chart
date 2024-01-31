import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function StackChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="name" onClick={(e) => console.log(e)} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="left" height={50} />
        <Bar name="收入" dataKey="income" stackId="in" fill="#8884d8" />
        <Bar name="未收" dataKey="yetin" stackId="in" fill="#82ca9d" />
        <Bar name="支出" dataKey="outcome" stackId="out" fill="#ffc658" />
        <Bar name="未付" dataKey="yetout" stackId="out" fill="#c68858" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StackChart;
