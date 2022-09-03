import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUsersById } from "../../redux/actions/userActions";
import { Typography, ButtonGroup, Table, TableContainer, Paper, Divider, Box } from "@mui/material";
import GiftCards from "./Gift/GiftCards";
import DeleteUserAccount from "./DeleteUserAccount";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";


const Container = styled.div`
  padding: 2rem 3rem;
`;

const Icon = styled.div`
fill="#000000"
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;

const ImageDetailBox = styled.div``;
const InfoDetailBox = styled.div``;

const Imagen = styled.img`
  border: 1px solid black;
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
`;
const CardsProducts = styled.div`
  margin: 2rem 0;
`;
const ItemProduct = styled.div``;
const ItemBox = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
`;

export default function ProfilePanel() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { userDetail } = useSelector((state) => state.users);

  console.log(user);

  useEffect(() => {
    dispatch(getUsersById(user._id));
  }, [user]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    userDetail();
  };

    return (
    <div>
       
      <ButtonGroup
        variant="text" >
        <Button  href="/editprofile" sx={{ paddingX: 5 }}>        
          <ModeEditIcon sx={{ fill: "grey" }}/>
          Edit     
        </Button>
        <Button  href="codebox" sx={{ paddingX: 5 }}  >
          <RedeemOutlinedIcon sx={{ fill: "grey" }}/> Open Box
        </Button>
        <Button  href="/orderhistory" sx={{ paddingX: 5 }}>
          <HistoryOutlinedIcon sx={{ fill: "grey" }}/> History
        </Button>
        <DeleteUserAccount />
      </ButtonGroup>


      {userDetail ? (
        <Container fixed>
            <Table sx={{ minWidth: 650, alignContent:"center" }} size="small"  >
            <DetailBox >
              <InfoDetailBox sx={{ width: '100' }}>
                <Typography variant="h4" component="div" gutterBottom>
                  User information
                </Typography>
                <Divider  />
                <ItemBox >
                <Typography fontSize={18} component="div" gutterBottom>
                  First name: {userDetail.first_name}
                  </Typography>
                </ItemBox>
                <Divider  />
                <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Last name: {userDetail.last_name}
                  </Typography>
                </ItemBox>
                <Divider />
                <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Email: {userDetail.email}
                  </Typography>
                </ItemBox>
                <Divider />
                <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                  Phone: {userDetail.phone}
                  </Typography>
                </ItemBox>
                <Divider />
                <ItemBox>
                <Typography fontSize={18} component="div" gutterBottom>
                   Data birth: {userDetail.dateBirth?.replace(/\D/, "-").slice(0, 10)}
                   </Typography>
                </ItemBox>
                <Divider />
              </InfoDetailBox>
            </DetailBox>
          </Table>
          <CardsProducts>
            <Grid>
              <Box sx={{pl: 5, pt:5}}>
              <Typography variant="h4" component="div" textAlign="center"
              gutterBottom>
                My Boxes
              </Typography>
              <GiftCards />
              </Box>
            </Grid>
          </CardsProducts>

        </Container>
      ) : (
        "Null"
      )}
    </div>
  );
}
