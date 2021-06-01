import { Link } from "@reach/router";
import React, { Component } from "react";
import WeatherStation from "../components/WeatherStation";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <WeatherStation />
        <Link to="/londonScreen">
          <button className="global-weather">
            Check out weather from around the globe?
          </button>
        </Link>
      </div>
    );
  }
}

export default HomeScreen;
