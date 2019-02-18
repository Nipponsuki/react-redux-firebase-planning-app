import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import defaultBgk from "../../assets/images/defaultBgk.jpg";
import { AnimateOnChange } from "@nearform/react-animation";

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 60%;
    border-radius: 3px;
  }
`;

const ContentWrapper = styled.div`
  background: linear-gradient(45deg, #e0eafc, #cfdef3);
  width: 70%;
  transform: translateY(-14rem);
  border-radius: 3px;
  padding: 1rem 2rem;
  box-shadow: 0px 10px 6px -4px rgba(217, 228, 249, 0.75);

  @media (max-width: 500px) {
    width: 100%;
    padding: 0.5rem 0.7rem;
  }
`;

const DateTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoWrappper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  img {
    width: 100%;
    margin: 0 auto;
    border-radius: 50%;
  }
`;

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (!project) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Wrapper>
        <TitleImageContainer>
          <img src={project.bgk ? project.bgk : defaultBgk} alt="blog" />
        </TitleImageContainer>
        <ContentWrapper>
          <DateTitleWrapper>
            <h2>{project.title}</h2>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </DateTitleWrapper>
          <p>{project.content}</p>
          <UserInfoWrappper>
            <ImageContainer>
              <img
                src={project.photo ? project.photo : defaultBgk}
                alt="user"
              />
            </ImageContainer>
            <p>
              By {project.authorFirstName} {project.authorLastName}{" "}
            </p>
          </UserInfoWrappper>
        </ContentWrapper>
      </Wrapper>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
