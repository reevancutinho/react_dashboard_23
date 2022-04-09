import "./Sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
