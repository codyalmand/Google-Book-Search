import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import "./App.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
