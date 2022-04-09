import "./FeaturedInfo.css";
import SavingsIcon from "@mui/icons-material/Savings";
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingIcon from '@mui/icons-material/Pending';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
          <div  className="infocolor"></div>
        <div>
          <span className="featuredTitle A">EARNINGS (MONTHLY)</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$40,000</span>
          </div>
        </div>
        <div className="cardimage">
          <SavingsIcon className="imagecard" />
        </div>
      </div>

      <div className="featuredItem">
      <div  className="infocolor1"></div>
          <div>
        <span className="featuredTitle B">EARNINGS (ANNUAL)</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$215,000</span>
          {/* <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className="featuredIcon negative"/></span> */}
        </div>
        </div>
        <div className="cardimage">
          <PaidIcon className="imagecard" />
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>

      <div className="featuredItem">
      <div  className="infocolor2"></div>
          <div>
        <span className="featuredTitle C">TASKS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50%</span>
          {/* <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className="featuredIcon"/></span> */}
        </div>
        </div>
        <div className="cardimage">
          <AssignmentIcon className="imagecard" />
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>

      <div className="featuredItem">
      <div  className="infocolor3"></div>
          <div>
        <span className="featuredTitle D">PENDING REQUESTS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">18</span>
          {/* <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className="featuredIcon"/></span> */}
        </div>
        </div>
        <div className="cardimage">
          <PendingIcon className="imagecard" />
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
    </div>
  );
}
