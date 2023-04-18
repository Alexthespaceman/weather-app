import { Router } from "@reach/router";
import React, { Component } from "react";
import HomeScreen from "../Screens/HomeScreen";
import GlobalScreen from "../Screens/GlobalScreen";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Router>
          <HomeScreen path="/" />
          <GlobalScreen path="/global-screen" />
        </Router>
      </div>
    );
  }
}

export default Home;
