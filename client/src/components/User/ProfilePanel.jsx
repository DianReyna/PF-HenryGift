import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import  {getUsersById}  from '../../redux/actions/userActions';
import { Typography } from '@mui/material';

import GiftDetail  from '../User/Gift/GiftDetail';
import GiftCards from './Gift/GiftCards';

const Container = styled.div`
  padding: 2rem 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;`

  const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  `

  const ImageDetailBox = styled.div`
    
  `
  const InfoDetailBox = styled.div`
  
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
  


export default function ProfilePanel() {
  
    const dispatch = useDispatch();
   
    const {user}  = useSelector((state) => state.auth);
    const {userDetail} = useSelector((state)=> state.users)
 
    console.log(user)
   
    useEffect(()=>{
      dispatch(getUsersById(user._id))
 },[user]);

    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Button variant="Editar" href='/editprofile'>Editar</Button>
      <Button variant="Abrir mi Box" href='codebox'>Abrir mi Box</Button>
      </Menu>
     
    {
      userDetail? 
      <Container >
          <DetailBox>
            <InfoDetailBox >
            <Typography variant="h5" component="div" gutterBottom>
              Informacion de usuario
            </Typography>
              <ItemBox>
              <p>Nombre: {userDetail.first_name}</p>
                </ItemBox>
              <ItemBox>
              <p>Apellido: {userDetail.last_name}</p>
              </ItemBox>
              <ItemBox>
              <p>Email: {userDetail.email}</p>
              </ItemBox>
              <ItemBox>
              <p>Telefono: {userDetail.phone}</p>
              </ItemBox>
              <ItemBox>
              <p>Fecha de nacimiento: {userDetail.dateBirth}</p>
              </ItemBox>
              </InfoDetailBox>
          </DetailBox>
        <CardsProducts>
          <Grid>
            <Typography variant="h5" component="div" gutterBottom>
              Mis Boxes
            </Typography>
               {/* {userDetail.Products && userDetail.Products.map((product)=>{
                  return <ItemProduct key={product.id}>
                    <GiftPriduct
                      id={product.id}
                      imagen={product.image} 
                      name={product.name} 
                      description={product.description}
                      location={product.location}/>
                    </ItemProduct>
                })}  */}
              {/* <GiftDetail/> */}
              <GiftCards/>
          </Grid>
        </CardsProducts>
      </Container>
      :'No tiene compras realizadas'
    }
    
    </div>
  );
}