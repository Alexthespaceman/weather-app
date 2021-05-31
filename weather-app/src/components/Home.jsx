import { Router } from "@reach/router";
import React, { Component } from "react";
import HomeScreen from "../Screens/HomeScreen";
import LondonScreen from "../Screens/LondonScreen";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Router>
          <HomeScreen path="/" />
          <LondonScreen path="/londonScreen" />
        </Router>
      </div>
    );
  }
}

export default Home;
