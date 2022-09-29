import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
const Container = styled.div`
  max-width: 45rem;
  margin: 1rem;
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
            To open your gift, the first thing you have to do is register. You
            can do it through your Gmail account or with your email. In both
            cases it is super simple! If you choose to register via Gmail the
            registration is automatic{" "}
            <Link to="/register" style={{ color:"#BF360C" }}>link</Link>. To do it with your
            email, you first have to fill in some information that we ask you to
            get to know you better 😊 Once you register you can open your
            Henry-Gift by entering your code at{" "}
            <Link to="/codebox" style={{ color:"#BF360C" }}>link</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What does my Henry-Gift box include?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will have a catalog of experiences from which you can choose one
            ! By activating the code on our website {" "}
            <Link to="/codebox" style={{ color:"#BF360C" }}> link </Link>, you will be able to
            access the catalog. Each experience will detail exactly what it
            includes: how many people it is for and what it offers. It is not
            associated with an amount or value.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do you book the experience?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After to receive a email with the QR code,you must communicate directly
            with the place (the contact information appears in the description), and
            make your reservation showing your QR code. All reservations are made in
            advance and are subject to availability and conditions of the
            experience provider.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I forgot the password, how can I recover it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you forgot your password, you can reset it from the following
            link{" "}
            <Link to="/login/forgot-password" style={{ color:"#BF360C" }}>
               forgot password {" "}
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I access my account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are already registered, you can enter your profile from the
            following link <Link to="/userprofile" style={{ color:"#BF360C" }}> go </Link>. You can
            enter with Gmail (automatically) or with your registered email. If
            you have already activated your code, remember to enter the same way
            you registered the first time in order to see your gift or your
            purchase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How many people is the Henry-Gift for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The number of people who can enjoy the experience will depend on
            each Henry-Gift box and the selected activity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I use my Henry-Gift more than once?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. The codes are for single use. You can choose one of the
            experiences included in the catalog of your Henry-Gift box. At the time
            of booking, the corresponding Henry-Gift code must be provided.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
