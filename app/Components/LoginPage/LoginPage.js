import React, { useEffect, useState } from "react";

import * as Styled from "./LoginStyled";

import { auth, provider } from "../../../firebase";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

function LoginPage(loggedIn) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAccountMade, setUserAccountMade] = useState(false);

  useEffect(() => {
    console.log("Email", email);
    console.log("Password", password);
  }, [email, password]);

  const signInEmail = (thisEmail, thisPassword) => {
    signInWithEmailAndPassword(auth, thisEmail, thisPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(error);
      });
  };

  return (
    <Styled.Container>
      <Styled.BackgroundImg src="https://jthemes.net/themes/html/quizo/version-1/assets/images/bg.png" />
      <Styled.Holder>
        {/* Welcome Message */}
        <Styled.LeftHolder>
          <Styled.Title> Welcome to QuizMaster </Styled.Title>
          <Styled.Desc>
            This is a website made for a project using API from OpenTDB and
            Firebases' Database.
          </Styled.Desc>
        </Styled.LeftHolder>

        {/* Login and Register Screen */}
        {userAccountMade == false ? (
          <Styled.RightHolder>
            <Styled.Title>Sign In</Styled.Title>

            <Styled.FormHolder>
              <Styled.Form>
                <Styled.InputContainer>
                  <Styled.Label>Email</Styled.Label>
                  <Styled.InputHolder>
                    <Styled.Input
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Styled.InputHolder>
                </Styled.InputContainer>
                <Styled.InputContainer>
                  <Styled.Label>Password</Styled.Label>
                  <Styled.InputHolder>
                    <Styled.Input
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Styled.InputHolder>
                </Styled.InputContainer>

                <Styled.LoginBtnHolder>
                  <Styled.LoginButton onClick={signInEmail(email, password)}>
                    Login
                  </Styled.LoginButton>
                </Styled.LoginBtnHolder>
              </Styled.Form>
            </Styled.FormHolder>

            <Styled.DescGoogle>Or Login Using</Styled.DescGoogle>
            <Styled.LoginBtnGoogle onClick={signInGoogle}>
              <Styled.GoogleLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              <Styled.LoginText>Google</Styled.LoginText>
            </Styled.LoginBtnGoogle>

            <Styled.Desc>Don't Have An Account?</Styled.Desc>
            <Styled.CreateAccountLink onClick={() => setUserAccountMade(true)}>
              Create One
            </Styled.CreateAccountLink>
          </Styled.RightHolder>
        ) : (
          <Styled.RightHolder>
            <Styled.Title>Register</Styled.Title>

            <Styled.FormHolder>
              <Styled.Form>
                <Styled.InputContainer>
                  <Styled.Label>Email</Styled.Label>
                  <Styled.InputHolder>
                    <Styled.Input
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Styled.InputHolder>
                </Styled.InputContainer>
                <Styled.InputContainer>
                  <Styled.Label>Password</Styled.Label>
                  <Styled.InputHolder>
                    <Styled.Input
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Styled.InputHolder>
                </Styled.InputContainer>

                <Styled.LoginBtnHolder>
                  <Styled.LoginButton>Register</Styled.LoginButton>
                </Styled.LoginBtnHolder>
              </Styled.Form>
            </Styled.FormHolder>

            <Styled.DescGoogle>Or Register Using</Styled.DescGoogle>
            <Styled.LoginBtnGoogle onClick={signInGoogle}>
              <Styled.GoogleLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              <Styled.LoginText>Google</Styled.LoginText>
            </Styled.LoginBtnGoogle>

            <Styled.Desc>Have An Account?</Styled.Desc>
            <Styled.CreateAccountLink onClick={() => setUserAccountMade(false)}>
              Login
            </Styled.CreateAccountLink>
          </Styled.RightHolder>
        )}
      </Styled.Holder>
    </Styled.Container>
  );
}

export default LoginPage;
