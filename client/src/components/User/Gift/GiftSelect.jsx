// import React from 'react'
// import { getProducts } from '../../../redux/actions/productsActions';

// export default function GiftSelect() {

//     const [products, setProducts] = React.useState("");

//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(getProducts(gifts));
//     }, [gifts]);
  
//     const handleChange = (event) => {
//       setPerson(event.target.value);
//     };

//   return (
//     <Box
//     // sx={{background: '#100F0F', color: 'white !important', borderRadius: 2}}
//     >
//       <FormControl 
//       sx={{ width: 120 }}
//       >
//         <InputLabel
//           id="demo-simple-select-label"
//           sx={{ color: "#E16428" }}
//         >
//           Products
//         </InputLabel>
//         {/* <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={gifts}
//           label="persons"
//           onChange={handleChange}
//         >
//           <MenuItem value={""}>No Aplicar</MenuItem>
//           <MenuItem value={1}>1</MenuItem>
//           <MenuItem value={2}>2</MenuItem>
//           <MenuItem value={3}>3</MenuItem>
//         </Select> */}
//       </FormControl>
//     </Box>
//   );
// }

  
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { detailProduct } from "../../redux/actions/boxesActions";
// import styled from "styled-components";
// import { Container, Box, Card, CardMedia, Typography } from "@mui/material";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import PlaceIcon from "@mui/icons-material/Place";

// const DetailProduct = styled.div`
//   display: grid;
//   grid-template-columns: 1.5fr 1fr;
//   gap: 2rem;
// `;
// const ItemProduct = styled.div`
//   display: flex;
//   margin-top: 0.9rem;
//   align-items: center;
// `;

// export default function GiftSelect() {
//   const dispatch = useDispatch();
//   const { idProduct } = useParams();
//   const { detailProd } = useSelector((state) => state.boxes);
//   useEffect(() => {
//     dispatch(detailProduct(idProduct));
//   }, [dispatch, idProduct]);

//   const handleClick = (idProduct) => {
//     dispatch(getProducts(idProduct));
// };
//   return (
//     <Container sx={{ m: 3 }} display={"flex"}> 
//     <FormGroup>
//           <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//           </FormGroup>
//       <Box>
//         <Typography gutterBottom variant="h4" component="div">
//           {detailProd.name}
          
         


//         </Typography>
//         <DetailProduct>
//           <CardMedia
//             component="img"
//             height="240"
//             image={detailProd.image}
//             alt="img not found"
//           />
//           <Card sx={{ p: 2 }}>
//             <ItemProduct>
//               <h2>About :</h2>
//             </ItemProduct>
//             <ItemProduct>
//               <p>{detailProd.description}</p>
//             </ItemProduct>
//             <ItemProduct>
//               <AttachMoneyIcon />
//               <p> {detailProd.price}</p>
//             </ItemProduct>
//             <ItemProduct>
//               <PlaceIcon />
//               <p>{detailProd.location}</p>
//             </ItemProduct>
//           </Card>
//         </DetailProduct>
//       </Box>
//       <Box sx={{ my: 2 }}>
//         <Typography
//           sx={{ textDecoration: "underline" }}
//           gutterBottom
//           variant="h5"
//           component="div"
//         >
//         <Button variant="outlined" onClick={() => handleClick(idProduct)}> 
//            Seleccionar
//          </Button>
//           Contact
//         </Typography>
//         <Typography gutterBottom variant="h6" component="div">
//           Service provided by :
//         </Typography>
//         <Typography gutterBottom variant="h7" component="div">
//           {detailProd?.Provider?.name}
//         </Typography>
//         <Typography gutterBottom variant="h6" component="div">
//           Phone :
//         </Typography>
//         <Typography gutterBottom variant="h7" component="div">
//           {detailProd?.Provider?.phone}
//         </Typography>
//         <Typography gutterBottom variant="h6" component="div">
//           Adress:
//         </Typography>
//         <Typography gutterBottom variant="h7" component="div">
//           {detailProd?.Provider?.address}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }
