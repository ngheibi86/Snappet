import "react-pro-sidebar/dist/css/styles.css";

import "./MyMenu.css";

import { useState } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";

//import icons from react icons
import { BiCog } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function MyMenu() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <div id="mymenu">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Home
              <Link to="/" />
            </MenuItem>

            <MenuItem icon={<FaList />}>
              General Report
              <Link to="/report" />
            </MenuItem>
            {/* 
           <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
          <MenuItem icon={<RiPencilLine />}>Author</MenuItem>  */}
            <MenuItem icon={<BiCog />}>Settings
            <Link to="/" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
