import React from "react";
import styled from "styled-components";

const ContentError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default function Error404() {
  return (
    <ContentError className="hola">
      <h1>Error 404</h1>
      <h6>Sorry</h6>
      <span>this page does not exist</span>
    </ContentError>
  );
}
