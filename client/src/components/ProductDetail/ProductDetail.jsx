import React, { useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {detailProduct } from "../../redux/actions/boxesActions";
import styled from 'styled-components';
import { Container,Box,Card,CardMedia,Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlaceIcon from '@mui/icons-material/Place'; 

const DetailProduct = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr;
gap: 2rem;
`
const ItemProduct = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
  `
export default function ProductDetail() {
    const dispatch=useDispatch();
    const {idProduct} = useParams()
    const {detailProd} = useSelector((state) => state.boxes)
    useEffect(() => {
      dispatch(detailProduct(idProduct))
    }, [dispatch,idProduct])
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
        alt='img not found'
        />
            <Card sx={{ p: 2 }}>
              <ItemProduct>
                <h2>About :</h2>
              </ItemProduct>
              <ItemProduct>
              <p>{detailProd.description}</p>
              </ItemProduct>
              <ItemProduct>
               <AttachMoneyIcon/>
                <p> {detailProd.price}</p>
              </ItemProduct>
              <ItemProduct>
                 <PlaceIcon/>
              <p>{detailProd.location}</p>
              </ItemProduct>
            </Card>
          </DetailProduct>
        </Box>
        <Box sx={{ my: 5 }}>
             <ItemProduct>
                <h2>Contact</h2>
                </ItemProduct>
                <ItemProduct>
                <h3>Service provided by : </h3>
                <p>{detailProd?.Provider?.name}</p>
                </ItemProduct>
                <ItemProduct>
                <h3>Phone: </h3>
                <p>{detailProd?.Provider?.phone}</p>
                </ItemProduct>
                <ItemProduct>
                <h3>Adress: </h3>
                <p>{detailProd?.Provider?.address}</p>
                </ItemProduct>
        </Box>
      </Container>
    )
  }
  
  