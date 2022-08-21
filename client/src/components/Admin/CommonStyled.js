import styled from "styled-components";
//-----Component Headers Admin
export const AdminHeaders = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  padding: 9px 12px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  // background-color: #4b70e2;
  background-color: #f66b0e !important;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;
// ---Styles buttons of data table
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

export const Edit = styled.button`
 border: none;
 outline: none;
 padding: 3px 5px;
 color: white;
 border- radius: 3px;
 cursor: pointer;
 background-color: #4b70e2
`;
// styles form edit

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
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

export const StyledEditProvider = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImagePreview = styled.div`
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

export const ProducContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Lebel = styled.label`
  background-color: pink;
`;
// Form Create styles
export const Create = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  background-color: #4b70e2;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentDialog = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateNew = styled.button`
  border: none;
  outline: none;
  padding: 14px;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-family: arial;
  cursor: pointer;
  background-color: #3085d6;
`;

export const ViewDetail = styled.button`
  border: none;
  outline: none;
  padding: 14px;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-family: arial;
  cursor: pointer;
  background-color: #7fff00;
`;

export const Cancel = styled.button`
  border: none;
  outline: none;
  padding: 15px;
  color: white;
  font-family: arial;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #aaa;
`;
