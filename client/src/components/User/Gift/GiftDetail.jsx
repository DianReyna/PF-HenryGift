import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import GiftProduct from "./GiftProduct";

import FormProduct from "../../Form/FormProduct";


const Container = styled.div`
  padding: 2rem 3rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;`

  const myGiftBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  `

  const ImagemyGiftBox = styled.div`
    
  `
  const InfomyGiftBox = styled.div`
  
  `

  const Imagen = styled.img`
    border: 1px solid black;
    border-radius: 0.5rem;
    object-fit: cover;
    width: 100%;
  `
  const CardsProducts = styled.div`
    margin: 2rem 0;
  `
  const ItemProduct = styled.div`
  
  `
  const ItemBox = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
  `
    
  export default function GiftDetail() {

  const dispatch = useDispatch();
  const {idBox} = useParams()
  const {detail} = useSelector((state) => state.boxes)
  
  useEffect(() => {
    dispatch(detailBox(idBox))
  }, [dispatch,idBox])
  
  

  return (
    <div>
    {
      detail? 
      <Container >
          <DetailBox>
            <ImageDetailBox>
              <Imagen src={detail.image} alt='img not found'/>
            </ImageDetailBox>
            <InfoDetailBox >
              <h1>{detail.name}</h1>
              <ItemBox>
                <h3>About this Bigbox:</h3>
                </ItemBox>
              <ItemBox>
              <p>{detail.detail}</p>
              </ItemBox>
              <ItemBox>
                <PersonIcon />
                <p>For {detail.person} person</p>
              </ItemBox>
              <ItemBox>
                <CardGiftcardIcon />
                <p>Contains  options</p>
              </ItemBox>
              <ItemBox>
                <StarIcon/>
              <p>{detail.ranking}</p>
              </ItemBox>
              <ItemBox>
                <InsertInvitationOutlinedIcon/>
              <p>Expiration date: {detail.expiration_date}</p>
              </ItemBox>
              <ItemBox>
                <AttachMoneyIcon/>
              <p>Price: {detail.price}</p>
              </ItemBox>
            </InfoDetailBox>
          </DetailBox>
           <CardsProducts>
          <Grid>
                {detail.Products && detail.Products.map((product)=>{    
                   return <ItemProduct key={product.id}>
                    <GiftProduct                     
                      id={product.id}
                      imagen={product.image} 
                      name={product.name} 
                      description={product.description}
                      location={product.location}/>
                    </ItemProduct>
                })}           
             </Grid>
        </CardsProducts>
      </Container>
      :'nada'
    }
    </div>
  )
}
