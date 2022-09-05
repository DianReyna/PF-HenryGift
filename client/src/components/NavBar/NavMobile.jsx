import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getTotals } from "../../redux/reducer/cartSlice";
import { logout, reset } from "../../redux/reducer/authSlice";
import { ColorModeContext } from "../../utils/mode";
import {
  Box,
  Avatar,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import "./NavBar.css";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logout from "@mui/icons-material/Logout";
import RedeemIcon from "@mui/icons-material/Redeem";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode, toggleMode } = useContext(ColorModeContext);

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="containerMobile">
      <div className="containerLogo">
        <Link to="/" className="navlink">
          <Typography variant="h4" className="logo" sx={{ color: "white" }}>
            HenryGift
          </Typography>
        </Link>
      </div>
      <div className="containerAllMenu">
        <div className="containerInfo">
          {user == null ? (
            <Link to="/login" className="navlink">
              <Button sx={{ color: "white" }} textalign="center">
                <RedeemIcon fontSize="small" sx={{ marginRight: 1 }} />
                <Typography variant="body2">Open my Box</Typography>
              </Button>
            </Link>
          ) : (
            <Link to="/codebox" className="navlink">
              <Button sx={{ color: "white" }} textalign="center">
                <RedeemIcon fontSize="small" sx={{ marginRight: 1 }} />
                <Typography variant="body2">Open</Typography>
              </Button>
            </Link>
          )}
          <Link to="/about" className="navlink">
            <Button sx={{ color: "white" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                About
              </Typography>
            </Button>
          </Link>
          <IconButton onClick={toggleMode}>
            {mode === "dark" ? (
              <Typography color="white">
                <Brightness7Icon />
              </Typography>
            ) : (
              <Typography color="white">
                <Brightness4Icon />
              </Typography>
            )}
          </IconButton>
        </div>
        <div className="containerItemMenu">
          <div className="favIcon">
            <Link to="/favs" className="navlink">
              <Typography color="text.primary">
                <FavoriteOutlined
                  sx={{ marginLeft: "0.5rem", color: "white" }}
                />
              </Typography>
            </Link>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Link to="/cart" className="navlink">
                <Typography sx={{ color: "white" }}>
                  <ShoppingCartIcon />
                </Typography>
                <Typography variant="caption text" className="topIconBag">
                  {cartTotalQuantity}
                </Typography>
              </Link>
            </div>
          </div>
          <div className="ContainerMenu">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon sx={{ fontSize: 30, color: "white" }} />
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
              <MenuItem>
                {user == null ? (
                  <NavLink to={`/login`} className="navlink">
                    <IconButton onClick={handleClick} size="small">
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                        color="text.primary"
                      >
                        <PersonIcon />
                      </Avatar>
                      <Typography>My profile</Typography>
                    </IconButton>
                  </NavLink>
                ) : (
                  <IconButton onClick={handleClick} size="small">
                    <Avatar
                      alt="Remy Sharp"
                      sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                        color: "white",
                      }}
                    >
                      <PersonIcon />
                    </Avatar>
                    <Typography>{user && user.first_name}</Typography>
                  </IconButton>
                )}
              </MenuItem>
              {user && user.is_Admin == true ? (
                <MenuItem onClick={handleClose}>
                  <NavLink to={"/admin"} className="navlink">
                    <Typography color="text.primary" textalign="center">
                      <ListItemIcon>
                        <AdminPanelSettingsIcon fontSize="small" />
                      </ListItemIcon>
                      Admin
                    </Typography>
                  </NavLink>
                </MenuItem>
              ) : (
                <Box display="none">
                  <MenuItem></MenuItem>
                </Box>
              )}

              {user == null ? (
                <Box display="none">
                  <MenuItem></MenuItem>
                </Box>
              ) : (
                <MenuItem onClick={handleClose}>
                  <NavLink to={`/userprofile`} className="navlink">
                    <Typography color="text.primary" textalign="center">
                      <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </Typography>
                  </NavLink>
                </MenuItem>
              )}
              {user == null ? (
                <Box display="none">
                  <MenuItem></MenuItem>
                </Box>
              ) : (
                <MenuItem onClick={handleClose}>
                  <NavLink to={`/`} className="navlink">
                    <Typography
                      color="text.primary"
                      onClick={onLogout}
                      textalign="center"
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </Typography>
                  </NavLink>
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
