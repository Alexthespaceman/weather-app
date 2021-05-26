import React, { Component } from "react";
import SideBar from "../components/SideBar";
import WeatherStation from "../components/WeatherStation";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <WeatherStation />
        <SideBar />
      </div>
    );
  }
}

export default HomeScreen;
