import React from "react";
import styled from "styled-components";

import "./loading.css";

function Loading() {
  return (
    <Wrapper>
      <span className="loader"></span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #def7e5;
`;

export default Loading;
