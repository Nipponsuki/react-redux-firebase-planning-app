import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import singicon from "../../assets/images/sign-up.png";
import login from "../../assets/images/sign-in.png";

const StyledSignoutLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-bottom: 2rem;
`;

const SignInButton = styled.button`
  background: linear-gradient(45deg, #11998e 30%, #38ef7d 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(39, 196, 135, .3);
  color: white;
  height: 48px;
  padding: 0 30px;
  width: 100px;
  transition: all, .3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transform: translateY(13px);


  @media (max-width: 500px) {
    margin-right: .5rem;
	 margin-bottom: .5rem;
  }

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(39, 196, 135, .8);
    /* transform: scale(1.05); */
  }  }
`;

const ImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  img {
    width: 100%;
    margin: 0 auto;
  }
`;

const SignedLinks = () => {
  return (
    <StyledSignoutLinks>
      <StyledNavLink
        to="/signin"
        activeStyle={{
          backgroundColor: "rgba(255,255,255, .6)",
          borderRadius: "3px"
        }}
      >
        <SignInButton>
          <ImageContainer>
            <img src={login} alt="sign" />
          </ImageContainer>
        </SignInButton>
      </StyledNavLink>
      <StyledNavLink
        to="/signup"
        activeStyle={{
          backgroundColor: "rgba(255,255,255, .6)",
          borderRadius: "3px"
        }}
      >
        <SignInButton>
          <ImageContainer>
            <img src={singicon} alt="sign" />
          </ImageContainer>
        </SignInButton>
      </StyledNavLink>
    </StyledSignoutLinks>
  );
};

export default SignedLinks;
