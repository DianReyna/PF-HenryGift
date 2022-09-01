import { Avatar, Typography } from "@mui/material";
import React from "react";
import "./CartTeam.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function CartTeam(props) {
  return (
    <>
      <div class="card">
        <Avatar
          alt="Remy Sharp"
          src={props.img}
          sx={{ width: 80, height: 80 }}
        />
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="subtitle1" class="card__content">
          {props.country}
        </Typography>
        <div class="card__form">
          <a
            className="link"
            href={props.git}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography color="text.primary">
              <GitHubIcon />
            </Typography>
          </a>
          <a
            className="link"
            href={props.linked}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography color="text.primary">
              <LinkedInIcon />
            </Typography>
          </a>
        </div>
      </div>
    </>
  );
}
