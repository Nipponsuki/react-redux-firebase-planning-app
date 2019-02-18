import React from "react";
import styled from "styled-components";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 500px) {
    height: 50%;
    overflow-y: auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProjectList = ({ projects }) => {
  return (
    <StyledList>
      {projects &&
        projects.map(item => (
          <StyledLink to={`/project/${item.id}`} key={item.id}>
            <ProjectSummary project={item} />
          </StyledLink>
        ))}
    </StyledList>
  );
};

export default ProjectList;
