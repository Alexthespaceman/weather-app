import React, { Component } from "react";
import * as api from "../api";

class SearchBar extends Component {
  state = { searchCity: "", weather: [] };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchCity: value });
  };

  handleSubmit = (submitEvent) => {
    const { searchCity } = this.state;
    submitEvent.preventDefault();
    api.getCityWeather(searchCity).then((weather) => {
      this.setState({ searchCity: "", weather: weather });
    });
  };

  render() {
    console.log(this.state.weather);

    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search all Weather
            <input
              onChange={this.handleChange}
              className="text-box"
              type="text"
              name="name"
            />
          </label>
          <input className="text-box" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
