import React from "react";
import styled from "styled-components";
import moment from "moment";
import defaultUser from "../../assets/images/defaultUser.png";

const Project = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  height: 10rem;
  position: relative;
  z-index: 99;
  box-shadow: 0 3px 5px 2px rgb(141, 147, 250, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  @media (max-width: 500px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }
  &:hover:after {
    transform: translateY(1.5rem) scaleX(0.95);
    opacity: 0.7;
  }
  &:hover:before {
    transform: translateY(1.5rem) scaleX(0.95);
    opacity: 0.9;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    width: 95%;
    height: 1.5rem;
    border-radius: 3px;
    background: #8f94fb;
    z-index: -1;
    transition: all 0.3s ease;
    opacity: 0;

    @media (max-width: 500px) {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    width: 90%;
    bottom: 0.5rem;
    background: #8f94fb;
    height: 1.5rem;
    border-radius: 3px;
    z-index: -1;
    transition: all 0.3s ease;
    opacity: 0;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const Left = styled.div`
  flex: 0 0 30%;
  background: #fff;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  img {
    width: 100%;
    border-radius: inherit;
    height: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  background-image: linear-gradient(
    45deg,
    rgba(78, 84, 200, 0.8),
    rgba(141, 147, 250, 0.8)
  );
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2rem;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-image: linear-gradient(
      45deg,
      rgba(78, 84, 200, 1),
      rgba(141, 147, 250, 1)
    );
  }

  & > * {
    margin: 0;
  }

  p {
    color: #333;
  }
`;

const ProjectSummary = ({ project }) => {
  return (
    <Project>
      <Left>
        <img src={project.photo ? project.photo : defaultUser} alt="user" />
      </Left>
      <Right>
        <h2>{project.title}</h2>
        <h3>Posted by {project.authorFirstName}</h3>
        <hr />
        <p>
          <em>{moment(project.createdAt.toDate()).calendar()}</em>
        </p>
      </Right>
    </Project>
  );
};

export default ProjectSummary;
