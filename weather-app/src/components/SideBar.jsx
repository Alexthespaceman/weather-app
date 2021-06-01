import React, { Component } from "react";
class SideBar extends Component {
  // state = { weather: [] };

  // componentDidMount(city) {
  //   api.getLondonData(city).then((cityWeather) => {
  //     return this.setState({ weather: cityWeather });
  //   });
  // }

  // getCityData = (event) => {
  //   const city = event.target.value;
  //   api.getCityWeather(city).then((weather) => {
  //     console.log(weather);
  //     this.setState({ weather: weather });
  //   });
  // };

  render() {
    const { getCityData } = this.props;

    return (
      <div className="sideBar">
        <button
          className="button"
          value="london"
          onClick={() => getCityData("london")}
        >
          London
        </button>
        <button
          className="button"
          value="paris"
          onClick={() => getCityData("paris")}
        >
          Paris
        </button>
        <button
          className="button"
          value="rome"
          onClick={() => getCityData("rome")}
        >
          Rome
        </button>
        <button
          className="button"
          value="barcelona"
          onClick={() => getCityData("barcelona")}
        >
          Barcelona
        </button>
        <button
          className="button"
          value="tokyo"
          onClick={() => getCityData("tokyo")}
        >
          Tokyo
        </button>
        <button
          className="button"
          value="newyork"
          onClick={() => getCityData("newyork")}
        >
          New York
        </button>
        <button
          className="button"
          value="singapore"
          onClick={() => getCityData("singapore")}
        >
          Singapore
        </button>
        <button
          className="button"
          value="melborne"
          onClick={() => getCityData("melborne")}
        >
          Melbourne
        </button>
        <button
          className="button"
          value="losangeles"
          onClick={() => getCityData("losangeles")}
        >
          Los Angeles
        </button>
        <button
          className="button"
          value="dubai"
          onClick={() => getCityData("dubai")}
        >
          Dubai
        </button>
        <button
          className="button"
          value="soul"
          onClick={() => getCityData("soul")}
        >
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
