import "./DonutChart.css";
import { PieChart, Pie} from 'recharts';

const data = [
    {name: 'Geeksforgeeks', students: 400 },
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];

export default function DonutChart() {
  return (
    <div className="dchart">
    <h3 className="dchartTitle">Revenue Sources</h3>

<div className="dchartbody">
    <PieChart width={300} height={300}>
          <Pie data={data} dataKey="students" outerRadius={150} innerRadius={100} fill="green" />
    </PieChart>
    </div>

  </div>
  )
}
