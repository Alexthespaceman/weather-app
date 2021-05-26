import React, { Component } from "react";
import * as api from "../api";
class SideBar extends Component {
  state = { weather: [] };

  getData(city) {
    console.log(city);
    api.getCityData(city).then((cityWeather) => {
      return this.setState({ weather: cityWeather });
    });
  }

  render() {
    console.log(this.state.weather);
    return (
      <div className="sideBar">
        <button className="button" onClick={this.getData("london")}>
          London
        </button>
        <button className="button">Paris</button>
        <button className="button">Berlin</button>
        <button className="button">Barcelona</button>
        <button className="button">Tokyo</button>
        <button className="button">New York</button>
        <button className="button">Jakarta</button>
        <button className="button">Melbourne</button>
        <button className="button">Los Angeles</button>
        <button className="button">Dubai</button>
        <button className="button">Soul</button>
      </div>
    );
  }
}

export default SideBar;
