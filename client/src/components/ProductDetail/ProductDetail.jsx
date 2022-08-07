import React, { useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {detailProduct } from "../../redux/actions/boxesActions";
import styled from 'styled-components';
import { Container,Box } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlaceIcon from '@mui/icons-material/Place'; 

const DetailProduct = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr;
gap: 2rem;
`
const Imagen = styled.img`
    border: 1px solid black;
    border-radius: 0.5rem;
    object-fit: cover;
    width: 100%;
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
    }, [dispatch])
    
  
    return (
      <Container> hola
        <Box>
        <h1>{detailProd.name}</h1>
         <DetailProduct>
            <div>
              <Imagen src={detailProd.image} alt='img not found'/>
            </div>
            <div>
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
            </div>
          </DetailProduct>
        </Box>
        <Box>
             <ItemProduct>
                <h2>Contact</h2>
                </ItemProduct>
                <ItemProduct>
                <h3>Service provided by : </h3>
                <p>{detailProd.Provider.name}</p>
                </ItemProduct>
                <ItemProduct>
                <h3>Phone: </h3>
                <p>{detailProd.Provider.phone}</p>
                </ItemProduct>
                <ItemProduct>
                <h3>Adress: </h3>
                <p>{detailProd.Provider.address}</p>
                </ItemProduct>
        </Box>
      </Container>
    )
  }
  
  