import React from 'react';
import { Link } from "react-router-dom";
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "styled-components";
const Container= styled.div`
  max-width:45rem;
  margin:1rem;
`;

export default function QuestionsUse() {
  return (
     <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to open my Henry-Gift</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To open your gift, the first thing you have to do is register. You can do it through your Gmail account or with your email. In both cases it is super simple! 
          If you choose to register via Gmail  the registration is automatic <Link to="/register">http://127.0.0.1:5173/register </Link>. To do it with your email,
           you first have to fill in some information that we ask you to get to know you better 😊 
          Once you register you can open your Henry-Gift by entering your code at <Link to="/codebox">http://127.0.0.1:5173/codebox </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What does my Henry-Gift gift include?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will have a catalog of experiences from which you can choose one to do! 
          By activating the  code on our website: <Link to="/codebox">http://127.0.0.1:5173/codebox </Link>, 
          you will be able to access the catalog. Each experience will detail exactly what it includes:
           how many people it is for and what it offers. It is not associated with an amount or value.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do you book the experience?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To reserve,you must communicate directly with the place (the contact information appears in the description), 
          and make your reservation indicating your Henry-Gift code.
          All reservations are made in advance and are subject to availability and conditions 
          of the experience provider.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I use the Henry-Gift ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By activating the code on our website: <Link to="/codebox">http://127.0.0.1:5173/codebox </Link>,
           you will be able to see the catalog of your gift.
            Each experience will detail exactly what it includes:
             how many people it is for and what it offers.
              It is not associated with an amount or value.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I forgot the password, how can I recover it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you forgot your password, you can reset it from the following 
          link  <Link to="/login/forgot-password">http://127.0.0.1:5173/login/forgot-password </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I access my account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you are already registered, you can enter your profile from the following
          link <Link to="/login">http://127.0.0.1:5173/login </Link>.
          You can enter with Gmail (automatically) or with your registered email.
          If you have already activated your code, remember to enter the same way you registered the first time in order to see your gift or your purchase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How many people is the Henry-Gift for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The number of people who can enjoy the experience will depend
           on each Henry-Gift and the selected activity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I use my Henry-Gift more than once?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No. The codes are for single use. You can choose one of the experiences
           included in the catalog of your Henry-Gift. At the time of booking,
            the corresponding Henry-Gift code must be provided.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
   
  );
}
