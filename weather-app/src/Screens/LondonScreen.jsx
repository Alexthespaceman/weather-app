import React, { Component } from "react";
import * as api from "../api";
import SideBar from "../components/SideBar";
import IconFunction from "../functions/IconFunction";
import ImageFuction from "../functions/ImageFuction";
import weatherDescription from "../functions/tempFunction";

class LondonScreen extends Component {
  state = {
    weather: [{ description: "Sun", temperature: "21", wind: "23 k/h" }],
  };

  componentDidMount(city) {
    api.getLondonData(city).then((cityWeather) => {
      return this.setState({ weather: cityWeather });
    });
  }

  getCityData = (city) => {
    api.getCityWeather(city).then((weather) => {
      console.log(weather);
      return this.setState({ weather: weather });
    });
  };

  render() {
    return (
      <div className="global-weather-screen">
        <div className="weather-station">
          <div className="font-loader-two">local weather in </div>
          <div className="station">
            {ImageFuction("rain")}
            <div className="weather-icon">{IconFunction("rain")}</div>
            <div className="primary-weather">
              <div className="temp">{weatherDescription(24, 24)}</div>
              <div className="wind">Wind Speed is {this.state.wind} </div>
              <div className="description"> and {this.state.description}</div>
            </div>

            <div className="three-day-forecast">
              <div className="forecast">
                Tomorrow's forecast has highs of {this.state.temperature} and
                wind speeds of
                {this.state.wind}
              </div>
              {/* <div className="forecast">
                {tomorrowsDate.day}
                {day2temp}
                {day2wind}
              </div>
              <div className="forecast">
                {day3}
                {day3temp}
                {day3wind}
              </div> */}
            </div>
          </div>
        </div>
        <SideBar getCityData={this.getCityData} />
      </div>
    );
  }
}

export default LondonScreen;
