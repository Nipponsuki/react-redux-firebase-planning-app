import React, { Component } from "react";
import styled from "styled-components";
import bgk from "../../assets/images/signup-bgk.jpg";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  background: url(${bgk});
  background-size: cover;
  backgroun-position: center center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 1.6rem;
    font-weight: bold;
    background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }
`;

const ErrorDiv = styled.div`
  text-align: center;
  color: red;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 20rem;
  margin-bottom: 2rem;
  height: 2rem;
  border: solid 10px transparent;
  border-image: linear-gradient(to right, #fc5c7d, #6a82fb);
  border-image-slice: 1;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #FC5C7D, #6A82FB);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(152, 118, 207, .6);
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
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(152, 118, 207, .8);
    transform: scale(1.05);
  }  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.setState({
      email: "",
      password: ""
    });
    this.props.history.push("/");
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <Container>
        <FormWrapper>
          <h5>Welcome Back</h5>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              name="email"
              placeholder="Email &#x2709;"
            />
            <Input
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              name="password"
              placeholder="Password &#x1f512;"
            />
            <Button>Login</Button>
            <ErrorDiv>{authError ? <p>Login Failed</p> : null}</ErrorDiv>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
