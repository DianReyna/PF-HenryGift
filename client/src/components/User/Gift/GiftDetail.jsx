import React, { useEffect } from "react";
import { detailBox } from "../../../redux/actions/boxesActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GiftProduct from "./GiftProduct";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";


const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const DetailBox = styled.div`
width: 43%;
display: flex;
flex-wrap: wrap;
padding-bottom: 50px;
`;

const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
const Imagen = styled.img`
width: 50%;
border-radius: 0.5rem;
object-fit: cover;
width: 100%;
background-color: lightblue;
`;
const CardsProducts = styled.div`
width: 100%;
margin: 2rem 0;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;
const ItemProduct = styled.div``;
const ItemBox = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`;

export default function GiftDetail() {
  const dispatch = useDispatch();
  const { idBox } = useParams();
  const { detail } = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(detailBox(idBox));
  }, [dispatch, idBox]);

  return (
    <div>
      {detail ? (
        <Container>
            <LeftSide>
            <Imagen
              src={detail.image && detail.image.url}
              alt="img not found"
            />
           </LeftSide>
           <DetailBox>
            <div>
              <h1>{detail.name}</h1>
              <ItemBox>
                <h3>About this Bigbox:</h3>
              </ItemBox>
              <ItemBox>
                <p>{detail.detail}</p>
              </ItemBox>
              <ItemBox>
                <PersonIcon />
                <p>For {detail.person} person</p>
              </ItemBox>
              {/* <ItemBox>
                <CardGiftcardIcon />
                <p>Contains options</p>
              </ItemBox> */}
              <ItemBox>
                <StarIcon />
                <p>{detail.ranking}</p>
              </ItemBox>
              {/* <ItemBox>
                <InsertInvitationOutlinedIcon />
                <p>Expiration date: {detail.expiration_date}</p>
              </ItemBox> */}
              {/* <ItemBox>
                <AttachMoneyIcon />
                <p>Price: {detail.price}</p>
              </ItemBox> */}
              </div>
          </DetailBox>
          <CardsProducts>
            <Grid >
              {detail.Products &&
                detail.Products.map((product) => {
                  return (
                    <ItemProduct key={product.id}>
                      <GiftProduct
                        id={product.id}
                        imagen={product.image && product.image.url}
                        name={product.name}
                        description={product.description}
                        location={product.location}
                      />
                    </ItemProduct>
                  );
                })}
            </Grid>
          </CardsProducts>
        </Container>
      ) : (
        "ERROR: Not Found"
      )}
    </div>
  );
}
