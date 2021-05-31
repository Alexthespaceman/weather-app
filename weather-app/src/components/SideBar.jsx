import React, { Component } from "react";
import * as api from "../api";
class SideBar extends Component {
  state = { weather: [] };

  componentDidMount(city) {
    api.getLondonData(city).then((cityWeather) => {
      return this.setState({ weather: cityWeather });
    });
  }

  getCityData = (event) => {
    const city = event.target.value;
    api.getCityWeather(city).then((weather) => {
      console.log(weather);
      this.setState({ weather: weather });
    });
  };

  render() {
    console.log(this.state.weather);
    return (
      <div className="sideBar">
        <button className="button" value="london" onClick={this.getCityData}>
          London
        </button>
        <button className="button" value="paris" onClick={this.getCityData}>
          Paris
        </button>
        <button className="button" value="rome" onClick={this.getCityData}>
          Rome
        </button>
        <button className="button" value="barcelona" onClick={this.getCityData}>
          Barcelona
        </button>
        <button className="button" value="tokyo" onClick={this.getCityData}>
          Tokyo
        </button>
        <button className="button" value="newyork" onClick={this.getCityData}>
          New York
        </button>
        <button className="button" value="singapore" onClick={this.getCityData}>
          Singapore
        </button>
        <button className="button" value="melborne" onClick={this.getCityData}>
          Melbourne
        </button>
        <button
          className="button"
          value="losangeles"
          onClick={this.getCityData}
        >
          Los Angeles
        </button>
        <button className="button" value="dubai" onClick={this.getCityData}>
          Dubai
        </button>
        <button className="button" value="soul" onClick={this.getCityData}>
          Soul
        </button>
      </div>
    );
  }
}

export default SideBar;

{
  /* <section className="nav">
  <h4> sort Articles by : </h4>

  <div className="sort-by-buttons">
    <button
      className="button1"
      value="sort_by=votes"
      onClick={this.sortArticles}
    >
      <FaThumbsUp />
    </button>
    <button className="button2" value="?order=desc" onClick={this.sortArticles}>
      <FaClock />
    </button>
    <button
      className="button3"
      value="sort_by=author"
      onClick={this.sortArticles}
    >
      <FaUser />
    </button>{" "}
  </div>
</section>; */
}
