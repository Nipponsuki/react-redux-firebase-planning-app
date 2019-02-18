import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect, Provider } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose, createStore } from "redux";
import styled from "styled-components";
import rootReducer from "../../store/reducers/rootReducer";
import { Redirect } from "react-router-dom";

let store = createStore(rootReducer);

const Grid = styled.div`
  display: flex;
  padding: 2rem 5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const StyledDashboard = styled.div`
  flex: 1;
  margin-right: 5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Provider store={store}>
        <Grid>
          <StyledDashboard>
            <ProjectList projects={projects} />
          </StyledDashboard>
          <Notifications notifications={notifications} />
        </Grid>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
