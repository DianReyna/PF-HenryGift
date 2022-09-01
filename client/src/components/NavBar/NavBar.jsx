import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  styled,
  alpha,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch } from "react-redux";
import { searchBox, getBoxesPerPage } from "../../redux/actions/boxesActions";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./NavBar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotals } from "../../redux/reducer/cartSlice";
import styles from "./NavBar.module.css";
import { queryName } from "../../redux/actions/queryActions";
import { logout, reset } from "../../redux/reducer/authSlice";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import { useContext } from "react";
import { ColorModeContext } from "../../utils/mode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const settings = [{txt: "Admin", route: "admin"}, {txt: "Profile", route: "userprofile"}];

const ResponsiveAppBar = () => {
  const { mode, toggleMode } = useContext(ColorModeContext);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  function handleInputChange(event) {
    event.preventDefault();
    if (
      event.target.value.trim().length >= 3 ||
      event.target.value.length === 0
    )
      dispatch(queryName(event.target.value));
  }

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        // background: "#E16428",
        boxShadow: "0",
        // borderBottom: "1px solid #e0e0e0",
        marginBottom: "2.5rem",
        background: "primary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                // background: 'red'
              }}
            >
              Henry-Gift
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page, i) => (
              <NavLink to={"/"} className={styles.navlink} key={i}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
            <NavLink to={"/userprofile"} className={styles.navlink}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {"Profile"}
              </Button>
            </NavLink>
            {user && user.is_Admin ? (
              <NavLink to={"/admin"} className={styles.navlink}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {"Admin"}
                </Button>
              </NavLink>
            ) : null} */}
          </Box>
        {/*   <Search className={styles.searchbar} onChange={handleInputChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          {/* //Login and LogOut */}
          {user ? (
            <Button onClick={onLogout}>Logout</Button>
          ) : (
            <Button variant="text">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Button>
          )}
          <Link to="/cart">
            <div className={styles.navBag}>
              <CardGiftcardIcon />
              <span className={styles.bagQuantity}>
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
          </Link>
          <Link to="/favs">
            <FavoriteOutlined sx={{ marginLeft: "0.5rem" }} />
          </Link>
          <IconButton sx={{ ml: 1 }} onClick={toggleMode}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <NavLink to={`/${setting.route}`} className={styles.navlink}>
                  <MenuItem key={setting.txt} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.txt}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
