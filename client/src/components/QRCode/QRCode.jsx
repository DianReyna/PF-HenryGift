import React, { useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { qrInformation } from "../../redux/actions/qrActions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, Box, Card, CardMedia, Typography } from "@mui/material";

const DetailProduct = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;
const ItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  align-items: center;
  h3{
    margin-top:0;
    margin-bottom:0
  }
`;

const QRCode = () => {

  const dispatch = useDispatch()
  const { information } = useSelector((state) => state.qr);
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams])

  useEffect(()=>{
    dispatch(qrInformation(query.user,query.product))
  },[dispatch])
  return (
    
    <Container sx={{ m: 3 }} display={"flex"}>
      <Typography gutterBottom variant="h2" component="div" sx={{ml:"25%",mb:5,fontWeight:"bold"}}>
        QR CODE INFORMATION
      </Typography>
    <Box>
     
      <DetailProduct>
        <Box>
        <Typography gutterBottom variant="h4" component="div">
        {information.productName}
      </Typography>
        <CardMedia
          component="img"
          height="240"
          image={information.image && information.image.url}
          alt="img not found"
        />
        </Box>

        <Card sx={{ p: 2 }}>
          <ItemProduct>
            <h2>Service provided by :</h2> 
            <h3>{information.providerName}</h3>
          </ItemProduct>
          <ItemProduct>
            <h2>Client name:</h2> 
            <h3>{information.name} {information.lastName}</h3>
          </ItemProduct>
          <ItemProduct>
           <h2>Active:</h2> 
           <h3>{information.redeemed?"No":"Yes"}</h3>
          </ItemProduct>
        </Card>
      </DetailProduct>
    </Box>
  </Container>
    
    
  )
}

export default QRCode