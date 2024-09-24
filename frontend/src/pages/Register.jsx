import React, { useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  background-color: #222831;
  font-family: "Times New Roman", Times, serif; /* Set font to Times New Roman */
`;

const SideBanner = styled.div`
  background: linear-gradient(to bottom, #393e46, #32e0c4);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SideBannerLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
    height: auto;
  }
`;

const SideBannerMockup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
    height: auto;
  }
`;

const SideBannerText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 22px;
    text-align: center;
    max-width: 400px;
    color: #ffffff;
  }
`;

const RegisterForm = styled.div`
  background-color: #222831;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
`;

const RegisterFormTitle = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 28px;
    color: #32e0c4;
  }
`;

const RegisterFormInputs = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ffffff; 
    border-radius: 5px;
    background-color: transparent; 
    color: #ffffff; /* White text color */
    transition: border-color 0.3s, color 0.3s; 

    &:hover {
      border-color: #32e0c4;
    }

    &:focus {
      border-color: #32e0c4; 
      outline: none; 
    }
  }
`;

const RegisterFormButton = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: linear-gradient(to left, #393e46, #32e0c4);
    color: #ffffff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    transition: background 0.3s;

    &:hover {
      background: linear-gradient(to right, #393e46, #32e0c4);
    }
  }
`;

const RegisterFormSignin = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    color: #ffffff;

    .highlighted {
      color: #32e0c4; 
      cursor: pointer;
      transition: color 0.3s; 

      &:hover {
        color: #ffffff; 
      }
    }
  }
`;

/* Handel form input data*/
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmissionMessage("Got your response!");
  };

  return (
    <MainDiv>
      <SideBanner>
        <SideContainer>
          <SideBannerLogo>
            <img src="..\assets\LOGO.png" alt="Tasky Logo" />
          </SideBannerLogo>
          <SideBannerMockup>
            <img src="..\assets\Desktop.png" alt="Desktop" />
          </SideBannerMockup>
          <SideBannerText>
            <p>
              Easy to use dashboard <br />
              Choose the best product to get your tasks done!
            </p>
          </SideBannerText>
        </SideContainer>
      </SideBanner>

      <RegisterForm>
        <RegisterFormContainer onSubmit={handleSubmit}>
          <RegisterFormTitle>
            <h1>Create Your Account</h1>
          </RegisterFormTitle>
          <RegisterFormInputs>
            <Inputs>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
            </Inputs>
            <Inputs>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            </Inputs>
            <Inputs>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            </Inputs>
            <Inputs>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            </Inputs>
          </RegisterFormInputs>
          <RegisterFormButton>
            <button type="submit">Register</button>
          </RegisterFormButton>
          <RegisterFormSignin>
            <p>
              Already have an account? <span className="highlighted">Sign In</span>
            </p>
          </RegisterFormSignin>
          {submissionMessage && <p>{submissionMessage}</p>}
        </RegisterFormContainer>
      </RegisterForm>
    </MainDiv>
  );
};

export default Register;