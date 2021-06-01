import React, { Component } from "react";
import * as api from "../api";
import SideBar from "../components/SideBar";

class LondonScreen extends Component {
  state = { weather: [] };

  componentDidMount(city) {
    api.getLondonData(city).then((cityWeather) => {
      return this.setState({ weather: cityWeather });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.weather !== this.state.weather) {
  //     console.log("weather state has changed.");
  //   }
  // }

  getCityData = (city) => {
    api.getCityWeather(city).then((weather) => {
      this.setState({ weather: weather });
    });
  };

  render() {
    console.log("hello");
    return (
      <div>
        <SideBar getCityData={this.getCityData} />
      </div>
    );
  }
}

export default LondonScreen;
