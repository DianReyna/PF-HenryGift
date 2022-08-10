import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../CommonStyled.js";
import { useNavigate } from "react-router-dom";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  background-color: red;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
export default function CreateProvider() {
  return (
    <StyledCreateProduct>
      <StyledForm>
        <h3>Create a Product</h3>
        <label> Name</label>
        <input type="text" placeholder="Name" required />
        <label>price</label>
        <input type="number" placeholder="Price" required />
        <label>text</label>
        <input type="text" placeholder="Short Description" required />
        <PrimaryButton type="submit">Create</PrimaryButton>
      </StyledForm>
      <ImagePreview>imagen</ImagePreview>
    </StyledCreateProduct>
  );
}
