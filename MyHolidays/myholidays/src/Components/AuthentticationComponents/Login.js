import React, { useState } from "react";
import styled from "styled-components";
const Login = () => {
  const [emailstate, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const credentials = {
    admin: "admin",
    password: "123456789",
  };
  return (
    <LoginFormContainer>
      <LoginForm>
        <h3>Login Form</h3>
        <LoginInput>
          <label htmlFor="email">
            Email Id
            <br />
            <input
              type="email"
              onChange={(e) => setEmailState(e.target.value)}
              value={emailstate}
            />
            <p style={{ color: "red" }}>
              {emailstate !== credentials.admin ? (
                <span>Enter Correct Email Address</span>
              ) : (
                ""
              )}
            </p>{" "}
          </label>
          <label htmlFor="password">
            Password <br />
            <input
              type="password"
              onChange={(e) => setPasswordState(e.target.value)}
              value={passwordState}
            />
            <p style={{ color: "red" }}>
              {emailstate !== credentials.password ? (
                <span>Enter Correct Email Address</span>
              ) : (
                ""
              )}
            </p>
          </label>
        </LoginInput>
      </LoginForm>
    </LoginFormContainer>
  );
};
const LoginFormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #22cbff 30%, #ac53ff 70%);
`;
const LoginForm = styled.form`
  width: 30%;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  h3 {
    font-size: 2rem;
    font-family: sans-serif;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const LoginInput = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  label {
    padding: 5px;
    display: block;
  }
  input {
    border: none;
    border: 2px solid black;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
export default Login;
