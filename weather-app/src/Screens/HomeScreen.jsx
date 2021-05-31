import { Link } from "@reach/router";
import React, { Component } from "react";
import WeatherStation from "../components/WeatherStation";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <Link to="/londonScreen">
          <button>Check out weather from around the globe?</button>
        </Link>
        <WeatherStation />
      </div>
    );
  }
}

export default HomeScreen;
