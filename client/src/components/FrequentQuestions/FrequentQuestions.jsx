import React,{useState} from 'react';
import QuestionsUse from "./QuestionsUse";
import QuestionsPurchase from "./QuestionsPurchase";
import QuestionsShipping from "./QuestionsShipping";
import { Box, Button,Typography } from "@mui/material";

export default function FrequentQuestions() {
  const box=["Use","Purchase","Shipping"];
  const [currentBox,setCurrentBox]=useState("");
  return (
    <>
     <Typography variant="h3" component="h2" sx={{ fontSize: 30, m: 5 ,color:"white"}}>
     Frequent Questions
      </Typography>
    <Box
     display="flex"
     flexDirection={"column"}
     alignItems="center"
     justifyContent={"center"}
     color="black">
      <Box  display="flex" >
      {box.map((b,index)=>(
      <Button key={index} onClick={()=>setCurrentBox(b)}>{b}</Button>))}
      </Box>
      {currentBox==="Use" &&(
        <QuestionsUse/>
      )}
       {currentBox==="Purchase" &&(
        <QuestionsPurchase/>
      )}
       {currentBox==="Shipping" &&(
        <QuestionsShipping/>
      )}
     
    </Box>
    </>
    
  )
}
