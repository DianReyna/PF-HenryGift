import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../../redux/actions/boxesActions";
import styled from "styled-components";
import {
  Container,
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailProduct = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;
const ItemProduct = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
`;

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { idProduct } = useParams();
  const { detailProd } = useSelector((state) => state.boxes);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(detailProduct(idProduct));
  }, [dispatch, idProduct]);

  const handlePick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't reverse this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, i want this experience!",
    }).then((result) => {
      if (result.isConfirmed) {
        sendProductPicked(user._id, idProduct);
        Swal.fire(
          "Experience picked!",
          "You will be recieving an email with the next steps to follow.",
          "success"
        );
      }
    });
  };
  // const URL = " https://henrygift-api.herokuapp.com";
  const URL = "http://localhost:3001";

  const sendProductPicked = async (userId, productId) => {
    try {
      await axios.post(`${URL}/redeem/picked`, {
        userId: userId,
        productId: productId,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ m: 3 }} display={"flex"}>
      <Box>
        <Typography gutterBottom variant="h4" component="div">
          {detailProd.name}
        </Typography>
        <DetailProduct>
          <CardMedia
            component="img"
            height="240"
            image={detailProd.image}
            alt="img not found"
          />
          <Card sx={{ p: 2 }}>
            <ItemProduct>
              <h2>About :</h2>
            </ItemProduct>
            <ItemProduct>
              <p>{detailProd.description}</p>
            </ItemProduct>
            <ItemProduct>
              <AttachMoneyIcon />
              <p> {detailProd.price}</p>
            </ItemProduct>
            <ItemProduct>
              <PlaceIcon />
              <p>{detailProd.location}</p>
            </ItemProduct>
          </Card>
        </DetailProduct>
      </Box>
      <Button
        sx={{ ml: "60%", mt: 5, position: "absolute" }}
        className="clear-btn"
        variant="outlined"
        onClick={() => handlePick()}
      >
        Choose This Service
      </Button>
      <Box sx={{ my: 2 }}>
        <Typography
          sx={{ textDecoration: "underline" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Contact
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Service provided by :
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {detailProd?.Provider?.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Phone :
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {detailProd?.Provider?.phone}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Adress:
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {detailProd?.Provider?.address}
        </Typography>
      </Box>
    </Container>
  );
}
