import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import DonutChart from "../../components/donutchart/DonutChart";

export default function Home() {
  return (
    <div className="h-home">
      <div className="homeHedding">
       <span className="homeHedding-Title">Dashboard</span>
      </div>
    <div className="home">
      <FeaturedInfo />
      <div className="stats">
        <Chart className="left-stats" />
        <DonutChart className="right-stats" />
      </div>
    </div>
    </div>
  );
}
