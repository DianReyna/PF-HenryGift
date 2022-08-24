import React from 'react';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "styled-components";
const Container= styled.div`
  max-width:45rem;
  margin:1rem;
`;

export default function QuestionsPurchase() {
  return (
    
     <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Henry-Gift?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you are looking for an original gift, Henry-Gift experiences are the best option!
           No matter the reason, no matter the occasion, it only matters to make someone happy.
          Each Henry-Gift includes a catalog with a selection of experiences. 
          The honoree can choose the one they like best and book directly with the place.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you have discounts buying in quantity?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We do not have discounts available for bulk purchases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>If I want to give gifts for 2 people, how many Henry-Gift box do I have to buy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The experiences included in Henry-Gift of some categories are for two people.
           So if you buy a Henry-Gift, the experience can be carried out by two people 
           who attend together.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
   
   
  );
}
