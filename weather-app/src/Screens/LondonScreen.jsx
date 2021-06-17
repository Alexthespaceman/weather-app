import React, { Component } from "react";
import * as api from "../api";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import IconFunction from "../functions/IconFunction";
import ImageFuction from "../functions/ImageFuction";
import weatherDescription from "../functions/tempFunction";

class LondonScreen extends Component {
  state = {
    city: "London",
    weather: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getLondonData().then((cityWeather) => {
      return this.setState({ weather: cityWeather, isLoading: false });
    });
  }

  getCityData = (city) => {
    api.getCityWeather(city).then((weather) => {
      return this.setState({ weather: weather, city: city });
    });
  };

  insertState = (weather, city) => {
    return this.setState({ weather: weather, city: city });
  };

  render() {
    console.log(this.state);
    const { temperature, wind, description } = this.state.weather;
    const { isLoading, city } = this.state;

    if (isLoading) {
      return (
        <div className="loader">
          {" "}
          Sorry, The Weather Station server is down at the moment, please try
          again soon.{" "}
        </div>
      );
    }
    const temp1 = this.state.weather.forecast[0].temperature;
    const wind1 = this.state.weather.forecast[0].wind;
    const temp2 = this.state.weather.forecast[1].temperature;
    const wind2 = this.state.weather.forecast[1].wind;
    const temp3 = this.state.weather.forecast[2].temperature;
    const wind3 = this.state.weather.forecast[2].wind;

    const temp = parseInt(temperature.slice(0, 3));
    return (
      <div className="global-weather-screen">
        <SearchBar insertState={this.insertState} />
        <div className="weather-station">
          <div className="font-loader-two">{`The weather in ${city}`} </div>
          <div className="station">
            {ImageFuction(description)}
            <div className="weather-icon">{IconFunction(description)}</div>
            <div className="primary-weather">
              <div className="temp1">
                {weatherDescription(temp, temperature.slice(0, 6))}
              </div>
              <div className="wind">Wind Speed is {wind} </div>
              <div className="description"> and {description}</div>
            </div>

            <div className="three-day-forecast">
              <div className="forecast">
                Tomorrow's forecast has highs of {temp1} and wind speeds of
                {wind1}
              </div>
              {/* <div className="forecast">
                {temp2}
                {wind2}
              </div>
              <div className="forecast">
                {temp3}
                {wind3}
              </div> */}
            </div>
          </div>
        </div>
        )
        <SideBar getCityData={this.getCityData} />
      </div>
    );
  }
}

export default LondonScreen;
