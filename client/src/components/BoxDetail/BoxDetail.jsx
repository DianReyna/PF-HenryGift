import React, { useEffect } from "react";
import { detailBox } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import PersonIcon from "@mui/icons-material/Person";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import ReviewBar from "../ReviewBar/ReviewBar";
import AddToCart from "../BoxCard/Sections/AddToCart";
import Favorite from "../BoxCard/Sections/Favorite";
import Reviews from "../Reviews/Reviews";
import paymentMethods2 from "../../assets/paymentMethods2.jpg";
import {
  Container,
  LeftSide,
  Imagen,
  ReviewsComp,
  DetailBox,
  GroupFeats,
  CardsProducts,
  ItemBox,
  PaymentMethod,
  PaymentImg,
} from "./BoxDetail.js";

export default function BoxDetail() {
  const dispatch = useDispatch();
  const { idBox } = useParams();
  const { detail } = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(detailBox(idBox));
  }, [dispatch, idBox]);

  const allProducts = detail.Products?.filter((item) => item.active === true);
  return (
    <div>
      {detail ? (
        <Container>
          <LeftSide>
            <Imagen
              src={detail.image && detail.image.url}
              alt="img not found"
            />
            <ReviewsComp>
              <ReviewBar id={idBox} />
              <Reviews id={idBox} />
            </ReviewsComp>
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
              <ItemBox>
                <CardGiftcardIcon />
                <p>Contains options</p>
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
                <div>
                  Add to favs:
                  <Favorite id={detail.id} />
                </div>
              </GroupFeats>
              {/* <PaymentMethod>
                <PaymentImg src={paymentMethods2} alt="payment methods" />
              </PaymentMethod> */}
            </div>
          </DetailBox>
          <CardsProducts>
            {allProducts &&
              allProducts.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard
                      id={product.id}
                      imagen={product.image.url}
                      name={product.name}
                      description={product.description}
                      location={product.location}
                    />
                  </div>
                );
              })}
          </CardsProducts>
        </Container>
      ) : (
        "ERROR: Not Found"
      )}
    </div>
  );
}
