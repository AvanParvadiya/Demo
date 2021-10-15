import {
  CartesianGrid,
  YAxis,
  XAxis,
  BarChart,
  Tooltip,
  Bar,
  Legend,
} from "recharts";

export default function BarCharts(props) {
  return (
    <BarChart width={350} height={250} data={props.data} className="col-md-12">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};
