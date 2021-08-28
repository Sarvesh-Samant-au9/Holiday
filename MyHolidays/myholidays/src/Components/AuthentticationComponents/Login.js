import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [emailstate, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const credentials = {
    admin: "admin@gmail.com",
    password: "123456789",
  };
  const history = useHistory();
  const [submitState, setSubmitState] = useState(false);
  const onclickHandler = (e) => {
    e.preventDefault();
    setSubmitState(true);
    setTimeout(() => {
      setSubmitState(false);
    }, 2000);
    if (
      passwordState === credentials.password &&
      emailstate === credentials.admin
    ) {
      history.push("/todo");
    }
  };
  return (
    <LoginFormContainer>
      <LoginForm onSubmit={onclickHandler}>
        <h3>Login Form</h3>
        <LoginInput>
          <label htmlFor="email">
            Email or Phone
            <br />
            <input
              type="email"
              onChange={(e) => setEmailState(e.target.value)}
              value={emailstate}
            />
            <p style={{ color: "red" }}>
              {submitState && emailstate !== credentials.admin ? (
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
              {submitState && passwordState !== credentials.password ? (
                <span>Enter Correct Password</span>
              ) : (
                ""
              )}
            </p>
          </label>
        </LoginInput>
        <LoginButton type="submit" onSubmit={onclickHandler}>
          Login
        </LoginButton>
        <p style={{ marginTop: "10px" }}>
          Not a member? <span style={{ color: "#15a1ff" }}>Sign Up Now</span>
        </p>
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
    width: 80vw !important;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;
const LoginButton = styled.button`
  width: 60%;
  background: linear-gradient(to right, #22cbff 30%, #ac53ff 70%);
  color: white;
  padding: 10px 5px;
  border: none;
  outline: none;
  border-radius: 6px;
`;

const LoginInput = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  label {
    display: block;
    padding-bottom: 5px;
  }
  input {
    border: none;
    border: 2px solid black;
    padding: 5px 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export default Login;
