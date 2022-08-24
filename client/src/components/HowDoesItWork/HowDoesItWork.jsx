import React , {useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import imgOne from "../../assets/personThinking.jpg";
import imgTwo from "../../assets/shopping.jpg";

export default function HowDoesItWork() {
  const navigate=useNavigate();
  const box=["Gave me a gift","Want to buy"];
  const [currentBox,setCurrentBox]=useState("");
 const  openGift=()=>{
  navigate('/login')
 }
  return (
    <>
    <Box
      backgroundColor="white"
      display="flex"
      flexDirection={"column"}
      maxWidth={400}
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      marginTop={5}
      marginBottom={5}
      padding={3}
      borderRadius={1}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
    <Box  display="flex">
     <Box>
     <Typography variant="h3" component="h2" sx={{ fontSize: 25, m: 2 ,color:"black"}}>
        Discover Henry-Gift
      </Typography>
      <Typography variant="h3" component={"p"} sx={{ fontSize: 15, m: 1 ,color:"black"}}>
        Henry-Gift is a different way of experiencing unique emotions and
        experiences
      </Typography>
    </Box>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzr1dq96jyTU1M0KtOAEYU2HDZM_dKEAKdIA&usqp=CAU" alt="box-gift" height="150"/>
    </Box>
      <ButtonGroup variant="text" aria-label="text button group">
      {box.map((b,index)=>(
      <Button key={index} onClick={()=>setCurrentBox(b)}>{b}</Button>
    ))}
      </ButtonGroup>
    </Box>

    {currentBox==="Gave me a gift" && ( 
    <Box   
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          color="black"
          backgroundColor="white"
          width={"100%"}>
            <img src={imgOne} alt="person-thinking" height="300"/>
      <Box>
      <Typography variant="h3" component="h3" sx={{ fontSize: 30, m: 1 }}>
      How do I use my code?
      </Typography>
      <Typography  component={"p"} >
            01 Enter the code on our website to active it
      </Typography>
      <Typography  component={"p"} >
      02 Contact the provider and tell them that you have a Henry-Gift code
      </Typography>
      <Typography  component={"p"} >
      03 Coordinate the reservation date and enjoy your experience!
      </Typography> 
      <Button variant="outlined" sx={{  m: 3 }} onClick={openGift}>Open my gift</Button>
      </Box>   
    </Box>)}
    {currentBox==="Want to buy"&&( 
      <Box   
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            color="black"
            backgroundColor="white"
            width={"100%"}>
        <Box>
      <Typography variant="h3" component="h3" sx={{ fontSize: 30, m: 1 }}>
          What can I buy?
      </Typography>
        <Typography  component={"p"} >
        01 You can choose the Henry-Gift box that you want to give away.
        </Typography>
        <Typography  component={"p"} >
        02 Each Henry-Gift box contains a set of experiences.
        </Typography>
        <Typography  component={"p"} >
        03 You guest receives a code and chooses which experience to enjoy
        </Typography> 
        </Box>
        <img src={imgTwo} alt="person-thinking" height="300"/>
      </Box>
    )}
    {(currentBox==="Gave me a gift"||currentBox==="Want to buy")&&(
      <Box 
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      marginBottom={5}
      backgroundColor="#f44336"
      width={"100%"}>
       <Typography variant="h3" component="h2" sx={{ fontSize: 25, m: 2 ,color:"white"}}>
       Do you still have doubts?
      </Typography> 
      <Button sx={{
        ':hover': {
         bgcolor: '#f44336', 
         color: 'white'},
          m: 1,
          backgroundColor: "white",
          borderColor:"#f44336"}}  
          variant="contained" 
          size="large">
         <Link to="/frequent-questions" style={{ textDecoration: 'none',color:"black" }}>Frequent questions</Link> 
        </Button>
      </Box>
    )}
    </>
  );
}
