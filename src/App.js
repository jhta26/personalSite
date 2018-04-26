import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import "./index.css";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";

const store = setupStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/projects" component={ProjectPage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
