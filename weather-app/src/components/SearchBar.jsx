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
      this.props.insertState(weather, searchCity);
    });
  };

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label className="text-box">
            Search for a city: 
            <input
              onChange={this.handleChange}
              className="text-box"
              type="text"
              name="name"
            />
          </label>
          <input className="search-button" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
