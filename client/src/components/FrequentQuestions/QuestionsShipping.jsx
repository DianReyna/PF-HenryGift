import React from 'react';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "styled-components";
const Container= styled.div`
  max-width:45rem;
  margin:1rem;
`;

export default function QuestionsShipping() {
  return (
     <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How is the gift sent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The gift is sent by mail. You can send the gift to the email of 
          your recipient or yours and then forward it from your mailbox or print it.
          You will also be able to present the gifts you made in the boxes section 
          of the user profile.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the delivery times by mail?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sending by mail can be immediate (once the payment is credited)
           or scheduled for a particular date and time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I send a Henry-Gift box directly to the person I want to give it to?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If possible! In the purchase process, you can choose to send it to your honoree
           directly. Either by mail, indicating the mail to which to send the gift,
            immediately or by programming a specific date and time.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
