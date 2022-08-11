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
import { NavLink } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import  "./NavBar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotals } from "../../redux/reducer/cartSlice";
import styles from './NavBar.module.css'
import { queryName } from '../../redux/actions/queryActions';

const pages = ['Home'];
const settings = ['Admin'];


const ResponsiveAppBar = () => {
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
    color: "inherit",
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
      if(event.target.value.trim().length>=3 || event.target.value.length === 0)
      dispatch(queryName(event.target.value));
    
  }

  useEffect(() => {
    dispatch(getTotals())
  } , [cart, dispatch])

  return (
    <AppBar position="static"  sx={{ background: 'transparent', boxShadow: '0' }} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters  >
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              // background: 'red'
            }}
          >
            Henry-Gift
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <NavLink to={"/"} className={styles.navlink} key={i}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Search className={styles.searchbar} onChange={handleInputChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          
          
          <Link to="/login" style={{textDecoration:"none", margin:5,color:"black"}}>
          <AccountBoxIcon/>
            My profile
          </Link>
        
          


          <Link to="/cart">
            <div className={styles.navBag}>
              <CardGiftcardIcon />
              <span className={styles.bagQuantity}>
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://c8.alamy.com/compes/2b3hrwb/plantilla-vectorial-de-diseno-de-logotipo-pf-con-letra-de-monograma-inicial-resumen-del-diseno-del-logotipo-de-la-letra-pf-2b3hrwb.jpg"
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <NavLink to={"/form"} className={styles.navlink} key={i}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
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
