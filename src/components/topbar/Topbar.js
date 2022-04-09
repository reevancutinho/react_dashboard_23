import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return (
  <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
              <span className="logo">😉 SB ADMIN</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNoneIcon/>
                  <span className="topIconBag">2</span>
              </div>
              <div className="topbarIconContainer">
                  <LanguageIcon/>
                  <span className="topIconBag">2</span>
              </div>
              <div className="topbarIconContainer">
                  <SettingsIcon/>
              </div>
              <img src="https://tse3.mm.bing.net/th?id=OIP.8Di5Xe-0ty58fzXIdk_2OQHaFj&pid=Api&P=0&w=222&h=167" alt="" className="topAvatar"/>
          </div>
      </div>
  </div>
  );
}
