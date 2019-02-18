import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logout from "../../assets/images/logout.png";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import defaultUser from "../../assets/images/defaultUser.png";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledSignedLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
    height: 100%;
  }
`;

const SignInButton = styled.button`
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  border: 0;
  border-radius: ${props => (props.circle ? "50%" : "3px")};
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  color: white;
  height: 48px;
  width: 100px;
  padding: 0 30px;
  transition: all, .3s ease;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #000;
  transform: translateY(13px);

  @media (max-width: 500px) {
    margin-right: .5rem;
	 margin-bottom: .5rem;
  }

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.8);
    /* transform: scale(1.05); */
  }  }
`;

const ImageContainer = styled.div`
  width: ${props => (props.widther ? "4.5rem" : "1.5rem")};
  height: ${props => (props.longer ? "4.5rem" : "1.5rem")};
  margin: ${props => (props.userrr ? "20px 0px" : "none")};
  position: relative;

  img {
    width: 100%;
    border-radius: ${props => (props.userr ? "50%" : "none")};
    box-shadow: ${props =>
      props.user ? "0 3px 5px 2px rgba(33, 203, 243, 0.3)" : "none"};
    cursor: pointer;
  }

  p {
    position: absolute;
    top: 20%;
    left: 40%;
    color: #fff;
    font-weight: bold;
  }
`;

const SignedLinks = props => {
  return (
    <StyledSignedLinks>
      <a href="#" onClick={props.signout}>
        <SignInButton>
          <ImageContainer>
            <img src={logout} alt="sign" />
          </ImageContainer>
        </SignInButton>
      </a>
      <StyledNavLink
        to="/create"
        activeStyle={{
          backgroundColor: "rgba(255,255,255, .6)",
          borderRadius: "3px"
        }}
      >
        <SignInButton>New Project</SignInButton>
      </StyledNavLink>
      <ImageContainer longer widther user userr userrr>
        <img
          src={props.profile.photo ? props.profile.photo : defaultUser}
          alt="sign"
        />
        <p>{props.profile.initials}</p>
      </ImageContainer>
    </StyledSignedLinks>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => {
      dispatch(signOut());
    }
  };
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedLinks);
