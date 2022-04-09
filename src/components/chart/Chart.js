import "./Chart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [{ name: "Jan", uv: 0, pv: 2400, amt: 2400 },
{ name: "Mar", uv: 50, pv: 2400, amt: 2400 },
{ name: "May", uv: 150, pv: 2400, amt: 2400 },
{ name: "Jul", uv: 100, pv: 2400, amt: 2400 },
{ name: "Sep", uv: 250, pv: 2400, amt: 2400 },
{ name: "Nov", uv: 200, pv: 2400, amt: 2400 }];

export default function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Earnings Overview</h3>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
