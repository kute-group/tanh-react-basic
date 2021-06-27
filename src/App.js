import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./containers/home/Home";
import About from "./containers/about/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
