import React from "react";
import * as Styled from "./HomeStyled";

import { auth } from "../../../firebase";

function HomePage() {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Styled.Wrapper>
      <Styled.SignOutBtn onClick={signOut}>Sign Out</Styled.SignOutBtn>
    </Styled.Wrapper>
  );
}

export default HomePage;
