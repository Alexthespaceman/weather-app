import React, { Component } from "react";
import Header from "./Header";
import HomeScreen from "./HomeScreen";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeScreen />
      </div>
    );
  }
}

export default Home;
