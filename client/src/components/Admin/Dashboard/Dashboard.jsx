import React from "react";
import "./dashboard.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/home"
              >
                <li className="sidebarListItem">Home</li>
              </NavLink>
              <li className="sidebarListItem">Analytics</li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/boxes"
              >
                <li className="sidebarListItem">Boxes</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/products"
              >
                <li className="sidebarListItem">Products</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/providers"
              >
                <li className="sidebarListItem">Providers</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/users"
              >
                <li className="sidebarListItem">Users</li>
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
