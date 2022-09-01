import React , {useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import { Box,Grid, Button , Typography } from "@mui/material";
import imgOne from "../../assets/personThinking.jpg";
import imgTwo from "../../assets/shopping.jpg";

export default function HowDoesItWork() {
  const navigate=useNavigate();
  // const box=["Gave me a gift","Want to buy"];
  // const [currentBox,setCurrentBox]=useState("");
 const  openGift=()=>{
  navigate('/login')
 }
  return (
    <>
    <Box
     alignItems="center"
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
    >
    <Box  display="flex"  backgroundColor="white" alignItems="center"  justifyContent={"center"} margin={2} boxShadow={"5px 5px 10px #ccc"}>
     <Box >
     <Typography variant="h3" component="h2" sx={{ fontSize: 25, m: 2 ,color:"black"}}>
        Discover Henry-Gift
        <Button variant="outlined" sx={{
        ':hover': {
         borderColor:"#e16428",
         bgcolor: '#e16428', 
         color: 'white'},
         color:"#e16428",
          m: 1,
          backgroundColor: "white",
          borderColor:"#e16428"}}   onClick={openGift}>Open my gift</Button>
      </Typography>
      <Typography variant="h3" component={"p"} sx={{ fontSize: 15, m: 1 ,color:"black"}}>
        Henry-Gift is a different way of experiencing unique emotions and
        experiences
      </Typography>
    </Box>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzr1dq96jyTU1M0KtOAEYU2HDZM_dKEAKdIA&usqp=CAU" alt="box-gift" height="100"/>
    </Box>
    </Box>

   <Grid container >
   <Grid item  sm={6} xs={12}>
    <Box display="flex"  backgroundColor="white" alignItems="center"  justifyContent={"center"} margin={2} boxShadow={"5px 5px 10px #ccc"}>
    <img src={imgOne} alt="person-thinking" height="200"/>
      <Box sx={{ m: 1,color:"black"}}>
      <Typography variant="h3" component="h3" sx={{ fontSize: 30, m: 1 }}>
      How do I use my code?
      </Typography>
      <Typography  component={"p"} >
          * Enter the code on our website to active it
      </Typography>
      <Typography  component={"p"} >
       * Contact the provider and tell them that you have a Henry-Gift code
      </Typography>
      <Typography  component={"p"} >
      * Coordinate the reservation date and enjoy your experience!
      </Typography> 
      </Box>  
    </Box>
    </Grid>
      <Grid item  sm={6} xs={12}>
        <Box display="flex"  backgroundColor="white" alignItems="center"  justifyContent={"center"} margin={2} boxShadow={"5px 5px 10px #ccc"}>
        <Box sx={{ m: 1, color:"black"}}>
      <Typography variant="h3" component="h3" sx={{ fontSize: 30, m: 1}}>
          What can I buy?
      </Typography>
        <Typography  component={"p"} >
        * You can choose the Henry-Gift box that you want to give away.
        </Typography>
        <Typography  component={"p"} >
        * Each Henry-Gift box contains a set of experiences.
        </Typography>
        <Typography  component={"p"} >
        * You guest receives a code and chooses which experience to enjoy
        </Typography> 
        </Box>
        <img src={imgTwo} alt="person-thinking" height="200"/>
        </Box>
      </Grid>
   </Grid>
   

      <Box 
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      backgroundColor="#e16428"
      width={"100%"}>
       <Typography variant="h3" component="h2" sx={{ fontSize: 25, m: 2 ,color:"white"}}>
       Do you still have doubts?
      </Typography> 
      <Button sx={{
        ':hover': {
         bgcolor: '#e16428', 
         color: 'white'},
          m: 1,
          backgroundColor: "white",
          borderColor:"#e16428"}}  
          variant="contained" 
          size="large">
         <Link to="/frequent-questions" style={{ textDecoration: 'none',color:"black" }}>Frequent questions</Link> 
        </Button>
      </Box>
    
    </>
  );
}
