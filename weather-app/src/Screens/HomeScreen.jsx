// import { Link } from "@reach/router";
import React, { Component } from "react";
import WeatherStation from "../components/WeatherStation";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <WeatherStation />
      </div>
    );
  }
}

export default HomeScreen;
