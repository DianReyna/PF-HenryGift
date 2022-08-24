import React from "react";
import "./HomeAdmin.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdmin } from "../../../redux/actions/userActions";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";
import {
  Avatar,
  Box,
  Container,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import BestBoxes from "../BestBoxes/BestBoxes";
import UserBuy from "../UserBuy/UserBuy";
import {
  getBestBoxes,
  getSalesBox,
  getUsersBuy,
} from "../../../redux/actions/adminAction";

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
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={1}
        className="containerHeader"
      >
        <Grid item xs>
          <Container className="featuredbox">
            <DialogTitle className="featuredTitle">
              Users <PeopleAltIcon />
            </DialogTitle>
            <DialogContent className="featuredMoneyContainer">
              <DialogContentText
                sx={{ color: "white !Important" }}
                className="featuredMoney"
              >
                {itemsUser.users.length}
              </DialogContentText>
              <DialogContentText className="featuredMoneyRate">
                Registered
              </DialogContentText>
            </DialogContent>
          </Container>
        </Grid>
        <Grid item xs>
          <Container className="featuredbox">
            <DialogTitle className="featuredTitle">
              Orders <ReceiptIcon />
            </DialogTitle>
            <DialogContent className="featuredMoneyContainer">
              {salesBox.length === 0 ? (
                <DialogContentText
                  sx={{ color: "white !Important" }}
                  className="featuredMoney"
                >
                  0
                </DialogContentText>
              ) : (
                <DialogContentText
                  sx={{ color: "white !Important" }}
                  className="featuredMoney"
                >
                  {salesBox.orders.length}
                </DialogContentText>
              )}
              <DialogContentText className="featuredMoneyRate">
                Total
              </DialogContentText>
            </DialogContent>
          </Container>
        </Grid>
        <Grid item xs>
          <Container className="featuredbox">
            <DialogTitle className="featuredTitle">
              Sales <AttachMoneyIcon />
            </DialogTitle>
            <DialogContent className="featuredMoneyContainer">
              {salesBox.length === 0 || salesBox.sales.length === 0 ? (
                <DialogContentText
                  sx={{ color: "white !Important" }}
                  className="featuredMoney"
                >
                  0
                </DialogContentText>
              ) : (
                <DialogContentText
                  sx={{ color: "white !Important" }}
                  className="featuredMoney"
                >
                  {salesBox.sales[0].total}
                </DialogContentText>
              )}
              <DialogContentText className="featuredMoneyRate">
                Total
              </DialogContentText>
            </DialogContent>
          </Container>
        </Grid>
      </Grid>

      <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={5}>
        <Box gridColumn="span 11" className="dataUserBuy">
          <UserBuy props={usersBuy} />
        </Box>
        <Box gridColumn="span 5">
          <BestBoxes props={bestBoxes} />
        </Box>
      </Box>
    </Box>
  );
}
