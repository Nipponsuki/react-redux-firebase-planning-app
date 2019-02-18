import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, Left, Right } from "./components/layout/Flexgrid";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";
import Loading from "./components/layout/Loading";
import { AnimateOnChange } from "@nearform/react-animation";

class App extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Left>
            <Navbar />
          </Left>
          <Right>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/project/:id" component={ProjectDetails} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/create" component={CreateProject} />
            </Switch>
          </Right>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default Loading(App);
