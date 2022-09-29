import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Avatar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotals } from "../../redux/reducer/cartSlice";
import { logout, reset } from "../../redux/reducer/authSlice";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import { useContext } from "react";
import { ColorModeContext } from "../../utils/mode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RedeemIcon from "@mui/icons-material/Redeem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logout from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavMobile from "./NavMobile";
import { useState } from "react";

const ResponsiveAppBar = () => {
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
    <AppBar className="topbar" position="static">
      <div className="topbarwraper">
        <div className="topLeft">
          <div>
            <Link to="/" className="navlink">
              <Typography variant="h4" className="logo" sx={{ color: "white" }}>
                HenryGift
              </Typography>
            </Link>
          </div>
          <div className="containerAcces">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/about" className="navlink">
                <Button sx={{ color: "white" }}>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: 1, color: "white" }}
                  >
                    About
                  </Typography>
                </Button>
              </Link>
            </Box>
            {user == null ? (
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Link to="/login" className="navlink">
                  <Button sx={{ color: "white" }} textalign="center">
                    <RedeemIcon fontSize="small" sx={{ marginRight: 1 }} />
                    <Typography variant="body2">Open my Box</Typography>
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Link to="/codebox" className="navlink">
                  <Button sx={{ color: "white" }} textalign="center">
                    <RedeemIcon fontSize="small" sx={{ marginRight: 1 }} />
                    <Typography variant="body2">Open my Box</Typography>
                  </Button>
                </Link>
              </Box>
            )}
          </div>
        </div>
        <div className="containerappUser">
          <div className="countUser">
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
          </div>
          {user == null ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textalign: "center",
              }}
            >
              <NavLink to={`/login`} className="navlink">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 24, height: 24, marginRight: 1 }}
                    color="text.primary"
                  >
                    <PersonIcon />
                  </Avatar>
                  <Typography sx={{ color: "white" }}>My profile</Typography>
                  <Typography sx={{ marginTop: 1, color: "white" }}>
                    <KeyboardArrowDownIcon />
                  </Typography>
                </IconButton>
              </NavLink>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textalign: "center",
                }}
              >
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, color: "white" }}
                >
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

                  <Typography sx={{ color: "white" }}>
                    {user && user.first_name}
                  </Typography>
                  <Typography sx={{ marginTop: 1, color: "white" }}>
                    <KeyboardArrowDownIcon />
                  </Typography>
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
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
                  <MenuItem></MenuItem>
                )}
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
                <MenuItem key={"Login"} onClick={handleClose}>
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
              </Menu>
            </>
          )}
          <div>
            <IconButton sx={{ ml: 1, marginTop: 1 }} onClick={toggleMode}>
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
        </div>
      </div>
      <NavMobile className="topbarMobile" />
    </AppBar>
  );
};
export default ResponsiveAppBar;
