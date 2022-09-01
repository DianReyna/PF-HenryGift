import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Imagen = styled.img`
  width: 50%;
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
  background-color: lightblue;
`;

export const ReviewsComp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const DetailBox = styled.div`
  width: 43%;
  display: flex;
  flex-wrap: wrap;
`;

export const GroupFeats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const CardsProducts = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const PaymentImg = styled.img`
  width: 50%;
`;
