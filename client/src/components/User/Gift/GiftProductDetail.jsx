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
<<<<<<< HEAD
import URL from "../../../utils/backRoutes";
=======
import { URL } from "../../../utils/index";

>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
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

  const sendProductPicked = async (userId, productId) => {
    try {
<<<<<<< HEAD
      await axios.post(`${URL}/redeem/picked`,{
        userId:userId,
        productId:productId
      })
      navigate("/")

=======
      await axios.post(`${URL}/redeem/picked`, {
        userId: userId,
        productId: productId,
      });
      navigate("/");
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ m: 3 }}>
      <Box sx={{ pb: 5 }}>
        <Typography gutterBottom variant="h4" component="div">
          {detailProd.name}
        </Typography>
        <DetailProduct>
          <CardMedia
            component="img"
            height="240"
            image={detailProd.image && detailProd.image.url}
            alt="img not found"
          />
          <Card sx={{ p: 2 }}>
            <Button
              sx={{ ml: "7.5rem" }}
              className="clear-btn"
              variant="outlined"
              onClick={() => handlePick()}
            >
              Choose This Service
            </Button>
            <ItemProduct>
              <h2>About :</h2>
            </ItemProduct>
            <ItemProduct>
              <Typography gutterBottom fontSize={20}>
                {detailProd.description}
              </Typography>
            </ItemProduct>
            {/* <ItemProduct>
              <AttachMoneyIcon />
              <p> {detailProd.price}</p>
            </ItemProduct> */}

            <Typography
              sx={{ textDecoration: "underline" }}
              gutterBottom
              variant="h5"
              component="div"
              paddingTop={5}
            >
              Contact
            </Typography>
            <Typography gutterBottom fontSize={18} component="div">
              Service provided by: {detailProd?.Provider?.name}
            </Typography>
            <Typography gutterBottom fontSize={18} component="div">
              Phone: {detailProd?.Provider?.phone}
            </Typography>
            <Typography gutterBottom fontSize={18} component="div">
              Adress: {detailProd?.Provider?.address}
            </Typography>
            <ItemProduct>
              <PlaceIcon />
              <p>{detailProd.location}</p>
            </ItemProduct>
          </Card>
        </DetailProduct>
      </Box>
    </Container>
  );
}
