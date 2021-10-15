import {
    LineChart,
    Line,
    CartesianGrid,
    YAxis,
    XAxis,
  } from "recharts";
export default function Lines(props) {
  return (
    <LineChart width={350} height={300} data={props.data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}
