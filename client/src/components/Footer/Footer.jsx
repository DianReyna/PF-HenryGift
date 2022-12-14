import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider, Grid, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useSelector } from "react-redux";

export const Footer = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="containerHenry">
          <Link to="/" underline="none" className="enlaces">
            <Typography
              variant="h3"
              sx={{ color: "white !Important", marginBottom: 2 }}
            >
              HenryGift
            </Typography>
          </Link>
          <a
            className="enalces"
            href="https://github.com/DianReyna/PF-HenryGift"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white !Important", fontSize: 30 }} />
          </a>
        </div>
        <div className="containerCopyright">
          <Typography variant="subtitle1">
            Made with <FavoriteIcon color="primary" sx={{ fontSize: 15 }} /> by
            Henry students
          </Typography>
          <Typography variant="body1">HenryGift 2022 ┬ęCopyright</Typography>
        </div>
        <div className="containerCreators">
          <Link to="/about" className="enlaces">
            <Typography variant="h6" sx={{ color: "white !Important" }}>
              About us{" "}
              <RocketLaunchIcon
                sx={{ fontSize: 20, color: "white !Important" }}
              />
            </Typography>
          </Link>
          {user == null ? (
            <Link to="/login" className="enlaces">
              <Typography variant="h6" sx={{ color: "white !Important" }}>
                Open my gift
              </Typography>
            </Link>
          ) : (
            <Link to="/codebox" className="enlaces">
              <Typography variant="h6" sx={{ color: "white !Important" }}>
                Open my gift
              </Typography>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
