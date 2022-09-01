import React from "react";
import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";

export default function Widget(props) {
  let icon;
  if (props.icon == "person") {
    icon = <PersonRoundedIcon className="icon" />;
  } else if (props.icon == "money") {
    icon = <AttachMoneyRoundedIcon className="icon" />;
  } else if (props.icon == "order") {
    icon = <ReceiptRoundedIcon className="icon" />;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.name}</span>
        <span className="counter">{props.amount}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {props.porcentaje}%
        </div>
        {icon}
      </div>
    </div>
  );
}
