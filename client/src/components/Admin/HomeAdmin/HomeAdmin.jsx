import React from "react";
import "./HomeAdmin.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdmin } from "../../../redux/actions/userActions";
import {
  getBestBoxes,
  getSalesBox,
  getUsersBuy,
} from "../../../redux/actions/adminAction";
import BestBoxes from "../BestBoxes/BestBoxes";
import Widget from "./Widget/Widget";
import UserBuy from "../UserBuy/UserBuy";
import { Box } from "@mui/material";

export default function HomeAdmin() {
  const dispatch = useDispatch();
  const itemsUser = useSelector((state) => state.users);
  const { bestBoxes } = useSelector((state) => state.bestBoxes);
  const usersBuy = useSelector((state) => state.userBuy);
  const { salesBox } = useSelector((state) => state.salesBox);

  useEffect(() => {
    dispatch(getUsersBuy());
    dispatch(getBestBoxes());
    dispatch(getSalesBox());
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return (
    <Box className="containerAdmin">
      <div className="box">
        <Widget
          name={"Users"}
          amount={itemsUser.users.length}
          porcentaje={20}
          icon={"person"}
        />
        {salesBox.length === 0 ? (
          <Widget name={"Orders"} amount={0} porcentaje={0} icon={"order"} />
        ) : (
          <Widget
            name={"Orders"}
            amount={salesBox.orders.length}
            porcentaje={20}
            icon={"order"}
          />
        )}
        {salesBox.length === 0 || salesBox.sales.length === 0 ? (
          <Widget name={"Sales"} amount={0} porcentaje={0} icon={"money"} />
        ) : (
          <Widget
            name={"Sales"}
            amount={salesBox.sales[0].total}
            porcentaje={20}
            icon={"money"}
          />
        )}
      </div>
      <div className="containerGrid">
        <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={5}>
          <Box gridColumn="span 11" className="dataUserBuy">
            <UserBuy props={usersBuy} />
          </Box>
          <Box gridColumn="span 5">
            <BestBoxes props={bestBoxes} />
          </Box>
        </Box>
      </div>
      <div className="containerGridMobile">
        <Box display="grid" gridTemplateColumns="repeat( 1fr, 2)" gap={6}>
          <Box gridColumn="span 1" className="dataUserBuy">
            <UserBuy props={usersBuy} />
          </Box>
          <Box gridColumn="span 1">
            <BestBoxes props={bestBoxes} />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
