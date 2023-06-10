import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
`;

export const BackgroundImg = styled.img`
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Holder = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const LeftHolder = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  padding: 0 12px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 6px 0;
`;

export const Desc = styled.p``;

export const RightHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 0 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LoginBtnGoogle = styled.button`
  width: 200px;
  display: flex;
  margin: 2px 0;
  cursor: pointer;
  padding: 6px 24px;
  background: white;
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border: 1px solid lightgray;
  /* font-family: "Pangolin", cursive; */

  transition: all 0.3s ease;

  :hover {
    background-color: #f0f0f0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const LoginText = styled.p`
  border: 0;
  margin: 6px;
  font-size: 16px;
  background-color: transparent;
`;

export const GoogleLogo = styled.img`
  width: 24px;
  height: auto;
`;

// Form

export const FormHolder = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  margin: 8px 0;
`;

export const InputContainer = styled.div`
  margin-bottom: 24px;
`;

export const InputHolder = styled.div``;

export const Label = styled.label`
  padding: 0 4px;
  font-size: 14px;
  margin: -10px 4px;
  position: absolute;
  background-color: #def7e5;
`;

export const Input = styled.input`
  z-index: 1;
  width: 240px;
  padding: 14px 8px;
  border: 1.8px solid lightgray;
`;

export const DescGoogle = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const LoginBtnHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 80%;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #232e38;
  border: 1px solid lightgray;

  :hover {
    cursor: pointer;
  }
`;

export const CreateAccountLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin-top: -12px;

  :hover {
    color: gray;
  }
`;

// Register Form
