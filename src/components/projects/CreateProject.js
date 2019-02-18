import React, { Component } from "react";
import styled from "styled-components";
import { createProject } from "../../store/actions/projectAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  background: rgba(0, 0, 0, 0);
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
    background-image: linear-gradient(to right, #b2fefa, #0ed2f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }
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
  border-image: linear-gradient(to right, #b2fefa, #0ed2f7);
  border-image-slice: 1;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0);
  color: #fff;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #fff;
  }
`;
const TextArea = styled.textarea`
  width: 20rem;
  margin-bottom: 2rem;
  border: solid 10px transparent;
  border-image: linear-gradient(to right, #b2fefa, #0ed2f7);
  border-image-slice: 1;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0);
  color: #fff;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #fff;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #B2FEFA, #0ED2F7);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(108, 233, 248, .6);
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
    box-shadow: 0 3px 5px 2px rgba(108, 233, 248, .8);
    transform: scale(1.05);
  }  }
`;

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.setState({
      title: "",
      content: ""
    });
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <Container>
        <FormWrapper>
          <h5>Create your new project</h5>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title 🤓"
            />
            <TextArea
              onChange={this.handleChange}
              value={this.state.content}
              type="text-area"
              name="content"
              placeholder="Content 😎"
              rows="10"
              cols="20"
            />
            <Button>Create</Button>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
