import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUsersById } from "../../redux/actions/userActions";
import { Typography, ButtonGroup } from "@mui/material";
import GiftCards from "./Gift/GiftCards";
import DeleteUserAccount from "./DeleteUserAccount";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./User.css";

export default function ProfilePanel() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { userDetail } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersById(user._id));
  }, [user]);

  return (
    <div>
      <ButtonGroup
        variant="text"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/editprofile" className="navlink">
          <Button sx={{ paddingX: 5 }}>
            <ModeEditIcon sx={{ fill: "grey" }} />
            Edit
          </Button>
        </Link>
        <Link to="/codebox" className="navlink">
          <Button sx={{ paddingX: 5 }}>
            <RedeemOutlinedIcon sx={{ fill: "grey" }} /> Open Box
          </Button>
        </Link>
        <Link to="/orderhistory" className="navlink">
          <Button sx={{ paddingX: 5 }}>
            <HistoryOutlinedIcon sx={{ fill: "grey" }} /> History
          </Button>
        </Link>
        <DeleteUserAccount />
      </ButtonGroup>

      <PanelContainer>
        {userDetail ? (
          <Container>
            <UserInformation>
              <Typography variant="h4" component="div" gutterBottom>
                User information
              </Typography>
              <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  First name: {userDetail.first_name}
                </Typography>
              </ItemBox>
              <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Last name: {userDetail.last_name}
                </Typography>
              </ItemBox>
              <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Email: {userDetail.email}
                </Typography>
              </ItemBox>
              <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Phone: {userDetail.phone}
                </Typography>
              </ItemBox>
              <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Data birth:
                  {userDetail.dateBirth?.replace(/\D/, "-").slice(0, 10)}
                </Typography>
              </ItemBox>
            </UserInformation>
            <MyBoxes>
              <Typography variant="h4" component="div" textAlign="center">
                My Boxes
              </Typography>
              <GiftCards />
            </MyBoxes>
          </Container>
        ) : (
          "Null"
        )}
      </PanelContainer>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  padding-top: 2.5rem;
  justify-content: space-around;
  width: 100%;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  justify-content: center;
`;

const MyBoxes = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBox = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
  border-bottom: 2px solid rgb(187, 187, 187);
`;

const PanelContainer = styled.div`
  display: flex;
`;
