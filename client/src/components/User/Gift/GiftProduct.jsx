import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import styled from "styled-components";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CardWidth = styled.div`
    height: 25rem;
    /* box-shadow: 3px 3px  black; */
`;
const BodyCardProduct = styled.div`
   
height: 15rem;
    position: relative;
`;
const FooterCardProduct = styled.div`
padding-top: 0,7em;
font-weight: bold 


`;
const SupCardProduct = styled.div`
    box-shadow: 1px 1px 2px black;
    border-radius: 3px;
    /* border: 1px solid black; */
`;

export default function GiftProduct({
    id,
    name,
    description,
    location,
    imagen,
}) {




    return (

        <Box sx={{ width: '100%', maxWidth: 500 }}>

            <Link to={`/giftproduct/${id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardWidth>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imagen}
                            alt="img not found"
                        />

                        {/* <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="select"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="select" control={<Radio />} label="Select" />
                            </RadioGroup>
                        </FormControl> */}
                        <CardContent>
                            <BodyCardProduct>
                                <Typography gutterBottom variant="h4" component="div">{name}</Typography>
                                <Typography variant="body2" color="text.secondary">{description}</Typography>
                                <FooterCardProduct>
                                <Typography>
                                    Location: {location}
                                </Typography>
                                </FooterCardProduct>
                            </BodyCardProduct>
                        </CardContent>
                    </CardWidth>
                </Card>
            </Link>
        </Box>

    );
}
