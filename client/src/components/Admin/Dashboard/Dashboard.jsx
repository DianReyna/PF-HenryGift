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
import { Button, Menu, MenuItem, Typography } from "@mui/material";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dashboardContainer">
      <div className="dashboardMenu">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <HomeIcon className="sidebarIcon" />
                Home
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/analytics"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <TocIcon className="sidebarIcon" />
                Analytics
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/boxes"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <CardGiftcardIcon className="sidebarIcon" />
                Boxes
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/products"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <InventoryIcon className="sidebarIcon" />
                Products
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/providers"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <ContactMailIcon className="sidebarIcon" />
                Providers
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/categories"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <CategoryIcon className="sidebarIcon" />
                Categories
              </Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            id="NavLink"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/users"
          >
            <MenuItem onClick={handleClose}>
              <Typography
                className="sidebarListItem"
                variant="h6"
                color="text.primary"
              >
                <PeopleAltIcon className="sidebarIcon" />
                Users
              </Typography>
            </MenuItem>
          </NavLink>
        </Menu>
      </div>

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
                color="inherit"
                to="/admin"
              >
                <li>
                  <Typography
                    variant="h6"
                    className="sidebarListItem"
                    color="text.primary"
                  >
                    <HomeIcon className="sidebarIcon" />
                    Home
                  </Typography>
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/analytics"
              >
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <TocIcon className="sidebarIcon" />
                    Analytics
                  </Typography>
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
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <CardGiftcardIcon className="sidebarIcon" />
                    Boxes
                  </Typography>
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/products"
              >
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <InventoryIcon className="sidebarIcon" />
                    Products
                  </Typography>
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/providers"
              >
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <ContactMailIcon className="sidebarIcon" />
                    Providers
                  </Typography>
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/categories"
              >
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <CategoryIcon className="sidebarIcon" />
                    Categories
                  </Typography>
                </li>
              </NavLink>
              <NavLink
                id="NavLink"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/admin/users"
              >
                <li>
                  <Typography
                    className="sidebarListItem"
                    variant="h6"
                    color="text.primary"
                  >
                    <PeopleAltIcon className="sidebarIcon" />
                    Users
                  </Typography>
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
