import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SignedLinks from "./SignedLinks";
import SighoutLinks from "./SignoutLinks";
import { connect } from "react-redux";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: row;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  background: #fff;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: -2px 2px 34px -6px rgba(33, 56, 57, 0.6);

  @media (max-width: 500px) {
    display: none;
  }
  margin-bottom: 2rem;

  img {
    width: 100%;
  }
`;

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedLinks profile={profile} /> : <SighoutLinks />;
  return (
    <StyledNavbar>
      <Link to="/">
        <ImageContainer>
          <img src={logo} alt="logo" />
        </ImageContainer>
      </Link>
      {links}
    </StyledNavbar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
