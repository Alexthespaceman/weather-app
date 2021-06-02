import React, { Component } from "react";
class SideBar extends Component {
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
          value="Sydney"
          onClick={() => getCityData("sydney")}
        >
          Sydney
        </button>
        <button
          className="button"
          value="portland"
          onClick={() => getCityData("portland")}
        >
          portland
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
          value="Seoul"
          onClick={() => getCityData("seoul")}
        >
          Seoul
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
