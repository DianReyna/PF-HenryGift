import React from "react";
import "./dashboard.css";
import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TocIcon from "@mui/icons-material/Toc";
export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin"
              >
                <li className="sidebarListItem">
                  <HomeIcon className="sidebarIcon" />
                  Home
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/analytics"
              >
                <li className="sidebarListItem">
                  <TocIcon className="sidebarIcon" />
                  Analytics
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/boxes"
              >
                <li className="sidebarListItem">
                  <CardGiftcardIcon className="sidebarIcon" />
                  Boxes
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/products"
              >
                <li className="sidebarListItem">
                  <InventoryIcon className="sidebarIcon" />
                  Products
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/providers"
              >
                <li className="sidebarListItem">
                  <ContactMailIcon className="sidebarIcon" />
                  Providers
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/categories"
              >
                <li className="sidebarListItem">
                  <CategoryIcon className="sidebarIcon" />
                  Categories
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/users"
              >
                <li className="sidebarListItem">
                  <PeopleAltIcon className="sidebarIcon" />
                  Users
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
