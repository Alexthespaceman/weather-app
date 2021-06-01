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

  getCityData = (city) => {
    api.getCityWeather(city).then((weather) => {
      return this.setState({ weather: weather });
    });
  };

  render() {
    console.log(this.state.weather);
    return (
      <div>
        <SideBar getCityData={this.getCityData} />
      </div>
    );
  }
}

export default LondonScreen;
