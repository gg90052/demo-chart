import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
function RadialChart({ data, fill = "#8884d8" }) {
  const { name, value, all } = { ...data };
  const percent = ((Number(value) / Number(all)) * 100).toFixed(0);
  const chartData = [
    {
      name,
      value: percent,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        startAngle={-270}
        endAngle={90}
        innerRadius="80%"
        outerRadius="100%"
        barSize={20}
        data={chartData}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={15}
          label={{
            position: "center",
            fill: "#000",
            fontSize: "14px",
            formatter: (text) => `${text}%`,
          }}
          background
          clockWise
          fill={fill}
          dataKey="value"
        ></RadialBar>
        {/* <Legend iconSize={10} layout="vertical" verticalAlign="bottom" /> */}
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadialChart;
