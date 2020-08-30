import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";
import HomePage from "./components/HomePage";
import ProjectPageContainer from "./redux/containers/ProjectPageContainer";
import ResumePage from "./components/Resume/ResumePage";
import AboutMePage from "./components/AboutMePage";

const store = setupStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/projects" component={ProjectPageContainer} />
              <Route exact path="/aboutMe" component={AboutMePage} />
              <Route exact path="/resume" component={ResumePage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
