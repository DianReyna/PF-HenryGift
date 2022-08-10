import styled from "styled-components";

export const AdminHeaders = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  padding: 9px 12px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;
export const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;

export const View = styled.button`
  background-color: rgb(114, 225, 40);
`;

export const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;
