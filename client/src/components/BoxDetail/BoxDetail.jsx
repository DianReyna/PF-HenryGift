import React, { useEffect } from "react";
import { detailBox } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import ReviewBar from "../ReviewBar/ReviewBar";
import AddToCart from "../BoxCard/Sections/AddToCart";
import Favorite from "../BoxCard/Sections/Favorite";

const Container = styled.div`
  padding: 2rem 3rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;

const ImageDetailBox = styled.div``;
const InfoDetailBox = styled.div``;

const GroupFeats = styled.div`
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5rem
`;

const Imagen = styled.img`
  border: 1px solid black;
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
`;
const CardsProducts = styled.div`
  margin: 2rem 0;
`;
const ItemProduct = styled.div``;
const ItemBox = styled.div`
  display: flex;
  margin-top: 0.9rem;
  align-items: center;
`;

export default function BoxDetail() {
  const dispatch = useDispatch();
  const { idBox } = useParams();
  const { detail } = useSelector((state) => state.boxes);
  console.log(detail.id);

  useEffect(() => {
    dispatch(detailBox(idBox));
  }, [dispatch, idBox]);

  const allProducts = detail.Products?.filter((item) => item.active === true);
  return (
    <div>
      {detail ? (
        <Container>
          <DetailBox>
            <ImageDetailBox>
              <Imagen src={detail.image.url} alt="img not found" />
            </ImageDetailBox>
            <InfoDetailBox>
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
              <ItemBox>
                <CardGiftcardIcon />
                <p>Contains options</p>
              </ItemBox>
              <ItemBox>
                <StarIcon />
                <p>{detail.ranking}</p>
              </ItemBox>
              <ItemBox>
                <InsertInvitationOutlinedIcon />
                <p>Expiration date: {detail.expiration_date}</p>
              </ItemBox>
              <ItemBox>
                <AttachMoneyIcon />
                <p>Price: {detail.price}</p>
              </ItemBox>
              <GroupFeats>
                <AddToCart box={detail} />
                <div className="fav-detail">
                  Add to favs:
                  <Favorite id={detail.id} />
                </div>
              </GroupFeats>
            </InfoDetailBox>
          </DetailBox>
          <ReviewBar id={idBox} />
          <CardsProducts>
            <Grid>
              {allProducts &&
                allProducts.map((product) => {
                  return (
                    <ItemProduct key={product.id}>
                      <ProductCard
                        id={product.id}
                        imagen={product.image.url}
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
        "nada"
      )}
    </div>
  );
}
