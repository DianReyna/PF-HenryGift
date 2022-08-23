import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import img from "../../assets/personThinking.jpg";
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
          marginBottom={5}
          color="black"
          backgroundColor="white"
          width={"100%"}>
            <img src={img} alt="person-thinking" height="300"/>
      <Box>
      How do I use my code?
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
      <Box>
      <Box   
           display="flex"
           alignItems="center"
           justifyContent={"center"}
           color="black"
           backgroundColor="white"
           width={"100%"}>
            <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
            Gift with options
       </Typography>
       <Box  width={"50%"}>
       <Typography  variant="h3" component="h2" sx={{ fontSize: 30, m: 2 ,color:"black"}} >
       What can i buy?
       </Typography>
      
       <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
             Give away a set of experiences , your honoree chooses which one he lives
       </Typography>
       <Typography  component={"p"} >
       01 Chose a Henry-gift that you want to give away.
       </Typography>
       <Typography  component={"p"} >
       02 Each Henry-gift contains a set of experiences.
       </Typography> 
       <Typography  component={"p"} >
       03 You honoree receives a code and chooses which experience to enjoy.
       </Typography> 
       </Box>   
     </Box>
     <Box   
           display="flex"
           alignItems="center"
           justifyContent={"center"}
           color="black"
           backgroundColor="white"
           width={"100%"}>
            <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
           A la carte experiences
       </Typography>
       <Box  width={"50%"}>
       <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
       Give away or enjoy a special activity
       </Typography>
       <Typography  component={"p"} >
       01 Chose an experience for you or give away. 
       </Typography>
       <Typography  component={"p"} >
       02 Each experience is a unique proposal.
       </Typography> 
       <Typography  component={"p"} >
       03 Once the gift is received , all that remains is to activate the code and enjoy!.
       </Typography> 
       </Box>   
     </Box>
       <Box   
           display="flex"
           alignItems="center"
           justifyContent={"center"}
           color="black"
           backgroundColor="white"
           width={"100%"}>
            <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
            Getaways in Argentina
       </Typography>
       <Box  width={"50%"}>
       <Typography  variant="h3" component="h2" sx={{ fontSize: 20, m: 2 ,color:"black"}} >
            Enjoy the combination of accommodation and experiences in the best destinations
       </Typography>
       <Typography  component={"p"} >
       01 Each package has a stay and experiences.
       </Typography>
       <Typography  component={"p"} >
       02 Once purchased , just activate the package code.
       </Typography> 
       <Typography  component={"p"} >
       03 Book the stay and the experience for the day you want to enjoy them.
       </Typography> 
       </Box>   
     </Box>
     </Box>
    )}
   
    
    </>
  );
}
