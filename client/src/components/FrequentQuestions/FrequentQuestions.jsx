import React from 'react';
import QuestionsUse from "./QuestionsUse";
import QuestionsPurchase from "./QuestionsPurchase";
import QuestionsShipping from "./QuestionsShipping";
import { Box,Typography } from "@mui/material";

export default function FrequentQuestions() {
  
  return (
    <>
     <Typography variant="h3" component="h2" sx={{ fontSize: 30, m: 5 }}>
     Frequent Questions
      </Typography>
    <Box
     display="flex"
     flexDirection={"column"}
     alignItems="center"
     justifyContent={"center"}
     color="black">
      <Typography variant="h3" component="h2" sx={{ fontSize: 20, m: 1 ,color:"white"}}>
      Use
      </Typography>
        <QuestionsUse/>
        <Typography variant="h3" component="h2" sx={{ fontSize: 20, m: 1 ,color:"white"}}>
        Purchase
      </Typography>
        <QuestionsPurchase/>
        <Typography variant="h3" component="h2" sx={{ fontSize: 20, m: 1 ,color:"white"}}>
        Shipping
      </Typography>
        <QuestionsShipping/>
         </Box>
    </>
    
  )
}
